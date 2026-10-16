const { useState, useEffect, useMemo } = React;

// --- Native SVG Icons ---
const Search = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>);
const LayoutGrid = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>);
const ListIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>);
const SortIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="15" y1="18" x2="15" y2="6"></line><polyline points="11 10 15 6 19 10"></polyline><line x1="9" y1="6" x2="9" y2="18"></line><polyline points="5 14 9 18 13 14"></polyline></svg>);
const ActivityIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>);
const BoxIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>);
const Check = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="20 6 9 17 4 12"></polyline></svg>);
const X = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>);
const Sparkles = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275-1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4M3 5h4M19 3v4M17 5h4"/></svg>);
const CompareIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="8" height="14" x="3" y="5" rx="2"></rect><rect width="8" height="14" x="13" y="5" rx="2"></rect><line x1="11" x2="13" y1="12" y2="12"></line></svg>);
const Stethoscope = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"></path><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"></path><circle cx="20" cy="10" r="2"></circle></svg>);
const HistoryIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>);
const BookOpen = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>);

const SunIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></svg>);
const MoonIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>);
const AlertTriangle = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>);
const ZapIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>);
const FlameIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>);
const TrendingUpIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>);
const DownloadIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>);
const InfoIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>);
const BrainIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>
    <path d="M12 5v13"/>
    <path d="M15.7 8c.7 0 1.3.4 1.6 1"/>
    <path d="M8.3 8c-.7 0-1.3.4-1.6 1"/>
    <path d="M17.5 14c.3-.4.5-.9.5-1.5"/>
    <path d="M6.5 14c-.3-.4-.5-.9-.5-1.5"/>
  </svg>
);
const DropletIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2.5c-3.5 4.5-6 8-6 11.5a6 6 0 0 0 12 0c0-3.5-2.5-7-6-11.5z" />
    <path d="M12 11v6M9 14h6" strokeWidth="1.8" />
  </svg>
);

// --- Dark theme layer ---
// The UI is written in light-mode Tailwind classes. Rather than add a dark:
// variant to every class, this remaps each colour utility the app uses when
// <html> has class "dark". Anything inside .light-lock (the PNG export cards)
// is excluded so exported images stay light.
(() => {
  const tints = { // Tailwind 300 / 400 / 500 as "r,g,b"
    amber: ['252,211,77', '251,191,36', '245,158,11'], blue: ['147,197,253', '96,165,250', '59,130,246'],
    cyan: ['103,232,249', '34,211,238', '6,182,212'], emerald: ['110,231,183', '52,211,153', '16,185,129'],
    fuchsia: ['240,171,252', '232,121,249', '217,70,239'], green: ['134,239,172', '74,222,128', '34,197,94'],
    indigo: ['165,180,252', '129,140,248', '99,102,241'], lime: ['190,242,100', '163,230,53', '132,204,22'],
    orange: ['253,186,116', '251,146,60', '249,115,22'], pink: ['249,168,212', '244,114,182', '236,72,153'],
    purple: ['216,180,254', '192,132,252', '168,85,247'], red: ['252,165,165', '248,113,113', '239,68,68'],
    rose: ['253,164,175', '251,113,133', '244,63,94'], sky: ['125,211,252', '56,189,248', '14,165,233'],
    stone: ['214,211,209', '168,162,158', '120,113,108'], teal: ['94,234,212', '45,212,191', '20,184,166'],
    violet: ['196,181,253', '167,139,250', '139,92,246'],
    yellow: ['253,224,71', '250,204,21', '234,179,8'],
  };
  const neutrals = {
    'bg-white': 'background-color:#151f32', 'bg-slate-50': 'background-color:#101a2b',
    'bg-slate-50/50': 'background-color:rgba(16,26,43,.5)', 'bg-slate-100': 'background-color:#0b1220',
    'bg-slate-100/70': 'background-color:rgba(11,18,32,.7)', 'bg-slate-100/95': 'background-color:rgba(11,18,32,.95)',
    'bg-slate-200': 'background-color:#24324a', 'bg-slate-900/70': 'background-color:rgba(11,18,32,.7)',
    'text-slate-950': 'color:#f1f5f9', 'text-slate-900': 'color:#f1f5f9', 'text-slate-800': 'color:#e2e8f0', 'text-slate-700': 'color:#cbd5e1',
    'text-slate-600': 'color:#a8b4c6', 'text-slate-500': 'color:#94a3b8', 'text-slate-400': 'color:#7d8ba1',
    'text-slate-300': 'color:#4a5a73', 'text-slate-200': 'color:#33425a',
    'border-slate-100': 'border-color:#1d2940', 'border-slate-200': 'border-color:#263449',
    'border-slate-200/50': 'border-color:rgba(38,52,73,.5)', 'border-slate-300': 'border-color:#33435c',
    'border-slate-700': 'border-color:#33435c',
  };
  const hoverNeutrals = {
    'hover:bg-white': 'background-color:#1b2740', 'hover:bg-slate-50': 'background-color:#1b2740',
    'hover:bg-slate-100': 'background-color:#1f2c45', 'hover:bg-slate-300': 'background-color:#2f3e58',
    'hover:text-slate-600': 'color:#cbd5e1', 'hover:text-slate-700': 'color:#e2e8f0',
  };
  const esc = (c) => c.replace(/[:/]/g, (m) => '\\' + m);
  const rules = [];
  const add = (cls, decl, hover) => rules.push(`html.dark .${esc(cls)}${hover ? ':hover' : ''}:not(.light-lock *){${decl}}`);
  Object.entries(neutrals).forEach(([c, d]) => add(c, d));
  Object.entries(hoverNeutrals).forEach(([c, d]) => add(c, d, true));
  Object.entries(tints).forEach(([f, [c300, c400, c500]]) => {
    [['50', 0.12], ['100', 0.2], ['200', 0.28]].forEach(([shade, a]) => {
      add(`bg-${f}-${shade}`, `background-color:rgba(${c500},${a})`);
      [10, 20, 30, 40, 50, 60, 70, 80, 90].forEach((o) => add(`bg-${f}-${shade}/${o}`, `background-color:rgba(${c500},${(a * o / 100).toFixed(3)})`));
      add(`hover:bg-${f}-${shade}`, `background-color:rgba(${c500},${a + 0.06})`, true);
    });
    ['400', '500', '600'].forEach((s) => add(`text-${f}-${s}`, `color:rgb(${c400})`));
    ['700', '800', '900', '950'].forEach((s) => add(`text-${f}-${s}`, `color:rgb(${c300})`));
    ['400', '500', '600'].forEach((s) => add(`hover:text-${f}-${s}`, `color:rgb(${c300})`, true));
    ['700', '800', '900', '950'].forEach((s) => add(`hover:text-${f}-${s}`, `color:rgb(${c300})`, true));
    [['100', 0.28], ['200', 0.35], ['300', 0.45]].forEach(([s, a]) => {
      add(`border-${f}-${s}`, `border-color:rgba(${c500},${a})`);
      [40, 50, 60, 70, 80].forEach((o) => add(`border-${f}-${s}/${o}`, `border-color:rgba(${c500},${(a * o / 100).toFixed(3)})`));
      add(`hover:border-${f}-${s}`, `border-color:rgba(${c500},.6)`, true);
    });
  });
  const style = document.createElement('style');
  style.id = 'dark-theme-layer';
  style.textContent = rules.join('\n');
  document.head.appendChild(style);
})();

// =====================================================================
// Fluid data
// Every value shown comes from a label (US DailyMed / EU SmPC / Thai FDA SmPC) or is calculated from a
// formula printed in a label or in the Thai FDA register (marked "calc." in the app). Anything else is Unknown.
// Checked 14 Oct 2026.
// =====================================================================

// Salts used in the formulas: molecular weight (g/mol) and the particles each mole gives (mmol per mmol).
// Osmolarity "calc." is the sum of these particles, the same method the US labels use for their "(calc)" value.
const SALTS = {
  NaCl: { mw: 58.44, ions: { na: 1, cl: 1 }, en: 'Sodium chloride', th: 'โซเดียมคลอไรด์' },
  KCl: { mw: 74.55, ions: { k: 1, cl: 1 }, en: 'Potassium chloride', th: 'โพแทสเซียมคลอไรด์' },
  CaCl2_2H2O: { mw: 147.02, ions: { ca: 1, cl: 2 }, en: 'Calcium chloride dihydrate', th: 'แคลเซียมคลอไรด์ไดไฮเดรต' },
  MgCl2_6H2O: { mw: 203.30, ions: { mg: 1, cl: 2 }, en: 'Magnesium chloride hexahydrate', th: 'แมกนีเซียมคลอไรด์เฮกซะไฮเดรต' },
  NaAcetate_3H2O: { mw: 136.08, ions: { na: 1, acetate: 1 }, en: 'Sodium acetate trihydrate', th: 'โซเดียมอะซีเตตไตรไฮเดรต' },
  NaLactate: { mw: 112.06, ions: { na: 1, lactate: 1 }, en: 'Sodium lactate', th: 'โซเดียมแลคเตต' },
  NaGluconate: { mw: 218.14, ions: { na: 1, gluconate: 1 }, en: 'Sodium gluconate', th: 'โซเดียมกลูโคเนต' },
  DextroseH2O: { mw: 198.17, ions: { glucose: 1 }, en: 'Dextrose monohydrate (hydrous)', th: 'เดกซ์โทรสโมโนไฮเดรต' },
  DextroseAnh: { mw: 180.16, ions: { glucose: 1 }, en: 'Dextrose anhydrous', th: 'เดกซ์โทรสแอนไฮดรัส' },
};
// mmol/L of every particle from a formula given in g/L
const ionsFromFormula = (formula) => {
  const out = {};
  formula.forEach(([salt, g]) => { const s = SALTS[salt]; Object.entries(s.ions).forEach(([ion, n]) => { out[ion] = (out[ion] || 0) + n * g * 1000 / s.mw; }); });
  out.osm = Object.values(out).reduce((a, b) => a + b, 0);
  out.dexG = formula.filter(([s]) => s.startsWith('Dextrose')).reduce((a, [, g]) => a + g, 0);
  out.dexHydrous = formula.some(([s]) => s === 'DextroseH2O');
  return out;
};
// Dextrose energy: the US labels state 3.4 kcal per gram of dextrose hydrous; no factor is given for anhydrous dextrose
const KCAL_PER_G_HYDROUS = 3.4;

// Human plasma for comparison: Myburgh & Mythen, N Engl J Med 2013, Table 1 (mmol/L; osmolarity mOsm/L)
const PLASMA = { na: [135, 145], k: [4.5, 5.0], cl: [94, 111], ca: [2.2, 2.6], mg: [0.8, 1.0], hco3: [23, 27], lactate: [1, 2], osm: [291, 291] };

// Thai FDA register: current registrations checked 14 Oct 2026. code = the register's record code (Newcode).

const HOLDERS = {
  otsuka: { en: 'Thai Otsuka Pharmaceutical Co., Ltd.', th: 'บริษัท ไทยโอซูก้า จำกัด' },
  anb: { en: 'A.N.B. Laboratories Co., Ltd.', th: 'บริษัท เอ.เอ็น.บี.ลาบอราตอรี่ จำกัด' },
  ghp: { en: 'General Hospital Products PCL', th: 'บริษัท เยเนอรัล ฮอสปิตัล โปรดัคส์ จำกัด (มหาชน)' },
  tnp: { en: 'Thai Nakorn Patana Co., Ltd.', th: 'บริษัท ไทยนครพัฒนา จำกัด' },
  able: { en: 'Able Medical Co., Ltd.', th: 'บริษัท เอเบิ้ล เมดิคอล จำกัด' },
  pharmasant: { en: 'Pharmasant Laboratories Co., Ltd.', th: 'บริษัท ฟาร์มาสันต์ แล็บบอราตอรี่ส์ จำกัด' },
  innova: { en: 'Pharma Innova Co., Ltd.', th: 'บริษัท ฟาร์ม่า อินโนวา จำกัด' },
  starlab: { en: 'Starlab Co., Ltd.', th: 'บริษัท สตาร์แล็บ จำกัด' },
  bbraun: { en: 'B. Braun (Thailand) Ltd.', th: 'บริษัท บี.บราวน์ (ประเทศไทย) จำกัด' },
  baxter: { en: 'Baxter Healthcare (Thailand) Co., Ltd.', th: 'บริษัท แบกซ์เตอร์ เฮลธ์แคร์ (ประเทศไทย) จำกัด' },
};
const TH_REG = {
  '1A 1427/30': ['U1DR1A1022300142711C', 'NSS 0.9% Sodium Chloride Injection', 'tnp'],
  '1A 424/28': ['U1DR1A1022280042411C', 'Solution of Isotonic Sodium Chloride', 'anb'],
  '1A 28/68': ['U1DR1A1022680002811C', '0.9% Sodium Chloride Injection', 'able'],
  '1A 215/63': ['U1DR1A1022630021511C', 'NSS 0.9% Sodium Chloride Injection', 'pharmasant'],
  '1A 60/33': ['U1DR1A1022330006011C', '0.45% Sodium Chloride Injection B.P.', 'otsuka'],
  '1A 137/32': ['U1DR1A1022320013711C', 'NSS1/2 0.45% Sodium Chloride Injection', 'tnp'],
  '1A 115/27': ['U1DR1A1022270011511C', 'Sodium Chloride 0.45%', 'ghp'],
  '1A 2412/28': ['U1DR1A1022280241211C', 'Sodium Chloride 3%', 'ghp'],
  '1A 337/56': ['U1DR1A1022560033711C', '3% Sodium Chloride', 'innova'],
  '1A 120/30': ['U1DR1A1022300012011C', 'Mannitol 20% Injection', 'anb'],
  '1A 77/52': ['U1DR1A1022520007711C', '20% Mannitol in Water for Injection', 'otsuka'],
  '1A 1988/30': ['U1DR1A1022300198811C', '5% Dextrose Injection U.S.P. D-5-W', 'otsuka'],
  '1A 1174/29': ['U1DR1A1022290117411C', 'Dextrose 5% in Water', 'ghp'],
  '1A 1486/30': ['U1DR1A1022300148611C', 'D5W 5% Dextrose Injection', 'tnp'],
  '1A 423/28': ['U1DR1A1022280042311C', 'Solution of Dextrose 5% in Distilled Water', 'anb'],
  '1A 1102/30': ['U1DR1A1022300110211C', 'Dextrose Injection U.S.P. (D-10-W)', 'otsuka'],
  '1A 1175/29': ['U1DR1A1022290117511C', 'Dextrose 10% in Water', 'ghp'],
  '1A 1487/30': ['U1DR1A1022300148711C', 'D10W 10% Dextrose Injection', 'tnp'],
  '1A 348/28': ['U1DR1A1022280034811C', 'Solution of Dextrose 10% in Distilled Water', 'anb'],
  '2A 431/30': ['U1DR2A1022300043111C', 'Dextrose and Sodium Chloride Injection U.S.P. D-5-S', 'otsuka'],
  '2A 486/30': ['U1DR2A1022300048611C', 'D5S 5% Dextrose and 0.9% Sodium Chloride Injection', 'tnp'],
  '2A 118/29': ['U1DR2A1022290011811C', 'Dextrose 5% in Saline 0.9%', 'ghp'],
  '2A 1017/27': ['U1DR2A1022270101711C', 'Solution of Dextrose 5% in Normal-Saline 0.9%', 'anb'],
  '2C 22/51': ['U1DR2C1022510002211C', '5% Dextrose in 0.9% Sodium Chloride', 'starlab'],
  '2A 430/30': ['U1DR2A1022300043011C', 'Dextrose and Sodium Chloride Injection U.S.P. D-5-1/2S', 'otsuka'],
  '2A 485/30': ['U1DR2A1022300048511C', 'D5-1/2S 5% Dextrose and 0.45% Sodium Chloride Injection', 'tnp'],
  '2A 116/29': ['U1DR2A1022290011611C', 'Dextrose 5% in 1/2 Str. Saline', 'ghp'],
  '2A 45/26': ['U1DR2A1022260004511C', 'Dextrose 5% in 1/2 Normal Saline', 'anb'],
  '2C 20/51': ['U1DR2C1022510002011C', '5% Dextrose in 0.45% Sodium Chloride', 'starlab'],
  '2A 429/30': ['U1DR2A1022300042911C', 'Dextrose and Sodium Chloride Injection U.S.P. D-5-1/3 S', 'otsuka'],
  '2A 120/29': ['U1DR2A1022290012011C', 'Dextrose 5% in 1/3 Str. Saline', 'ghp'],
  '2A 42/26': ['U1DR2A1022260004211C', 'Dextrose 5% in 1/3 Normal Saline', 'anb'],
  '2A 428/30': ['U1DR2A1022300042811C', 'Dextrose and Sodium Chloride Injection U.S.P. D-5-1/4S', 'otsuka'],
  '2A 117/29': ['U1DR2A1022290011711C', 'Dextrose 5% in 1/4 Str. Saline', 'ghp'],
  '2A 1/26': ['U1DR2A1022260000111C', 'D5-1/5S 5% Dextrose and 0.18% Sodium Chloride Injection', 'tnp'],
  '2A 324/27': ['U1DR2A1022270032411C', 'Dextrose 5% in 1/5 Str. Saline', 'ghp'],
  '2A 41/68': ['U1DR2A1022680004111C', '20 mEq KCl in D-5-1/2S (0.15% KCl in 5% Dextrose and 0.45% NaCl)', 'otsuka'],
  '2A 42/68': ['U1DR2A1022680004211C', '40 mEq KCl in D-5-1/2S (0.3% KCl in 5% Dextrose and 0.45% NaCl)', 'otsuka'],
  '2A 646/30': ['U1DR2A1022300064611C', "Lactated Ringer's Injection U.S.P.", 'otsuka'],
  '2A 190/27': ['U1DR2A1022270019011C', "Lactated Ringer's Injection", 'anb'],
  '2A 212/27': ['U1DR2A1022270021211C', "Lactated Ringer's", 'ghp'],
  '2A 488/30': ['U1DR2A1022300048811C', "LRI Lactated Ringer's Injection", 'tnp'],
  '2A 15222/63': ['U1DR2A1022631522211C', "Lactated Ringer's Injection USP", 'able'],
  '2C 18/51': ['U1DR2C1022510001811C', "Lactated Ringer's Solution", 'starlab'],
  '2A 352/28': ['U1DR2A1022280035211C', "Acetar (Acetate Ringer's Injection)", 'otsuka'],
  '2A 304/32': ['U1DR2A1022320030411C', "Acetate Ringer's Injection", 'anb'],
  '2A 158/34': ['U1DR2A1022340015811C', "ARI (Acetate Ringer's Injection)", 'tnp'],
  '2A 15221/63': ['U1DR2A1022631522111C', "Acetate Ringer's Injection", 'able'],
  '2A 289/28': ['U1DR2A1022280028911C', "Acetar-5 (Dextrose 5% in Acetate Ringer's Injection)", 'otsuka'],
  '2A 604/31': ['U1DR2A1022310060411C', "ARI-5 5% Dextrose in Acetated Ringer's Injection", 'tnp'],
  '2C 21/51': ['U1DR2C1022510002111C', "5% Dextrose in Acetated Ringer's", 'starlab'],
  '2A 15082/66 (NG)': ['U1DR2A1052661508211C', 'TOP Balance Salt Solution (Multiple Electrolyte Injection Type 1)', 'otsuka'],
  '2C 16/53': ['U1DR2C1022530001611C', 'Sterofundin ISO', 'bbraun'],
  '2C 1/46 (NBC)': ['U1DR2C1022460000111C', 'Albumin (Human) 20% Baxter', 'baxter'],
  '2C 2/46 (NBC)': ['U1DR2C1022460000211C', 'Human Albumin 20% B. Braun', 'bbraun'],
  '2C 3/46 (NBC)': ['U1DR2C1022460000311C', 'Albumin (Human) 5% Baxter', 'baxter'],
  '2C 4/46 (NBC)': ['U1DR2C1022460000411C', 'Human Albumin 5% B. Braun', 'bbraun'],
  '2C 5/46 (NBC)': ['U1DR2C1022460000511C', 'Albumin (Human) 25% Baxter', 'baxter'],
  '2C 6/46 (NBC)': ['U1DR2C1022460000611C', 'Human Albumin 25% B. Braun', 'bbraun'],
};
// Every record listed on a card was opened on 14 Oct 2026: its formula field matches the card's formula.
const thRecordUrl = (code) => 'https://pertento.fda.moph.go.th/FDA_INFORMATION_DRUG/Home/Public_Information_Drug?Newcode=' + code;

// Sources for values (label = values printed on that document)
const SOURCES = {
  usNaCl09: { cite: '0.9% Sodium Chloride Injection USP (VIAFLO), Baxter, US label (DailyMed)', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=958d35f0-6834-43be-a700-fa58f38b4c19' },
  usNaCl045: { cite: '0.45% and 0.9% Sodium Chloride Injection USP (VIAFLEX), Baxter, US label (DailyMed)', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=14d1173d-d43c-4e7e-a945-35a5d612da19' },
  usNaCl3: { cite: '3% and 5% Sodium Chloride Injection USP, Baxter, US label (DailyMed)', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=181705c7-40e4-4d7d-b9ea-ada99380e7a9' },
  usDex: { cite: 'Dextrose Injection 5% and 10% USP (VIAFLEX Plus), Baxter, US label (DailyMed)', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3bb406a9-f5cb-403a-b1bb-5c4facbea3d5' },
  usDexNaCl: { cite: 'Dextrose and Sodium Chloride Injection USP, Baxter, US label (DailyMed)', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=dcbf1907-1841-4afc-ab5d-a9893a2d7256' },
  usKDexNaCl: { cite: 'Potassium Chloride in 5% Dextrose and Sodium Chloride Injection USP, Baxter, US label (DailyMed)', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c553fed1-3de5-4826-8eff-633b5923bf0b' },
  usLR: { cite: "Lactated Ringer's Injection USP, Baxter, US label (DailyMed)", url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=dad7735c-709b-40ea-ab7a-15577e24a966' },
  usPL: { cite: 'PLASMA-LYTE A Injection pH 7.4, Baxter, US label (DailyMed)', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6ec9e61c-2c26-402f-8604-f446b2e34058' },
  usAlb5: { cite: 'Albumin (Human) 5% Solution USP, Baxter, US label (DailyMed)', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1f66cb7d-6f77-4c4f-9e1e-c75be7be2db9' },
  usAlb: { cite: 'Albumin (Human) 20% Solution USP, Baxter, US label (DailyMed)', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=27d8e8b0-8c20-41ff-80c7-cb151df051f6' },
  usAlb25: { cite: 'Albumin (Human) 25% Solution USP, Baxter, US label (DailyMed)', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=27d8e8b0-8c20-41ff-80c7-cb151df051f6' },
  usMan: { cite: 'Osmitrol (Mannitol Injection USP 20%), Baxter, US label (DailyMed)', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=423c4dbb-bcae-4f76-a0e2-636b04294b0f' },
  thTopBal: { cite: 'TOP Balance Salt Solution, Summary of Product Characteristics, Thai FDA (Thai Otsuka)', url: 'https://ndi.fda.moph.go.th/uploads/drug_detail_corporation/doc/word/1163/09c51bdacb089726f3a2afb88373528e-a1.pdf' },
  thAcetRinger: { cite: "Acetate Ringer's Injection (Able Medical, 2A 15221/63), Summary of Product Characteristic, Thai FDA", url: 'https://ndi.fda.moph.go.th/uploads/drug_detail_corporation/doc/word/1279/f3f314f0cf93470bd742dd647f331448-a1.pdf' },
  euSterofundin: { cite: 'Sterofundin ISO, Summary of Product Characteristics, B. Braun (Medicines Evaluation Board, Netherlands)', url: 'https://www.geneesmiddeleninformatiebank.nl/smpc/h27041_smpc.pdf' },
  thReg: { cite: 'Thai FDA drug register (pertento.fda.moph.go.th), searched 14 Oct 2026', url: 'https://pertento.fda.moph.go.th/FDA_SEARCH_DRUG/SEARCH_DRUG/FRM_SEARCH_DRUG.aspx' },
};

// family: saline | balanced | dextrose | dexsaline | hypertonic
// formula: g/L (from the label or the Thai register record named in formulaSrc)
// label: values printed on labelSrc (na, k, cl, ca, mg in mmol/L; osm mOsm/L; kcal per litre; ph text)
// labelMEq: calcium / magnesium as the label prints them (mEq/L), for the detail view
const FLUIDS = [
  { id: 'nss', short: 'NSS', name: { en: '0.9% NaCl (Normal saline)', th: '0.9% NaCl (นอร์มัลซาไลน์)' }, family: 'saline',
    aliases: ['normal saline', 'nss', 'ns', '0.9%', 'sodium chloride', 'น้ำเกลือ', 'นอร์มัล'],
    formula: [['NaCl', 9]], formulaSrc: 'usNaCl09',
    label: { na: 154, cl: 154, osm: 308, ph: '5.0 (4.5–7.0)' }, labelSrc: 'usNaCl09',
    thai: ['1A 1427/30', '1A 424/28', '1A 28/68', '1A 215/63'] },
  { id: 'half', short: 'NSS/2', name: { en: '0.45% NaCl (Half-normal saline)', th: '0.45% NaCl (ครึ่งนอร์มัลซาไลน์)' }, family: 'saline',
    aliases: ['n/2', 'nss/2', '1/2 nss', 'half normal', '0.45%', 'น้ำเกลือครึ่ง'],
    formula: [['NaCl', 4.5]], formulaSrc: 'usNaCl045',
    label: { na: 77, cl: 77, osm: 154, ph: '5.0 (4.5–7.0)' }, labelSrc: 'usNaCl045',
    thai: ['1A 60/33', '1A 137/32', '1A 115/27'] },
  { id: 'nacl3', short: '3% NaCl', name: { en: '3% NaCl (Hypertonic saline)', th: '3% NaCl (น้ำเกลือเข้มข้น)' }, family: 'hypertonic',
    aliases: ['3%', 'hypertonic saline', 'hts', 'น้ำเกลือเข้มข้น'],
    formula: [['NaCl', 30]], formulaSrc: 'usNaCl3',
    label: { na: 513, cl: 513, osm: 1027, ph: '5.0 (4.5–7.0)' }, labelSrc: 'usNaCl3',
    thai: ['1A 2412/28', '1A 337/56'] },
  { id: 'd5w', short: '5%D/W', name: { en: '5% Dextrose in water', th: '5% เดกซ์โทรสในน้ำ' }, family: 'dextrose',
    aliases: ['d5w', '5%dw', '5% d/w', 'dextrose', 'glucose', 'd-5-w', 'น้ำตาล'],
    formula: [['DextroseH2O', 50]], formulaSrc: 'usDex',
    label: { osm: 252, kcal: 170, ph: '4.0 (3.2–6.5)' }, labelSrc: 'usDex',
    thai: ['1A 1988/30', '1A 1174/29', '1A 1486/30', '1A 423/28'] },
  { id: 'd10w', short: '10%D/W', name: { en: '10% Dextrose in water', th: '10% เดกซ์โทรสในน้ำ' }, family: 'dextrose',
    aliases: ['d10w', '10%dw', '10% d/w', 'dextrose', 'glucose', 'd-10-w'],
    formula: [['DextroseH2O', 100]], formulaSrc: 'usDex',
    label: { osm: 505, kcal: 340, ph: '4.0 (3.2–6.5)' }, labelSrc: 'usDex',
    thai: ['1A 1102/30', '1A 1175/29', '1A 1487/30', '1A 348/28'] },
  { id: 'd5s', short: '5%D/NSS', name: { en: '5% Dextrose in 0.9% NaCl', th: '5% เดกซ์โทรสใน 0.9% NaCl' }, family: 'dexsaline',
    aliases: ['dnss', '5%dnss', 'd5ns', 'd5s', 'd-5-s', 'd/nss'],
    formula: [['DextroseH2O', 50], ['NaCl', 9]], formulaSrc: 'usDexNaCl',
    label: { na: 154, cl: 154, osm: 560, kcal: 170, ph: '4.0 (3.2–6.5)' }, labelSrc: 'usDexNaCl',
    thai: ['2A 431/30', '2A 486/30', '2A 118/29', '2A 1017/27', '2C 22/51'] },
  { id: 'd5s2', short: '5%D/N/2', name: { en: '5% Dextrose in 0.45% NaCl', th: '5% เดกซ์โทรสใน 0.45% NaCl' }, family: 'dexsaline',
    aliases: ['dn/2', '5%dn/2', 'd5n/2', 'd5 1/2ns', 'd5s/2', 'd-5-1/2s', 'd/n/2', '5%d/nss/2'],
    formula: [['DextroseH2O', 50], ['NaCl', 4.5]], formulaSrc: 'usDexNaCl',
    label: { na: 77, cl: 77, osm: 406, kcal: 170, ph: '4.0 (3.2–6.5)' }, labelSrc: 'usDexNaCl',
    thai: ['2A 430/30', '2A 485/30', '2A 116/29', '2A 45/26', '2C 20/51'] },
  { id: 'd5s2k20', short: '5%D/N/2 + KCl 20', name: { en: '5% Dextrose in 0.45% NaCl with KCl 20 mmol/L', th: '5% เดกซ์โทรสใน 0.45% NaCl + KCl 20 mmol/L' }, family: 'dexsaline',
    aliases: ['kcl', 'potassium', 'd5n/2 kcl', 'maintenance', '20 meq'],
    formula: [['DextroseH2O', 50], ['NaCl', 4.5], ['KCl', 1.5]], formulaSrc: 'usKDexNaCl',
    label: { na: 77, k: 20, cl: 97, osm: 447, kcal: 170, ph: '4.5 (3.5–6.5)' }, labelSrc: 'usKDexNaCl',
    thai: ['2A 41/68'] },
  { id: 'd5s2k40', short: '5%D/N/2 + KCl 40', name: { en: '5% Dextrose in 0.45% NaCl with KCl 40 mmol/L', th: '5% เดกซ์โทรสใน 0.45% NaCl + KCl 40 mmol/L' }, family: 'dexsaline',
    aliases: ['kcl', 'potassium', 'd5n/2 kcl', '40 meq'],
    formula: [['DextroseH2O', 50], ['NaCl', 4.5], ['KCl', 3]], formulaSrc: 'usKDexNaCl',
    label: { na: 77, k: 40, cl: 117, osm: 487, kcal: 170, ph: '4.5 (3.5–6.5)' }, labelSrc: 'usKDexNaCl',
    thai: ['2A 42/68'] },
  // Thai 1/3 saline is 0.3% NaCl (Thai Otsuka register record); the US product is 0.33%, so values are calculated
  { id: 'd5s3', short: '5%D/N/3', name: { en: '5% Dextrose in 0.3% NaCl', th: '5% เดกซ์โทรสใน 0.3% NaCl' }, family: 'dexsaline',
    aliases: ['dn/3', '5%dn/3', 'd5n/3', 'd-5-1/3s', 'd/n/3', '1/3'],
    formula: [['DextroseH2O', 50], ['NaCl', 3]], formulaSrc: 'thReg', formulaReg: '2A 429/30',
    label: {}, labelSrc: null,
    thai: ['2A 429/30', '2A 120/29', '2A 42/26'] },
  { id: 'd5s4', short: '5%D/N/4', name: { en: '5% Dextrose in 0.225% NaCl', th: '5% เดกซ์โทรสใน 0.225% NaCl' }, family: 'dexsaline',
    aliases: ['dn/4', '5%dn/4', 'd5n/4', 'd-5-1/4s', 'd/n/4', '1/4'],
    formula: [['DextroseH2O', 50], ['NaCl', 2.25]], formulaSrc: 'thReg', formulaReg: '2A 428/30',
    label: {}, labelSrc: null,
    thai: ['2A 428/30', '2A 117/29'] },
  { id: 'd5s5', short: '5%D/N/5', name: { en: '5% Dextrose in 0.18% NaCl', th: '5% เดกซ์โทรสใน 0.18% NaCl' }, family: 'dexsaline',
    aliases: ['dn/5', '5%dn/5', 'd5n/5', 'd5-1/5s', 'd/n/5', '1/5', '0.18%'],
    formula: [['DextroseH2O', 50], ['NaCl', 1.8]], formulaSrc: 'thReg', formulaReg: '2A 1/26',
    label: {}, labelSrc: null,
    thai: ['2A 1/26', '2A 324/27'] },
  { id: 'lrs', short: 'LRS', name: { en: "Lactated Ringer's (Hartmann's)", th: "แลคเตตริงเกอร์ (Hartmann's)" }, family: 'balanced',
    aliases: ['rls', 'lrs', 'rl', 'ringer lactate', "ringer's lactate", 'hartmann', 'compound sodium lactate', 'lri'],
    formula: [['NaCl', 6], ['NaLactate', 3.1], ['KCl', 0.3], ['CaCl2_2H2O', 0.2]], formulaSrc: 'usLR',
    label: { na: 130, k: 4, ca: 1.35, cl: 109, lactate: 28, osm: 273, kcal: 9, ph: '6.5 (6.0–7.5)' }, labelSrc: 'usLR', labelMEq: { ca: 2.7 },
    thai: ['2A 646/30', '2A 190/27', '2A 212/27', '2A 488/30', '2A 15222/63', '2C 18/51'] },
  { id: 'acetar', short: 'Acetar', name: { en: "Acetar (Ringer's acetate)", th: 'อะซีตาร์ (Ringer\'s acetate)' }, family: 'balanced',
    aliases: ['acetar', 'ars', 'ari', "ringer's acetate", 'acetate ringer', 'ringer acetate', 'acetated ringer'],
    formula: [['NaCl', 6], ['NaAcetate_3H2O', 3.8], ['KCl', 0.3], ['CaCl2_2H2O', 0.2]], formulaSrc: 'thReg', formulaReg: '2A 352/28',
    label: {}, labelSrc: null, phOther: { ph: '6.0–7.5', src: 'thAcetRinger' },
    thai: ['2A 352/28', '2A 304/32', '2A 158/34', '2A 15221/63'] },
  { id: 'acetar5', short: 'Acetar-5', name: { en: "Acetar-5 (5% Dextrose in Ringer's acetate)", th: 'อะซีตาร์-5 (5% เดกซ์โทรสใน Ringer\'s acetate)' }, family: 'balanced',
    aliases: ['acetar-5', 'acetar 5', 'ari-5', 'dextrose acetate ringer', 'd5 ringer acetate'],
    formula: [['NaCl', 6], ['NaAcetate_3H2O', 3.8], ['KCl', 0.3], ['CaCl2_2H2O', 0.2], ['DextroseAnh', 50]], formulaSrc: 'thReg', formulaReg: '2A 289/28',
    label: {}, labelSrc: null,
    thai: ['2A 289/28'], thNote: 'acetar5Other' },
  { id: 'topbal', short: 'Top Balance', name: { en: 'TOP Balance (Multiple electrolytes, type 1)', th: 'ท็อปบาลานซ์ (Multiple electrolytes, type 1)' }, family: 'balanced',
    aliases: ['top balance', 'topbalance', 'multiple electrolyte', 'plasmalyte', 'plasma-lyte'],
    formula: [['NaCl', 5.26], ['NaGluconate', 5.02], ['NaAcetate_3H2O', 3.68], ['KCl', 0.37], ['MgCl2_6H2O', 0.30]], formulaSrc: 'thTopBal',
    label: { na: 140, k: 5, mg: 1.5, cl: 98, acetate: 27, gluconate: 23, osm: 294, kcal: 21, ph: '7.4 (6.5–8.0)' }, labelSrc: 'thTopBal', labelMEq: { mg: 3 },
    sameAs: 'pla',
    thai: ['2A 15082/66 (NG)'] },
  { id: 'sterofundin', short: 'Sterofundin ISO', name: { en: 'Sterofundin ISO', th: 'สเตอโรฟุนดิน ไอเอสโอ (Sterofundin ISO)' }, family: 'balanced',
    aliases: ['sterofundin', 'b. braun', 'bbraun', 'malate'],
    formula: null, formulaSrc: 'euSterofundin',
    label: { na: 145, k: 4, ca: 2.5, mg: 1, cl: 127, acetate: 24, malate: 5, osm: 309, ph: '5.1–5.9' }, labelSrc: 'euSterofundin',
    thai: ['2C 16/53'], thNote: 'sterofundinMg' },
  { id: 'pla', short: 'Plasma-Lyte A', name: { en: 'Plasma-Lyte A (pH 7.4)', th: 'พลาสมาไลท์ เอ (Plasma-Lyte A)' }, family: 'balanced',
    aliases: ['plasma-lyte', 'plasmalyte', 'pla', 'multiple electrolyte', 'baxter'],
    formula: [['NaCl', 5.26], ['NaGluconate', 5.02], ['NaAcetate_3H2O', 3.68], ['KCl', 0.37], ['MgCl2_6H2O', 0.30]], formulaSrc: 'usPL',
    label: { na: 140, k: 5, mg: 1.5, cl: 98, acetate: 27, gluconate: 23, osm: 294, kcal: 21, ph: '7.4 (6.5–8.0)' }, labelSrc: 'usPL', labelMEq: { mg: 3 },
    thai: [] },
  { id: 'alb5', short: 'Albumin 5%', name: { en: 'Human Albumin 5% (50 g/L)', th: 'ฮิวแมน อัลบูมิน 5% (50 ก./ล.)' }, family: 'colloid',
    aliases: ['albumin 5%', 'human albumin 5%', '5% albumin', 'alb5', 'has 5%', 'colloid', 'iso-oncotic', 'อัลบูมิน 5%', 'อัลบูมิน 5'],
    formula: null, formulaSrc: 'usAlb5',
    label: { na: 145, k: 1, cl: 100, osm: 300, kcal: 200, ph: '6.9 (6.4–7.4)' }, labelSrc: 'usAlb5',
    thai: ['2C 3/46 (NBC)', '2C 4/46 (NBC)'] },
  { id: 'alb20', short: 'Albumin 20%', name: { en: 'Human Albumin 20% (200 g/L)', th: 'ฮิวแมน อัลบูมิน 20% (200 ก./ล.)' }, family: 'colloid',
    aliases: ['albumin', 'human albumin', 'alb', 'colloid', '20% albumin', 'has', 'อัลบูมิน'],
    formula: null, formulaSrc: 'usAlb',
    label: { na: 145, k: 1, cl: 100, osm: 300, kcal: 800, ph: '6.9 (6.4–7.4)' }, labelSrc: 'usAlb',
    thai: ['2C 1/46 (NBC)', '2C 2/46 (NBC)'] },
  { id: 'alb25', short: 'Albumin 25%', name: { en: 'Human Albumin 25% (250 g/L)', th: 'ฮิวแมน อัลบูมิน 25% (250 ก./ล.)' }, family: 'colloid',
    aliases: ['albumin 25%', 'human albumin 25%', '25% albumin', 'alb25', 'has 25%', 'colloid', 'hyperoncotic', 'salt poor albumin', 'อัลบูมิน 25%', 'อัลบูมิน 25'],
    formula: null, formulaSrc: 'usAlb25',
    label: { na: 145, k: 1, cl: 100, osm: 300, kcal: 1000, ph: '6.9 (6.4–7.4)' }, labelSrc: 'usAlb25',
    thai: ['2C 5/46 (NBC)', '2C 6/46 (NBC)'] },
  { id: 'man20', short: 'Mannitol 20%', name: { en: 'Mannitol 20% (200 g/L)', th: 'แมนนิทอล 20% (200 ก./ล.)' }, family: 'hypertonic',
    aliases: ['mannitol', 'osmitrol', 'osmotic diuretic', '20% mannitol', 'แมนนิทอล'],
    formula: null, formulaSrc: 'usMan',
    label: { na: 0, k: 0, cl: 0, osm: 1098, kcal: 800, ph: '5.5 (4.5–7.0)' }, labelSrc: 'usMan',
    thai: ['1A 120/30', '1A 77/52'] },
];

// Value of one field: { v, calc, src } or null (Unknown). Label values win; otherwise calculated from the formula.
const CALC_FIELDS = ['na', 'k', 'cl', 'ca', 'mg', 'lactate', 'acetate', 'gluconate', 'osm'];
const fluidCalc = (f) => (f.formula ? ionsFromFormula(f.formula) : null);
const fieldOf = (f, key) => {
  if (f.label[key] != null) return { v: f.label[key], calc: false, src: f.labelSrc };
  const c = fluidCalc(f);
  if (!c) return null;
  if (key === 'dex') return { v: c.dexG, calc: false, src: f.formulaSrc, reg: f.formulaReg, hydrous: c.dexHydrous };
  if (key === 'kcal') {
    // a buffer (lactate, acetate, gluconate) also gives energy: without a label value it is Unknown, never "none"
    if (!c.dexG) return ['lactate', 'acetate', 'gluconate'].some(k => c[k]) ? null : { v: 0, calc: true, src: f.formulaSrc, reg: f.formulaReg, none: true };
    return c.dexHydrous ? { v: Math.round(c.dexG * KCAL_PER_G_HYDROUS), calc: true, src: f.formulaSrc, reg: f.formulaReg, kcalFactor: true } : null;
  }
  if (CALC_FIELDS.includes(key)) return { v: c[key] || 0, calc: true, src: f.formulaSrc, reg: f.formulaReg };
  return null;
};
// Number used for sorting, filters and calculators (0 when the fluid has none of that ion)
const num = (f, key) => { const x = fieldOf(f, key); return x ? x.v : null; };
const dexOf = (f) => (f.formula ? fluidCalc(f).dexG : 0);
const bufferOf = (f) => ['lactate', 'acetate', 'gluconate', 'malate'].map(k => [k, num(f, k)]).filter(([, v]) => v);
const naK = (f) => (num(f, 'na') || 0) + (num(f, 'k') || 0);
// NICE CG174 1.3.1: crystalloids for resuscitation contain sodium 130–154 mmol/L
const naBand = (f) => { const na = num(f, 'na') || 0; return na > 154 ? 'high' : na >= 130 ? 'resus' : 'low'; };
const hasIon = (f, k) => (k === 'glucose' ? dexOf(f) > 0 : k === 'buffer' ? bufferOf(f).length > 0 : (num(f, k) || 0) > 0);
const thProducts = (f) => f.thai.map(r => ({ reg: r, code: TH_REG[r][0], name: TH_REG[r][1], holder: TH_REG[r][2] }));

// =====================================================================
// Registration in five countries (checked 14 Oct 2026), shown like the bronchodilator guide.
// A fluid counts as registered in a country when that country's list has a product of the same fluid and
// strength (for example 5% dextrose with 0.45% sodium chloride). Formulas can still differ slightly between
// makers and countries, for example Hartmann's solution in the UK and Ireland.
//   th: Thai FDA register (the card's own records, TH_REG).
//   us: Drugs@FDA marketing status ("Prescription" = current, only "Discontinued" = past).
//   uk: NHS Dictionary of Medicines and Devices (dm+d), products supplied in the UK (discontinued = past).
//   eu: the Irish regulator's list (HPRA; withdrawn list = past); Sterofundin ISO from the Dutch CBG register.
//   jp: PMDA package-insert search.
// Each entry: [status, [[product name, holder, record code], ...], note key]
// =====================================================================
const REGIONS = ['th', 'us', 'uk', 'eu', 'jp'];
const REG_STATUSES = ['current', 'past', 'never'];
const COUNTRY_COLORS = {
  th: { on: 'bg-emerald-700 text-white shadow-sm', off: 'text-emerald-700 hover:bg-emerald-50', chip: 'border-emerald-200 bg-emerald-50 text-emerald-700' },
  us: { on: 'bg-blue-600 text-white shadow-sm', off: 'text-blue-700 hover:bg-blue-50', chip: 'border-blue-200 bg-blue-50 text-blue-700' },
  uk: { on: 'bg-rose-600 text-white shadow-sm', off: 'text-rose-700 hover:bg-rose-50', chip: 'border-rose-200 bg-rose-50 text-rose-700' },
  eu: { on: 'bg-amber-700 text-white shadow-sm', off: 'text-amber-700 hover:bg-amber-50', chip: 'border-amber-200 bg-amber-50 text-amber-800' },
  jp: { on: 'bg-violet-600 text-white shadow-sm', off: 'text-violet-700 hover:bg-violet-50', chip: 'border-violet-200 bg-violet-50 text-violet-700' },
};
const US_SPONSOR = { baxter: 'Baxter Healthcare', bbraun: 'B. Braun', icu: 'Otsuka ICU Medical', hospira: 'Hospira', fresenius: 'Fresenius Kabi USA' };
const usApps = (...apps) => apps.map(([s, appl, name]) => [name, US_SPONSOR[s], appl]);
const ABROAD = {
  nss: {
    us: ['current', usApps(['baxter', 'NDA016677', 'Sodium Chloride 0.9%'], ['bbraun', 'NDA017464', 'Sodium Chloride 0.9%'], ['icu', 'NDA016366', 'Sodium Chloride 0.9%'], ['hospira', 'NDA019465', 'Sodium Chloride 0.9%'], ['fresenius', 'ANDA207310', 'Sodium Chloride 0.9%'])],
    uk: ['current', [['Sodium chloride 0.9% infusion', 'Baxter Healthcare', '61893'], ['Sodium chloride 0.9% infusion', 'B. Braun Medical', '172070'], ['Sodium chloride 0.9% infusion', 'Fresenius Kabi', '164961'], ['Sodium chloride 0.9% infusion', 'Aguettant', '46085']]],
    eu: ['current', [['Sodium Chloride 0.9% w/v Intravenous Infusion BP', 'Baxter Holding B.V.', 'PA2299/002/001'], ['Sodium Chloride Intravenous Infusion BP 0.9% w/v', 'B. Braun Melsungen AG', 'PA0736/003/002'], ['Sodium Chloride 0.9% w/v solution for infusion', 'Fresenius Kabi Deutschland GmbH', 'PA2059/063/003']]],
    jp: ['current', [['大塚生食注 (Otsuka saline)', 'Otsuka Pharmaceutical Factory', '3311401'], ['生理食塩液「ヒカリ」', 'Hikari Pharmaceutical', '3311401'], ['生理食塩液「フソー」', 'Fuso Pharmaceutical', '3311401']]],
  },
  half: {
    us: ['current', usApps(['baxter', 'NDA018016', 'Sodium Chloride 0.45%'], ['bbraun', 'NDA019635', 'Sodium Chloride 0.45%'], ['icu', 'NDA018090', 'Sodium Chloride 0.45%'], ['hospira', 'NDA019759', 'Sodium Chloride 0.45%'], ['fresenius', 'ANDA208122', 'Sodium Chloride 0.45%'])],
    uk: ['current', [['Sodium chloride 0.45% infusion', 'Baxter Healthcare', '61897']]],
    eu: ['current', [['Sodium Chloride 0.45% w/v Solution for Infusion', 'Baxter Holding B.V.', 'PA2299/002/002']]],
    jp: ['never', [], 'jpNoHalf'],
  },
  nacl3: {
    us: ['current', usApps(['baxter', 'NDA019022', 'Sodium Chloride 3%'], ['bbraun', 'NDA019635', 'Sodium Chloride 3%'], ['fresenius', 'ANDA209476', 'Sodium Chloride 3%'])],
    uk: ['never', [], 'uk27'],
    eu: ['past', [['Sodium Chloride 3%', 'B. Braun Medical Limited', 'PA0179/002/012']]],
    jp: ['never', [], 'jp10'],
  },
  d5w: {
    us: ['current', usApps(['baxter', 'NDA016673', 'Dextrose 5%'], ['bbraun', 'NDA016730', 'Dextrose 5%'], ['hospira', 'NDA019466', 'Dextrose 5%'])],
    uk: ['current', [['Glucose 5% infusion', 'Baxter Healthcare', '61866'], ['Glucose 5% infusion', 'Fresenius Kabi', '164975'], ['Glucose 5% infusion', 'B. Braun Medical', '160535'], ['Glucose 5% infusion', 'Aguettant', '59763']]],
    eu: ['current', [['Glucose 5% w/v Intravenous Infusion BP', 'Baxter Holding B.V.', 'PA2299/003/001'], ['Glucose Intravenous Infusion BP 5% w/v', 'B. Braun Melsungen AG', 'PA0736/045/001'], ['Glucose 5% w/v Solution for Infusion', 'Fresenius Kabi Deutschland GmbH', 'PA2059/040/004']]],
    jp: ['current', [['大塚糖液5%', 'Otsuka Pharmaceutical Factory', '3231401'], ['光糖液5%', 'Hikari Pharmaceutical', '3231401'], ['5%ブドウ糖注射液「ニッシン」', 'Nissin Pharmaceutical', '3231401']]],
  },
  d10w: {
    us: ['current', usApps(['baxter', 'NDA016694', 'Dextrose 10%'], ['bbraun', 'NDA019626', 'Dextrose 10%'], ['icu', 'NDA018080', 'Dextrose 10%'], ['fresenius', 'ANDA209448', 'Dextrose 10%'])],
    uk: ['current', [['Glucose 10% infusion', 'Baxter Healthcare', '61867'], ['Glucose 10% infusion', 'Aguettant', '45919'], ['Steriflex No.7 glucose 10% infusion', 'Fresenius Kabi', '33941']]],
    eu: ['current', [['Glucose 10% w/v Solution for Infusion', 'Baxter Holding B.V.', 'PA2299/003/002'], ['Glucose Intravenous Infusion BP 10% w/v', 'B. Braun Melsungen AG', 'PA0736/045/002'], ['Glucose 10% w/v Solution for Infusion', 'Fresenius Kabi Deutschland GmbH', 'PA2059/040/008']]],
    jp: ['current', [['大塚糖液10%', 'Otsuka Pharmaceutical Factory', '3231401'], ['光糖液10%', 'Hikari Pharmaceutical', '3231401']]],
  },
  d5s: {
    us: ['current', usApps(['baxter', 'NDA016678', 'Dextrose 5% in Sodium Chloride 0.9%'], ['bbraun', 'NDA019631', 'Dextrose 5% and Sodium Chloride 0.9%'], ['icu', 'NDA017585', 'Dextrose 5% and Sodium Chloride 0.9%'], ['fresenius', 'ANDA211211', 'Dextrose 5% and Sodium Chloride 0.9%'])],
    uk: ['current', [['Sodium chloride 0.9% / Glucose 5% infusion', 'B. Braun Medical', '167715']]],
    eu: ['current', [['Sodium Chloride 0.9% w/v and Glucose 5% w/v Solution for Infusion BP', 'Baxter Holding B.V.', 'PA2299/008/002']]],
    jp: ['never', [], 'jpNoDexSaline'],
  },
  d5s2: {
    us: ['current', usApps(['baxter', 'NDA016683', 'Dextrose 5% in Sodium Chloride 0.45%'], ['bbraun', 'NDA019631', 'Dextrose 5% and Sodium Chloride 0.45%'], ['icu', 'NDA017607', 'Dextrose 5% and Sodium Chloride 0.45%'], ['fresenius', 'ANDA211276', 'Dextrose 5% and Sodium Chloride 0.45%'])],
    uk: ['current', [['Sodium chloride 0.45% / Glucose 5% infusion', 'B. Braun Medical', '167714']]],
    eu: ['current', [['Sodium Chloride 0.45% w/v and Glucose 5.0% w/v Solution for Infusion BP', 'Baxter Holding B.V.', 'PA2299/008/001']]],
    jp: ['never', [], 'jpNoDexSaline'],
  },
  d5s2k20: {
    us: ['current', usApps(['baxter', 'NDA018008', 'Potassium Chloride 20 mEq in Dextrose 5% and Sodium Chloride 0.45%'], ['bbraun', 'NDA019630', 'Potassium Chloride 0.15% in Dextrose 5% and Sodium Chloride 0.45%'])],
    uk: ['current', [['Intraven potassium chloride 0.15% / glucose 5% / sodium chloride 0.45% infusion', 'Terumo BCT', '15888']]],
    eu: ['never', [], 'euNoKDexHalf'],
    jp: ['never', [], 'jpNoDexSaline'],
  },
  d5s2k40: {
    us: ['current', usApps(['baxter', 'NDA018008', 'Potassium Chloride 40 mEq in Dextrose 5% and Sodium Chloride 0.45%'], ['bbraun', 'NDA019630', 'Potassium Chloride 0.3% in Dextrose 5% and Sodium Chloride 0.45%'])],
    uk: ['never', [], 'ukK40'],
    eu: ['never', [], 'euNoKDexHalf'],
    jp: ['never', [], 'jpNoDexSaline'],
  },
  d5s3: {
    us: ['current', usApps(['icu', 'NDA017799', 'Dextrose 5% and Sodium Chloride 0.3%'], ['fresenius', 'ANDA211194', 'Dextrose 5% and Sodium Chloride 0.3%'])],
    uk: ['never', [], 'ukLowSaline'],
    eu: ['never', [], 'eu033'],
    jp: ['never', [], 'jpNoDexSaline'],
  },
  d5s4: {
    us: ['current', usApps(['icu', 'NDA017606', 'Dextrose 5% and Sodium Chloride 0.225%'], ['fresenius', 'ANDA211221', 'Dextrose 5% and Sodium Chloride 0.225%'])],
    uk: ['never', [], 'ukLowSaline'],
    eu: ['never', [], 'euLowSaline'],
    jp: ['never', [], 'jpNoDexSaline'],
  },
  d5s5: {
    us: ['never', [], 'us02'],
    uk: ['never', [], 'ukLowSaline'],
    eu: ['never', [], 'euLowSaline'],
    jp: ['never', [], 'jpNoDexSaline'],
  },
  lrs: {
    us: ['current', usApps(['baxter', 'NDA016682', "Lactated Ringer's"], ['bbraun', 'NDA019632', "Lactated Ringer's"], ['icu', 'NDA017641', "Lactated Ringer's"], ['fresenius', 'ANDA209338', "Lactated Ringer's"])],
    uk: ['current', [["Sodium lactate compound (Hartmann's Solution) infusion", 'Baxter Healthcare', '61895'], ["Sodium lactate compound (Hartmann's Solution) infusion", 'B. Braun Medical', '172072'], ["Sodium lactate compound (Hartmann's Solution) infusion", 'Fresenius Kabi', '165092'], ["Sodium lactate compound (Hartmann's Solution) infusion", 'Aguettant', '59812']], 'hartmann'],
    eu: ['current', [['Compound Sodium Lactate Solution for Infusion BP', 'Baxter Holding B.V.', 'PA2299/012/001'], ["Compound Sodium Lactate Intravenous Infusion BP (Hartmann's Solution)", 'B. Braun Melsungen AG', 'PA0736/046/001'], ["Hartmann's Solution for Infusion", 'Fresenius Kabi Deutschland GmbH', 'PA2059/057/003']], 'hartmann'],
    jp: ['current', [['ソルラクト輸液 (Sollacto)', 'Terumo', '3319534'], ['ハルトマン輸液「NP」', 'Nipro', '3319534'], ['ハルトマン液「コバヤシ」', 'Neo Critical Care Pharmaceutical', '3319534']]],
  },
  acetar: {
    us: ['never', []], uk: ['never', []], eu: ['never', []],
    jp: ['current', [['ソルアセトF輸液 (Solacet F)', 'Terumo', '3319557'], ['ソリューゲンF注', 'Hikari Pharmaceutical', '3319557']]],
  },
  acetar5: {
    us: ['never', []], uk: ['never', []], eu: ['never', []],
    jp: ['current', [['ソルアセトD輸液 (Solacet D)', 'Terumo', '3319551'], ['ソリューゲンG注', 'Neo Critical Care Pharmaceutical', '3319551'], ['アクメインD輸液', 'Hikari Pharmaceutical', '3319551'], ['ペロール注', 'Viatris', '3319551']]],
  },
  topbal: { us: ['never', [], 'sameAsPlaAbroad'], uk: ['never', [], 'sameAsPlaAbroad'], eu: ['never', [], 'sameAsPlaAbroad'], jp: ['never', []] },
  sterofundin: {
    us: ['never', []], uk: ['never', []],
    eu: ['current', [['Sterofundin ISO, oplossing voor infusie', 'B. Braun Melsungen AG', 'RVG 27041']], 'euNl'],
    jp: ['never', []],
  },
  pla: {
    us: ['current', usApps(['baxter', 'NDA017378', 'Plasma-Lyte A'])],
    uk: ['current', [['Plasma-Lyte 148 infusion', 'Baxter Healthcare', '26635']]],
    eu: ['current', [['Plasma-Lyte 148 (pH 7.4) solution for infusion', 'Baxter Holding B.V.', 'PA2299/032/001']]],
    jp: ['never', []],
  },
  alb5: {
    us: ['current', usApps(['baxter', 'BLA103984', 'Albumin (Human) 5%'])],
    uk: ['current', [['Human Albumin 5% solution for infusion', 'Bio Products Laboratory', '10002']]],
    eu: ['current', [['Human Albumin 50 g/l Solution for Infusion', 'Baxter Holding B.V.', 'PA2299/040/002']]],
    jp: ['never', []],
  },
  alb20: {
    us: ['current', usApps(['baxter', 'BLA103984', 'Albumin (Human) 20%'])],
    uk: ['current', [['Human Albumin 20% solution for infusion', 'Bio Products Laboratory', '10001']]],
    eu: ['current', [['Human Albumin 200 g/l Solution for Infusion', 'Baxter Holding B.V.', 'PA2299/040/001']]],
    jp: ['never', []],
  },
  alb25: {
    us: ['current', usApps(['baxter', 'BLA103984', 'Albumin (Human) 25%'])],
    uk: ['current', [['Human Albumin 25% solution for infusion', 'Bio Products Laboratory', '10003']]],
    eu: ['current', [['Human Albumin 250 g/l Solution for Infusion', 'Baxter Holding B.V.', 'PA2299/040/003']]],
    jp: ['never', []],
  },
  man20: {
    us: ['current', usApps(['baxter', 'NDA016269', 'Osmitrol 20% (Mannitol 20%)'], ['bbraun', 'NDA020005', 'Mannitol 20%'])],
    uk: ['current', [['Mannitol 20% infusion', 'Baxter Healthcare', '14050']]],
    eu: ['current', [['Mannitol 20% w/v Solution for Infusion', 'Baxter Holding B.V.', 'PA2299/015/001']]],
    jp: ['never', []],
  },
};
const hpraUrl = (q, past) => 'https://www.hpra.ie/find-a-medicine/for-human-use/' + (past ? 'withdrawn-medicines' : 'authorised-medicines') + '?data=' +
  btoa(JSON.stringify({ id: null, skip: 0, take: 10, query: q, order: 'LastUpdated DESC', status: past ? 'Withdrawn' : 'Authorised', filters: { from: null, to: null, routes: null, placeOfSale: null, advertisingConditions: null, marketingAvailability: null, atcCode: null, medicineType: null } }));
// Link to one product's record in its country's register
const recordUrl = (r, code, st) => {
  if (r === 'th') return thRecordUrl(TH_REG[code][0]);
  if (r === 'us') return 'https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=' + code.replace(/^\D+/, '');
  if (r === 'uk') return 'https://dmd-browser.nhsbsa.nhs.uk/amp/view/' + code;
  if (r === 'eu') return /^RVG/.test(code) ? SOURCES.euSterofundin.url : hpraUrl(code, st === 'past');
  return 'https://www.pmda.go.jp/PmdaSearch/iyakuDetail/GeneralList/' + code;
};
const REGISTER_HOME = {
  th: 'https://pertento.fda.moph.go.th/FDA_SEARCH_DRUG/SEARCH_DRUG/FRM_SEARCH_DRUG.aspx',
  us: 'https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm',
  uk: 'https://dmd-browser.nhsbsa.nhs.uk/',
  eu: 'https://www.hpra.ie/find-a-medicine/for-human-use',
  jp: 'https://www.pmda.go.jp/PmdaSearch/iyakuSearch/',
};
// { status, items: [{ name, holder, code, url }], note }
const regIn = (f, r) => {
  if (r === 'th') return { status: f.thai.length ? 'current' : 'never', items: thProducts(f).map(p => ({ name: p.name, holder: HOLDERS[p.holder], code: p.reg, url: thRecordUrl(p.code) })), note: f.thNote || null };
  const [status, items, note] = (ABROAD[f.id] || {})[r] || ['never', []];
  return { status, items: items.map(([name, holder, code]) => ({ name, holder, code, url: recordUrl(r, code, status) })), note: note || null };
};
const statusIn = (f, r) => regIn(f, r).status;
const holderText = (h, lang) => (typeof h === 'string' ? h : h[lang]);
// Holder names in one country, without repeats: "Baxter Healthcare, B. Braun +2"
const holderSummary = (f, r, lang, max = 2) => {
  const names = [...new Set(regIn(f, r).items.map(i => holderText(i.holder, lang)))];
  return names.length ? names.slice(0, max).join(', ') + (names.length > max ? ` +${names.length - max}` : '') : null;
};

// =====================================================================
// References (the numbered list at the bottom of the page)
// =====================================================================
const REFERENCES = [
  { key: 'nice', cite: 'National Institute for Health and Care Excellence. Intravenous fluid therapy in adults in hospital (CG174). Updated 2017.', url: 'https://www.nice.org.uk/guidance/cg174/chapter/Recommendations' },
  { key: 'ssc', cite: 'Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign: international guidelines for management of sepsis and septic shock 2021. Crit Care Med 2021;49:e1063–e1143.', url: 'https://doi.org/10.1097/CCM.0000000000005337' },
  { key: 'myburgh', cite: 'Myburgh JA, Mythen MG. Resuscitation fluids. N Engl J Med 2013;369:1243–51 (Table 1: human plasma).', url: 'https://doi.org/10.1056/NEJMra1208627' },
  { key: 'adrogueHypo', cite: 'Adrogué HJ, Madias NE. Hyponatremia. N Engl J Med 2000;342:1581–9.', url: 'https://doi.org/10.1056/NEJM200005253422107' },
  { key: 'adrogueHyper', cite: 'Adrogué HJ, Madias NE. Hypernatremia. N Engl J Med 2000;342:1493–9.', url: 'https://doi.org/10.1056/NEJM200005183422006' },
  { key: 'spasovski', cite: 'Spasovski G, Vanholder R, Allolio B, et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol 2014;170:G1–G47.', url: 'https://doi.org/10.1530/EJE-13-1020' },
  { key: 'devine', cite: 'Devine BJ. Gentamicin therapy. Drug Intell Clin Pharm 1974;8:650–5 (ideal body weight formula).', url: null },
  { key: 'szczech', cite: 'Szczech L. Update review of free water deficit in hypernatremia. MDCalc Journal 2025 (formula from Adrogué & Madias, N Engl J Med 2000).', url: 'https://doi.org/10.65357/001c.154432' },
  { key: 'thfda', cite: 'Thai Food and Drug Administration. Drug register search and product records (formula, licence holder, status). Searched 14 October 2026.', url: 'https://pertento.fda.moph.go.th/FDA_SEARCH_DRUG/SEARCH_DRUG/FRM_SEARCH_DRUG.aspx' },
  { key: 'drugsfda', cite: 'US Food and Drug Administration. Drugs@FDA (application and marketing status), via openFDA. Searched 14 October 2026.', url: 'https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm' },
  { key: 'dmd', cite: 'NHS Business Services Authority. Dictionary of Medicines and Devices (dm+d) browser: products supplied in the UK. Searched 14 October 2026.', url: 'https://dmd-browser.nhsbsa.nhs.uk/' },
  { key: 'hpra', cite: 'Health Products Regulatory Authority (Ireland). Human medicines lists (authorised and withdrawn), XML of 14 October 2026.', url: 'https://www.hpra.ie/find-a-medicine/for-human-use' },
  { key: 'pmda', cite: 'Pharmaceuticals and Medical Devices Agency (Japan). Package insert search for prescription drugs. Searched 14 October 2026.', url: 'https://www.pmda.go.jp/PmdaSearch/iyakuSearch/' },
  { key: 'adaDka', cite: 'ElSayed NA, Aleppo G, Aroda VR, et al. Hyperglycemic Crises in Adults with Diabetes: Consensus Report by the ADA and EASD. Diabetes Care 2024;47:1186–1204 / UK JBDS-IP 2023.', url: 'https://doi.org/10.2337/dci24-0030' },
  { key: 'katz', cite: 'Katz MA. Hyperglycemia-induced hypo-osmolar state: formula for corrected sodium. N Engl J Med 1973;289:843–848.', url: 'https://doi.org/10.1056/NEJM197310182891607' },
  { key: 'sternsK', cite: 'Sterns RH, Grieff M, Bernstein PL. Treatment of hypokalemia in adults. UpToDate 2024; Mount DB. Disorders of potassium balance. In: Brenner and Rector\'s The Kidney 11th ed.', url: null },
  { key: 'aspenGir', cite: 'ASPEN Clinical Guidelines: Nutrition Support in Adult Patients; Wolfe RR et al. Ann Surg 1979 (glucose kinetics and oxidation limits).', url: 'https://doi.org/10.1097/00000658-197910000-00006' },
  { key: 'btfIcp', cite: 'Carney N et al. Guidelines for the Management of Severe Traumatic Brain Injury, 4th Edition. Neurosurgery 2017;80(1):6–15; Neurocritical Care Society (NCS) Emergency Neurological Life Support (ENLS): Intracranial Hypertension and Herniation.', url: 'https://doi.org/10.1093/neuros/nyw321' },
  { key: 'aasldAlb', cite: 'Biggins SW, Angeli P, Garcia-Tsao G, et al. Diagnosis, Evaluation, and Management of Ascites and Hepatorenal Syndrome: 2021 Practice Guidance by the AASLD. Hepatology 2021;74:1014–1048; EASL Clinical Practice Guidelines: Management of decompensated cirrhosis. J Hepatol 2018;69:406–460.', url: 'https://doi.org/10.1002/hep.31884' },
  { key: 'sortSbp', cite: 'Sort P, Navasa M, Arroyo V, et al. Effect of intravenous albumin on renal impairment and mortality in patients with cirrhosis and spontaneous bacterial peritonitis. N Engl J Med 1999;341:403–409.', url: 'https://doi.org/10.1056/NEJM199908053410603' },
  { key: 'safeAlb', cite: 'The SAFE Study Investigators. A comparison of albumin and saline for fluid resuscitation in the intensive care unit. N Engl J Med 2004;350:2247–2256; SAFE-TBI Investigators. Saline or Albumin for Fluid Resuscitation in Patients with Traumatic Brain Injury. N Engl J Med 2007;357:874–884.', url: 'https://doi.org/10.1056/NEJMoa040232' },
  ...['usNaCl09', 'usNaCl045', 'usNaCl3', 'usDex', 'usDexNaCl', 'usKDexNaCl', 'usLR', 'usPL', 'usAlb5', 'usAlb', 'usAlb25', 'usMan', 'thTopBal', 'thAcetRinger', 'euSterofundin'].map(k => ({ key: k, cite: SOURCES[k].cite, url: SOURCES[k].url })),
];
const refUrl = (key) => (REFERENCES.find(r => r.key === key) || {}).url;

// =====================================================================
// Changelog (newest first; one entry per day)
// =====================================================================
const changelogData = [
  { version: 'v1.6.0', date: 'October 16, 2026', features: [
    'Albumin Indication & Clinical Dosing Guide: Bedside decision guide and dose calculator for Human Albumin indications in cirrhosis, critical care, and volume overload.',
    'Large-Volume Paracentesis (LVP > 5 L) Calculator: Evidence-based calculation (6–8 g per litre removed) preventing paracentesis-induced circulatory dysfunction (PICD), with 20% vs 25% volume breakdown.',
    'Spontaneous Bacterial Peritonitis (SBP) Dosing: Stepwise weight-based protocol (Day 1: 1.5 g/kg, Day 3: 1.0 g/kg) proven to reduce hepatorenal syndrome and in-hospital mortality (Sort et al., NEJM 1999 / AASLD guidelines).',
    'Hepatorenal Syndrome (HRS-AKI) Protocol: Diagnostic volume challenge calculator (1 g/kg/day for 2 days, max 100 g/day), diuretic cessation rules, and treatment guidance with vasoconstrictors (terlipressin / norepinephrine).',
    'Iso-oncotic (5%) vs Hyper-oncotic (20% & 25%) Selection Matrix: Head-to-head oncotic and volume expansion comparison, clinical indications, and black box contraindications (strict avoidance in traumatic brain injury - SAFE study).',
    'Added Human Albumin 5% (50 g/L, iso-oncotic) and Human Albumin 25% (250 g/L, hyper-oncotic): Full compositions, registrations in Thailand and abroad, and clinical warning flags.',
  ], bugs: [] },
  { version: 'v1.5.0', date: 'October 16, 2026', features: [
    'ICP & Osmotherapy Clinical Protocol: Bedside guide for acute intracranial hypertension management with Mannitol 20% vs. 3% Hypertonic Saline.',
    'Mannitol 20% Dosing & Safety Guard: Gram and volume calculator (0.25–1.0 g/kg), 15–20 min infusion guidance with filter needle alerts, serum osmolality cutoff (< 320 mOsm/kg alert to prevent AKI), and osmolar gap accumulation calculator.',
    '3% Hypertonic Saline Bolus & Sodium Target: 250–500 mL or 2–5 mL/kg dosing, acute sodium rise calculation (Adrogué–Madias), target sodium range (145–155 mmol/L), and hypernatremia safety cutoff alert (> 155 mmol/L).',
    'Head-to-head Clinical Decision Matrix: Evidence-based guide comparing Mannitol vs 3% NaCl in shock/hypotension, CHF/volume overload, oliguria/renal failure, and baseline sodium abnormalities.',
    'Cerebral Perfusion Pressure (CPP) Calculator: Calculates MAP and CPP (MAP − ICP) with target ranges (CPP 60–70 mmHg, ICP < 20–22 mmHg) and cerebral ischemia / hyperperfusion alerts (BTF & Neurocritical Care ENLS guidelines).',
  ], bugs: [] },
  { version: 'v1.4.0', date: 'October 15, 2026', features: [
    'Export to PNG: Download single fluid summary cards or multi-fluid comparison tables as high-resolution PNG images.',
    'Expanded multiselect and comparison: Select up to 6 fluids with quick-remove column controls in the comparison modal.',
    'Completed TOP Balance details: Added verified label values for osmolarity (294 mOsm/L), energy (21 kcal/L), and physiological pH 7.4 (6.5–8.0).',
    'Added Human Albumin 20% (colloid) and Mannitol 20% (osmotic diuretic) with full compositions, registrations, and clinical warning flags.',
    'Added pH filter: Filter crystalloids and colloids by solution pH range (< 6.0 acidic vs. 6.0–7.5 near-physiological).',
    'Added Glucose Infusion Rate (GIR) Calculator: Dual calculation modes (rate-to-GIR and target-to-rate), maximal glucose oxidation limit alerts, and daily dextrose/caloric delivery.',
  ], bugs: [] },
  { version: 'v1.3.0', date: 'October 15, 2026', features: [
    'Acute 3% NaCl bolus protocol for severe symptomatic hyponatraemia (seizures, coma): 100–150 mL (or 2 mL/kg) IV over 10–15 min, repeat timing, target acute rise (+4–6 mmol/L), daily limit (max 8 mmol/L/24h; 4–6 in high-risk ODS), and DDAVP overcorrection rescue (European & US guidelines).',
    'Potassium replacement & safe rate guide: total body deficit estimation (Sterns / UpToDate), maximum infusion rate and concentration limits for peripheral (10 mmol/h, 40 mmol/L) and central lines (20 mmol/h, 80 mmol/L), alert against dextrose vehicles during initial repletion, and magnesium checking rule.',
    'DKA / HHS fluid & electrolyte protocol: Katz corrected sodium calculator, phase 1 resuscitation (Hour 1 NSS 1000 mL/h), phase 2 fluid selection based on corrected Na (0.45% vs 0.9% NaCl), phase 3 dextrose addition thresholds (≤ 200–250 mg/dL in DKA, ≤ 300 in HHS), and potassium safety algorithm (hold insulin if K < 3.3 mmol/L; add 20–30 mmol/L if 3.3–5.2).',
  ], bugs: [] },
  { version: 'v1.2.1', date: 'October 15, 2026', features: [
    'The page description now covers all five countries (Thailand, US, UK, EU and Japan), not Thailand only.',
    'Sodium change and water deficit guides: one-tap planned changes of 6, 8, 10 or 12 mmol/L; the sodium change guide also has Raise and Lower buttons.',
  ], bugs: [] },
  { version: 'v1.1.0', date: 'October 14, 2026', features: [
    '18 crystalloid fluids used in Thailand: NSS, NSS/2, 3% NaCl, 5% and 10% dextrose, 5%D/NSS, 5%D/N/2 (also with KCl 20 or 40), 5%D/N/3, 5%D/N/4, 5%D/N/5, LRS, Acetar, Acetar-5, TOP Balance, Sterofundin ISO and Plasma-Lyte A.',
    'Each card shows sodium, potassium, chloride, calcium, magnesium, buffer, dextrose, energy, osmolarity and pH per litre, each with its source; values worked out from a printed formula are marked "calc.".',
    'Thai FDA registrations for every fluid, with a link to each register record (checked 14 October 2026).',
    'Filters (type, sodium band, contents, Thai registration), search by short names such as NSS, D5W, DN/2, RLS, and by company, sort, tile and list views.',
    'Compare up to three fluids side by side with human plasma.',
    'Guides: fluid choice (NICE 5 Rs, Surviving Sepsis 2021), maintenance calculator (NICE CG174), sodium change per litre (Adrogué–Madias) and drip rate.',
    'Country chips and registration status as in the bronchodilator guide: Thailand, US, UK, EU and Japan, each with the products found and a link to their record; filter by country and by status (current, past, never).',
    'Water deficit guide for hypernatraemia: free water deficit, time to correct at a planned rate, and litres of each sodium-poor fluid for that day.',
  ], bugs: [] },
];
const CHANGELOG_TH = {
  'v1.6.0': { features: [
    'แนวทางการใช้อัลบูมินทางคลินิก (Albumin Indication Guide): เครื่องคำนวณขนาดยาและแนวทางตัดสินใจการใช้อัลบูมินในภาวะแทรกซ้อนของโรคตับแข็งและผู้ป่วยวิกฤต',
    'เครื่องคำนวณการเจาะระบายน้ำในช่องท้องปริมาณมาก (LVP > 5 L): คำนวณขนาดยาตามเกณฑ์มาตรฐาน (6–8 g ต่อลิตรของน้ำที่เจาะออก) เพื่อป้องกัน Paracentesis-Induced Circulatory Dysfunction (PICD) พร้อมคำนวณปริมาตรของ 20% และ 25% อัลบูมิน',
    'แนวทางการให้ยาในภาวะเยื่อบุช่องท้องอักเสบติดเชื้อ (SBP): คำนวณขนาดยาตามน้ำหนักตัว (วันที่ 1: 1.5 g/kg, วันที่ 3: 1.0 g/kg) ตามหลักฐานเชิงประจักษ์ที่ช่วยลดภาวะไตวายและอัตราการเสียชีวิตอย่างมีนัยสำคัญ (Sort et al., NEJM 1999 / AASLD)',
    'แนวทางการดูแล Hepatorenal Syndrome (HRS-AKI): คำนวณขนาด Albumin fluid challenge (1 g/kg/วัน สูงสุด 100 g/วัน เป็นเวลา 2 วัน) เพื่อแยกภาวะ Pre-renal azotemia พร้อมแนวทางการให้ยาร่วมกับ vasoconstrictor (Terlipressin / Norepinephrine)',
    'ตารางเปรียบเทียบ Albumin 5% (Iso-oncotic) เทียบกับ 20% และ 25% (Hyper-oncotic): เปรียบเทียบแรงดันออนโคติกและอัตราการดึงน้ำเข้าหลอดเลือด พร้อมข้อบ่งชี้และข้อห้ามใช้วิกฤต (ห้ามใช้ในผู้บาดเจ็บทางสมอง TBI - การศึกษา SAFE)',
    'เพิ่มสารน้ำ Human Albumin 5% (50 g/L) และ Human Albumin 25% (250 g/L): ข้อมูลส่วนประกอบครบถ้วน การขึ้นทะเบียนในไทยและต่างประเทศ พร้อมข้อควรระวังทางคลินิก',
  ], bugs: [] },
  'v1.5.0': { features: [
    'แนวทางการใช้สารน้ำลดความดันในกะโหลกศีรษะ (ICP & Osmotherapy): คำนวณขนาดยาและการให้ Mannitol 20% เทียบกับ 3% Hypertonic Saline สำหรับภาวะความดันในกะโหลกศีรษะสูงวิกฤต',
    'เครื่องคำนวณและข้อควรระวัง Mannitol 20%: คำนวณขนาดยา (กรัมและมิลลิลิตร) ตามน้ำหนักตัว (0.25–1.0 g/kg), แจ้งเตือนเวลาการให้ (15–20 นาที) และการใช้สายกรอง (in-line filter), ระบบตรวจสอบระดับ Serum Osmolality (< 320 mOsm/kg ป้องกันไตวายเฉียบพลัน) พร้อมการคำนวณ Osmolar Gap',
    'คำนวณ 3% Hypertonic Saline Bolus: ขนาดยา 250–500 mL หรือ 2–5 mL/kg, คำนวณการเพิ่มขึ้นของโซเดียมในเลือดเฉียบพลัน (สูตร Adrogué–Madias), ควบคุมเป้าหมายโซเดียม (145–155 mmol/L) พร้อมการแจ้งเตือนเมื่อโซเดียมเกิน 155 mmol/L',
    'ตารางเปรียบเทียบการเลือกใช้สารน้ำ (Decision Matrix): เปรียบเทียบข้อดีข้อเสียระหว่าง Mannitol vs 3% NaCl ในภาวะช็อก/ความดันโลหิตต่ำ, หัวใจวาย/น้ำเกิน, ไตวาย และระดับโซเดียมผิดปกติ',
    'เครื่องคำนวณ Cerebral Perfusion Pressure (CPP): คำนวณ MAP และ CPP (MAP − ICP) พร้อมเป้าหมายตามเกณฑ์มาตรฐาน (CPP 60–70 mmHg, ICP < 20–22 mmHg) และแจ้งเตือนภาวะสมองขาดเลือดหรือเลือดไปเลี้ยงสมองมากเกินไป (Brain Trauma Foundation / ENLS)',
  ], bugs: [] },
  'v1.4.0': { features: [
    'ส่งออกเป็น PNG: ดาวน์โหลดการ์ดสรุปข้อมูลสารน้ำหรือตารางเปรียบเทียบเป็นรูปภาพ PNG คมชัดสูง',
    'ปรับปรุงการเลือกหลายชนิดและเปรียบเทียบ: เลือกได้สูงสุด 6 ชนิด พร้อมปุ่มกดลบสารน้ำออกจากตารางเปรียบเทียบได้ทันที',
    'เติมข้อมูล TOP Balance ครบถ้วน: เติมค่าฉลากออสโมลาริตี (294 mOsm/L) พลังงาน (21 kcal/L) และ pH 7.4 (6.5–8.0)',
    'เพิ่ม Human Albumin 20% (คอลลอยด์) และ Mannitol 20% (สารขับปัสสาวะออสโมติก) พร้อมทะเบียนยาและคำเตือนทางคลินิก',
    'เพิ่มตัวกรอง pH: กรองสารน้ำตามช่วงความเป็นกรด-ด่าง (< 6.0 กรด เทียบกับ 6.0–7.5 ใกล้เคียงพลาสมา)',
    'เพิ่มเครื่องคำนวณ GIR (อัตราการให้กลูโคส): คำนวณได้ทั้งสองทิศทาง พร้อมการแจ้งเตือนขีดจำกัดการเผาผลาญกลูโคสและพลังงานต่อวัน',
  ], bugs: [] },
  'v1.3.0': { features: [
    'โปรโตคอล 3% NaCl bolus สำหรับโซเดียมต่ำรุนแรงที่มีอาการ (ชัก หมดสติ): 100–150 mL (หรือ 2 mL/kg) IV ใน 10–15 นาที การให้ซ้ำ เป้าหมายระยะเฉียบพลัน (+4–6 mmol/L) ขีดจำกัดต่อวัน (ไม่เกิน 8 mmol/L/24 ชม. และ 4–6 ในกลุ่มเสี่ยง ODS) และแนวทางแก้ไขเมื่อแก้เกินด้วย DDAVP (แนวทางยุโรปและสหรัฐฯ)',
    'คู่มือการให้โพแทสเซียมและอัตราที่ปลอดภัย: ประมาณการโพแทสเซียมที่ขาดในร่างกาย (Sterns / UpToDate) ขีดจำกัดอัตราและความเข้มข้นทางหลอดเลือดดำส่วนปลาย (10 mmol/ชม., 40 mmol/L) และส่วนกลาง (20 mmol/ชม., 80 mmol/L) คำเตือนหลีกเลี่ยงเดกซ์โทรสในระยะแรก และการตรวจแมกนีเซียม',
    'โปรโตคอลสารน้ำและอิเล็กโทรไลต์สำหรับ DKA / HHS: คำนวณโซเดียมปรับค่า (Katz) กู้ชีพชั่วโมงแรกด้วย NSS 1000 mL/ชม. การเลือกสารน้ำตาม Na ปรับค่า (0.45% เทียบกับ 0.9% NaCl) เกณฑ์การเติมเดกซ์โทรส (≤ 200–250 mg/dL ใน DKA, ≤ 300 ใน HHS) และอัลกอริทึมความปลอดภัยของโพแทสเซียม (ระงับอินซูลินถ้า K < 3.3 mmol/L และเติม 20–30 mmol/L ถ้า 3.3–5.2)',
  ], bugs: [] },
  'v1.2.1': { features: [
    'คำอธิบายหน้าแอปครอบคลุมทั้งห้าประเทศ (ไทย สหรัฐฯ สหราชอาณาจักร สหภาพยุโรป และญี่ปุ่น) ไม่ใช่เฉพาะไทย',
    'คู่มือการเปลี่ยนแปลงโซเดียมและการขาดน้ำ: ปุ่มเลือกการเปลี่ยนแปลงที่วางแผน 6, 8, 10 หรือ 12 mmol/L และคู่มือการเปลี่ยนแปลงโซเดียมมีปุ่มเพิ่มและลด',
  ], bugs: [] },
  'v1.1.0': { features: [
    'สารน้ำคริสตัลลอยด์ 18 ชนิดที่ใช้ในประเทศไทย: NSS, NSS/2, 3% NaCl, 5% และ 10% เดกซ์โทรส, 5%D/NSS, 5%D/N/2 (และชนิดผสม KCl 20 หรือ 40), 5%D/N/3, 5%D/N/4, 5%D/N/5, LRS, Acetar, Acetar-5, TOP Balance, Sterofundin ISO และ Plasma-Lyte A',
    'แต่ละการ์ดแสดงโซเดียม โพแทสเซียม คลอไรด์ แคลเซียม แมกนีเซียม บัฟเฟอร์ เดกซ์โทรส พลังงาน ออสโมลาริตี และ pH ต่อลิตร พร้อมแหล่งอ้างอิง ค่าที่คำนวณจากสูตรตำรับจะมีเครื่องหมาย "คำนวณ"',
    'ทะเบียนยา อย. ของสารน้ำแต่ละชนิด พร้อมลิงก์ไปยังข้อมูลทะเบียนแต่ละรายการ (ตรวจสอบ 14 ตุลาคม 2569)',
    'ตัวกรอง (ชนิด ช่วงโซเดียม ส่วนประกอบ ทะเบียนไทย) ค้นหาด้วยชื่อย่อ เช่น NSS, D5W, DN/2, RLS และชื่อบริษัท เรียงลำดับ มุมมองการ์ดและรายการ',
    'เปรียบเทียบสารน้ำได้สูงสุด 3 ชนิด เทียบกับพลาสมา',
    'คู่มือ: การเลือกสารน้ำ (NICE 5 Rs, Surviving Sepsis 2021) คำนวณสารน้ำบำรุงรักษา (NICE CG174) การเปลี่ยนแปลงโซเดียมต่อลิตร (Adrogué–Madias) และอัตราหยด',
    'ชิปประเทศและสถานะทะเบียนแบบเดียวกับคู่มือยาขยายหลอดลม: ไทย สหรัฐฯ สหราชอาณาจักร สหภาพยุโรป และญี่ปุ่น พร้อมผลิตภัณฑ์ที่พบและลิงก์ไปยังข้อมูลทะเบียน กรองตามประเทศและสถานะ (ปัจจุบัน เคยมี ไม่เคยมี)',
    'คู่มือการขาดน้ำสำหรับโซเดียมสูง: ปริมาณน้ำที่ขาด เวลาที่ใช้แก้ตามอัตราที่วางแผน และปริมาณสารน้ำที่มีโซเดียมต่ำแต่ละชนิดในวันนั้น',
  ], bugs: [] },
};
const APP_VERSION = changelogData[0].version;
const TH_MONTHS = { January: 'ม.ค.', February: 'ก.พ.', March: 'มี.ค.', April: 'เม.ย.', May: 'พ.ค.', June: 'มิ.ย.', July: 'ก.ค.', August: 'ส.ค.', September: 'ก.ย.', October: 'ต.ค.', November: 'พ.ย.', December: 'ธ.ค.' };
const thaiDate = (d) => { const m = /^(\w+) (\d+), (\d{4})$/.exec(d); return m && TH_MONTHS[m[1]] ? `${m[2]} ${TH_MONTHS[m[1]]} ${+m[3] + 543}` : d; };

// =====================================================================
// Interface text
// =====================================================================
const translations = {
  en: {
    isTh: false,
    title: 'Adult IV Fluid Guide',
    subtitle: 'Crystalloid IV fluids in Thailand, the US, the UK, the EU and Japan: what is in each litre, where each is registered, and bedside calculators.',
    discLink: 'Disclaimer and references ↓',
    themeToLight: 'Switch to light mode', themeToDark: 'Switch to dark mode',
    searchPlaceholder: 'Search fluid, short name (NSS, D5W, RLS) or company…', searchPlaceholderShort: 'Search fluids…',
    searchOpen: 'Search', searchClose: 'Close search',
    sortLabel: 'Sort', sortType: 'Type (saline first)', sortNameAsc: 'Name (A–Z)', sortNaDesc: 'Sodium (high → low)', sortNaAsc: 'Sodium (low → high)', sortClAsc: 'Chloride (low → high)', sortOsmAsc: 'Osmolarity (low → high)',
    gridView: 'Tile view', listView: 'List view', filtersBtn: 'Filters',
    typeLabel: 'Type', families: { saline: 'Saline', balanced: 'Balanced', dextrose: 'Dextrose', dexsaline: 'Dextrose-saline', hypertonic: 'Hypertonic', colloid: 'Colloid' },
    familyLong: { saline: 'Sodium chloride in water', balanced: 'Balanced crystalloid (buffered)', dextrose: 'Dextrose in water', dexsaline: 'Dextrose with sodium chloride', hypertonic: 'Hypertonic saline', colloid: 'Colloid (plasma volume expander)' },
    naLabel: 'Na⁺', naBands: { low: '< 130', resus: '130–154', high: '> 154' }, naBandLong: { low: 'Sodium below 130 mmol/L', resus: 'Sodium 130–154 mmol/L', high: 'Sodium above 154 mmol/L' },
    naTitle: 'Sodium band. NICE CG174 1.3.1: crystalloids used for resuscitation contain sodium 130–154 mmol/L.',
    phLabel: 'pH', phBands: { acidic: '< 6.0', physio: '6.0–7.5' }, phBandLong: { acidic: 'Acidic (pH < 6.0)', physio: 'Near-physiological (pH 6.0–7.5)' },
    phTitle: 'Solution pH range: acidic crystalloids vs near-physiological buffered solutions.',
    containsLabel: 'Contains', contains: { k: 'K⁺', ca: 'Ca²⁺', mg: 'Mg²⁺', glucose: 'Glucose', buffer: 'Buffer' },
    containsLong: { k: 'Contains potassium', ca: 'Contains calcium', mg: 'Contains magnesium', glucose: 'Contains glucose', buffer: 'Contains a buffer' },
    thLabel: 'Thai FDA',
    countriesLabel: "Countries",
    countriesAll: "All",
    countriesAllTitle: "Show every country",
    countryCodes: {"th":"TH","us":"US","uk":"UK","eu":"EU","jp":"JP"},
    countryNames: {"th":"Thailand","us":"United States","uk":"United Kingdom","eu":"European Union (Ireland list)","jp":"Japan"},
    regLabel: "FDA",
    regTitle: "Registration status in the selected countries",
    regOpts: {"current":"Currently","past":"Past","never":"Never"},
    regStatus: {"current":"registered","past":"registration ended","never":"not registered"},
    regNeverText: (c) => `No product of this fluid and strength was found in ${c} (searched 14 Oct 2026).`,
    noCountry: "Choose at least one country.",
    registerNames: {"th":"Thai FDA register","us":"Drugs@FDA","uk":"NHS dm+d","eu":"HPRA (Ireland)","jp":"PMDA"},
    regMatchNote: "Other countries: a product of the same fluid and strength on that country's list. Formulas can differ slightly between makers and countries (for example Hartmann's solution in the UK and Ireland); check the local label. UK = products supplied to the NHS (dm+d); EU = the Irish list (HPRA), plus the Dutch register for Sterofundin ISO.",
    regNotes: {"jpNoHalf":"Japan: no 0.45% sodium chloride infusion was found.","uk27":"UK: 2.7% sodium chloride infusion is supplied instead (Fresenius Kabi).","jp10":"Japan: only 10% sodium chloride ampoules were found.","jpNoDexSaline":"Japan: no dextrose-saline of this strength was found.","euNoKDexHalf":"Ireland: potassium chloride comes premixed in 5% glucose or 0.9% saline, not in 5% glucose with 0.45% saline.","ukK40":"UK: only the 0.15% (20 mmol/L) strength was found in 5% glucose with 0.45% saline.","ukLowSaline":"UK: low-sodium dextrose-saline is 0.18% sodium chloride in 4% glucose.","eu033":"Ireland: 0.3% sodium chloride comes with 3.3% glucose, not 5%.","euLowSaline":"Ireland: low-sodium dextrose-saline is 0.18% sodium chloride in 4% glucose.","us02":"US: the low-sodium strength is 0.2% sodium chloride in 5% dextrose.","hartmann":"Sold as compound sodium lactate (Hartmann's solution); its formula differs slightly from the US Lactated Ringer's.","sameAsPlaAbroad":"The same formula is sold as Plasma-Lyte (see its card).","euNl":"Not on the Irish list; authorised in the Netherlands (CBG, RVG 27041)."},
    chipsLabel: 'Active filters', clearShort: 'Clear', clearFilters: 'Clear all filters', chipRemove: (l) => `Remove filter: ${l}`,
    countShowing: 'Showing', countOf: 'of', countFluids: 'fluids',
    legendBtn: 'Key', legendTitle: 'Key', legendSub: 'How to read the cards',
    noFluids: 'No fluid matches these filters.',
    select: 'Select', selected: 'Selected', detailBtn: 'Details', detailClose: 'Close', clear: 'Clear', remove: 'Remove',
    exportPng: 'Export PNG', exportPngTitle: 'Download summary card as PNG image', exportComparePng: 'Export PNG',
    perLitre: 'per litre', unknown: 'Unknown', none: '–', calc: 'calc.', calcTitle: 'Calculated from the formula',
    rows: { na: 'Sodium', k: 'Potassium', cl: 'Chloride', ca: 'Calcium', mg: 'Magnesium', buffer: 'Buffer', dex: 'Dextrose', kcal: 'Energy', osm: 'Osmolarity', ph: 'pH' },
    units: { mmol: 'mmol/L', osm: 'mOsm/L', g: 'g/L', kcal: 'kcal/L' },
    buffers: { lactate: 'Lactate', acetate: 'Acetate', gluconate: 'Gluconate', malate: 'Malate' },
    hydrous: 'hydrous', anhydrous: 'anhydrous',
    thCount: (n) => (n ? `Thai FDA: ${n} registered product${n > 1 ? 's' : ''}` : 'Not registered in Thailand'),
    flags: {
      vein: 'Over 900 mOsm/L: use a large or central vein',
      low: 'Hypotonic in the body: hyponatraemia risk',
      ca: 'Contains calcium: not with ceftriaxone or citrated blood',
      glu: 'Contains glucose: monitor blood glucose',
      cl: 'Chloride over 120 mmol/L: check chloride daily',
      resus: 'Sodium 130–154 mmol/L: resuscitation range',
      colloid: 'Colloid: monitor for circulatory overload and allergic reactions',
      osmotic: 'Hypertonic osmotic agent: monitor diuresis and serum osmolality',
    },
    flagNotes: {
      vein: 'US labels: hypertonic solutions may damage veins and should go through a large vein; consider a central vein for 900 mOsm/L or more.',
      low: 'Labels warn that fluids with less sodium than the patient’s serum, including dextrose solutions once the glucose is used, can cause hyponatraemia.',
      ca: "Ringer's acetate SmPC (Thai FDA): ceftriaxone must not be mixed or given at the same time as calcium-containing solutions, even through different lines. Lactated Ringer's label: do not give through the same set as citrated blood (risk of clotting).",
      glu: 'US dextrose labels: dextrose can worsen high blood glucose; monitor blood glucose and give insulin as needed.',
      cl: 'NICE CG174 1.2.5: after fluids with chloride over 120 mmol/L, check serum chloride daily.',
      resus: 'NICE CG174 1.3.1: use crystalloids with sodium 130–154 mmol/L for resuscitation (500 mL bolus over less than 15 minutes).',
      colloid: 'Colloids remain largely intravascular due to oncotic pressure. Risk of circulatory overload and rare anaphylactoid reactions; contraindicated in severe anemia or heart failure without volume depletion.',
      osmotic: 'Mannitol draws water from intracellular space into vascular tree; causes profound osmotic diuresis. Monitor renal function, electrolytes, and serum osmolality (< 320 mOsm/kg).',
    },
    // detail view
    detailComposition: 'Composition per litre', detailFormula: 'Formula (per litre)', detailFlags: 'Points to watch', detailThai: 'Registration by country',
    detailNoThai: 'No current Thai registration was found (searched 14 Oct 2026).',
    detailThaiNote: 'Each record below was opened on 14 Oct 2026; its formula matches this card. The list may not include every maker.',
    detailOpenRecord: 'Open register record',
    labelMEq: (v) => `label: ${v} mEq/L`,
    srcShow: 'Show sources', srcHide: 'Hide sources', srcLabel: 'Source',
    srcUnknown: 'No reference found', srcCalc: 'Calculated from the formula above',
    srcReg: (reg) => `Thai FDA register record ${reg}`,
    srcKcalFactor: '3.4 kcal per g of dextrose hydrous (US labels)',
    phOther: (ph) => `Not on this product's documents. Ringer's acetate of the same formula (Able Medical) states pH ${ph}.`,
    sameAsPla: 'Same formula as Plasma-Lyte A (US label: 294 mOsm/L, 21 kcal/L, pH 7.4).',
    thNotes: {
      sterofundinMg: 'The Thai register record lists magnesium chloride hexahydrate 0.37 g/L; the SmPC gives 0.20 g/L (1.0 mmol/L), which is used here.',
      acetar5Other: "Two other 5% dextrose in Ringer's acetate products are registered with dextrose monohydrate instead of anhydrous dextrose (a little less glucose): ARI-5 (Thai Nakorn Patana, 2A 604/31) and 5% Dextrose in Acetated Ringer's (Starlab, 2C 21/51).",
    },
    plasma: 'Plasma', plasmaNote: 'Human plasma: Myburgh & Mythen, NEJM 2013',
    // selection bar and compare
    selectMax: 'Up to 6 fluids can be selected', compare: 'Compare', compareTitle: 'Compare fluids', compareSub: 'Per litre, next to human plasma',
    naChangeBtn: 'Na⁺ change',
    // key
    keyValues: 'Values', keyValuesText: 'All values are per litre of fluid. Sodium, potassium, chloride, calcium, magnesium and buffers are in mmol/L; calcium and magnesium printed in mEq/L on a label are divided by 2.',
    keyCalc: 'Calculated from the formula: the label (or the Thai FDA register record) gives the salts in grams, and the amount of each ion is worked out from them. Osmolarity "calc." adds up all the particles, as the US labels do.',
    keyUnknown: 'No document for this product gives the value.',
    keyNone: 'The fluid contains none.',
    keyCountries: 'Country chips', keyChipCurrent: 'Registered (country colour); the line beside it names the makers', keyChipPast: 'Registration ended (withdrawn or discontinued)', keyChipNever: 'Not registered: no product of this fluid and strength found', keyBands: 'Sodium bands', keyFlags: 'Warnings at the bottom of each card', keyFamilies: 'Types',
    // guides
    guides: { choose: 'Fluid choice', maint: 'Maintenance', sodium: 'Sodium & 3% bolus', kguide: 'Potassium guide', dka: 'DKA / HHS', water: 'Water deficit', drip: 'Drip rate', gir: 'GIR Calculator', icp: 'ICP & Osmotherapy', albumin: 'Albumin Guide' },
    guideShort: { choose: 'Choice', maint: 'Maint.', sodium: 'Na⁺', kguide: 'K⁺', dka: 'DKA', water: 'Water', drip: 'Drip', gir: 'GIR', icp: 'ICP', albumin: 'Albumin' },
    // disclaimer and references
    discTitle: 'Disclaimer',
    discPoints: [
      'This guide supports, and does not replace, clinical judgement. Check the label of the bag you are using: products from different makers may differ.',
      'Values come from product labels and the Thai FDA register. Values marked "calc." are worked out from the printed formula; "Unknown" means no document was found.',
      'The calculators give estimates only. Recheck serum sodium, potassium and fluid balance regularly.',
      'For adults only. Children need their own fluid guidance.',
    ],
    discReviewed: 'Data checked 14 October 2026.',
    refTitle: 'References', refUsedFor: 'Used for',
    refUsed: {
      nice: 'Resuscitation sodium range, maintenance amounts, chloride monitoring, 5 Rs', ssc: 'Fluid choice in sepsis', myburgh: 'Human plasma values', adrogueHypo: 'Sodium change per litre formula and total body water', adrogueHyper: 'Hypernatraemia correction rate',
      spasovski: 'Hyponatraemia correction limits', devine: 'Ideal body weight', thfda: 'Thai registrations, holders and formulas',
      szczech: 'Free water deficit formula and correction limit', drugsfda: 'US registration status', dmd: 'UK products and status', hpra: 'EU (Ireland) registration status', pmda: 'Japan registrations',
      adaDka: 'DKA and HHS fluid resuscitation phases, dextrose addition threshold, and potassium replenishment protocol', katz: 'Corrected sodium formula in hyperglycemia', sternsK: 'Potassium deficit estimation, peripheral vs central infusion rates, and magnesium alert',
      aspenGir: 'Glucose infusion rate limits, maximal oxidation capacity (4–7 mg/kg/min) and daily dextrose calculation',
      btfIcp: 'ICP osmotherapy targets (serum Na 145–155, Osm < 320), Mannitol vs 3% NaCl dosing, and CPP targets (60–70 mmHg)',
      aasldAlb: 'AASLD guidelines for large-volume paracentesis (6–8 g/L removed) and hepatorenal syndrome diagnostic challenge (1 g/kg/day)',
      sortSbp: 'Sort et al. SBP albumin protocol (1.5 g/kg day 1, 1.0 g/kg day 3)',
      safeAlb: 'SAFE trial volume resuscitation and SAFE-TBI caution against albumin in traumatic brain injury',
      usNaCl09: 'NSS values', usNaCl045: 'NSS/2 values, hyponatraemia warning', usNaCl3: '3% NaCl values, large-vein warning', usDex: '5% and 10% dextrose values, central vein at 900 mOsm/L or more, blood glucose', usDexNaCl: '5%D/NSS and 5%D/N/2 values, hyponatraemia warning', usKDexNaCl: '5%D/N/2 with KCl values',
      usLR: "Lactated Ringer's values, citrated-blood warning", usPL: 'Plasma-Lyte A values', usAlb5: 'Albumin 5% values, iso-oncotic volume expansion', usAlb: 'Albumin 20% values, oncotic colloid warnings', usAlb25: 'Albumin 25% values, hyper-oncotic colloid shift warnings', usMan: 'Mannitol 20% values, osmotic diuresis alerts', thTopBal: 'TOP Balance values', thAcetRinger: "Ringer's acetate pH, calcium and ceftriaxone warning", euSterofundin: 'Sterofundin ISO values',
    },
    madeBy: 'Made by Warodom Phaenthong, M.D.',
    changelogTitle: 'Version history', changelogSub: 'What changed and when', latest: 'Latest', newFeatures: 'New', bugFixes: 'Fixes',
  },
  th: {
    isTh: true,
    title: 'คู่มือสารน้ำทางหลอดเลือดดำ (ผู้ใหญ่)',
    subtitle: 'สารน้ำคริสตัลลอยด์ทางหลอดเลือดดำในไทย สหรัฐฯ สหราชอาณาจักร สหภาพยุโรป และญี่ปุ่น: ส่วนประกอบต่อลิตร ทะเบียนในแต่ละประเทศ และเครื่องคำนวณข้างเตียง',
    discLink: 'ข้อควรทราบและเอกสารอ้างอิง ↓',
    themeToLight: 'เปลี่ยนเป็นโหมดสว่าง', themeToDark: 'เปลี่ยนเป็นโหมดมืด',
    searchPlaceholder: 'ค้นหาสารน้ำ ชื่อย่อ (NSS, D5W, RLS) หรือบริษัท…', searchPlaceholderShort: 'ค้นหาสารน้ำ…',
    searchOpen: 'ค้นหา', searchClose: 'ปิดการค้นหา',
    sortLabel: 'เรียงลำดับ', sortType: 'ชนิด (น้ำเกลือก่อน)', sortNameAsc: 'ชื่อ (A–Z)', sortNaDesc: 'โซเดียม (มาก → น้อย)', sortNaAsc: 'โซเดียม (น้อย → มาก)', sortClAsc: 'คลอไรด์ (น้อย → มาก)', sortOsmAsc: 'ออสโมลาริตี (น้อย → มาก)',
    gridView: 'มุมมองการ์ด', listView: 'มุมมองรายการ', filtersBtn: 'ตัวกรอง',
    typeLabel: 'ชนิด', families: { saline: 'น้ำเกลือ', balanced: 'Balanced', dextrose: 'เดกซ์โทรส', dexsaline: 'เดกซ์โทรส-เกลือ', hypertonic: 'เกลือเข้มข้น', colloid: 'คอลลอยด์' },
    familyLong: { saline: 'โซเดียมคลอไรด์ในน้ำ', balanced: 'Balanced crystalloid (มีบัฟเฟอร์)', dextrose: 'เดกซ์โทรสในน้ำ', dexsaline: 'เดกซ์โทรสผสมโซเดียมคลอไรด์', hypertonic: 'น้ำเกลือความเข้มข้นสูง', colloid: 'สารน้ำคอลลอยด์ (เพิ่มปริมาตรพลาสมา)' },
    naLabel: 'Na⁺', naBands: { low: '< 130', resus: '130–154', high: '> 154' }, naBandLong: { low: 'โซเดียมต่ำกว่า 130 mmol/L', resus: 'โซเดียม 130–154 mmol/L', high: 'โซเดียมสูงกว่า 154 mmol/L' },
    naTitle: 'ช่วงโซเดียม NICE CG174 1.3.1: สารน้ำคริสตัลลอยด์สำหรับกู้ชีพมีโซเดียม 130–154 mmol/L',
    phLabel: 'pH', phBands: { acidic: '< 6.0', physio: '6.0–7.5' }, phBandLong: { acidic: 'กรด (pH < 6.0)', physio: 'ใกล้เคียงพลาสมา (pH 6.0–7.5)' },
    phTitle: 'ช่วงความเป็นกรด-ด่าง: สารน้ำที่เป็นกรด เทียบกับสารน้ำที่มีบัฟเฟอร์ใกล้เคียงพลาสมา',
    containsLabel: 'มี', contains: { k: 'K⁺', ca: 'Ca²⁺', mg: 'Mg²⁺', glucose: 'กลูโคส', buffer: 'บัฟเฟอร์' },
    containsLong: { k: 'มีโพแทสเซียม', ca: 'มีแคลเซียม', mg: 'มีแมกนีเซียม', glucose: 'มีกลูโคส', buffer: 'มีบัฟเฟอร์' },
    thLabel: 'อย.',
    countriesLabel: "ประเทศ",
    countriesAll: "ทั้งหมด",
    countriesAllTitle: "แสดงทุกประเทศ",
    countryCodes: {"th":"TH","us":"US","uk":"UK","eu":"EU","jp":"JP"},
    countryNames: {"th":"ไทย","us":"สหรัฐอเมริกา","uk":"สหราชอาณาจักร","eu":"สหภาพยุโรป (รายการไอร์แลนด์)","jp":"ญี่ปุ่น"},
    regLabel: "อย.",
    regTitle: "สถานะทะเบียนในประเทศที่เลือก",
    regOpts: {"current":"ปัจจุบัน","past":"เคยมี","never":"ไม่เคยมี"},
    regStatus: {"current":"มีทะเบียน","past":"ทะเบียนสิ้นสุดแล้ว","never":"ไม่มีทะเบียน"},
    regNeverText: (c) => `ไม่พบผลิตภัณฑ์สารน้ำชนิดและความแรงนี้ใน${c} (ค้นหา 14 ต.ค. 2569)`,
    noCountry: "เลือกอย่างน้อยหนึ่งประเทศ",
    registerNames: {"th":"ทะเบียนยา อย.","us":"Drugs@FDA","uk":"NHS dm+d","eu":"HPRA (ไอร์แลนด์)","jp":"PMDA"},
    regMatchNote: "ประเทศอื่น: ผลิตภัณฑ์สารน้ำชนิดและความแรงเดียวกันในรายการของประเทศนั้น สูตรตำรับอาจต่างกันเล็กน้อยตามผู้ผลิตและประเทศ (เช่น Hartmann's solution ในสหราชอาณาจักรและไอร์แลนด์) ตรวจฉลากในประเทศนั้น UK = ผลิตภัณฑ์ที่จัดส่งให้ NHS (dm+d) EU = รายการของไอร์แลนด์ (HPRA) และทะเบียนเนเธอร์แลนด์สำหรับ Sterofundin ISO",
    regNotes: {"jpNoHalf":"ญี่ปุ่น: ไม่พบ 0.45% โซเดียมคลอไรด์ชนิดหยด","uk27":"สหราชอาณาจักร: มี 2.7% โซเดียมคลอไรด์แทน (Fresenius Kabi)","jp10":"ญี่ปุ่น: พบเฉพาะแอมพูล 10% โซเดียมคลอไรด์","jpNoDexSaline":"ญี่ปุ่น: ไม่พบเดกซ์โทรส-เกลือความแรงนี้","euNoKDexHalf":"ไอร์แลนด์: โพแทสเซียมคลอไรด์ผสมสำเร็จมีใน 5% กลูโคสหรือ 0.9% เกลือ ไม่มีใน 5% กลูโคสกับ 0.45% เกลือ","ukK40":"สหราชอาณาจักร: พบเฉพาะความแรง 0.15% (20 mmol/L) ใน 5% กลูโคสกับ 0.45% เกลือ","ukLowSaline":"สหราชอาณาจักร: เดกซ์โทรส-เกลือโซเดียมต่ำคือ 0.18% โซเดียมคลอไรด์ใน 4% กลูโคส","eu033":"ไอร์แลนด์: 0.3% โซเดียมคลอไรด์มากับ 3.3% กลูโคส ไม่ใช่ 5%","euLowSaline":"ไอร์แลนด์: เดกซ์โทรส-เกลือโซเดียมต่ำคือ 0.18% โซเดียมคลอไรด์ใน 4% กลูโคส","us02":"สหรัฐฯ: ความแรงโซเดียมต่ำคือ 0.2% โซเดียมคลอไรด์ใน 5% เดกซ์โทรส","hartmann":"จำหน่ายในชื่อ compound sodium lactate (Hartmann's solution) สูตรต่างจาก Lactated Ringer's ของสหรัฐฯ เล็กน้อย","sameAsPlaAbroad":"สูตรเดียวกันจำหน่ายในชื่อ Plasma-Lyte (ดูการ์ดของ Plasma-Lyte)","euNl":"ไม่อยู่ในรายการของไอร์แลนด์ ได้รับอนุญาตในเนเธอร์แลนด์ (CBG, RVG 27041)"},
    chipsLabel: 'ตัวกรองที่ใช้อยู่', clearShort: 'ล้าง', clearFilters: 'ล้างตัวกรองทั้งหมด', chipRemove: (l) => `เอาตัวกรองออก: ${l}`,
    countShowing: 'แสดง', countOf: 'จาก', countFluids: 'ชนิด',
    legendBtn: 'คำอธิบาย', legendTitle: 'คำอธิบายสัญลักษณ์', legendSub: 'วิธีอ่านการ์ด',
    noFluids: 'ไม่พบสารน้ำที่ตรงกับตัวกรอง',
    select: 'เลือก', selected: 'เลือกแล้ว', detailBtn: 'รายละเอียด', detailClose: 'ปิด', clear: 'ล้าง', remove: 'นำออก',
    exportPng: 'ส่งออกเป็น PNG', exportPngTitle: 'ดาวน์โหลดการ์ดสรุปข้อมูลเป็นรูปภาพ PNG', exportComparePng: 'ส่งออกเป็น PNG',
    perLitre: 'ต่อลิตร', unknown: 'ไม่ทราบ', none: '–', calc: 'คำนวณ', calcTitle: 'คำนวณจากสูตรตำรับ',
    rows: { na: 'โซเดียม', k: 'โพแทสเซียม', cl: 'คลอไรด์', ca: 'แคลเซียม', mg: 'แมกนีเซียม', buffer: 'บัฟเฟอร์', dex: 'เดกซ์โทรส', kcal: 'พลังงาน', osm: 'ออสโมลาริตี', ph: 'pH' },
    units: { mmol: 'mmol/L', osm: 'mOsm/L', g: 'g/L', kcal: 'kcal/L' },
    buffers: { lactate: 'แลคเตต', acetate: 'อะซีเตต', gluconate: 'กลูโคเนต', malate: 'มาเลต' },
    hydrous: 'โมโนไฮเดรต', anhydrous: 'แอนไฮดรัส',
    thCount: (n) => (n ? `อย.: มีทะเบียน ${n} รายการ` : 'ไม่มีทะเบียนในประเทศไทย'),
    flags: {
      vein: 'เกิน 900 mOsm/L: ให้ทางหลอดเลือดใหญ่หรือ central',
      low: 'Hypotonic ในร่างกาย: เสี่ยงโซเดียมต่ำ',
      ca: 'มีแคลเซียม: ห้ามให้ร่วมกับ ceftriaxone หรือเลือดที่มี citrate',
      glu: 'มีกลูโคส: ติดตามระดับน้ำตาลในเลือด',
      cl: 'คลอไรด์เกิน 120 mmol/L: ตรวจคลอไรด์ทุกวัน',
      resus: 'โซเดียม 130–154 mmol/L: ช่วงสำหรับกู้ชีพ',
      colloid: 'คอลลอยด์: ติดตามภาวะน้ำเกินและปฏิกิริยาแพ้',
      osmotic: 'สารขับปัสสาวะออสโมติก: ติดตามปริมาณปัสสาวะและออสโมลาลิตี',
    },
    flagNotes: {
      vein: 'ฉลากสหรัฐฯ: สารละลาย hypertonic อาจทำลายหลอดเลือดดำ ควรให้ทางหลอดเลือดดำใหญ่ และพิจารณา central vein เมื่อ 900 mOsm/L ขึ้นไป',
      low: 'ฉลากเตือนว่าสารน้ำที่มีโซเดียมน้อยกว่าโซเดียมในเลือดผู้ป่วย รวมถึงสารละลายเดกซ์โทรสเมื่อกลูโคสถูกใช้ไปแล้ว ทำให้เกิดโซเดียมต่ำได้',
      ca: "SmPC ของ Ringer's acetate (อย.): ห้ามผสมหรือให้ ceftriaxone พร้อมกับสารน้ำที่มีแคลเซียม แม้ผ่านสายคนละเส้น ฉลาก Lactated Ringer's: ห้ามให้ผ่านชุดสายเดียวกับเลือดที่มี citrate (เสี่ยงเลือดแข็งตัว)",
      glu: 'ฉลากเดกซ์โทรสสหรัฐฯ: เดกซ์โทรสทำให้น้ำตาลในเลือดสูงขึ้นได้ ควรติดตามระดับน้ำตาลและให้อินซูลินตามความจำเป็น',
      cl: 'NICE CG174 1.2.5: หลังให้สารน้ำที่มีคลอไรด์เกิน 120 mmol/L ให้ตรวจคลอไรด์ในเลือดทุกวัน',
      resus: 'NICE CG174 1.3.1: ใช้คริสตัลลอยด์ที่มีโซเดียม 130–154 mmol/L สำหรับกู้ชีพ (bolus 500 mL ภายในไม่เกิน 15 นาที)',
      colloid: 'คอลลอยด์คงอยู่ในหลอดเลือดเป็นหลักด้วยแรงดันออนโคติก ระวังภาวะสารน้ำเกินและการแพ้รุนแรง ห้ามใช้ในภาวะซีดรุนแรงหรือหัวใจล้มเหลวที่ไม่ขาดปริมาตร',
      osmotic: 'แมนนิทอลดึงน้ำจากเซลล์เข้าสู่หลอดเลือด ทำให้ปัสสาวะออกมากอย่างรวดเร็ว ตรวจการทำงานของไต อิเล็กโทรไลต์ และออสโมลาลิตีในเลือด (< 320 mOsm/kg)',
    },
    detailComposition: 'ส่วนประกอบต่อลิตร', detailFormula: 'สูตรตำรับ (ต่อลิตร)', detailFlags: 'ข้อควรระวัง', detailThai: 'ทะเบียนตามประเทศ',
    detailNoThai: 'ไม่พบทะเบียนที่ยังคงอยู่ในประเทศไทย (ค้นหา 14 ต.ค. 2569)',
    detailThaiNote: 'เปิดดูข้อมูลทะเบียนทุกรายการด้านล่างเมื่อ 14 ต.ค. 2569 สูตรตำรับตรงกับการ์ดนี้ รายการอาจไม่ครบทุกผู้ผลิต',
    detailOpenRecord: 'เปิดข้อมูลทะเบียน',
    labelMEq: (v) => `ฉลาก: ${v} mEq/L`,
    srcShow: 'แสดงแหล่งอ้างอิง', srcHide: 'ซ่อนแหล่งอ้างอิง', srcLabel: 'แหล่งอ้างอิง',
    srcUnknown: 'ไม่พบเอกสารอ้างอิง', srcCalc: 'คำนวณจากสูตรตำรับด้านบน',
    srcReg: (reg) => `ข้อมูลทะเบียน อย. ${reg}`,
    srcKcalFactor: '3.4 kcal ต่อกรัมของเดกซ์โทรสโมโนไฮเดรต (ฉลากสหรัฐฯ)',
    phOther: (ph) => `ไม่มีในเอกสารของผลิตภัณฑ์นี้ Ringer's acetate สูตรเดียวกัน (Able Medical) ระบุ pH ${ph}`,
    sameAsPla: 'สูตรเดียวกับ Plasma-Lyte A (ฉลากสหรัฐฯ: 294 mOsm/L, 21 kcal/L, pH 7.4)',
    thNotes: {
      sterofundinMg: 'ข้อมูลทะเบียนไทยระบุแมกนีเซียมคลอไรด์เฮกซะไฮเดรต 0.37 g/L แต่ SmPC ระบุ 0.20 g/L (1.0 mmol/L) ซึ่งใช้ในแอปนี้',
      acetar5Other: "มีผลิตภัณฑ์ 5% เดกซ์โทรสใน Ringer's acetate อีก 2 รายการที่ใช้เดกซ์โทรสโมโนไฮเดรตแทนแอนไฮดรัส (กลูโคสน้อยกว่าเล็กน้อย): ARI-5 (ไทยนครพัฒนา, 2A 604/31) และ 5% Dextrose in Acetated Ringer's (สตาร์แล็บ, 2C 21/51)",
    },
    plasma: 'พลาสมา', plasmaNote: 'พลาสมามนุษย์: Myburgh & Mythen, NEJM 2013',
    selectMax: 'เลือกได้สูงสุด 6 ชนิด', compare: 'เปรียบเทียบ', compareTitle: 'เปรียบเทียบสารน้ำ', compareSub: 'ต่อลิตร เทียบกับพลาสมามนุษย์',
    naChangeBtn: 'การเปลี่ยน Na⁺',
    keyValues: 'ค่าต่าง ๆ', keyValuesText: 'ทุกค่าเป็นต่อลิตรของสารน้ำ โซเดียม โพแทสเซียม คลอไรด์ แคลเซียม แมกนีเซียม และบัฟเฟอร์ เป็น mmol/L แคลเซียมและแมกนีเซียมที่ฉลากระบุเป็น mEq/L หารด้วย 2',
    keyCalc: 'คำนวณจากสูตรตำรับ: ฉลาก (หรือข้อมูลทะเบียน อย.) ระบุเกลือเป็นกรัม แล้วคำนวณปริมาณไอออนจากเกลือนั้น ออสโมลาริตีที่ "คำนวณ" คือผลรวมของอนุภาคทั้งหมด แบบเดียวกับฉลากสหรัฐฯ',
    keyUnknown: 'ไม่มีเอกสารของผลิตภัณฑ์นี้ที่ระบุค่า',
    keyNone: 'สารน้ำนี้ไม่มีส่วนประกอบนี้',
    keyCountries: 'ชิปประเทศ', keyChipCurrent: 'มีทะเบียน (สีของประเทศ) ข้างชิประบุผู้ผลิต', keyChipPast: 'ทะเบียนสิ้นสุดแล้ว (ถอนหรือเลิกจำหน่าย)', keyChipNever: 'ไม่มีทะเบียน: ไม่พบผลิตภัณฑ์ชนิดและความแรงนี้', keyBands: 'ช่วงโซเดียม', keyFlags: 'คำเตือนด้านล่างของแต่ละการ์ด', keyFamilies: 'ชนิด',
    guides: { choose: 'เลือกสารน้ำ', maint: 'บำรุงรักษา', sodium: 'Na⁺ และ 3% bolus', kguide: 'คู่มือโพแทสเซียม', dka: 'โปรโตคอล DKA/HHS', water: 'การขาดน้ำ', drip: 'อัตราหยด', gir: 'เครื่องคำนวณ GIR', icp: 'ICP และ Osmotherapy', albumin: 'แนวทางใช้อัลบูมิน' },
    guideShort: { choose: 'เลือก', maint: 'บำรุง', sodium: 'Na⁺', kguide: 'K⁺', dka: 'DKA', water: 'น้ำ', drip: 'หยด', gir: 'GIR', icp: 'ICP', albumin: 'อัลบูมิน' },
    discTitle: 'ข้อควรทราบ',
    discPoints: [
      'คู่มือนี้ช่วยประกอบการตัดสินใจทางคลินิก ไม่ได้ใช้แทน ตรวจสอบฉลากของถุงที่ใช้จริงเสมอ เพราะผลิตภัณฑ์ต่างผู้ผลิตอาจแตกต่างกัน',
      'ค่าต่าง ๆ มาจากฉลากผลิตภัณฑ์และทะเบียน อย. ค่าที่มีเครื่องหมาย "คำนวณ" คำนวณจากสูตรตำรับ ส่วน "ไม่ทราบ" คือไม่พบเอกสาร',
      'เครื่องคำนวณให้ค่าประมาณเท่านั้น ควรตรวจโซเดียม โพแทสเซียม และสมดุลสารน้ำซ้ำเป็นระยะ',
      'สำหรับผู้ใหญ่เท่านั้น เด็กต้องใช้แนวทางเฉพาะ',
    ],
    discReviewed: 'ตรวจสอบข้อมูล 14 ตุลาคม 2569',
    refTitle: 'เอกสารอ้างอิง', refUsedFor: 'ใช้สำหรับ',
    refUsed: {
      nice: 'ช่วงโซเดียมสำหรับกู้ชีพ ปริมาณสารน้ำบำรุงรักษา การติดตามคลอไรด์ 5 Rs', ssc: 'การเลือกสารน้ำในภาวะติดเชื้อในกระแสเลือด', myburgh: 'ค่าพลาสมามนุษย์', adrogueHypo: 'สูตรการเปลี่ยนแปลงโซเดียมต่อลิตรและน้ำในร่างกาย', adrogueHyper: 'อัตราการแก้โซเดียมสูง',
      spasovski: 'ขีดจำกัดการแก้โซเดียมต่ำ', devine: 'น้ำหนักตัวในอุดมคติ', thfda: 'ทะเบียนไทย ผู้รับอนุญาต และสูตรตำรับ',
      szczech: 'สูตรการขาดน้ำอิสระและขีดจำกัดการแก้ไข', drugsfda: 'สถานะทะเบียนสหรัฐฯ', dmd: 'ผลิตภัณฑ์และสถานะในสหราชอาณาจักร', hpra: 'สถานะทะเบียน EU (ไอร์แลนด์)', pmda: 'ทะเบียนญี่ปุ่น',
      adaDka: 'ขั้นตอนการให้สารน้ำ DKA/HHS เกณฑ์การเติมเดกซ์โทรส และความปลอดภัยของโพแทสเซียม', katz: 'สูตรคำนวณโซเดียมปรับค่าเมื่อน้ำตาลในเลือดสูง', sternsK: 'การประมาณการโพแทสเซียมที่ขาด อัตราการให้ทางหลอดเลือดดำส่วนปลายและส่วนกลาง และการตรวจแมกนีเซียม',
      aspenGir: 'ขีดจำกัดอัตราการให้กลูโคส (GIR) อัตราเผาผลาญสูงสุด (4–7 mg/kg/นาที) และพลังงานเดกซ์โทรส',
      btfIcp: 'เกณฑ์การใช้ Osmotherapy ลด ICP (โซเดียม 145–155, Osm < 320), ขนาดยา Mannitol เทียบกับ 3% NaCl และเป้าหมาย CPP (60–70 mmHg)',
      aasldAlb: 'แนวทาง AASLD สำหรับการเจาะระบายน้ำในช่องท้องปริมาณมาก (6–8 g/L) และการทดสอบวินิจฉัย Hepatorenal syndrome (1 g/kg/วัน)',
      sortSbp: 'Sort et al. ขนาดยาอัลบูมินในภาวะเยื่อบุช่องท้องอักเสบติดเชื้อ SBP (1.5 g/kg วันที่ 1 และ 1.0 g/kg วันที่ 3)',
      safeAlb: 'การศึกษา SAFE กู้ชีพด้วยสารน้ำและข้อห้ามใช้อัลบูมินในผู้ป่วยบาดเจ็บที่ศีรษะ (SAFE-TBI)',
      usNaCl09: 'ค่าของ NSS', usNaCl045: 'ค่าของ NSS/2', usNaCl3: 'ค่าของ 3% NaCl คำเตือนให้ทางหลอดเลือดใหญ่', usDex: 'ค่าของ 5% และ 10% เดกซ์โทรส central vein เมื่อ 900 mOsm/L ขึ้นไป น้ำตาลในเลือด', usDexNaCl: 'ค่าของ 5%D/NSS และ 5%D/N/2 คำเตือนโซเดียมต่ำ', usKDexNaCl: 'ค่าของ 5%D/N/2 ผสม KCl',
      usLR: "ค่าของ Lactated Ringer's คำเตือนเรื่องแคลเซียม", usPL: 'ค่าของ Plasma-Lyte A', usAlb5: 'ข้อมูลฉลาก Albumin 5% การขยายปริมาตรในหลอดเลือดแบบ Iso-oncotic', usAlb: 'ข้อมูล Human Albumin 20% และข้อควรระวังคอลลอยด์', usAlb25: 'ข้อมูลฉลาก Albumin 25% ข้อควรระวังการดึงน้ำแบบ Hyper-oncotic', usMan: 'ข้อมูล Mannitol 20% และข้อควรระวังการขับปัสสาวะออสโมติก', thTopBal: 'ค่าของ TOP Balance', thAcetRinger: "pH ของ Ringer's acetate คำเตือนแคลเซียมกับ ceftriaxone", euSterofundin: 'ค่าของ Sterofundin ISO',
    },
    madeBy: 'Made by Warodom Phaenthong, M.D.',
    changelogTitle: 'ประวัติเวอร์ชัน', changelogSub: 'สิ่งที่เปลี่ยนแปลงและวันที่', latest: 'ล่าสุด', newFeatures: 'ใหม่', bugFixes: 'แก้ไข',
  },
};

// =====================================================================
// Display helpers
// =====================================================================
const FAMILY_STYLE = {
  saline: { tag: 'bg-sky-100 text-sky-800', hex: '#0ea5e9', edge: 'border-t-sky-500' },
  balanced: { tag: 'bg-emerald-100 text-emerald-800', hex: '#10b981', edge: 'border-t-emerald-500' },
  dextrose: { tag: 'bg-amber-100 text-amber-800', hex: '#f59e0b', edge: 'border-t-amber-500' },
  dexsaline: { tag: 'bg-violet-100 text-violet-800', hex: '#8b5cf6', edge: 'border-t-violet-500' },
  hypertonic: { tag: 'bg-rose-100 text-rose-800', hex: '#f43f5e', edge: 'border-t-rose-500' },
  colloid: { tag: 'bg-purple-100 text-purple-800', hex: '#9333ea', edge: 'border-t-purple-500' },
};
const FAMILIES = ['saline', 'balanced', 'dextrose', 'dexsaline', 'hypertonic', 'colloid'];
const NA_BANDS = ['low', 'resus', 'high'];
const NA_BAND_STYLE = { low: ['bg-amber-700 text-white shadow-sm', 'text-amber-800 hover:bg-amber-50'], resus: ['bg-emerald-700 text-white shadow-sm', 'text-emerald-800 hover:bg-emerald-50'], high: ['bg-rose-700 text-white shadow-sm', 'text-rose-800 hover:bg-rose-50'] };
const PH_BANDS = ['acidic', 'physio'];
const PH_BAND_STYLE = { acidic: ['bg-amber-700 text-white shadow-sm', 'text-amber-800 hover:bg-amber-50'], physio: ['bg-teal-700 text-white shadow-sm', 'text-teal-800 hover:bg-teal-50'] };
const CONTAINS = ['k', 'ca', 'mg', 'glucose', 'buffer'];
// Ion tiles on the cards: colour per ion
const ION_TILES = [
  ['na', 'Na⁺', 'bg-sky-50 border-sky-200 text-sky-800'],
  ['k', 'K⁺', 'bg-violet-50 border-violet-200 text-violet-800'],
  ['cl', 'Cl⁻', 'bg-teal-50 border-teal-200 text-teal-800'],
  ['ca', 'Ca²⁺', 'bg-orange-50 border-orange-200 text-orange-800'],
  ['mg', 'Mg²⁺', 'bg-lime-50 border-lime-200 text-lime-800'],
];
const fmt = (v) => (v == null ? null : Number.isInteger(v) ? String(v) : v >= 10 ? String(Math.round(v)) : String(+v.toFixed(2)));

// Warnings at the bottom of a card: chosen by rule; each names the documents it comes from
const FLAG_RULES = [
  ['vein', (f) => (num(f, 'osm') || 0) >= 900, ['usNaCl3', 'usDex'], 'border-rose-200 bg-rose-50 text-rose-800'],
  ['low', (f) => naBand(f) === 'low', ['usNaCl045', 'usDexNaCl', 'usDex'], 'border-amber-200 bg-amber-50 text-amber-800'],
  ['ca', (f) => hasIon(f, 'ca'), ['thAcetRinger', 'usLR'], 'border-orange-200 bg-orange-50 text-orange-800'],
  ['cl', (f) => (num(f, 'cl') || 0) > 120, ['nice'], 'border-yellow-200 bg-yellow-50 text-yellow-800'],
  ['glu', (f) => dexOf(f) > 0, ['usDex', 'usDexNaCl'], 'border-sky-200 bg-sky-50 text-sky-800'],
  ['resus', (f) => naBand(f) === 'resus' && !dexOf(f) && f.family !== 'colloid', ['nice'], 'border-emerald-200 bg-emerald-50 text-emerald-800'],
  ['colloid', (f) => f.family === 'colloid', ['usAlb'], 'border-purple-200 bg-purple-50 text-purple-800'],
  ['osmotic', (f) => f.id === 'man20', ['usMan'], 'border-rose-200 bg-rose-50 text-rose-800'],
];
const flagsOf = (f) => FLAG_RULES.filter(([, test]) => test(f));
const srcItem = (key) => ({ label: (REFERENCES.find(r => r.key === key) || SOURCES[key] || {}).cite || key, url: refUrl(key) || (SOURCES[key] || {}).url });
const SHORT_SRC = { szczech: 'Szczech 2025', nice: 'NICE CG174', ssc: 'SSC 2021', myburgh: 'Myburgh 2013', adrogueHypo: 'Adrogué 2000', adrogueHyper: 'Adrogué 2000', spasovski: 'Spasovski 2014', devine: 'Devine 1974', btfIcp: 'BTF / ENLS', aasldAlb: 'AASLD 2021', sortSbp: 'Sort 1999', safeAlb: 'SAFE 2004' };

// --- IV bag picture: bag tinted by type, liquid level, port ---
const BagIcon = ({ family, className }) => {
  const c = FAMILY_STYLE[family].hex;
  return (
    <svg viewBox="0 0 64 80" className={className} fill="none" aria-hidden="true">
      <circle cx="32" cy="6" r="3.5" stroke="#94a3b8" strokeWidth="2" />
      <path d="M32 9.5V13" stroke="#94a3b8" strokeWidth="2" />
      <rect x="12" y="13" width="40" height="50" rx="9" fill={c} fillOpacity="0.12" stroke={c} strokeWidth="2.5" />
      <path d="M14.5 30h35v22a8 8 0 0 1-8 8h-19a8 8 0 0 1-8-8z" fill={c} fillOpacity="0.45" />
      {[22, 30, 38, 46].map(y => <path key={y} d={`M17 ${y}h6`} stroke={c} strokeWidth="1.6" strokeLinecap="round" />)}
      <rect x="28.5" y="63" width="7" height="8" rx="1.5" fill={c} fillOpacity="0.6" stroke={c} strokeWidth="1.5" />
      <path d="M32 71v4" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 75.5c-1.6 1.8-2 2.6-2 3.2a2 2 0 0 0 4 0c0-.6-.4-1.4-2-3.2z" fill={c} />
    </svg>
  );
};
const DropIcon = ({ className }) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 2.7c-3.5 4.3-6 7.7-6 11.1a6 6 0 0 0 12 0c0-3.4-2.5-6.8-6-11.1z" /></svg>);
const DripIcon = ({ className }) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9 2h6M10 2v4l-2 3v6a4 4 0 0 0 8 0V9l-2-3V2" /><path d="M12 19v3" /></svg>);
const ScaleIcon = ({ className }) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 3v18M5 7h14M5 7l-3 7a3.5 3.5 0 0 0 6 0zM19 7l-3 7a3.5 3.5 0 0 0 6 0zM8 21h8" /></svg>);

const CalcMark = ({ t }) => <sup className="ml-0.5 text-[9px] font-bold text-fuchsia-600" title={t.calcTitle} data-calc>{t.calc}</sup>;
const UnknownText = ({ t }) => <span className="text-slate-400 font-bold" data-unknown>{t.unknown}</span>;
// One value with its unit, "calc." mark, "–" for none or Unknown
const Val = ({ f, k, t, unit = true }) => {
  const x = fieldOf(f, k);
  if (!x) return <UnknownText t={t} />;
  if (!x.v) return <span className="text-slate-400">{t.none}</span>;
  return <span className="tabular-nums">{fmt(x.v)}{unit && <span className="text-[10px] font-medium opacity-70 ml-0.5">{k === 'osm' ? t.units.osm : k === 'kcal' ? t.units.kcal : k === 'dex' ? t.units.g : t.units.mmol}</span>}{x.calc && <CalcMark t={t} />}</span>;
};
const phOf = (f) => f.label.ph || null;
const phNumOf = (f) => { const s = phOf(f); if (!s) return null; const m = /(\d+(?:\.\d+)?)/.exec(s); return m ? parseFloat(m[1]) : null; };
const phBandOf = (f) => { const n = phNumOf(f); if (n == null) return null; return n < 6.0 ? 'acidic' : (n <= 7.5 ? 'physio' : null); };
const BufferText = ({ f, t }) => {
  const b = bufferOf(f);
  if (!b.length) return <span className="text-slate-400">{t.none}</span>;
  const calc = b.some(([k]) => fieldOf(f, k).calc);
  return (
    <span className="tabular-nums">
      {b.map(([k, v], i) => (
        <span key={k} className="inline-block whitespace-nowrap">
          {i > 0 && <span> + </span>}
          {`${t.buffers[k]} ${fmt(v)}`}
          {i === b.length - 1 && calc && <CalcMark t={t} />}
        </span>
      ))}
    </span>
  );
};
const DexText = ({ f, t }) => {
  const g = dexOf(f);
  if (!g) return <span className="text-slate-400">{t.none}</span>;
  const hyd = f.formula.some(([s]) => s === 'DextroseAnh') ? t.anhydrous : t.hydrous;
  return <span className="tabular-nums">{fmt(g)}<span className="text-[10px] font-medium opacity-70 ml-0.5">{t.units.g}</span> <span className="text-[10px] font-medium text-slate-400">({hyd})</span></span>;
};
const KcalText = ({ f, t }) => {
  const x = fieldOf(f, 'kcal');
  if (!x) return <UnknownText t={t} />;
  if (!x.v) return <span className="text-slate-400">{t.none}</span>;
  return <Val f={f} k="kcal" t={t} />;
};

const FamilyTag = ({ f, t }) => <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${FAMILY_STYLE[f.family].tag}`} data-family={f.family}>{t.families[f.family]}</span>;

// --- Country chips: current = country colour, past = amber "†", never = grey "⊘" ---
const StatusChip = ({ f, r, t }) => {
  const st = statusIn(f, r);
  const cls = st === 'current' ? COUNTRY_COLORS[r].chip : st === 'past' ? 'border-amber-300 bg-amber-50 text-amber-800' : 'border-slate-200 text-slate-400';
  return (
    <span title={`${t.countryNames[r]}: ${t.regStatus[st]}`} data-country={r} data-status={st}
      className={`shrink-0 text-[10px] font-bold rounded border px-1 py-px leading-none whitespace-nowrap ${cls}`}>
      {t.countryCodes[r]}{st === 'past' ? ' †' : st === 'never' ? ' ⊘' : ''}
    </span>
  );
};
// Country block on cards and list rows: one line per selected country where the fluid is or was registered
// (chip + makers there), then a row with the remaining chips (selected countries where it is not registered,
// and unselected countries where it is or was). An unselected country where it never was gets no chip.
const CountryLines = ({ f, t, regions, className = '' }) => {
  const lang = t.isTh ? 'th' : 'en';
  const all = REGIONS.map(r => [r, statusIn(f, r)]);
  const lined = all.filter(([r, st]) => regions.includes(r) && st !== 'never');
  const rest = all.filter(([r, st]) => !lined.some(([x]) => x === r) && (st !== 'never' || regions.includes(r)));
  return (
    <div className={`flex flex-col gap-1 min-w-0 text-[11px] ${className}`} data-countries>
      {lined.map(([r]) => (
        <p key={r} className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 min-w-0 text-slate-500 font-medium leading-snug" data-holder-line={r}>
          <StatusChip f={f} r={r} t={t} />
          <span className="break-words min-w-0" data-holder-name>{holderSummary(f, r, lang)}</span>
        </p>
      ))}
      {rest.length > 0 && (
        <div className="flex flex-wrap items-center gap-1 min-w-0" data-country-rest>
          {rest.map(([r]) => <StatusChip key={r} f={f} r={r} t={t} />)}
        </div>
      )}
    </div>
  );
};
// Detail view: all five countries with their products and register links
const CountryDetail = ({ f, t, src }) => {
  const lang = t.isTh ? 'th' : 'en';
  const stCls = { current: 'text-emerald-700', past: 'text-amber-700', never: 'text-slate-400' };
  return (
    <>
      {REGIONS.map(r => {
        const reg = regIn(f, r);
        return (
          <div key={r} className="py-2 border-b border-slate-200 last:border-b-0 min-w-0" data-detail-country={r} data-status={reg.status}>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <StatusChip f={f} r={r} t={t} />
              <span className="text-xs font-bold text-slate-700">{t.countryNames[r]}</span>
              <span className={`text-[11px] font-bold ${stCls[reg.status]}`}>{t.regStatus[reg.status]}</span>
            </div>
            {reg.items.length > 0 && (
              <ul className="flex flex-col mt-1">
                {reg.items.map((p, i) => (
                  <li key={i} className="py-1 text-xs min-w-0" data-reg-item={r}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                      <span className="font-bold text-slate-800 break-words min-w-0">{p.name}</span>
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-[11px] font-bold text-indigo-600 hover:underline shrink-0" data-reg-link={r}>{p.code} ↗</a>
                    </div>
                    <p className="text-[11px] text-slate-500 break-words">{holderText(p.holder, lang)}</p>
                  </li>
                ))}
              </ul>
            )}
            {reg.status === 'never' && <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{r === 'th' ? t.detailNoThai : t.regNeverText(t.countryNames[r])}</p>}
            {reg.note && <p className="text-[11px] text-amber-700 font-medium mt-0.5 leading-snug break-words" data-reg-note={reg.note}>{r === 'th' ? t.thNotes[reg.note] : t.regNotes[reg.note]}</p>}
            {src('reg-' + r, [{ label: t.registerNames[r], url: REGISTER_HOME[r] }])}
          </div>
        );
      })}
      <p className="text-[11px] text-slate-500 leading-snug pt-2">{t.regMatchNote}</p>
    </>
  );
};

const FlagList = ({ f, t, className = '' }) => {
  const fl = flagsOf(f);
  if (!fl.length) return null;
  return (
    <div className={`flex flex-col gap-1.5 ${className}`} data-flags>
      {fl.map(([k, , , cls]) => (
        <div key={k} className={`flex items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-[11px] font-bold leading-snug ${cls}`} data-flag={k}>
          {k === 'resus' ? <Check className="w-3 h-3 shrink-0 mt-0.5" /> : <AlertTriangle className="w-3 h-3 shrink-0 mt-0.5" />}
          <span className="min-w-0 break-words">{t.flags[k]}</span>
        </div>
      ))}
    </div>
  );
};

// --- Card (tile view) ---
const FluidCard = ({ f, t, selected, onSelect, onDetails, highlight, regions = ["th"] }) => (
  <div id={'fluid-' + f.id} data-fluid={f.id} onClick={(e) => { if (!e.target.closest('button,a')) onDetails(); }}
    className={`${highlight ? 'ring-4 ring-sky-400 ' : ''}cursor-pointer h-full rounded-xl md:rounded-2xl border border-t-4 ${FAMILY_STYLE[f.family].edge} ${selected ? 'border-indigo-500 ring-1 ring-indigo-500' : 'border-slate-200 hover:shadow-md'} bg-white p-3.5 md:p-5 flex flex-col shadow-sm transition-all relative`}>
    <div className="absolute top-3 right-3 md:top-4 md:right-4 flex flex-col items-end gap-1.5" data-card-actions>
      <button onClick={onSelect} data-select aria-pressed={selected} className={`flex items-center gap-1 md:gap-1.5 px-2 md:px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase transition-colors border ${selected ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-400 border-slate-200 hover:border-indigo-300 hover:text-indigo-500 hover:bg-indigo-50 shadow-sm'}`}>
        {selected ? <Check className="w-3 h-3" /> : <CompareIcon className="w-3 h-3" />}<span>{selected ? t.selected : t.select}</span>
      </button>
      <button onClick={onDetails} data-details className="flex items-center gap-1 px-2 md:px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase transition-colors border border-indigo-100 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 shadow-sm">
        {t.detailBtn} <span aria-hidden="true">›</span>
      </button>
    </div>
    <div className="flex items-end gap-2 mb-3 pt-1">
      <div className="p-2 rounded-lg md:rounded-xl bg-slate-50 border border-slate-100"><BagIcon family={f.family} className="w-10 h-12 md:w-12 md:h-14" /></div>
    </div>
    <div className="flex-grow">
      <div className="flex gap-2 items-center mb-1 flex-wrap pr-24">
        <FamilyTag f={f} t={t} />
        <span className="text-[11px] font-extrabold text-slate-500 tracking-wide" data-short>{f.short}</span>
      </div>
      <h3 className="text-lg font-extrabold text-slate-800 leading-tight mb-1 mt-2 break-words">{f.name[t.isTh ? 'th' : 'en']}</h3>
      <CountryLines f={f} t={t} regions={regions} className="mb-2" />
      <div className="grid grid-cols-3 gap-1.5 mt-3" data-ion-tiles>
        {ION_TILES.map(([k, label, cls]) => (
          <div key={k} className={`rounded-lg border px-1.5 py-1.5 min-w-0 ${hasIon(f, k) || k === 'na' || k === 'cl' ? cls : 'bg-slate-50 border-slate-100 text-slate-400'}`} data-ion={k}>
            <div className="text-[10px] font-bold opacity-80 leading-none">{label}</div>
            <div className="text-sm font-extrabold leading-tight mt-1 break-words"><Val f={f} k={k} t={t} unit={false} /></div>
          </div>
        ))}
        <div className={`rounded-lg border px-1.5 py-1.5 min-w-0 ${hasIon(f, 'buffer') ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-slate-50 border-slate-100 text-slate-400'}`} data-ion="buffer">
          <div className="text-[10px] font-bold opacity-80 leading-none">{t.rows.buffer}</div>
          <div className="text-sm font-extrabold leading-tight mt-1 break-words">{hasIon(f, 'buffer') ? <span className="tabular-nums">{fmt(bufferOf(f).reduce((a, [, v]) => a + v, 0))}{bufferOf(f).some(([k]) => fieldOf(f, k).calc) && <CalcMark t={t} />}</span> : t.none}</div>
        </div>
      </div>
      <p className="text-[10px] text-slate-400 font-medium mt-1">{t.units.mmol}</p>
      <div className="space-y-1.5 text-xs bg-slate-50 p-3 rounded-lg border border-slate-100 mt-3" data-card-facts>
        {[
          [t.rows.buffer, <BufferText f={f} t={t} />, 'buffer'],
          [t.rows.dex, <DexText f={f} t={t} />, 'dex'],
          [t.rows.kcal, <KcalText f={f} t={t} />, 'kcal'],
          [t.rows.osm, <Val f={f} k="osm" t={t} />, 'osm'],
          [t.rows.ph, phOf(f) || <UnknownText t={t} />, 'ph'],
        ].map(([label, value, k]) => (
          <div key={k} className="flex justify-between items-start gap-2 border-b border-slate-200 last:border-b-0 pb-1.5 pt-1 min-w-0" data-fact={k}>
            <span className="text-slate-500 font-medium shrink-0">{label}</span>
            <span className="font-bold text-slate-700 text-right break-words min-w-0">{value}</span>
          </div>
        ))}
      </div>
    </div>
    <FlagList f={f} t={t} className="mt-auto pt-4" />
  </div>
);

// --- Row (list view) ---
const FluidRow = ({ f, t, selected, onSelect, onDetails, highlight, regions = ["th"] }) => (
  <div id={'fluid-' + f.id} data-fluid={f.id} onClick={(e) => { if (!e.target.closest('button,a')) onDetails(); }}
    className={`${highlight ? 'ring-4 ring-sky-400 ' : ''}cursor-pointer w-full rounded-xl border border-l-4 ${FAMILY_STYLE[f.family].edge.replace('border-t-', 'border-l-')} ${selected ? 'border-indigo-500 ring-1 ring-indigo-500' : 'border-slate-200 hover:shadow-sm'} bg-white p-3 md:p-4 flex items-start sm:items-center gap-3 md:gap-4 transition-all`}>
    <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100 shrink-0"><BagIcon family={f.family} className="w-8 h-10" /></div>
    <div className="min-w-0 flex-1">
      <div className="flex gap-2 items-center flex-wrap">
        <FamilyTag f={f} t={t} />
        <span className="text-[11px] font-extrabold text-slate-500" data-short>{f.short}</span>
      </div>
      <h3 className="text-sm md:text-base font-extrabold text-slate-800 leading-tight mt-1 break-words">{f.name[t.isTh ? 'th' : 'en']}</h3>
      <p className="text-[11px] md:text-xs text-slate-600 mt-1 flex flex-wrap gap-x-3 gap-y-0.5" data-row-values>
        {[['na', 'Na'], ['k', 'K'], ['cl', 'Cl'], ['osm', 'Osm']].map(([k, l]) => <span key={k} className="whitespace-nowrap"><span className="text-slate-400 font-bold">{l}</span> <b className="text-slate-800"><Val f={f} k={k} t={t} unit={false} /></b></span>)}
        {dexOf(f) > 0 && <span className="whitespace-nowrap"><span className="text-slate-400 font-bold">{t.rows.dex}</span> <b className="text-slate-800">{fmt(dexOf(f))} g</b></span>}
      </p>
      <CountryLines f={f} t={t} regions={regions} className="mt-1" />
    </div>
    <div className="shrink-0 flex flex-col items-stretch gap-1.5" data-list-select>
      <button onClick={onSelect} data-select aria-pressed={selected} aria-label={selected ? t.selected : t.select} title={selected ? t.selected : t.select} className={`flex items-center justify-center w-8 h-8 sm:w-auto sm:h-auto sm:px-3 sm:py-1.5 rounded-md text-[10px] font-bold tracking-wider uppercase transition-colors border ${selected ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-400 border-slate-200 hover:border-indigo-300 hover:text-indigo-500 hover:bg-indigo-50 shadow-sm'}`}>
        {selected ? <Check className="w-4 h-4 sm:w-3 sm:h-3" /> : <CompareIcon className="w-4 h-4 sm:w-3 sm:h-3" />}<span className="hidden sm:inline sm:ml-1.5">{selected ? t.selected : t.select}</span>
      </button>
      <button onClick={onDetails} data-details aria-label={t.detailBtn} title={t.detailBtn} className="flex items-center justify-center w-8 h-8 sm:w-auto sm:h-auto sm:px-3 sm:py-1.5 rounded-md text-[10px] font-bold tracking-wider uppercase transition-colors border border-indigo-100 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 shadow-sm">
        <InfoIcon className="w-4 h-4 sm:hidden" /><span className="hidden sm:inline">{t.detailBtn} ›</span>
      </button>
    </div>
  </div>
);

// --- Modal shell shared by every pop-up ---
const Modal = ({ title, sub, onClose, children, footer, tone = 'bg-slate-50', icon = null, wide = false, attrs = {} }) => {
  useEffect(() => { const k = (e) => { if (e.key === 'Escape') onClose(); }; window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k); }, [onClose]);
  return (
    <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }} {...attrs}>
      <div className={`bg-white w-full ${wide ? 'max-w-4xl' : 'max-w-2xl'} rounded-2xl shadow-2xl flex flex-col max-h-[95vh] animate-in fade-in zoom-in-95 duration-200`} role="dialog" aria-modal="true" aria-label={typeof title === 'string' ? title : undefined}>
        <div className={`flex items-start gap-3 p-4 sm:p-5 border-b border-slate-100 ${tone} rounded-t-2xl shrink-0`}>
          {icon}
          <div className="min-w-0 flex-1">
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-800 leading-tight break-words">{title}</h2>
            {sub && <p className="text-xs text-slate-600 mt-0.5">{sub}</p>}
          </div>
          <button onClick={onClose} data-modal-close className="p-2 -m-1 text-slate-400 hover:text-slate-700 hover:bg-white rounded-full transition-colors shrink-0" aria-label="Close"><X className="w-5 h-5" /></button>
        </div>
        <div className="p-3 sm:p-5 flex-grow overflow-y-auto flex flex-col gap-3 bg-white">{children}</div>
        {footer && <div className="flex flex-wrap items-center justify-end gap-2 p-3 sm:p-4 border-t border-slate-100 shrink-0">{footer}</div>}
      </div>
    </div>
  );
};
const Section = ({ title, children, attrs = {}, tone = 'bg-slate-50 border-slate-200' }) => (
  <section className={`${tone} rounded-xl border p-3 sm:p-4 min-w-0`} {...attrs}>
    {title && <h3 className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">{title}</h3>}
    {children}
  </section>
);
const SourceLine = ({ items, t, k }) => (
  <p className="text-[10px] font-medium text-slate-400 leading-snug pt-1 break-words text-left" data-src={k}>
    <span className="font-bold">{t.srcLabel}:</span>{' '}
    {items == null ? <span data-src-unknown>{t.srcUnknown}</span> : items.map((it, i) => (
      <span key={i}>{i > 0 && ' · '}{it.url
        ? <a href={it.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline decoration-dotted hover:decoration-solid" data-src-link>{it.label}</a>
        : <span data-src-text>{it.label}</span>}</span>
    ))}
  </p>
);
const CloseBtn = ({ onClose, t }) => <button onClick={onClose} className="px-4 py-2 rounded-lg text-xs font-bold bg-slate-800 text-white hover:bg-slate-700 transition-colors">{t.detailClose}</button>;

// Sources behind one displayed value of a fluid
const valueSources = (f, k, t) => {
  const x = k === 'buffer' ? (bufferOf(f).length ? fieldOf(f, bufferOf(f)[0][0]) : { v: 0, src: f.formulaSrc || f.labelSrc, reg: f.formulaReg }) : k === 'dex' ? (dexOf(f) ? fieldOf(f, 'dex') : { v: 0, src: f.formulaSrc || f.labelSrc, reg: f.formulaReg }) : fieldOf(f, k);
  if (!x) return null;
  const docs = x.src === 'thReg' && TH_REG[x.reg] ? [{ label: t.srcReg(x.reg), url: thRecordUrl(TH_REG[x.reg][0]) }] : x.src ? [srcItem(x.src)] : [];
  return [...docs, ...(x.calc && x.v ? [{ label: t.srcCalc }] : []), ...(x.kcalFactor ? [{ label: t.srcKcalFactor, url: SOURCES.usDex.url }] : [])];
};

// --- PNG Exporters (High-DPI HTML5 Canvas) ---
function exportFluidToPng(f, lang, t) {
  const canvas = document.createElement('canvas');
  const dpr = 2;
  const w = 720;
  const h = 880;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  ctx.fillStyle = '#f8fafc';
  ctx.fillRect(0, 0, w, h);

  const pad = 28;
  const cardW = w - pad * 2;
  const cardH = h - pad * 2;
  ctx.fillStyle = '#ffffff';
  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.roundRect ? ctx.roundRect(pad, pad, cardW, cardH, 16) : ctx.rect(pad, pad, cardW, cardH);
  ctx.fill();
  ctx.stroke();

  const famColor = (FAMILY_STYLE[f.family] || {}).hex || '#0ea5e9';
  ctx.fillStyle = famColor;
  ctx.beginPath();
  if (ctx.roundRect) {
    ctx.roundRect(pad, pad, cardW, 8, [16, 16, 0, 0]);
  } else {
    ctx.rect(pad, pad, cardW, 8);
  }
  ctx.fill();

  let y = pad + 32;
  ctx.font = '600 11px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillStyle = '#64748b';
  ctx.fillText('ADULT IV FLUID GUIDE  •  ' + APP_VERSION, pad + 24, y);

  const famBadge = (t.families[f.family] || f.family).toUpperCase();
  ctx.font = 'bold 11px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  const badgeW = ctx.measureText(famBadge).width + 16;
  ctx.fillStyle = famColor + '18';
  ctx.strokeStyle = famColor + '40';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect ? ctx.roundRect(w - pad - 24 - badgeW, y - 12, badgeW, 20, 6) : ctx.rect(w - pad - 24 - badgeW, y - 12, badgeW, 20);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = famColor;
  ctx.fillText(famBadge, w - pad - 24 - badgeW + 8, y + 2);

  y += 32;
  ctx.font = 'bold 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillStyle = '#0f172a';
  ctx.fillText(f.short, pad + 24, y);

  y += 24;
  ctx.font = '600 15px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillStyle = '#334155';
  ctx.fillText(f.name[lang] || f.name.en, pad + 24, y);

  y += 18;
  ctx.font = '400 12px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillStyle = '#64748b';
  ctx.fillText(t.familyLong[f.family] || '', pad + 24, y);

  y += 16;
  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(pad + 24, y);
  ctx.lineTo(w - pad - 24, y);
  ctx.stroke();

  y += 24;
  ctx.font = 'bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillStyle = '#475569';
  ctx.fillText((t.detailComposition || 'Composition per litre').toUpperCase(), pad + 24, y);

  const compRows = [
    [t.rows.na, (num(f, 'na') != null ? fmt(num(f, 'na')) + ' ' + t.units.mmol : t.none)],
    [t.rows.k, (num(f, 'k') != null ? fmt(num(f, 'k')) + ' ' + t.units.mmol : t.none)],
    [t.rows.cl, (num(f, 'cl') != null ? fmt(num(f, 'cl')) + ' ' + t.units.mmol : t.none)],
    [t.rows.ca, (num(f, 'ca') != null ? fmt(num(f, 'ca')) + ' ' + t.units.mmol : t.none)],
    [t.rows.mg, (num(f, 'mg') != null ? fmt(num(f, 'mg')) + ' ' + t.units.mmol : t.none)],
    [t.rows.buffer, bufferOf(f).length ? bufferOf(f).map(([k, v]) => `${t.buffers[k]} ${fmt(v)}`).join(' + ') + ' ' + t.units.mmol : t.none],
    [t.rows.dex, dexOf(f) ? `${fmt(dexOf(f))} ${t.units.g}` : t.none],
    [t.rows.kcal, num(f, 'kcal') != null ? `${fmt(num(f, 'kcal'))} ${t.units.kcal}` : t.none],
    [t.rows.osm, num(f, 'osm') != null ? `${fmt(num(f, 'osm'))} ${t.units.osm}` : t.unknown],
    [t.rows.ph, phOf(f) || t.unknown],
  ];

  y += 12;
  const colW = (cardW - 48) / 2;
  compRows.forEach(([lbl, val], idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const rx = pad + 24 + col * colW;
    const ry = y + row * 28;

    ctx.fillStyle = row % 2 === 0 ? '#f8fafc' : '#ffffff';
    ctx.fillRect(rx, ry - 14, colW - 8, 26);

    ctx.font = '500 12px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = '#64748b';
    ctx.fillText(lbl, rx + 8, ry + 3);

    ctx.font = 'bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = '#0f172a';
    ctx.textAlign = 'right';
    ctx.fillText(val, rx + colW - 16, ry + 3);
    ctx.textAlign = 'left';
  });

  y += Math.ceil(compRows.length / 2) * 28 + 14;

  const fl = flagsOf(f);
  if (fl.length > 0) {
    ctx.font = 'bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = '#475569';
    ctx.fillText((t.detailFlags || 'Clinical Points').toUpperCase(), pad + 24, y);
    y += 18;

    fl.slice(0, 3).forEach(([k]) => {
      ctx.fillStyle = k === 'resus' ? '#ecfdf5' : '#fffbeb';
      ctx.strokeStyle = k === 'resus' ? '#a7f3d0' : '#fde68a';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(pad + 24, y - 10, cardW - 48, 24, 6) : ctx.rect(pad + 24, y - 10, cardW - 48, 24);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = k === 'resus' ? '#065f46' : '#92400e';
      ctx.font = 'bold 11px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.fillText((k === 'resus' ? '✓ ' : '⚠️ ') + (t.flags[k] || k), pad + 32, y + 6);
      y += 28;
    });
  }

  y += 8;
  ctx.font = 'bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillStyle = '#475569';
  ctx.fillText((t.detailThai || 'Registration').toUpperCase(), pad + 24, y);
  y += 18;

  REGIONS.forEach((r, idx) => {
    const reg = regIn(f, r);
    const rx = pad + 24 + idx * 80;
    const isCur = reg.status === 'current';
    const isPast = reg.status === 'past';
    ctx.fillStyle = isCur ? '#ecfdf5' : (isPast ? '#fffbeb' : '#f1f5f9');
    ctx.strokeStyle = isCur ? '#6ee7b7' : (isPast ? '#fcd34d' : '#cbd5e1');
    ctx.beginPath();
    ctx.roundRect ? ctx.roundRect(rx, y - 10, 70, 24, 6) : ctx.rect(rx, y - 10, 70, 24);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = isCur ? '#047857' : (isPast ? '#b45309' : '#64748b');
    ctx.font = 'bold 11px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText(`${t.countryCodes[r]} ${isCur ? '✓' : (isPast ? '†' : '⊘')}`, rx + 14, y + 6);
  });

  const footY = h - pad - 20;
  ctx.font = '400 10px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText('Adult IV Fluid Guide • Dr. Warodom Phaenthong • Creative Commons BY-NC-SA 4.0', pad + 24, footY);
  ctx.textAlign = 'right';
  ctx.fillText('Values from official labels & pharmacopeia formulas', w - pad - 24, footY);
  ctx.textAlign = 'left';

  const a = document.createElement('a');
  a.download = `iv-fluid-${f.id}.png`;
  a.href = canvas.toDataURL('image/png');
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function exportCompareToPng(list, lang, t) {
  const canvas = document.createElement('canvas');
  const dpr = 2;
  const colW = 120;
  const labelW = 160;
  const pad = 24;
  const w = pad * 2 + labelW + (list.length + 1) * colW;
  const h = 580;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  ctx.fillStyle = '#f8fafc';
  ctx.fillRect(0, 0, w, h);

  const cardW = w - pad * 2;
  const cardH = h - pad * 2;
  ctx.fillStyle = '#ffffff';
  ctx.strokeStyle = '#cbd5e1';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.roundRect ? ctx.roundRect(pad, pad, cardW, cardH, 12) : ctx.rect(pad, pad, cardW, cardH);
  ctx.fill();
  ctx.stroke();

  let y = pad + 26;
  ctx.font = 'bold 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillStyle = '#0f172a';
  ctx.fillText(t.compareTitle + ' — ' + (t.compareSub || 'per litre'), pad + 20, y);

  ctx.font = '500 11px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillStyle = '#64748b';
  ctx.textAlign = 'right';
  ctx.fillText('ADULT IV FLUID GUIDE • ' + APP_VERSION, w - pad - 20, y);
  ctx.textAlign = 'left';

  y += 24;
  ctx.fillStyle = '#f1f5f9';
  ctx.fillRect(pad + 12, y - 14, cardW - 24, 44);

  let colX = pad + 20 + labelW;
  list.forEach(f => {
    ctx.font = 'bold 13px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = (FAMILY_STYLE[f.family] || {}).hex || '#0f172a';
    ctx.fillText(f.short, colX, y + 4);
    ctx.font = '500 10px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = '#64748b';
    const nameStr = (f.name[lang] || f.name.en).slice(0, 15);
    ctx.fillText(nameStr, colX, y + 18);
    colX += colW;
  });

  ctx.font = 'bold 13px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillStyle = '#475569';
  ctx.fillText(t.plasma, colX, y + 4);
  ctx.font = '500 10px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillStyle = '#64748b';
  ctx.fillText('Reference', colX, y + 18);

  const range = (k) => { const r = PLASMA[k]; return r ? (r[0] === r[1] ? String(r[0]) : `${r[0]}–${r[1]}`) : t.none; };
  const rows = [
    [t.rows.na + ' (mmol/L)', (f) => num(f, 'na') != null ? fmt(num(f, 'na')) : t.none, range('na')],
    [t.rows.k + ' (mmol/L)', (f) => num(f, 'k') != null ? fmt(num(f, 'k')) : t.none, range('k')],
    [t.rows.cl + ' (mmol/L)', (f) => num(f, 'cl') != null ? fmt(num(f, 'cl')) : t.none, range('cl')],
    [t.rows.ca + ' (mmol/L)', (f) => num(f, 'ca') != null ? fmt(num(f, 'ca')) : t.none, range('ca')],
    [t.rows.mg + ' (mmol/L)', (f) => num(f, 'mg') != null ? fmt(num(f, 'mg')) : t.none, range('mg')],
    [t.rows.buffer + ' (mmol/L)', (f) => bufferOf(f).length ? fmt(bufferOf(f).reduce((a, [, v]) => a + v, 0)) : t.none, '24–32'],
    [t.rows.dex + ' (g/L)', (f) => dexOf(f) ? fmt(dexOf(f)) : t.none, t.none],
    [t.rows.kcal + ' (kcal/L)', (f) => num(f, 'kcal') != null ? fmt(num(f, 'kcal')) : t.none, t.none],
    [t.rows.osm + ' (mOsm/L)', (f) => num(f, 'osm') != null ? fmt(num(f, 'osm')) : t.unknown, range('osm')],
    [t.rows.ph, (f) => phOf(f) || t.unknown, '7.35–7.45'],
  ];

  y += 36;
  rows.forEach(([lbl, getter, plVal], rIdx) => {
    ctx.fillStyle = rIdx % 2 === 0 ? '#ffffff' : '#f8fafc';
    ctx.fillRect(pad + 12, y - 10, cardW - 24, 26);

    ctx.font = '600 11px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = '#475569';
    ctx.fillText(lbl, pad + 20, y + 6);

    let x = pad + 20 + labelW;
    list.forEach(f => {
      ctx.font = 'bold 11px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.fillStyle = '#0f172a';
      ctx.fillText(String(getter(f)), x, y + 6);
      x += colW;
    });

    ctx.font = '500 11px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = '#64748b';
    ctx.fillText(plVal, x, y + 6);

    y += 26;
  });

  const footY = h - pad - 14;
  ctx.font = '400 10px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText('Adult IV Fluid Guide • Human Plasma: Myburgh & Mythen, NEJM 2013 • Warodom Phaenthong, M.D.', pad + 20, footY);

  const a = document.createElement('a');
  a.download = `iv-fluid-compare-${list.map(f => f.short).join('-')}.png`;
  a.href = canvas.toDataURL('image/png');
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// --- Detail view ---
const FluidDetailModal = ({ f, t, onClose, selected, onSelect }) => {
  const [showSrc, setShowSrc] = useState(() => { try { return localStorage.getItem('ivf-show-sources') === '1'; } catch (e) { return false; } });
  const toggleSrc = () => setShowSrc(v => { try { localStorage.setItem('ivf-show-sources', v ? '0' : '1'); } catch (e) {} return !v; });
  const src = (k, items) => (showSrc ? <SourceLine k={k} items={items} t={t} /> : null);
  const row = (k, label, value, extra = null) => (
    <div key={k} className="py-1.5 border-b border-slate-200 last:border-b-0 text-xs min-w-0" data-detail-row={k}>
      <div className="flex justify-between items-start gap-3 min-w-0">
        <span className="text-slate-500 font-medium break-words min-w-0">{label}</span>
        <span className="font-bold text-slate-700 text-right break-words max-w-[65%]">{value}{extra && <span className="block text-[10px] font-medium text-slate-400">{extra}</span>}</span>
      </div>
      {src(k, k === 'ph' ? (f.label.ph ? [srcItem(f.labelSrc)] : null) : valueSources(f, k, t))}
    </div>
  );
  const lang = t.isTh ? 'th' : 'en';
  return (
    <Modal title={f.name[lang]} onClose={onClose} attrs={{ 'data-detail-modal': f.id }}
      icon={<div className="p-2 rounded-xl bg-white border border-slate-200 shrink-0"><BagIcon family={f.family} className="w-10 h-12 sm:w-12 sm:h-14" /></div>}
      sub={<span className="inline-flex flex-wrap items-center gap-1.5 mt-1"><FamilyTag f={f} t={t} /><span className="font-extrabold text-slate-500">{f.short}</span><span>· {t.familyLong[f.family]}</span></span>}
      footer={<>
        <button onClick={toggleSrc} aria-pressed={showSrc} data-src-toggle className={`mr-auto flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold border transition-colors ${showSrc ? 'bg-slate-100 text-slate-800 border-slate-300' : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300 hover:text-indigo-600'}`}>
          <BookOpen className="w-3.5 h-3.5" /> {showSrc ? t.srcHide : t.srcShow}
        </button>
        <button onClick={() => exportFluidToPng(f, lang, t)} data-detail-export-png title={t.exportPngTitle} className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-indigo-600 transition-colors shadow-sm">
          <DownloadIcon className="w-3.5 h-3.5" /> {t.exportPng}
        </button>
        <button onClick={onSelect} data-detail-select className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold border transition-colors ${selected ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300 hover:text-indigo-600'}`}>
          {selected ? <Check className="w-3.5 h-3.5" /> : <CompareIcon className="w-3.5 h-3.5" />} {selected ? t.selected : t.select}
        </button>
        <CloseBtn onClose={onClose} t={t} />
      </>}>
      <FlagList f={f} t={t} />
      <Section title={t.detailComposition} attrs={{ 'data-detail-comp': '' }}>
        {row('na', t.rows.na, <Val f={f} k="na" t={t} />)}
        {row('k', t.rows.k, <Val f={f} k="k" t={t} />)}
        {row('cl', t.rows.cl, <Val f={f} k="cl" t={t} />)}
        {row('ca', t.rows.ca, <Val f={f} k="ca" t={t} />, f.labelMEq && f.labelMEq.ca ? t.labelMEq(f.labelMEq.ca) : null)}
        {row('mg', t.rows.mg, <Val f={f} k="mg" t={t} />, f.labelMEq && f.labelMEq.mg ? t.labelMEq(f.labelMEq.mg) : null)}
        {row('buffer', t.rows.buffer, <BufferText f={f} t={t} />, bufferOf(f).length ? t.units.mmol : null)}
        {row('dex', t.rows.dex, <DexText f={f} t={t} />)}
        {row('kcal', t.rows.kcal, <KcalText f={f} t={t} />)}
        {row('osm', t.rows.osm, <Val f={f} k="osm" t={t} />)}
        {row('ph', t.rows.ph, phOf(f) || <UnknownText t={t} />, !phOf(f) && f.phOther ? t.phOther(f.phOther.ph) : null)}
        {f.sameAs === 'pla' && <p className="text-[11px] text-slate-500 leading-snug pt-2" data-same-as>{t.sameAsPla}</p>}
      </Section>
      {f.formula && (
        <Section title={t.detailFormula} attrs={{ 'data-detail-formula': '' }}>
          <ul className="text-xs text-slate-700 flex flex-col gap-1">
            {f.formula.map(([s, g]) => <li key={s} className="flex justify-between gap-3"><span className="min-w-0 break-words">{SALTS[s][lang]}</span><b className="tabular-nums shrink-0">{fmt(g)} g</b></li>)}
          </ul>
          {src('formula', f.formulaSrc === 'thReg' ? [{ label: t.srcReg(f.formulaReg), url: thRecordUrl(TH_REG[f.formulaReg][0]) }] : [srcItem(f.formulaSrc)])}
        </Section>
      )}
      {flagsOf(f).length > 0 && (
        <Section title={t.detailFlags} attrs={{ 'data-detail-flags': '' }}>
          <ul className="flex flex-col gap-2">
            {flagsOf(f).map(([k, , srcs]) => (
              <li key={k} className="text-xs text-slate-700 leading-snug">
                <b>{t.flags[k]}.</b> {t.flagNotes[k]}
                {src('flag-' + k, srcs.map(srcItem))}
              </li>
            ))}
          </ul>
        </Section>
      )}
      <Section title={t.detailThai} attrs={{ 'data-detail-thai': '' }}>
        <CountryDetail f={f} t={t} src={src} />
      </Section>
    </Modal>
  );
};

// --- Compare (up to 6 fluids next to plasma) ---
const CompareModal = ({ list, t, onClose, onRemove }) => {
  const lang = t.isTh ? 'th' : 'en';
  const range = (k) => { const r = PLASMA[k]; return r ? (r[0] === r[1] ? String(r[0]) : `${r[0]}–${r[1]}`) : t.none; };
  const rows = [
    ['na', t.rows.na, (f) => <Val f={f} k="na" t={t} unit={false} />, range('na')],
    ['k', t.rows.k, (f) => <Val f={f} k="k" t={t} unit={false} />, range('k')],
    ['cl', t.rows.cl, (f) => <Val f={f} k="cl" t={t} unit={false} />, range('cl')],
    ['ca', t.rows.ca, (f) => <Val f={f} k="ca" t={t} unit={false} />, range('ca')],
    ['mg', t.rows.mg, (f) => <Val f={f} k="mg" t={t} unit={false} />, range('mg')],
    ['buffer', t.rows.buffer, (f) => <BufferText f={f} t={t} />, `HCO₃⁻ ${range('hco3')}, ${t.buffers.lactate} ${range('lactate')}`],
    ['dex', t.rows.dex + ' (' + t.units.g + ')', (f) => (dexOf(f) ? fmt(dexOf(f)) : t.none), t.none],
    ['kcal', t.rows.kcal + ' (' + t.units.kcal + ')', (f) => <KcalText f={f} t={t} />, t.none],
    ['osm', t.rows.osm + ' (' + t.units.osm + ')', (f) => <Val f={f} k="osm" t={t} unit={false} />, range('osm')],
    ['ph', t.rows.ph, (f) => phOf(f) || <UnknownText t={t} />, t.none],
    ['th', t.countriesLabel, (f) => <span className="flex flex-wrap gap-1">{REGIONS.map(r => <StatusChip key={r} f={f} r={r} t={t} />)}</span>, t.none],
  ];
  return (
    <Modal title={t.compareTitle} sub={t.compareSub + ' (' + t.units.mmol + ')'} onClose={onClose} wide attrs={{ 'data-compare-modal': '' }}
      footer={<>
        <button onClick={() => exportCompareToPng(list, lang, t)} data-compare-export-png className="mr-auto flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-indigo-600 transition-colors shadow-sm">
          <DownloadIcon className="w-3.5 h-3.5" /> {t.exportComparePng}
        </button>
        <CloseBtn onClose={onClose} t={t} />
      </>}>
      <div className="overflow-x-auto -mx-1 px-1">
        <table className="w-full text-xs border-collapse min-w-[500px]" data-compare-table>
          <thead>
            <tr>
              <th className="text-left p-2 text-slate-400 font-bold align-bottom w-24 sm:w-28 min-w-[95px] sm:min-w-[110px]"></th>
              {list.map(f => (
                <th key={f.id} className="p-2 text-left align-bottom min-w-[110px] sm:min-w-[125px] relative">
                  <div className="flex items-center justify-between mb-1">
                    <BagIcon family={f.family} className="w-6 h-7" />
                    {onRemove && list.length > 2 && (
                      <button onClick={() => onRemove(f.id)} data-compare-remove={f.id} title={`${t.remove} ${f.short}`} aria-label={`${t.remove} ${f.short}`} className="p-0.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded text-xs transition-colors leading-none">✕</button>
                    )}
                  </div>
                  <span className="block font-extrabold text-slate-800 leading-tight break-words">{f.short}</span>
                  <span className="block text-[10px] font-medium text-slate-500 leading-tight break-words">{f.name[lang]}</span>
                </th>
              ))}
              <th className="p-2 text-left align-bottom text-slate-500 font-extrabold min-w-[90px]">{t.plasma}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([k, label, cell, pl]) => (
              <tr key={k} className="border-t border-slate-200" data-compare-row={k}>
                <th className="text-left p-2 text-slate-500 font-medium">{label}</th>
                {list.map(f => <td key={f.id} className="p-2 font-bold text-slate-800 break-words">{cell(f)}</td>)}
                <td className="p-2 text-slate-500 font-medium">{pl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-[11px] text-slate-500"><a href={refUrl('myburgh')} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">{t.plasmaNote}</a></p>
    </Modal>
  );
};

// --- Key ---
const LegendModal = ({ t, onClose }) => {
  const row = (sample, text, key) => (
    <div key={key} className="flex flex-wrap items-center gap-x-2.5 gap-y-1 py-1.5 border-b border-slate-200 last:border-b-0 text-xs min-w-0">
      <span className="shrink-0 inline-flex items-center gap-1 min-w-[44px]">{sample}</span>
      <span className="text-slate-600 font-medium leading-snug break-words min-w-0 flex-1 basis-40">{text}</span>
    </div>
  );
  return (
    <Modal title={t.legendTitle} sub={t.legendSub} onClose={onClose} attrs={{ 'data-legend-modal': '' }} footer={<CloseBtn onClose={onClose} t={t} />}>
      <Section title={t.keyValues}>
        <p className="text-xs text-slate-600 leading-snug mb-1">{t.keyValuesText}</p>
        {row(<span className="font-bold text-slate-700">131<CalcMark t={t} /></span>, t.keyCalc, 'calc')}
        {row(<UnknownText t={t} />, t.keyUnknown, 'unknown')}
        {row(<span className="font-bold text-slate-400">{t.none}</span>, t.keyNone, 'none')}
      </Section>
      <Section title={t.keyFamilies}>
        {FAMILIES.map(k => row(<span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${FAMILY_STYLE[k].tag}`}>{t.families[k]}</span>, t.familyLong[k], k))}
      </Section>
      <Section title={t.keyCountries}>
        {row(<span className={`text-[10px] font-bold rounded border px-1 py-px ${COUNTRY_COLORS.th.chip}`}>TH</span>, t.keyChipCurrent, 'cur')}
        {row(<span className="text-[10px] font-bold rounded border px-1 py-px border-amber-300 bg-amber-50 text-amber-800">TH †</span>, t.keyChipPast, 'past')}
        {row(<span className="text-[10px] font-bold rounded border px-1 py-px border-slate-200 text-slate-400">TH ⊘</span>, t.keyChipNever, 'never')}
        <p className="text-[11px] text-slate-500 pt-1.5">{t.regMatchNote}</p>
      </Section>
      <Section title={t.keyBands}>
        {NA_BANDS.map(k => row(<span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${NA_BAND_STYLE[k][0]}`}>Na {t.naBands[k]}</span>, t.naBandLong[k], k))}
        <p className="text-[11px] text-slate-500 pt-1.5">{t.naTitle}</p>
      </Section>
      <Section title={t.keyFlags}>
        {FLAG_RULES.map(([k, , , cls]) => row(<span className={`inline-flex items-center rounded border px-1.5 py-0.5 ${cls}`}>{k === 'resus' ? <Check className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}</span>, <><b>{t.flags[k]}.</b> {t.flagNotes[k]}</>, k))}
      </Section>
    </Modal>
  );
};

const DisclaimerSection = ({ t }) => (
  <section className="mt-10 md:mt-14 rounded-2xl border border-amber-200 bg-amber-50 p-4 md:p-5" aria-labelledby="disclaimer-heading">
    <h2 id="disclaimer-heading" className="text-sm font-extrabold text-amber-800 uppercase tracking-wider mb-2 flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> {t.discTitle}</h2>
    <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm text-amber-900 leading-relaxed">{t.discPoints.map((p, i) => <li key={i}>{p}</li>)}</ul>
    <p className="mt-2 text-[11px] font-bold text-amber-700">{t.discReviewed}</p>
  </section>
);
const ReferencesSection = ({ t }) => {
  const [open, setOpen] = useState(false);
  return (
    <section className="mt-10 md:mt-14 pt-6 border-t border-slate-200" aria-labelledby="refs-heading">
      <h2 id="refs-heading" className="text-sm font-extrabold text-slate-700 uppercase tracking-wider">
        <button type="button" onClick={() => setOpen(o => !o)} aria-expanded={open} data-refs-toggle className="w-full flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 hover:bg-slate-50 transition-colors">
          <span className="uppercase tracking-wider">{t.refTitle} <span className="text-slate-400 font-bold normal-case tracking-normal">({REFERENCES.length})</span></span>
          <span className={`text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true">▾</span>
        </button>
      </h2>
      {open && <ol className="mt-3 flex flex-col gap-2.5" data-refs-list>
        {REFERENCES.map((r, i) => (
          <li key={r.key} className="flex gap-3 text-xs text-slate-600 leading-relaxed">
            <span className="shrink-0 font-bold text-slate-400 tabular-nums w-5 text-right">{i + 1}.</span>
            <span className="min-w-0">{r.cite}{' '}{r.url && <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline break-all">{r.url}</a>}
              <span className="block text-[11px] text-slate-500 mt-0.5"><span className="font-bold">{t.refUsedFor}:</span> {t.refUsed[r.key]}</span>
            </span>
          </li>
        ))}
      </ol>}
    </section>
  );
};

// =====================================================================
// Guides
// =====================================================================
const GUIDE_TEXT = {
  en: {
    chooseSub: 'NICE CG174 "5 Rs" and Surviving Sepsis Campaign 2021',
    tabs: { resus: 'Resuscitation', maint: 'Routine maintenance', replace: 'Replacement & redistribution', reassess: 'Reassessment' },
    resus: [
      ['Signs that urgent fluid resuscitation may be needed: systolic BP below 100 mmHg, heart rate above 90/min, capillary refill over 2 s or cold peripheries, respiratory rate above 20/min, NEWS 5 or more, or a positive passive leg raise.', 'nice', '1.2.1'],
      ['Use a crystalloid with sodium 130–154 mmol/L, as a 500 mL bolus over less than 15 minutes, then reassess (ABCDE).', 'nice', '1.3.1'],
      ['Sepsis or septic shock: crystalloids are the first-line fluid (strong recommendation); balanced crystalloids are suggested over normal saline (weak recommendation, low-quality evidence).', 'ssc', ''],
      ['Sepsis-induced hypoperfusion or septic shock: at least 30 mL/kg of IV crystalloid within the first 3 hours is suggested (weak recommendation, low-quality evidence).', 'ssc', ''],
    ],
    resusList: 'Fluids here with sodium 130–154 mmol/L and no glucose',
    maint: [
      ['Routine maintenance only: 25–30 mL/kg/day of water, about 1 mmol/kg/day each of potassium, sodium and chloride, and 50–100 g/day of glucose.', 'nice', '1.4.1'],
      ['Obese: use ideal body weight and lower volumes per kg; patients rarely need more than 3 L/day. Seek expert help if BMI is over 40.', 'nice', '1.4.2'],
      ['Consider less fluid (20–25 mL/kg/day) for older or frail patients, renal impairment or cardiac failure, and malnutrition with refeeding risk.', 'nice', '1.4.3'],
      ['Example: 25–30 mL/kg/day of 0.18% NaCl in 4% glucose with 27 mmol/L potassium on day 1. More than 2.5 L/day increases the risk of hyponatraemia. Use premixed potassium-containing fluids; NICE advises against adding potassium to bags.', 'nice', '1.4.4'],
    ],
    maintList: 'Fluids here with glucose and sodium below 130 mmol/L (potassium-containing first)',
    replace: [
      ['Add to or subtract from the maintenance prescription for existing deficits or excesses, ongoing losses and abnormal distribution.', 'nice', '1.5.1'],
      ['Seek expert help for complex problems: gross oedema, severe sepsis, hypo- or hypernatraemia, renal, liver or cardiac impairment, post-operative fluid retention, malnutrition or refeeding.', 'nice', '1.5.2'],
      ['With high-volume gastrointestinal losses, urinary sodium may help: below 30 mmol/L may mean total body sodium depletion even with a normal plasma sodium (misleading with renal impairment or diuretics).', 'nice', '1.2.4'],
    ],
    reassess: [
      ['During resuscitation: reassess with ABCDE; monitor respiratory rate, pulse, blood pressure and perfusion continuously; measure venous lactate and/or arterial pH and base excess.', 'nice', '1.2.3'],
      ['Everyone on IV fluids: at least daily clinical fluid status, urea, creatinine and electrolytes, and fluid balance chart; weigh twice weekly.', 'nice', '1.2.4'],
      ['After fluids with chloride over 120 mmol/L (for example 0.9% NaCl): check serum chloride daily; reassess the prescription if hyperchloraemia or acidaemia develops.', 'nice', '1.2.5'],
    ],
    openMaint: 'Open the maintenance calculator', openSodium: 'Open the sodium change calculator',
    // maintenance calculator
    maintSub: 'NICE CG174 routine maintenance (adults)',
    weight: 'Weight', kg: 'kg', lowRange: 'Older or frail, renal impairment, cardiac failure, or malnourished with refeeding risk (20–25 mL/kg/day)',
    obese: 'Obese: use ideal body weight', height: 'Height', cm: 'cm', sex: 'Sex', male: 'Male', female: 'Female',
    ibw: (w) => `Ideal body weight (Devine): ${w} kg`, bmi: (b) => `BMI ${b} kg/m²`, needHeight: 'Enter height to work out ideal body weight.',
    dosingWeight: 'Weight used', perDay: 'per day', perHour: 'mL/h',
    water: 'Water', electrolytes: 'Na⁺, K⁺, Cl⁻ (each)', glucoseNeed: 'Glucose',
    warn25: 'More than 2.5 L/day increases the risk of hyponatraemia (NICE 1.4.4).',
    warnObese: 'Patients rarely need more than 3 L/day; seek expert help if BMI is over 40 (NICE 1.4.2).',
    enterWeight: 'Enter the weight to see the daily needs.',
    tableTitle: (v) => `What ${v} mL/day of each fluid gives`, tableVolume: 'Daily volume for the table', mlDay: 'mL/day',
    colFluid: 'Fluid', colNa: 'Na⁺ mmol', colK: 'K⁺ mmol', colGlu: 'Glucose g', target: 'Need',
    gluOk: 'within 50–100 g', tableNote: 'Glucose in green is inside the 50–100 g/day range. Sodium and potassium needs are about 1 mmol/kg/day each.',
    // sodium change
    sodiumSub: 'Adrogué–Madias: expected change in serum sodium from 1 litre of each fluid',
    serumNa: 'Serum sodium', elderly: 'Elderly', tbw: (f, v) => `Total body water ${v} L (weight × ${f})`,
    formula: 'Change in serum Na⁺ per 1 L = (infusate Na⁺ + K⁺ − serum Na⁺) ÷ (total body water + 1)',
    tbwNote: 'Total body water fraction: 0.6 non-elderly men, 0.5 non-elderly women and elderly men, 0.45 elderly women.',
    planQuick: 'Quick pick (mmol/L)', raise: 'Raise ↑', lower: 'Lower ↓',
    targetChange: 'Planned change', target24: 'mmol/L', litresFor: (x) => `≈ ${x} L for the planned change`,
    colChange: 'Change per 1 L', enterNa: 'Enter serum sodium and weight.',
    limitsTitle: 'Correction limits',
    limits: [
      ['Hyponatraemia: limit the rise to 10 mmol/L in the first 24 hours and 8 mmol/L in every 24 hours after that (until sodium reaches 130 mmol/L).', 'spasovski'],
      ['Hypernatraemia: aim for a fall of about 10 mmol/L per day, except when it developed over hours.', 'adrogueHyper'],
    ],
    caveat: 'The formula assumes the litre is retained: it does not count urine, gut or skin losses. Recheck serum sodium often and adjust.',
    selectedFirst: 'Selected fluids are listed first.',
    // drip
    dripSub: 'Infusion rate and drops per minute for a gravity giving set',
    modeVolume: 'Volume over time', modeRate: 'Rate', volume: 'Volume', mL: 'mL', hours: 'Time', h: 'h', rate: 'Rate', dropFactor: 'Drop factor', gttmL: 'drops/mL',
    resRate: 'Rate', resDrops: 'Drops per minute', resSec: 'One drop every', sec: 's',
    dripNote: 'Check the drop factor printed on the giving-set pack (often 10, 15 or 20 drops/mL; micro-drip 60 drops/mL).',
    dripFormula: 'Drops/min = mL/h × drop factor ÷ 60',
    waterSub: 'Free water deficit in hypernatraemia, and how much of each sodium-poor fluid lowers sodium at the planned rate',
    targetNa: 'Target sodium', plannedFall: 'Planned fall', per24h: 'mmol/L per 24 h',
    waterFormula: 'Free water deficit (L) = total body water × (serum Na⁺ ÷ target Na⁺ − 1).',
    deficit: 'Free water deficit', toFall: (x) => `Time to lower sodium by ${x} mmol/L`, atRate: (r) => `at ${r} mmol/L per 24 h`, freeWaterRate: 'Free water rate', plusLosses: '+ ongoing losses',
    fluidPlan: (x) => `Litres of each fluid to lower sodium by ${x} mmol/L (Adrogué–Madias)`, fluidPlanNote: 'Change in serum sodium per litre for each fluid with sodium below 130 mmol/L; the litres and mL/h are for the next 24 hours, before ongoing losses.',
    waterNotHigh: 'Serum sodium is not above the target: there is no free water deficit to replace.',
    waterCautions: [['If the patient is volume depleted, correct that first with an isotonic fluid.', 'szczech'], ['Lower sodium by no more than 10 mmol/L in the first 24 hours; about 10 mmol/L per day in chronic hypernatraemia, unless it developed over hours.', 'adrogueHyper'], ['The deficit leaves out ongoing urine, gut and skin losses: add them, and recheck sodium often.', 'szczech'], ['Weight-based totals are less reliable after a large recent gain or loss of weight.', 'szczech']],
    // sodium change tabs and acute bolus
    modeContinuous: 'Continuous (Adrogué–Madias)',
    modeBolus: 'Acute 3% bolus (Emergency)',
    bolusSub: '3% NaCl 100–150 mL IV bolus protocol for acute severe symptomatic hyponatraemia',
    bolusIndicationsTitle: 'Indications for 3% NaCl Bolus',
    bolusIndications: 'Severe symptoms: seizures, coma, respiratory arrest, acute brain herniation. Moderately severe: confusion, nausea, severe headache with acute fall.',
    bolusRegimenTitle: 'Emergency Bolus Regimen (Spasovski 2014, Verbalis 2013)',
    bolusDose: 'Bolus dose',
    bolus100: '100 mL',
    bolus150: '150 mL',
    bolus2ml: '2 mL/kg',
    bolusAcuteRise: (r) => `Estimated acute rise from this bolus: ≈ +${r} mmol/L`,
    bolusStep1: 'Infuse 3% NaCl 100–150 mL (or 2 mL/kg) IV over 10–15 minutes.',
    bolusStep2: 'Recheck serum Na⁺ and symptoms after 20 minutes. If severe symptoms persist: repeat 2nd bolus of 100–150 mL.',
    bolusStep3: 'Can repeat a 3rd bolus if needed (maximum 3 boluses within 1–2 hours).',
    bolusTargetStop: 'Stop 3% NaCl boluses immediately once symptoms resolve or target rise (+4 to +6 mmol/L) is reached.',
    bolusODSTitle: 'Daily Limits & ODS Prevention',
    bolusODSLimit: 'Max rise in 24 h: 8 mmol/L in standard patients; 4–6 mmol/L in patients with high risk of osmotic demyelination (cirrhosis, alcoholism, malnutrition, hypokalaemia).',
    bolusRescueTitle: 'Overcorrection Rescue (Desmopressin / D5W)',
    bolusRescue: 'If serum Na⁺ rises > 8 mmol/L in 24 h (or > 6 in high risk): immediately stop active fluids, give D5W (3 mL/kg/h) and consider Desmopressin (DDAVP 1–2 mcg IV/SC q6–8h) to re-lower or freeze sodium.',
    // potassium guide
    potassiumSub: 'Safe IV potassium repletion, total deficit estimation and administration rules',
    serumK: 'Serum potassium',
    kAccess: 'IV Access',
    accessPeriph: 'Peripheral IV',
    accessCentral: 'Central line (CVC)',
    kDeficitTitle: 'Total Body Potassium Deficit',
    kDeficitEst: (low, high) => `Estimated deficit: ≈ ${low}–${high} mmol`,
    kDeficitNote: 'Serum K⁺ represents only ~2% of total body potassium (98% is intracellular). Each 0.3 mmol/L decrease below 4.0 ≈ 100 mmol deficit (Sterns / UpToDate).',
    kNormalNote: 'Serum potassium is in normal or high range (≥ 3.5 mmol/L). Routine hypokalaemic loading is not indicated.',
    kRateTitle: 'Safe Infusion Rate & Concentration Limits',
    kRatePeriph: 'Peripheral IV: Maximum rate 10 mmol/h, maximum concentration 40 mmol/L (e.g. 20 mmol in 500 mL) to prevent severe chemical phlebitis and pain.',
    kRateCent: 'Central line (CVC): Up to 20 mmol/h with continuous cardiac ECG monitoring in an ICU or monitored bed; maximum concentration 80 mmol/L.',
    kVehicleTitle: 'Vehicle Solution Alert',
    kVehicleAlert: 'Avoid Dextrose vehicle during initial repletion: Dextrose stimulates endogenous insulin release, driving K⁺ into cells and temporarily worsening hypokalaemia. Prefer 0.9% NaCl or 0.45% NaCl.',
    kMgTitle: 'Serum Magnesium Check (Crucial)',
    kMgAlert: 'Target serum Mg²⁺ ≥ 0.8 mmol/L (2.0 mg/dL). Hypomagnesaemia causes renal K⁺ wasting through open ROMK channels and makes hypokalaemia refractory to replacement.',
    kPreMixTitle: 'Premixed fluids in the guide with potassium',
    // DKA / HHS protocol
    dkaSub: 'ADA 2024 & JBDS-IP guidelines: Corrected sodium, fluid transition, glucose rescue and potassium replenishment',
    dkaType: 'Condition',
    dkaTypeDka: 'DKA (Ketoacidosis)',
    dkaTypeHhs: 'HHS (Hyperosmolar)',
    measuredNa: 'Measured Na⁺',
    bloodGlucose: 'Blood glucose',
    gluUnit: 'Unit',
    gluMgdl: 'mg/dL',
    gluMmol: 'mmol/L',
    correctedNaTitle: 'Katz Corrected Sodium',
    correctedNaFormula: 'Corrected Na⁺ = Measured Na⁺ + 0.016 × (Glucose mg/dL − 100)',
    corrNaStatus: (v, isHigh) => `Corrected Na⁺: ${v.toFixed(1)} mmol/L (${isHigh ? 'Normal / High ≥ 135' : 'Low < 135'})`,
    dkaStep1Title: 'Phase 1: Initial Resuscitation (Hour 1)',
    dkaStep1Desc: 'Infuse 0.9% NaCl 1000 mL/h (or 15–20 mL/kg/h) in the first hour to restore intravascular volume.',
    dkaStep2Title: 'Phase 2: Hydration Fluid Selection',
    dkaStep2High: 'Corrected Na⁺ ≥ 135 mmol/L: Switch to 0.45% NaCl (NSS/2) at 250–500 mL/h to address intracellular dehydration.',
    dkaStep2Low: 'Corrected Na⁺ < 135 mmol/L: Continue 0.9% NaCl (NSS) at 250–500 mL/h.',
    dkaStep3Title: 'Phase 3: Dextrose Addition Threshold',
    dkaStep3Threshold: (t, th) => `${t}: When glucose reaches ≤ ${th} mg/dL, add 5% Dextrose (e.g. 5%D/N/2 or 5%D/NSS at 150–250 mL/h) to maintain glucose at 150–200 mg/dL (DKA) or 200–300 mg/dL (HHS) while insulin continues until acidosis resolves.`,
    dkaStep3AddNow: (th) => `🚨 Current glucose is ≤ ${th} mg/dL: ADD 5% DEXTROSE NOW (e.g. 5%D/N/2 at 150–250 mL/h) to prevent hypoglycemia while insulin continues!`,
    dkaStep3Wait: (th) => `Current glucose > ${th} mg/dL: Continue dextrose-free fluid. Add 5% dextrose once glucose drops below ${th} mg/dL.`,
    dkaStep4Title: 'Phase 4: Potassium Management Algorithm',
    dkaKHold: 'K⁺ < 3.3 mmol/L: 🚨 CRITICAL: HOLD INSULIN! Give IV KCl 20–40 mmol/h until K⁺ > 3.3. Starting insulin with severe hypokalaemia can precipitate fatal arrhythmias or respiratory arrest.',
    dkaKSafe: 'K⁺ 3.3–5.2 mmol/L: ✅ Safe to start/continue insulin. Add 20–30 mmol KCl per litre of IV fluid to maintain serum K⁺ between 4.0–5.0 mmol/L.',
    dkaKNoAdd: 'K⁺ > 5.2 mmol/L: ⚠️ Do NOT add potassium to IV fluids. Recheck serum K⁺ every 2 hours until < 5.2 mmol/L.',
    // GIR calculator
    girSub: 'Glucose Infusion Rate (GIR) bedside calculator & maximal oxidation capacity guidance',
    girModeRate: 'Rate → GIR (Check existing rate)',
    girModeTarget: 'Target GIR → Required Rate',
    girFluid: 'IV Fluid / Dextrose solution',
    girDexCustom: 'Custom dextrose %',
    girTargetGIR: 'Target GIR (mg/kg/min)',
    girResultGIR: 'Glucose Infusion Rate',
    girResultRate: 'Required Infusion Rate',
    girUnitMlh: 'mL/h',
    girUnitMgKgMin: 'mg/kg/min',
    girDailyDex: 'Daily dextrose',
    girDailyKcal: 'Daily energy',
    girGDay: 'g/day',
    girKcalDay: 'kcal/day',
    girRangeNormal: 'Normal physiological maintenance: 2–3 mg/kg/min',
    girRangeCrit: 'Critically ill / stress: 3–4 mg/kg/min',
    girRangeMax: 'Maximal oxidation capacity: 4–5 mg/kg/min (absolute max 7 mg/kg/min)',
    girWarnHigh: '⚠️ Caution: GIR exceeds maximal hepatic glucose oxidation rate (≥ 5 mg/kg/min). Risk of hyperglycemia, hyperosmolarity, hepatic steatosis, and increased CO₂ production!',
    girWarnLow: 'GIR is below basal hepatic glucose output (~2 mg/kg/min). Patient may develop hypoglycemia or catabolism if fasting without oral intake.',
    girFormula: 'GIR (mg/kg/min) = [Rate (mL/h) × Dextrose (%) × 10] ÷ [Weight (kg) × 60]',
    girFormulaTarget: 'Rate (mL/h) = [Target GIR (mg/kg/min) × Weight (kg) × 60] ÷ [Dextrose (%) × 10]',
    girPedsNote: 'In neonates & infants, basal GIR requirement is higher (4–8 mg/kg/min due to larger brain-to-body ratio).',
    // ICP & Osmotherapy guide
    icpSub: 'Acute intracranial hypertension & cerebral edema: Mannitol 20% vs. 3% Hypertonic Saline, osmolality limits & CPP monitoring',
    icpTabs: { mannitol: 'Mannitol 20%', nacl3: '3% Hypertonic Saline', decision: 'Decision Matrix', cpp: 'CPP & MAP' },
    icpWeight: 'Weight',
    icpManDoseLabel: 'Mannitol Dose (g/kg)',
    icpManCalcGrams: 'Dose in Grams',
    icpManCalcVol: '20% Volume to Infuse',
    icpManAdminTime: 'Infuse IV bolus over 15–20 minutes using an in-line filter set (0.22–5 μm).',
    icpManKinetics: 'Onset: 10–15 min | Peak: 20–60 min | Duration: 4–6 h',
    icpManOsmLabel: 'Measured Serum Osmolality',
    icpManOsmSafe: '✓ Measured Serum Osmolality is below 320 mOsm/kg cutoff.',
    icpManOsmCaution: '⚠️ Serum Osmolality near threshold (310–320 mOsm/kg). Check renal function & recheck prior to further dosing.',
    icpManOsmDanger: '🚨 HOLD MANNITOL! Measured Serum Osmolality ≥ 320 mOsm/kg. Extreme risk of acute kidney injury (acute tubular necrosis) and hyperosmolality syndrome. Switch to 3% NaCl or alternative measures.',
    icpGapToggle: 'Osmolar Gap Calculator',
    icpGapNa: 'Serum Na⁺',
    icpGapGlu: 'Glucose',
    icpGapBun: 'BUN',
    icpGapCalcOsm: 'Calculated Osm',
    icpGapVal: 'Osmolar Gap',
    icpGapNormal: '✓ Osmolar gap ≤ 10 mOsm/kg: no evidence of significant mannitol accumulation.',
    icpGapHigh: '⚠️ Osmolar gap > 10–20 mOsm/kg: Indicates unexcreted mannitol accumulation. Hold further doses until gap clears!',
    icpManNotes: [
      'Profound osmotic diuresis: Mannitol drives massive free water and electrolyte loss. Resultant hypovolemia and systemic hypotension critically reduce Cerebral Perfusion Pressure (CPP = MAP − ICP). Maintain euvolemia with isotonic crystalloids (NSS / balanced).',
      'Rebound ICP increase: With repeated dosing or prolonged therapy, mannitol gradually crosses a disrupted blood-brain barrier (BBB), accumulating in brain parenchyma and reversing the osmotic gradient.',
      'Crystallization: Mannitol may crystallize at cool temperatures. Inspect the bag/vial before use; warm and shake if crystals are visible; always use an in-line filter.',
    ],
    icpOpenMan: 'Open Mannitol 20% Card',
    icpNacl3BolusLabel: '3% NaCl Bolus Dose',
    icpNacl3Vol: 'Volume to Infuse',
    icpNacl3Admin: 'Infuse IV bolus over 10–20 minutes. Emergency peripheral access (large-bore) acceptable for acute bolus; central line preferred for continuous infusions.',
    icpNacl3NaCurrent: 'Current Serum Na⁺',
    icpNacl3Rise: 'Anticipated Acute Na⁺ Rise',
    icpNacl3PredictedNa: 'Predicted Post-Bolus Na⁺',
    icpNacl3TargetNote: 'Target Serum Na⁺: 145–155 mmol/L (BTF / ENLS)',
    icpNacl3HighAlert: '🚨 HOLD 3% NaCl! Current serum Na⁺ ≥ 155 mmol/L (or post-bolus > 155–160 mmol/L). Severe hypernatremia risks renal vasoconstriction, seizures, and hyperchloremic acidosis.',
    icpNacl3Safe: '✓ Serum Na⁺ is within or approaching therapeutic target range (145–155 mmol/L).',
    icpNacl3Notes: [
      'Volume expansion: Unlike mannitol, 3% NaCl expands intravascular volume and elevates MAP, which actively supports Cerebral Perfusion Pressure (CPP). It is preferred in trauma patients with concomitant hypotension or hypovolemic shock.',
      'Acid-base monitoring: Infusate chloride is 513 mmol/L. High volumes or continuous infusions cause hyperchloremic non-anion gap metabolic acidosis and renal vasoconstriction. Monitor serum chloride and blood gas.',
      'Osmolality ceiling: Serum osmolality up to 360 mOsm/kg is generally tolerated with hypertonic saline (higher than mannitol cutoff of 320 mOsm/kg).',
      'Chronic hyponatremia: If herniation occurs on chronic hyponatremia, aim for acute initial +4–6 mmol/L rise to stop herniation, then adhere strictly to the 8–10 mmol/L/24h ceiling to prevent Osmotic Demyelination Syndrome (ODS).',
    ],
    icpOpenNacl3: 'Open 3% NaCl Card',
    icpDecisionTitle: 'Osmotherapy Agent Selection: Head-to-Head Comparison',
    icpColCond: 'Clinical Presentation',
    icpColAgent: 'Preferred Osmotherapy',
    icpColReason: 'Mechanism & Evidence Rationale',
    icpScenarios: [
      { cond: 'Hypotension / Shock (MAP < 65 or SBP < 90 mmHg)', agent: '3% Hypertonic Saline', tone: 'emerald', text: '3% NaCl expands intravascular volume and raises MAP/CPP. Mannitol causes osmotic diuresis and worsens hypovolemic hypotension (drops CPP).' },
      { cond: 'Heart Failure / Pulmonary Edema / Hypervolemia', agent: 'Mannitol 20%', tone: 'blue', text: 'Mannitol acts as an osmotic diuretic, promoting net fluid excretion. 3% NaCl increases intravascular volume and can precipitate pulmonary edema.' },
      { cond: 'Renal Insufficiency / Oliguria (Osm > 320 mOsm/kg)', agent: '3% Hypertonic Saline', tone: 'emerald', text: 'Mannitol is nephrotoxic when serum Osm ≥ 320 mOsm/kg or in anuria. 3% NaCl can be titrated safely up to serum Osm 360 mOsm/kg and Na 155 mmol/L.' },
      { cond: 'Baseline Hyponatremia (Na < 135 mmol/L)', agent: '3% Hypertonic Saline', tone: 'emerald', text: '3% NaCl corrects hyponatremia while reducing cerebral edema. Mannitol lowers serum sodium via free water mobilization and diuresis.' },
      { cond: 'Baseline Hypernatremia (Na > 150 mmol/L)', agent: 'Mannitol 20%', tone: 'blue', text: 'Mannitol is preferred if serum Osm < 320 mOsm/kg. 3% NaCl is contraindicated if serum Na exceeds 155 mmol/L.' },
    ],
    icpCppTitle: 'Cerebral Perfusion Pressure (CPP) & MAP Calculator',
    icpSbp: 'Systolic BP (SBP)',
    icpDbp: 'Diastolic BP (DBP)',
    icpMap: 'Mean Arterial Pressure (MAP)',
    icpIcpVal: 'Intracranial Pressure (ICP)',
    icpCppVal: 'Cerebral Perfusion Pressure (CPP)',
    icpTargetCpp: 'Target CPP: 60–70 mmHg',
    icpTargetIcp: 'Target ICP: < 20–22 mmHg (BTF Guidelines)',
    icpCppLowAlert: '🚨 CPP < 60 mmHg: High risk of cerebral ischemia! Augment MAP (fluid resuscitation, vasopressors) and reduce ICP (elevate head 30°, osmotherapy, CSF drainage, sedation).',
    icpCppHighAlert: '⚠️ CPP > 70 mmHg: Excessive cerebral perfusion pressure. Avoid inducing hypertension; risk of cerebral hyperperfusion injury and ARDS.',
    icpIcpHighAlert: '🚨 ICP > 22 mmHg: Pathological intracranial hypertension! Escalate neurocritical care interventions immediately.',
    icpCppNormal: '✓ CPP is within optimal target range (60–70 mmHg).',
    icpCppFormula: 'MAP = DBP + (SBP − DBP) / 3 | CPP = MAP − ICP',
    // Albumin Guide
    albSub: 'Evidence-based albumin indications in cirrhosis & critical care: Paracentesis (LVP), SBP, HRS-AKI challenge & 5% vs 20%/25% selection',
    albTabs: { lvp: 'Paracentesis (LVP)', sbp: 'SBP Dosing', hrs: 'HRS-AKI Protocol', compare: '5% vs 20% vs 25%' },
    albLvpTitle: 'Large-Volume Paracentesis (LVP > 5 L) Albumin Calculator',
    albLvpVolRemoved: 'Ascites Volume Removed',
    albLvpDoseFactor: 'Albumin Ratio (g/L ascites)',
    albLvpDoseGrams: 'Total Albumin Required',
    albLvpVol20: '20% Albumin Volume',
    albLvpVol25: '25% Albumin Volume',
    albLvpVol5Compare: '5% Equivalent (Not Rec.)',
    albLvpSafeAlert: '✓ LVP ≥ 5 L: Albumin replacement (6–8 g per litre removed) is strongly recommended by AASLD & EASL to prevent Paracentesis-Induced Circulatory Dysfunction (PICD), hyponatremia, and renal impairment.',
    albLvpLowAlert: 'ℹ️ Paracentesis < 5 L: Routine albumin administration is generally not required (low risk of PICD). Consider only if patient is hypotensive, cirrhotic cardiomyopathy, or history of SBP.',
    albLvpRateNote: 'Administration: Infuse IV over 30–60 minutes immediately upon completion of paracentesis (or infuse concurrently if volume > 8 L).',
    albLvpNotes: [
      'Paracentesis-Induced Circulatory Dysfunction (PICD): Rapid removal of ascites causes splanchnic vasodilation, marked reduction in effective arterial blood volume, severe activation of RAAS and SNS, leading to rapid re-accumulation of ascites, hyponatremia, and hepatorenal syndrome.',
      'Dosing standard: 8 g albumin per litre of ascites removed is the standard trial-tested regimen; 6 g/L is accepted in European guidance for volumes between 5–8 L.',
      'Avoid 5% albumin in LVP: 5% albumin provides excessive sodium and water volume (4–5x fluid volume compared to 20–25%), worsening sodium retention in cirrhosis.',
    ],
    albSbpTitle: 'Spontaneous Bacterial Peritonitis (SBP) Dosing Protocol',
    albSbpWeight: 'Patient Weight',
    albSbpDay1Dose: 'Day 1 Dose (within 6h)',
    albSbpDay3Dose: 'Day 3 Dose (at 48h)',
    albSbpTotalGrams: 'Total Course Albumin',
    albSbpDay1Sub: '1.5 g/kg IV within 6 hours of diagnosis',
    albSbpDay3Sub: '1.0 g/kg IV at 48 hours',
    albSbpTrialAlert: '★ Sort et al. (NEJM 1999) Landmark Trial: Albumin (1.5 g/kg Day 1 + 1.0 g/kg Day 3) reduced hepatorenal syndrome from 33% to 10% and in-hospital mortality from 29% to 10% (P = 0.01).',
    albSbpHighRiskNote: 'Greatest benefit seen in high-risk patients: Serum Bilirubin ≥ 4 mg/dL (≥ 68 μmol/L) or Serum Creatinine ≥ 1.0 mg/dL (≥ 88 μmol/L). However, current AASLD/EASL guidelines recommend albumin for ALL patients with SBP (ascitic PMN ≥ 250/mm³).',
    albSbpNotes: [
      'Timing is critical: The Day 1 dose of 1.5 g/kg must be initiated within 6 hours of paracentesis confirming SBP alongside broad-spectrum IV antibiotics (e.g. 3rd-gen cephalosporin).',
      'Infusion rate: 20% or 25% albumin is typically infused over 2–4 hours. Monitor for acute pulmonary edema or fluid overload.',
    ],
    albHrsTitle: 'Hepatorenal Syndrome (HRS-AKI) Diagnostic & Treatment Protocol',
    albHrsWeight: 'Patient Weight',
    albHrsChallengeTitle: 'Phase 1: Diagnostic Volume Challenge (Rule out Pre-renal AKI)',
    albHrsChallengeDose: 'Albumin 1 g/kg/day (Max 100 g/day) × 2 Consecutive Days',
    albHrsChallengeGrams: 'Daily Challenge Dose',
    albHrsChallengeVol20: '20% Daily Volume',
    albHrsChallengeVol25: '25% Daily Volume',
    albHrsChallengeAction: 'Action required: Complete withdrawal of all diuretics, antihypertensives, and vasodilators. Infuse albumin 1 g/kg/day for 48 hours.',
    albHrsDiagnosisCriteria: 'HRS-AKI Diagnostic Criteria (AASLD / IAC): Cirrhosis with ascites; AKI per ICA criteria; No response after 2 consecutive days of diuretic withdrawal and albumin volume expansion; Absence of shock; No recent exposure to nephrotoxic drugs; Absence of structural kidney injury (proteinuria < 500 mg/d, microhematuria < 50 RBC/hpf, normal renal ultrasound).',
    albHrsRxTitle: 'Phase 2: Confirmed HRS-AKI Pharmacotherapy',
    albHrsRxAlbumin: 'Albumin: 20–40 g/day IV maintenance during vasoconstrictor therapy.',
    albHrsRxVasoconstrictors: 'Vasoconstrictor of choice:',
    albHrsRxTerli: '• Terlipressin: 0.85–1.0 mg IV bolus q4–6h OR continuous IV infusion 2 mg/day (titrate up to 12 mg/day if SCr doesn\'t decrease ≥ 25% after 48h). Most effective agent for reversal of HRS.',
    albHrsRxNorepi: '• Norepinephrine: Continuous infusion 0.5–3.0 mg/h in ICU, titrated to raise MAP by ≥ 10 mmHg or MAP > 65–70 mmHg.',
    albHrsRxMidOct: '• Midodrine (oral 7.5–15 mg TID) + Octreotide (SC 100–200 mcg TID): Secondary option if terlipressin/norepinephrine unavailable.',
    albHrsRespAlert: '⚠️ Respiratory Warning (CONFIRM Trial): Terlipressin + Albumin carries substantial risk of acute pulmonary edema and respiratory failure. Monitor continuous pulse oximetry. Discontinue or reduce if SpO₂ drops or dyspnea develops.',
    albCompareTitle: 'Albumin Concentration Selection (5% vs 20% vs 25%) & Safety Matrix',
    albColConcentration: 'Concentration',
    albColOncotic: 'Oncotic Pressure',
    albColVolumeExpansion: 'Intravascular Expansion',
    albColIndications: 'Primary Clinical Indications',
    albContraTitle: 'Critical Black Box Warnings & Contraindications',
    albTbiAlert: '🚨 STRICT CONTRAINDICATION in Traumatic Brain Injury (TBI): The SAFE-TBI study (NEJM 2007) demonstrated significantly higher 2-year mortality with albumin resuscitation in severe TBI (relative risk of death 1.88, P < 0.001) due to delayed BBB leakage and raised ICP. Use isotonic crystalloid (NSS / balanced) instead!',
    albChfAlert: '⚠️ Fluid Overload & Heart Failure: Albumin (especially 20% & 25%) rapidly mobilizes interstitial water into the vascular tree. Contraindicated in severe circulatory failure or pulmonary edema. Monitor volume status meticulously.',
    albSepsisNote: 'Sepsis Resuscitation (Surviving Sepsis Campaign 2021): Suggest using albumin (5% or 20%) in patients who received large volumes of crystalloids to maintain MAP and reduce cumulative fluid balance (weak recommendation, moderate-quality evidence).',
    albOpenFluid5: 'Open 5% Albumin Card',
    albOpenFluid20: 'Open 20% Albumin Card',
    albOpenFluid25: 'Open 25% Albumin Card',
  },
  th: {
    chooseSub: 'NICE CG174 "5 Rs" และ Surviving Sepsis Campaign 2021',
    tabs: { resus: 'กู้ชีพ', maint: 'บำรุงรักษา', replace: 'ทดแทนและกระจายตัว', reassess: 'ประเมินซ้ำ' },
    resus: [
      ['อาการที่บ่งว่าอาจต้องให้สารน้ำกู้ชีพเร่งด่วน: ความดันซิสโตลิกต่ำกว่า 100 mmHg ชีพจรเกิน 90/นาที capillary refill เกิน 2 วินาทีหรือปลายมือเท้าเย็น หายใจเกิน 20/นาที NEWS ตั้งแต่ 5 หรือ passive leg raise ให้ผลบวก', 'nice', '1.2.1'],
      ['ใช้คริสตัลลอยด์ที่มีโซเดียม 130–154 mmol/L ให้ bolus 500 mL ภายในไม่เกิน 15 นาที แล้วประเมินซ้ำ (ABCDE)', 'nice', '1.3.1'],
      ['ภาวะติดเชื้อในกระแสเลือดหรือช็อกจากการติดเชื้อ: คริสตัลลอยด์เป็นสารน้ำทางเลือกแรก (คำแนะนำหนักแน่น) แนะนำ balanced crystalloid มากกว่า normal saline (คำแนะนำอ่อน หลักฐานคุณภาพต่ำ)', 'ssc', ''],
      ['ภาวะ hypoperfusion จากการติดเชื้อหรือช็อกจากการติดเชื้อ: แนะนำคริสตัลลอยด์อย่างน้อย 30 mL/kg ภายใน 3 ชั่วโมงแรก (คำแนะนำอ่อน หลักฐานคุณภาพต่ำ)', 'ssc', ''],
    ],
    resusList: 'สารน้ำในแอปที่มีโซเดียม 130–154 mmol/L และไม่มีกลูโคส',
    maint: [
      ['สำหรับบำรุงรักษาอย่างเดียว: น้ำ 25–30 mL/kg/วัน โพแทสเซียม โซเดียม และคลอไรด์ อย่างละประมาณ 1 mmol/kg/วัน และกลูโคส 50–100 g/วัน', 'nice', '1.4.1'],
      ['ผู้ป่วยอ้วน: ใช้น้ำหนักตัวในอุดมคติและปริมาณต่อ kg ช่วงล่าง ผู้ป่วยแทบไม่ต้องการเกิน 3 L/วัน ปรึกษาผู้เชี่ยวชาญถ้า BMI เกิน 40', 'nice', '1.4.2'],
      ['พิจารณาให้น้อยลง (20–25 mL/kg/วัน) ในผู้สูงอายุหรือเปราะบาง ไตบกพร่องหรือหัวใจล้มเหลว และภาวะขาดอาหารที่เสี่ยง refeeding', 'nice', '1.4.3'],
      ['ตัวอย่าง: 0.18% NaCl ใน 4% กลูโคส ผสมโพแทสเซียม 27 mmol/L ขนาด 25–30 mL/kg/วัน ในวันแรก การให้เกิน 2.5 L/วัน เพิ่มความเสี่ยงโซเดียมต่ำ ใช้สารน้ำผสมโพแทสเซียมสำเร็จรูป NICE แนะนำไม่ให้เติมโพแทสเซียมลงในถุงเอง', 'nice', '1.4.4'],
    ],
    maintList: 'สารน้ำในแอปที่มีกลูโคสและโซเดียมต่ำกว่า 130 mmol/L (ชนิดมีโพแทสเซียมก่อน)',
    replace: [
      ['เพิ่มหรือลดจากสารน้ำบำรุงรักษาตามภาวะขาดหรือเกินที่มีอยู่ การสูญเสียต่อเนื่อง และการกระจายตัวผิดปกติ', 'nice', '1.5.1'],
      ['ปรึกษาผู้เชี่ยวชาญเมื่อปัญหาซับซ้อน: บวมมาก ติดเชื้อรุนแรง โซเดียมต่ำหรือสูง ไต ตับ หรือหัวใจบกพร่อง การคั่งของสารน้ำหลังผ่าตัด ภาวะขาดอาหารหรือ refeeding', 'nice', '1.5.2'],
      ['เมื่อสูญเสียทางเดินอาหารปริมาณมาก โซเดียมในปัสสาวะอาจช่วยได้: ต่ำกว่า 30 mmol/L อาจบ่งว่าโซเดียมในร่างกายพร่องแม้โซเดียมในพลาสมาปกติ (คลาดเคลื่อนได้เมื่อไตบกพร่องหรือได้ยาขับปัสสาวะ)', 'nice', '1.2.4'],
    ],
    reassess: [
      ['ระหว่างกู้ชีพ: ประเมินซ้ำด้วย ABCDE ติดตามอัตราการหายใจ ชีพจร ความดันโลหิต และการไหลเวียนต่อเนื่อง ตรวจ lactate จากหลอดเลือดดำ และ/หรือ pH และ base excess จากหลอดเลือดแดง', 'nice', '1.2.3'],
      ['ผู้ป่วยทุกรายที่ได้สารน้ำ: ประเมินภาวะสารน้ำ ยูเรีย ครีเอตินิน อิเล็กโทรไลต์ และบันทึกสมดุลสารน้ำอย่างน้อยวันละครั้ง ชั่งน้ำหนักสัปดาห์ละ 2 ครั้ง', 'nice', '1.2.4'],
      ['หลังให้สารน้ำที่มีคลอไรด์เกิน 120 mmol/L (เช่น 0.9% NaCl): ตรวจคลอไรด์ทุกวัน ทบทวนคำสั่งเมื่อเกิดคลอไรด์สูงหรือเลือดเป็นกรด', 'nice', '1.2.5'],
    ],
    openMaint: 'เปิดเครื่องคำนวณสารน้ำบำรุงรักษา', openSodium: 'เปิดเครื่องคำนวณการเปลี่ยนแปลงโซเดียม',
    maintSub: 'NICE CG174 สารน้ำบำรุงรักษา (ผู้ใหญ่)',
    weight: 'น้ำหนัก', kg: 'kg', lowRange: 'ผู้สูงอายุหรือเปราะบาง ไตบกพร่อง หัวใจล้มเหลว หรือขาดอาหารเสี่ยง refeeding (20–25 mL/kg/วัน)',
    obese: 'อ้วน: ใช้น้ำหนักตัวในอุดมคติ', height: 'ส่วนสูง', cm: 'cm', sex: 'เพศ', male: 'ชาย', female: 'หญิง',
    ibw: (w) => `น้ำหนักตัวในอุดมคติ (Devine): ${w} kg`, bmi: (b) => `BMI ${b} kg/m²`, needHeight: 'ใส่ส่วนสูงเพื่อคำนวณน้ำหนักตัวในอุดมคติ',
    dosingWeight: 'น้ำหนักที่ใช้', perDay: 'ต่อวัน', perHour: 'mL/ชม.',
    water: 'น้ำ', electrolytes: 'Na⁺, K⁺, Cl⁻ (อย่างละ)', glucoseNeed: 'กลูโคส',
    warn25: 'การให้เกิน 2.5 L/วัน เพิ่มความเสี่ยงโซเดียมต่ำ (NICE 1.4.4)',
    warnObese: 'ผู้ป่วยแทบไม่ต้องการเกิน 3 L/วัน ปรึกษาผู้เชี่ยวชาญถ้า BMI เกิน 40 (NICE 1.4.2)',
    enterWeight: 'ใส่น้ำหนักเพื่อดูความต้องการต่อวัน',
    tableTitle: (v) => `สารน้ำแต่ละชนิด ${v} mL/วัน ให้อะไรบ้าง`, tableVolume: 'ปริมาณต่อวันในตาราง', mlDay: 'mL/วัน',
    colFluid: 'สารน้ำ', colNa: 'Na⁺ mmol', colK: 'K⁺ mmol', colGlu: 'กลูโคส g', target: 'ความต้องการ',
    gluOk: 'อยู่ในช่วง 50–100 g', tableNote: 'กลูโคสสีเขียวอยู่ในช่วง 50–100 g/วัน ความต้องการโซเดียมและโพแทสเซียมประมาณอย่างละ 1 mmol/kg/วัน',
    sodiumSub: 'Adrogué–Madias: การเปลี่ยนแปลงโซเดียมในเลือดที่คาดไว้จากสารน้ำแต่ละชนิด 1 ลิตร',
    serumNa: 'โซเดียมในเลือด', elderly: 'ผู้สูงอายุ', tbw: (f, v) => `น้ำในร่างกายทั้งหมด ${v} L (น้ำหนัก × ${f})`,
    formula: 'การเปลี่ยนแปลง Na⁺ ต่อ 1 L = (Na⁺ + K⁺ ในสารน้ำ − Na⁺ ในเลือด) ÷ (น้ำในร่างกายทั้งหมด + 1)',
    tbwNote: 'สัดส่วนน้ำในร่างกาย: 0.6 ชายที่ไม่สูงอายุ 0.5 หญิงที่ไม่สูงอายุและชายสูงอายุ 0.45 หญิงสูงอายุ',
    planQuick: 'เลือกด่วน (mmol/L)', raise: 'เพิ่ม ↑', lower: 'ลด ↓',
    targetChange: 'การเปลี่ยนแปลงที่วางแผน', target24: 'mmol/L', litresFor: (x) => `≈ ${x} L สำหรับการเปลี่ยนแปลงที่วางแผน`,
    colChange: 'เปลี่ยนต่อ 1 L', enterNa: 'ใส่โซเดียมในเลือดและน้ำหนัก',
    limitsTitle: 'ขีดจำกัดการแก้ไข',
    limits: [
      ['โซเดียมต่ำ: เพิ่มไม่เกิน 10 mmol/L ใน 24 ชั่วโมงแรก และไม่เกิน 8 mmol/L ในทุก 24 ชั่วโมงต่อมา (จนโซเดียมถึง 130 mmol/L)', 'spasovski'],
      ['โซเดียมสูง: ตั้งเป้าลดประมาณ 10 mmol/L ต่อวัน ยกเว้นกรณีที่เกิดขึ้นภายในไม่กี่ชั่วโมง', 'adrogueHyper'],
    ],
    caveat: 'สูตรนี้ถือว่าสารน้ำ 1 ลิตรคงอยู่ในร่างกาย ไม่นับการสูญเสียทางปัสสาวะ ทางเดินอาหาร หรือผิวหนัง ตรวจโซเดียมซ้ำบ่อย ๆ และปรับตามผล',
    selectedFirst: 'สารน้ำที่เลือกไว้แสดงก่อน',
    dripSub: 'อัตราการให้และจำนวนหยดต่อนาทีสำหรับชุดให้สารน้ำแบบหยด',
    modeVolume: 'ปริมาตรต่อเวลา', modeRate: 'อัตรา', volume: 'ปริมาตร', mL: 'mL', hours: 'เวลา', h: 'ชม.', rate: 'อัตรา', dropFactor: 'Drop factor', gttmL: 'หยด/mL',
    resRate: 'อัตรา', resDrops: 'หยดต่อนาที', resSec: 'หนึ่งหยดทุก', sec: 'วินาที',
    dripNote: 'ตรวจ drop factor ที่พิมพ์บนซองชุดให้สารน้ำ (มักเป็น 10, 15 หรือ 20 หยด/mL; micro-drip 60 หยด/mL)',
    dripFormula: 'หยด/นาที = mL/ชม. × drop factor ÷ 60',
    waterSub: 'ปริมาณน้ำอิสระที่ขาดในภาวะโซเดียมสูง และปริมาณสารน้ำโซเดียมต่ำแต่ละชนิดที่ลดโซเดียมตามอัตราที่วางแผน',
    targetNa: 'โซเดียมเป้าหมาย', plannedFall: 'ลดลงตามแผน', per24h: 'mmol/L ต่อ 24 ชม.',
    waterFormula: 'น้ำอิสระที่ขาด (L) = น้ำในร่างกายทั้งหมด × (Na⁺ ในเลือด ÷ Na⁺ เป้าหมาย − 1)',
    deficit: 'น้ำอิสระที่ขาด', toFall: (x) => `เวลาที่ใช้ลดโซเดียม ${x} mmol/L`, atRate: (r) => `ที่ ${r} mmol/L ต่อ 24 ชม.`, freeWaterRate: 'อัตราให้น้ำอิสระ', plusLosses: '+ การสูญเสียต่อเนื่อง',
    fluidPlan: (x) => `ปริมาณสารน้ำแต่ละชนิดเพื่อลดโซเดียม ${x} mmol/L (Adrogué–Madias)`, fluidPlanNote: 'การเปลี่ยนแปลงโซเดียมต่อลิตรของสารน้ำที่มีโซเดียมต่ำกว่า 130 mmol/L แต่ละชนิด ปริมาณและ mL/ชม. เป็นของ 24 ชั่วโมงข้างหน้า ยังไม่รวมการสูญเสียต่อเนื่อง',
    waterNotHigh: 'โซเดียมในเลือดไม่สูงกว่าเป้าหมาย จึงไม่มีน้ำอิสระที่ขาด',
    waterCautions: [['ถ้าผู้ป่วยขาดสารน้ำในหลอดเลือด ให้แก้ด้วยสารน้ำ isotonic ก่อน', 'szczech'], ['ลดโซเดียมไม่เกิน 10 mmol/L ใน 24 ชั่วโมงแรก และประมาณ 10 mmol/L ต่อวันในโซเดียมสูงเรื้อรัง ยกเว้นเกิดขึ้นภายในไม่กี่ชั่วโมง', 'adrogueHyper'], ['ค่าที่คำนวณไม่รวมการสูญเสียทางปัสสาวะ ทางเดินอาหาร และผิวหนังที่ยังเกิดอยู่ ให้บวกเพิ่มและตรวจโซเดียมซ้ำบ่อย ๆ', 'szczech'], ['ค่าที่คำนวณจากน้ำหนักเชื่อถือได้น้อยลงเมื่อน้ำหนักเปลี่ยนมากเมื่อเร็ว ๆ นี้', 'szczech']],
    // sodium change tabs and acute bolus
    modeContinuous: 'การให้แบบต่อเนื่อง (Adrogué–Madias)',
    modeBolus: 'Bolus 3% NaCl ฉุกเฉิน',
    bolusSub: 'แนวทางยุโรปและสหรัฐฯ: โปรโตคอล 3% NaCl bolus 100–150 mL สำหรับโซเดียมต่ำรุนแรงที่มีอาการ',
    bolusIndicationsTitle: 'ข้อบ่งชี้สำหรับการให้ 3% NaCl Bolus',
    bolusIndications: 'อาการรุนแรง: ชัก หมดสติ ซึม หยุดหายใจ อาการสมองเคลื่อนเฉียบพลัน อาการปานกลาง: สับสน คลื่นไส้ ปวดศีรษะรุนแรงร่วมกับ Na ลดลงเร็ว',
    bolusRegimenTitle: 'วิธีให้แบบฉุกเฉิน (Spasovski 2014, Verbalis 2013)',
    bolusDose: 'ขนาด Bolus',
    bolus100: '100 mL',
    bolus150: '150 mL',
    bolus2ml: '2 mL/kg',
    bolusAcuteRise: (r) => `ประมาณการ Na⁺ ที่เพิ่มขึ้นจาก bolus นี้: ≈ +${r} mmol/L`,
    bolusStep1: 'ให้ 3% NaCl 100–150 mL (หรือ 2 mL/kg) IV bolus ในเวลา 10–15 นาที',
    bolusStep2: 'ตรวจ Na⁺ ในเลือดและอาการซ้ำหลัง 20 นาที หากยังมีอาการรุนแรง ให้ bolus ซ้ำครั้งที่ 2 ขนาด 100–150 mL',
    bolusStep3: 'สามารถให้ bolus ซ้ำครั้งที่ 3 ได้หากจำเป็น (สูงสุดไม่เกิน 3 ครั้งภายใน 1–2 ชั่วโมง)',
    bolusTargetStop: 'หยุดให้ 3% NaCl bolus ทันทีเมื่ออาการรุนแรงดีขึ้น หรือระดับ Na⁺ เพิ่มขึ้นถึงเป้าหมาย (+4 ถึง +6 mmol/L)',
    bolusODSTitle: 'ขีดจำกัดต่อวันและการป้องกัน Osmotic Demyelination (ODS)',
    bolusODSLimit: 'เพิ่มขึ้นสูงสุดใน 24 ชม.: 8 mmol/L ในผู้ป่วยทั่วไป; 4–6 mmol/L ในผู้ป่วยที่มีความเสี่ยง ODS สูง (ตับแข็ง ติดสุรา ทุพโภชนาการ โพแทสเซียมต่ำ)',
    bolusRescueTitle: 'การแก้ไขเมื่อแก้ไขเกิน (Desmopressin / D5W)',
    bolusRescue: 'หาก Na⁺ ในเลือดเพิ่มขึ้น > 8 mmol/L ใน 24 ชม. (หรือ > 6 ในกลุ่มเสี่ยงสูง): หยุดสารน้ำเดิมทันที ให้ D5W (3 mL/kg/ชม.) และพิจารณาให้ Desmopressin (DDAVP 1–2 mcg IV/SC ทุก 6–8 ชม.) เพื่อลดระดับ Na หรือชะลอการเพิ่ม',
    // potassium guide
    potassiumSub: 'การให้โพแทสเซียมทางหลอดเลือดดำอย่างปลอดภัย ประมาณการภาวะขาด และข้อกำหนดการบริหารยา',
    serumK: 'โพแทสเซียมในเลือด',
    kAccess: 'ช่องทางให้สารน้ำ',
    accessPeriph: 'หลอดเลือดดำส่วนปลาย (Peripheral)',
    accessCentral: 'หลอดเลือดดำส่วนกลาง (Central line)',
    kDeficitTitle: 'ประมาณการโพแทสเซียมที่ขาดในร่างกาย',
    kDeficitEst: (low, high) => `ประมาณการที่ขาด: ≈ ${low}–${high} mmol`,
    kDeficitNote: 'โพแทสเซียมในเลือดคิดเป็นเพียง ~2% ของโพแทสเซียมทั้งหมดในร่างกาย (98% อยู่ในเซลล์) K ลดลงทุก 0.3 mmol/L ต่ำกว่า 4.0 ≈ ขาดประมาณ 100 mmol (Sterns / UpToDate)',
    kNormalNote: 'ระดับโพแทสเซียมในเลือดอยู่ในเกณฑ์ปกติหรือสูง (≥ 3.5 mmol/L) ไม่จำเป็นต้องให้แบบโหลดเสริมภาวะขาด',
    kRateTitle: 'ขีดจำกัดอัตราและความเข้มข้นที่ปลอดภัย',
    kRatePeriph: 'หลอดเลือดดำส่วนปลาย: อัตราสูงสุด 10 mmol/ชม. ความเข้มข้นสูงสุด 40 mmol/L (เช่น 20 mmol ใน 500 mL) เพื่อป้องกันหลอดเลือดดำอักเสบและปวดแสบ',
    kRateCent: 'หลอดเลือดดำส่วนกลาง: สูงสุด 20 mmol/ชม. พร้อมติดตามคลื่นไฟฟ้าหัวใจ (ECG) ต่อเนื่องในหอผู้ป่วยวิกฤต ความเข้มข้นสูงสุด 80 mmol/L',
    kVehicleTitle: 'ข้อควรระวังเรื่องสารน้ำพาหะ',
    kVehicleAlert: 'หลีกเลี่ยงสารน้ำผสมเดกซ์โทรสในการแก้ไขระยะแรก: เดกซ์โทรสกระตุ้นการหลั่งอินซูลิน ดึง K⁺ เข้าเซลล์ ทำให้โพแทสเซียมในเลือดต่ำลงชั่วคราว ควรใช้ 0.9% NaCl หรือ 0.45% NaCl',
    kMgTitle: 'ตรวจแมกนีเซียมในเลือด (สำคัญอย่างยิ่ง)',
    kMgAlert: 'ตั้งเป้าหมาย Mg²⁺ ในเลือด ≥ 0.8 mmol/L (2.0 mg/dL) ภาวะแมกนีเซียมต่ำทำให้ไตขับ K⁺ ทิ้งทางช่อง ROMK และทำให้โพแทสเซียมต่ำไม่ตอบสนองต่อการรักษา',
    kPreMixTitle: 'สารน้ำสำเร็จรูปในคู่มือที่มีโพแทสเซียม',
    // DKA / HHS protocol
    dkaSub: 'แนวทาง ADA 2024 และ JBDS: โซเดียมปรับค่า การเลือกสารน้ำ การเติมน้ำตาล และการจัดการโพแทสเซียม',
    dkaType: 'กลุ่มอาการ',
    dkaTypeDka: 'DKA (ภาวะกรดคีโตนคั่ง)',
    dkaTypeHhs: 'HHS (ภาวะน้ำตาลในเลือดสูงออสโมลาริตีสูง)',
    measuredNa: 'Na⁺ ที่วัดได้',
    bloodGlucose: 'ระดับน้ำตาลในเลือด',
    gluUnit: 'หน่วย',
    gluMgdl: 'mg/dL',
    gluMmol: 'mmol/L',
    correctedNaTitle: 'โซเดียมปรับค่า (Katz Corrected Sodium)',
    correctedNaFormula: 'Na⁺ ปรับค่า = Na⁺ ที่วัดได้ + 0.016 × (กลูโคส mg/dL − 100)',
    corrNaStatus: (v, isHigh) => `Na⁺ ปรับค่า: ${v.toFixed(1)} mmol/L (${isHigh ? 'ปกติ/สูง ≥ 135' : 'ต่ำ < 135'})`,
    dkaStep1Title: 'ระยะที่ 1: กู้ชีพชั่วโมงแรก (Initial Resuscitation)',
    dkaStep1Desc: 'ให้ 0.9% NaCl 1000 mL/ชม. (หรือ 15–20 mL/kg/ชม.) ในชั่วโมงแรกเพื่อขยายปริมาตรในหลอดเลือด',
    dkaStep2Title: 'ระยะที่ 2: การเลือกสารน้ำรักษาสมดุล (Hydration Fluid)',
    dkaStep2High: 'Na⁺ ปรับค่า ≥ 135 mmol/L: เปลี่ยนเป็น 0.45% NaCl (NSS/2) ที่ 250–500 mL/ชม. เพื่อแก้ภาวะขาดน้ำในเซลล์',
    dkaStep2Low: 'Na⁺ ปรับค่า < 135 mmol/L: ให้ 0.9% NaCl (NSS) ต่อเนื่องที่ 250–500 mL/ชม.',
    dkaStep3Title: 'ระยะที่ 3: เกณฑ์การเติมเดกซ์โทรส (Dextrose Threshold)',
    dkaStep3Threshold: (t, th) => `${t}: เมื่อน้ำตาลลดลงถึง ≤ ${th} mg/dL ให้เริ่มเติม 5% เดกซ์โทรส (เช่น 5%D/N/2 หรือ 5%D/NSS ที่ 150–250 mL/ชม.) เพื่อรักษาน้ำตาลที่ 150–200 mg/dL (DKA) หรือ 200–300 mg/dL (HHS) ขณะให้อินซูลินต่อเนื่องจนกระทั่งภาวะกรดคีโตนหาย`,
    dkaStep3AddNow: (th) => `🚨 น้ำตาลปัจจุบัน ≤ ${th} mg/dL: ให้เริ่มเติม 5% เดกซ์โทรสทันที (เช่น 5%D/N/2 ที่ 150–250 mL/ชม.) เพื่อป้องกันน้ำตาลต่ำขณะให้อินซูลินต่อเนื่อง!`,
    dkaStep3Wait: (th) => `น้ำตาลปัจจุบัน > ${th} mg/dL: ให้สารน้ำที่ไม่มีเดกซ์โทรสต่อไป เมื่อน้ำตาลลดลงต่ำกว่า ${th} mg/dL จึงเริ่มเติม 5% เดกซ์โทรส`,
    dkaStep4Title: 'ระยะที่ 4: อัลกอริทึมจัดการโพแทสเซียมและความปลอดภัยอินซูลิน',
    dkaKHold: 'K⁺ < 3.3 mmol/L: 🚨 วิกฤต: ระงับการให้อินซูลินทันที! ให้ IV KCl 20–40 mmol/ชม. จนกว่า K⁺ > 3.3 mmol/L การให้อินซูลินขณะโพแทสเซียมต่ำรุนแรงอาจทำให้หัวใจเต้นผิดจังหวะจนเสียชีวิตหรือหยุดหายใจ',
    dkaKSafe: 'K⁺ 3.3–5.2 mmol/L: ✅ ปลอดภัยในการให้อินซูลิน เติม KCl 20–30 mmol ต่อลิตรของสารน้ำเพื่อรักษาระดับ K⁺ ในเลือดที่ 4.0–5.0 mmol/L',
    dkaKNoAdd: 'K⁺ > 5.2 mmol/L: ⚠️ ห้ามเติมโพแทสเซียมลงในสารน้ำ ตรวจระดับ K⁺ ซ้ำทุก 2 ชั่วโมงจนกว่าจะ < 5.2 mmol/L',
    // GIR calculator
    girSub: 'เครื่องคำนวณอัตราการให้กลูโคส (GIR) ข้างเตียง และขีดจำกัดการเผาผลาญสูงสุด',
    girModeRate: 'อัตราการให้ → GIR (ตรวจอัตราที่ให้อยู่)',
    girModeTarget: 'เป้าหมาย GIR → คำนวณอัตราที่ต้องให้',
    girFluid: 'สารน้ำเดกซ์โทรส',
    girDexCustom: 'ความเข้มข้นเดกซ์โทรสกำหนดเอง (%)',
    girTargetGIR: 'เป้าหมาย GIR (mg/kg/นาที)',
    girResultGIR: 'อัตราการให้กลูโคส (GIR)',
    girResultRate: 'อัตราการให้สารน้ำที่ต้องใช้',
    girUnitMlh: 'mL/ชม.',
    girUnitMgKgMin: 'mg/kg/นาที',
    girDailyDex: 'เดกซ์โทรสต่อวัน',
    girDailyKcal: 'พลังงานต่อวัน',
    girGDay: 'g/วัน',
    girKcalDay: 'kcal/วัน',
    girRangeNormal: 'การรักษาระดับปกติ: 2–3 mg/kg/นาที',
    girRangeCrit: 'ผู้ป่วยวิกฤต / ภาวะเครียด: 3–4 mg/kg/นาที',
    girRangeMax: 'ขีดจำกัดการเผาผลาญสูงสุด: 4–5 mg/kg/นาที (ไม่เกิน 7 mg/kg/นาที)',
    girWarnHigh: '⚠️ ข้อควรระวัง: GIR เกินอัตราการเผาผลาญกลูโคสสูงสุดของตับ (≥ 5 mg/kg/นาที) เสี่ยงน้ำตาลในเลือดสูง ตับคั่งไขมัน และ CO₂ สูงขึ้น!',
    girWarnLow: 'GIR ต่ำกว่าอัตราการสร้างกลูโคสพื้นฐานของตับ (~2 mg/kg/นาที) อาจเสี่ยงน้ำตาลต่ำหรือสลายกล้ามเนื้อหากงดอาหาร',
    girFormula: 'GIR (mg/kg/นาที) = [อัตรา (mL/ชม.) × เดกซ์โทรส (%) × 10] ÷ [น้ำหนัก (kg) × 60]',
    girFormulaTarget: 'อัตรา (mL/ชม.) = [เป้าหมาย GIR (mg/kg/นาที) × น้ำหนัก (kg) × 60] ÷ [เดกซ์โทรส (%) × 10]',
    girPedsNote: 'ในทารกแรกเกิดและเด็กเล็ก ความต้องการ GIR พื้นฐานจะสูงกว่าผู้ใหญ่ (4–8 mg/kg/นาที เนื่องจากสัดส่วนสมองต่อน้ำหนักตัวสูงกว่า)',
    // ICP & Osmotherapy guide
    icpSub: 'แนวทางการรักษาภาวะความดันในกะโหลกศีรษะสูงและสมองบวม: Mannitol 20% เทียบกับ 3% Hypertonic Saline, ขีดจำกัด Osmolality และการติดตาม CPP',
    icpTabs: { mannitol: 'Mannitol 20%', nacl3: '3% Hypertonic Saline', decision: 'ตารางตัดสินใจ', cpp: 'คำนวณ CPP & MAP' },
    icpWeight: 'น้ำหนักตัว',
    icpManDoseLabel: 'ขนาดยา Mannitol (g/kg)',
    icpManCalcGrams: 'ขนาดยาที่ต้องให้ (กรัม)',
    icpManCalcVol: 'ปริมาตร 20% ที่ต้องให้ (mL)',
    icpManAdminTime: 'หยดเข้าหลอดเลือดดำ (IV bolus) ในเวลา 15–20 นาที โดยใช้ชุดให้ยาที่มีตัวกรอง (in-line filter 0.22–5 μm)',
    icpManKinetics: 'เริ่มออกฤทธิ์: 10–15 นาที | ออกฤทธิ์สูงสุด: 20–60 นาที | ระยะเวลาออกฤทธิ์: 4–6 ชม.',
    icpManOsmLabel: 'ระดับ Serum Osmolality ที่ตรวจได้',
    icpManOsmSafe: '✓ Serum Osmolality อยู่ต่ำกว่าเกณฑ์ความปลอดภัย 320 mOsm/kg',
    icpManOsmCaution: '⚠️ ระดับ Osmolality ใกล้ขีดจำกัด (310–320 mOsm/kg) ควรตรวจการทำงานของไตและตรวจซ้ำก่อนให้ยาครั้งต่อไป',
    icpManOsmDanger: '🚨 ระงับการให้ MANNITOL! ค่า Serum Osmolality ≥ 320 mOsm/kg เสี่ยงสูงมากต่อภาวะไตวายเฉียบพลัน (Acute Tubular Necrosis) พิจารณาเปลี่ยนเป็น 3% NaCl หรือวิธีอื่น',
    icpGapToggle: 'เครื่องคำนวณ Osmolar Gap (ทางเลือก)',
    icpGapNa: 'Serum Na⁺',
    icpGapGlu: 'น้ำตาลในเลือด (Glucose)',
    icpGapBun: 'BUN',
    icpGapCalcOsm: 'Osmolality ที่คำนวณได้',
    icpGapVal: 'Osmolar Gap',
    icpGapNormal: '✓ Osmolar gap ≤ 10 mOsm/kg: ไม่พบการคั่งสะสมของ Mannitol ในร่างกายอย่างมีนัยสำคัญ',
    icpGapHigh: '⚠️ Osmolar gap > 10–20 mOsm/kg: บ่งชี้ว่ามีการคั่งสะสมของ Mannitol ที่ยังไม่ถูกขับออก ระงับการให้ยาเพิ่มจนกว่าค่าจะลดลง',
    icpManNotes: [
      'การขับปัสสาวะออสโมติกอย่างรุนแรง: Mannitol ทำให้สูญเสียน้ำและเกลือแร่อย่างมาก ภาวะขาดน้ำและความดันโลหิตต่ำจะลด Cerebral Perfusion Pressure (CPP = MAP − ICP) อย่างรุนแรง ควรรักษาสมดุลน้ำในร่างกาย (euvolemia) ด้วยสารน้ำไอโซโทนิก (NSS / balanced)',
      'ภาวะ Rebound ICP: การให้ยาซ้ำหลายครั้งหรือต่อเนื่อง Mannitol อาจซึมผ่าน blood-brain barrier ที่เสียหายเข้าไปในเนื้อสมอง ทำให้เกิดแรงดึงน้ำย้อนกลับและสมองบวมมากขึ้น',
      'การตกผลึก: Mannitol อาจตกผลึกได้ในอุณหภูมิเย็น ตรวจดูขวด/ถุงก่อนใช้ อุ่นและเขย่าหากพบผลึก และต้องใช้ชุดให้ยาที่มีตัวกรองเสมอ',
    ],
    icpOpenMan: 'เปิดการ์ด Mannitol 20%',
    icpNacl3BolusLabel: 'ขนาดยา 3% NaCl Bolus',
    icpNacl3Vol: 'ปริมาตรที่ต้องให้',
    icpNacl3Admin: 'หยดเข้าหลอดเลือดดำ (IV bolus) ในเวลา 10–20 นาที กรณีฉุกเฉินสามารถให้ทางหลอดเลือดดำส่วนปลายขนาดใหญ่ได้ แต่หากให้ต่อเนื่องควรให้ทาง central line',
    icpNacl3NaCurrent: 'ระดับ Serum Na⁺ ปัจจุบัน',
    icpNacl3Rise: 'การเพิ่มขึ้นของ Na⁺ ที่คาดการณ์',
    icpNacl3PredictedNa: 'ระดับ Na⁺ หลังให้ยาที่คาดการณ์',
    icpNacl3TargetNote: 'เป้าหมาย Serum Na⁺: 145–155 mmol/L (BTF / ENLS)',
    icpNacl3HighAlert: '🚨 ระงับการให้ 3% NaCl! ระดับ Serum Na⁺ ≥ 155 mmol/L (หรือหลังให้จะเกิน 155–160 mmol/L) ภาวะโซเดียมสูงเกินเสี่ยงต่อหลอดเลือดไตหดเกร็ง อาการชัก และภาวะกรดจากคลอไรด์สูง',
    icpNacl3Safe: '✓ ระดับ Serum Na⁺ อยู่ในหรือกำลังเข้าสู่ช่วงเป้าหมายการรักษา (145–155 mmol/L)',
    icpNacl3Notes: [
      'การขยายปริมาตรในหลอดเลือด: แตกต่างจาก Mannitol เพราะ 3% NaCl ช่วยเพิ่มปริมาตรในหลอดเลือดและเพิ่ม MAP ซึ่งช่วยพยุง Cerebral Perfusion Pressure (CPP) เหมาะอย่างยิ่งในผู้บาดเจ็บที่มีภาวะความดันโลหิตต่ำหรือช็อกร่วมด้วย',
      'การติดตามสมดุลกรด-ด่าง: สารน้ำมีคลอไรด์สูงถึง 513 mmol/L การให้ปริมาณมากอาจทำให้เกิด Hyperchloremic non-anion gap metabolic acidosis และไตขาดเลือด ติดตามคลอไรด์และก๊าซในเลือดสม่ำเสมอ',
      'เพดาน Osmolality: โดยทั่วไป 3% NaCl ยอมรับระดับ Serum Osmolality ได้สูงถึง 360 mOsm/kg (สูงกว่าเกณฑ์ของ Mannitol ที่ 320 mOsm/kg)',
      'ข้อควรระวังในผู้ป่วยโซเดียมต่ำเรื้อรัง: หากเกิดภาวะสมองเลื่อนในผู้ป่วยที่มีโซเดียมต่ำเรื้อรัง ให้ตั้งเป้าเพิ่ม Na⁺ ระยะแรก +4–6 mmol/L เพื่อยับยั้งการเลื่อนของสมอง แล้วควบคุมการเพิ่มไม่ให้เกิน 8–10 mmol/L/24 ชม. เพื่อป้องกัน Osmotic Demyelination Syndrome (ODS)',
    ],
    icpOpenNacl3: 'เปิดการ์ด 3% NaCl',
    icpDecisionTitle: 'การเลือกสารน้ำลดความดันในกะโหลกศีรษะ: ตารางเปรียบเทียบ',
    icpColCond: 'สถานการณ์ทางคลินิก',
    icpColAgent: 'สารน้ำที่แนะนำ',
    icpColReason: 'เหตุผลและกลไกทางคลินิก',
    icpScenarios: [
      { cond: 'ความดันโลหิตต่ำ / ภาวะช็อก (MAP < 65 หรือ SBP < 90 mmHg)', agent: '3% Hypertonic Saline', tone: 'emerald', text: '3% NaCl เพิ่มปริมาตรสารน้ำในหลอดเลือดและเพิ่ม MAP/CPP ส่วน Mannitol ทำให้ปัสสาวะออกมากและทำให้ความดันตกแย่ลง (CPP ลด)' },
      { cond: 'หัวใจวาย / น้ำท่วมปอด / สารน้ำเกิน (Hypervolemia)', agent: 'Mannitol 20%', tone: 'blue', text: 'Mannitol มีฤทธิ์ขับปัสสาวะออสโมติก ช่วยดึงน้ำส่วนเกินออกจากร่างกาย ส่วน 3% NaCl เพิ่มปริมาตรในหลอดเลือด อาจทำให้น้ำท่วมปอดกำเริบ' },
      { cond: 'ไตทำงานบกพร่อง / ปัสสาวะออกน้อย (Osm > 320 mOsm/kg)', agent: '3% Hypertonic Saline', tone: 'emerald', text: 'Mannitol เป็นพิษต่อไตเมื่อ Serum Osm ≥ 320 mOsm/kg หรือไม่มีปัสสาวะ ส่วน 3% NaCl สามารถให้ได้อย่างปลอดภัยจนถึง Osm 360 mOsm/kg และ Na 155 mmol/L' },
      { cond: 'โซเดียมในเลือดต่ำตั้งแต่แรก (Na < 135 mmol/L)', agent: '3% Hypertonic Saline', tone: 'emerald', text: '3% NaCl ช่วยแก้ไขภาวะโซเดียมต่ำไปพร้อมกับการลดสมองบวม ส่วน Mannitol ทำให้โซเดียมในเลือดลดลงจากการดึงน้ำเข้าหลอดเลือดและการขับปัสสาวะ' },
      { cond: 'โซเดียมในเลือดสูงตั้งแต่แรก (Na > 150 mmol/L)', agent: 'Mannitol 20%', tone: 'blue', text: 'ควรเลือก Mannitol หาก Serum Osm < 320 mOsm/kg และห้ามให้ 3% NaCl หากระดับโซเดียมเกิน 155 mmol/L' },
    ],
    icpCppTitle: 'เครื่องคำนวณ Cerebral Perfusion Pressure (CPP) และ MAP',
    icpSbp: 'ความดันซิสโตลิก (SBP)',
    icpDbp: 'ความดันไดแอสโตลิก (DBP)',
    icpMap: 'ความดันหลอดเลือดแดงเฉลี่ย (MAP)',
    icpIcpVal: 'ความดันในกะโหลกศีรษะ (ICP)',
    icpCppVal: 'แรงดันเลือดไปเลี้ยงสมอง (CPP)',
    icpTargetCpp: 'เป้าหมาย CPP: 60–70 mmHg',
    icpTargetIcp: 'เป้าหมาย ICP: < 20–22 mmHg (เกณฑ์มาตรฐาน BTF)',
    icpCppLowAlert: '🚨 CPP < 60 mmHg: เสี่ยงสูงต่อภาวะสมองขาดเลือด (Cerebral Ischemia)! เพิ่ม MAP (ให้สารน้ำ/ยากระตุ้นความดัน) และลด ICP (ยกศีรษะ 30°, ให้ Osmotherapy, ระบายน้ำไขสันหลัง, ให้ยาระงับประสาท)',
    icpCppHighAlert: '⚠️ CPP > 70 mmHg: แรงดันเลือดไปเลี้ยงสมองสูงเกินไป หลีกเลี่ยงความดันโลหิตสูงเกิน เสี่ยงต่อสมองบวมจากการไหลเวียนเกิน (Hyperperfusion) และปอดบาดเจ็บ (ARDS)',
    icpIcpHighAlert: '🚨 ICP > 22 mmHg: ความดันในกะโหลกศีรษะสูงผิดปกติ! ให้การรักษาทางระบบประสาทวิกฤตทันที',
    icpCppNormal: '✓ ค่า CPP อยู่ในช่วงเป้าหมายที่เหมาะสม (60–70 mmHg)',
    icpCppFormula: 'MAP = DBP + (SBP − DBP) / 3 | CPP = MAP − ICP',
    // Albumin Guide
    albSub: 'แนวทางการใช้อัลบูมินตามหลักฐานเชิงประจักษ์: การเจาะท้อง (LVP), ภาวะเยื่อบุช่องท้องอักเสบ (SBP), ไตวายโรคตับ (HRS-AKI) และการเลือก 5% vs 20%/25%',
    albTabs: { lvp: 'เจาะระบายน้ำในท้อง (LVP)', sbp: 'การให้ใน SBP', hrs: 'ภาวะ HRS-AKI', compare: 'เปรียบเทียบ 5% vs 20% vs 25%' },
    albLvpTitle: 'เครื่องคำนวณอัลบูมินสำหรับการเจาะระบายน้ำในช่องท้องปริมาณมาก (LVP > 5 L)',
    albLvpVolRemoved: 'ปริมาตรน้ำในช่องท้องที่เจาะออก',
    albLvpDoseFactor: 'อัตราส่วนอัลบูมิน (g/L ของน้ำที่เจาะ)',
    albLvpDoseGrams: 'ปริมาณอัลบูมินที่ต้องให้ทั้งหมด',
    albLvpVol20: 'ปริมาตร Albumin 20%',
    albLvpVol25: 'ปริมาตร Albumin 25%',
    albLvpVol5Compare: 'เทียบเท่า 5% (ไม่แนะนำใน LVP)',
    albLvpSafeAlert: '✓ เจาะระบายน้ำ ≥ 5 L: AASLD และ EASL แนะนำอย่างยิ่งให้ให้อัลบูมินชดเชย (6–8 g ต่อน้ำ 1 ลิตรที่เจาะออก) เพื่อป้องกันภาวะ Paracentesis-Induced Circulatory Dysfunction (PICD), โซเดียมในเลือดต่ำ และไตวายเฉียบพลัน',
    albLvpLowAlert: 'ℹ️ เจาะระบายน้ำ < 5 L: โดยทั่วไปไม่จำเป็นต้องให้อัลบูมิน (ความเสี่ยง PICD ต่ำ) พิจารณาเฉพาะในผู้ป่วยที่มีความดันโลหิตต่ำ โรคกล้ามเนื้อหัวใจจากตับแข็ง หรือเคยมีประวัติ SBP',
    albLvpRateNote: 'วิธีการให้: หยดเข้าหลอดเลือดดำในเวลา 30–60 นาทีทันทีหลังเจาะท้องเสร็จสิ้น (หรือให้ระหว่างการเจาะหากเจาะออกเกิน 8 ลิตร)',
    albLvpNotes: [
      'ภาวะ Paracentesis-Induced Circulatory Dysfunction (PICD): การเจาะน้ำออกปริมาณมากอย่างรวดเร็วทำให้หลอดเลือดในช่องท้องขยายตัว ปริมาตรเลือดที่ไปเลี้ยงอวัยวะสำคัญลดลง กระตุ้นระบบ RAAS และประสาทซิมพาเทติกอย่างรุนแรง ส่งผลให้น้ำในช่องท้องกลับมาคั่งอย่างรวดเร็ว โซเดียมในเลือดต่ำ และเกิดไตวายเฉียบพลัน',
      'เกณฑ์ขนาดยามาตรฐาน: 8 g อัลบูมินต่อน้ำ 1 ลิตร เป็นขนาดมาตรฐานจากการวิจัยหลัก ส่วนขนาด 6 g/L ได้รับการยอมรับในแนวทางยุโรปสำหรับปริมาตรเจาะ 5–8 L',
      'หลีกเลี่ยง Albumin 5% ในการเจาะท้อง: อัลบูมิน 5% มีปริมาตรน้ำและโซเดียมสูงกว่ามาก (ต้องให้สารน้ำมากกว่าชนิด 20–25% ถึง 4–5 เท่า) ซึ่งจะทำให้อาการบวมและคั่งน้ำคั่งเกลือในผู้ป่วยตับแข็งแย่ลง',
    ],
    albSbpTitle: 'แนวทางการให้อัลบูมินในภาวะเยื่อบุช่องท้องอักเสบติดเชื้อ (SBP)',
    albSbpWeight: 'น้ำหนักตัวผู้ป่วย',
    albSbpDay1Dose: 'ขนาดยาวันที่ 1 (ภายใน 6 ชม.)',
    albSbpDay3Dose: 'ขนาดยาวันที่ 3 (ที่ 48 ชม.)',
    albSbpTotalGrams: 'ปริมาณอัลบูมินรวมทั้งคอร์ส',
    albSbpDay1Sub: '1.5 g/kg IV ภายใน 6 ชั่วโมงหลังวินิจฉัย',
    albSbpDay3Sub: '1.0 g/kg IV ที่ 48 ชั่วโมง',
    albSbpTrialAlert: '★ การศึกษาหมุดหมาย Sort et al. (NEJM 1999): การให้อัลบูมิน (1.5 g/kg วันที่ 1 + 1.0 g/kg วันที่ 3) ลดการเกิดไตวาย (HRS) จาก 33% เหลือ 10% และลดอัตราเสียชีวิตในโรงพยาบาลจาก 29% เหลือ 10% (P = 0.01)',
    albSbpHighRiskNote: 'ประโยชน์สูงสุดพบในกลุ่มเสี่ยงสูง: ซีรัมบิลิรูบิน ≥ 4 mg/dL หรือ ครีเอตินิน ≥ 1.0 mg/dL อย่างไรก็ตาม แนวทาง AASLD/EASL ในปัจจุบันแนะนำให้อัลบูมินแก่ผู้ป่วย SBP ทุกราย (เมื่อน้ำในช่องท้องมี PMN ≥ 250/mm³)',
    albSbpNotes: [
      'เวลาเป็นสิ่งสำคัญยิ่ง: ขนาดยาวันที่ 1 (1.5 g/kg) ต้องเริ่มให้ภายใน 6 ชั่วโมงหลังเจาะตรวจพบ SBP ร่วมกับการให้ยาปฏิชีวนะทางหลอดเลือดดำทันที (เช่น 3rd-gen cephalosporin)',
      'อัตราการให้ยา: สารละลาย 20% หรือ 25% มักหยดให้ในเวลา 2–4 ชั่วโมง ติดตามภาวะน้ำเกินหรือน้ำท่วมปอดอย่างใกล้ชิด',
    ],
    albHrsTitle: 'แนวทางการวินิจฉัยและรักษา Hepatorenal Syndrome (HRS-AKI)',
    albHrsWeight: 'น้ำหนักตัวผู้ป่วย',
    albHrsChallengeTitle: 'ระยะที่ 1: การทดสอบขยายปริมาตรเลือดเพื่อการวินิจฉัย (แยก Pre-renal AKI)',
    albHrsChallengeDose: 'Albumin 1 g/kg/วัน (สูงสุด 100 g/วัน) เป็นเวลา 2 วันติดต่อกัน',
    albHrsChallengeGrams: 'ขนาดยาที่ต้องให้ต่อวัน',
    albHrsChallengeVol20: 'ปริมาตร 20% ต่อวัน',
    albHrsChallengeVol25: 'ปริมาตร 25% ต่อวัน',
    albHrsChallengeAction: 'สิ่งที่ต้องทำ: หยุดยาขับปัสสาวะ ยาลดความดัน และยาขยายหลอดเลือดทุกชนิดทันที และให้อัลบูมิน 1 g/kg/วัน ต่อเนื่อง 48 ชั่วโมง',
    albHrsDiagnosisCriteria: 'เกณฑ์การวินิจฉัย HRS-AKI (AASLD / IAC): ผู้ป่วยตับแข็งที่มีน้ำในช่องท้อง; เกิดภาวะไตวายเฉียบพลันตามเกณฑ์ ICA; ค่าการทำงานของไตไม่ดีขึ้นหลังหยุดยาขับปัสสาวะและให้อัลบูมินครบ 2 วัน; ไม่มีภาวะช็อก; ไม่ได้รับยาที่เป็นพิษต่อไต; ไม่พบรอยโรคโครงสร้างไต (โปรตีนในปัสสาวะ < 500 mg/วัน, เม็ดเลือดแดงในปัสสาวะ < 50 เซลล์, อัลตราซาวด์ไตปกติ)',
    albHrsRxTitle: 'ระยะที่ 2: การรักษาผู้ป่วยที่ได้รับการยืนยัน HRS-AKI',
    albHrsRxAlbumin: 'Albumin: ให้ต่อเนื่อง 20–40 g/วัน ร่วมกับการให้ยาบีบหลอดเลือด',
    albHrsRxVasoconstrictors: 'ยาบีบหลอดเลือด (Vasoconstrictor) ทางเลือก:',
    albHrsRxTerli: '• Terlipressin: ยาทางเลือกแรก 0.85–1.0 mg IV bolus ทุก 4–6 ชม. หรือให้แบบ continuous infusion 2 mg/วัน (ปรับเพิ่มได้สูงสุด 12 mg/วัน หาก SCr ไม่ลดลง ≥ 25% หลัง 48 ชม.) เป็นยาที่มีประสิทธิภาพสูงสุดในการกู้การทำงานของไต',
    albHrsRxNorepi: '• Norepinephrine: หยดต่อเนื่อง 0.5–3.0 mg/ชม. ในหอผู้ป่วยวิกฤต ปรับขนาดเพื่อเพิ่ม MAP ขึ้น ≥ 10 mmHg หรือให้ MAP > 65–70 mmHg',
    albHrsRxMidOct: '• Midodrine (รับประทาน 7.5–15 mg วันละ 3 ครั้ง) + Octreotide (ฉีดใต้ผิวหนัง 100–200 mcg วันละ 3 ครั้ง): ทางเลือกรองหากไม่มี Terlipressin หรือ Norepinephrine',
    albHrsRespAlert: '⚠️ คำเตือนด้านระบบหายใจ (การศึกษา CONFIRM): การใช้ Terlipressin ร่วมกับ Albumin มีความเสี่ยงสำคัญต่อภาวะน้ำท่วมปอดเฉียบพลันและระบบหายใจล้มเหลว ตรวจติดตามระดับออกซิเจนในเลือด (SpO₂) สม่ำเสมอ ระงับยาหรือปรับลดทันทีหากเริ่มมีอาการเหนื่อยหรือออกซิเจนลดลง',
    albCompareTitle: 'การเลือกความเข้มข้นของอัลบูมิน (5% vs 20% vs 25%) และตารางความปลอดภัย',
    albColConcentration: 'ความเข้มข้น',
    albColOncotic: 'แรงดันออนโคติก (COP)',
    albColVolumeExpansion: 'การขยายปริมาตรในหลอดเลือด',
    albColIndications: 'ข้อบ่งชี้ทางคลินิกหลัก',
    albContraTitle: 'ข้อห้ามใช้และคำเตือนสำคัญวิกฤต (Black Box Warnings)',
    albTbiAlert: '🚨 ข้อห้ามใช้เด็ดขาดในผู้บาดเจ็บทางสมอง (TBI): การศึกษา SAFE-TBI (NEJM 2007) พบว่าการให้อัลบูมินกู้ชีพในผู้ป่วยบาดเจ็บที่ศีรษะรุนแรงเพิ่มอัตราการเสียชีวิตอย่างมีนัยสำคัญ (อัตราเสี่ยงเสียชีวิต 1.88, P < 0.001) เนื่องจากอัลบูมินรั่วซึมผ่าน blood-brain barrier ที่เสียหายและทำให้ความดันในกะโหลกศีรษะสูงขึ้น ให้ใช้ Isotonic Crystalloid (NSS / balanced) แทนเสมอ!',
    albChfAlert: '⚠️ ภาวะสารน้ำเกินและหัวใจล้มเหลว: อัลบูมิน (โดยเฉพาะ 20% และ 25%) ดึงน้ำจากช่องว่างระหว่างเซลล์เข้าสู่หลอดเลือดอย่างรวดเร็ว ห้ามใช้ในภาวะหัวใจวายรุนแรงหรือน้ำท่วมปอด ติดตามภาวะสารน้ำอย่างเคร่งครัด',
    albSepsisNote: 'การกู้ชีพในภาวะติดเชื้อในกระแสเลือด (Surviving Sepsis Campaign 2021): แนะนำให้พิจารณาใช้อัลบูมิน (5% หรือ 20%) ในผู้ป่วยที่ได้รับสารน้ำคริสตัลลอยด์ปริมาณมากแล้ว เพื่อช่วยพยุงความดันและลดปริมาณสารน้ำสะสมในร่างกาย (คำแนะนำอ่อน หลักฐานคุณภาพปานกลาง)',
    albOpenFluid5: 'เปิดการ์ด Albumin 5%',
    albOpenFluid20: 'เปิดการ์ด Albumin 20%',
    albOpenFluid25: 'เปิดการ์ด Albumin 25%',
  },
};

const RefTag = ({ k, sec }) => (
  <a href={refUrl(k)} target="_blank" rel="noopener noreferrer" className="ml-1 text-[10px] font-bold text-indigo-600 hover:underline whitespace-nowrap" data-ref={k}>[{SHORT_SRC[k] || k}{sec ? ' ' + sec : ''}]</a>
);
const NumInput = ({ label, value, onChange, unit, attrs = {}, step = 'any', min = 0 }) => (
  <label className="flex flex-col gap-1 min-w-0">
    <span className="text-[11px] font-bold text-slate-500">{label}</span>
    <span className="flex items-center gap-1.5">
      <input type="number" inputMode="decimal" min={min} step={step} value={value} onChange={(e) => onChange(e.target.value)} placeholder="—"
        className="w-full min-w-0 h-9 px-2.5 rounded-lg border border-slate-200 bg-white text-base sm:text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 tabular-nums" {...attrs} />
      {unit && <span className="text-xs text-slate-500 font-medium shrink-0">{unit}</span>}
    </span>
  </label>
);
const Toggle = ({ on, onClick, children, attrs = {} }) => (
  <button type="button" onClick={onClick} aria-pressed={on} {...attrs}
    className={`text-left flex items-start gap-2 px-3 py-2 rounded-lg border text-xs font-bold leading-snug transition-colors ${on ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
    <span className={`mt-0.5 w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 ${on ? 'border-white' : 'border-slate-300'}`}>{on && <Check className="w-2.5 h-2.5" />}</span>
    <span className="min-w-0 break-words">{children}</span>
  </button>
);
// One-tap planned sodium changes (mmol/L per 24 h)
const PLAN_STEPS = [6, 8, 10, 12];
const PresetChips = ({ value, onPick, attrs = {} }) => (
  <div className="flex flex-wrap gap-1.5" {...attrs}>
    {PLAN_STEPS.map(v => <button key={v} type="button" onClick={() => onPick(v)} aria-pressed={value === v} data-preset={v} className={`min-w-[2.5rem] px-2.5 py-1.5 rounded-lg border text-xs font-bold tabular-nums transition-colors ${value === v ? 'bg-violet-600 border-violet-600 text-white' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>{v}</button>)}
  </div>
);
const Seg = ({ value, options, onChange, attrs = {} }) => (
  <div className="flex bg-white rounded-lg border border-slate-200 p-0.5 shadow-sm w-fit max-w-full flex-wrap" {...attrs}>
    {options.map(([v, l]) => <button key={v} type="button" onClick={() => onChange(v)} aria-pressed={value === v} className={`px-2.5 py-1.5 rounded-md text-xs font-bold transition-colors ${value === v ? 'bg-slate-700 text-white' : 'text-slate-600 hover:bg-slate-50'}`}>{l}</button>)}
  </div>
);
const toNum = (s) => { const n = parseFloat(s); return isFinite(n) && n > 0 ? n : null; };
const FluidChip = ({ f, t, onOpen }) => (
  <button type="button" onClick={() => onOpen(f.id)} data-guide-fluid={f.id}
    className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-left hover:border-indigo-300 hover:bg-indigo-50 transition-colors min-w-0">
    <BagIcon family={f.family} className="w-5 h-6 shrink-0" />
    <span className="min-w-0"><span className="block text-xs font-extrabold text-slate-800 leading-tight break-words">{f.short}</span><span className="block text-[10px] text-slate-500 leading-tight">Na {fmt(num(f, 'na'))} · K {fmt(num(f, 'k')) || '0'} · Cl {fmt(num(f, 'cl'))}</span></span>
  </button>
);

// --- 1. Fluid choice (5 Rs) ---
const ChooseGuide = ({ lang, t, onClose, onOpenFluid, onOpenGuide }) => {
  const g = GUIDE_TEXT[lang];
  const [tab, setTab] = useState('resus');
  const resus = FLUIDS.filter(f => naBand(f) === 'resus' && !dexOf(f)).sort((a, b) => (a.family === 'balanced' ? 0 : 1) - (b.family === 'balanced' ? 0 : 1));
  const maint = FLUIDS.filter(f => naBand(f) === 'low' && dexOf(f) > 0).sort((a, b) => (num(b, 'k') || 0) - (num(a, 'k') || 0) || (num(b, 'na') || 0) - (num(a, 'na') || 0));
  const list = (items) => (
    <ul className="flex flex-col gap-2.5">
      {items.map(([text, k, sec], i) => <li key={i} className="text-xs sm:text-sm text-slate-700 leading-snug flex gap-2"><span className="text-rose-500 font-bold shrink-0">•</span><span className="min-w-0">{text}<RefTag k={k} sec={sec} /></span></li>)}
    </ul>
  );
  return (
    <Modal title={t.guides.choose} sub={g.chooseSub} onClose={onClose} tone="bg-rose-50" attrs={{ 'data-guide-modal': 'choose' }} icon={<div className="p-2 bg-rose-100 text-rose-700 rounded-xl shrink-0"><ActivityIcon className="w-5 h-5" /></div>} footer={<CloseBtn onClose={onClose} t={t} />}>
      <div className="flex flex-wrap gap-1.5" role="tablist" data-choose-tabs>
        {Object.keys(g.tabs).map(k => <button key={k} role="tab" aria-selected={tab === k} onClick={() => setTab(k)} data-tab={k} className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${tab === k ? 'bg-rose-600 border-rose-600 text-white' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>{g.tabs[k]}</button>)}
      </div>
      <Section>{list(g[tab])}</Section>
      {tab === 'resus' && <Section title={g.resusList}><div className="grid grid-cols-1 sm:grid-cols-2 gap-2">{resus.map(f => <FluidChip key={f.id} f={f} t={t} onOpen={onOpenFluid} />)}</div></Section>}
      {tab === 'maint' && <>
        <Section title={g.maintList}><div className="grid grid-cols-1 sm:grid-cols-2 gap-2">{maint.map(f => <FluidChip key={f.id} f={f} t={t} onOpen={onOpenFluid} />)}</div></Section>
        <button onClick={() => onOpenGuide('maint')} data-open-maint className="self-start px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold inline-flex items-center gap-1.5"><Stethoscope className="w-3.5 h-3.5" /> {g.openMaint}</button>
      </>}
      {tab === 'replace' && <button onClick={() => onOpenGuide('sodium')} data-open-sodium className="self-start px-3 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold inline-flex items-center gap-1.5"><ScaleIcon className="w-3.5 h-3.5" /> {g.openSodium}</button>}
    </Modal>
  );
};

// --- 2. Maintenance calculator (NICE CG174 1.4) ---
// Devine 1974 ideal body weight: 50 kg (men) or 45.5 kg (women) + 0.91 kg per cm above 152.4 cm
const devineIbw = (heightCm, sex) => (sex === 'f' ? 45.5 : 50) + 0.91 * (heightCm - 152.4);
const MaintGuide = ({ lang, t, onClose }) => {
  const g = GUIDE_TEXT[lang];
  const [wt, setWt] = useState('');
  const [low, setLow] = useState(false);
  const [obese, setObese] = useState(false);
  const [ht, setHt] = useState('');
  const [sex, setSex] = useState('m');
  const [vol, setVol] = useState('');
  const w = toNum(wt), h = toNum(ht);
  const ibw = obese && h ? Math.max(0, devineIbw(h, sex)) : null;
  const dw = obese ? (ibw && ibw > 0 ? Math.min(ibw, w || ibw) : null) : w;
  const perKg = low ? [20, 25] : [25, 30];
  const water = dw ? perKg.map(x => Math.round(dw * x)) : null;
  const autoVol = water ? Math.round((water[0] + water[1]) / 2 / 50) * 50 : null;
  const V = toNum(vol) || autoVol;
  const bmi = w && h ? (w / ((h / 100) ** 2)) : null;
  const rows = FLUIDS.filter(f => f.family !== 'hypertonic');
  return (
    <Modal title={t.guides.maint} sub={g.maintSub} onClose={onClose} tone="bg-emerald-50" wide attrs={{ 'data-guide-modal': 'maint' }} icon={<div className="p-2 bg-emerald-100 text-emerald-700 rounded-xl shrink-0"><Stethoscope className="w-5 h-5" /></div>} footer={<CloseBtn onClose={onClose} t={t} />}>
      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <NumInput label={g.weight} unit={g.kg} value={wt} onChange={setWt} attrs={{ 'data-maint-weight': '' }} />
          <div className="flex flex-col gap-2">
            <Toggle on={low} onClick={() => setLow(v => !v)} attrs={{ 'data-maint-low': '' }}>{g.lowRange}</Toggle>
            <Toggle on={obese} onClick={() => setObese(v => !v)} attrs={{ 'data-maint-obese': '' }}>{g.obese}</Toggle>
          </div>
        </div>
        {obese && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            <NumInput label={g.height} unit={g.cm} value={ht} onChange={setHt} attrs={{ 'data-maint-height': '' }} />
            <div className="flex flex-col gap-1"><span className="text-[11px] font-bold text-slate-500">{g.sex}</span><Seg value={sex} onChange={setSex} options={[['m', g.male], ['f', g.female]]} /></div>
            <p className="text-xs text-slate-600 sm:col-span-2" data-maint-ibw>{ibw ? g.ibw(ibw.toFixed(1)) : g.needHeight}{bmi ? ' · ' + g.bmi(bmi.toFixed(1)) : ''} <RefTag k="devine" /></p>
          </div>
        )}
      </Section>
      {!water ? <p className="text-sm text-slate-500" data-maint-empty>{g.enterWeight}</p> : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2" data-maint-needs>
            <div className="rounded-xl border border-sky-200 bg-sky-50 p-3 text-sky-900"><div className="text-[11px] font-bold opacity-80">{g.water} · {perKg.join('–')} mL/kg/{lang === 'th' ? 'วัน' : 'day'}</div><div className="text-lg font-extrabold tabular-nums" data-maint-water>{water[0]}–{water[1]} mL</div><div className="text-[11px] font-medium tabular-nums">{Math.round(water[0] / 24)}–{Math.round(water[1] / 24)} {g.perHour}</div></div>
            <div className="rounded-xl border border-violet-200 bg-violet-50 p-3 text-violet-900"><div className="text-[11px] font-bold opacity-80">{g.electrolytes}</div><div className="text-lg font-extrabold tabular-nums" data-maint-lytes>≈ {Math.round(dw)} mmol</div><div className="text-[11px] font-medium">{g.perDay}</div></div>
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-amber-900"><div className="text-[11px] font-bold opacity-80">{g.glucoseNeed}</div><div className="text-lg font-extrabold tabular-nums">50–100 g</div><div className="text-[11px] font-medium">{g.perDay}</div></div>
          </div>
          <p className="text-[11px] text-slate-500">{g.dosingWeight}: <b className="text-slate-700">{fmt(+dw.toFixed(1))} kg</b> <RefTag k="nice" sec={low ? '1.4.1, 1.4.3' : '1.4.1'} /></p>
          {(water[1] > 2500) && <p className="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2" data-maint-warn25>{g.warn25}</p>}
          {obese && <p className="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2" data-maint-warnobese>{g.warnObese}</p>}
          <Section title={g.tableTitle(V)} attrs={{ 'data-maint-table': '' }}>
            <div className="w-full sm:w-56 mb-2"><NumInput label={g.tableVolume} unit={g.mlDay} value={vol} onChange={setVol} attrs={{ placeholder: String(autoVol), 'data-maint-vol': '' }} /></div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs min-w-[380px]">
                <thead><tr className="text-slate-500"><th className="text-left p-1.5 font-bold">{g.colFluid}</th><th className="text-right p-1.5 font-bold">{g.colNa}</th><th className="text-right p-1.5 font-bold">{g.colK}</th><th className="text-right p-1.5 font-bold">{g.colGlu}</th></tr>
                  <tr className="text-slate-400 border-b border-slate-200"><th className="text-left p-1.5 font-medium">{g.target}</th><th className="text-right p-1.5 font-medium">≈ {Math.round(dw)}</th><th className="text-right p-1.5 font-medium">≈ {Math.round(dw)}</th><th className="text-right p-1.5 font-medium">50–100</th></tr></thead>
                <tbody>
                  {rows.map(f => { const gl = dexOf(f) * V / 1000; const ok = gl >= 50 && gl <= 100; return (
                    <tr key={f.id} className="border-b border-slate-100 last:border-b-0" data-maint-row={f.id}>
                      <td className="p-1.5 font-bold text-slate-700"><span className="inline-flex items-center gap-1.5"><BagIcon family={f.family} className="w-3.5 h-4 shrink-0" />{f.short}</span></td>
                      <td className="p-1.5 text-right tabular-nums font-bold text-slate-800">{Math.round((num(f, 'na') || 0) * V / 1000)}</td>
                      <td className="p-1.5 text-right tabular-nums font-bold text-slate-800">{Math.round((num(f, 'k') || 0) * V / 1000)}</td>
                      <td className={`p-1.5 text-right tabular-nums font-bold ${ok ? 'text-emerald-700' : 'text-slate-800'}`} title={ok ? g.gluOk : ''}>{Math.round(gl)}</td>
                    </tr>); })}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-slate-500 pt-2">{g.tableNote}</p>
          </Section>
        </>
      )}
      <Section title={GUIDE_TEXT[lang].tabs.maint}>
        <ul className="flex flex-col gap-2">{g.maint.map(([text, k, sec], i) => <li key={i} className="text-xs text-slate-700 leading-snug">{text}<RefTag k={k} sec={sec} /></li>)}</ul>
      </Section>
    </Modal>
  );
};

// --- 3. Sodium change per litre (Adrogué–Madias 2000) & Acute 3% Bolus ---
const TBW_FRACTION = { m: { young: 0.6, old: 0.5 }, f: { young: 0.5, old: 0.45 } };
const SodiumGuide = ({ lang, t, onClose, selectedIds = [], onOpenFluid }) => {
  const g = GUIDE_TEXT[lang];
  const [mode, setMode] = useState('continuous'); // 'continuous' | 'bolus'
  const [na, setNa] = useState('');
  const [wt, setWt] = useState('');
  const [sex, setSex] = useState('m');
  const [old, setOld] = useState(false);
  const [plan, setPlan] = useState('');
  const [dir, setDir] = useState(1); // 1 = raise (hyponatraemia), -1 = lower (hypernatraemia)
  const [bolusPick, setBolusPick] = useState('100'); // '100' | '150' | '2ml'

  const sNa = toNum(na), w = toNum(wt), planned = parseFloat(plan);
  const frac = TBW_FRACTION[sex][old ? 'old' : 'young'];
  const tbw = w ? w * frac : null;
  const rows = sNa && tbw ? FLUIDS.map(f => ({ f, d: (naK(f) - sNa) / (tbw + 1) }))
    .sort((a, b) => (selectedIds.includes(b.f.id) - selectedIds.includes(a.f.id)) || b.d - a.d) : [];

  const bolusVol = bolusPick === '2ml' ? (w ? Math.round(w * 2) : 100) : parseInt(bolusPick, 10);
  const bolusRise = tbw && sNa ? ((513 - sNa) * (bolusVol / 1000)) / (tbw + (bolusVol / 1000)) : null;

  return (
    <Modal title={t.guides.sodium} sub={mode === 'bolus' ? g.bolusSub : g.sodiumSub} onClose={onClose} tone={mode === 'bolus' ? 'bg-rose-50' : 'bg-violet-50'} wide attrs={{ 'data-guide-modal': 'sodium' }} icon={<div className={`p-2 ${mode === 'bolus' ? 'bg-rose-100 text-rose-700' : 'bg-violet-100 text-violet-700'} rounded-xl shrink-0`}><ScaleIcon className="w-5 h-5" /></div>} footer={<CloseBtn onClose={onClose} t={t} />}>
      <div className="flex flex-wrap gap-1.5 mb-3" role="tablist" data-sodium-tabs>
        <button type="button" role="tab" aria-selected={mode === 'continuous'} onClick={() => setMode('continuous')} data-sodium-tab="continuous" className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${mode === 'continuous' ? 'bg-violet-600 border-violet-600 text-white' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>{g.modeContinuous}</button>
        <button type="button" role="tab" aria-selected={mode === 'bolus'} onClick={() => setMode('bolus')} data-sodium-tab="bolus" className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${mode === 'bolus' ? 'bg-rose-600 border-rose-600 text-white' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>{g.modeBolus}</button>
      </div>

      {mode === 'bolus' ? (
        <div className="flex flex-col gap-3" data-sodium-bolus-view>
          <Section tone="bg-rose-50 border-rose-200" title={g.bolusIndicationsTitle} attrs={{ 'data-bolus-indications': '' }}>
            <p className="text-xs text-rose-900 leading-snug font-medium">{g.bolusIndications} <RefTag k="spasovski" /></p>
          </Section>

          <Section title={g.bolusRegimenTitle} attrs={{ 'data-bolus-regimen': '' }}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
              <NumInput label={g.serumNa} unit="mmol/L" value={na} onChange={setNa} attrs={{ 'data-bolus-na': '' }} />
              <NumInput label={g.weight} unit={g.kg} value={wt} onChange={setWt} attrs={{ 'data-bolus-weight': '' }} />
              <div className="flex flex-col gap-1"><span className="text-[11px] font-bold text-slate-500">{g.sex}</span><Seg value={sex} onChange={setSex} options={[['m', g.male], ['f', g.female]]} /></div>
              <div className="flex flex-col gap-1 justify-end"><Toggle on={old} onClick={() => setOld(v => !v)}>{g.elderly}</Toggle></div>
            </div>

            <div className="flex flex-col gap-1.5 mb-3">
              <span className="text-[11px] font-bold text-slate-500">{g.bolusDose}</span>
              <div className="flex flex-wrap items-center gap-2" data-bolus-pick>
                {[['100', g.bolus100], ['150', g.bolus150], ['2ml', `${g.bolus2ml}${w ? ` (${Math.round(w * 2)} mL)` : ''}`]].map(([k, label]) => (
                  <button key={k} type="button" onClick={() => setBolusPick(k)} data-bolus-btn={k} aria-pressed={bolusPick === k} className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${bolusPick === k ? 'bg-rose-600 border-rose-600 text-white' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'}`}>{label}</button>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-violet-200 bg-violet-50 p-3 text-violet-900 mb-3" data-bolus-calc-box>
              <div className="text-xs font-bold mb-1">3% NaCl · {bolusVol} mL IV over 10–15 min</div>
              {bolusRise ? (
                <div className="text-sm font-extrabold text-violet-950 tabular-nums" data-bolus-rise-text>{g.bolusAcuteRise(bolusRise.toFixed(1))}</div>
              ) : (
                <div className="text-xs text-violet-700">{g.enterNa}</div>
              )}
            </div>

            <ol className="flex flex-col gap-2 list-decimal list-inside text-xs text-slate-700">
              <li className="leading-snug"><b className="text-slate-900">Bolus 1:</b> {g.bolusStep1}</li>
              <li className="leading-snug"><b className="text-slate-900">20 min check:</b> {g.bolusStep2}</li>
              <li className="leading-snug"><b className="text-slate-900">Bolus 3:</b> {g.bolusStep3}</li>
              <li className="leading-snug font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded p-1.5 mt-1">{g.bolusTargetStop}</li>
            </ol>
            <div className="mt-3">
              <button type="button" onClick={() => onOpenFluid('nacl3')} className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-700 hover:underline">
                <BagIcon family="hypertonic" className="w-3.5 h-4" /> Open 3% NaCl details & warnings →
              </button>
            </div>
          </Section>

          <Section title={g.bolusODSTitle} tone="bg-amber-50 border-amber-200">
            <p className="text-xs text-amber-900 leading-snug font-medium mb-2">{g.bolusODSLimit} <RefTag k="spasovski" /></p>
            <div className="border-t border-amber-200 pt-2">
              <div className="text-xs font-bold text-amber-950 mb-0.5">{g.bolusRescueTitle}</div>
              <p className="text-xs text-amber-900 leading-snug">{g.bolusRescue}</p>
            </div>
          </Section>
        </div>
      ) : (
        <>
          <Section>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <NumInput label={g.serumNa} unit="mmol/L" value={na} onChange={setNa} attrs={{ 'data-na-serum': '' }} />
              <NumInput label={g.weight} unit={g.kg} value={wt} onChange={setWt} attrs={{ 'data-na-weight': '' }} />
              <div className="flex flex-col gap-1"><span className="text-[11px] font-bold text-slate-500">{g.sex}</span><Seg value={sex} onChange={setSex} options={[['m', g.male], ['f', g.female]]} attrs={{ 'data-na-sex': '' }} /></div>
              <div className="flex flex-col gap-1 justify-end"><Toggle on={old} onClick={() => setOld(v => !v)} attrs={{ 'data-na-elderly': '' }}>{g.elderly}</Toggle></div>
            </div>
            <div className="flex flex-wrap items-end gap-3 mt-3">
              <div className="w-full sm:w-56"><NumInput label={g.targetChange} unit={g.target24} value={plan} onChange={(v) => { setPlan(v); const n = parseFloat(v); if (n) setDir(Math.sign(n)); }} min={-30} attrs={{ 'data-na-plan': '' }} /></div>
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold text-slate-500">{g.planQuick}</span>
                <div className="flex flex-wrap items-center gap-2">
                  <Seg value={dir} onChange={(d) => { setDir(d); const n = Math.abs(parseFloat(plan)); if (n) setPlan(String(d * n)); }} options={[[1, g.raise], [-1, g.lower]]} attrs={{ 'data-na-dir': '' }} />
                  <PresetChips value={isFinite(planned) && Math.sign(planned) === dir ? Math.abs(planned) : null} onPick={(v) => setPlan(String(dir * v))} attrs={{ 'data-na-presets': '' }} />
                </div>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 mt-2 leading-snug">{g.formula} <RefTag k="adrogueHypo" /></p>
            <p className="text-[11px] text-slate-500 leading-snug">{g.tbwNote}</p>
            {tbw && <p className="text-xs font-bold text-violet-800 mt-1" data-na-tbw>{g.tbw(frac, +tbw.toFixed(1))}</p>}
          </Section>
          {!rows.length ? <p className="text-sm text-slate-500" data-na-empty>{g.enterNa}</p> : (
            <Section title={g.colChange} attrs={{ 'data-na-table': '' }}>
              {selectedIds.length > 0 && <p className="text-[11px] text-slate-500 mb-1">{g.selectedFirst}</p>}
              <ul className="flex flex-col">
                {rows.map(({ f, d }) => {
                  const lit = isFinite(planned) && planned !== 0 && d !== 0 && Math.sign(planned) === Math.sign(d) ? planned / d : null;
                  return (
                    <li key={f.id} className={`flex items-center gap-2 py-1.5 border-b border-slate-200 last:border-b-0 min-w-0 ${selectedIds.includes(f.id) ? 'bg-indigo-50 -mx-1 px-1 rounded' : ''}`} data-na-row={f.id}>
                      <button type="button" onClick={() => onOpenFluid(f.id)} className="flex items-center gap-1.5 min-w-0 flex-1 text-left hover:underline"><BagIcon family={f.family} className="w-4 h-5 shrink-0" /><span className="text-xs font-bold text-slate-700 break-words min-w-0">{f.short}</span><span className="text-[10px] text-slate-400 shrink-0">Na+K {fmt(naK(f))}</span></button>
                      <span className="text-right shrink-0">
                        <span className={`block text-sm font-extrabold tabular-nums ${d > 0.05 ? 'text-rose-700' : d < -0.05 ? 'text-sky-700' : 'text-slate-600'}`} data-na-delta>{d > 0 ? '+' : ''}{d.toFixed(1)} <span className="text-[10px] font-medium">mmol/L</span></span>
                        {lit && <span className="block text-[10px] text-slate-500 tabular-nums" data-na-litres>{g.litresFor(lit.toFixed(1))}</span>}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </Section>
          )}
          <Section title={g.limitsTitle} tone="bg-amber-50 border-amber-200">
            <ul className="flex flex-col gap-1.5">{g.limits.map(([text, k], i) => <li key={i} className="text-xs text-amber-900 leading-snug">{text}<RefTag k={k} /></li>)}</ul>
            <p className="text-xs text-amber-900 font-bold leading-snug mt-2">{g.caveat}</p>
          </Section>
        </>
      )}
    </Modal>
  );
};

// --- 4. Potassium replacement & safe rate guide ---
const PotassiumGuide = ({ lang, t, onClose, onOpenFluid }) => {
  const g = GUIDE_TEXT[lang];
  const [kVal, setKVal] = useState('2.8');
  const [wt, setWt] = useState('60');
  const [access, setAccess] = useState('periph'); // 'periph' | 'central'
  const k = toNum(kVal), w = toNum(wt);

  const deficit = k && k < 4.0 && w ? Math.round((4.0 - k) * (w / 70) * 333) : 0;
  const defLow = Math.max(20, Math.round(deficit * 0.75));
  const defHigh = Math.round(deficit * 1.25);

  return (
    <Modal title={t.guides.kguide} sub={g.potassiumSub} onClose={onClose} tone="bg-amber-50" wide attrs={{ 'data-guide-modal': 'kguide' }} icon={<div className="p-2 bg-amber-100 text-amber-700 rounded-xl shrink-0"><ZapIcon className="w-5 h-5" /></div>} footer={<CloseBtn onClose={onClose} t={t} />}>
      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <NumInput label={g.serumK} unit="mmol/L" value={kVal} onChange={setKVal} step="0.1" attrs={{ 'data-k-serum': '' }} />
          <NumInput label={g.weight} unit={g.kg} value={wt} onChange={setWt} attrs={{ 'data-k-weight': '' }} />
          <div className="flex flex-col gap-1">
            <span className="text-[11px] font-bold text-slate-500">{g.kAccess}</span>
            <Seg value={access} onChange={setAccess} options={[['periph', g.accessPeriph], ['central', g.accessCentral]]} attrs={{ 'data-k-access': '' }} />
          </div>
        </div>
      </Section>

      <Section title={g.kDeficitTitle} attrs={{ 'data-k-deficit-section': '' }}>
        {k && k < 3.5 && w ? (
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-amber-950 mb-2">
            <div className="text-lg font-extrabold tabular-nums" data-k-deficit-val>{g.kDeficitEst(defLow, defHigh)}</div>
            <p className="text-xs text-amber-900 mt-1 leading-snug">{g.kDeficitNote} <RefTag k="sternsK" /></p>
          </div>
        ) : (
          <p className="text-xs text-slate-600 mb-2 leading-snug">{g.kNormalNote}</p>
        )}
      </Section>

      <Section title={g.kRateTitle} tone="bg-blue-50 border-blue-200" attrs={{ 'data-k-rates-section': '' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
          <div className={`p-3 rounded-xl border ${access === 'periph' ? 'bg-white border-blue-400 shadow-sm' : 'bg-blue-50/50 border-blue-200 opacity-75'}`}>
            <div className="text-xs font-bold text-blue-900 mb-1">{g.accessPeriph}</div>
            <div className="text-xl font-extrabold text-blue-950 tabular-nums mb-1" data-k-rate-periph>Max 10 mmol/h</div>
            <p className="text-xs text-slate-600 leading-snug">{g.kRatePeriph}</p>
          </div>
          <div className={`p-3 rounded-xl border ${access === 'central' ? 'bg-white border-blue-400 shadow-sm' : 'bg-blue-50/50 border-blue-200 opacity-75'}`}>
            <div className="text-xs font-bold text-blue-900 mb-1">{g.accessCentral}</div>
            <div className="text-xl font-extrabold text-blue-950 tabular-nums mb-1" data-k-rate-central>Up to 20 mmol/h</div>
            <p className="text-xs text-slate-600 leading-snug">{g.kRateCent}</p>
          </div>
        </div>
      </Section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Section title={g.kVehicleTitle} tone="bg-rose-50 border-rose-200" attrs={{ 'data-k-vehicle-alert': '' }}>
          <p className="text-xs text-rose-900 leading-snug">{g.kVehicleAlert} <RefTag k="sternsK" /></p>
        </Section>
        <Section title={g.kMgTitle} tone="bg-emerald-50 border-emerald-200" attrs={{ 'data-k-mg-alert': '' }}>
          <p className="text-xs text-emerald-900 leading-snug">{g.kMgAlert} <RefTag k="sternsK" /></p>
        </Section>
      </div>

      <Section title={g.kPreMixTitle}>
        <div className="flex flex-wrap gap-2">
          {['d5s2k20', 'd5s2k40'].map(id => {
            const f = FLUIDS.find(x => x.id === id);
            return f ? <FluidChip key={f.id} f={f} t={t} onOpen={onOpenFluid} /> : null;
          })}
        </div>
      </Section>
    </Modal>
  );
};

// --- 5. DKA / HHS Fluid & Electrolyte Protocol ---
const DkaGuide = ({ lang, t, onClose, onOpenFluid }) => {
  const g = GUIDE_TEXT[lang];
  const [sNa, setSNa] = useState('132');
  const [glu, setGlu] = useState('450');
  const [unit, setUnit] = useState('mgdl'); // 'mgdl' | 'mmol'
  const [sK, setSK] = useState('4.2');
  const [type, setType] = useState('dka'); // 'dka' | 'hhs'

  const na = toNum(sNa), rawGlu = toNum(glu), k = toNum(sK);
  const gluMg = unit === 'mgdl' ? rawGlu : (rawGlu ? rawGlu * 18.016 : null);
  const corrNa = na && gluMg && gluMg > 100 ? na + 0.016 * (gluMg - 100) : na;
  const isNaHigh = corrNa && corrNa >= 135;

  const dexThreshold = type === 'dka' ? 250 : 300;
  const needsDex = gluMg && gluMg <= dexThreshold;

  return (
    <Modal title={t.guides.dka} sub={g.dkaSub} onClose={onClose} tone="bg-indigo-50" wide attrs={{ 'data-guide-modal': 'dka' }} icon={<div className="p-2 bg-indigo-100 text-indigo-700 rounded-xl shrink-0"><FlameIcon className="w-5 h-5" /></div>} footer={<CloseBtn onClose={onClose} t={t} />}>
      <Section>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-2">
          <div className="col-span-2 sm:col-span-1 flex flex-col gap-1">
            <span className="text-[11px] font-bold text-slate-500">{g.dkaType}</span>
            <Seg value={type} onChange={setType} options={[['dka', 'DKA'], ['hhs', 'HHS']]} attrs={{ 'data-dka-type': '' }} />
          </div>
          <NumInput label={g.measuredNa} unit="mmol/L" value={sNa} onChange={setSNa} attrs={{ 'data-dka-na': '' }} />
          <div className="flex flex-col gap-1">
            <span className="text-[11px] font-bold text-slate-500">{g.gluUnit}</span>
            <Seg value={unit} onChange={setUnit} options={[['mgdl', g.gluMgdl], ['mmol', g.gluMmol]]} attrs={{ 'data-dka-glu-unit': '' }} />
          </div>
          <NumInput label={g.bloodGlucose} unit={unit === 'mgdl' ? 'mg/dL' : 'mmol/L'} value={glu} onChange={setGlu} attrs={{ 'data-dka-glucose': '' }} />
          <NumInput label="K⁺" unit="mmol/L" value={sK} onChange={setSK} step="0.1" attrs={{ 'data-dka-k': '' }} />
        </div>
      </Section>

      {corrNa && (
        <Section title={g.correctedNaTitle} tone="bg-slate-100/70 border-slate-200" attrs={{ 'data-dka-corrna-card': '' }}>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="text-xl font-extrabold text-indigo-950 tabular-nums" data-dka-corrna-val>{corrNa.toFixed(1)} mmol/L</span>
              <span className={`ml-2 px-2 py-0.5 rounded text-xs font-bold ${isNaHigh ? 'bg-amber-100 text-amber-800' : 'bg-sky-100 text-sky-800'}`} data-dka-corrna-badge>
                {isNaHigh ? '≥ 135 mmol/L' : '< 135 mmol/L'}
              </span>
            </div>
            <p className="text-[11px] text-slate-500">{g.correctedNaFormula} <RefTag k="katz" /></p>
          </div>
        </Section>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Section title={g.dkaStep1Title} attrs={{ 'data-dka-step1': '' }}>
          <p className="text-xs text-slate-700 leading-snug mb-2">{g.dkaStep1Desc} <RefTag k="adaDka" /></p>
          <div className="inline-block">
            {(() => { const f = FLUIDS.find(x => x.id === 'nss'); return f ? <FluidChip key={f.id} f={f} t={t} onOpen={onOpenFluid} /> : null; })()}
          </div>
        </Section>

        <Section title={g.dkaStep2Title} attrs={{ 'data-dka-step2': '' }}>
          <p className="text-xs text-slate-700 leading-snug mb-2">
            {isNaHigh ? g.dkaStep2High : g.dkaStep2Low} <RefTag k="adaDka" />
          </p>
          <div className="inline-block">
            {(() => { const f = FLUIDS.find(x => x.id === (isNaHigh ? 'half' : 'nss')); return f ? <FluidChip key={f.id} f={f} t={t} onOpen={onOpenFluid} /> : null; })()}
          </div>
        </Section>
      </div>

      <Section title={g.dkaStep3Title} tone={needsDex ? 'bg-emerald-50 border-emerald-300' : 'bg-slate-50 border-slate-200'} attrs={{ 'data-dka-step3': '' }}>
        <div className="text-xs leading-snug font-bold mb-1.5" data-dka-dex-alert>
          {needsDex ? g.dkaStep3AddNow(dexThreshold) : g.dkaStep3Wait(dexThreshold)}
        </div>
        <p className="text-[11px] text-slate-600 mb-2">{g.dkaStep3Threshold(type === 'dka' ? 'DKA' : 'HHS', dexThreshold)} <RefTag k="adaDka" /></p>
        <div className="flex flex-wrap gap-2">
          {['d5s2', 'd5s', 'd5s2k20'].map(id => {
            const f = FLUIDS.find(x => x.id === id);
            return f ? <FluidChip key={f.id} f={f} t={t} onOpen={onOpenFluid} /> : null;
          })}
        </div>
      </Section>

      <Section title={g.dkaStep4Title} tone={k && k < 3.3 ? 'bg-rose-50 border-rose-300' : k && k > 5.2 ? 'bg-amber-50 border-amber-300' : 'bg-emerald-50 border-emerald-300'} attrs={{ 'data-dka-step4': '' }}>
        <div className="text-xs leading-snug font-bold" data-dka-k-alert>
          {k && k < 3.3 ? g.dkaKHold : k && k > 5.2 ? g.dkaKNoAdd : g.dkaKSafe}
        </div>
      </Section>
    </Modal>
  );
};


// --- 5. Free water deficit (hypernatraemia) ---
// Deficit (L) = total body water × (serum Na ÷ target Na − 1), target usually 140 (Szczech 2025, from Adrogué & Madias 2000).
// Fluid plan: Adrogué–Madias change per litre for each sodium-poor fluid, sized to the planned fall over 24 hours.
const WaterGuide = ({ lang, t, onClose, onOpenFluid }) => {
  const g = GUIDE_TEXT[lang];
  const [na, setNa] = useState('');
  const [wt, setWt] = useState('');
  const [sex, setSex] = useState('m');
  const [old, setOld] = useState(false);
  const [target, setTarget] = useState('140');
  const [fall, setFall] = useState('10');
  const sNa = toNum(na), w = toNum(wt), tNa = toNum(target) || 140, plan = toNum(fall);
  const frac = TBW_FRACTION[sex][old ? 'old' : 'young'];
  const tbw = w ? w * frac : null;
  const deficit = sNa && tbw ? tbw * (sNa / tNa - 1) : null;
  const hours = sNa && plan ? ((sNa - tNa) / plan) * 24 : null;
  const rows = sNa && tbw ? FLUIDS.map(f => ({ f, d: (naK(f) - sNa) / (tbw + 1) })).filter(x => naBand(x.f) === 'low' && x.d < -0.05).sort((a, b) => a.d - b.d) : [];
  return (
    <Modal title={t.guides.water} sub={g.waterSub} onClose={onClose} tone="bg-cyan-50" wide attrs={{ 'data-guide-modal': 'water' }} icon={<div className="p-2 bg-cyan-100 text-cyan-700 rounded-xl shrink-0"><DropIcon className="w-5 h-5" /></div>} footer={<CloseBtn onClose={onClose} t={t} />}>
      <Section>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <NumInput label={g.serumNa} unit="mmol/L" value={na} onChange={setNa} attrs={{ 'data-water-na': '' }} />
          <NumInput label={g.weight} unit={g.kg} value={wt} onChange={setWt} attrs={{ 'data-water-weight': '' }} />
          <div className="flex flex-col gap-1"><span className="text-[11px] font-bold text-slate-500">{g.sex}</span><Seg value={sex} onChange={setSex} options={[['m', g.male], ['f', g.female]]} attrs={{ 'data-water-sex': '' }} /></div>
          <div className="flex flex-col gap-1 justify-end"><Toggle on={old} onClick={() => setOld(v => !v)} attrs={{ 'data-water-elderly': '' }}>{g.elderly}</Toggle></div>
          <NumInput label={g.targetNa} unit="mmol/L" value={target} onChange={setTarget} attrs={{ 'data-water-target': '' }} />
          <NumInput label={g.plannedFall} unit={g.per24h} value={fall} onChange={setFall} attrs={{ 'data-water-fall': '' }} />
        </div>
        <div className="flex flex-col gap-1 mt-3">
          <span className="text-[11px] font-bold text-slate-500">{g.planQuick} ({g.per24h})</span>
          <PresetChips value={toNum(fall)} onPick={(v) => setFall(String(v))} attrs={{ 'data-water-presets': '' }} />
        </div>
        <p className="text-[11px] text-slate-500 mt-2 leading-snug">{g.waterFormula} <RefTag k="szczech" /></p>
        <p className="text-[11px] text-slate-500 leading-snug">{g.tbwNote}</p>
      </Section>
      {!deficit ? <p className="text-sm text-slate-500" data-water-empty>{sNa && sNa <= tNa ? g.waterNotHigh : g.enterNa}</p> : deficit <= 0 ? <p className="text-sm text-slate-500" data-water-empty>{g.waterNotHigh}</p> : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2" data-water-result>
            <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-3 text-cyan-900"><div className="text-[11px] font-bold opacity-80">{g.deficit}</div><div className="text-xl font-extrabold tabular-nums" data-water-deficit>{deficit.toFixed(1)} L</div><div className="text-[11px] font-medium">{g.tbw(frac, +tbw.toFixed(1))}</div></div>
            <div className="rounded-xl border border-violet-200 bg-violet-50 p-3 text-violet-900"><div className="text-[11px] font-bold opacity-80">{g.toFall(fmt(+(sNa - tNa).toFixed(1)))}</div><div className="text-xl font-extrabold tabular-nums" data-water-hours>{hours ? Math.round(hours) + ' h' : '—'}</div><div className="text-[11px] font-medium">{g.atRate(plan || '—')}</div></div>
            <div className="rounded-xl border border-sky-200 bg-sky-50 p-3 text-sky-900"><div className="text-[11px] font-bold opacity-80">{g.freeWaterRate}</div><div className="text-xl font-extrabold tabular-nums" data-water-rate>{hours ? Math.round(deficit * 1000 / hours) : '—'}</div><div className="text-[11px] font-medium">{g.perHour} {g.plusLosses}</div></div>
          </div>
          <Section title={g.fluidPlan(plan || 0)} attrs={{ 'data-water-table': '' }}>
            <p className="text-[11px] text-slate-500 mb-1">{g.fluidPlanNote} <RefTag k="adrogueHyper" /></p>
            <ul className="flex flex-col">
              {rows.map(({ f, d }) => { const l = plan ? plan / -d : null; return (
                <li key={f.id} className="flex items-center gap-2 py-1.5 border-b border-slate-200 last:border-b-0 min-w-0" data-water-row={f.id}>
                  <button type="button" onClick={() => onOpenFluid(f.id)} className="flex items-center gap-1.5 min-w-0 flex-1 text-left hover:underline"><BagIcon family={f.family} className="w-4 h-5 shrink-0" /><span className="text-xs font-bold text-slate-700 break-words min-w-0">{f.short}</span><span className="text-[10px] text-slate-400 shrink-0">{d.toFixed(1)} /L</span></button>
                  <span className="text-right shrink-0">
                    <span className="block text-sm font-extrabold tabular-nums text-sky-700" data-water-litres>{l ? l.toFixed(1) + ' L' : '—'}</span>
                    {l && <span className="block text-[10px] text-slate-500 tabular-nums">≈ {Math.round(l * 1000 / 24)} {g.perHour}</span>}
                  </span>
                </li>); })}
            </ul>
          </Section>
        </>
      )}
      <Section title={g.limitsTitle} tone="bg-amber-50 border-amber-200">
        <ul className="flex flex-col gap-1.5">{g.waterCautions.map(([text, k], i) => <li key={i} className="text-xs text-amber-900 leading-snug">{text}{k && <RefTag k={k} />}</li>)}</ul>
      </Section>
    </Modal>
  );
};

// --- 4. Drip rate ---
const DROP_FACTORS = [10, 15, 20, 60];
const DripGuide = ({ lang, t, onClose }) => {
  const g = GUIDE_TEXT[lang];
  const [mode, setMode] = useState('vol');
  const [vol, setVol] = useState('1000');
  const [hrs, setHrs] = useState('8');
  const [rate, setRate] = useState('');
  const [df, setDf] = useState(20);
  const mlh = mode === 'vol' ? (toNum(vol) && toNum(hrs) ? toNum(vol) / toNum(hrs) : null) : toNum(rate);
  const dpm = mlh ? mlh * df / 60 : null;
  return (
    <Modal title={t.guides.drip} sub={g.dripSub} onClose={onClose} tone="bg-blue-50" attrs={{ 'data-guide-modal': 'drip' }} icon={<div className="p-2 bg-blue-100 text-blue-700 rounded-xl shrink-0"><DripIcon className="w-5 h-5" /></div>} footer={<CloseBtn onClose={onClose} t={t} />}>
      <Section>
        <Seg value={mode} onChange={setMode} options={[['vol', g.modeVolume], ['rate', g.modeRate]]} attrs={{ 'data-drip-mode': '' }} />
        <div className="grid grid-cols-2 gap-3 mt-3">
          {mode === 'vol' ? <>
            <NumInput label={g.volume} unit={g.mL} value={vol} onChange={setVol} attrs={{ 'data-drip-vol': '' }} />
            <NumInput label={g.hours} unit={g.h} value={hrs} onChange={setHrs} attrs={{ 'data-drip-hours': '' }} />
          </> : <NumInput label={g.rate} unit={g.perHour} value={rate} onChange={setRate} attrs={{ 'data-drip-rate': '' }} />}
        </div>
        <div className="flex flex-col gap-1 mt-3"><span className="text-[11px] font-bold text-slate-500">{g.dropFactor} ({g.gttmL})</span><Seg value={df} onChange={setDf} options={DROP_FACTORS.map(x => [x, String(x)])} attrs={{ 'data-drip-df': '' }} /></div>
      </Section>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2" data-drip-result>
        <div className="rounded-xl border border-sky-200 bg-sky-50 p-3 text-sky-900"><div className="text-[11px] font-bold opacity-80">{g.resRate}</div><div className="text-xl font-extrabold tabular-nums" data-drip-mlh>{mlh ? fmt(+mlh.toFixed(1)) : '—'}</div><div className="text-[11px] font-medium">{g.perHour}</div></div>
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-3 text-blue-900"><div className="text-[11px] font-bold opacity-80">{g.resDrops}</div><div className="text-xl font-extrabold tabular-nums" data-drip-dpm>{dpm ? Math.round(dpm) : '—'}</div><div className="text-[11px] font-medium">{dpm ? '(' + dpm.toFixed(1) + ')' : ''}</div></div>
        <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-3 text-indigo-900"><div className="text-[11px] font-bold opacity-80">{g.resSec}</div><div className="text-xl font-extrabold tabular-nums" data-drip-sec>{dpm ? (60 / dpm).toFixed(1) : '—'}</div><div className="text-[11px] font-medium">{g.sec}</div></div>
      </div>
      <p className="text-[11px] text-slate-500 leading-snug">{g.dripFormula}. {g.dripNote}</p>
    </Modal>
  );
};

// --- 6. Glucose Infusion Rate (GIR) Calculator ---
const GirGuide = ({ lang, t, onClose, onOpenFluid }) => {
  const g = GUIDE_TEXT[lang];
  const [mode, setMode] = useState('rate'); // 'rate' = Rate -> GIR; 'target' = Target GIR -> Rate
  const [weight, setWeight] = useState('70');
  const [fluidKey, setFluidKey] = useState('d5w');
  const [customDex, setCustomDex] = useState('5');
  const [rate, setRate] = useState('100');
  const [targetGir, setTargetGir] = useState('3.0');

  const dexFluids = useMemo(() => FLUIDS.filter(f => dexOf(f) > 0), []);
  const selectedFluid = FLUIDS.find(f => f.id === fluidKey);
  const dexPercent = fluidKey === 'custom' ? (toNum(customDex) || 0) : (selectedFluid ? (dexOf(selectedFluid) / 10) : 5);

  const wt = toNum(weight) || 0;
  const r = toNum(rate) || 0;
  const tg = toNum(targetGir) || 0;

  // Rate -> GIR: GIR = (Rate mL/h * Dex % * 10) / (Weight kg * 60)
  const calcGir = wt > 0 && r > 0 && dexPercent > 0 ? (r * dexPercent * 10) / (wt * 60) : 0;
  // Target GIR -> Rate: Rate mL/h = (Target GIR * Weight kg * 60) / (Dex % * 10)
  const calcRate = wt > 0 && tg > 0 && dexPercent > 0 ? (tg * wt * 60) / (dexPercent * 10) : 0;

  const currentGir = mode === 'rate' ? calcGir : tg;
  const activeRate = mode === 'rate' ? r : calcRate;

  // Daily totals
  const dailyDexG = activeRate > 0 && dexPercent > 0 ? (activeRate * 24 * (dexPercent * 10)) / 1000 : 0;
  const dailyKcal = dailyDexG * 3.4;

  const isExcess = currentGir >= 5.0;
  const isCaution = currentGir >= 4.0 && currentGir < 5.0;
  const isLow = currentGir > 0 && currentGir < 2.0;
  const isNormal = currentGir >= 2.0 && currentGir < 4.0;

  return (
    <Modal title={t.guides.gir} sub={g.girSub} onClose={onClose} tone="bg-teal-50" wide attrs={{ 'data-guide-modal': 'gir' }}
      icon={<div className="p-2 bg-teal-100 text-teal-700 rounded-xl shrink-0"><TrendingUpIcon className="w-5 h-5" /></div>}
      footer={<CloseBtn onClose={onClose} t={t} />}>
      <Section>
        <Seg value={mode} onChange={setMode} options={[['rate', g.girModeRate], ['target', g.girModeTarget]]} attrs={{ 'data-gir-mode': '' }} />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
          <NumInput label={g.weight} unit={g.kg} value={weight} onChange={setWeight} attrs={{ 'data-gir-weight': '' }} />
          <div className="flex flex-col gap-1 min-w-0">
            <span className="text-[11px] font-bold text-slate-500">{g.girFluid}</span>
            <select value={fluidKey} onChange={(e) => setFluidKey(e.target.value)} data-gir-fluid
              className="w-full min-w-0 h-9 px-2 rounded-lg border border-slate-200 bg-white text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer">
              {dexFluids.map(f => (
                <option key={f.id} value={f.id}>{f.short} ({f.name[lang] || f.name.en} - {dexOf(f) / 10}%)</option>
              ))}
              <option value="custom">{g.girDexCustom}</option>
            </select>
          </div>
          {fluidKey === 'custom' ? (
            <NumInput label={g.girDexCustom} unit="%" value={customDex} onChange={setCustomDex} attrs={{ 'data-gir-custom-dex': '' }} />
          ) : (
            <div className="flex flex-col justify-end">
              <span className="text-xs font-bold text-teal-700 bg-teal-50 border border-teal-200 rounded-lg px-3 py-2">
                {dexPercent}% {g.glucoseNeed} ({dexPercent * 10} g/L)
              </span>
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
          {mode === 'rate' ? (
            <NumInput label={g.rate} unit={g.girUnitMlh} value={rate} onChange={setRate} attrs={{ 'data-gir-rate-input': '' }} />
          ) : (
            <NumInput label={g.girTargetGIR} unit={g.girUnitMgKgMin} value={targetGir} onChange={setTargetGir} attrs={{ 'data-gir-target-input': '' }} />
          )}
          {mode === 'target' && (
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-bold text-slate-500">{g.planQuick} ({g.girUnitMgKgMin})</span>
              <div className="flex flex-wrap gap-1.5" data-gir-presets>
                {[2, 3, 4, 5].map(v => (
                  <button key={v} type="button" onClick={() => setTargetGir(String(v))} aria-pressed={tg === v} data-gir-preset={v}
                    className={`min-w-[2.5rem] px-2.5 py-1.5 rounded-lg border text-xs font-bold tabular-nums transition-colors ${tg === v ? 'bg-teal-600 border-teal-600 text-white' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
                    {v}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        <p className="text-[11px] text-slate-500 mt-2 leading-snug">
          {mode === 'rate' ? g.girFormula : g.girFormulaTarget} <RefTag k="aspenGir" />
        </p>
      </Section>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2" data-gir-result>
        <div className={`rounded-xl border p-3 ${isExcess ? 'border-rose-300 bg-rose-50 text-rose-900' : isCaution ? 'border-amber-300 bg-amber-50 text-amber-900' : 'border-teal-200 bg-teal-50 text-teal-900'}`}>
          <div className="text-[11px] font-bold opacity-80">{g.girResultGIR}</div>
          <div className="text-xl font-extrabold tabular-nums" data-gir-val>
            {currentGir ? currentGir.toFixed(2) : '—'} <span className="text-xs font-semibold">{g.girUnitMgKgMin}</span>
          </div>
          <div className="text-[11px] font-medium mt-0.5">
            {isExcess ? '⚠️ > 5.0 (Max Oxidation)' : isCaution ? '4.0–5.0 (Near Max)' : isNormal ? '✓ 2.0–4.0 (Normal)' : isLow ? 'Low (< 2.0)' : ''}
          </div>
        </div>

        <div className="rounded-xl border border-sky-200 bg-sky-50 p-3 text-sky-900">
          <div className="text-[11px] font-bold opacity-80">{mode === 'target' ? g.girResultRate : g.rate}</div>
          <div className="text-xl font-extrabold tabular-nums" data-gir-rate-result>
            {activeRate ? activeRate.toFixed(1) : '—'} <span className="text-xs font-semibold">{g.girUnitMlh}</span>
          </div>
          <div className="text-[11px] font-medium mt-0.5">
            {activeRate ? `${Math.round(activeRate * 24)} mL/${g.perDay || 'day'}` : ''}
          </div>
        </div>

        <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-3 text-indigo-900">
          <div className="text-[11px] font-bold opacity-80">{g.girDailyDex} / {g.girDailyKcal}</div>
          <div className="text-xl font-extrabold tabular-nums" data-gir-daily>
            {dailyDexG ? `${Math.round(dailyDexG)} ${g.girGDay}` : '—'}
          </div>
          <div className="text-[11px] font-medium mt-0.5" data-gir-kcal>
            {dailyKcal ? `≈ ${Math.round(dailyKcal)} ${g.girKcalDay}` : ''}
          </div>
        </div>
      </div>

      {isExcess && (
        <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs text-rose-900 leading-snug font-medium" data-gir-alert="high">
          {g.girWarnHigh}
        </div>
      )}

      {isLow && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900 leading-snug font-medium" data-gir-alert="low">
          {g.girWarnLow}
        </div>
      )}

      <Section title={g.limitsTitle} tone="bg-slate-50 border-slate-200">
        <ul className="text-xs text-slate-700 space-y-1.5 pl-4 list-disc">
          <li><b>{g.girRangeNormal}</b></li>
          <li><b>{g.girRangeCrit}</b></li>
          <li><b>{g.girRangeMax}</b> <RefTag k="aspenGir" /></li>
          <li className="text-slate-500">{g.girPedsNote}</li>
        </ul>
      </Section>
    </Modal>
  );
};

const IcpGuide = ({ lang, t, onClose, onOpenFluid }) => {
  const g = GUIDE_TEXT[lang];
  const [tab, setTab] = useState('mannitol'); // 'mannitol' | 'nacl3' | 'decision' | 'cpp'
  const [weight, setWeight] = useState('70');

  // Mannitol state
  const [manDose, setManDose] = useState('0.5'); // g/kg
  const [serumOsm, setSerumOsm] = useState('295'); // mOsm/kg
  const [showGap, setShowGap] = useState(false);
  const [gapNa, setGapNa] = useState('140');
  const [gapGlu, setGapGlu] = useState('110');
  const [gapBun, setGapBun] = useState('14');

  // 3% NaCl state
  const [naclRegimen, setNaclRegimen] = useState('250'); // '250' | '500' | '2' | '3' | '5' | 'custom'
  const [customVol, setCustomVol] = useState('250');
  const [serumNa, setSerumNa] = useState('138');

  // CPP state
  const [sbp, setSbp] = useState('130');
  const [dbp, setDbp] = useState('80');
  const [icp, setIcp] = useState('18');

  const wt = toNum(weight) || 0;
  const mDose = toNum(manDose) || 0;
  const sOsm = toNum(serumOsm) || 0;
  const sNa = toNum(serumNa) || 0;

  // Mannitol calculations: 20% solution = 20 g / 100 mL = 0.20 g/mL (5 mL per gram)
  const manGrams = wt > 0 && mDose > 0 ? wt * mDose : 0;
  const manVolMl = manGrams > 0 ? manGrams * 5 : 0;

  // Osmolar gap calculation: Calc Osm = 2*Na + Glu/18 + BUN/2.8
  const gNa = toNum(gapNa) || 0;
  const gGlu = toNum(gapGlu) || 0;
  const gBun = toNum(gapBun) || 0;
  const calcOsm = (2 * gNa) + (gGlu / 18) + (gBun / 2.8);
  const osmGap = sOsm > 0 && calcOsm > 0 ? sOsm - calcOsm : null;

  const isOsmDanger = sOsm >= 320;
  const isOsmCaution = sOsm >= 310 && sOsm < 320;
  const isOsmSafe = sOsm > 0 && sOsm < 310;
  const isGapHigh = osmGap !== null && osmGap > 12;

  // 3% NaCl calculations: 513 mmol/L Na and Cl
  let naclVol = 0;
  if (naclRegimen === '250') naclVol = 250;
  else if (naclRegimen === '500') naclVol = 500;
  else if (['2', '3', '5'].includes(naclRegimen)) naclVol = wt * toNum(naclRegimen);
  else naclVol = toNum(customVol) || 0;

  // Adrogué-Madias: acute change per L = (513 - sNa) / (TBW + 1)
  const tbw = wt > 0 ? wt * 0.6 : 42;
  const dNaPerLitre = (513 - sNa) / (tbw + 1);
  const acuteRise = naclVol > 0 ? dNaPerLitre * (naclVol / 1000) : 0;
  const predictedNa = sNa + acuteRise;

  const isNaHighAlert = sNa >= 155 || predictedNa > 160;
  const isNaCaution = predictedNa > 155 && !isNaHighAlert;
  const isNaTherapeutic = predictedNa >= 145 && predictedNa <= 155;

  // CPP calculations:
  const nSbp = toNum(sbp) || 0;
  const nDbp = toNum(dbp) || 0;
  const nIcp = toNum(icp) || 0;
  const calcMap = nDbp + (nSbp - nDbp) / 3;
  const calcCpp = calcMap - nIcp;

  const isCppLow = calcCpp > 0 && calcCpp < 60;
  const isCppHigh = calcCpp > 70;
  const isCppNormal = calcCpp >= 60 && calcCpp <= 70;
  const isIcpHigh = nIcp > 22;

  return (
    <Modal title={t.guides.icp} sub={g.icpSub} onClose={onClose} tone="bg-purple-50" wide attrs={{ 'data-guide-modal': 'icp' }}
      icon={<div className="p-2 bg-purple-100 text-purple-700 rounded-xl shrink-0"><BrainIcon className="w-5 h-5" /></div>}
      footer={<CloseBtn onClose={onClose} t={t} />}>
      <div className="flex flex-wrap gap-1.5 mb-3" role="tablist" data-icp-tabs>
        <button type="button" role="tab" aria-selected={tab === 'mannitol'} onClick={() => setTab('mannitol')} data-icp-tab="mannitol"
          className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${tab === 'mannitol' ? 'bg-purple-700 border-purple-700 text-white' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
          {g.icpTabs.mannitol}
        </button>
        <button type="button" role="tab" aria-selected={tab === 'nacl3'} onClick={() => setTab('nacl3')} data-icp-tab="nacl3"
          className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${tab === 'nacl3' ? 'bg-purple-700 border-purple-700 text-white' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
          {g.icpTabs.nacl3}
        </button>
        <button type="button" role="tab" aria-selected={tab === 'decision'} onClick={() => setTab('decision')} data-icp-tab="decision"
          className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${tab === 'decision' ? 'bg-purple-700 border-purple-700 text-white' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
          {g.icpTabs.decision}
        </button>
        <button type="button" role="tab" aria-selected={tab === 'cpp'} onClick={() => setTab('cpp')} data-icp-tab="cpp"
          className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${tab === 'cpp' ? 'bg-purple-700 border-purple-700 text-white' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
          {g.icpTabs.cpp}
        </button>
      </div>

      {tab === 'mannitol' && (
        <div className="flex flex-col gap-3" data-icp-mannitol-view>
          <Section title={g.icpManTitle} tone="bg-purple-50/60 border-purple-200">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <NumInput label={g.icpWeight} unit={g.kg} value={weight} onChange={setWeight} attrs={{ 'data-icp-weight': '' }} />
              <NumInput label={g.icpManDoseLabel} unit="g/kg" value={manDose} onChange={setManDose} attrs={{ 'data-man-dose-input': '' }} />
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold text-slate-500">{g.planQuick} (g/kg)</span>
                <div className="flex flex-wrap gap-1.5" data-man-presets>
                  {['0.25', '0.5', '1.0'].map(v => (
                    <button key={v} type="button" onClick={() => setManDose(v)} aria-pressed={manDose === v} data-man-preset={v}
                      className={`min-w-[2.5rem] px-2.5 py-1.5 rounded-lg border text-xs font-bold tabular-nums transition-colors ${manDose === v ? 'bg-purple-700 border-purple-700 text-white' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 mt-2 leading-snug">
              {g.icpManAdminTime} | <span className="font-semibold text-slate-700">{g.icpManKinetics}</span>
            </p>
          </Section>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2" data-man-results>
            <div className="rounded-xl border border-purple-200 bg-purple-50 p-3 text-purple-900">
              <div className="text-[11px] font-bold opacity-80">{g.icpManCalcGrams}</div>
              <div className="text-xl font-extrabold tabular-nums" data-man-dose-g>
                {manGrams ? manGrams.toFixed(1) : '—'} <span className="text-xs font-semibold">g</span>
              </div>
              <div className="text-[11px] font-medium mt-0.5">20% = 0.20 g/mL</div>
            </div>

            <div className="rounded-xl border border-sky-200 bg-sky-50 p-3 text-sky-900">
              <div className="text-[11px] font-bold opacity-80">{g.icpManCalcVol}</div>
              <div className="text-xl font-extrabold tabular-nums" data-man-vol-ml>
                {manVolMl ? Math.round(manVolMl) : '—'} <span className="text-xs font-semibold">mL</span>
              </div>
              <div className="text-[11px] font-medium mt-0.5">15–20 min IV bolus</div>
            </div>

            <div className={`rounded-xl border p-3 ${isOsmDanger ? 'border-rose-300 bg-rose-50 text-rose-900' : isOsmCaution ? 'border-amber-300 bg-amber-50 text-amber-900' : 'border-emerald-200 bg-emerald-50 text-emerald-900'}`}>
              <NumInput label={g.icpManOsmLabel} unit="mOsm/kg" value={serumOsm} onChange={setSerumOsm} attrs={{ 'data-man-osm-input': '' }} />
              <div className="text-[11px] font-extrabold mt-1">
                {isOsmDanger ? '⚠️ ≥ 320 (HOLD)' : isOsmCaution ? '⚠️ 310–319 (Caution)' : '✓ < 310 (Safe)'}
              </div>
            </div>
          </div>

          {isOsmDanger && (
            <div className="rounded-xl border border-rose-300 bg-rose-50 p-3 text-xs text-rose-900 leading-snug font-medium" data-man-osm-alert="danger">
              {g.icpManOsmDanger}
            </div>
          )}

          {isOsmCaution && (
            <div className="rounded-xl border border-amber-300 bg-amber-50 p-3 text-xs text-amber-900 leading-snug font-medium" data-man-osm-alert="caution">
              {g.icpManOsmCaution}
            </div>
          )}

          {isOsmSafe && (
            <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-2.5 text-xs text-emerald-900 leading-snug font-medium" data-man-osm-alert="safe">
              {g.icpManOsmSafe}
            </div>
          )}

          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-3">
            <button type="button" onClick={() => setShowGap(!showGap)} data-man-gap-toggle
              className="w-full flex items-center justify-between text-left text-xs font-bold text-slate-700 hover:text-purple-700 cursor-pointer">
              <span className="flex items-center gap-1.5">
                <InfoIcon className="w-3.5 h-3.5" /> {g.icpGapToggle}
              </span>
              <span className="text-[10px] text-purple-600 underline">{showGap ? '▲ Hide' : '▼ Calculate'}</span>
            </button>
            {showGap && (
              <div className="mt-3 pt-3 border-t border-slate-200 flex flex-col gap-2.5" data-gap-panel>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <NumInput label={g.icpGapNa} unit="mmol/L" value={gapNa} onChange={setGapNa} attrs={{ 'data-gap-na': '' }} />
                  <NumInput label={g.icpGapGlu} unit="mg/dL" value={gapGlu} onChange={setGapGlu} attrs={{ 'data-gap-glu': '' }} />
                  <NumInput label={g.icpGapBun} unit="mg/dL" value={gapBun} onChange={setGapBun} attrs={{ 'data-gap-bun': '' }} />
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-700">
                  <span>{g.icpGapCalcOsm}: <span className="tabular-nums font-extrabold" data-gap-calc-osm>{calcOsm ? calcOsm.toFixed(1) : '—'}</span> mOsm/kg</span>
                  <span>{g.icpGapVal}: <span className="tabular-nums font-extrabold text-purple-700" data-man-gap-val>{osmGap !== null ? (osmGap >= 0 ? '+' : '') + osmGap.toFixed(1) : '—'}</span> mOsm/kg</span>
                </div>
                {isGapHigh ? (
                  <div className="rounded-lg border border-amber-300 bg-amber-50 p-2 text-xs text-amber-900 font-medium" data-man-gap-alert="high">
                    {g.icpGapHigh}
                  </div>
                ) : (
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-2 text-xs text-slate-700" data-man-gap-alert="normal">
                    {g.icpGapNormal}
                  </div>
                )}
              </div>
            )}
          </div>

          <Section title={t.detailFlags} tone="bg-slate-50 border-slate-200">
            <ul className="text-xs text-slate-700 space-y-1.5 pl-4 list-disc">
              {g.icpManNotes.map((note, idx) => <li key={idx}>{note}</li>)}
            </ul>
          </Section>

          <div className="flex justify-end">
            <button type="button" onClick={() => onOpenFluid('mannitol20')} data-open-mannitol-btn
              className="px-3 py-2 rounded-lg bg-white border border-slate-200 shadow-sm text-xs font-bold text-purple-700 hover:bg-purple-50 transition-colors flex items-center gap-1.5 cursor-pointer">
              <BoxIcon className="w-3.5 h-3.5" /> {g.icpOpenMan}
            </button>
          </div>
        </div>
      )}

      {tab === 'nacl3' && (
        <div className="flex flex-col gap-3" data-icp-nacl3-view>
          <Section title={g.icpNacl3Title} tone="bg-purple-50/60 border-purple-200">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <NumInput label={g.icpWeight} unit={g.kg} value={weight} onChange={setWeight} attrs={{ 'data-icp-weight': '' }} />
              <div className="flex flex-col gap-1 sm:col-span-2">
                <span className="text-[11px] font-bold text-slate-500">{g.icpNacl3BolusLabel}</span>
                <div className="flex flex-wrap gap-1.5" data-nacl3-presets>
                  {[
                    ['250', '250 mL'],
                    ['500', '500 mL'],
                    ['2', '2 mL/kg'],
                    ['3', '3 mL/kg'],
                    ['5', '5 mL/kg'],
                    ['custom', 'Custom'],
                  ].map(([k, label]) => (
                    <button key={k} type="button" onClick={() => setNaclRegimen(k)} aria-pressed={naclRegimen === k} data-nacl3-preset={k}
                      className={`px-2.5 py-1.5 rounded-lg border text-xs font-bold transition-colors ${naclRegimen === k ? 'bg-purple-700 border-purple-700 text-white' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {naclRegimen === 'custom' && (
              <div className="mt-3 max-w-xs">
                <NumInput label={g.icpNacl3Vol} unit="mL" value={customVol} onChange={setCustomVol} attrs={{ 'data-nacl3-custom-vol': '' }} />
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
              <NumInput label={g.icpNacl3NaCurrent} unit="mmol/L" value={serumNa} onChange={setSerumNa} attrs={{ 'data-nacl3-sna-input': '' }} />
              <div className="flex flex-col justify-end">
                <span className="text-xs font-bold text-purple-800 bg-purple-50 border border-purple-200 rounded-lg px-3 py-2">
                  {g.icpNacl3TargetNote}
                </span>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 mt-2 leading-snug">
              {g.icpNacl3Admin}
            </p>
          </Section>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2" data-nacl3-results>
            <div className="rounded-xl border border-sky-200 bg-sky-50 p-3 text-sky-900">
              <div className="text-[11px] font-bold opacity-80">{g.icpNacl3Vol}</div>
              <div className="text-xl font-extrabold tabular-nums" data-nacl3-vol-ml>
                {Math.round(naclVol)} <span className="text-xs font-semibold">mL</span>
              </div>
              <div className="text-[11px] font-medium mt-0.5">10–20 min IV bolus</div>
            </div>

            <div className="rounded-xl border border-purple-200 bg-purple-50 p-3 text-purple-900">
              <div className="text-[11px] font-bold opacity-80">{g.icpNacl3Rise}</div>
              <div className="text-xl font-extrabold tabular-nums" data-nacl3-rise-val>
                {acuteRise ? '+' + acuteRise.toFixed(1) : '—'} <span className="text-xs font-semibold">mmol/L</span>
              </div>
              <div className="text-[11px] font-medium mt-0.5">Adrogué–Madias</div>
            </div>

            <div className={`rounded-xl border p-3 ${isNaHighAlert ? 'border-rose-300 bg-rose-50 text-rose-900' : isNaCaution ? 'border-amber-300 bg-amber-50 text-amber-900' : 'border-emerald-200 bg-emerald-50 text-emerald-900'}`}>
              <div className="text-[11px] font-bold opacity-80">{g.icpNacl3PredictedNa}</div>
              <div className="text-xl font-extrabold tabular-nums" data-nacl3-pred-val>
                {predictedNa ? predictedNa.toFixed(1) : '—'} <span className="text-xs font-semibold">mmol/L</span>
              </div>
              <div className="text-[11px] font-extrabold mt-0.5">
                {isNaHighAlert ? '⚠️ ≥ 155 (HOLD)' : isNaTherapeutic ? '✓ 145–155 (Target)' : '< 145'}
              </div>
            </div>
          </div>

          {isNaHighAlert && (
            <div className="rounded-xl border border-rose-300 bg-rose-50 p-3 text-xs text-rose-900 leading-snug font-medium" data-nacl3-alert="high">
              {g.icpNacl3HighAlert}
            </div>
          )}

          {isNaCaution && (
            <div className="rounded-xl border border-amber-300 bg-amber-50 p-3 text-xs text-amber-900 leading-snug font-medium" data-nacl3-alert="caution">
              ⚠️ {g.icpNacl3PredictedNa} &gt; 155 mmol/L. Monitor electrolytes closely.
            </div>
          )}

          {isNaTherapeutic && (
            <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-2.5 text-xs text-emerald-900 leading-snug font-medium" data-nacl3-alert="safe">
              {g.icpNacl3Safe}
            </div>
          )}

          <Section title={t.detailFlags} tone="bg-slate-50 border-slate-200">
            <ul className="text-xs text-slate-700 space-y-1.5 pl-4 list-disc">
              {g.icpNacl3Notes.map((note, idx) => <li key={idx}>{note}</li>)}
            </ul>
          </Section>

          <div className="flex justify-end">
            <button type="button" onClick={() => onOpenFluid('nacl3')} data-open-nacl3-btn
              className="px-3 py-2 rounded-lg bg-white border border-slate-200 shadow-sm text-xs font-bold text-purple-700 hover:bg-purple-50 transition-colors flex items-center gap-1.5 cursor-pointer">
              <BoxIcon className="w-3.5 h-3.5" /> {g.icpOpenNacl3}
            </button>
          </div>
        </div>
      )}

      {tab === 'decision' && (
        <div className="flex flex-col gap-3" data-icp-decision-view>
          <Section title={g.icpDecisionTitle} tone="bg-slate-50 border-slate-200">
            <div className="flex flex-col gap-2" data-icp-scenario-list>
              {g.icpScenarios.map((sc, idx) => (
                <div key={idx} className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm flex flex-col gap-1.5" data-icp-scenario={idx}>
                  <div className="flex flex-wrap items-center justify-between gap-1.5">
                    <span className="font-bold text-xs text-slate-800">{sc.cond}</span>
                    <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${sc.tone === 'emerald' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'}`}>
                      {sc.agent}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-snug">{sc.text}</p>
                </div>
              ))}
            </div>
          </Section>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
              <div className="text-[11px] font-bold text-slate-400 uppercase">Osmolality Cutoff</div>
              <div className="text-xs font-bold text-slate-800 mt-1">Mannitol: &lt; 320 mOsm/kg</div>
              <div className="text-xs font-bold text-purple-700 mt-0.5">3% NaCl: &lt; 360 mOsm/kg</div>
              <div className="text-[10px] text-slate-500 mt-1">Mannitol risks acute tubular necrosis if &gt; 320.</div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
              <div className="text-[11px] font-bold text-slate-400 uppercase">Hemodynamics</div>
              <div className="text-xs font-bold text-slate-800 mt-1">Mannitol: Diuresis ↓ BP</div>
              <div className="text-xs font-bold text-emerald-700 mt-0.5">3% NaCl: Volume ↑ MAP/CPP</div>
              <div className="text-[10px] text-slate-500 mt-1">Never use mannitol in hypovolemia/shock.</div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
              <div className="text-[11px] font-bold text-slate-400 uppercase">Line Access</div>
              <div className="text-xs font-bold text-slate-800 mt-1">Mannitol: In-line filter</div>
              <div className="text-xs font-bold text-slate-800 mt-0.5">3% NaCl: Large-bore / Central</div>
              <div className="text-[10px] text-slate-500 mt-1">Acute boluses allowed peripherally in emergency.</div>
            </div>
          </div>
        </div>
      )}

      {tab === 'cpp' && (
        <div className="flex flex-col gap-3" data-icp-cpp-view>
          <Section title={g.icpCppTitle} tone="bg-purple-50/60 border-purple-200">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <NumInput label={g.icpSbp} unit="mmHg" value={sbp} onChange={setSbp} attrs={{ 'data-cpp-sbp': '' }} />
              <NumInput label={g.icpDbp} unit="mmHg" value={dbp} onChange={setDbp} attrs={{ 'data-cpp-dbp': '' }} />
              <NumInput label={g.icpIcpVal} unit="mmHg" value={icp} onChange={setIcp} attrs={{ 'data-cpp-icp-input': '' }} />
            </div>
            <p className="text-[11px] text-slate-500 mt-2 leading-snug">
              {g.icpCppFormula} <RefTag k="btfIcp" />
            </p>
          </Section>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2" data-cpp-results>
            <div className="rounded-xl border border-sky-200 bg-sky-50 p-3 text-sky-900">
              <div className="text-[11px] font-bold opacity-80">{g.icpMap}</div>
              <div className="text-xl font-extrabold tabular-nums" data-cpp-map-val>
                {calcMap ? calcMap.toFixed(1) : '—'} <span className="text-xs font-semibold">mmHg</span>
              </div>
              <div className="text-[11px] font-medium mt-0.5">DBP + ⅓(SBP − DBP)</div>
            </div>

            <div className={`rounded-xl border p-3 ${isIcpHigh ? 'border-rose-300 bg-rose-50 text-rose-900' : 'border-slate-200 bg-slate-50 text-slate-900'}`}>
              <div className="text-[11px] font-bold opacity-80">{g.icpIcpVal}</div>
              <div className="text-xl font-extrabold tabular-nums" data-cpp-icp-val>
                {nIcp ? nIcp.toFixed(0) : '—'} <span className="text-xs font-semibold">mmHg</span>
              </div>
              <div className="text-[11px] font-bold mt-0.5">
                {isIcpHigh ? '⚠️ > 22 (High ICP)' : '✓ < 22 (Normal)'}
              </div>
            </div>

            <div className={`rounded-xl border p-3 ${isCppLow ? 'border-rose-300 bg-rose-50 text-rose-900' : isCppHigh ? 'border-amber-300 bg-amber-50 text-amber-900' : 'border-emerald-200 bg-emerald-50 text-emerald-900'}`}>
              <div className="text-[11px] font-bold opacity-80">{g.icpCppVal}</div>
              <div className="text-xl font-extrabold tabular-nums" data-cpp-val>
                {calcCpp ? calcCpp.toFixed(1) : '—'} <span className="text-xs font-semibold">mmHg</span>
              </div>
              <div className="text-[11px] font-extrabold mt-0.5">
                {isCppLow ? '⚠️ < 60 (Ischemia)' : isCppHigh ? '⚠️ > 70 (High CPP)' : '✓ 60–70 (Target)'}
              </div>
            </div>
          </div>

          {isCppLow && (
            <div className="rounded-xl border border-rose-300 bg-rose-50 p-3 text-xs text-rose-900 leading-snug font-medium" data-cpp-alert="low">
              {g.icpCppLowAlert}
            </div>
          )}

          {isCppHigh && (
            <div className="rounded-xl border border-amber-300 bg-amber-50 p-3 text-xs text-amber-900 leading-snug font-medium" data-cpp-alert="high">
              {g.icpCppHighAlert}
            </div>
          )}

          {isIcpHigh && !isCppLow && (
            <div className="rounded-xl border border-rose-300 bg-rose-50 p-3 text-xs text-rose-900 leading-snug font-medium" data-cpp-alert="icp">
              {g.icpIcpHighAlert}
            </div>
          )}

          {isCppNormal && !isIcpHigh && (
            <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-2.5 text-xs text-emerald-900 leading-snug font-medium" data-cpp-alert="normal">
              {g.icpCppNormal}
            </div>
          )}
        </div>
      )}
    </Modal>
  );
};

// =====================================================================
// Albumin Indication Guide & Clinical Dosing Calculator
// =====================================================================
const AlbuminGuide = ({ lang, t, onClose, onOpenFluid }) => {
  const g = GUIDE_TEXT[lang];
  const [tab, setTab] = useState('lvp'); // 'lvp' | 'sbp' | 'hrs' | 'compare'

  // LVP state
  const [ascitesVol, setAscitesVol] = useState('6');
  const [doseRatio, setDoseRatio] = useState('8'); // '6' or '8' g/L

  // SBP state
  const [sbpWeight, setSbpWeight] = useState('60');

  // HRS state
  const [hrsWeight, setHrsWeight] = useState('60');

  // Calculations:
  // LVP:
  const nAscites = toNum(ascitesVol) || 0;
  const nRatio = toNum(doseRatio) || 8;
  const lvpGrams = nAscites > 0 ? nAscites * nRatio : 0;
  // 20% = 20 g / 100 mL = 0.20 g/mL (5 mL per gram)
  // 25% = 25 g / 100 mL = 0.25 g/mL (4 mL per gram)
  const lvpVol20 = lvpGrams > 0 ? lvpGrams * 5 : 0;
  const lvpVol25 = lvpGrams > 0 ? lvpGrams * 4 : 0;
  const isLvpLarge = nAscites >= 5;

  // SBP:
  // Day 1: 1.5 g/kg; Day 3: 1.0 g/kg
  const nSbpWt = toNum(sbpWeight) || 0;
  const sbpDay1G = nSbpWt > 0 ? nSbpWt * 1.5 : 0;
  const sbpDay1Vol20 = sbpDay1G > 0 ? sbpDay1G * 5 : 0;
  const sbpDay1Vol25 = sbpDay1G > 0 ? sbpDay1G * 4 : 0;

  const sbpDay3G = nSbpWt > 0 ? nSbpWt * 1.0 : 0;
  const sbpDay3Vol20 = sbpDay3G > 0 ? sbpDay3G * 5 : 0;
  const sbpDay3Vol25 = sbpDay3G > 0 ? sbpDay3G * 4 : 0;

  const sbpTotalG = sbpDay1G + sbpDay3G;

  // HRS:
  // Diagnostic challenge: 1 g/kg/day (max 100 g/day) for 2 days
  const nHrsWt = toNum(hrsWeight) || 0;
  const hrsChallengeG = nHrsWt > 0 ? Math.min(100, nHrsWt * 1.0) : 0;
  const hrsChallengeVol20 = hrsChallengeG > 0 ? hrsChallengeG * 5 : 0;
  const hrsChallengeVol25 = hrsChallengeG > 0 ? hrsChallengeG * 4 : 0;

  return (
    <Modal title={t.guides.albumin} sub={g.albSub} onClose={onClose} tone="bg-fuchsia-50" wide attrs={{ 'data-guide-modal': 'albumin' }}
      icon={<div className="p-2 bg-fuchsia-100 text-fuchsia-700 rounded-xl shrink-0"><DropletIcon className="w-5 h-5" /></div>}
      footer={<CloseBtn onClose={onClose} t={t} />}>
      <div className="flex flex-wrap gap-1.5 mb-3" role="tablist" data-alb-tabs>
        <button type="button" role="tab" aria-selected={tab === 'lvp'} onClick={() => setTab('lvp')} data-alb-tab="lvp"
          className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${tab === 'lvp' ? 'bg-fuchsia-700 border-fuchsia-700 text-white' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
          {g.albTabs.lvp}
        </button>
        <button type="button" role="tab" aria-selected={tab === 'sbp'} onClick={() => setTab('sbp')} data-alb-tab="sbp"
          className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${tab === 'sbp' ? 'bg-fuchsia-700 border-fuchsia-700 text-white' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
          {g.albTabs.sbp}
        </button>
        <button type="button" role="tab" aria-selected={tab === 'hrs'} onClick={() => setTab('hrs')} data-alb-tab="hrs"
          className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${tab === 'hrs' ? 'bg-fuchsia-700 border-fuchsia-700 text-white' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
          {g.albTabs.hrs}
        </button>
        <button type="button" role="tab" aria-selected={tab === 'compare'} onClick={() => setTab('compare')} data-alb-tab="compare"
          className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${tab === 'compare' ? 'bg-fuchsia-700 border-fuchsia-700 text-white' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
          {g.albTabs.compare}
        </button>
      </div>

      {tab === 'lvp' && (
        <div className="flex flex-col gap-3" data-alb-lvp-view>
          <Section title={g.albLvpTitle} tone="bg-fuchsia-50/60 border-fuchsia-200">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <NumInput label={g.albLvpVolRemoved} unit="L" value={ascitesVol} onChange={setAscitesVol} attrs={{ 'data-lvp-vol-input': '' }} />
              <div className="flex flex-col gap-1 min-w-0">
                <span className="text-[11px] font-bold text-slate-500">{g.albLvpDoseFactor}</span>
                <div className="flex gap-1.5 h-9" data-lvp-ratio-group>
                  {['8', '6'].map(r => (
                    <button key={r} type="button" onClick={() => setDoseRatio(r)} aria-pressed={doseRatio === r} data-lvp-ratio={r}
                      className={`flex-1 rounded-lg border text-xs font-bold transition-colors ${doseRatio === r ? 'bg-fuchsia-700 border-fuchsia-700 text-white' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
                      {r} g/L {r === '8' ? '(AASLD)' : '(EASL)'}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold text-slate-500">{g.planQuick} (L)</span>
                <div className="flex flex-wrap gap-1.5" data-lvp-presets>
                  {['4', '5', '6', '8', '10'].map(v => (
                    <button key={v} type="button" onClick={() => setAscitesVol(v)} aria-pressed={ascitesVol === v} data-lvp-preset={v}
                      className={`min-w-[2.3rem] px-2 py-1.5 rounded-lg border text-xs font-bold tabular-nums transition-colors ${ascitesVol === v ? 'bg-fuchsia-700 border-fuchsia-700 text-white' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
                      {v} L
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 mt-2 leading-snug">
              {g.albLvpRateNote} <RefTag k="aasldAlb" />
            </p>
          </Section>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2" data-lvp-results>
            <div className="rounded-xl border border-fuchsia-200 bg-fuchsia-50 p-3 text-fuchsia-900">
              <div className="text-[11px] font-bold opacity-80">{g.albLvpDoseGrams}</div>
              <div className="text-xl font-extrabold tabular-nums" data-lvp-dose-g>
                {lvpGrams ? lvpGrams.toFixed(0) : '—'} <span className="text-xs font-semibold">g</span>
              </div>
              <div className="text-[11px] font-medium mt-0.5">{nAscites} L × {nRatio} g/L</div>
            </div>

            <div className="rounded-xl border border-purple-200 bg-purple-50 p-3 text-purple-900">
              <div className="text-[11px] font-bold opacity-80">{g.albLvpVol20}</div>
              <div className="text-xl font-extrabold tabular-nums" data-lvp-vol-20>
                {lvpVol20 ? Math.round(lvpVol20) : '—'} <span className="text-xs font-semibold">mL</span>
              </div>
              <div className="text-[11px] font-medium mt-0.5">20% = 0.20 g/mL (× 5)</div>
            </div>

            <div className="rounded-xl border border-sky-200 bg-sky-50 p-3 text-sky-900">
              <div className="text-[11px] font-bold opacity-80">{g.albLvpVol25}</div>
              <div className="text-xl font-extrabold tabular-nums" data-lvp-vol-25>
                {lvpVol25 ? Math.round(lvpVol25) : '—'} <span className="text-xs font-semibold">mL</span>
              </div>
              <div className="text-[11px] font-medium mt-0.5">25% = 0.25 g/mL (× 4)</div>
            </div>
          </div>

          {isLvpLarge ? (
            <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-3 text-xs text-emerald-900 leading-snug font-medium" data-lvp-alert="safe">
              {g.albLvpSafeAlert}
            </div>
          ) : (
            <div className="rounded-xl border border-amber-300 bg-amber-50 p-3 text-xs text-amber-900 leading-snug font-medium" data-lvp-alert="low">
              {g.albLvpLowAlert}
            </div>
          )}

          <Section title={t.detailFlags} tone="bg-slate-50 border-slate-200">
            <ul className="text-xs text-slate-700 space-y-1.5 pl-4 list-disc">
              {g.albLvpNotes.map((note, idx) => <li key={idx}>{note}</li>)}
            </ul>
          </Section>

          <div className="flex flex-wrap justify-end gap-2">
            <button type="button" onClick={() => onOpenFluid('alb20')} data-open-alb20-btn
              className="px-3 py-2 rounded-lg bg-white border border-slate-200 shadow-sm text-xs font-bold text-fuchsia-700 hover:bg-fuchsia-50 transition-colors flex items-center gap-1.5 cursor-pointer">
              <BoxIcon className="w-3.5 h-3.5" /> {g.albOpenFluid20}
            </button>
            <button type="button" onClick={() => onOpenFluid('alb25')} data-open-alb25-btn
              className="px-3 py-2 rounded-lg bg-white border border-slate-200 shadow-sm text-xs font-bold text-fuchsia-700 hover:bg-fuchsia-50 transition-colors flex items-center gap-1.5 cursor-pointer">
              <BoxIcon className="w-3.5 h-3.5" /> {g.albOpenFluid25}
            </button>
          </div>
        </div>
      )}

      {tab === 'sbp' && (
        <div className="flex flex-col gap-3" data-alb-sbp-view>
          <Section title={g.albSbpTitle} tone="bg-fuchsia-50/60 border-fuchsia-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <NumInput label={g.albSbpWeight} unit={g.kg} value={sbpWeight} onChange={setSbpWeight} attrs={{ 'data-sbp-weight': '' }} />
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold text-slate-500">{g.planQuick} (kg)</span>
                <div className="flex flex-wrap gap-1.5" data-sbp-presets>
                  {['50', '60', '70', '80'].map(v => (
                    <button key={v} type="button" onClick={() => setSbpWeight(v)} aria-pressed={sbpWeight === v} data-sbp-preset={v}
                      className={`min-w-[2.5rem] px-2.5 py-1.5 rounded-lg border text-xs font-bold tabular-nums transition-colors ${sbpWeight === v ? 'bg-fuchsia-700 border-fuchsia-700 text-white' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
                      {v} kg
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 mt-2 leading-snug">
              {g.albSbpHighRiskNote} <RefTag k="sortSbp" />
            </p>
          </Section>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" data-sbp-results>
            <div className="rounded-xl border border-fuchsia-200 bg-fuchsia-50 p-3.5 text-fuchsia-950 flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wide text-fuchsia-800">{g.albSbpDay1Dose}</span>
                <span className="text-[11px] font-bold bg-fuchsia-200 text-fuchsia-800 px-2 py-0.5 rounded-full">1.5 g/kg</span>
              </div>
              <div className="text-2xl font-black tabular-nums text-fuchsia-900" data-sbp-day1-g>
                {sbpDay1G ? sbpDay1G.toFixed(1) : '—'} <span className="text-sm font-bold">g</span>
              </div>
              <div className="text-xs text-slate-600 font-medium">
                {g.albSbpDay1Sub}
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-fuchsia-200/60 text-xs">
                <div>
                  <div className="text-[10px] text-slate-600 font-bold">20% Volume</div>
                  <div className="font-extrabold tabular-nums text-slate-800" data-sbp-day1-vol20>{sbpDay1Vol20 ? Math.round(sbpDay1Vol20) : '—'} mL</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-600 font-bold">25% Volume</div>
                  <div className="font-extrabold tabular-nums text-slate-800" data-sbp-day1-vol25>{sbpDay1Vol25 ? Math.round(sbpDay1Vol25) : '—'} mL</div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-sky-200 bg-sky-50 p-3.5 text-sky-950 flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wide text-sky-800">{g.albSbpDay3Dose}</span>
                <span className="text-[11px] font-bold bg-sky-200 text-sky-800 px-2 py-0.5 rounded-full">1.0 g/kg</span>
              </div>
              <div className="text-2xl font-black tabular-nums text-sky-900" data-sbp-day3-g>
                {sbpDay3G ? sbpDay3G.toFixed(1) : '—'} <span className="text-sm font-bold">g</span>
              </div>
              <div className="text-xs text-slate-600 font-medium">
                {g.albSbpDay3Sub}
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-sky-200/60 text-xs">
                <div>
                  <div className="text-[10px] text-slate-600 font-bold">20% Volume</div>
                  <div className="font-extrabold tabular-nums text-slate-800" data-sbp-day3-vol20>{sbpDay3Vol20 ? Math.round(sbpDay3Vol20) : '—'} mL</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-600 font-bold">25% Volume</div>
                  <div className="font-extrabold tabular-nums text-slate-800" data-sbp-day3-vol25>{sbpDay3Vol25 ? Math.round(sbpDay3Vol25) : '—'} mL</div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 p-3 text-xs text-indigo-900 leading-snug font-medium" data-sbp-alert="trial">
            <span className="font-extrabold block mb-0.5">{g.albSbpTotalGrams}: {sbpTotalG ? sbpTotalG.toFixed(1) : '—'} g ({sbpTotalG ? Math.round(sbpTotalG * 5) : '—'} mL of 20% or {sbpTotalG ? Math.round(sbpTotalG * 4) : '—'} mL of 25%)</span>
            {g.albSbpTrialAlert}
          </div>

          <Section title={t.detailFlags} tone="bg-slate-50 border-slate-200">
            <ul className="text-xs text-slate-700 space-y-1.5 pl-4 list-disc">
              {g.albSbpNotes.map((note, idx) => <li key={idx}>{note}</li>)}
            </ul>
          </Section>
        </div>
      )}

      {tab === 'hrs' && (
        <div className="flex flex-col gap-3" data-alb-hrs-view>
          <Section title={g.albHrsChallengeTitle} tone="bg-fuchsia-50/60 border-fuchsia-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <NumInput label={g.albHrsWeight} unit={g.kg} value={hrsWeight} onChange={setHrsWeight} attrs={{ 'data-hrs-weight': '' }} />
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold text-slate-500">{g.planQuick} (kg)</span>
                <div className="flex flex-wrap gap-1.5" data-hrs-presets>
                  {['50', '60', '70', '80'].map(v => (
                    <button key={v} type="button" onClick={() => setHrsWeight(v)} aria-pressed={hrsWeight === v} data-hrs-preset={v}
                      className={`min-w-[2.5rem] px-2.5 py-1.5 rounded-lg border text-xs font-bold tabular-nums transition-colors ${hrsWeight === v ? 'bg-fuchsia-700 border-fuchsia-700 text-white' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
                      {v} kg
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 mt-2 leading-snug">
              {g.albHrsChallengeAction} <RefTag k="aasldAlb" />
            </p>
          </Section>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2" data-hrs-results>
            <div className="rounded-xl border border-fuchsia-200 bg-fuchsia-50 p-3 text-fuchsia-900">
              <div className="text-[11px] font-bold opacity-80">{g.albHrsChallengeGrams}</div>
              <div className="text-xl font-extrabold tabular-nums" data-hrs-challenge-g>
                {hrsChallengeG ? hrsChallengeG.toFixed(0) : '—'} <span className="text-xs font-semibold">g/day</span>
              </div>
              <div className="text-[11px] font-medium mt-0.5">1 g/kg/day (max 100 g)</div>
            </div>

            <div className="rounded-xl border border-purple-200 bg-purple-50 p-3 text-purple-900">
              <div className="text-[11px] font-bold opacity-80">{g.albHrsChallengeVol20}</div>
              <div className="text-xl font-extrabold tabular-nums" data-hrs-challenge-vol20>
                {hrsChallengeVol20 ? Math.round(hrsChallengeVol20) : '—'} <span className="text-xs font-semibold">mL/day</span>
              </div>
              <div className="text-[11px] font-medium mt-0.5">20% Albumin (× 5)</div>
            </div>

            <div className="rounded-xl border border-sky-200 bg-sky-50 p-3 text-sky-900">
              <div className="text-[11px] font-bold opacity-80">{g.albHrsChallengeVol25}</div>
              <div className="text-xl font-extrabold tabular-nums" data-hrs-challenge-vol25>
                {hrsChallengeVol25 ? Math.round(hrsChallengeVol25) : '—'} <span className="text-xs font-semibold">mL/day</span>
              </div>
              <div className="text-[11px] font-medium mt-0.5">25% Albumin (× 4)</div>
            </div>
          </div>

          <Section title={g.albHrsRxTitle} tone="bg-slate-50 border-slate-200">
            <div className="flex flex-col gap-2 text-xs text-slate-700">
              <div className="font-bold text-slate-800">{g.albHrsRxAlbumin}</div>
              <div className="font-semibold text-slate-600 mt-1">{g.albHrsRxVasoconstrictors}</div>
              <div className="pl-2 space-y-1 text-slate-700">
                <p>{g.albHrsRxTerli}</p>
                <p>{g.albHrsRxNorepi}</p>
                <p>{g.albHrsRxMidOct}</p>
              </div>
            </div>
          </Section>

          <div className="rounded-xl border border-rose-300 bg-rose-50 p-3 text-xs text-rose-900 leading-snug font-medium" data-hrs-alert="resp">
            {g.albHrsRespAlert}
          </div>

          <Section title="IAC Diagnostic Criteria" tone="bg-slate-50 border-slate-200">
            <p className="text-xs text-slate-600 leading-snug">{g.albHrsDiagnosisCriteria}</p>
          </Section>
        </div>
      )}

      {tab === 'compare' && (
        <div className="flex flex-col gap-3" data-alb-compare-view>
          <Section title={g.albCompareTitle} tone="bg-slate-50 border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5" data-alb-matrix-cards>
              <div className="rounded-xl border border-blue-200 bg-white p-3.5 shadow-sm flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-sm text-blue-900">Albumin 5%</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800">Iso-oncotic</span>
                </div>
                <div className="text-xs space-y-1 text-slate-600">
                  <div><b>Concentration:</b> 50 g/L (5%)</div>
                  <div><b>Oncotic Pressure:</b> ~20 mmHg</div>
                  <div><b>Volume Effect:</b> ~100% (1:1 expander)</div>
                  <div className="pt-1.5 border-t border-slate-100">
                    <b className="text-slate-800">Primary Uses:</b>
                    <ul className="list-disc pl-4 mt-0.5 space-y-0.5 text-[11px]">
                      <li>Sepsis resuscitation</li>
                      <li>Plasma exchange (TPE)</li>
                      <li>Burns (> 24h)</li>
                    </ul>
                  </div>
                </div>
                <button type="button" onClick={() => onOpenFluid('alb5')} data-open-alb5-btn
                  className="mt-auto pt-2 text-[11px] font-bold text-blue-700 hover:underline flex items-center gap-1 cursor-pointer">
                  <BoxIcon className="w-3 h-3" /> {g.albOpenFluid5}
                </button>
              </div>

              <div className="rounded-xl border border-purple-200 bg-white p-3.5 shadow-sm flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-sm text-purple-900">Albumin 20%</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 text-purple-800">Hyper-oncotic</span>
                </div>
                <div className="text-xs space-y-1 text-slate-600">
                  <div><b>Concentration:</b> 200 g/L (20%)</div>
                  <div><b>Oncotic Pressure:</b> ~70–80 mmHg (~4x)</div>
                  <div><b>Volume Effect:</b> Expands ~4x infused vol</div>
                  <div className="pt-1.5 border-t border-slate-100">
                    <b className="text-slate-800">Primary Uses:</b>
                    <ul className="list-disc pl-4 mt-0.5 space-y-0.5 text-[11px]">
                      <li>Paracentesis (LVP > 5 L)</li>
                      <li>Peritonitis (SBP)</li>
                      <li>Hepatorenal syndrome (HRS)</li>
                    </ul>
                  </div>
                </div>
                <button type="button" onClick={() => onOpenFluid('alb20')} data-open-alb20-btn
                  className="mt-auto pt-2 text-[11px] font-bold text-purple-700 hover:underline flex items-center gap-1 cursor-pointer">
                  <BoxIcon className="w-3 h-3" /> {g.albOpenFluid20}
                </button>
              </div>

              <div className="rounded-xl border border-fuchsia-200 bg-white p-3.5 shadow-sm flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-sm text-fuchsia-900">Albumin 25%</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-fuchsia-100 text-fuchsia-800">Hyper-oncotic</span>
                </div>
                <div className="text-xs space-y-1 text-slate-600">
                  <div><b>Concentration:</b> 250 g/L (25%)</div>
                  <div><b>Oncotic Pressure:</b> ~100 mmHg (~5x)</div>
                  <div><b>Volume Effect:</b> Expands 4–5x infused vol</div>
                  <div className="pt-1.5 border-t border-slate-100">
                    <b className="text-slate-800">Primary Uses:</b>
                    <ul className="list-disc pl-4 mt-0.5 space-y-0.5 text-[11px]">
                      <li>Cirrhosis (LVP > 5 L, SBP, HRS)</li>
                      <li>Nephrotic syndrome edema</li>
                      <li>Fluid-restricted volume pull</li>
                    </ul>
                  </div>
                </div>
                <button type="button" onClick={() => onOpenFluid('alb25')} data-open-alb25-btn
                  className="mt-auto pt-2 text-[11px] font-bold text-fuchsia-700 hover:underline flex items-center gap-1 cursor-pointer">
                  <BoxIcon className="w-3 h-3" /> {g.albOpenFluid25}
                </button>
              </div>
            </div>
          </Section>

          <div className="rounded-xl border border-rose-300 bg-rose-50 p-3 text-xs text-rose-900 leading-snug font-medium" data-alb-alert="tbi">
            <div className="font-bold mb-1">{g.albContraTitle}</div>
            <p>{g.albTbiAlert} <RefTag k="safeAlb" /></p>
          </div>

          <div className="rounded-xl border border-amber-300 bg-amber-50 p-3 text-xs text-amber-900 leading-snug font-medium" data-alb-alert="chf">
            {g.albChfAlert}
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-700 leading-snug" data-alb-alert="sepsis">
            <span className="font-bold text-slate-800 block mb-0.5">Surviving Sepsis Campaign 2021 Guidance</span>
            {g.albSepsisNote} <RefTag k="ssc" />
          </div>
        </div>
      )}
    </Modal>
  );
};

// =====================================================================
// Search
// =====================================================================
const normalise = (s) => String(s).toLowerCase().replace(/[\s.\-]+/g, '');
const searchText = (f) => normalise([f.short, f.name.en, f.name.th, ...f.aliases, ...REGIONS.flatMap(r => regIn(f, r).items.flatMap(i => [i.name, i.code, holderText(i.holder, 'en'), holderText(i.holder, 'th')]))].join(' '));
const SEARCH_CACHE = new Map();
const matches = (f, q) => { if (!SEARCH_CACHE.has(f.id)) SEARCH_CACHE.set(f.id, searchText(f)); return SEARCH_CACHE.get(f.id).includes(normalise(q)); };
const SORTS = {
  type: (a, b) => FLUIDS.indexOf(a) - FLUIDS.indexOf(b),
  nameAsc: (a, b) => a.short.localeCompare(b.short, 'en', { numeric: true }),
  naDesc: (a, b) => (num(b, 'na') || 0) - (num(a, 'na') || 0),
  naAsc: (a, b) => (num(a, 'na') || 0) - (num(b, 'na') || 0),
  clAsc: (a, b) => (num(a, 'cl') || 0) - (num(b, 'cl') || 0),
  osmAsc: (a, b) => (num(a, 'osm') ?? 9999) - (num(b, 'osm') ?? 9999),
};
const fluidIdFromHash = () => { const m = /fluid=([\w-]+)/.exec(location.hash || ''); return m && FLUIDS.some(f => f.id === m[1]) ? m[1] : null; };
const MAX_SELECT = 6;
const store = { get: (k, d) => { try { const v = localStorage.getItem(k); return v == null ? d : v; } catch (e) { return d; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} } };

function App() {
  const [lang, setLang] = useState(() => (store.get('ivf-lang', 'en') === 'th' ? 'th' : 'en'));
  useEffect(() => { store.set('ivf-lang', lang); document.documentElement.lang = lang; }, [lang]);
  const [theme, setTheme] = useState(() => {
    const saved = store.get('ivf-theme', null);
    if (saved === 'light' || saved === 'dark') return saved;
    const stamped = document.documentElement.getAttribute('data-theme');
    if (stamped === 'light' || stamped === 'dark') return stamped;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  useEffect(() => { document.documentElement.classList.toggle('dark', theme === 'dark'); }, [theme]);
  const toggleTheme = () => { const next = theme === 'dark' ? 'light' : 'dark'; setTheme(next); store.set('ivf-theme', next); };
  const t = translations[lang];

  const [searchTerm, setSearchTerm] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = React.useRef(null);
  useEffect(() => { if (searchOpen && searchRef.current) searchRef.current.focus(); }, [searchOpen]);
  const [sortOrder, setSortOrder] = useState('type');
  const [viewMode, setViewMode] = useState(() => (store.get('ivf-view', 'grid') === 'list' ? 'list' : 'grid'));
  useEffect(() => store.set('ivf-view', viewMode), [viewMode]);
  const [families, setFamilies] = useState([]);
  const [bands, setBands] = useState([]);
  const [phBands, setPhBands] = useState([]);
  const [contains, setContains] = useState([]);
  const [countries, setCountries] = useState(['th']);
  const [regStatus, setRegStatus] = useState(['current']);
  const toggleCountry = (r) => setCountries(prev => (prev.includes(r) ? prev.filter(x => x !== r) : REGIONS.filter(x => x === r || prev.includes(x))));
  const allCountries = countries.length === REGIONS.length;
  const toggleAllCountries = () => setCountries(allCountries ? [] : [...REGIONS]);
  // at least one status stays on
  const toggleRegStatus = (k) => setRegStatus(prev => (prev.includes(k) ? (prev.length > 1 ? prev.filter(x => x !== k) : prev) : REG_STATUSES.filter(x => x === k || prev.includes(x))));
  const [narrow, setNarrow] = useState(() => window.innerWidth < 640);
  useEffect(() => { const r = () => setNarrow(window.innerWidth < 640); window.addEventListener('resize', r); return () => window.removeEventListener('resize', r); }, []);
  const [filtersOpen, setFiltersOpen] = useState(() => window.innerWidth >= 640);
  const [selected, setSelected] = useState([]);
  const [detailId, setDetailId] = useState(fluidIdFromHash);
  const [highlightId, setHighlightId] = useState(null);
  const [guide, setGuide] = useState(null);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [isLegendOpen, setIsLegendOpen] = useState(false);
  const [isChangelogOpen, setIsChangelogOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const showToast = (m) => { setToast(m); setTimeout(() => setToast(cur => (cur === m ? null : cur)), 3000); };
  // Pinned bar height, so the filter panel sits right under it
  const barRef = React.useRef(null);
  const [barH, setBarH] = useState(0);
  useEffect(() => {
    if (!barRef.current || !window.ResizeObserver) return;
    const ro = new ResizeObserver(() => setBarH(barRef.current.getBoundingClientRect().height));
    ro.observe(barRef.current); return () => ro.disconnect();
  }, []);
  // Deep link: #fluid=<id> opens that fluid
  useEffect(() => { const h = () => { const id = fluidIdFromHash(); if (id) setDetailId(id); }; window.addEventListener('hashchange', h); return () => window.removeEventListener('hashchange', h); }, []);

  const toggleIn = (setter) => (v) => setter(prev => (prev.includes(v) ? prev.filter(x => x !== v) : [...prev, v]));
  const toggleSelect = (f) => setSelected(prev => {
    if (prev.includes(f.id)) return prev.filter(x => x !== f.id);
    if (prev.length >= MAX_SELECT) { showToast(t.selectMax); return prev; }
    return [...prev, f.id];
  });
  const openFluid = (id) => { setGuide(null); setDetailId(id); };
  const clearFilters = () => { setFamilies([]); setBands([]); setPhBands([]); setContains([]); setSearchTerm(''); };

  const shown = useMemo(() => FLUIDS
    .filter(f => !families.length || families.includes(f.family))
    .filter(f => !bands.length || bands.includes(naBand(f)))
    .filter(f => !phBands.length || phBands.includes(phBandOf(f)))
    .filter(f => contains.every(k => hasIon(f, k)))
    .filter(f => countries.some(r => regStatus.includes(statusIn(f, r))))
    .filter(f => !searchTerm.trim() || matches(f, searchTerm.trim()))
    .sort((a, b) => SORTS[sortOrder](a, b) || SORTS.nameAsc(a, b)), [families, bands, phBands, contains, countries, regStatus, searchTerm, sortOrder]);

  const chips = [
    ...families.map(k => ({ key: 'fam-' + k, label: t.families[k], off: () => toggleIn(setFamilies)(k) })),
    ...bands.map(k => ({ key: 'na-' + k, label: 'Na ' + t.naBands[k], off: () => toggleIn(setBands)(k) })),
    ...phBands.map(k => ({ key: 'ph-' + k, label: 'pH ' + t.phBands[k], off: () => toggleIn(setPhBands)(k) })),
    ...contains.map(k => ({ key: 'has-' + k, label: t.containsLong[k], off: () => toggleIn(setContains)(k) })),

    ...(searchTerm.trim() ? [{ key: 'search', label: '“' + searchTerm.trim() + '”', off: () => setSearchTerm('') }] : []),
  ];
  const filterCount = families.length + bands.length + phBands.length + contains.length;
  const selFluids = selected.map(id => FLUIDS.find(f => f.id === id));
  const detail = detailId ? FLUIDS.find(f => f.id === detailId) : null;
  const closeDetail = () => { setDetailId(null); if (/fluid=/.test(location.hash)) history.replaceState(null, '', location.pathname + location.search); };

  const groupBox = 'flex bg-white rounded-md border border-slate-200 p-0.5 shadow-sm shrink-0 items-center h-[26px] md:h-7 gap-0.5';
  const segBtn = 'h-full px-1.5 md:px-2 rounded flex items-center justify-center text-[10px] font-bold transition-all whitespace-nowrap';
  const groupLabel = (text, title) => <span className="pl-1 pr-0.5 text-[10px] font-bold text-slate-500 whitespace-nowrap" title={title}>{text}:</span>;
  const GUIDE_BTNS = [
    ['choose', 'bg-rose-600 hover:bg-rose-700 border-rose-700', ActivityIcon],
    ['maint', 'bg-emerald-700 hover:bg-emerald-800 border-emerald-800', Stethoscope],
    ['sodium', 'bg-violet-600 hover:bg-violet-700 border-violet-700', ScaleIcon],
    ['kguide', 'bg-amber-700 hover:bg-amber-800 border-amber-800', ZapIcon],
    ['dka', 'bg-indigo-600 hover:bg-indigo-700 border-indigo-700', FlameIcon],
    ['water', 'bg-cyan-700 hover:bg-cyan-800 border-cyan-800', DropIcon],
    ['drip', 'bg-blue-600 hover:bg-blue-700 border-blue-700', DripIcon],
    ['gir', 'bg-teal-700 hover:bg-teal-800 border-teal-800', TrendingUpIcon],
    ['icp', 'bg-purple-700 hover:bg-purple-800 border-purple-800', BrainIcon],
    ['albumin', 'bg-fuchsia-700 hover:bg-fuchsia-800 border-fuchsia-800', DropletIcon],
  ];

  return (
    <div id="main-app-container" className="min-h-screen bg-slate-100 p-2 sm:p-4 md:p-8 font-sans text-slate-900 pb-32 text-sm md:text-base overflow-clip w-full relative">
      {toast && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-max max-w-[calc(100vw-1rem)] animate-in fade-in slide-in-from-top-5" data-toast>
          <div className="bg-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-slate-700">
            <span className="font-bold text-sm min-w-0 break-words">{toast}</span>
            <button onClick={() => setToast(null)} className="text-slate-400 hover:text-white shrink-0" aria-label={t.detailClose}><X className="w-4 h-4" /></button>
          </div>
        </div>
      )}

      {selFluids.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 p-2 z-40 flex justify-center animate-in slide-in-from-bottom-5">
          <div className="bg-slate-900 text-white px-2.5 py-2 rounded-xl shadow-2xl flex flex-col gap-1.5 w-full max-w-3xl border border-slate-700" data-select-bar>
            <div className="flex items-center gap-1.5 min-w-0">
              <Check className="w-3 h-3 text-emerald-400 shrink-0" />
              <h3 className="font-bold text-xs whitespace-nowrap">{selFluids.length} {t.selected}</h3>
              <p className="text-[10px] text-slate-400 leading-snug break-words min-w-0 flex-1">{selFluids.map(f => f.short).join(', ')}</p>
              <button onClick={() => setSelected([])} className="shrink-0 text-slate-400 hover:text-white px-1.5 py-0.5 text-[11px] font-medium transition-colors" data-bar-clear>{t.clear}</button>
            </div>
            <div className="grid grid-flow-col auto-cols-fr gap-1.5">
              <button onClick={() => setIsCompareOpen(true)} disabled={selFluids.length < 2} data-bar-compare className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed text-white min-w-0 px-1 py-1.5 rounded-lg font-bold transition-colors shadow-sm text-[10px] sm:text-[11px] leading-tight text-center flex items-center justify-center gap-1">
                <CompareIcon className="w-3 h-3 shrink-0" /> {t.compare}
              </button>
              <button onClick={() => { if (selFluids.length === 1) exportFluidToPng(selFluids[0], lang, t); else exportCompareToPng(selFluids, lang, t); }} data-bar-export-png title={t.exportPng} className="bg-emerald-600 hover:bg-emerald-500 text-white min-w-0 px-1 py-1.5 rounded-lg font-bold transition-colors shadow-sm text-[10px] sm:text-[11px] leading-tight text-center flex items-center justify-center gap-1">
                <DownloadIcon className="w-3 h-3 shrink-0" /> {t.exportPng}
              </button>
              <button onClick={() => setGuide('sodium')} data-bar-sodium className="bg-violet-600 hover:bg-violet-500 text-white min-w-0 px-1 py-1.5 rounded-lg font-bold transition-colors shadow-sm text-[10px] sm:text-[11px] leading-tight text-center flex items-center justify-center gap-1">
                <ScaleIcon className="w-3 h-3 shrink-0" /> {t.naChangeBtn}
              </button>
            </div>
          </div>
        </div>
      )}

      {isChangelogOpen && (
        <Modal title={t.changelogTitle} sub={t.changelogSub} onClose={() => setIsChangelogOpen(false)} attrs={{ 'data-changelog': '' }} icon={<div className="p-2 bg-slate-200 text-slate-700 rounded-xl shrink-0"><HistoryIcon className="w-5 h-5" /></div>}>
          {changelogData.map((log, idx) => { const lt = lang === 'th' ? CHANGELOG_TH[log.version] : null; const feats = lt ? lt.features : log.features; const fixes = lt ? lt.bugs : log.bugs; return (
            <div key={log.version} className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-sm relative">
              {idx === 0 && <div className="absolute top-0 right-0 bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-bl-lg rounded-tr-xl uppercase tracking-widest">{t.latest}</div>}
              <div className="flex items-baseline justify-between mb-3 border-b border-slate-100 pb-3 pr-14">
                <h3 className="text-lg font-extrabold text-slate-800">{log.version}</h3>
                <span className="text-xs font-bold text-slate-400">{lang === 'th' ? thaiDate(log.date) : log.date}</span>
              </div>
              {feats.length > 0 && <div className="mb-2"><span className="text-[10px] font-bold text-indigo-500 uppercase tracking-wider mb-2 block">{t.newFeatures}</span><ul className="text-xs text-slate-700 space-y-1.5 pl-5 list-disc">{feats.map((x, i) => <li key={i}>{x}</li>)}</ul></div>}
              {fixes.length > 0 && <div><span className="text-[10px] font-bold text-rose-500 uppercase tracking-wider mb-2 block">{t.bugFixes}</span><ul className="text-xs text-slate-700 space-y-1.5 pl-5 list-disc">{fixes.map((x, i) => <li key={i}>{x}</li>)}</ul></div>}
            </div>
          ); })}
        </Modal>
      )}

      <div className="max-w-6xl mx-auto relative pt-10 md:pt-0">
        <div className="absolute top-0 right-0 flex items-center gap-1.5 md:gap-2 z-20" data-top-controls>
          <button onClick={() => setIsChangelogOpen(true)} data-version className="text-[10px] font-bold text-slate-500 bg-white shadow-sm px-2.5 py-1.5 rounded-full border border-slate-200 flex items-center gap-1.5 hover:bg-slate-50 hover:text-indigo-600 hover:border-indigo-200 transition-all cursor-pointer">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>{APP_VERSION}
          </button>
          <button onClick={() => setLang(lang === 'en' ? 'th' : 'en')} data-lang className="text-[10px] md:text-xs font-bold text-slate-700 bg-white shadow-sm px-2.5 py-1.5 rounded-full border border-slate-200 hover:bg-slate-50 transition-all cursor-pointer">{lang === 'en' ? 'ไทย' : 'EN'}</button>
          <button onClick={toggleTheme} data-theme-toggle aria-label={theme === 'dark' ? t.themeToLight : t.themeToDark} title={theme === 'dark' ? t.themeToLight : t.themeToDark} className="w-7 h-7 text-slate-600 bg-white shadow-sm rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:text-slate-700 transition-all cursor-pointer">
            {theme === 'dark' ? <SunIcon className="w-3.5 h-3.5" /> : <MoonIcon className="w-3.5 h-3.5" />}
          </button>
        </div>

        <header className="mb-3 md:mb-4">
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-800 mb-1 md:mb-2 leading-tight sm:pr-32 md:pr-48">{t.title}</h1>
          <p className="hidden sm:block text-xs md:text-sm text-slate-600">{t.subtitle}</p>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 sm:block">
            <p className="text-[10px] md:text-xs font-semibold text-indigo-600 sm:mt-1">{t.madeBy}</p>
            <a href="#disclaimer-heading" onClick={(e) => { e.preventDefault(); const el = document.getElementById('disclaimer-heading'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} className="block sm:mt-1 text-[11px] md:text-xs font-semibold text-amber-700 hover:underline">{t.discLink}</a>
          </div>
        </header>

        <div ref={barRef} className="sticky top-0 z-30 pt-2 pb-2 md:pt-3 md:pb-2.5 -mt-2 md:-mt-3 bg-slate-100/95 backdrop-blur-md" data-search-bar>
          <div className="grid grid-cols-3 gap-1 sm:flex sm:flex-row sm:flex-wrap sm:items-center sm:gap-2 w-full mb-2" data-guide-buttons>
            {GUIDE_BTNS.map(([k, tone, Icon]) => (
              <button key={k} onClick={() => setGuide(k)} data-guide={k} aria-label={t.guides[k]} title={t.guides[k]} className={`flex flex-col sm:flex-row min-w-0 items-center justify-center gap-0.5 sm:gap-1.5 md:gap-2 ${tone} border text-white px-0.5 py-1.5 sm:px-3 sm:py-2 md:px-4 rounded-lg font-bold shadow-sm transition-all active:scale-95 text-xs md:text-sm`}>
                <Icon className="w-4 h-4 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 shrink-0" /> <span className="text-[10px] leading-[1.15] text-center sm:text-[length:inherit] sm:leading-normal sm:whitespace-nowrap min-w-0 max-w-full break-words">{narrow ? t.guideShort[k] : t.guides[k]}</span>
              </button>
            ))}
          </div>
          <div className="flex gap-2 md:gap-3 w-full h-9 md:h-10">
            <button onClick={() => setSearchOpen(true)} aria-label={t.searchOpen} title={t.searchOpen} data-search-open
              className={`${searchOpen ? 'hidden' : 'flex sm:hidden'} shrink-0 h-full w-9 items-center justify-center rounded-lg border shadow-sm transition-colors ${searchTerm !== '' ? 'bg-indigo-600 border-indigo-600 text-white hover:bg-indigo-500' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}><Search className="w-4 h-4" /></button>
            <div className={`${searchOpen ? 'block flex-1' : 'hidden sm:block'} relative min-w-0 sm:flex-none sm:w-[45%] md:w-[40%] h-full`} data-search-box>
              <input ref={searchRef} type="text" data-search-input placeholder={narrow ? t.searchPlaceholderShort : t.searchPlaceholder} className="w-full h-full pl-3 pr-9 md:pl-4 md:pr-10 rounded-lg border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-base sm:text-xs md:text-sm" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onBlur={() => setSearchOpen(false)} onKeyDown={(e) => { if (e.key === 'Enter') e.currentTarget.blur(); }} />
              <Search className="hidden sm:block absolute right-2.5 md:right-3 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5 md:w-4 md:h-4 pointer-events-none" />
              <button onMouseDown={(e) => e.preventDefault()} onClick={() => { setSearchTerm(''); setSearchOpen(false); }} aria-label={t.searchClose} className="flex sm:hidden absolute right-1 top-1/2 -translate-y-1/2 w-7 h-7 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100"><X className="w-4 h-4" /></button>
            </div>
            <div className={`${searchOpen ? 'hidden sm:block' : 'block'} relative flex-1 min-w-0 h-full`}>
              <div className="absolute inset-y-0 left-0 pl-2 sm:pl-2.5 flex items-center pointer-events-none"><SortIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-slate-400" /></div>
              <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} aria-label={t.sortLabel} data-sort className="w-full h-full pl-6 pr-1 sm:pl-8 sm:pr-6 rounded-lg border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-slate-600 text-[11px] md:text-xs font-bold appearance-none cursor-pointer">
                <option value="type">{t.sortType}</option><option value="nameAsc">{t.sortNameAsc}</option><option value="naDesc">{t.sortNaDesc}</option><option value="naAsc">{t.sortNaAsc}</option><option value="clAsc">{t.sortClAsc}</option><option value="osmAsc">{t.sortOsmAsc}</option>
              </select>
            </div>
            <div className={`${searchOpen ? 'hidden sm:flex' : 'flex'} bg-white rounded-lg border border-slate-200 p-0.5 shadow-sm shrink-0 items-center h-full`}>
              <button onClick={() => setViewMode('grid')} data-view="grid" aria-pressed={viewMode === 'grid'} className={`h-full px-2 md:px-2.5 rounded-md transition-colors flex items-center justify-center ${viewMode === 'grid' ? 'bg-slate-100 text-slate-900' : 'text-slate-400 hover:text-slate-600'}`} aria-label={t.gridView}><LayoutGrid className="w-3.5 h-3.5 md:w-4 md:h-4" /></button>
              <button onClick={() => setViewMode('list')} data-view="list" aria-pressed={viewMode === 'list'} className={`h-full px-2 md:px-2.5 rounded-md transition-colors flex items-center justify-center ${viewMode === 'list' ? 'bg-slate-100 text-slate-900' : 'text-slate-400 hover:text-slate-600'}`} aria-label={t.listView}><ListIcon className="w-3.5 h-3.5 md:w-4 md:h-4" /></button>
            </div>
            <button onClick={() => setFiltersOpen(v => !v)} aria-expanded={filtersOpen} aria-label={t.filtersBtn} title={t.filtersBtn} data-filters-toggle
              className={`${searchOpen ? 'hidden sm:flex' : 'flex'} shrink-0 h-full px-2 md:px-3 rounded-lg border shadow-sm items-center gap-1 md:gap-1.5 text-[10px] md:text-xs font-bold whitespace-nowrap transition-colors ${filterCount ? 'bg-indigo-600 border-indigo-600 text-white hover:bg-indigo-500' : filtersOpen ? 'bg-slate-100 border-slate-300 text-slate-900' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 md:w-3.5 md:h-3.5" aria-hidden="true"><path d="M3 5h18l-7 8.5V19l-4 2v-7.5z" /></svg>
              <span className="max-[359px]:hidden">{t.filtersBtn}</span>{filterCount > 0 && <span className="tabular-nums" data-filter-count>{filterCount}</span>}
            </button>
          </div>
        </div>

        <div id="filter-bar" className={`${filtersOpen ? 'flex' : 'hidden'} sticky z-20 max-h-[70vh] overflow-y-auto sm:max-h-none sm:overflow-visible pb-2 md:pb-3 mb-3 md:mb-5 bg-slate-100/95 backdrop-blur-md border-b border-slate-200/50 flex-col gap-2`} style={{ top: barH - 1 }} data-filter-bar>
          <div className="flex flex-wrap items-center gap-1.5 md:gap-2 w-full min-w-0" data-filter-row="registration">
            <div className={groupBox} role="group" aria-label={t.countriesLabel}>
              {groupLabel(t.countriesLabel)}
              <button onClick={toggleAllCountries} aria-pressed={allCountries} title={t.countriesAllTitle} data-country-all className={`${segBtn} ${allCountries ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-50'}`}>{t.countriesAll}</button>
              {REGIONS.map(r => <button key={r} onClick={() => toggleCountry(r)} aria-pressed={countries.includes(r)} title={t.countryNames[r]} data-filter-country={r} className={`${segBtn} ${countries.includes(r) ? COUNTRY_COLORS[r].on : COUNTRY_COLORS[r].off}`}>{t.countryCodes[r]}</button>)}
            </div>
            <div className={groupBox} role="group" aria-label={t.regTitle} title={t.regTitle}>
              <span className="pl-1 pr-0.5 text-[10px] font-bold text-slate-500 whitespace-nowrap inline-flex items-center gap-0.5">{t.regLabel}<Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-emerald-600" /></span>
              {REG_STATUSES.map(k => { const on = regStatus.includes(k); const tone = k === 'current' ? ['bg-emerald-700 text-white shadow-sm', 'text-emerald-800 hover:bg-emerald-50'] : k === 'past' ? ['bg-amber-700 text-white shadow-sm', 'text-amber-800 hover:bg-amber-50'] : ['bg-slate-700 text-white shadow-sm', 'text-slate-700 hover:bg-slate-50']; return (
                <button key={k} onClick={() => toggleRegStatus(k)} aria-pressed={on} data-filter-reg={k} className={`${segBtn} gap-1 ${on ? tone[0] : tone[1]}`}>{k !== 'current' && <span aria-hidden="true">{k === 'past' ? '†' : '⊘'}</span>}{t.regOpts[k]}</button>); })}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-1.5 md:gap-2 w-full min-w-0">
            <div className={groupBox} role="group" aria-label={t.typeLabel}>
              {groupLabel(t.typeLabel)}
              {FAMILIES.map(k => { const on = families.includes(k); return (
                <button key={k} onClick={() => toggleIn(setFamilies)(k)} aria-pressed={on} data-filter-family={k} className={`${segBtn} ${on ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-50'}`}>
                  <span className="w-1.5 h-1.5 rounded-full mr-1 shrink-0" style={{ background: FAMILY_STYLE[k].hex }} aria-hidden="true"></span>{t.families[k]}
                </button>); })}
            </div>
            <div className={groupBox} role="group" aria-label={t.naTitle} title={t.naTitle}>
              {groupLabel(t.naLabel, t.naTitle)}
              {NA_BANDS.map(k => { const on = bands.includes(k); return <button key={k} onClick={() => toggleIn(setBands)(k)} aria-pressed={on} data-filter-band={k} className={`${segBtn} ${on ? NA_BAND_STYLE[k][0] : NA_BAND_STYLE[k][1]}`}>{t.naBands[k]}</button>; })}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-1.5 md:gap-2 w-full min-w-0">
            <div className={groupBox} role="group" aria-label={t.phTitle} title={t.phTitle}>
              {groupLabel(t.phLabel, t.phTitle)}
              {PH_BANDS.map(k => { const on = phBands.includes(k); return <button key={k} onClick={() => toggleIn(setPhBands)(k)} aria-pressed={on} data-filter-ph={k} className={`${segBtn} ${on ? PH_BAND_STYLE[k][0] : PH_BAND_STYLE[k][1]}`}>{t.phBands[k]}</button>; })}
            </div>
            <div className={groupBox} role="group" aria-label={t.containsLabel}>
              {groupLabel(t.containsLabel)}
              {CONTAINS.map(k => { const on = contains.includes(k); return <button key={k} onClick={() => toggleIn(setContains)(k)} aria-pressed={on} data-filter-has={k} title={t.containsLong[k]} className={`${segBtn} ${on ? 'bg-cyan-700 text-white shadow-sm' : 'text-cyan-800 hover:bg-cyan-50'}`}>{t.contains[k]}</button>; })}
            </div>
          </div>
        </div>

        <div className={`${filtersOpen ? '-mt-1 md:-mt-2' : 'mt-1 md:mt-1.5'} mb-2 md:mb-3 px-0.5`}>
          {chips.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 mb-1.5" role="group" aria-label={t.chipsLabel} data-active-filters>
              <button onClick={clearFilters} title={t.clearFilters} data-clear-filters className="shrink-0 min-h-[26px] px-2.5 rounded-full border border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100 shadow-sm inline-flex items-center gap-1 text-[11px] font-bold whitespace-nowrap transition-colors"><X className="w-3 h-3" /> {t.clearShort}</button>
              {chips.map(c => (
                <button key={c.key} onClick={c.off} data-chip={c.key} title={t.chipRemove(c.label)} aria-label={t.chipRemove(c.label)} className="max-w-full min-h-[26px] inline-flex items-center gap-1 pl-2.5 pr-1.5 py-0.5 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-800 hover:bg-indigo-100 text-[11px] font-bold leading-tight text-left transition-colors">
                  <span className="break-words min-w-0">{c.label}</span><X className="w-3 h-3 shrink-0 opacity-60" />
                </button>
              ))}
            </div>
          )}
          <div className="flex items-start justify-between gap-2">
            <div className="text-[11px] md:text-xs text-slate-600 min-w-0 pt-0.5" aria-live="polite" data-count>
              {t.countShowing} <span className="font-bold text-slate-800 tabular-nums">{shown.length}</span> {t.countOf} <span className="font-bold text-slate-800 tabular-nums">{FLUIDS.length}</span> {t.countFluids}
            </div>
            <button onClick={() => setIsLegendOpen(true)} data-legend-btn title={t.legendTitle} className="shrink-0 inline-flex items-center gap-1 h-6 md:h-7 px-2 rounded-md border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 shadow-sm text-[11px] font-bold whitespace-nowrap transition-colors">
              <InfoIcon className="w-3 h-3" /> {t.legendBtn}
            </button>
          </div>
        </div>

        {shown.length === 0 ? (
          <div className="py-12 md:py-16 text-center text-slate-500 bg-white rounded-xl md:rounded-2xl border border-slate-200 border-dashed" data-empty>
            <Search className="w-8 h-8 md:w-10 md:h-10 text-slate-300 mx-auto mb-3" />
            <p className="text-base md:text-lg font-medium" data-empty-note>{countries.length ? t.noFluids : t.noCountry}</p>
            <button onClick={clearFilters} className="mt-2 text-blue-600 hover:underline text-sm md:text-base">{t.clearFilters}</button>
          </div>
        ) : (
          <div id="fluid-list" className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5' : 'flex flex-col gap-2 md:gap-3'} data-view-mode={viewMode}>
            {shown.map(f => { const Comp = viewMode === 'grid' ? FluidCard : FluidRow; return (
              <Comp key={f.id} f={f} t={t} regions={countries} selected={selected.includes(f.id)} highlight={highlightId === f.id} onSelect={() => toggleSelect(f)} onDetails={() => setDetailId(f.id)} />
            ); })}
          </div>
        )}

        <DisclaimerSection t={t} />
        <ReferencesSection t={t} />
      </div>

      {detail && <FluidDetailModal f={detail} t={t} onClose={closeDetail} selected={selected.includes(detail.id)} onSelect={() => toggleSelect(detail)} />}
      {isCompareOpen && selFluids.length >= 2 && <CompareModal list={selFluids} t={t} onClose={() => setIsCompareOpen(false)} onRemove={(id) => setSelected(prev => prev.filter(x => x !== id))} />}
      {isLegendOpen && <LegendModal t={t} onClose={() => setIsLegendOpen(false)} />}
      {guide === 'choose' && <ChooseGuide lang={lang} t={t} onClose={() => setGuide(null)} onOpenFluid={openFluid} onOpenGuide={setGuide} />}
      {guide === 'maint' && <MaintGuide lang={lang} t={t} onClose={() => setGuide(null)} />}
      {guide === 'sodium' && <SodiumGuide lang={lang} t={t} onClose={() => setGuide(null)} selectedIds={selected} onOpenFluid={openFluid} />}
      {guide === 'kguide' && <PotassiumGuide lang={lang} t={t} onClose={() => setGuide(null)} onOpenFluid={openFluid} />}
      {guide === 'dka' && <DkaGuide lang={lang} t={t} onClose={() => setGuide(null)} onOpenFluid={openFluid} />}
      {guide === 'water' && <WaterGuide lang={lang} t={t} onClose={() => setGuide(null)} onOpenFluid={openFluid} />}
      {guide === 'drip' && <DripGuide lang={lang} t={t} onClose={() => setGuide(null)} />}
      {guide === 'gir' && <GirGuide lang={lang} t={t} onClose={() => setGuide(null)} onOpenFluid={openFluid} />}
      {guide === 'icp' && <IcpGuide lang={lang} t={t} onClose={() => setGuide(null)} onOpenFluid={openFluid} />}
      {guide === 'albumin' && <AlbuminGuide lang={lang} t={t} onClose={() => setGuide(null)} onOpenFluid={openFluid} />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
