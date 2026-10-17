/*
  Contenu du site — c'est le seul fichier à modifier pour ajouter
  une œuvre, une exposition ou une actualité.

  LANGUES : le site est en français (pages à la racine) et en anglais (dossier en/).
    - un texte écrit simplement ("Huile sur toile") est traduit automatiquement
      s'il figure dans le dictionnaire TRADUCTIONS en bas de ce fichier ;
    - sinon, écrire { fr: "…", en: "…" }.

  PEINTURES : l'ordre de la liste = l'ordre du défilement.
    { src, w, h, titre, annee, technique, dimensions, serie }
    - w / h : taille de l'image en pixels
    - panneaux : [{ src, w, h }, …] à la place de src pour un diptyque/triptyque en plusieurs fichiers
    - laisser "" quand une information n'est pas connue : elle n'est pas affichée
    - les vignettes de l'index sont dans images/vignettes/ (même chemin)

  EXPOSITIONS : du plus récent au plus ancien. Une exposition avec des "vues"
  a sa propre page ; sans vues, elle apparaît seulement dans la liste.
*/

const SITE = {
  artiste: "Clémence Arnold",
  email: "clemencearnoldstudio@gmail.com",
  instagram: "https://www.instagram.com/clemencearnold/",
  vimeo: "https://vimeo.com/user67555391",

  documents: {
    portfolio: "documents/clemence-arnold-portfolio.pdf",
  },

  portraits: {
    // credit : nom du ou de la photographe — À COMPLÉTER
    apropos: { src: "images/portraits/portrait-1-nb.jpg", w: 2226, h: 2400, credit: "" },
    contact: { src: "images/portraits/portrait-visitation-6-nb.jpg", w: 2400, h: 1689, credit: "" }, // PortraitVisitation6REC
  },

  // Page Bio — ligne sous le nom, puis texte de présentation (PROPOSITION à relire :
  // reprend les phrases de la note d'intention du dossier Banjul 2027, à la troisième personne)
  situation: { fr: "Vit et travaille à Paris (FR)", en: "Lives and works in Paris (FR)" },
  presentation: {
    fr: "Clémence Arnold est une peintre française qui vit et travaille à Paris. Sa peinture se construit comme un terrain de fouille, nourrie de souvenirs d'enfance et d'archives photographiques et filmiques : chaque toile tente de faire remonter des images enfouies, par un geste qui navigue entre effacement et recouvrement, tout en préservant une part d'opacité. La végétation y occupe une place centrale — luxuriante, elle agit à la fois comme écran et comme révélateur des formes — tandis que l'eau introduit une profondeur incertaine, entre calme apparent et menace latente. Ses tableaux ne racontent jamais un récit précis : ils cherchent à faire ressentir un état, une attente, une inquiétude, une sensation de suspension. Depuis peu, son travail s'ouvre au cataclysme et au sublime, à la recherche d'images qui tiennent ensemble la menace et la protection, l'effondrement et l'abri.",
    en: "Clémence Arnold is a French painter who lives and works in Paris. Her painting is built like an excavation site, fed by childhood memories and by photographic and film archives: each canvas tries to bring buried images back to the surface, through a gesture that moves between erasing and covering over, while preserving a share of opacity. Vegetation plays a central role — lush, it acts both as a screen and as something that reveals forms — while water introduces an uncertain depth, between apparent calm and latent threat. Her paintings never tell a precise story: they seek to make a state felt, a waiting, an unease, a sense of suspension. Recently, her work has opened up to cataclysm and the sublime, in search of images that hold together threat and protection, collapse and shelter.",
  },

  // Accueil : photo en pleine page. Plusieurs versions = on passe de l'une à l'autre
  // en cliquant à gauche / à droite (pour comparer les colorimétries).
  accueilCredit: "© Luc Fauret",
  accueil: [
    // actualitesCouleur : couleur du texte « En ce moment » (à gauche, au-dessus du sol), prise dans la fresque
    { src: "images/accueil/fresque-a.jpg", w: 2800, h: 1868, actualitesCouleur: "#db8447" },  // couleur la plus saturée : orange
    { src: "images/accueil/fresque-b.jpg", w: 2800, h: 1868, actualitesCouleur: "#ebbe78" },  // couleur désaturée : ocre jaune clair
    { src: "images/accueil/fresque-nb.jpg", w: 2800, h: 1868, actualitesCouleur: "#ebbe78" },
  ],

  // Le libellé (En ce moment / À venir) est calculé à partir des dates.
  actualites: [
    {
      titre: "À bas bruit",
      type: "Exposition personnelle",
      lieu: "Centre culturel de La Visitation",
      ville: "Rue Littré, Périgueux",
      debut: "2026-09-11",
      fin: "2026-11-14",
      lien: "exhibitions.html?e=a-bas-bruit",
    },
  ],

  // DESSINS (fusains) — même présentation que les peintures
  dessins: [
    { src: "images/dessins/jonas-1.jpg", w: 2205, h: 1518, titre: "Jonas I", annee: "", technique: "Fusain sur papier", dimensions: "", serie: "Jonas" },  // À COMPLÉTER
    { src: "images/dessins/jonas-2.jpg", w: 2400, h: 1652, titre: "Jonas II", annee: "", technique: "Fusain sur papier", dimensions: "", serie: "Jonas" },  // À COMPLÉTER
    { src: "images/dessins/jonas-3.jpg", w: 2400, h: 1662, titre: "Jonas III", annee: "", technique: "Fusain sur papier", dimensions: "", serie: "Jonas" },  // À COMPLÉTER
    { src: "images/dessins/jonas-4.jpg", w: 2198, h: 1516, titre: "Jonas IV", annee: "", technique: "Fusain sur papier", dimensions: "", serie: "Jonas" },  // À COMPLÉTER
    { src: "images/dessins/jonas-5.jpg", w: 2100, h: 1331, titre: "Jonas V", annee: "", technique: "Fusain sur papier", dimensions: "", serie: "Jonas" },  // À COMPLÉTER
    { src: "images/dessins/jonas-6.jpg", w: 1860, h: 1263, titre: "Jonas VI", annee: "", technique: "Fusain sur papier", dimensions: "", serie: "Jonas" },  // À COMPLÉTER
    { src: "images/dessins/jonas-x.jpg", w: 1869, h: 1282, titre: "Jonas X", annee: "", technique: "Fusain sur papier", dimensions: "", serie: "Jonas" },  // À COMPLÉTER
    { src: "images/dessins/woods-i.jpg", w: 2400, h: 1677, titre: "Woods I", annee: "", technique: "Fusain sur papier", dimensions: "", serie: "" },  // À COMPLÉTER
    { src: "images/dessins/pierre-et-jean-fusain.jpg", w: 1688, h: 2400, titre: "Pierre et Jean", annee: "", technique: "Fusain sur papier", dimensions: "", serie: "" },  // À COMPLÉTER
    { src: "images/dessins/algorithme-fusain-i.jpg", w: 2246, h: 1552, titre: "Algorithme I", annee: "", technique: "Fusain sur papier", dimensions: "", serie: "Algorithmes" },  // À COMPLÉTER
    { src: "images/dessins/algorithme-fusain-ii.jpg", w: 1358, h: 1241, titre: "Algorithme II", annee: "", technique: "Fusain sur papier", dimensions: "", serie: "Algorithmes" },  // À COMPLÉTER
  ],

  // PEINTURES — scénographie, pas chronologique :
  // l'eau et les baigneurs → la nuit et la végétation → la tempête et le feu → la mémoire → l'intime.
  // Les images sont recadrées au ras de la toile pour que toutes s'affichent à la même échelle.
  paintings: [
    { src: "images/peintures/en-attendant-la-foret.jpg", w: 2400, h: 1492, titre: "En attendant la forêt", annee: "2024", technique: "Huile sur toile, diptyque", dimensions: "162 × 260 cm", serie: "Lost Eden" },
    { src: "images/peintures/the-sanctuary.jpg", w: 2400, h: 1703, titre: "The Sanctuary", annee: "2025", technique: "Huile sur toile, diptyque", dimensions: "162 × 228 cm", serie: "Lost Eden" },
    { src: "images/peintures/black-pool.jpg", w: 2400, h: 1471, titre: "Black Pool", annee: "2024", technique: "Huile sur toile, diptyque", dimensions: "50 × 80 cm", serie: "Lost Eden" },
    { src: "images/peintures/reflective-pool.jpg", w: 2400, h: 1668, titre: "Reflective Pool", annee: "2021", technique: "Huile sur toile", dimensions: "114 × 162 cm", serie: "Lost Eden" },
    { src: "images/peintures/baignade-interdite.jpg", w: 2400, h: 1669, titre: "Baignade interdite", annee: "2021", technique: "Huile sur toile", dimensions: "114 × 162 cm", serie: "Lost Eden" },
    { src: "images/peintures/abbots-pool-iv.jpg", w: 2400, h: 1702, titre: "Abbots' Pool IV", annee: "", technique: "", dimensions: "", serie: "Abbots' Lilies" },  // À COMPLÉTER
    { src: "images/peintures/en-silence-i.jpg", w: 2400, h: 1909, titre: "En silence I", annee: "", technique: "Huile", dimensions: "", serie: "Abbots' Lilies" },  // À COMPLÉTER
    { src: "images/peintures/en-silence-ii.jpg", w: 2400, h: 1903, titre: "En silence II", annee: "", technique: "Huile", dimensions: "", serie: "Abbots' Lilies" },  // À COMPLÉTER
    { src: "images/peintures/en-silence-iii.jpg", w: 2400, h: 1921, titre: "En silence III", annee: "", technique: "Huile", dimensions: "", serie: "Abbots' Lilies" },  // À COMPLÉTER
    { src: "images/peintures/abbots-pool-ii.jpg", w: 1966, h: 2400, titre: "Abbots' Pool II", annee: "2023", technique: "Huile sur toile", dimensions: "46 × 38 cm", serie: "Abbots' Lilies" },
    { src: "images/peintures/abbots-lilies-ii.jpg", w: 1680, h: 2400, titre: "Abbots' Lilies II", annee: "2024", technique: "Huile sur toile", dimensions: "92 × 65 cm", serie: "Abbots' Lilies" },
    { src: "images/peintures/abbots-lilies-iii.jpg", w: 1707, h: 2400, titre: "Abbots' Lilies III", annee: "2024", technique: "Huile sur toile", dimensions: "92 × 65 cm", serie: "Abbots' Lilies" },
    { src: "images/peintures/abbots-lilies-iv.jpg", w: 2400, h: 1692, titre: "Abbots' Lilies IV", annee: "", technique: "", dimensions: "", serie: "Abbots' Lilies" },  // À COMPLÉTER
    { src: "images/peintures/abbots-lilies-v.jpg", w: 2400, h: 1689, titre: "Abbots' Lilies V", annee: "", technique: "", dimensions: "", serie: "Abbots' Lilies" },  // À COMPLÉTER
    { src: "images/peintures/cerne-abbey-1.jpg", w: 2400, h: 1677, titre: "Cerne Abbey I", annee: "", technique: "Huile sur papier", dimensions: "", serie: "Cerne Abbey" },  // À COMPLÉTER
    { src: "images/peintures/cerne-abbey-2.jpg", w: 2400, h: 1642, titre: "Cerne Abbey II", annee: "", technique: "Huile sur papier", dimensions: "", serie: "Cerne Abbey" },  // À COMPLÉTER
    { src: "images/peintures/cerne-abbey-3.jpg", w: 2400, h: 1658, titre: "Cerne Abbey III", annee: "", technique: "Huile sur papier", dimensions: "", serie: "Cerne Abbey" },  // À COMPLÉTER
    { src: "images/peintures/cerne-abbey-4.jpg", w: 2400, h: 1698, titre: "Cerne Abbey IV", annee: "", technique: "Huile sur papier", dimensions: "", serie: "Cerne Abbey" },  // À COMPLÉTER
    { src: "images/peintures/cerne-abbey-5.jpg", w: 2400, h: 1688, titre: "Cerne Abbey V", annee: "", technique: "Huile sur papier", dimensions: "", serie: "Cerne Abbey" },  // À COMPLÉTER
    { src: "images/peintures/chien-i.jpg", w: 1427, h: 1724, titre: "Chien I", annee: "", technique: "", dimensions: "", serie: "Abbots' Lilies" },  // À COMPLÉTER
    { src: "images/peintures/abbots-sans-titre.jpg", w: 1750, h: 2400, titre: "", annee: "", technique: "", dimensions: "", serie: "Abbots' Lilies" },  // À COMPLÉTER
    { src: "images/peintures/derriere-la-vitre.jpg", w: 1594, h: 2400, titre: "Derrière la vitre", annee: "", technique: "", dimensions: "", serie: "Vision nocturne" },  // À COMPLÉTER
    { src: "images/peintures/dernier-rayon-24x33.jpg", w: 2400, h: 1723, titre: "Dernier rayon", annee: "", technique: "", dimensions: "24 × 33 cm", serie: "Vision nocturne" },  // À COMPLÉTER
    { src: "images/peintures/dernier-rayon-21x31.jpg", w: 2400, h: 1626, titre: "Dernier rayon", annee: "", technique: "", dimensions: "21 × 31 cm", serie: "Vision nocturne" },  // À COMPLÉTER
    { src: "images/peintures/vision-nocturne-ii.jpg", w: 1589, h: 2400, titre: "Vision nocturne II", annee: "2018", technique: "Huile sur toile", dimensions: "195 × 130 cm", serie: "Vision nocturne" },
    { src: "images/peintures/vision-nocturne-iv.jpg", w: 2400, h: 1574, titre: "Vision nocturne IV", annee: "2018", technique: "Huile sur toile", dimensions: "130 × 195 cm", serie: "Vision nocturne" },
    { src: "images/peintures/vision-nocturne-v.jpg", w: 2400, h: 1606, titre: "Vision nocturne V", annee: "2018", technique: "Huile sur toile", dimensions: "130 × 195 cm", serie: "Vision nocturne" },
    { src: "images/peintures/ruines-du-souvenir.jpg", w: 1889, h: 932, centrer: true, credit: "© Ludovic Marquier", titre: "Ruines du souvenir", annee: "2020", technique: "Huile sur toile, triptyque", dimensions: "195 × 390 cm", serie: "Vision nocturne" },
    { src: "images/peintures/nightlife.jpg", w: 2400, h: 1864, titre: "Nightlife", annee: "2018", technique: "Huile sur toile", dimensions: "50 × 65 cm", serie: "Vision nocturne" },
    { src: "images/peintures/petite-jungle.jpg", w: 2400, h: 1832, titre: "Petite Jungle", annee: "2020", technique: "Huile sur papier marouflé sur toile", dimensions: "31 × 41 cm", serie: "" },
    { src: "images/peintures/dans-la-cour-i.jpg", w: 1812, h: 2400, titre: "Dans la cour I", annee: "", technique: "Huile sur papier", dimensions: "", serie: "" },  // À COMPLÉTER
    { src: "images/peintures/cache.jpg", w: 2400, h: 1793, titre: "Caché", annee: "", technique: "Huile sur papier", dimensions: "31 × 41 cm", serie: "" },  // À COMPLÉTER
    { src: "images/peintures/papier-h72-4860.jpg", w: 1821, h: 2400, titre: "", annee: "", technique: "Huile sur papier", dimensions: "", serie: "" },  // À COMPLÉTER
    { src: "images/peintures/banana-road-i.jpg", w: 2400, h: 1770, titre: "Banana Road I", annee: "2024", technique: "Huile sur papier marouflé sur toile", dimensions: "23 × 31 cm", serie: "Lost Eden" },
    { src: "images/peintures/banana-road-ii.jpg", w: 2400, h: 1764, titre: "Banana Road II", annee: "2024", technique: "Huile sur papier marouflé sur toile", dimensions: "23 × 31 cm", serie: "Lost Eden" },
    { src: "images/peintures/pierre-et-jean.jpg", w: 1810, h: 2400, titre: "Pierre et Jean", annee: "2022", technique: "Huile sur papier marouflé sur toile", dimensions: "41 × 31 cm", serie: "Lost Eden" },
    { src: "images/peintures/little-haiti.jpg", w: 1800, h: 2400, titre: "Little Haïti", annee: "2022", technique: "Huile sur papier marouflé sur toile", dimensions: "41 × 31 cm", serie: "Lost Eden" },
    { src: "images/peintures/mama.jpg", w: 1824, h: 2400, titre: "Mama", annee: "", technique: "Huile sur papier", dimensions: "", serie: "" },  // À COMPLÉTER
    { src: "images/peintures/de-dos.jpg", w: 2400, h: 1803, titre: "De dos", annee: "", technique: "Huile sur papier", dimensions: "", serie: "" },  // À COMPLÉTER
    { src: "images/peintures/au-loin.jpg", w: 2400, h: 1787, titre: "Au loin", annee: "", technique: "Huile sur papier", dimensions: "", serie: "" },  // À COMPLÉTER
    { src: "images/peintures/palmiers-i.jpg", w: 1229, h: 1920, titre: "Palmiers I", annee: "2025", technique: "Huile sur toile", dimensions: "", serie: "Palmiers et tempêtes" },  // À COMPLÉTER
    { src: "images/peintures/palmiers-ii.jpg", w: 1564, h: 2400, titre: "Palmiers II", annee: "2025", technique: "Huile sur toile", dimensions: "", serie: "Palmiers et tempêtes" },  // À COMPLÉTER
    { src: "images/peintures/palmiers-iii.jpg", w: 2179, h: 1537, titre: "Palmiers III", annee: "2025", technique: "Huile sur toile", dimensions: "", serie: "Palmiers et tempêtes" },  // À COMPLÉTER
    { src: "images/peintures/palmiers-iv.jpg", w: 2400, h: 1711, titre: "Palmiers IV", annee: "2025", technique: "Huile sur toile", dimensions: "", serie: "Palmiers et tempêtes" },  // À COMPLÉTER
    { src: "images/peintures/le-bruit-du-silence-i.jpg", w: 1200, h: 1690, titre: "Le bruit du silence I", annee: "", technique: "", dimensions: "", serie: "Palmiers et tempêtes" },  // À COMPLÉTER
    { src: "images/peintures/le-bruit-du-silence-ii.jpg", w: 1212, h: 1696, titre: "Le bruit du silence II", annee: "", technique: "", dimensions: "", serie: "Palmiers et tempêtes" },  // À COMPLÉTER
    { src: "images/peintures/le-bruit-du-silence-iii.jpg", w: 1235, h: 1726, titre: "Le bruit du silence III", annee: "", technique: "", dimensions: "", serie: "Palmiers et tempêtes" },  // À COMPLÉTER
    { src: "images/peintures/le-bruit-du-silence-iv.jpg", w: 1236, h: 1717, titre: "Le bruit du silence IV", annee: "", technique: "", dimensions: "", serie: "Palmiers et tempêtes" },  // À COMPLÉTER
    { src: "images/peintures/palmiers-dscf4295.jpg", w: 2400, h: 1897, titre: "", annee: "", technique: "", dimensions: "", serie: "Palmiers et tempêtes" },  // À COMPLÉTER
    { src: "images/peintures/palmiers-dscf4294.jpg", w: 1964, h: 2400, titre: "", annee: "", technique: "", dimensions: "", serie: "Palmiers et tempêtes" },  // À COMPLÉTER
    { src: "images/peintures/palmiers-dscf4238.jpg", w: 1589, h: 1943, titre: "", annee: "", technique: "", dimensions: "", serie: "Palmiers et tempêtes" },  // À COMPLÉTER
    { src: "images/peintures/palmiers-dscf4240.jpg", w: 2139, h: 1693, titre: "", annee: "", technique: "", dimensions: "", serie: "Palmiers et tempêtes" },  // À COMPLÉTER
    { src: "images/peintures/a-bas-bruit-ii.jpg", w: 2317, h: 2040, titre: "À bas bruit II", annee: "2026", technique: "Huile sur bois", dimensions: "25 × 28 cm", serie: "À bas bruit" },
    { src: "images/peintures/a-bas-bruit-iv.jpg", w: 2201, h: 1938, titre: "À bas bruit IV", annee: "2026", technique: "Huile sur bois", dimensions: "25 × 28 cm", serie: "À bas bruit" },
    { src: "images/peintures/a-bas-bruit-v.jpg", w: 2049, h: 1809, titre: "À bas bruit V", annee: "2026", technique: "Huile sur bois", dimensions: "25 × 28 cm", serie: "À bas bruit" },
    { src: "images/peintures/a-bas-bruit-vi.jpg", w: 1867, h: 1648, titre: "À bas bruit VI", annee: "2026", technique: "Huile sur bois", dimensions: "25 × 28 cm", serie: "À bas bruit" },
    { src: "images/peintures/a-bas-bruit-vii.jpg", w: 2210, h: 1947, titre: "À bas bruit VII", annee: "2026", technique: "Huile sur bois", dimensions: "25 × 28 cm", serie: "À bas bruit" },
    { src: "images/peintures/a-bas-bruit-viii.jpg", w: 2045, h: 1800, titre: "À bas bruit VIII", annee: "2026", technique: "Huile sur bois", dimensions: "25 × 28 cm", serie: "À bas bruit" },
    { src: "images/peintures/a-bas-bruit-x.jpg", w: 1925, h: 1693, titre: "À bas bruit X", annee: "2026", technique: "Huile sur bois", dimensions: "25 × 28 cm", serie: "À bas bruit" },
    { src: "images/peintures/a-bas-bruit-xi.jpg", w: 1889, h: 1666, titre: "À bas bruit XI", annee: "2026", technique: "Huile sur bois", dimensions: "25 × 28 cm", serie: "À bas bruit" },
    { src: "images/peintures/ma-memoire-floue-i.jpg", w: 2400, h: 1727, titre: "Ma mémoire floue I", annee: "", technique: "", dimensions: "", serie: "Ma mémoire floue" },  // À COMPLÉTER
    { src: "images/peintures/ma-memoire-floue-ii-1.jpg", w: 2400, h: 1739, titre: "Ma mémoire floue II", annee: "", technique: "", dimensions: "", serie: "Ma mémoire floue" },  // À COMPLÉTER
    { src: "images/peintures/ma-memoire-floue-ii-2.jpg", w: 2400, h: 1713, titre: "Ma mémoire floue II", annee: "", technique: "", dimensions: "", serie: "Ma mémoire floue" },  // À COMPLÉTER
    { src: "images/peintures/ma-memoire-floue-iv.jpg", w: 2400, h: 1671, titre: "Ma mémoire floue IV", annee: "", technique: "", dimensions: "", serie: "Ma mémoire floue" },  // À COMPLÉTER
    { src: "images/peintures/anniversaire-i.jpg", w: 2400, h: 1804, titre: "Anniversaire I", annee: "", technique: "", dimensions: "", serie: "Anniversaire" },  // À COMPLÉTER
    { src: "images/peintures/anniversaire-ii.jpg", w: 2400, h: 1834, titre: "Anniversaire II", annee: "", technique: "", dimensions: "", serie: "Anniversaire" },  // À COMPLÉTER
    { src: "images/peintures/anniversaire-iii.jpg", w: 2400, h: 1830, titre: "Anniversaire III", annee: "", technique: "", dimensions: "", serie: "Anniversaire" },  // À COMPLÉTER
    { src: "images/peintures/anniversaire-iv.jpg", w: 2400, h: 1814, titre: "Anniversaire IV", annee: "", technique: "", dimensions: "", serie: "Anniversaire" },  // À COMPLÉTER
    { src: "images/peintures/anniversaire-v.jpg", w: 2400, h: 1817, titre: "Anniversaire V", annee: "", technique: "", dimensions: "", serie: "Anniversaire" },  // À COMPLÉTER
    { src: "images/peintures/anniversaire-vi.jpg", w: 2400, h: 1600, titre: "Anniversaire VI", annee: "", technique: "", dimensions: "", serie: "Anniversaire" },  // À COMPLÉTER
    { src: "images/peintures/vase-1.jpg", w: 2400, h: 1814, titre: "Vase #1", annee: "2019", technique: "Huile sur papier", dimensions: "32,5 × 50 cm", serie: "Vases" },
    { src: "images/peintures/vase-2.jpg", w: 2400, h: 1859, titre: "Vase #2", annee: "", technique: "", dimensions: "", serie: "Vases" },  // À COMPLÉTER
    { src: "images/peintures/vase-3.jpg", w: 2400, h: 1836, titre: "Vase #3", annee: "2019", technique: "Huile sur papier", dimensions: "32,5 × 50 cm", serie: "Vases" },
    { src: "images/peintures/vase-4.jpg", w: 2400, h: 1843, titre: "Vase #4", annee: "", technique: "", dimensions: "", serie: "Vases" },  // À COMPLÉTER
    { src: "images/peintures/vase-5.jpg", w: 2400, h: 1829, titre: "Vase #5", annee: "2019", technique: "Huile sur papier", dimensions: "32,5 × 50 cm", serie: "Vases" },
    { src: "images/peintures/vase-6.jpg", w: 2400, h: 1793, titre: "Vase #6", annee: "2019", technique: "Huile sur papier", dimensions: "32,5 × 50 cm", serie: "Vases" },
  ],

  // type : "personnelle", "collective" ou "residence" (rubrique de la liste)
  // vues : les photos choisies dans SITE 2026_V2/Visuels/_Expositions
  expositions: [
    {
      id: "a-bas-bruit",
      type: "personnelle",
      annee: "2026",
      titre: "À bas bruit",
      lieu: "Centre culturel de La Visitation, Périgueux",
      dates: { fr: "11 septembre – 14 novembre 2026", en: "11 September – 14 November 2026" },
      texte: {
        fr: "Lauréate de l'appel à projets national de la Ville de Périgueux, Clémence Arnold investit deux espaces qui dialoguent entre eux. Dans la chapelle, une douzaine d'huiles sur bois et une toile grand format réalisées pour l'occasion se déploient autour d'une peinture murale réalisée in situ : des images de basculement, de débordement et de disparition, volontairement ouvertes à l'interprétation. La salle d'exposition rassemble des toiles plus anciennes où affleurent déjà la mémoire, la menace et le pressentiment d'un événement latent.",
        en: "Selected through the City of Périgueux's national open call, Clémence Arnold takes over two spaces in dialogue. In the former chapel, a dozen oil paintings on wood and a large canvas made for the occasion surround a mural painted on site: images of tipping over, overflowing and disappearing, deliberately left open to interpretation. The exhibition room brings together earlier canvases in which memory, threat and the sense of an impending event already surface.",
      },
      vues: [
        { src: "images/expositions/a-bas-bruit/chapelle-1.jpg", w: 2400, h: 1601, legende: { fr: "La chapelle<br>Peinture murale in situ, acrylique, 376 × 834 cm et 376 × 370 cm", en: "The chapel<br>Site-specific mural, acrylic, 376 × 834 cm and 376 × 370 cm" } , credit: "© Luc Fauret" },
        { src: "images/expositions/a-bas-bruit/chapelle-2.jpg", w: 2400, h: 1601, legende: { fr: "La chapelle", en: "The chapel" } , credit: "© Luc Fauret" },
        { src: "images/expositions/a-bas-bruit/chapelle-3.jpg", w: 2400, h: 1601, legende: { fr: "La chapelle", en: "The chapel" } , credit: "© Luc Fauret" },
        { src: "images/expositions/a-bas-bruit/chapelle-4.jpg", w: 2400, h: 1601, legende: { fr: "La chapelle", en: "The chapel" } , credit: "© Luc Fauret" },
        { src: "images/expositions/a-bas-bruit/chapelle-5.jpg", w: 2400, h: 1601, legende: { fr: "La chapelle<br>De gauche à droite : <em>À bas bruit I à VIII</em>, huile sur bois, 25 × 28 cm chacune", en: "The chapel<br>Left to right: <em>À bas bruit I to VIII</em>, oil on wood, 25 × 28 cm each" } , credit: "© Luc Fauret" },
        { src: "images/expositions/a-bas-bruit/chapelle-6.jpg", w: 2400, h: 1601, legende: { fr: "La chapelle", en: "The chapel" } , credit: "© Luc Fauret" },
        { src: "images/expositions/a-bas-bruit/chapelle-7.jpg", w: 2400, h: 1601, legende: { fr: "La chapelle", en: "The chapel" } , credit: "© Luc Fauret" },
        { src: "images/expositions/a-bas-bruit/salle-1.jpg", w: 2400, h: 1601, legende: { fr: "La salle d'exposition<br><em>Ruines du souvenir</em>, 2020", en: "The exhibition room<br><em>Ruines du souvenir</em>, 2020" } , credit: "© Luc Fauret" },
        { src: "images/expositions/a-bas-bruit/salle-2.jpg", w: 2400, h: 1601, legende: { fr: "La salle d'exposition<br><em>Ruines du souvenir</em>, 2020, et <em>En attendant la forêt</em>, 2024", en: "The exhibition room<br><em>Ruines du souvenir</em>, 2020, and <em>En attendant la forêt</em>, 2024" } , credit: "© Luc Fauret" },
        { src: "images/expositions/a-bas-bruit/salle-3.jpg", w: 2400, h: 1601, legende: { fr: "La salle d'exposition", en: "The exhibition room" } , credit: "© Luc Fauret" },
        { src: "images/expositions/a-bas-bruit/salle-4.jpg", w: 2400, h: 1601, legende: { fr: "La salle d'exposition", en: "The exhibition room" } , credit: "© Luc Fauret" },
      ],
    },
    {
      id: "bouchor-2023", type: "personnelle", annee: "2023", titre: "", lieu: "Espace Bouchor, Paris",
      vues: [
        { src: "images/expositions/bouchor-2023/1.jpg", w: 2400, h: 1600, legende: "" },
        { src: "images/expositions/bouchor-2023/2.jpg", w: 2400, h: 1600, legende: "" },
        { src: "images/expositions/bouchor-2023/3.jpg", w: 2400, h: 1600, legende: "" },
        { src: "images/expositions/bouchor-2023/4.jpg", w: 2400, h: 1600, legende: "" },
        { src: "images/expositions/bouchor-2023/5.jpg", w: 2400, h: 1600, legende: "" },
        { src: "images/expositions/bouchor-2023/6.jpg", w: 2400, h: 1600, legende: "" },
        { src: "images/expositions/bouchor-2023/7.jpg", w: 2400, h: 1600, legende: "" },
      ],
    },

    {
      id: "montparnasse-2024", type: "collective", annee: "2024", titre: "Ce qui est vivant tend à disparaître", lieu: "Galerie du Montparnasse, Paris",
      vues: [
        { src: "images/expositions/montparnasse-2024/1.jpg", w: 2400, h: 1600, legende: "" },
        { src: "images/expositions/montparnasse-2024/2.jpg", w: 2400, h: 1600, legende: "" },
        { src: "images/expositions/montparnasse-2024/3.jpg", w: 2400, h: 1600, legende: "", credit: "© Collectif Le Réseau" },
      ],
    },
    {
      id: "in-situ-2023", type: "collective", annee: "2023", titre: "IN SITU", lieu: "Espace Art et Liberté, Charenton-le-Pont",
      vues: [
        { src: "images/expositions/in-situ-2023/1.jpg", w: 2400, h: 1800, legende: "" },
        { src: "images/expositions/in-situ-2023/3.jpg", w: 2400, h: 1800, legende: "" },
        { src: "images/expositions/in-situ-2023/4.jpg", w: 1800, h: 2400, legende: "" },
        { src: "images/expositions/in-situ-2023/6.jpg", w: 2400, h: 1800, legende: "" },
        { src: "images/expositions/in-situ-2023/7.jpg", w: 1800, h: 2400, legende: "" },
      ],
    },
    {
      id: "montparnasse-2022", type: "collective", annee: "2022", titre: "", lieu: "Galerie du Montparnasse, Paris",
      vues: [
        { src: "images/expositions/montparnasse-2022/1.jpg", w: 2400, h: 1600, legende: "<em>Ruines du souvenir</em>, 2020", credit: "© Collectif Le Réseau" },
        { src: "images/expositions/montparnasse-2022/2.jpg", w: 2048, h: 1368, legende: "<em>Ruines du souvenir</em>, 2020", credit: "© Ludovic Marquier" },
        { src: "images/expositions/montparnasse-2022/3.jpg", w: 2048, h: 1368, legende: "<em>Ruines du souvenir</em>, 2020", credit: "© Ludovic Marquier" },
        { src: "images/expositions/montparnasse-2022/4.jpg", w: 2400, h: 2066, legende: "<em>Ruines du souvenir</em>, 2020", credit: "© Collectif Le Réseau" },
        { src: "images/expositions/montparnasse-2022/5.jpg", w: 2048, h: 1152, legende: "<em>Ruines du souvenir</em>, 2020" },
      ],
    },
    {
      id: "beaurepaire-2021", type: "collective", annee: "2021", titre: "Prix de l'Espace Beaurepaire", lieu: "Espace Beaurepaire, Paris",
      vues: [
        { src: "images/expositions/beaurepaire-2021/1.jpg", w: 1024, h: 768, legende: "" },
        { src: "images/expositions/beaurepaire-2021/2.jpg", w: 1024, h: 768, legende: "" },
        { src: "images/expositions/beaurepaire-2021/3.jpg", w: 1024, h: 768, legende: "" },
        { src: "images/expositions/beaurepaire-2021/4.jpg", w: 1024, h: 768, legende: "" },
      ],
    },
    // Vie d'Artiste 2019 : pas de vues (aucune photo satisfaisante)
    { type: "collective", annee: "2019", titre: "Vie d'Artiste", lieu: "Espace Beaurepaire, Paris" },
    { type: "collective", annee: "2019", titre: "87e salon de la Société artistique d'Étampes", lieu: "Étampes" },
    {
      id: "mons-2019", type: "collective", annee: "2019", titre: "De la forêt à moi", lieu: { fr: "Biennale de Mons, Beaux-Arts de Mons, Belgique", en: "Mons Biennial, Beaux-Arts de Mons, Belgium" },
      vues: [
        { src: "images/expositions/mons-2019/1.jpg", w: 2400, h: 1800, legende: "" },
        { src: "images/expositions/mons-2019/2.jpg", w: 2305, h: 1536, legende: "" },
        { src: "images/expositions/mons-2019/3.jpg", w: 2304, h: 1536, legende: "" },
      ],
    },
    {
      id: "p-retro-2019", type: "collective", annee: "2019", titre: "P:Rétro", lieu: { fr: "Centre culturel coréen, Paris", en: "Korean Cultural Centre, Paris" },
      vues: [
        { src: "images/expositions/p-retro-2019/1.jpg", w: 2400, h: 1600, legende: "" },
        { src: "images/expositions/p-retro-2019/2.jpg", w: 2400, h: 1889, legende: "" },
        { src: "images/expositions/p-retro-2019/3.jpg", w: 2400, h: 1600, legende: "" },
        { src: "images/expositions/p-retro-2019/4.jpg", w: 1600, h: 2400, legende: "" },
      ],
    },
    {
      id: "etampes-2018", type: "collective", annee: "2018", titre: "86e salon de la Société artistique d'Étampes", lieu: "Étampes",
      vues: [
        { src: "images/expositions/etampes-2018/1.jpg", w: 2237, h: 2400, legende: "" },
      ],
    },
    {
      id: "journet-2018", type: "collective", annee: "2018", titre: "Rêver le monde", lieu: "Maviaux, Journet",
      vues: [
        { src: "images/expositions/journet-2018/1.jpg", w: 1512, h: 2016, legende: "" },
        { src: "images/expositions/journet-2018/2.jpg", w: 2016, h: 1512, legende: "" },
        { src: "images/expositions/journet-2018/3.jpg", w: 2400, h: 1414, legende: "" },
        { src: "images/expositions/journet-2018/4.jpg", w: 2016, h: 1512, legende: "" },
        { src: "images/expositions/journet-2018/5.jpg", w: 2400, h: 1914, legende: "" },
        { src: "images/expositions/journet-2018/6.jpg", w: 2400, h: 1500, legende: "" },
      ],
    },
    { type: "collective", annee: "2016", titre: "From Here", lieu: "La Galcante, Paris" },
    { type: "collective", annee: "2015", titre: "", lieu: { fr: "Seven Dials Club, Londres, Royaume-Uni", en: "Seven Dials Club, London, UK" } },

    { type: "residence", annee: "2024–2026", titre: "", lieu: "Villa Beaunier, Paris" },
    { type: "residence", annee: "2022–2024", titre: "", lieu: "Les Ateliers Daguerre, Paris" },
    { type: "residence", annee: "2021", titre: "", lieu: { fr: "Nes Artist Residency, Islande", en: "Nes Artist Residency, Iceland" } },
  ],

  // PEINTURES MURALES : un projet = quelques vues, du plus récent au plus ancien
  murales: [
    {
      // Année : 2022 selon toi, 2023 dans le CV du dossier Banjul — à vérifier. Technique à préciser.
      titre: { fr: "Peinture murale dans l'espace public", en: "Mural in public space" }, annee: "2022",
      lieu: { fr: "Ateliers Daguerre, Paris 14e", en: "Ateliers Daguerre, Paris 14th" },
      technique: "", dimensions: "10 × 2 m",
      credit: "© Collectif Le Réseau",
      vues: [
        { src: "images/murales/daguerre/1.jpg", w: 2400, h: 1600 },
        { src: "images/murales/daguerre/2.jpg", w: 2400, h: 1600 },
        { src: "images/murales/daguerre/3.jpg", w: 2400, h: 1600 },
        { src: "images/murales/daguerre/4.jpg", w: 2400, h: 1600 },
      ],
    },
  ],

  // VIDÉOS & IMAGES : les films, puis les images numériques (Algorithmes).
  // Pour une image imprimée, préciser dans technique, ex. « Image numérique, impression sur Dibond ».
  // Années et dimensions à compléter.
  videos: [
    { src: "videos/la-nuit.mp4", poster: "videos/la-nuit.jpg", titre: "La nuit", annee: "2017", duree: "4'02", technique: { fr: "Vidéo couleur, son", en: "Colour video, sound" } },
    { src: "videos/jeux-de-nuit.mp4", poster: "videos/jeux-de-nuit.jpg", titre: "Jeux de nuit", annee: "2019", duree: "2'02", technique: { fr: "Vidéo couleur, son", en: "Colour video, sound" } },
    { image: { src: "images/numeriques/algorithme-i.jpg", w: 2262, h: 1599 }, titre: "Algorithme I", annee: "", technique: { fr: "Image numérique", en: "Digital image" }, dimensions: "" },
    { image: { src: "images/numeriques/algorithme-ii.jpg", w: 2264, h: 1596 }, titre: "Algorithme II", annee: "", technique: { fr: "Image numérique", en: "Digital image" }, dimensions: "" },
    { image: { src: "images/numeriques/algorithme-iii.jpg", w: 2263, h: 1595 }, titre: "Algorithme III", annee: "", technique: { fr: "Image numérique", en: "Digital image" }, dimensions: "" },
    { image: { src: "images/numeriques/algorithme-iv.jpg", w: 2262, h: 1599 }, titre: "Algorithme IV", annee: "", technique: { fr: "Image numérique", en: "Digital image" }, dimensions: "" },
  ],

  // Rubriques du CV de la page Bio. Les expositions et résidences viennent de la liste "expositions" ci-dessus.
  cv: {
    formation: [
      { an: "2017–2019", texte: { fr: "Master recherche Arts plastiques, École des arts de la Sorbonne, Paris", en: "Research Master's in Visual Arts, École des arts de la Sorbonne, Paris" } },
      { an: "2014–2017", texte: { fr: "Licence Arts plastiques, École des arts de la Sorbonne, Paris", en: "Bachelor's in Visual Arts, École des arts de la Sorbonne, Paris" } },
      { an: "2013–2016", texte: { fr: "Ateliers des Beaux-Arts de la Ville de Paris (Glacière), atelier de peinture de Gonzalo Belmonte", en: "Ateliers des Beaux-Arts de la Ville de Paris (Glacière), painting studio of Gonzalo Belmonte" } },
      { an: "2014–2015", texte: { fr: "Formation en réalisation et montage de court-métrage, Ville de Paris", en: "Short film directing and editing course, City of Paris" } },
    ],
    prix: [
      { an: "2021", texte: { fr: "Sélectionnée pour le Prix de l'Espace Beaurepaire, Paris", en: "Shortlisted for the Prix de l'Espace Beaurepaire, Paris" } },
    ],
    projets: [
      { an: "2022", texte: { fr: "Peinture murale dans l'espace public (10 × 2 m), Ateliers Daguerre, Paris 14e", en: "Mural in public space (10 × 2 m), Ateliers Daguerre, Paris 14th" }, lien: "murals.html" },
      { an: "2022–2023", texte: { fr: "Projet avec le collectif Invisibles Aventuriers, square Wyszynski, Paris 14e : ateliers vidéo et médiation auprès d'enfants, réalisation de 12 films documentaires", en: "Project with the Invisibles Aventuriers collective, square Wyszynski, Paris 14th: video workshops with children and 12 documentary films" } },
    ],
  },

  // Presse : chaque ligne ouvre l'article (lien = PDF du scan, ou adresse de l'article en ligne)
  presse: [
    { media: "Parcours des Arts", titre: "Édens enfouis", auteur: "Delphine Lefebvre", date: { fr: "sept. 2026", en: "Sept 2026" }, lien: "documents/presse/parcours-des-arts-2026.pdf" },
    { media: "Dordogne Libre", titre: "La fresque de Clémence Arnold se dévoile dans la chapelle de la Visitation", auteur: "Mathis Planès", date: { fr: "15 sept. 2026", en: "15 Sept 2026" }, lien: "documents/presse/dordogne-libre-2026.pdf" },
    { media: "PointCulture", titre: "GO ! Parcours jeunes artistes à Mons", auteur: "Pierre Hemptinne", date: { fr: "8 mai 2019", en: "8 May 2019" }, lien: "https://www.pointculture.be/magazine/articles/focus/go-parcours-jeunes-artistes-mons/" },
  ],
};

// Traductions automatiques des textes qui reviennent souvent (français → anglais)
const TRADUCTIONS = {
  "Huile": "Oil",
  "Huile sur bois": "Oil on wood",
  "Fusain sur papier": "Charcoal on paper",
  "Huile sur toile": "Oil on canvas",
  "Huile sur toile, diptyque": "Oil on canvas, diptych",
  "Huile sur toile, triptyque": "Oil on canvas, triptych",
  "Huile sur papier": "Oil on paper",
  "Huile sur papier marouflé sur toile": "Oil on paper mounted on canvas",
  "Exposition personnelle": "Solo exhibition",
  "La chapelle": "The chapel",
  "La salle d'exposition": "The exhibition room",
  "Centre culturel de La Visitation": "La Visitation cultural centre",
  "Centre culturel de La Visitation, Périgueux": "La Visitation cultural centre, Périgueux",
};
