(function () {
  const S = window.SITE;
  const $ = (sel) => document.querySelectorAll(`[data-bind="${sel}"]`);
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const set = (key, html) => $(key).forEach((el) => (el.innerHTML = html));

  // Testi semplici
  set("name", esc(S.name));
  set("initials", esc(S.initials));
  set("role", esc(S.role));
  set("tagline", esc(S.tagline));
  set("year", new Date().getFullYear());
  if (S.available) $("available").forEach((el) => (el.hidden = false));

  // Chi sono
  set("about", S.about.map((p) => `<p>${esc(p)}</p>`).join(""));
  set(
    "skills",
    S.skills
      .map(
        (g) => `<div class="skills__group">
          <h3>${esc(g.group)}</h3>
          <ul>${g.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
        </div>`
      )
      .join("")
  );

  // Progetti
  const arrow = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>`;
  set(
    "projects",
    S.projects
      .map((p) => {
        const links = [
          p.repo && `<a href="${esc(p.repo)}" target="_blank" rel="noopener">Codice ${arrow}</a>`,
          p.demo && `<a href="${esc(p.demo)}" target="_blank" rel="noopener">Demo ${arrow}</a>`,
        ]
          .filter(Boolean)
          .join("");
        return `<article class="card">
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.description)}</p>
          <ul class="tags">${p.tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
          ${links ? `<div class="card__links">${links}</div>` : ""}
        </article>`;
      })
      .join("")
  );

  // Percorso
  set(
    "experience",
    S.experience
      .map(
        (e) => `<li>
          <span class="timeline__period">${esc(e.period)}</span>
          <div>
            <h3>${esc(e.title)} <span class="timeline__place">· ${esc(e.place)}</span></h3>
            <p>${esc(e.text)}</p>
          </div>
        </li>`
      )
      .join("")
  );

  // Contatti
  set("contact-text", esc(S.contact.text));
  $("email").forEach((el) => {
    el.textContent = S.contact.email;
    el.href = `mailto:${S.contact.email}`;
  });
  set(
    "links",
    S.contact.links
      .map((l) => `<li><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ${arrow}</a></li>`)
      .join("")
  );

  // Tema chiaro/scuro
  const root = document.documentElement;
  document.querySelector(".theme-toggle").addEventListener("click", () => {
    const current =
      root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  // Animazione all'ingresso delle sezioni
  const els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("is-visible");
            io.unobserve(en.target);
          }
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
  } else {
    els.forEach((el) => el.classList.add("is-visible"));
  }

  // Evidenzia la voce di menu della sezione corrente
  const links = document.querySelectorAll(".nav__links a");
  const spy = new IntersectionObserver(
    (entries) =>
      entries.forEach((en) => {
        if (en.isIntersecting) {
          links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${en.target.id}`));
        }
      }),
    { rootMargin: "-45% 0px -50% 0px" }
  );
  document.querySelectorAll("section[id]").forEach((s) => spy.observe(s));
})();
