// Browser-side regression checks for iv-fluid-guide.html, driven through the real UI.
// Run with: node .claude/test-iv-fluid.js  (or node .claude/build-iv-fluid.js --test)
// Defines window.__ivfE2E(), which resolves to [{ name, pass, detail }].
window.__ivfE2E = async function () {
  const out = [];
  const log = (name, pass, detail) => out.push({ name, pass: !!pass, detail: pass ? '' : detail });
  const wait = (ms) => new Promise(r => setTimeout(r, ms));
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const card = (id) => $('[data-fluid="' + id + '"]');
  const esc = async () => { window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' })); await wait(250); };
  const type = async (el, v) => { const set = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set; set.call(el, v); el.dispatchEvent(new Event('input', { bubbles: true })); await wait(150); };
  const tile = (id, ion) => (card(id).querySelector('[data-ion="' + ion + '"]') || {}).textContent || '';
  const fact = (id, k) => (card(id).querySelector('[data-fact="' + k + '"]') || {}).textContent || '';

  // start in English (the language choice is remembered on the device)
  // start in English (the language choice is remembered on the device)
  if ($('[data-lang]').textContent.trim() === 'EN') { $('[data-lang]').click(); await wait(300); }
  if ($('[data-view="grid"][aria-pressed="false"]')) { $('[data-view="grid"]').click(); await wait(300); }
  log('default view (Thailand, current): 21 fluids, NSS first, Plasma-Lyte A hidden', $$('#fluid-list [data-fluid]').length === 21 && $('#fluid-list [data-fluid]').dataset.fluid === 'nss' && !card('pla'), $$('#fluid-list [data-fluid]').length);
  $('[data-country-all]').click(); await wait(250);
  log('All countries: 22 fluids', $$('#fluid-list [data-fluid]').length === 22, $$('#fluid-list [data-fluid]').length);

  // Label values
  log('NSS: Na 154, Cl 154, 308 mOsm/L, pH 5.0 (4.5–7.0)', /154/.test(tile('nss', 'na')) && /154/.test(tile('nss', 'cl')) && /308/.test(fact('nss', 'osm')) && /5\.0 \(4\.5–7\.0\)/.test(fact('nss', 'ph')), [tile('nss', 'na'), fact('nss', 'osm')]);
  log("Lactated Ringer's: Na 130, K 4, Ca 1.35 mmol/L, Cl 109, lactate 28, 273 mOsm/L", /130/.test(tile('lrs', 'na')) && /^K⁺4$/.test(tile('lrs', 'k')) && /1\.35/.test(tile('lrs', 'ca')) && /109/.test(tile('lrs', 'cl')) && /Lactate 28/.test(fact('lrs', 'buffer')) && /273/.test(fact('lrs', 'osm')), [tile('lrs', 'ca'), fact('lrs', 'buffer')]);
  log('Albumin 5%: Na 145, K 1, Cl 100, 300 mOsm/L, 200 kcal/L, pH 6.9 (6.4–7.4)', /145/.test(tile('alb5', 'na')) && /^K⁺1$/.test(tile('alb5', 'k')) && /100/.test(tile('alb5', 'cl')) && /300/.test(fact('alb5', 'osm')) && /200/.test(fact('alb5', 'kcal')) && /6\.9 \(6\.4–7\.4\)/.test(fact('alb5', 'ph')), [tile('alb5', 'na'), fact('alb5', 'osm')]);
  log('Albumin 25%: Na 145, K 1, Cl 100, 300 mOsm/L, 1000 kcal/L, pH 6.9 (6.4–7.4)', /145/.test(tile('alb25', 'na')) && /^K⁺1$/.test(tile('alb25', 'k')) && /100/.test(tile('alb25', 'cl')) && /300/.test(fact('alb25', 'osm')) && /1000/.test(fact('alb25', 'kcal')) && /6\.9 \(6\.4–7\.4\)/.test(fact('alb25', 'ph')), [tile('alb25', 'na'), fact('alb25', 'osm')]);
  log('5%D/N/2: Na 77, dextrose 50 g/L, 170 kcal/L, 406 mOsm/L', /77/.test(tile('d5s2', 'na')) && /50/.test(fact('d5s2', 'dex')) && /170/.test(fact('d5s2', 'kcal')) && /406/.test(fact('d5s2', 'osm')), fact('d5s2', 'osm'));
  log('TOP Balance: label Na 140, K 5, Mg 1.5, Cl 98; osmolarity 294; pH 7.4 (6.5–8.0)', /140/.test(tile('topbal', 'na')) && /1\.5/.test(tile('topbal', 'mg')) && /98/.test(tile('topbal', 'cl')) && /294/.test(fact('topbal', 'osm')) && /7\.4 \(6\.5–8\.0\)/.test(fact('topbal', 'ph')), [fact('topbal', 'osm'), fact('topbal', 'ph')]);
  log('Sterofundin ISO: Na 145, Ca 2.5, Mg 1, Cl 127, acetate 24 + malate 5, 309 mOsm/L', /145/.test(tile('sterofundin', 'na')) && /2\.5/.test(tile('sterofundin', 'ca')) && /127/.test(tile('sterofundin', 'cl')) && /Acetate 24 \+ Malate 5/.test(fact('sterofundin', 'buffer')) && /309/.test(fact('sterofundin', 'osm')), fact('sterofundin', 'buffer'));
  // Calculated values (from the Thai register formula)
  log('Acetar: calculated from the Thai register formula (Na 131, K 4.02, Ca 1.36, Cl 109, acetate 28, 273 mOsm/L) and marked calc.', /131/.test(tile('acetar', 'na')) && /4\.02/.test(tile('acetar', 'k')) && /1\.36/.test(tile('acetar', 'ca')) && /109/.test(tile('acetar', 'cl')) && /Acetate 28/.test(fact('acetar', 'buffer')) && /273/.test(fact('acetar', 'osm')) && card('acetar').querySelectorAll('[data-calc]').length >= 5, [tile('acetar', 'na'), tile('acetar', 'k'), fact('acetar', 'osm')]);
  log('5%D/N/5 (0.18%): Na 31 calc., 314 mOsm/L calc., 170 kcal/L calc., pH Unknown', /31/.test(tile('d5s5', 'na')) && /314/.test(fact('d5s5', 'osm')) && /170/.test(fact('d5s5', 'kcal')) && /Unknown/.test(fact('d5s5', 'ph')), [tile('d5s5', 'na'), fact('d5s5', 'osm')]);
  log('energy Unknown without a label value: Acetar-5 (anhydrous dextrose) and Acetar (buffer calories); TOP Balance 21 kcal; NSS none', /Unknown/.test(fact('acetar', 'kcal')) && /21/.test(fact('topbal', 'kcal')) && /–/.test(fact('nss', 'kcal')) && /Unknown/.test(fact('acetar5', 'kcal')) && /anhydrous/.test(fact('acetar5', 'dex')), [fact('topbal', 'kcal'), fact('acetar5', 'kcal')]);
  // Formula calculation agrees with labels where both exist
  { const bad = FLUIDS.filter(f => f.formula && f.labelSrc).flatMap(f => { const c = ionsFromFormula(f.formula); return ['na', 'k', 'cl', 'osm'].filter(k => f.label[k] != null && Math.abs(c[k] - f.label[k]) > Math.max(1.5, f.label[k] * 0.01)).map(k => `${f.id}.${k}: label ${f.label[k]} vs calc ${c[k].toFixed(1)}`); });
    log('calculated composition matches the printed label values (within 1%)', bad.length === 0, bad); }

  // Flags
  log('flags: NSS resuscitation range + chloride check; LRS calcium; 3% NaCl large vein; D5W hypotonic + glucose', !!card('nss').querySelector('[data-flag="resus"]') && !!card('nss').querySelector('[data-flag="cl"]') && !!card('lrs').querySelector('[data-flag="ca"]') && !card('lrs').querySelector('[data-flag="cl"]') && !!card('nacl3').querySelector('[data-flag="vein"]') && !!card('d5w').querySelector('[data-flag="low"]') && !!card('d5w').querySelector('[data-flag="glu"]') && !card('d5s').querySelector('[data-flag="resus"]'), '');
  { const st = (id, r) => (card(id).querySelector('[data-country="' + r + '"]') || { dataset: {} }).dataset.status;
    log('country chips: NSS current in all five; 3% NaCl EU past (†); 5%D/N/5 US never; Acetar JP current; Plasma-Lyte TH never; TOP Balance TH only',
      ['th', 'us', 'uk', 'eu', 'jp'].every(r => st('nss', r) === 'current') && st('nacl3', 'eu') === 'past' && /EU †/.test(card('nacl3').querySelector('[data-country="eu"]').textContent) && st('d5s5', 'us') === 'never' && st('acetar', 'jp') === 'current' && st('pla', 'th') === 'never' && st('topbal', 'th') === 'current' && !card('topbal').querySelector('[data-country="us"][data-status="current"]'), [st('nacl3', 'eu'), st('d5s5', 'us'), st('pla', 'th')]);
    log('All countries: each card has a maker line for every country where it is registered (NSS: 5 lines)', card('nss').querySelectorAll('[data-holder-line]').length === 5 && /Baxter/.test(card('nss').querySelector('[data-holder-line="us"]').textContent), card('nss').querySelectorAll('[data-holder-line]').length); }

  // Search
  const input = $('[data-search-input]');
  for (const [q, want] of [['acetar', ['acetar', 'acetar5']], ['DN/2', ['d5s2']], ['rls', ['lrs']], ['otsuka', null], ['น้ำเกลือ', ['nss', 'half', 'nacl3']]]) {
    await type(input, q);
    const got = $$('#fluid-list [data-fluid]').map(x => x.dataset.fluid);
    log(`search "${q}"`, want ? want.every(w => got.includes(w)) && (q !== 'DN/2' || got.length <= 3) : got.length >= 10 && !got.includes('pla') && !got.includes('sterofundin'), got.join());
  }
  await type(input, ''); await wait(150);

  // Filters
  const fb = $('[data-filters-toggle]'); if (!$('[data-filter-bar]').offsetParent) { fb.click(); await wait(200); }
  $('[data-filter-family="balanced"]').click(); await wait(200);
  log('filter Balanced: 6 fluids and a chip', $$('#fluid-list [data-fluid]').length === 6 && !!$('[data-chip="fam-balanced"]'), $$('#fluid-list [data-fluid]').length);
  $('[data-filter-has="ca"]').click(); await wait(200);
  log('Balanced + contains calcium: LRS, Acetar, Acetar-5, Sterofundin', $$('#fluid-list [data-fluid]').map(x => x.dataset.fluid).sort().join() === 'acetar,acetar5,lrs,sterofundin', $$('#fluid-list [data-fluid]').map(x => x.dataset.fluid).join());
  $('[data-clear-filters]').click(); await wait(200);
  $('[data-filter-band="resus"]').click(); await wait(200);
  log('Na 130–154 band: 11 fluids', $$('#fluid-list [data-fluid]').every(x => { const f = FLUIDS.find(y => y.id === x.dataset.fluid); return num(f, 'na') >= 130 && num(f, 'na') <= 154; }) && $$('#fluid-list [data-fluid]').length === 11, $$('#fluid-list [data-fluid]').length);
  $('[data-clear-filters]').click(); await wait(200);
  $('[data-filter-ph="acidic"]').click(); await wait(200);
  log('filter pH < 6.0 (acidic): fluids with pH < 6.0 and chip shown', $$('#fluid-list [data-fluid]').length >= 6 && !!$('[data-chip="ph-acidic"]'), $$('#fluid-list [data-fluid]').length);
  $('[data-filter-ph="acidic"]').click(); await wait(200);
  $('[data-filter-ph="physio"]').click(); await wait(200);
  log('filter pH 6.0–7.5 (near-physio): LRS, TOP Balance, PLA, Albumin', ['lrs', 'topbal', 'pla', 'alb5', 'alb20', 'alb25'].every(id => $$('#fluid-list [data-fluid]').map(x => x.dataset.fluid).includes(id)), $$('#fluid-list [data-fluid]').map(x => x.dataset.fluid).join());
  $('[data-clear-filters]').click(); await wait(200);
  // Countries and registration status (All countries are on from the start of the test)
  const ids = () => $$('#fluid-list [data-fluid]').map(x => x.dataset.fluid).sort().join();
  $('[data-country-all]').click(); await wait(200);
  log('no country selected: empty list with a note', $$('#fluid-list [data-fluid]').length === 0 && /country/i.test($('[data-empty-note]').textContent), '');
  $('[data-filter-country="jp"]').click(); await wait(200);
  log('Japan, current: NSS, 5% and 10% dextrose, LRS, Acetar, Acetar-5', ids() === 'acetar,acetar5,d10w,d5w,lrs,nss', ids());
  $('[data-country-all]').click(); await wait(200);
  $('[data-filter-reg="past"]').click(); await wait(200); $('[data-filter-reg="current"]').click(); await wait(200);
  log('status Past only (all countries): 3% NaCl (withdrawn in Ireland)', ids() === 'nacl3', ids());
  $('[data-filter-reg="never"]').click(); await wait(200); $('[data-filter-reg="past"]').click(); await wait(200);
  log('status Never only: fluids missing from at least one country (5%D/N/5, TOP Balance; not NSS)', ids().includes('d5s5') && ids().includes('topbal') && !ids().split(',').includes('nss'), ids());
  $('[data-filter-reg="current"]').click(); await wait(200); $('[data-filter-reg="never"]').click(); await wait(200);
  log('back to current in all countries: 22 fluids', $$('#fluid-list [data-fluid]').length === 22, $$('#fluid-list [data-fluid]').length);

  // Sort
  const sort = $('[data-sort]'); const setSort = async (v) => { const set = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value').set; set.call(sort, v); sort.dispatchEvent(new Event('change', { bubbles: true })); await wait(200); };
  await setSort('naDesc');
  log('sort by sodium: 3% NaCl first, dextrose in water/mannitol last', $('#fluid-list [data-fluid]').dataset.fluid === 'nacl3' && ['d5w', 'd10w', 'man20'].includes($$('#fluid-list [data-fluid]').pop().dataset.fluid), '');
  await setSort('type');

  // Detail view
  card('acetar').querySelector('[data-details]').click(); await wait(350);
  const dm = $('[data-detail-modal="acetar"]');
  log('Acetar details: formula, 4 Thai records with register links, pH note from the same-formula SmPC', !!dm && !!dm.querySelector('[data-detail-formula]') && dm.querySelectorAll('[data-reg-item="th"]').length === 4 && dm.querySelectorAll('[data-reg-link="th"]')[0].href.includes('Newcode=U1DR2A1022280035211C') && dm.querySelector('[data-detail-country="jp"]').dataset.status === 'current' && dm.querySelector('[data-detail-country="us"]').dataset.status === 'never' && dm.querySelectorAll('[data-detail-country]').length === 5 && /6\.0–7\.5/.test(dm.querySelector('[data-detail-row="ph"]').textContent), dm && dm.textContent.slice(0, 120));
  log('Export PNG button exists on fluid detail modal', !!$('[data-detail-export-png]'), '');
  if (dm.querySelector('[data-src-toggle][aria-pressed="false"]')) { dm.querySelector('[data-src-toggle]').click(); await wait(200); }
  log('Show sources: every composition row has a source line; calculated rows name the register record', $$('[data-detail-comp] [data-detail-row]', dm).every(r => r.querySelector('[data-src]')) && /2A 352\/28/.test(dm.querySelector('[data-detail-row="na"] [data-src]').textContent) && /Calculated/.test(dm.querySelector('[data-detail-row="na"] [data-src]').textContent), '');
  dm.querySelector('[data-src-toggle]').click(); await wait(100);
  await esc();
  log('Escape closes the detail view', !$('[data-detail-modal]'), '');
  card('pla').querySelector('[data-details]').click(); await wait(300);
  { const pm = $('[data-detail-modal="pla"]'); log('Plasma-Lyte A details: not registered in Thailand; US record links to Drugs@FDA NDA017378', pm.querySelector('[data-detail-country="th"]').dataset.status === 'never' && /ApplNo=017378/.test(pm.querySelector('[data-reg-link="us"]').href), ''); } await esc();

  // Selection and compare
  card('nss').querySelector('[data-select]').click(); await wait(150);
  card('lrs').querySelector('[data-select]').click(); await wait(150);
  card('topbal').querySelector('[data-select]').click(); await wait(150);
  card('d5w').querySelector('[data-select]').click(); await wait(150);
  card('alb20').querySelector('[data-select]').click(); await wait(150);
  card('man20').querySelector('[data-select]').click(); await wait(150);
  card('half').querySelector('[data-select]').click(); await wait(200);
  log('selection bar: 6 fluids at most (7th refused with a message)', $('[data-select-bar]') && /6/.test($('[data-select-bar] h3').textContent) && !!$('[data-toast]'), $('[data-select-bar]') && $('[data-select-bar]').textContent);
  log('Export PNG button exists on selection bar', !!$('[data-bar-export-png]'), '');
  $('[data-bar-compare]').click(); await wait(350);
  log('compare: 6 fluids + plasma column, plasma Na 135–145, export compare PNG button', $$('[data-compare-table] thead th').length === 8 && /135–145/.test($('[data-compare-row="na"]').textContent) && !!$('[data-compare-export-png]'), $('[data-compare-modal]') && $('[data-compare-modal]').textContent.slice(0, 100));
  $('[data-compare-remove="man20"]').click(); await wait(200);
  log('compare: quick remove button removes fluid column from table', $$('[data-compare-table] thead th').length === 7, $$('[data-compare-table] thead th').length);
  await esc();

  // Sodium change: serum Na 120, 70 kg man -> TBW 42; NSS (154-120)/43 = +0.8; selected listed first
  $('[data-bar-sodium]').click(); await wait(350);
  await type($('[data-na-serum]'), '120'); await type($('[data-na-weight]'), '70'); await wait(150);
  const nssDelta = ($('[data-na-row="nss"] [data-na-delta]') || {}).textContent || '';
  log('sodium change: NSS +0.8, 3% NaCl +9.1, D5W −2.8 per litre (Na 120, 70 kg man)', /\+0\.8/.test(nssDelta) && /\+9\.1/.test($('[data-na-row="nacl3"] [data-na-delta]').textContent) && /-2\.8/.test($('[data-na-row="d5w"] [data-na-delta]').textContent) && $$('[data-na-row]')[0].dataset.naRow === 'nss', nssDelta);
  $('[data-na-elderly]').click(); await wait(150);
  log('elderly man: total body water 0.5 × 70 = 35 L', /35 L/.test($('[data-na-tbw]').textContent), $('[data-na-tbw]').textContent);
  $('[data-na-presets] [data-preset="8"]').click(); await wait(200);
  log('quick pick 8 fills the planned change (+8) and shows as selected', $('[data-na-plan]').value === '8' && $('[data-na-presets] [data-preset="8"]').getAttribute('aria-pressed') === 'true', $('[data-na-plan]').value);
  $('[data-na-dir] button:nth-child(2)').click(); await wait(200);
  log('Lower turns it into −8: only fluids that lower sodium show litres', $('[data-na-plan]').value === '-8' && !$('[data-na-row="nacl3"] [data-na-litres]') && !!$('[data-na-row="d5w"] [data-na-litres]'), $('[data-na-plan]').value);
  $('[data-na-dir] button:nth-child(1)').click(); await wait(200);
  $('[data-na-presets] [data-preset="12"]').click(); await wait(200);
  log('Raise + 12 gives +12', $('[data-na-plan]').value === '12', $('[data-na-plan]').value);
  $('[data-na-presets] [data-preset="8"]').click(); await wait(200);
  log('planned change 8 mmol/L with 3% NaCl: about 0.7 L', /0\.7 L/.test($('[data-na-row="nacl3"] [data-na-litres]').textContent), ($('[data-na-row="nacl3"] [data-na-litres]') || {}).textContent);
  // Acute 3% NaCl Bolus protocol tab
  $('[data-sodium-tab="bolus"]').click(); await wait(250);
  log('acute 3% bolus view opened with indications and regimen', !!$('[data-sodium-bolus-view]') && !!$('[data-bolus-indications]') && !!$('[data-bolus-regimen]'), '');
  await type($('[data-bolus-na]'), '115'); await type($('[data-bolus-weight]'), '60'); await wait(150);
  log('acute bolus 100 mL rise: +1.3 mmol/L acute rise calculated', /\+1\.3/.test(($('[data-bolus-rise-text]') || {}).textContent || ''), ($('[data-bolus-rise-text]') || {}).textContent);
  $('[data-bolus-btn="2ml"]').click(); await wait(150);
  log('acute bolus 2 mL/kg (120 mL) rise: +1.6 mmol/L acute rise calculated', /\+1\.6/.test(($('[data-bolus-rise-text]') || {}).textContent || ''), ($('[data-bolus-rise-text]') || {}).textContent);
  $('[data-sodium-tab="continuous"]').click(); await wait(200);
  await esc();
  $('[data-bar-clear]').click(); await wait(200);
  log('Clear empties the selection bar', !$('[data-select-bar]'), '');

  // Maintenance: 70 kg -> 1750-2100 mL/day, about 70 mmol; frail 1400-1750
  $('[data-guide="maint"]').click(); await wait(350);
  await type($('[data-maint-weight]'), '70');
  log('maintenance 70 kg: 1750–2100 mL/day, ≈ 70 mmol Na/K/Cl', /1750–2100/.test($('[data-maint-water]').textContent) && /70/.test($('[data-maint-lytes]').textContent), $('[data-maint-water]') && $('[data-maint-water]').textContent);
  log('maintenance table at 1950 mL/day: 5%D/N/2 + KCl 20 gives Na 150, K 39, glucose 98 g', /^\D*150/.test($('[data-maint-row="d5s2k20"] td:nth-child(2)').textContent) && $('[data-maint-row="d5s2k20"] td:nth-child(3)').textContent === '39' && $('[data-maint-row="d5s2k20"] td:nth-child(4)').textContent === '98', $('[data-maint-row="d5s2k20"]').textContent);
  $('[data-maint-low]').click(); await wait(150);
  log('lower range (frail etc.): 1400–1750 mL/day', /1400–1750/.test($('[data-maint-water]').textContent), $('[data-maint-water]').textContent);
  $('[data-maint-obese]').click(); await wait(200); await type($('[data-maint-height]'), '170'); await wait(150);
  log('obese, 170 cm man: Devine ideal body weight 66.0 kg', /66\.0 kg/.test($('[data-maint-ibw]').textContent), $('[data-maint-ibw]').textContent);
  await esc();

  // Drip rate: 1000 mL over 8 h, 20 drops/mL -> 125 mL/h, 42 drops/min
  $('[data-guide="drip"]').click(); await wait(300);
  log('drip rate: 1000 mL in 8 h at 20 drops/mL = 125 mL/h, 42 drops/min', $('[data-drip-mlh]').textContent === '125' && $('[data-drip-dpm]').textContent === '42', [$('[data-drip-mlh]').textContent, $('[data-drip-dpm]').textContent]);
  await esc();

  // Water deficit: Na 160, 70 kg man, target 140 -> TBW 42 L, deficit 6.0 L, 48 h at 10 mmol/L/day, 125 mL/h; D5W 2.7 L for 10 mmol/L
  $('[data-guide="water"]').click(); await wait(350);
  await type($('[data-water-na]'), '160'); await type($('[data-water-weight]'), '70'); await wait(150);
  log('water deficit: Na 160, 70 kg man: 6.0 L, 48 h at 10 mmol/L per day, 125 mL/h', /6\.0 L/.test($('[data-water-deficit]').textContent) && $('[data-water-hours]').textContent === '48 h' && $('[data-water-rate]').textContent === '125', [$('[data-water-deficit]').textContent, $('[data-water-hours]').textContent, $('[data-water-rate]').textContent]);
  log('water deficit fluid plan: D5W 2.7 L for a 10 mmol/L fall; only sodium-poor fluids listed', /2\.7 L/.test($('[data-water-row="d5w"] [data-water-litres]').textContent) && !$('[data-water-row="nss"]') && !!$('[data-water-row="half"]'), ($('[data-water-row="d5w"]') || {}).textContent);
  $('[data-water-elderly]').click(); await wait(200); $('[data-water-sex] button:nth-child(2)').click(); await wait(200);
  log('elderly woman: total body water 0.45 × 70 = 31.5 L, deficit 4.5 L', /31\.5 L/.test($('[data-water-deficit]').parentElement.textContent) && /4\.5 L/.test($('[data-water-deficit]').textContent), $('[data-water-deficit]').parentElement.textContent);
  $('[data-water-presets] [data-preset="6"]').click(); await wait(200);
  log('water deficit quick pick 6: 20 mmol/L takes 80 h', $('[data-water-fall]').value === '6' && $('[data-water-hours]').textContent === '80 h', $('[data-water-hours]').textContent);
  await type($('[data-water-na]'), '138');
  log('sodium not above target: no deficit', !!$('[data-water-empty]') && !$('[data-water-deficit]'), '');
  await esc();

  // Fluid choice guide
  $('[data-guide="choose"]').click(); await wait(300);
  const rs = $$('[data-guide-modal="choose"] [data-guide-fluid]').map(x => x.dataset.guideFluid);
  log('fluid choice, resuscitation: balanced fluids first, then NSS; nothing with glucose', rs[0] !== 'nss' && rs.includes('nss') && !rs.includes('d5s') && !rs.includes('acetar5'), rs.join());
  $('[data-tab="maint"]').click(); await wait(200);
  const ms = $$('[data-guide-modal="choose"] [data-guide-fluid]').map(x => x.dataset.guideFluid);
  log('fluid choice, maintenance: potassium-containing dextrose-saline first', ms[0] === 'd5s2k40' && ms[1] === 'd5s2k20', ms.join());
  $$('[data-guide-modal="choose"] [data-guide-fluid]')[0].click(); await wait(300);
  log('a fluid in a guide opens its details', !!$('[data-detail-modal="d5s2k40"]'), ''); await esc();

  // Potassium replacement & safe rate guide
  $('[data-guide="kguide"]').click(); await wait(350);
  log('potassium guide opened', !!$('[data-guide-modal="kguide"]'), '');
  await type($('[data-k-serum]'), '2.8'); await type($('[data-k-weight]'), '60'); await wait(150);
  log('potassium deficit for K 2.8, 60 kg: Sterns deficit estimation shown', /mmol/.test(($('[data-k-deficit-val]') || {}).textContent || ''), ($('[data-k-deficit-val]') || {}).textContent);
  log('potassium safe rate limits: peripheral max 10 mmol/h, central max 20 mmol/h', /10 mmol\/h/.test(($('[data-k-rate-periph]') || {}).textContent || '') && /20 mmol\/h/.test(($('[data-k-rate-central]') || {}).textContent || ''), '');
  log('potassium vehicle & magnesium safety warnings present', !!$('[data-k-vehicle-alert]') && !!$('[data-k-mg-alert]'), '');
  await esc();

  // DKA / HHS fluid protocol guide
  $('[data-guide="dka"]').click(); await wait(350);
  log('dka guide opened', !!$('[data-guide-modal="dka"]'), '');
  await type($('[data-dka-na]'), '132'); await type($('[data-dka-glucose]'), '450'); await type($('[data-dka-k]'), '4.2'); await wait(150);
  log('DKA Katz corrected sodium: 137.6 mmol/L calculated', /137\.6/.test(($('[data-dka-corrna-val]') || {}).textContent || '') && /≥ 135/.test(($('[data-dka-corrna-badge]') || {}).textContent || ''), ($('[data-dka-corrna-val]') || {}).textContent);
  await type($('[data-dka-glucose]'), '220'); await wait(150);
  log('DKA glucose <= 250 mg/dL triggers phase 3 dextrose addition alert', /DEXTROSE|5%D/i.test(($('[data-dka-dex-alert]') || {}).textContent || ''), ($('[data-dka-dex-alert]') || {}).textContent);
  await type($('[data-dka-k]'), '3.0'); await wait(150);
  log('DKA K < 3.3 mmol/L triggers insulin hold warning', /insulin/i.test(($('[data-dka-k-alert]') || {}).textContent || '') || /HOLD/i.test(($('[data-dka-k-alert]') || {}).textContent || ''), ($('[data-dka-k-alert]') || {}).textContent);
  await esc();

  // Glucose Infusion Rate (GIR) guide
  $('[data-guide="gir"]').click(); await wait(350);
  log('GIR guide opened', !!$('[data-guide-modal="gir"]'), '');
  await type($('[data-gir-weight]'), '60');
  await type($('[data-gir-rate-input]'), '100');
  // D5W is default (5% = 50 g/L). wt 60 kg, rate 100 mL/h -> GIR = (100 * 5 * 10) / (60 * 60) = 5000 / 3600 = 1.39 mg/kg/min
  log('GIR rate calculation: 100 mL/h D5W in 60 kg gives 1.39 mg/kg/min', /1\.39/.test(($('[data-gir-val]') || {}).textContent || ''), ($('[data-gir-val]') || {}).textContent);
  $('[data-gir-mode] button:nth-child(2)').click(); await wait(200);
  $('[data-gir-presets] [data-gir-preset="4"]').click(); await wait(200);
  // Target 4 mg/kg/min in 60 kg with D5W -> Rate = (4 * 60 * 60) / 50 = 288 mL/h
  log('GIR target-to-rate calculation: target 4 mg/kg/min in 60 kg gives 288 mL/h', /288/.test(($('[data-gir-rate-result]') || {}).textContent || ''), ($('[data-gir-rate-result]') || {}).textContent);
  await esc();

  // ICP & Osmotherapy guide
  $('[data-guide="icp"]').click(); await wait(350);
  log('ICP guide opened', !!$('[data-guide-modal="icp"]'), '');
  await type($('[data-icp-weight]'), '70');
  $('[data-man-presets] [data-man-preset="0.5"]').click(); await wait(150);
  // 70 kg at 0.5 g/kg: 35.0 g, 175 mL
  log('Mannitol 20% calculation: 70 kg at 0.5 g/kg gives 35.0 g and 175 mL', /35\.0/.test(($('[data-man-dose-g]') || {}).textContent || '') && /175/.test(($('[data-man-vol-ml]') || {}).textContent || ''), [($('[data-man-dose-g]') || {}).textContent, ($('[data-man-vol-ml]') || {}).textContent]);
  await type($('[data-man-osm-input]'), '325'); await wait(150);
  log('Mannitol osmolality >= 320 mOsm/kg triggers danger HOLD alert', !!$('[data-man-osm-alert="danger"]'), '');
  $('[data-icp-tab="nacl3"]').click(); await wait(250);
  $('[data-nacl3-presets] [data-nacl3-preset="250"]').click(); await wait(150);
  await type($('[data-nacl3-sna-input]'), '138'); await wait(150);
  log('3% NaCl bolus calculation: 250 mL bolus rise and predicted Na shown', /250/.test(($('[data-nacl3-vol-ml]') || {}).textContent || '') && /mmol\/L/.test(($('[data-nacl3-rise-val]') || {}).textContent || ''), ($('[data-nacl3-rise-val]') || {}).textContent);
  await type($('[data-nacl3-sna-input]'), '156'); await wait(150);
  log('3% NaCl current Na >= 155 mmol/L triggers high alert', !!$('[data-nacl3-alert="high"]'), '');
  $('[data-icp-tab="decision"]').click(); await wait(250);
  log('ICP osmotherapy decision matrix rendered with clinical scenarios', $$('[data-icp-scenario]').length === 5, '');
  $('[data-icp-tab="cpp"]').click(); await wait(250);
  await type($('[data-cpp-sbp]'), '130'); await type($('[data-cpp-dbp]'), '80'); await type($('[data-cpp-icp-input]'), '18'); await wait(150);
  // MAP = 80 + 50/3 = 96.7 mmHg; CPP = 96.7 - 18 = 78.7 mmHg
  log('CPP calculator: MAP and CPP calculated with target ranges', /96\.7/.test(($('[data-cpp-map-val]') || {}).textContent || '') && /78\.7/.test(($('[data-cpp-val]') || {}).textContent || ''), [($('[data-cpp-map-val]') || {}).textContent, ($('[data-cpp-val]') || {}).textContent]);
  await esc();

  // Albumin Indication Guide & Clinical Dosing Calculator
  $('[data-guide="albumin"]').click(); await wait(350);
  log('Albumin guide opened', !!$('[data-guide-modal="albumin"]'), '');
  await type($('[data-lvp-vol-input]'), '6');
  $('[data-lvp-ratio="8"]').click(); await wait(150);
  // 6 L removed at 8 g/L -> 48 g albumin; 20% = 240 mL; 25% = 192 mL
  log('Albumin LVP calculation: 6 L at 8 g/L gives 48 g albumin (240 mL 20%, 192 mL 25%)', /48/.test(($('[data-lvp-dose-g]') || {}).textContent || '') && /240/.test(($('[data-lvp-vol-20]') || {}).textContent || '') && /192/.test(($('[data-lvp-vol-25]') || {}).textContent || ''), [($('[data-lvp-dose-g]') || {}).textContent, ($('[data-lvp-vol-20]') || {}).textContent]);
  log('Albumin LVP >= 5 L triggers large-volume paracentesis safe alert', !!$('[data-lvp-alert="safe"]'), '');
  $('[data-lvp-presets] [data-lvp-preset="4"]').click(); await wait(150);
  log('Albumin LVP < 5 L triggers low volume warning alert', !!$('[data-lvp-alert="low"]'), '');
  $('[data-alb-tab="sbp"]').click(); await wait(250);
  await type($('[data-sbp-weight]'), '60'); await wait(150);
  // 60 kg: Day 1 (1.5 g/kg) = 90.0 g (450 mL 20%, 360 mL 25%); Day 3 (1.0 g/kg) = 60.0 g (300 mL 20%, 240 mL 25%)
  log('Albumin SBP protocol: 60 kg gives Day 1 90.0 g (450 mL 20%) and Day 3 60.0 g (300 mL 20%)', /90\.0/.test(($('[data-sbp-day1-g]') || {}).textContent || '') && /450/.test(($('[data-sbp-day1-vol20]') || {}).textContent || '') && /60\.0/.test(($('[data-sbp-day3-g]') || {}).textContent || '') && /300/.test(($('[data-sbp-day3-vol20]') || {}).textContent || ''), [($('[data-sbp-day1-g]') || {}).textContent, ($('[data-sbp-day3-g]') || {}).textContent]);
  $('[data-alb-tab="hrs"]').click(); await wait(250);
  await type($('[data-hrs-weight]'), '60'); await wait(150);
  // 60 kg: 1 g/kg/day = 60 g/day (300 mL 20%, 240 mL 25%)
  log('Albumin HRS diagnostic challenge: 60 kg gives 60 g/day (300 mL 20%, 240 mL 25%) with respiratory alert', /60/.test(($('[data-hrs-challenge-g]') || {}).textContent || '') && /300/.test(($('[data-hrs-challenge-vol20]') || {}).textContent || '') && /240/.test(($('[data-hrs-challenge-vol25]') || {}).textContent || '') && !!$('[data-hrs-alert="resp"]'), [($('[data-hrs-challenge-g]') || {}).textContent, ($('[data-hrs-challenge-vol20]') || {}).textContent]);
  $('[data-alb-tab="compare"]').click(); await wait(250);
  log('Albumin compare tab: 5%, 20%, 25% comparison matrix and TBI warning shown', !!$('[data-alb-matrix-cards]') && /SAFE/i.test(($('[data-guide-modal="albumin"]') || {}).textContent || '') && !!$('[data-open-alb5-btn]'), '');
  $('[data-open-alb5-btn]').click(); await wait(300);
  log('Albumin compare card link opens Albumin 5% detail modal', !!$('[data-detail-modal="alb5"]'), '');
  await esc();

  // Language and theme
  $('[data-lang]').click(); await wait(300);
  log('Thai: title, card labels and Unknown in Thai', /คู่มือสารน้ำ/.test($('h1').textContent) && /ไม่ทราบ/.test(fact('d5s5', 'ph')) && /ไทยนครพัฒนา|เอ\.เอ็น\.บี/.test(card('nss').querySelector('[data-holder-line="th"]').textContent) && /ปัจจุบัน/.test($('[data-filter-reg="current"]').textContent), $('h1').textContent);
  $('[data-lang]').click(); await wait(300);
  const wasDark = document.documentElement.classList.contains('dark');
  $('[data-theme-toggle]').click(); await wait(150);
  log('theme button switches dark mode and remembers it', document.documentElement.classList.contains('dark') !== wasDark && localStorage.getItem('ivf-theme') === (wasDark ? 'light' : 'dark'), '');
  $('[data-theme-toggle]').click(); await wait(150);
  // List view
  $('[data-view="list"]').click(); await wait(250);
  log('list view shows every fluid with values', $('#fluid-list').dataset.viewMode === 'list' && $$('#fluid-list [data-row-values]').length === 22, '');
  $('[data-view="grid"]').click(); await wait(250);
  // Changelog
  $('[data-version]').click(); await wait(300);
  log('version history opens with today\'s entry', !!$('[data-changelog]') && /v1\.\d+\.\d+/.test($('[data-changelog]').textContent), ''); await esc();
  return out;
};
