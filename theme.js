// Applica il tema salvato prima del render per evitare il "flash" di colori
try {
  const t = localStorage.getItem("theme");
  if (t) document.documentElement.dataset.theme = t;
} catch (e) {}
