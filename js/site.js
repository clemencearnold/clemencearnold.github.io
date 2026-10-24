/* Rendu des pages à partir de data.js — aucune dépendance. */

(function () {
  const page = document.body.dataset.page;
  const params = new URLSearchParams(location.search);

  /* ---------- Langue ---------- */

  // Pages françaises à la racine, pages anglaises dans en/ (avec <base href="../">)
  const langue = document.documentElement.lang === "en" ? "en" : "fr";
  const racine = langue === "en" ? "en/" : "";
  const lien = (href) => racine + href;

  const UI = {
    fr: {
      peintures: "Peintures", dessins: "Dessins", murales: "Peintures murales", videos: "Vidéos & images", expositions: "Expositions", apropos: "Bio", contact: "Contact",
      precedente: "Image précédente", suivante: "Image suivante",
      index: "Toutes les œuvres", fermerIndex: "Fermer", menu: "Menu", fermer: "Fermer",
      selection: "La sélection", horsSerie: "Hors série", anciennes: "Séries antérieures", collection: "Collection particulière",
      enCours: "En ce moment", aVenir: "À venir",
      vue: "Vue d'exposition",
      expoSuivante: "Exposition suivante", toutesExpos: "Toutes les expositions",
      personnelle: "Expositions personnelles", collective: "Expositions collectives", residence: "Résidences",
      formation: "Formation", prix: "Prix", projets: "Projets dans l'espace public", presse: "Presse",
      portfolio: "Portfolio (PDF)",
      mois: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
    },
    en: {
      peintures: "Paintings", dessins: "Drawings", murales: "Murals", videos: "Video & images", expositions: "Exhibitions", apropos: "Bio", contact: "Contact",
      precedente: "Previous image", suivante: "Next image",
      index: "All works", fermerIndex: "Close", menu: "Menu", fermer: "Close",
      selection: "The selection", horsSerie: "Other works", anciennes: "Earlier series", collection: "Private collection",
      enCours: "Now on", aVenir: "Upcoming",
      vue: "Installation view",
      expoSuivante: "Next exhibition", toutesExpos: "All exhibitions",
      personnelle: "Solo exhibitions", collective: "Group exhibitions", residence: "Residencies",
      formation: "Education", prix: "Awards", projets: "Public projects", presse: "Press",
      portfolio: "Portfolio (PDF)",
      mois: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    },
  }[langue];

  // Texte simple, texte traduit par le dictionnaire, ou { fr, en }
  function t(v) {
    if (v && typeof v === "object") return v[langue] ?? v.fr;
    if (langue === "en" && typeof v === "string" && TRADUCTIONS[v]) return TRADUCTIONS[v];
    return v ?? "";
  }
  const dimensions = (d) => (langue === "en" ? t(d).replace(/(\d),(\d)/g, "$1.$2") : t(d));

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const vignette = (src) => src.replace(/^images\//, "images/vignettes/");
  const lignes = (arr) => arr.filter(Boolean).join("<br>");
  const paragraphes = (v) => (t(v) || []).map((p) => `<p>${esc(p)}</p>`).join("");

  // Pictogrammes (traits fins, couleur du texte)
  const ICONES = {
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="17.3" cy="6.7" r="1.1" fill="currentColor"/></svg>',
    vimeo: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M23.98 6.42c-.1 2.33-1.74 5.54-4.9 9.6-3.26 4.25-6.02 6.37-8.29 6.37-1.4 0-2.58-1.3-3.55-3.88L5.32 11.4C4.6 8.82 3.83 7.52 3.01 7.52c-.18 0-.8.38-1.88 1.13L0 7.2C1.19 6.15 2.35 5.11 3.5 4.07 5.08 2.7 6.27 1.98 7.06 1.91c1.86-.18 3.01 1.1 3.44 3.84.47 2.95.79 4.79.97 5.5.54 2.46 1.13 3.68 1.78 3.68.5 0 1.25-.8 2.26-2.39 1-1.59 1.54-2.8 1.61-3.63.15-1.37-.39-2.06-1.61-2.06-.57 0-1.17.12-1.78.39 1.19-3.87 3.44-5.76 6.76-5.64 2.47.06 3.63 1.67 3.49 4.8z"/></svg>',
  };
  const reseaux = () =>
    [["instagram", "Instagram"], ["vimeo", "Vimeo"]]
      .filter(([cle]) => SITE[cle])
      .map(([cle, nom]) => `<a class="icone" href="${esc(SITE[cle])}" target="_blank" rel="noopener" aria-label="${nom}" title="${nom}">${ICONES[cle]}</a>`)
      .join("");

  const expo = page === "exhibitions" && SITE.expositions.find((e) => e.id && e.id === params.get("e") && e.vues);
  const avecDiaporama = ["paintings", "drawings", "murals", "videos"].includes(page) || Boolean(expo);

  /* ---------- Navigation ---------- */

  function renderNav() {
    const nav = document.querySelector("[data-nav]");
    // Deux groupes, pour que le menu reste léger : les œuvres, puis les informations
    const oeuvres = [
      ["paintings.html", UI.peintures, "paintings"],
      ["drawings.html", UI.dessins, "drawings"],
      ["murals.html", UI.murales, "murals"],
      ["videos.html", UI.videos, "videos"],
    ];
    const infos = [
      ["exhibitions.html", UI.expositions, "exhibitions"],
      ["about.html", UI.apropos, "about"],
      ["contact.html", UI.contact, "contact"],
    ];
    const liste = (rubriques) =>
      rubriques.map(([href, label, id]) => `<li><a href="${lien(href)}"${page === id ? ' aria-current="page"' : ""}>${label}</a></li>`).join("");

    // Même page dans l'autre langue
    const fichier = location.pathname.split("/").pop() || "index.html";
    const autre = (langue === "en" ? "" : "en/") + fichier + location.search;

    nav.innerHTML = `
      <a class="nom" href="${lien("index.html")}" aria-label="${esc(SITE.artiste)}">clémence arnold</a>
      <div class="coin">
        <p class="langues">
          ${langue === "fr" ? '<span aria-current="true">FR</span>' : `<a href="${autre}" hreflang="fr" lang="fr">FR</a>`}
          /
          ${langue === "en" ? '<span aria-current="true">EN</span>' : `<a href="${autre}" hreflang="en" lang="en">EN</a>`}
        </p>
      </div>
      <button class="menu-bouton" aria-expanded="false" aria-controls="menu">${UI.menu}</button>
      <nav id="menu" class="menu">
        <ul class="menu-rubriques">${liste(oeuvres)}</ul>
        <ul class="menu-rubriques menu-infos">${liste(infos)}</ul>
        <ul class="menu-secondaire">
          <li class="reseaux">${reseaux()}</li>
        </ul>
        ${expo ? `<div class="expo-info">${infoExpo(expo)}</div>` : ""}
        ${avecDiaporama ? `
        <div class="cartel">
          <div class="cartel-texte" aria-live="polite"></div>
          <p class="cartel-nav">
            <button class="prec" aria-label="${UI.precedente}">←</button>
            <button class="suiv" aria-label="${UI.suivante}">→</button>
            <span class="compteur"></span>
          </p>
          ${["paintings", "drawings"].includes(page) ? `<p class="cartel-index"><button class="bouton-index" aria-expanded="false"><span class="icone-grille" aria-hidden="true"></span><span class="libelle">${UI.index}</span></button><button class="bouton-selection" hidden>← ${UI.selection}</button></p>` : ""}
        </div>` : ""}
      </nav>`;


    // Le lien de langue garde l'image affichée (#3)
    nav.querySelectorAll(".langues a").forEach((a) =>
      a.addEventListener("click", () => { a.href = (langue === "en" ? "" : "en/") + fichier + location.search + location.hash; })
    );

    const bouton = nav.querySelector(".menu-bouton");
    bouton.addEventListener("click", () => {
      const ouvert = document.body.classList.toggle("menu-ouvert");
      bouton.setAttribute("aria-expanded", ouvert);
      bouton.textContent = ouvert ? UI.fermer : UI.menu;
    });
  }

  /* ---------- Actualités ---------- */

  const date = (iso) => new Date(iso + "T00:00:00");
  const jour = (d) => `${langue === "fr" && d.getDate() === 1 ? "1er" : d.getDate()} ${UI.mois[d.getMonth()]}`;

  function periode(a) {
    const d = date(a.debut), f = date(a.fin);
    return `${jour(d)}${d.getFullYear() === f.getFullYear() ? "" : " " + d.getFullYear()} – ${jour(f)} ${f.getFullYear()}`;
  }

  function statut(a) {
    const now = new Date();
    if (now < date(a.debut)) return UI.aVenir;
    if (now <= new Date(date(a.fin).getTime() + 864e5)) return UI.enCours;
    return "";
  }

  function renderActualites() {
    const items = SITE.actualites.filter(statut);
    if (!items.length) return "";
    return `
      <section class="actualites">
        ${items
          .map(
            (a) => `
          <p>
            <span class="statut">${statut(a)}</span>
            <a href="${lien(a.lien || "")}"><em>${esc(a.titre)}</em></a><br>
            ${lignes([esc(t(a.type)), esc(t(a.lieu)), esc(t(a.ville)), periode(a)])}
          </p>`
          )
          .join("")}
      </section>`;
  }

  /* ---------- Légendes ---------- */

  function legendePeinture(o) {
    return (
      lignes([`<em>${esc(o.titre)}</em>`, esc(t(o.technique)), esc(dimensions(o.dimensions)), esc(o.annee), o.collection && UI.collection, o.credit && `<span class="credit">${esc(o.credit)}</span>`]) +
      (o.serie ? `<span class="cartel-serie">${esc(o.serie)}</span>` : "")
    );
  }

  const titreExpo = (e) => (e.titre ? `<em>${esc(e.titre)}</em>` : esc(t(e.lieu)));

  // v.legende peut contenir de l'italique (<em>) : c'est du contenu écrit dans data.js
  function legendeVue(v, e) {
    return lignes([UI.vue, t(v.legende), `${titreExpo(e)}, ${esc(e.annee)}`, v.credit && `<span class="credit">${esc(v.credit)}</span>`]);
  }

  /* ---------- Images ---------- */

  // data-src : l'image n'est chargée qu'à l'approche (voir charger())
  const img = (o, alt) => `<img data-src="${esc(o.src)}" width="${o.w}" height="${o.h}" alt="${esc(alt)}">`;

  function media(o, alt) {
    if (!o.panneaux) return img(o, alt);
    const ratio = o.panneaux.reduce((r, p) => r + p.w / p.h, 0);
    return `<div class="panneaux" style="--r:${ratio.toFixed(4)}">${o.panneaux.map((p) => img(p, alt)).join("")}</div>`;
  }

  /* ---------- Accueil ---------- */

  // Les actualités se posent sur la photo d'accueil (ordinateur et téléphone), à gauche, juste au-dessus du sol.
  // La photo est recadrée par object-fit: cover : on convertit la hauteur du sol (en part de l'image) en pixels d'écran.
  const ZONE_ACTUALITES = { droite: 0.775, gauche: 0.772 }; // un peu au-dessus de la ligne du sol (0,795)
  // Téléphone : le bloc se cale entre le bord gauche et la personne (dont le bras gauche est à ~50 % de la largeur de la photo),
  // sur le mur clair, au-dessus de la bande sombre (texte noir)
  const TELEPHONE = { bas: 0.545, personne: 0.5 };
  // La photo est calée sur son bas : quand la fenêtre est plus large que la photo, c'est le haut du mur
  // qui est rogné, jamais le sol (doit correspondre à object-position dans style.css)
  const CADRAGE_ACCUEIL = 1;
  function placerActualites() {
    const bloc = document.querySelector(".actualites");
    const im = SITE.accueil[0];
    if (!bloc) return;
    const k = Math.max(innerWidth / im.w, innerHeight / im.h);
    const y0 = (innerHeight - im.h * k) * CADRAGE_ACCUEIL; // = object-position vertical de la photo (CSS)
    const telephone = matchMedia("(max-width: 800px)").matches;
    const bas = telephone ? TELEPHONE.bas : ZONE_ACTUALITES[bloc.dataset.cote] || ZONE_ACTUALITES.gauche;
    if (telephone) {
      const x0 = (innerWidth - im.w * k) * 0.5;
      bloc.style.maxWidth = `${Math.round(x0 + TELEPHONE.personne * im.w * k - bloc.offsetLeft - 12)}px`;
    } else {
      bloc.style.removeProperty("max-width");
    }
    let y = y0 + bas * im.h * k; // bas du bloc, en pixels depuis le haut
    // À gauche, le bloc ne doit jamais remonter jusqu'aux pictogrammes du menu
    const icones = document.querySelector(".reseaux");
    if (bloc.dataset.cote === "gauche" && icones) y = Math.max(y, icones.getBoundingClientRect().bottom + 24 + bloc.offsetHeight);
    bloc.style.bottom = `${Math.round(innerHeight - y)}px`;
  }

  // Photo en pleine page ; le menu passe par-dessus (en noir).
  // S'il y a plusieurs versions, un clic à gauche ou à droite passe de l'une à l'autre.
  function renderAccueil() {
    const images = SITE.accueil;
    document.querySelector("main").innerHTML = `
      <div class="accueil-plein">
        ${images.map((im, i) => `<img ${i === 0 ? 'src' : 'data-src'}="${esc(im.src)}" width="${im.w}" height="${im.h}" alt="${esc(SITE.artiste)}" class="${i === 0 ? "visible" : ""}"${i === 0 ? ' fetchpriority="high"' : ""}>`).join("")}
      </div>
      ${renderActualites()}
      <p class="accueil-pied">
        ${SITE.accueilCredit ? `<span class="credit">${esc(SITE.accueilCredit)}</span>` : ""}
        ${images.length > 1 ? `<span class="accueil-compteur" aria-live="polite">1 / ${images.length}</span>` : ""}
      </p>`;
    const coteActualites = (n) => {
      const bloc = document.querySelector(".actualites");
      if (!bloc) return;
      bloc.dataset.cote = images[n].actualites || "gauche";
      if (images[n].actualitesCouleur) bloc.style.setProperty("--actu-couleur", images[n].actualitesCouleur);
      placerActualites();
    };
    coteActualites(0);
    addEventListener("resize", placerActualites);
    if (images.length < 2) return;

    const zone = document.querySelector(".accueil-plein");
    const imgs = [...zone.querySelectorAll("img")];
    const compteur = document.querySelector(".accueil-compteur");
    let courant = 0;
    // Les autres versions se chargent une fois la première affichée
    imgs[0].addEventListener("load", () => imgs.forEach((im) => { if (im.dataset.src) { im.src = im.dataset.src; im.removeAttribute("data-src"); } }), { once: true });

    const montrer = (n) => {
      courant = (n + imgs.length) % imgs.length;
      imgs.forEach((im, i) => im.classList.toggle("visible", i === courant));
      compteur.textContent = `${courant + 1} / ${imgs.length}`;
      coteActualites(courant);
    };
    const sens = (e) => (e.clientX < innerWidth / 2 ? -1 : 1);
    zone.addEventListener("mousemove", (e) => {
      zone.classList.toggle("vers-gauche", sens(e) < 0);
      zone.classList.toggle("vers-droite", sens(e) > 0);
    });
    zone.addEventListener("click", (e) => montrer(courant + sens(e)));
    addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") montrer(courant + 1);
      if (e.key === "ArrowLeft") montrer(courant - 1);
    });
  }

  /* ---------- Peintures ---------- */

  // Peintures et dessins : même défilement, même index « Toutes les œuvres ».
  // Deux parcours dans le même diaporama :
  //  - la sélection (scénographie) : les œuvres dans l'ordre de data.js, sans celles marquées hors: true ;
  //  - une série : ouverte depuis l'index, toutes les œuvres de la série, y compris hors sélection.
  const slug = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "hors-serie";

  function renderPaintings(oeuvres = SITE.paintings, series = null) {
    // La sélection d'abord, puis les œuvres visibles seulement depuis l'index
    const ordre = [...oeuvres.filter((o) => !o.hors), ...oeuvres.filter((o) => o.hors)];
    const rang = new Map(ordre.map((o, n) => [o, n]));
    const selection = ordre.map((o, n) => (o.hors ? -1 : n)).filter((n) => n >= 0);
    const diapos = ordre.map((o) => ({
      html: media(o, o.titre),
      legende: legendePeinture(o),
      compte: !o.hors,
      classe: [o.centrer && "diapo-centree", o.hors && "diapo-hors"].filter(Boolean).join(" "),
    }));

    // Groupes de l'index : une section par série (dans l'ordre de SITE.series), sinon une seule liste
    const groupes = (series || [{ nom: null }])
      .map((s) => ({ ...s, oeuvres: oeuvres.filter((o) => s.nom === null || (o.serie || "") === s.nom) }))
      .filter((g) => g.oeuvres.length);
    const vignettes = (liste) => `
          <ul>${liste
            .map(
              (o) => `
            <li><button data-n="${rang.get(o)}">
              <span class="vignette">${(o.panneaux || [o]).map((p) => `<img src="${esc(vignette(p.src))}" loading="lazy" alt="">`).join("")}</span>
              <span class="index-titre"><em>${esc(o.titre)}</em>${o.annee ? ", " + esc(o.annee) : ""}</span>
            </button></li>`
            )
            .join("")}
          </ul>`;
    const section = (g) =>
      g.nom === null
        ? vignettes(g.oeuvres)
        : `<section class="index-serie${g.ancienne ? " ancienne" : ""}">
            <h2>${esc(g.nom || UI.horsSerie)}</h2>
            ${g.texte ? `<p class="index-texte">${esc(t(g.texte))}</p>` : ""}
            ${vignettes(g.oeuvres)}
          </section>`;
    const recentes = groupes.filter((g) => !g.ancienne), anciennes = groupes.filter((g) => g.ancienne);
    const index = `
      <div class="index" hidden>
        ${recentes.map(section).join("")}
        ${anciennes.length ? `<div class="index-anciennes"><h2 class="index-anciennes-titre">${UI.anciennes}</h2>${anciennes.map(section).join("")}</div>` : ""}
      </div>`;

    // Parcours : la sélection, ou une série (?serie=nom-de-serie#3 dans l'adresse)
    const serieDe = (n) => ordre[n].serie || "";
    const parcoursSerie = (nom) => oeuvres.filter((o) => (o.serie || "") === nom).map((o) => rang.get(o));
    let serie = null;
    const compteur = (n) => {
      const liste = serie === null ? selection : parcoursSerie(serie);
      const p = liste.indexOf(n);
      return p < 0 ? "" : `${p + 1} / ${liste.length}`;
    };
    const adresse = (n) => {
      const liste = serie === null ? selection : parcoursSerie(serie);
      const p = liste.indexOf(n);
      return location.pathname + (serie === null ? "" : `?serie=${slug(serie)}`) + (p > 0 ? `#${p + 1}` : "");
    };

    const demande = params.get("serie");
    const nomDemande = demande && [...new Set(oeuvres.map((o) => o.serie || ""))].find((nom) => slug(nom) === demande);
    if (nomDemande !== undefined && nomDemande !== null && demande) serie = nomDemande;
    const depart = (serie === null ? selection : parcoursSerie(serie))[(parseInt(location.hash.slice(1), 10) || 1) - 1];

    const d = diaporama(diapos, {
      boucle: true, apres: index, depart: depart ?? 0, compteur, adresse,
      parcours: serie === null ? selection : parcoursSerie(serie),
    });
    const retour = document.querySelector(".bouton-selection");
    const changerParcours = (nom, n) => {
      serie = nom;
      retour.hidden = serie === null;
      d.parcours(serie === null ? selection : parcoursSerie(serie), n);
    };
    retour.hidden = serie === null;
    retour.addEventListener("click", () => changerParcours(null, selection[0]));
    initIndex((n) => changerParcours(series ? serieDe(n) : null, n));
  }

  function initIndex(ouvrir) {
    const panneau = document.querySelector(".index");
    const bouton = document.querySelector(".bouton-index");

    function basculer(ouvert) {
      panneau.hidden = !ouvert;
      document.body.classList.toggle("index-ouvert", ouvert);
      bouton.querySelector(".libelle").textContent = ouvert ? UI.fermerIndex : UI.index;
      bouton.setAttribute("aria-expanded", ouvert);
      if (ouvert) panneau.scrollTop = 0;
    }

    bouton.addEventListener("click", () => basculer(panneau.hidden));
    panneau.addEventListener("click", (e) => {
      const b = e.target.closest("button[data-n]");
      if (!b) return;
      ouvrir(+b.dataset.n);
      basculer(false);
    });
    addEventListener("keydown", (e) => { if (e.key === "Escape" && !panneau.hidden) basculer(false); });
  }

  /* ---------- Peintures murales ---------- */

  function renderMurales() {
    const diapos = SITE.murales.flatMap((m) =>
      m.vues.map((v) => ({
        html: media(v, t(m.titre)),
        legende: lignes([`<em>${esc(t(m.titre))}</em>`, esc(t(m.technique)), esc(dimensions(m.dimensions)), esc(t(m.lieu)), esc(m.annee), m.credit && `<span class="credit">${esc(m.credit)}</span>`]),
        compte: true,
      }))
    );
    diaporama(diapos, { boucle: true });
  }

  /* ---------- Vidéos ---------- */

  function renderVideos() {
    const diapos = SITE.videos.map((v) => ({
      // Vidéo : preload="none", rien n'est téléchargé tant qu'on n'appuie pas sur lecture
      html: v.image
        ? media(v.image, v.titre)
        : `<video class="video" src="${esc(v.src)}" poster="${esc(v.poster)}" controls preload="none" playsinline></video>`,
      legende: lignes([`<em>${esc(v.titre)}</em>`, esc(t(v.technique)), esc(v.duree || dimensions(v.dimensions)), esc(v.annee)]),
      compte: true,
      classe: v.image ? "" : "diapo-video", // les vidéos s'alignent sur la 1re ligne du menu
    }));
    diaporama(diapos, { boucle: true });
  }

  /* ---------- Expositions ---------- */

  const avecVues = SITE.expositions.filter((e) => e.id && e.vues);

  function renderListeExpos() {
    const rubrique = (type) => {
      let anneePrec = "";
      const items = SITE.expositions
        .filter((e) => e.type === type)
        .map((e) => {
          const an = e.annee !== anneePrec ? e.annee : "";
          anneePrec = e.annee;
          // Une ligne par exposition, comme dans le CV : « Titre, lieu »
          const texte = [e.titre && `<em>${esc(e.titre)}</em>`, esc(t(e.lieu))].filter(Boolean).join(", ");
          const k = avecVues.indexOf(e);
          return `
            <li>
              <span class="an">${esc(an)}</span>
              ${k >= 0 ? `<a href="${lien("exhibitions.html?e=" + e.id)}" data-apercu="${k}">${texte}</a>` : `<span>${texte}</span>`}
            </li>`;
        })
        .join("");
      return `<h2>${UI[type]}</h2><ul>${items}</ul>`;
    };

    const apercus = avecVues
      .map((e, k) => `<img ${k === 0 ? "src" : "data-src"}="${esc(e.vues[0].src)}" width="${e.vues[0].w}" height="${e.vues[0].h}" alt="" class="${k === 0 ? "visible" : ""}">`)
      .join("");

    document.querySelector("main").innerHTML = `
      <div class="expos">
        <div class="expos-liste">${["personnelle", "collective"].map(rubrique).join("")}</div>
        <div class="expos-apercu" aria-hidden="true">${apercus}</div>
      </div>`;

    // Au survol d'une exposition, sa première vue apparaît en grand
    const images = [...document.querySelectorAll(".expos-apercu img")];
    document.querySelectorAll("[data-apercu]").forEach((a) => {
      const montrer = () =>
        images.forEach((im, k) => {
          const visible = k === +a.dataset.apercu;
          if (visible && im.dataset.src) { im.src = im.dataset.src; im.removeAttribute("data-src"); }
          im.classList.toggle("visible", visible);
        });
      a.addEventListener("mouseenter", montrer);
      a.addEventListener("focus", montrer);
    });
  }

  // Titre, lieu, dates et texte de l'exposition (colonne de gauche ; en tête de page sur mobile)
  function infoExpo(e) {
    const type = { personnelle: "Exposition personnelle", residence: { fr: "Résidence de recherche et de création", en: "Research and creation residency" } }[e.type];
    return `
      <h1>${titreExpo(e)}</h1>
      <p class="discret">${lignes([esc(t(type)), e.titre && esc(t(e.lieu)), esc(t(e.dates) || e.annee)])}</p>
      ${t(e.texte) ? `<p>${esc(t(e.texte))}</p>` : ""}`;
  }

  // Toutes les expositions s'enchaînent dans un seul défilement : après la dernière vue
  // d'une exposition vient la première de la suivante, en fondu, sans page intermédiaire.
  // La colonne (titre, lieu, texte), le compteur et l'adresse suivent l'exposition affichée.
  // Sur téléphone, les vues sont empilées : on ne montre que l'exposition demandée.
  function renderExpo(e) {
    const mobile = matchMedia("(max-width: 800px)").matches;
    const liste = mobile ? [e] : avecVues;
    const diapos = [];
    let depart = 0;
    liste.forEach((x) => {
      if (x === e) depart = diapos.length + Math.min(e.vues.length, parseInt(location.hash.slice(1), 10) || 1) - 1;
      x.vues.forEach((v, i) =>
        diapos.push({ html: media(v, UI.vue), legende: legendeVue(v, x), compte: true, expo: x, rang: i + 1 })
      );
    });

    const info = document.querySelector(".expo-info");
    const deborde = () => info.classList.toggle("deborde", info.scrollHeight > info.clientHeight + info.scrollTop + 2);
    let affichee = null;

    diaporama(diapos, {
      boucle: !mobile,
      depart,
      avant: `<div class="expo-mobile">${infoExpo(e)}</div>`,
      compteur: (n) => `${diapos[n].rang} / ${diapos[n].expo.vues.length}`,
      adresse: (n) => `${location.pathname}?e=${diapos[n].expo.id}${diapos[n].rang > 1 ? "#" + diapos[n].rang : ""}`,
      surChangement: (n) => {
        const x = diapos[n].expo;
        if (x === affichee) return;
        affichee = x;
        document.title = `${x.titre || t(x.lieu)} — ${SITE.artiste}`;
        info.innerHTML = infoExpo(x);
        info.scrollTop = 0;
        deborde();
      },
    });

    // Sur un petit écran, le texte défile dans la colonne : un fondu en bas l'indique
    info.addEventListener("scroll", deborde, { passive: true });
    addEventListener("resize", deborde);
  }

  /* ---------- Bio ---------- */

  function renderAPropos() {
    const ligne = (an, html) => `<li><span class="an">${esc(an)}</span><span>${html}</span></li>`;
    const rubrique = (titre, items) => (items.length ? `<section><h2>${titre}</h2><ul class="liste">${items.join("")}</ul></section>` : "");
    const cv = (cle) => SITE.cv[cle].map((l) => ligne(l.an, l.lien ? `<a href="${lien(l.lien)}">${t(l.texte)}</a>` : t(l.texte)));

    // Expositions et résidences : même source que la page Expositions ; lien vers les vues quand il y en a
    const expos = (type) =>
      SITE.expositions
        .filter((e) => e.type === type)
        .map((e) => {
          const texte = [e.titre && `<em>${esc(e.titre)}</em>`, esc(t(e.lieu))].filter(Boolean).join(", ");
          return ligne(e.annee, e.vues ? `<a href="${lien("exhibitions.html?e=" + e.id)}">${texte}</a>` : texte);
        });

    // Presse : toute la ligne est cliquable et ouvre l'article
    const presse = SITE.presse.map((a) => {
      const texte = [a.media, a.titre, a.auteur, t(a.date)].filter(Boolean).map(esc).join(" / ");
      return a.lien
        ? `<li><a class="article" href="${esc(a.lien)}" target="_blank" rel="noopener">${texte}<span class="fleche" aria-hidden="true"> ↗</span></a></li>`
        : `<li><span class="article">${texte}</span></li>`;
    });

    document.querySelector("main").innerHTML = `
      <div class="page-texte page-bio">
        <div>
          <header class="bio-entete">
            <h1 class="visuellement-cache">${esc(SITE.artiste)}</h1>
            <p>${esc(t(SITE.situation))}</p>
          </header>
          <p class="presentation">${esc(t(SITE.presentation))}</p>
          <p class="bio-documents"><a href="${esc(SITE.documents.portfolio)}" target="_blank" rel="noopener">${UI.portfolio}<span class="fleche" aria-hidden="true"> ↗</span></a></p>
          ${rubrique(UI.formation, cv("formation"))}
          ${rubrique(UI.prix, cv("prix"))}
          ${rubrique(UI.residence, expos("residence"))}
          ${rubrique(UI.personnelle, expos("personnelle"))}
          ${rubrique(UI.collective, expos("collective"))}
          ${rubrique(UI.projets, cv("projets"))}
          <section><h2>${UI.presse}</h2><ul class="liste-presse">${presse.join("")}</ul></section>
        </div>
        ${portrait(SITE.portraits.apropos)}
      </div>`;
  }

  /* ---------- Contact ---------- */

  function renderContact() {
    // Seulement l'adresse : le nom, la ville et les réseaux sont déjà dans la colonne et la page Bio
    document.querySelector("main").innerHTML = `
      <div class="page-texte page-contact">
        <div>
          <h1 class="visuellement-cache">${UI.contact}</h1>
          <p><a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a></p>
        </div>
        ${portrait(SITE.portraits.contact)}
      </div>`;
  }

  const portrait = (p) => `
    <figure class="portrait">
      <img src="${esc(p.src)}" width="${p.w}" height="${p.h}" alt="${esc(SITE.artiste)}">
      ${p.credit ? `<figcaption>${esc(p.credit)}</figcaption>` : ""}
    </figure>`;

  /* ---------- Diaporama : une image à la fois, en fondu ---------- */

  // parcours : les diapositives que les flèches font défiler, dans l'ordre (toutes par défaut)
  function diaporama(diapos, { boucle, avant = "", apres = "", depart = null, compteur: texteCompteur = null, adresse = null, surChangement = null, parcours = null }) {
    document.querySelector("main").innerHTML = `${avant}
      <div class="scene">
        ${diapos
          .map(
            (d) => `
          <div class="diapo ${d.classe || ""}">
            ${d.html}
            ${d.legende ? `<div class="legende-mobile">${d.legende}</div>` : ""}
          </div>`
          )
          .join("")}
      </div>${apres}`;

    const scene = document.querySelector(".scene");
    const elements = [...scene.children];
    const numeros = []; // numéro affiché dans le compteur (seules les images comptent)
    let k = 0;
    diapos.forEach((d, n) => (numeros[n] = d.compte ? ++k : 0));

    const cartel = document.querySelector(".cartel-texte");
    const compteur = document.querySelector(".compteur");
    const prec = document.querySelector(".prec");
    const suiv = document.querySelector(".suiv");
    const mobile = matchMedia("(max-width: 800px)");
    const dernier = elements.length - 1;
    let courant = -1;
    let ordre = parcours || elements.map((_, i) => i);

    function charger(n) {
      if (!elements[n]) return;
      elements[n].querySelectorAll("img[data-src]").forEach((im) => {
        im.src = im.dataset.src;
        im.removeAttribute("data-src");
      });
    }

    // Sur mobile les images sont empilées : on charge tout, en différé
    function toutCharger() {
      scene.querySelectorAll("img[data-src]").forEach((im) => {
        im.loading = "lazy";
        im.src = im.dataset.src;
        im.removeAttribute("data-src");
      });
    }

    function montrer(n, forcer = false) {
      if (boucle) n = (n + elements.length) % elements.length;
      n = Math.max(0, Math.min(dernier, n));
      if (n === courant && !forcer) return;
      courant = n;
      elements.forEach((el, i) => {
        el.classList.toggle("active", i === n);
        el.setAttribute("aria-hidden", i !== n);
        if (i !== n) el.querySelectorAll("video").forEach((v) => v.pause());
      });
      [n, n + 1, n - 1, boucle ? dernier : -1].forEach(charger);

      cartel.innerHTML = diapos[n].legende || "";
      compteur.textContent = texteCompteur ? texteCompteur(n) : numeros[n] ? `${numeros[n]} / ${k}` : "";
      prec.disabled = !boucle && n === 0;
      suiv.disabled = !boucle && n === dernier;
      // Adresse absolue : sur les pages en/, <base href="../"> détournerait un simple "#3"
      history.replaceState(null, "", adresse ? adresse(n) : location.pathname + location.search + (n ? `#${n + 1}` : ""));
      if (surChangement) surChangement(n);
    }

    const avancer = (pas) => {
      const p = Math.max(0, ordre.indexOf(courant));
      const q = boucle ? (p + pas + ordre.length) % ordre.length : Math.max(0, Math.min(ordre.length - 1, p + pas));
      montrer(ordre[q]);
    };
    const actif = () => !mobile.matches && !document.body.classList.contains("index-ouvert");

    prec.addEventListener("click", () => avancer(-1));
    suiv.addEventListener("click", () => avancer(1));

    // Clic sur l'image : moitié gauche = précédente, moitié droite = suivante.
    // Le curseur montre une flèche dans le sens du défilement.
    const sens = (e) => (e.clientX < scene.getBoundingClientRect().left + scene.clientWidth / 2 ? -1 : 1);
    scene.addEventListener("mousemove", (e) => {
      const gauche = sens(e) < 0 && (boucle || courant > 0);
      scene.classList.toggle("vers-gauche", gauche);
      scene.classList.toggle("vers-droite", !gauche);
    });
    scene.addEventListener("click", (e) => { if (e.target.tagName === "IMG" && actif()) avancer(sens(e)); });

    addEventListener("keydown", (e) => {
      if (!actif() || (e.key === " " && e.target.closest("a, button, video"))) return;
      if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(e.key)) { e.preventDefault(); avancer(1); }
      if (["ArrowLeft", "ArrowUp", "PageUp"].includes(e.key)) { e.preventDefault(); avancer(-1); }
      if (e.key === "Home") montrer(ordre[0]);
      if (e.key === "End") montrer(ordre[ordre.length - 1]);
    });

    // Molette / trackpad : un geste = une image, dans un sens ou dans l'autre.
    // On attend la fin du geste (et de l'inertie du trackpad) avant d'accepter le suivant.
    let verrou = false, cumul = 0, silence = 0;
    scene.addEventListener(
      "wheel",
      (e) => {
        if (!actif()) return;
        e.preventDefault();
        clearTimeout(silence);
        silence = setTimeout(() => { verrou = false; cumul = 0; }, 220);
        if (verrou) return;
        const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
        cumul += d * (e.deltaMode === 1 ? 40 : 1);
        if (Math.abs(cumul) > 30) { avancer(Math.sign(cumul)); verrou = true; cumul = 0; }
      },
      { passive: false }
    );

    // Balayage tactile (tablette en paysage)
    let x0 = null;
    scene.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; }, { passive: true });
    scene.addEventListener("touchend", (e) => {
      if (!actif() || x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 50) avancer(dx < 0 ? 1 : -1);
      x0 = null;
    });

    if (mobile.matches) toutCharger();
    mobile.addEventListener("change", (m) => { if (m.matches) toutCharger(); });

    // Lien direct vers une image : paintings.html#3
    montrer(depart ?? (parseInt(location.hash.slice(1), 10) || 1) - 1);
    return {
      montrer,
      // Changer de parcours (sélection ↔ série) et afficher la diapositive n
      parcours: (liste, n) => { ordre = liste; montrer(n, true); },
    };
  }

  /* ---------- Démarrage ---------- */

  renderNav();
  if (page === "accueil") renderAccueil();
  if (page === "paintings") renderPaintings(SITE.paintings, SITE.series);
  if (page === "drawings") renderPaintings(SITE.dessins);
  if (page === "murals") renderMurales();
  if (page === "videos") renderVideos();
  if (page === "exhibitions") expo ? renderExpo(expo) : renderListeExpos();
  if (page === "about") renderAPropos();
  if (page === "contact") renderContact();
})();
