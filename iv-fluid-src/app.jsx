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
const InfoIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>);

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
    'bg-slate-100/95': 'background-color:rgba(11,18,32,.95)', 'bg-slate-200': 'background-color:#24324a',
    'text-slate-900': 'color:#f1f5f9', 'text-slate-800': 'color:#e2e8f0', 'text-slate-700': 'color:#cbd5e1',
    'text-slate-600': 'color:#a8b4c6', 'text-slate-500': 'color:#94a3b8', 'text-slate-400': 'color:#7d8ba1',
    'text-slate-300': 'color:#4a5a73', 'text-slate-200': 'color:#33425a',
    'border-slate-100': 'border-color:#1d2940', 'border-slate-200': 'border-color:#263449',
    'border-slate-200/50': 'border-color:rgba(38,52,73,.5)', 'border-slate-300': 'border-color:#33435c',
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
    [['50', 0.12], ['100', 0.2]].forEach(([shade, a]) => {
      add(`bg-${f}-${shade}`, `background-color:rgba(${c500},${a})`);
      [10, 50, 80].forEach((o) => add(`bg-${f}-${shade}/${o}`, `background-color:rgba(${c500},${(a * o / 100).toFixed(3)})`));
      add(`hover:bg-${f}-${shade}`, `background-color:rgba(${c500},${a + 0.06})`, true);
    });
    ['500', '600'].forEach((s) => add(`text-${f}-${s}`, `color:rgb(${c400})`));
    ['700', '800', '900'].forEach((s) => add(`text-${f}-${s}`, `color:rgb(${c300})`));
    ['500', '600'].forEach((s) => add(`hover:text-${f}-${s}`, `color:rgb(${c300})`, true));
    [['100', 0.28], ['200', 0.35], ['300', 0.45]].forEach(([s, a]) => {
      add(`border-${f}-${s}`, `border-color:rgba(${c500},${a})`);
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
    label: { na: 140, k: 5, mg: 1.5, cl: 98, acetate: 27, gluconate: 23 }, labelSrc: 'thTopBal', labelMEq: { mg: 3 },
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
  th: { on: 'bg-emerald-600 text-white shadow-sm', off: 'text-emerald-700 hover:bg-emerald-50', chip: 'border-emerald-200 bg-emerald-50 text-emerald-700' },
  us: { on: 'bg-blue-600 text-white shadow-sm', off: 'text-blue-700 hover:bg-blue-50', chip: 'border-blue-200 bg-blue-50 text-blue-700' },
  uk: { on: 'bg-rose-600 text-white shadow-sm', off: 'text-rose-700 hover:bg-rose-50', chip: 'border-rose-200 bg-rose-50 text-rose-700' },
  eu: { on: 'bg-amber-500 text-white shadow-sm', off: 'text-amber-700 hover:bg-amber-50', chip: 'border-amber-200 bg-amber-50 text-amber-800' },
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
  ...['usNaCl09', 'usNaCl045', 'usNaCl3', 'usDex', 'usDexNaCl', 'usKDexNaCl', 'usLR', 'usPL', 'thTopBal', 'thAcetRinger', 'euSterofundin'].map(k => ({ key: k, cite: SOURCES[k].cite, url: SOURCES[k].url })),
];
const refUrl = (key) => (REFERENCES.find(r => r.key === key) || {}).url;

// =====================================================================
// Changelog (newest first; one entry per day)
// =====================================================================
const changelogData = [
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
    typeLabel: 'Type', families: { saline: 'Saline', balanced: 'Balanced', dextrose: 'Dextrose', dexsaline: 'Dextrose-saline', hypertonic: 'Hypertonic' },
    familyLong: { saline: 'Sodium chloride in water', balanced: 'Balanced crystalloid (buffered)', dextrose: 'Dextrose in water', dexsaline: 'Dextrose with sodium chloride', hypertonic: 'Hypertonic saline' },
    naLabel: 'Na⁺', naBands: { low: '< 130', resus: '130–154', high: '> 154' }, naBandLong: { low: 'Sodium below 130 mmol/L', resus: 'Sodium 130–154 mmol/L', high: 'Sodium above 154 mmol/L' },
    naTitle: 'Sodium band. NICE CG174 1.3.1: crystalloids used for resuscitation contain sodium 130–154 mmol/L.',
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
    select: 'Select', selected: 'Selected', detailBtn: 'Details', detailClose: 'Close', clear: 'Clear',
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
    },
    flagNotes: {
      vein: 'US labels: hypertonic solutions may damage veins and should go through a large vein; consider a central vein for 900 mOsm/L or more.',
      low: 'Labels warn that fluids with less sodium than the patient’s serum, including dextrose solutions once the glucose is used, can cause hyponatraemia.',
      ca: "Ringer's acetate SmPC (Thai FDA): ceftriaxone must not be mixed or given at the same time as calcium-containing solutions, even through different lines. Lactated Ringer's label: do not give through the same set as citrated blood (risk of clotting).",
      glu: 'US dextrose labels: dextrose can worsen high blood glucose; monitor blood glucose and give insulin as needed.',
      cl: 'NICE CG174 1.2.5: after fluids with chloride over 120 mmol/L, check serum chloride daily.',
      resus: 'NICE CG174 1.3.1: use crystalloids with sodium 130–154 mmol/L for resuscitation (500 mL bolus over less than 15 minutes).',
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
    selectMax: 'Up to 3 fluids can be selected', compare: 'Compare', compareTitle: 'Compare fluids', compareSub: 'Per litre, next to human plasma',
    naChangeBtn: 'Na⁺ change',
    // key
    keyValues: 'Values', keyValuesText: 'All values are per litre of fluid. Sodium, potassium, chloride, calcium, magnesium and buffers are in mmol/L; calcium and magnesium printed in mEq/L on a label are divided by 2.',
    keyCalc: 'Calculated from the formula: the label (or the Thai FDA register record) gives the salts in grams, and the amount of each ion is worked out from them. Osmolarity "calc." adds up all the particles, as the US labels do.',
    keyUnknown: 'No document for this product gives the value.',
    keyNone: 'The fluid contains none.',
    keyCountries: 'Country chips', keyChipCurrent: 'Registered (country colour); the line beside it names the makers', keyChipPast: 'Registration ended (withdrawn or discontinued)', keyChipNever: 'Not registered: no product of this fluid and strength found', keyBands: 'Sodium bands', keyFlags: 'Warnings at the bottom of each card', keyFamilies: 'Types',
    // guides
    guides: { choose: 'Fluid choice', maint: 'Maintenance', sodium: 'Sodium change', water: 'Water deficit', drip: 'Drip rate' },
    guideShort: { choose: 'Choice', maint: 'Maint.', sodium: 'Na⁺', water: 'Water', drip: 'Drip' },
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
      usNaCl09: 'NSS values', usNaCl045: 'NSS/2 values, hyponatraemia warning', usNaCl3: '3% NaCl values, large-vein warning', usDex: '5% and 10% dextrose values, central vein at 900 mOsm/L or more, blood glucose', usDexNaCl: '5%D/NSS and 5%D/N/2 values, hyponatraemia warning', usKDexNaCl: '5%D/N/2 with KCl values',
      usLR: "Lactated Ringer's values, citrated-blood warning", usPL: 'Plasma-Lyte A values', thTopBal: 'TOP Balance values', thAcetRinger: "Ringer's acetate pH, calcium and ceftriaxone warning", euSterofundin: 'Sterofundin ISO values',
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
    typeLabel: 'ชนิด', families: { saline: 'น้ำเกลือ', balanced: 'Balanced', dextrose: 'เดกซ์โทรส', dexsaline: 'เดกซ์โทรส-เกลือ', hypertonic: 'เกลือเข้มข้น' },
    familyLong: { saline: 'โซเดียมคลอไรด์ในน้ำ', balanced: 'Balanced crystalloid (มีบัฟเฟอร์)', dextrose: 'เดกซ์โทรสในน้ำ', dexsaline: 'เดกซ์โทรสผสมโซเดียมคลอไรด์', hypertonic: 'น้ำเกลือความเข้มข้นสูง' },
    naLabel: 'Na⁺', naBands: { low: '< 130', resus: '130–154', high: '> 154' }, naBandLong: { low: 'โซเดียมต่ำกว่า 130 mmol/L', resus: 'โซเดียม 130–154 mmol/L', high: 'โซเดียมสูงกว่า 154 mmol/L' },
    naTitle: 'ช่วงโซเดียม NICE CG174 1.3.1: สารน้ำคริสตัลลอยด์สำหรับกู้ชีพมีโซเดียม 130–154 mmol/L',
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
    select: 'เลือก', selected: 'เลือกแล้ว', detailBtn: 'รายละเอียด', detailClose: 'ปิด', clear: 'ล้าง',
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
    },
    flagNotes: {
      vein: 'ฉลากสหรัฐฯ: สารละลาย hypertonic อาจทำลายหลอดเลือดดำ ควรให้ทางหลอดเลือดดำใหญ่ และพิจารณา central vein เมื่อ 900 mOsm/L ขึ้นไป',
      low: 'ฉลากเตือนว่าสารน้ำที่มีโซเดียมน้อยกว่าโซเดียมในเลือดผู้ป่วย รวมถึงสารละลายเดกซ์โทรสเมื่อกลูโคสถูกใช้ไปแล้ว ทำให้เกิดโซเดียมต่ำได้',
      ca: "SmPC ของ Ringer's acetate (อย.): ห้ามผสมหรือให้ ceftriaxone พร้อมกับสารน้ำที่มีแคลเซียม แม้ผ่านสายคนละเส้น ฉลาก Lactated Ringer's: ห้ามให้ผ่านชุดสายเดียวกับเลือดที่มี citrate (เสี่ยงเลือดแข็งตัว)",
      glu: 'ฉลากเดกซ์โทรสสหรัฐฯ: เดกซ์โทรสทำให้น้ำตาลในเลือดสูงขึ้นได้ ควรติดตามระดับน้ำตาลและให้อินซูลินตามความจำเป็น',
      cl: 'NICE CG174 1.2.5: หลังให้สารน้ำที่มีคลอไรด์เกิน 120 mmol/L ให้ตรวจคลอไรด์ในเลือดทุกวัน',
      resus: 'NICE CG174 1.3.1: ใช้คริสตัลลอยด์ที่มีโซเดียม 130–154 mmol/L สำหรับกู้ชีพ (bolus 500 mL ภายในไม่เกิน 15 นาที)',
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
    selectMax: 'เลือกได้สูงสุด 3 ชนิด', compare: 'เปรียบเทียบ', compareTitle: 'เปรียบเทียบสารน้ำ', compareSub: 'ต่อลิตร เทียบกับพลาสมามนุษย์',
    naChangeBtn: 'การเปลี่ยน Na⁺',
    keyValues: 'ค่าต่าง ๆ', keyValuesText: 'ทุกค่าเป็นต่อลิตรของสารน้ำ โซเดียม โพแทสเซียม คลอไรด์ แคลเซียม แมกนีเซียม และบัฟเฟอร์ เป็น mmol/L แคลเซียมและแมกนีเซียมที่ฉลากระบุเป็น mEq/L หารด้วย 2',
    keyCalc: 'คำนวณจากสูตรตำรับ: ฉลาก (หรือข้อมูลทะเบียน อย.) ระบุเกลือเป็นกรัม แล้วคำนวณปริมาณไอออนจากเกลือนั้น ออสโมลาริตีที่ "คำนวณ" คือผลรวมของอนุภาคทั้งหมด แบบเดียวกับฉลากสหรัฐฯ',
    keyUnknown: 'ไม่มีเอกสารของผลิตภัณฑ์นี้ที่ระบุค่า',
    keyNone: 'สารน้ำนี้ไม่มีส่วนประกอบนี้',
    keyCountries: 'ชิปประเทศ', keyChipCurrent: 'มีทะเบียน (สีของประเทศ) ข้างชิประบุผู้ผลิต', keyChipPast: 'ทะเบียนสิ้นสุดแล้ว (ถอนหรือเลิกจำหน่าย)', keyChipNever: 'ไม่มีทะเบียน: ไม่พบผลิตภัณฑ์ชนิดและความแรงนี้', keyBands: 'ช่วงโซเดียม', keyFlags: 'คำเตือนด้านล่างของแต่ละการ์ด', keyFamilies: 'ชนิด',
    guides: { choose: 'เลือกสารน้ำ', maint: 'บำรุงรักษา', sodium: 'การเปลี่ยน Na⁺', water: 'การขาดน้ำ', drip: 'อัตราหยด' },
    guideShort: { choose: 'เลือก', maint: 'บำรุง', sodium: 'Na⁺', water: 'น้ำ', drip: 'หยด' },
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
      usNaCl09: 'ค่าของ NSS', usNaCl045: 'ค่าของ NSS/2', usNaCl3: 'ค่าของ 3% NaCl คำเตือนให้ทางหลอดเลือดใหญ่', usDex: 'ค่าของ 5% และ 10% เดกซ์โทรส central vein เมื่อ 900 mOsm/L ขึ้นไป น้ำตาลในเลือด', usDexNaCl: 'ค่าของ 5%D/NSS และ 5%D/N/2 คำเตือนโซเดียมต่ำ', usKDexNaCl: 'ค่าของ 5%D/N/2 ผสม KCl',
      usLR: "ค่าของ Lactated Ringer's คำเตือนเรื่องแคลเซียม", usPL: 'ค่าของ Plasma-Lyte A', thTopBal: 'ค่าของ TOP Balance', thAcetRinger: "pH ของ Ringer's acetate คำเตือนแคลเซียมกับ ceftriaxone", euSterofundin: 'ค่าของ Sterofundin ISO',
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
};
const FAMILIES = ['saline', 'balanced', 'dextrose', 'dexsaline', 'hypertonic'];
const NA_BANDS = ['low', 'resus', 'high'];
const NA_BAND_STYLE = { low: ['bg-amber-500 text-white shadow-sm', 'text-amber-700 hover:bg-amber-50'], resus: ['bg-emerald-600 text-white shadow-sm', 'text-emerald-700 hover:bg-emerald-50'], high: ['bg-rose-600 text-white shadow-sm', 'text-rose-700 hover:bg-rose-50'] };
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
  ['resus', (f) => naBand(f) === 'resus' && !dexOf(f), ['nice'], 'border-emerald-200 bg-emerald-50 text-emerald-800'],
];
const flagsOf = (f) => FLAG_RULES.filter(([, test]) => test(f));
const srcItem = (key) => ({ label: (REFERENCES.find(r => r.key === key) || SOURCES[key] || {}).cite || key, url: refUrl(key) || (SOURCES[key] || {}).url });
const SHORT_SRC = { szczech: 'Szczech 2025', nice: 'NICE CG174', ssc: 'SSC 2021', myburgh: 'Myburgh 2013', adrogueHypo: 'Adrogué 2000', adrogueHyper: 'Adrogué 2000', spasovski: 'Spasovski 2014', devine: 'Devine 1974' };

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

const CalcMark = ({ t }) => <sup className="ml-0.5 text-[9px] font-bold text-fuchsia-600 align-super" title={t.calcTitle} data-calc>{t.calc}</sup>;
const UnknownText = ({ t }) => <span className="text-slate-400 font-bold" data-unknown>{t.unknown}</span>;
// One value with its unit, "calc." mark, "–" for none or Unknown
const Val = ({ f, k, t, unit = true }) => {
  const x = fieldOf(f, k);
  if (!x) return <UnknownText t={t} />;
  if (!x.v) return <span className="text-slate-400">{t.none}</span>;
  return <span className="tabular-nums">{fmt(x.v)}{unit && <span className="text-[10px] font-medium opacity-70 ml-0.5">{k === 'osm' ? t.units.osm : k === 'kcal' ? t.units.kcal : k === 'dex' ? t.units.g : t.units.mmol}</span>}{x.calc && <CalcMark t={t} />}</span>;
};
const phOf = (f) => f.label.ph || null;
const BufferText = ({ f, t }) => {
  const b = bufferOf(f);
  if (!b.length) return <span className="text-slate-400">{t.none}</span>;
  const calc = b.some(([k]) => fieldOf(f, k).calc);
  return <span className="tabular-nums">{b.map(([k, v]) => `${t.buffers[k]} ${fmt(v)}`).join(' + ')}{calc && <CalcMark t={t} />}</span>;
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
            {sub && <p className="text-xs text-slate-500 mt-0.5">{sub}</p>}
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
    {title && <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">{title}</h3>}
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

// --- Compare (2–3 fluids next to plasma) ---
const CompareModal = ({ list, t, onClose }) => {
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
    <Modal title={t.compareTitle} sub={t.compareSub + ' (' + t.units.mmol + ')'} onClose={onClose} wide attrs={{ 'data-compare-modal': '' }} footer={<CloseBtn onClose={onClose} t={t} />}>
      <div className="overflow-x-auto -mx-1 px-1">
        <table className="w-full text-xs border-collapse min-w-[460px]" data-compare-table>
          <thead>
            <tr>
              <th className="text-left p-2 text-slate-400 font-bold align-bottom w-28"></th>
              {list.map(f => <th key={f.id} className="p-2 text-left align-bottom min-w-0"><BagIcon family={f.family} className="w-6 h-7 mb-1" /><span className="block font-extrabold text-slate-800 leading-tight break-words">{f.short}</span><span className="block text-[10px] font-medium text-slate-500 leading-tight break-words">{f.name[lang]}</span></th>)}
              <th className="p-2 text-left align-bottom text-slate-500 font-extrabold">{t.plasma}</th>
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
      {unit && <span className="text-xs text-slate-400 font-medium shrink-0">{unit}</span>}
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

// --- 3. Sodium change per litre (Adrogué–Madias 2000) ---
const TBW_FRACTION = { m: { young: 0.6, old: 0.5 }, f: { young: 0.5, old: 0.45 } };
const SodiumGuide = ({ lang, t, onClose, selectedIds = [], onOpenFluid }) => {
  const g = GUIDE_TEXT[lang];
  const [na, setNa] = useState('');
  const [wt, setWt] = useState('');
  const [sex, setSex] = useState('m');
  const [old, setOld] = useState(false);
  const [plan, setPlan] = useState('');
  const [dir, setDir] = useState(1); // 1 = raise (hyponatraemia), -1 = lower (hypernatraemia)
  const sNa = toNum(na), w = toNum(wt), planned = parseFloat(plan);
  const frac = TBW_FRACTION[sex][old ? 'old' : 'young'];
  const tbw = w ? w * frac : null;
  const rows = sNa && tbw ? FLUIDS.map(f => ({ f, d: (naK(f) - sNa) / (tbw + 1) }))
    .sort((a, b) => (selectedIds.includes(b.f.id) - selectedIds.includes(a.f.id)) || b.d - a.d) : [];
  return (
    <Modal title={t.guides.sodium} sub={g.sodiumSub} onClose={onClose} tone="bg-violet-50" wide attrs={{ 'data-guide-modal': 'sodium' }} icon={<div className="p-2 bg-violet-100 text-violet-700 rounded-xl shrink-0"><ScaleIcon className="w-5 h-5" /></div>} footer={<CloseBtn onClose={onClose} t={t} />}>
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
const MAX_SELECT = 3;
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
  const clearFilters = () => { setFamilies([]); setBands([]); setContains([]); setSearchTerm(''); };

  const shown = useMemo(() => FLUIDS
    .filter(f => !families.length || families.includes(f.family))
    .filter(f => !bands.length || bands.includes(naBand(f)))
    .filter(f => contains.every(k => hasIon(f, k)))
    .filter(f => countries.some(r => regStatus.includes(statusIn(f, r))))
    .filter(f => !searchTerm.trim() || matches(f, searchTerm.trim()))
    .sort((a, b) => SORTS[sortOrder](a, b) || SORTS.nameAsc(a, b)), [families, bands, contains, countries, regStatus, searchTerm, sortOrder]);

  const chips = [
    ...families.map(k => ({ key: 'fam-' + k, label: t.families[k], off: () => toggleIn(setFamilies)(k) })),
    ...bands.map(k => ({ key: 'na-' + k, label: 'Na ' + t.naBands[k], off: () => toggleIn(setBands)(k) })),
    ...contains.map(k => ({ key: 'has-' + k, label: t.containsLong[k], off: () => toggleIn(setContains)(k) })),

    ...(searchTerm.trim() ? [{ key: 'search', label: '“' + searchTerm.trim() + '”', off: () => setSearchTerm('') }] : []),
  ];
  const filterCount = families.length + bands.length + contains.length;
  const selFluids = selected.map(id => FLUIDS.find(f => f.id === id));
  const detail = detailId ? FLUIDS.find(f => f.id === detailId) : null;
  const closeDetail = () => { setDetailId(null); if (/fluid=/.test(location.hash)) history.replaceState(null, '', location.pathname + location.search); };

  const groupBox = 'flex bg-white rounded-md border border-slate-200 p-0.5 shadow-sm shrink-0 items-center h-[26px] md:h-7 gap-0.5';
  const segBtn = 'h-full px-1.5 md:px-2 rounded flex items-center justify-center text-[10px] font-bold transition-all whitespace-nowrap';
  const groupLabel = (text, title) => <span className="pl-1 pr-0.5 text-[10px] font-bold text-slate-400 whitespace-nowrap" title={title}>{text}:</span>;
  const GUIDE_BTNS = [
    ['choose', 'bg-rose-600 hover:bg-rose-700 border-rose-700', ActivityIcon],
    ['maint', 'bg-emerald-600 hover:bg-emerald-700 border-emerald-700', Stethoscope],
    ['sodium', 'bg-violet-600 hover:bg-violet-700 border-violet-700', ScaleIcon],
    ['water', 'bg-cyan-600 hover:bg-cyan-700 border-cyan-700', DropIcon],
    ['drip', 'bg-blue-600 hover:bg-blue-700 border-blue-700', DripIcon],
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
            <p className="text-[10px] md:text-xs font-semibold text-indigo-500 sm:mt-1">{t.madeBy}</p>
            <a href="#disclaimer-heading" onClick={(e) => { e.preventDefault(); const el = document.getElementById('disclaimer-heading'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} className="block sm:mt-1 text-[11px] md:text-xs font-semibold text-amber-700 hover:underline">{t.discLink}</a>
          </div>
        </header>

        <div ref={barRef} className="sticky top-0 z-30 pt-2 pb-2 md:pt-3 md:pb-2.5 -mt-2 md:-mt-3 bg-slate-100/95 backdrop-blur-md" data-search-bar>
          <div className="grid grid-cols-5 gap-1 sm:flex sm:flex-row sm:flex-wrap sm:items-center sm:gap-2 w-full mb-2" data-guide-buttons>
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
              <span className="pl-1 pr-0.5 text-[10px] font-bold text-slate-400 whitespace-nowrap inline-flex items-center gap-0.5">{t.regLabel}<Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-emerald-600" /></span>
              {REG_STATUSES.map(k => { const on = regStatus.includes(k); const tone = k === 'current' ? ['bg-emerald-600 text-white shadow-sm', 'text-emerald-700 hover:bg-emerald-50'] : k === 'past' ? ['bg-amber-500 text-white shadow-sm', 'text-amber-700 hover:bg-amber-50'] : ['bg-slate-600 text-white shadow-sm', 'text-slate-600 hover:bg-slate-50']; return (
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
            <div className={groupBox} role="group" aria-label={t.containsLabel}>
              {groupLabel(t.containsLabel)}
              {CONTAINS.map(k => { const on = contains.includes(k); return <button key={k} onClick={() => toggleIn(setContains)(k)} aria-pressed={on} data-filter-has={k} title={t.containsLong[k]} className={`${segBtn} ${on ? 'bg-cyan-600 text-white shadow-sm' : 'text-cyan-700 hover:bg-cyan-50'}`}>{t.contains[k]}</button>; })}
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
            <div className="text-[11px] md:text-xs text-slate-500 min-w-0 pt-0.5" aria-live="polite" data-count>
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
      {isCompareOpen && selFluids.length >= 2 && <CompareModal list={selFluids} t={t} onClose={() => setIsCompareOpen(false)} />}
      {isLegendOpen && <LegendModal t={t} onClose={() => setIsLegendOpen(false)} />}
      {guide === 'choose' && <ChooseGuide lang={lang} t={t} onClose={() => setGuide(null)} onOpenFluid={openFluid} onOpenGuide={setGuide} />}
      {guide === 'maint' && <MaintGuide lang={lang} t={t} onClose={() => setGuide(null)} />}
      {guide === 'sodium' && <SodiumGuide lang={lang} t={t} onClose={() => setGuide(null)} selectedIds={selected} onOpenFluid={openFluid} />}
      {guide === 'water' && <WaterGuide lang={lang} t={t} onClose={() => setGuide(null)} onOpenFluid={openFluid} />}
      {guide === 'drip' && <DripGuide lang={lang} t={t} onClose={() => setGuide(null)} />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
