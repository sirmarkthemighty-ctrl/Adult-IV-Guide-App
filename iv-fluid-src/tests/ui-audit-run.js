// Walks the IV fluid guide's screens and pop-ups, running window.__uiAudit (.claude/ui-audit.js) on each.
// Usage (in the page): await window.__uiAuditRun() -> { state: issues[] }
window.__uiAuditRun = async () => {
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const $ = (s) => document.querySelector(s);
  const esc = async () => { window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' })); await wait(300); };
  const modal = () => [...document.querySelectorAll('.fixed.inset-0')].pop();
  const type = async (el, v) => { if (!el) return; const set = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set; set.call(el, v); el.dispatchEvent(new Event('input', { bubbles: true })); await wait(150); };
  const out = {};
  const audit = (name, root) => { window.__auditStep = name; const r = window.__uiAudit(root || document.getElementById('root')); if (r.length) out[name] = r; };
  for (const lang of ['EN', 'TH']) {
    const lb = $('[data-lang]'); if (lb && lb.textContent.trim() !== (lang === 'EN' ? 'ไทย' : 'EN')) { lb.click(); await wait(400); }
    window.scrollTo(0, 0);
    // every country and every status on, so the longest chip rows and maker lines are checked
    if ($('[data-country-all][aria-pressed="false"]')) { $('[data-country-all]').click(); await wait(300); }
    for (const k of ['past', 'never']) { const b = $('[data-filter-reg="' + k + '"][aria-pressed="false"]'); if (b) { b.click(); await wait(250); } }
    $('[data-view="grid"]').click(); await wait(300); audit(lang + ' main grid');
    $('[data-view="list"]').click(); await wait(300); audit(lang + ' main list');
    $('[data-view="grid"]').click(); await wait(300);
    audit(lang + ' header', $('header')); audit(lang + ' pinned bar', $('[data-search-bar]'));
    { const ft = $('[data-filters-toggle]'); const open = () => $('[data-filter-bar]').offsetParent; if (!open()) { ft.click(); await wait(300); } $('[data-filter-family="balanced"]').click(); await wait(250); audit(lang + ' filter panel and chips'); $('[data-clear-filters]').click(); await wait(250); }
    { const so = $('[data-search-open]'); if (so && so.getBoundingClientRect().width > 0) { so.click(); await wait(300); audit(lang + ' search open (phone)', $('[data-search-bar]')); document.activeElement && document.activeElement.blur(); await wait(200); } }
    for (const id of ['acetar', 'sterofundin', 'd5s2k40', 'nss', 'nacl3']) {
      $('[data-fluid="' + id + '"] [data-details]').click(); await wait(400);
      const st = $('[data-src-toggle][aria-pressed="false"]'); if (st) { st.click(); await wait(250); }
      if (modal()) audit(lang + ' detail ' + id, modal());
      const st2 = $('[data-src-toggle][aria-pressed="true"]'); if (st2) { st2.click(); await wait(150); }
      await esc();
    }
    $('[data-legend-btn]').click(); await wait(400); if (modal()) audit(lang + ' key', modal()); await esc();
    for (const id of ['nss', 'lrs', 'acetar5']) { $('[data-fluid="' + id + '"] [data-select]').click(); await wait(200); }
    audit(lang + ' selection bar', $('[data-select-bar]'));
    $('[data-bar-compare]').click(); await wait(400); if (modal()) audit(lang + ' compare', modal()); await esc();
    $('[data-bar-sodium]').click(); await wait(400);
    await type($('[data-na-serum]'), '120'); await type($('[data-na-weight]'), '60'); await type($('[data-na-plan]'), '8'); await wait(200);
    if (modal()) audit(lang + ' sodium change', modal());
    $('[data-sodium-tab="bolus"]').click(); await wait(250);
    if (modal()) audit(lang + ' sodium acute 3% bolus', modal());
    await esc();
    $('[data-bar-clear]').click(); await wait(250);
    $('[data-guide="kguide"]').click(); await wait(400);
    if (modal()) audit(lang + ' potassium guide', modal()); await esc();
    $('[data-guide="dka"]').click(); await wait(400);
    if (modal()) audit(lang + ' dka protocol', modal()); await esc();
    $('[data-guide="maint"]').click(); await wait(400);
    await type($('[data-maint-weight]'), '110'); $('[data-maint-obese]').click(); await wait(150); await type($('[data-maint-height]'), '165'); await wait(200);
    if (modal()) audit(lang + ' maintenance', modal()); await esc();
    $('[data-guide="water"]').click(); await wait(400);
    await type($('[data-water-na]'), '162'); await type($('[data-water-weight]'), '58'); await wait(200);
    if (modal()) audit(lang + ' water deficit', modal()); await esc();
    $('[data-guide="drip"]').click(); await wait(400); if (modal()) audit(lang + ' drip rate', modal()); await esc();
    $('[data-guide="gir"]').click(); await wait(400); if (modal()) audit(lang + ' gir calculator', modal()); await esc();
    $('[data-guide="icp"]').click(); await wait(400);
    if (modal()) audit(lang + ' icp guide mannitol', modal());
    $('[data-icp-tab="nacl3"]').click(); await wait(250);
    if (modal()) audit(lang + ' icp guide nacl3', modal());
    $('[data-icp-tab="decision"]').click(); await wait(250);
    if (modal()) audit(lang + ' icp guide decision', modal());
    $('[data-icp-tab="cpp"]').click(); await wait(250);
    if (modal()) audit(lang + ' icp guide cpp', modal());
    await esc();
    $('[data-guide="choose"]').click(); await wait(400);
    for (const tab of ['resus', 'maint', 'replace', 'reassess']) { const b = $('[data-tab="' + tab + '"]'); if (b) { b.click(); await wait(250); audit(lang + ' fluid choice ' + tab, modal()); } }
    await esc();
    $('[data-version]').click(); await wait(400); if (modal()) audit(lang + ' version history', modal()); await esc();
    $('[data-refs-toggle]').click(); await wait(300); audit(lang + ' references', $('[data-refs-list]')); $('[data-refs-toggle]').click(); await wait(200);
  }
  const lb = $('[data-lang]'); if (lb && lb.textContent.trim() === 'EN') { lb.click(); await wait(300); }
  return out;
};
'run ready';
