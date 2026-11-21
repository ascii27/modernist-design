// project/templates/landing/ds-base.js
(() => {
  const base = '../..';
  for (const p of ['modernist.css']) { // list this DS's global stylesheets
    const l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = base + '/' + p;
    document.head.appendChild(l);
  }
})();
