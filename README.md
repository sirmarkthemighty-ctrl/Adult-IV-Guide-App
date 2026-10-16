# Adult IV Fluid Guide

A bedside reference for crystalloid IV fluids in Thailand, the US, the UK, the EU and Japan, by Warodom Phaenthong, M.D.
It is one self-contained HTML page (`iv-fluid-guide.html`, opened by `index.html`) that runs in the browser, in English and Thai,
with no installation and no data sent anywhere.

It is decision support for healthcare professionals, not a substitute for product labels, local guidelines or clinical judgement.

## What it contains

- 20 crystalloids and colloids (NSS, NSS/2, 3% NaCl, 5% and 10% dextrose, dextrose-saline strengths, premixed potassium, LRS, Ringer's acetate,
  TOP Balance, Sterofundin ISO, Plasma-Lyte A, Human Albumin 20%, Mannitol 20%) with sodium, potassium, chloride, calcium, magnesium, buffer, dextrose, energy,
  osmolarity and pH per litre. Every value names its source; values worked out from a printed formula are marked "calc.",
  and anything without a source shows "Unknown".
- Registration in Thailand (Thai FDA), the US (Drugs@FDA), the UK (NHS dm+d), the EU (Irish HPRA list) and Japan (PMDA),
  with links to the records, as country chips and a status filter.
- Guides & Calculators: fluid choice (NICE CG174, Surviving Sepsis 2021), maintenance (NICE CG174), sodium change & acute 3% NaCl bolus
  (Adrogué–Madias, Sterns), potassium replacement & safe rate, DKA/HHS fluid & electrolyte protocol (Katz corrected Na), free water deficit,
  drip rate, Glucose Infusion Rate (GIR), and ICP & osmotherapy (Mannitol 20% vs 3% NaCl, osmolality/gap limits, and CPP calculator).
- Multi-fluid comparison (up to 6 fluids side by side) and high-resolution PNG card/table export.

Tap the version badge next to the title for the changelog.

## Source and build

`iv-fluid-guide.html` is generated; edit the files in `iv-fluid-src/` instead:

- `app.jsx`: the React app, its data, text (English and Thai) and changelog
- `shell.html`, `styles.css`, `tailwind.config.js`: page skeleton and styles
- `tests/e2e.js`, `tests/ui-audit-run.js`: regression checks run in a headless browser

Build and test with Node.js (the build tools are installed into `%LOCALAPPDATA%\med-apps-build` on first run;
the tests need Microsoft Edge or Google Chrome):

```
node .claude/build-iv-fluid.js --test
```

## Licence

Copyright (c) 2026 Warodom Phaenthong, M.D. Licensed under
[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/): share and adapt for non-commercial use,
with credit, under the same licence. See `LICENSE` and `NOTICE`.
