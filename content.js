/* ==========================================================
   CONTENUTI DEL SITO
   Modifica solo questo file per aggiornare testi, progetti e link.
   ========================================================== */

window.SITE = {
  name: "Lorenzo Garbelli",
  initials: "LG",
  role: "Studente di Bioinformatica · Data & AI",
  tagline:
    "Costruisco software e modelli di machine learning. Mi interessano NLP, reti neurali e l'elaborazione di dati su larga scala.",
  location: "Italia",
  available: true, // mostra il badge "Disponibile per collaborazioni"

  about: [
    "Ciao! Sono Lorenzo, studente appassionato di bioinformatica, informatica e intelligenza artificiale. Frequento attualmente il terzo anno di triennale in Bioinformatica all'Università di Verona",
  ],

  skills: [
    { group: "Linguaggi", items: ["Python", "Java", "C", "R", "JavaScript"] },
    { group: "Data & AI", items: ["PyTorch", "scikit-learn", "NLP", "Spark", "Pandas"] },
    { group: "Strumenti", items: ["Git", "Linux", "Docker", "SQL", "Jupyter"] },
  ],

  projects: [
    {
      title: "Analisi del sentiment con NLP",
      description:
        "Classificatore di testi basato su transformer per riconoscere il sentiment di recensioni in italiano. [Descrizione segnaposto]",
      tags: ["Python", "NLP", "PyTorch"],
      repo: "https://github.com/",
      demo: "",
    },
    {
      title: "Rete neurale da zero",
      description:
        "Implementazione di una rete neurale feed-forward senza librerie, con backpropagation e visualizzazione della loss. [Descrizione segnaposto]",
      tags: ["Python", "NumPy", "Deep Learning"],
      repo: "https://github.com/",
      demo: "",
    },
    {
      title: "Pipeline Big Data",
      description:
        "Pipeline di elaborazione distribuita per analizzare milioni di record e produrre statistiche aggregate. [Descrizione segnaposto]",
      tags: ["Spark", "SQL", "Big Data"],
      repo: "https://github.com/",
      demo: "",
    },
    {
      title: "Book Marketplace",
      description:
        "Web app per comprare e vendere libri usati tra studenti, con ricerca e gestione degli annunci. [Descrizione segnaposto]",
      tags: ["Web", "Full-stack"],
      repo: "https://github.com/",
      demo: "https://example.com",
    },
  ],

  experience: [
    {
      period: "2023 — oggi",
      title: "Laurea in Bioinformatica",
      place: "Università degli studi di Verona",
      text: "Corsi principali: Algoritmi, Big Data Analytics, NLP, Elaborazione di segnali e immagini.",
    },
  ],

  contact: {
    text: "Hai un progetto, un'opportunità o vuoi semplicemente fare due chiacchiere? Scrivimi.",
    email: "lorenzo.garbelli@studenti.univr.it",
    links: [
      { label: "GitHub", url: "https://github.com/garbellilorenzo" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/lorenzo-garbelli-76625b242/" },
    ],
  },
};
