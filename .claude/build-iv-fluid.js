#!/usr/bin/env node
// Builds iv-fluid-guide.html from iv-fluid-src/:
//   app.jsx  -> plain JavaScript (Babel, React preset), minified with terser
//   styles.css + tailwind.config.js -> static, minified CSS (Tailwind 3)
//   shell.html -> the page skeleton the two are inlined into
// The published page therefore does no in-browser compilation.
//
// Usage:  node .claude/build-iv-fluid.js [--test] [--no-minify]
// Build tools live outside OneDrive (in %LOCALAPPDATA%\med-apps-build) and are
// installed automatically with npm on the first run (shared with the bronchodilator guide).

const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync, execSync } = require('child_process');
process.env.BROWSERSLIST_IGNORE_OLD_DATA = '1'; // Tailwind's autoprefixer data age doesn't matter here

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'iv-fluid-src');
const OUT = path.join(ROOT, 'iv-fluid-guide.html');
const TOOLS = path.join(process.env.LOCALAPPDATA || os.homedir(), 'med-apps-build');
const DEPS = { tailwindcss: '3.4.17', '@babel/standalone': '7.26.4', react: '18.3.1', 'react-dom': '18.3.1', html2canvas: '1.4.1', terser: '5.36.0' };
// Inlined into the page (no CDN at runtime): React and ReactDOM run at load.
const VENDOR = ['react/umd/react.production.min.js', 'react-dom/umd/react-dom.production.min.js'];

function ensureTools() {
  const missing = Object.keys(DEPS).filter(d => !fs.existsSync(path.join(TOOLS, 'node_modules', d, 'package.json')));
  if (!missing.length) return;
  console.log(`Installing build tools into ${TOOLS} ...`);
  fs.mkdirSync(TOOLS, { recursive: true });
  if (!fs.existsSync(path.join(TOOLS, 'package.json'))) {
    fs.writeFileSync(path.join(TOOLS, 'package.json'), JSON.stringify({ name: 'med-apps-build', private: true }, null, 2));
  }
  const pkgs = Object.entries(DEPS).map(([n, v]) => `${n}@${v}`).join(' ');
  execSync(`npm install --no-audit --no-fund ${pkgs}`, { cwd: TOOLS, stdio: 'inherit' });
}

function buildCss() {
  const tmp = path.join(os.tmpdir(), `iv-fluid-${process.pid}.css`);
  const cli = path.join(TOOLS, 'node_modules', 'tailwindcss', 'lib', 'cli.js');
  execFileSync(process.execPath, [cli, '-c', path.join(SRC, 'tailwind.config.js'), '-i', path.join(SRC, 'styles.css'), '-o', tmp, '--minify'], { stdio: 'ignore', env: process.env });
  const css = fs.readFileSync(tmp, 'utf8');
  fs.unlinkSync(tmp);
  return css;
}

async function buildJs() {
  const Babel = require(path.join(TOOLS, 'node_modules', '@babel', 'standalone'));
  const jsx = fs.readFileSync(path.join(SRC, 'app.jsx'), 'utf8');
  const plain = Babel.transform(jsx, { presets: ['react'], filename: 'app.jsx', compact: false }).code;
  if (process.argv.includes('--no-minify')) return plain;
  // Top-level names are kept (the regression tests and the UI audit call them); locals are shortened.
  const { minify } = require(path.join(TOOLS, 'node_modules', 'terser'));
  const out = await minify(plain, { compress: { passes: 2 }, mangle: true, toplevel: false, format: { comments: false } });
  if (!out.code) throw new Error('terser produced no output');
  return out.code;
}

(async () => {
ensureTools();
const started = Date.now();
const css = buildCss();
const js = await buildJs();
const shell = fs.readFileSync(path.join(SRC, 'shell.html'), 'utf8');
// Function replacers so '$' sequences in the code are inserted literally
// Vendor scripts are inlined; a literal "</script" inside them would end the tag early
const read = (v) => fs.readFileSync(path.join(TOOLS, 'node_modules', v), 'utf8').replace(/<\/script/gi, '<\\/script');
const vendor = VENDOR.map(v => `<script>\n${read(v)}\n</script>`).join('\n');
if (/<\/script/i.test(js)) throw new Error('app code contains a literal </script');
const html = shell.replace('<!--__VENDOR__-->', () => vendor).replace('/*__CSS__*/', () => css).replace('/*__JS__*/', () => js);
fs.writeFileSync(OUT, html);
const gz = require('zlib').gzipSync(html).length;
console.log(`Built ${path.relative(ROOT, OUT)}: ${(html.length / 1024).toFixed(0)} KB (${(gz / 1024).toFixed(0)} KB gzipped; CSS ${(css.length / 1024).toFixed(0)} KB, JS ${(js.length / 1024).toFixed(0)} KB) in ${Date.now() - started} ms`);

// `--test` runs the regression suite against the freshly built page
if (process.argv.includes('--test')) {
  try { execFileSync(process.execPath, [path.join(__dirname, 'test-iv-fluid.js')], { stdio: 'inherit' }); }
  catch (e) { process.exitCode = 1; } // failures are already printed by the test
}
})().catch((e) => { console.error('Build failed:', e.message); process.exitCode = 1; });
