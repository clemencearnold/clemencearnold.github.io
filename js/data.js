/*
  Contenu du site — c'est le seul fichier à modifier pour ajouter
  une œuvre, une exposition ou une actualité.

  LANGUES : le site est en français (pages à la racine) et en anglais (dossier en/).
    - un texte écrit simplement ("Huile sur toile") est traduit automatiquement
      s'il figure dans le dictionnaire TRADUCTIONS en bas de ce fichier ;
    - sinon, écrire { fr: "…", en: "…" }.

  PEINTURES : générées par outils/preparer.py à partir des noms de fichiers des visuels.
    L'ordre de la liste = l'ordre du défilement (la scénographie).
    { src, w, h, titre, annee, technique, dimensions, serie }
    - hors: true       : hors scénographie, visible seulement dans l'index « Toutes les œuvres » (fichier _NON)
    - collection: true : « Collection particulière » dans la légende (fichier _CP)
    - centrer: true    : œuvre très large, centrée verticalement à l'écran
  SÉRIES : ordre des séries dans l'index ; ancienne: true = rangée sous « Séries antérieures ».
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

  // Page Bio — ligne sous le nom, puis texte de démarche, au « je » (à retravailler par Clémence)
  situation: { fr: "Vit et travaille à Paris (FR)", en: "Lives and works in Paris (FR)" },
  presentation: {
    fr: "Ma peinture se construit comme un terrain de fouille, nourrie de souvenirs d'enfance et d'archives photographiques et filmiques. Chaque toile tente de faire remonter des images enfouies, par un geste qui navigue entre effacement et recouvrement, tout en préservant une part d'opacité. La végétation y occupe une place centrale : luxuriante, elle agit à la fois comme écran et comme révélateur des formes, tandis que l'eau introduit une profondeur incertaine, entre calme apparent et menace latente. Mes tableaux ne racontent jamais un récit précis : ils cherchent à faire ressentir un état, une attente, une inquiétude, une sensation de suspension. Depuis peu, mon travail s'ouvre au cataclysme et au sublime, à la recherche d'images qui tiennent ensemble la menace et la protection, l'effondrement et l'abri.",
    en: "My painting is built like an excavation site, fed by childhood memories and by photographic and film archives. Each canvas tries to bring buried images back to the surface, through a gesture that moves between erasing and covering over, while preserving a share of opacity. Vegetation plays a central role: lush, it acts both as a screen and as something that reveals forms, while water introduces an uncertain depth, between apparent calm and latent threat. My paintings never tell a precise story: they seek to make a state felt, a waiting, an unease, a sense of suspension. Recently, my work has opened up to cataclysm and the sublime, in search of images that hold together threat and protection, collapse and shelter.",
  },

  // Accueil : photo en pleine page. Plusieurs versions = on passe de l'une à l'autre
  // en cliquant à gauche / à droite (pour comparer les colorimétries).
  accueilCredit: "© Luc Fauret",
  accueil: [
    { src: "images/accueil/fresque-a.jpg", w: 2800, h: 1868, actualitesCouleur: "#db8447" },  // la version couleur la plus saturée
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
    { src: "images/dessins/jonas-1.jpg", w: 2400, h: 2263, titre: "Jonas 1", annee: "2023", technique: "Fusain sur papier", dimensions: "21 × 29 cm", serie: "Jonas" },  // Jonas 1_Fusain sur papier_21x29cm_2023.jpg
    { src: "images/dessins/jonas-2.jpg", w: 2400, h: 2166, titre: "Jonas 2", annee: "2023", technique: "Fusain sur papier", dimensions: "21 × 29 cm", serie: "Jonas" },  // Jonas 2_Fusain sur papier_21x29cm_2023.jpg
    { src: "images/dessins/jonas-3.jpg", w: 2400, h: 2301, titre: "Jonas 3", annee: "2023", technique: "Fusain sur papier", dimensions: "21 × 29 cm", serie: "Jonas" },  // Jonas 3_Fusain sur papier_21x29cm_2023.jpg
    { src: "images/dessins/jonas-4.jpg", w: 2400, h: 2031, titre: "Jonas 4", annee: "2023", technique: "Fusain sur papier", dimensions: "21 × 29 cm", serie: "Jonas" },  // Jonas 4_Fusain sur papier_21x29cm_2023.jpg
    { src: "images/dessins/jonas-5.jpg", w: 2400, h: 2005, titre: "Jonas 5", annee: "2023", technique: "Fusain sur papier", dimensions: "21 × 29 cm", serie: "Jonas" },  // Jonas 5_Fusain sur papier_21x29cm_2023.jpg
    { src: "images/dessins/jonas-6.jpg", w: 2400, h: 1985, titre: "Jonas 6", annee: "2023", technique: "Fusain sur papier", dimensions: "21 × 29 cm", serie: "Jonas" },  // Jonas 6_Fusain sur papier_21x29cm_2023.jpg
    { src: "images/dessins/jonas-x.jpg", w: 2196, h: 2400, titre: "Jonas X", annee: "", technique: "Fusain sur papier", dimensions: "", serie: "Jonas" },  // FusainJonasX.jpg — À COMPLÉTER
    { src: "images/dessins/woods-i.jpg", w: 2400, h: 1760, titre: "Woods I", annee: "", technique: "Fusain sur papier", dimensions: "", serie: "" },  // Woods1.jpg — À COMPLÉTER
    { src: "images/dessins/pierre-et-jean-fusain.jpg", w: 1688, h: 2400, titre: "Pierre et Jean", annee: "2023", technique: "Fusain sur papier", dimensions: "29 × 21 cm", serie: "Lost Eden" },  // Pierre et Jean_Fusain sur papier_29x21cm_2023.jpg
    { src: "images/dessins/algorithme-i-fusain.jpg", w: 2400, h: 2388, titre: "Algorithme I", annee: "", technique: "Fusain sur papier", dimensions: "", serie: "Algorithmes" },  // FusainAlgo1.jpg — À COMPLÉTER
    { src: "images/dessins/algorithme-ii-fusain.jpg", w: 2400, h: 2386, titre: "Algorithme II", annee: "", technique: "Fusain sur papier", dimensions: "", serie: "Algorithmes" },  // FusainAlgo2.jpg — À COMPLÉTER
  ],

  // PEINTURES — scénographie, pas chronologique :
  // l'eau et les baigneurs → la nuit et la végétation → la tempête et le feu → la mémoire → l'intime.
  // Les images sont recadrées au ras de la toile pour que toutes s'affichent à la même échelle.
  series: [
    { nom: "À bas bruit" },
    { nom: "Palmiers et tempêtes" },
    { nom: "Lost Eden" },
    { nom: "Abotts' Lilies" },
    { nom: "Vision nocturne" },
    { nom: "Sous venir" },
    { nom: "En suspend" },
    { nom: "Ma mémoire floue" },
    { nom: "Super 8" },
    { nom: "Short Film" },
    { nom: "" },
    { nom: "En jouant", ancienne: true, texte: { fr: "Cette série a été réalisée à partir d'une vidéo personnelle. J'opère une transformation de l'image en laissant libre cours à mon inconscient et en laissant la peinture prendre le dessus. Certains éléments disparaissent de l'image originale tandis que de nouveaux apparaissent et soudain l'atmosphère est changée.", en: "This series was made from a home video. I transform the image by giving free rein to my unconscious and letting the paint take over. Some elements of the original image disappear while new ones appear, and suddenly the atmosphere has changed." } },
    { nom: "Disparition", ancienne: true, texte: { fr: "Ces travaux sont nés à partir d'études effectuées d'après des captures d'écrans en noir et blanc d'un film d'enfance. Je suis intervenue sur les personnages à l'aide d'un feutre noir pour les études puis j'ai souhaité rendre cette simplification des formes en peinture. Il est question de transformer l'image et de lui donner un pouvoir évocateur tout en restant économe dans les moyens employés.", en: "These works grew out of studies made from black-and-white screenshots of a childhood film. I worked over the figures with a black felt-tip pen for the studies, then wanted to render this simplification of forms in paint. The aim is to transform the image and give it evocative power while keeping the means sparing." } },
    { nom: "Against the odds", ancienne: true, texte: { fr: "Ces peintures ont été réalisées spécifiquement pour l'exposition « From Here » qui a eu lieu le 17 septembre 2016 à La Galcante, librairie de presse ancienne à Paris 1er. Elles sont inspirées de photos de l'article « Against the odds » publié dans un numéro d'archive du magazine TIME datant de mai 1984.", en: "These paintings were made specifically for the exhibition “From Here”, held on 17 September 2016 at La Galcante, an antique press bookshop in Paris. They are based on photographs from the article “Against the odds”, published in a May 1984 archive issue of TIME magazine." } },
    { nom: "Au bain", ancienne: true },
    { nom: "Autoportraits", ancienne: true },
    { nom: "Terrasse", ancienne: true },
  ],

  paintings: [
    { src: "images/peintures/a-bas-bruit-v.jpg", w: 2152, h: 1912, titre: "À bas bruit V", annee: "2026", technique: "Huile sur bois", dimensions: "25 × 28 cm", serie: "À bas bruit" },  // A bas bruit/A bas bruit V_huile sur bois_25x28cm_2026.jpg
    { src: "images/peintures/a-bas-bruit-vi.jpg", w: 1965, h: 1749, titre: "À bas bruit VI", annee: "2026", technique: "Huile sur bois", dimensions: "25 × 28 cm", serie: "À bas bruit" },  // A bas bruit/A bas bruit VI_huile sur bois_25x28cm_2026.jpg
    { src: "images/peintures/a-bas-bruit-vii.jpg", w: 2277, h: 2049, titre: "À bas bruit VII", annee: "2026", technique: "Huile sur bois", dimensions: "25 × 28 cm", serie: "À bas bruit" },  // A bas bruit/A bas bruit VII_huile sur bois_25x28cm_2026.jpg
    { src: "images/peintures/a-bas-bruit-ii.jpg", w: 2400, h: 2119, titre: "À bas bruit II", annee: "2026", technique: "Huile sur bois", dimensions: "25 × 28 cm", serie: "À bas bruit" },  // A bas bruit/A bas bruit II_huile sur bois_25x28cm_2026.jpg
    { src: "images/peintures/a-bas-bruit-iii.jpg", w: 2400, h: 2136, titre: "À bas bruit III", annee: "2026", technique: "Huile sur bois", dimensions: "25 × 28 cm", serie: "À bas bruit" },  // A bas bruit/A bas bruit III_huile sur bois_25x28cm_2026.jpg
    { src: "images/peintures/a-bas-bruit-viii.jpg", w: 2400, h: 2125, titre: "À bas bruit VIII", annee: "2026", technique: "Huile sur bois", dimensions: "25 × 28 cm", serie: "À bas bruit" },  // A bas bruit/A bas bruit VIII_huile sur bois_25x28cm_2026.jpg
    { src: "images/peintures/a-bas-bruit-x.jpg", w: 1869, h: 1650, titre: "À bas bruit X", annee: "2026", technique: "Huile sur bois", dimensions: "25 × 28 cm", serie: "À bas bruit" },  // A bas bruit/A bas bruit X_huile sur bois_25x28cm_2026.jpg
    { src: "images/peintures/feu.jpg", w: 2400, h: 1917, titre: "Feu", annee: "2025", technique: "Huile sur toile", dimensions: "40 × 50 cm", serie: "Palmiers et tempêtes" },  // Palmiers et tempêtes/Feu_huile sur toile_40x50cm_2025.jpg
    { src: "images/peintures/bruit-de-fond.jpg", w: 2400, h: 1917, titre: "Bruit de fond", annee: "2025", technique: "Huile sur toile", dimensions: "40 × 50 cm", serie: "Palmiers et tempêtes" },  // Palmiers et tempêtes/Bruit de fond_huile sur toile_40x50cm_2025.jpg
    { src: "images/peintures/le-bruit-du-silence-i.jpg", w: 1761, h: 2400, titre: "Le bruit du silence I", annee: "2025", technique: "Huile sur toile", dimensions: "33 × 24 cm", serie: "Palmiers et tempêtes", collection: true },  // Palmiers et tempêtes/Le bruit du silence I_huile sur toile_33x24cm_2025_CP.jpg
    { src: "images/peintures/le-bruit-du-silence-ii.jpg", w: 1713, h: 2400, titre: "Le bruit du silence II", annee: "2025", technique: "Huile sur toile", dimensions: "33 × 24 cm", serie: "Palmiers et tempêtes", collection: true, hors: true },  // Palmiers et tempêtes/Le bruit du silence II_huile sur toile_33x24cm_2025_CP_NON.jpg
    { src: "images/peintures/le-bruit-du-silence-iii.jpg", w: 1703, h: 2400, titre: "Le bruit du silence III", annee: "2025", technique: "Huile sur toile", dimensions: "33 × 24 cm", serie: "Palmiers et tempêtes", collection: true, hors: true },  // Palmiers et tempêtes/Le bruit du silence III_huile sur toile_33x24cm_2025_CP_NON.jpg
    { src: "images/peintures/le-bruit-du-silence-iv.jpg", w: 1721, h: 2400, titre: "Le bruit du silence IV", annee: "2025", technique: "Huile sur toile", dimensions: "33 × 24 cm", serie: "Palmiers et tempêtes", collection: true, hors: true },  // Palmiers et tempêtes/Le bruit du silence IV_huile sur toile_33x24cm_2025_CP_NON.jpg
    { src: "images/peintures/souffles.jpg", w: 1985, h: 2400, titre: "Soufflés", annee: "2025", technique: "Huile sur toile", dimensions: "46 × 38 cm", serie: "Palmiers et tempêtes" },  // Palmiers et tempêtes/Soufflés_huile sur toile_46x38cm_2025.jpg
    { src: "images/peintures/entracte.jpg", w: 1980, h: 2400, titre: "Entracte", annee: "2025", technique: "Huile sur toile", dimensions: "46 × 38 cm", serie: "Palmiers et tempêtes", hors: true },  // Palmiers et tempêtes/Entracte_huile sur toile_46x38cm_2025_NON.jpg
    { src: "images/peintures/palmier-i.jpg", w: 1558, h: 2400, titre: "Palmier I", annee: "2025", technique: "Huile sur toile", dimensions: "41 × 27 cm", serie: "Palmiers et tempêtes", collection: true },  // Palmiers et tempêtes/Palmier I_huile sur toile_41x27cm_2025_CP.jpg
    { src: "images/peintures/palmier-ii.jpg", w: 1567, h: 2400, titre: "Palmier II", annee: "2025", technique: "Huile sur toile", dimensions: "41 × 27 cm", serie: "Palmiers et tempêtes" },  // Palmiers et tempêtes/Palmier II_huile sur toile_41x27cm_2025.jpg
    { src: "images/peintures/palmier-iii.jpg", w: 1941, h: 2400, titre: "Palmier III", annee: "2025", technique: "Huile sur toile", dimensions: "41 × 33 cm", serie: "Palmiers et tempêtes" },  // Palmiers et tempêtes/Palmier III_huile sur toile_41x33cm_2025.jpg
    { src: "images/peintures/palmier-iv.jpg", w: 1938, h: 2400, titre: "Palmier IV", annee: "2025", technique: "Huile sur toile", dimensions: "41 × 33 cm", serie: "Palmiers et tempêtes", hors: true },  // Palmiers et tempêtes/Palmier IV_huile sur toile_41x33cm_2025_NON.jpg
    { src: "images/peintures/palmier-v.jpg", w: 2287, h: 1657, titre: "Palmier V", annee: "2025", technique: "Huile sur toile", dimensions: "33 × 24 cm", serie: "Palmiers et tempêtes", hors: true },  // Palmiers et tempêtes/Palmier V_huile sur toile_33x24cm_2025_NON.jpg
    { src: "images/peintures/palmier-vi.jpg", w: 2400, h: 1755, titre: "Palmier VI", annee: "2025", technique: "Huile sur toile", dimensions: "33 × 24 cm", serie: "Palmiers et tempêtes" },  // Palmiers et tempêtes/Palmier VI_huile sur toile_33x24cm_2025.jpg
    { src: "images/peintures/en-attendant-la-foret.jpg", w: 2400, h: 1489, titre: "En attendant la forêt", annee: "2024", technique: "Huile sur toile, diptyque", dimensions: "162 × 260 cm", serie: "Lost Eden" },  // Lost Eden/En attendant la forêt_huile sur toile_diptyque_162x260cm_2024.jpg
    { src: "images/peintures/the-sanctuary.jpg", w: 2400, h: 1703, titre: "The Sanctuary", annee: "2025", technique: "Huile sur toile, diptyque", dimensions: "162 × 228 cm", serie: "Lost Eden" },  // Lost Eden/The sanctuary_huile sur toile_diptyque_162x228cm_2025.jpg
    { src: "images/peintures/black-pool.jpg", w: 2400, h: 1489, titre: "Black Pool", annee: "2024", technique: "Huile sur toile, diptyque", dimensions: "50 × 80 cm", serie: "Lost Eden" },  // Lost Eden/black pool_huile sur toile_diptyque_50x80cm_2024.jpg
    { src: "images/peintures/reflective-pool.jpg", w: 2400, h: 1686, titre: "Reflective Pool", annee: "2021", technique: "Huile sur toile", dimensions: "114 × 162 cm", serie: "Lost Eden" },  // Lost Eden/Reflective pool_huile sur toile_114x162cm_2021.jpg
    { src: "images/peintures/baignade-interdite.jpg", w: 2400, h: 1679, titre: "Baignade interdite", annee: "2021", technique: "Huile sur toile", dimensions: "114 × 162 cm", serie: "Lost Eden", hors: true },  // Lost Eden/Baignade interdite_huile sur toile_114x162cm_2021_NON.jpg
    { src: "images/peintures/cerne-abbey-2.jpg", w: 2400, h: 1642, titre: "Cerne Abbey 2", annee: "2023", technique: "Huile sur papier", dimensions: "21 × 29 cm", serie: "Lost Eden", hors: true },  // Lost Eden/Cerne Abbey 2_huile sur papier_21x29cm_2023_NON.jpg
    { src: "images/peintures/cerne-abbey-3.jpg", w: 2400, h: 1658, titre: "Cerne Abbey 3", annee: "2023", technique: "Huile sur papier", dimensions: "21 × 29 cm", serie: "Lost Eden", hors: true },  // Lost Eden/Cerne Abbey 3_huile sur papier_21x29cm_2023_NON.jpg
    { src: "images/peintures/cerne-abbey-4.jpg", w: 2400, h: 1698, titre: "Cerne Abbey 4", annee: "2023", technique: "Huile sur papier", dimensions: "21 × 29 cm", serie: "Lost Eden", hors: true },  // Lost Eden/Cerne Abbey 4_huile sur papier_21x29cm_2023_NON.jpg
    { src: "images/peintures/cerne-abbey-5.jpg", w: 2400, h: 1688, titre: "Cerne Abbey 5", annee: "2023", technique: "Huile sur papier", dimensions: "21 × 29 cm", serie: "Lost Eden", hors: true },  // Lost Eden/Cerne Abbey 5_huile sur papier_21x29cm_2023_NON.jpg
    { src: "images/peintures/endormis-i.jpg", w: 2400, h: 1632, titre: "Endormis I", annee: "2022", technique: "Huile sur toile", dimensions: "24 × 33 cm", serie: "Lost Eden", hors: true },  // Lost Eden/Endormis I_huile sur toile_24x33cm_2022_NON.jpg
    { src: "images/peintures/endormis-ii.jpg", w: 2400, h: 1754, titre: "Endormis II", annee: "2022", technique: "Huile sur toile", dimensions: "24 × 33 cm", serie: "Lost Eden", hors: true },  // Lost Eden/Endormis II_huile sur toile_24x33cm_2022_NON.jpg
    { src: "images/peintures/mermaids.jpg", w: 2220, h: 1501, titre: "Mermaids", annee: "2022", technique: "Huile sur toile", dimensions: "21 × 31 cm", serie: "Lost Eden", collection: true, hors: true },  // Lost Eden/Mermaids_huile sur toile_21x31cm_2022_CP_NON.jpg
    { src: "images/peintures/abotts-pool-i.jpg", w: 2006, h: 2400, titre: "Abotts' Pool I", annee: "2023", technique: "Huile sur toile", dimensions: "46 × 38 cm", serie: "Abotts' Lilies" },  // Abotts Lillies/Abotts' pool I_huile sur toile_46x38cm_2023.jpg
    { src: "images/peintures/abotts-pool-ii.jpg", w: 1975, h: 2400, titre: "Abotts' Pool II", annee: "2023", technique: "Huile sur toile", dimensions: "46 × 38 cm", serie: "Abotts' Lilies" },  // Abotts Lillies/Abotts' pool II_huile sur toile_46x38cm_2023.jpg
    { src: "images/peintures/abotts-pool-iv.jpg", w: 2400, h: 1702, titre: "Abotts' Pool IV", annee: "2025", technique: "Huile sur toile", dimensions: "92 × 130 cm", serie: "Abotts' Lilies", hors: true },  // Abotts Lillies/Abotts' pool IV_huile sur toile_92x130cm_2025_NON.jpg
    { src: "images/peintures/en-silence-i.jpg", w: 2400, h: 1909, titre: "En silence I", annee: "2025", technique: "Huile sur bois", dimensions: "24 × 30 cm", serie: "Abotts' Lilies", hors: true },  // Abotts Lillies/En silence I_Huile sur bois_24x30cm_2025_NON.jpg
    { src: "images/peintures/en-silence-ii.jpg", w: 2400, h: 1903, titre: "En silence II", annee: "2025", technique: "Huile sur bois", dimensions: "24 × 30 cm", serie: "Abotts' Lilies", hors: true },  // Abotts Lillies/En silence II_Huile sur bois_24x30cm_2025_NON.jpg
    { src: "images/peintures/en-silence-iii.jpg", w: 2400, h: 1921, titre: "En silence III", annee: "2025", technique: "Huile sur bois", dimensions: "24 × 30 cm", serie: "Abotts' Lilies" },  // Abotts Lillies/En silence III_Huile sur bois_24x30cm_2025.jpg
    { src: "images/peintures/reflection.jpg", w: 2000, h: 2400, titre: "Reflection", annee: "2023", technique: "Huile sur toile", dimensions: "46 × 38 cm", serie: "Abotts' Lilies" },  // Abotts Lillies/Reflection_huile sur toile_46x38cm_2023.jpg
    { src: "images/peintures/abotts-lilies-i.jpg", w: 1728, h: 2400, titre: "Abotts' Lilies I", annee: "2024", technique: "Huile sur toile", dimensions: "92 × 65 cm", serie: "Abotts' Lilies", collection: true },  // Abotts Lillies/Abotts' lilies I_huile sur toile_92x65cm_2024_CP.jpg
    { src: "images/peintures/abotts-lilies-ii.jpg", w: 1696, h: 2400, titre: "Abotts' Lilies II", annee: "2024", technique: "Huile sur toile", dimensions: "92 × 65 cm", serie: "Abotts' Lilies" },  // Abotts Lillies/Abotts' lilies II_huile sur toile_92x65cm_2024.jpg
    { src: "images/peintures/abotts-lilies-iii.jpg", w: 1709, h: 2400, titre: "Abotts' Lilies III", annee: "2024", technique: "Huile sur toile", dimensions: "92 × 65 cm", serie: "Abotts' Lilies" },  // Abotts Lillies/Abotts' lilies III_huile sur toile_92x65cm_2024.jpg
    { src: "images/peintures/abotts-lilies-iv.jpg", w: 2400, h: 1718, titre: "Abotts' Lilies IV", annee: "2025", technique: "Huile sur toile", dimensions: "33 × 46 cm", serie: "Abotts' Lilies", hors: true },  // Abotts Lillies/Abotts' lillies IV_huile sur toile_33x46cm_2025_NON.jpg
    { src: "images/peintures/abotts-lilies.jpg", w: 2400, h: 1700, titre: "Abotts' Lilies", annee: "2025", technique: "Huile sur toile", dimensions: "33 × 46 cm", serie: "Abotts' Lilies", hors: true },  // Abotts Lillies/Abotts' lillies_huile sur toile_33x46cm_2025_NON.jpg
    { src: "images/peintures/anima.jpg", w: 1991, h: 2400, titre: "Anima", annee: "2024", technique: "Huile sur toile", dimensions: "46 × 38 cm", serie: "Abotts' Lilies" },  // Abotts Lillies/Anima_huile sur toile_46x38cm_2024.jpg
    { src: "images/peintures/derriere-la-vitre.jpg", w: 1632, h: 2400, titre: "Derrière la vitre", annee: "2022", technique: "Huile sur toile", dimensions: "31 × 21 cm", serie: "Vision nocturne" },  // Vision nocturne/Derrière la vitre_huile sur toile_31x21cm_2022.jpeg
    { src: "images/peintures/dernier-rayon.jpg", w: 2400, h: 1755, titre: "Dernier rayon", annee: "2022", technique: "Huile sur toile", dimensions: "24 × 33 cm", serie: "Vision nocturne", collection: true },  // Vision nocturne/Dernier rayon_huile sur toile_24x33cm_2022_CP.jpg
    { src: "images/peintures/dernier-rayon-2.jpg", w: 2400, h: 1617, titre: "Dernier rayon", annee: "2022", technique: "Huile sur toile", dimensions: "21 × 31 cm", serie: "Vision nocturne", hors: true },  // Vision nocturne/Dernier rayon_huile sur toile_21x31cm_2022_NON.jpg
    { src: "images/peintures/vision-nocturne-ii.jpg", w: 1589, h: 2400, titre: "Vision nocturne II", annee: "2018", technique: "Huile sur toile", dimensions: "195 × 130 cm", serie: "Vision nocturne" },  // Vision nocturne/Vision nocturne II_huile sur toile_195x130cm_2018.jpg
    { src: "images/peintures/vision-nocturne-iv.jpg", w: 2400, h: 1574, titre: "Vision nocturne IV", annee: "2018", technique: "Huile sur toile", dimensions: "130 × 195 cm", serie: "Vision nocturne" },  // Vision nocturne/Vision Nocturne IV_huile sur toile_130x195cm_2018.jpg
    { src: "images/peintures/vision-nocturne-v.jpg", w: 2400, h: 1606, titre: "Vision nocturne V", annee: "2018", technique: "Huile sur toile", dimensions: "130 × 195 cm", serie: "Vision nocturne" },  // Vision nocturne/Vision Nocturne V_huile sur toile_130x195cm_2018.jpg
    { src: "images/peintures/ruines-du-souvenir.jpg", w: 1903, h: 959, titre: "Ruines du souvenir", annee: "2020", technique: "Huile sur toile, triptyque", dimensions: "195 × 390 cm", serie: "Vision nocturne", centrer: true },  // Vision nocturne/Ruines du Souvenir_huile sur toile_triptyque_195x390cm_2020.jpg
    { src: "images/peintures/nightlife.jpg", w: 2400, h: 1851, titre: "Nightlife", annee: "2020", technique: "Huile sur toile", dimensions: "50 × 65 cm", serie: "Vision nocturne" },  // Vision nocturne/Nightlife_huile sur toile_50x65cm_2020.JPG
    { src: "images/peintures/petite-jungle.jpg", w: 2400, h: 1832, titre: "Petite Jungle", annee: "2020", technique: "Huile sur papier marouflé sur toile", dimensions: "31 × 41 cm", serie: "Vision nocturne" },  // Vision nocturne/Petite jungle_huile sur papier marouflée sur toile_31x41cm_2020.jpg
    { src: "images/peintures/dans-la-cour-i.jpg", w: 1812, h: 2400, titre: "Dans la cour I", annee: "2020", technique: "Huile sur papier marouflé sur toile", dimensions: "41 × 31 cm", serie: "Vision nocturne" },  // Vision nocturne/Dans la cour I_huile sur papier marouflée sur toile_41x31cm_2020.jpg
    { src: "images/peintures/dans-la-cour-ii.jpg", w: 1810, h: 2400, titre: "Dans la cour II", annee: "2020", technique: "Huile sur papier marouflé sur toile", dimensions: "41 × 31 cm", serie: "Vision nocturne", hors: true },  // Vision nocturne/Dans la cour II_huile sur papier marouflée sur toile_41x31cm_2020_NON.jpg
    { src: "images/peintures/cache.jpg", w: 2400, h: 1771, titre: "Caché", annee: "2023", technique: "Huile sur papier marouflé sur toile", dimensions: "31 × 41 cm", serie: "Vision nocturne", hors: true },  // _A classer/Caché_huile sur papier marouflée sur toile_31x41cm_2023_NON.jpg
    { src: "images/peintures/banana-road-i.jpg", w: 2400, h: 1797, titre: "Banana Road I", annee: "2024", technique: "Huile sur papier marouflé sur toile", dimensions: "23 × 31 cm", serie: "Lost Eden" },  // Lost Eden/Banana Road I_huile sur papier marouflée sur toile_23x31cm_2024.jpg
    { src: "images/peintures/banana-road-ii.jpg", w: 2400, h: 1791, titre: "Banana Road II", annee: "2024", technique: "Huile sur papier marouflé sur toile", dimensions: "23 × 31 cm", serie: "Lost Eden", hors: true },  // Lost Eden/Banana Road II_huile sur papier marouflée sur toile_23x31cm_2024_NON.jpg
    { src: "images/peintures/pierre-et-jean.jpg", w: 1809, h: 2400, titre: "Pierre et Jean", annee: "2022", technique: "Huile sur papier marouflé sur toile", dimensions: "41 × 31 cm", serie: "Lost Eden", collection: true },  // Lost Eden/Pierre et Jean_huile sur papier marouflée sur toile_41x31cm_2022_CP.jpg
    { src: "images/peintures/mon-nom-est-noir.jpg", w: 1812, h: 2400, titre: "Mon nom est Noir", annee: "2022", technique: "Huile sur papier marouflé sur toile", dimensions: "41 × 31 cm", serie: "Lost Eden" },  // Lost Eden/Mon nom est Noir_huile sur papier marouflée sur toile_41x31cm_2022.jpg
    { src: "images/peintures/mama.jpg", w: 1824, h: 2400, titre: "Mama", annee: "2020", technique: "Huile sur papier marouflé sur toile", dimensions: "31 × 41 cm", serie: "Lost Eden", collection: true },  // _A classer/Mama_huile sur papier marouflée sur toile_31x41cm_2020_CP.jpg
    { src: "images/peintures/de-dos.jpg", w: 2400, h: 1803, titre: "De dos", annee: "2020", technique: "Huile sur papier marouflé sur toile", dimensions: "31 × 41 cm", serie: "Lost Eden", collection: true, hors: true },  // _A classer/De dos_huile sur papier marouflée sur toile_31x41cm_2020_CP_NON.jpg
    { src: "images/peintures/au-loin.jpg", w: 2400, h: 1787, titre: "Au loin", annee: "2023", technique: "Huile sur papier marouflé sur toile", dimensions: "23 × 31 cm", serie: "Lost Eden", hors: true },  // _A classer/Au loin_huile sur papier marouflée sur toile_23x31cm_2023_NON.jpg
    { src: "images/peintures/la-meute.jpg", w: 2400, h: 1853, titre: "La meute", annee: "2022", technique: "Huile sur toile", dimensions: "50 × 65 cm", serie: "Lost Eden", hors: true },  // _A classer/La meute_huile sur toile_50x65cm_2022_NON.jpg
    { src: "images/peintures/ouessant.jpg", w: 2400, h: 1808, titre: "Ouessant", annee: "2020", technique: "Huile sur papier marouflé sur toile", dimensions: "31 × 41 cm", serie: "", hors: true },  // _A classer/Ouessant_huile sur papier marouflée sur toile_31x41cm_2020_NON.jpg
    { src: "images/peintures/dans-les-arbres-i.jpg", w: 2179, h: 1658, titre: "Dans les arbres I", annee: "2017", technique: "Huile sur papier", dimensions: "98 × 130 cm", serie: "Sous venir", hors: true },  // Sous venir/Dans les arbres I_huile sur papier_98x130cm_2017_NON.jpg
    { src: "images/peintures/dans-les-arbres-ii.jpg", w: 2400, h: 1850, titre: "Dans les arbres II", annee: "2017", technique: "Huile sur papier", dimensions: "98 × 130 cm", serie: "Sous venir", hors: true },  // Sous venir/Dans les arbres II_huile sur papier_98x130cm_2017_NON.jpg
    { src: "images/peintures/je-ne-me-souviens-pas-i.jpg", w: 2400, h: 1776, titre: "Je ne me souviens pas I", annee: "2016", technique: "Huile sur papier", dimensions: "91 × 123 cm", serie: "Sous venir", hors: true },  // Sous venir/Je ne me souviens pas I_huile sur papier_91x123cm_2016_NON.jpg
    { src: "images/peintures/je-ne-me-souviens-pas-ii.jpg", w: 2392, h: 2398, titre: "Je ne me souviens pas II", annee: "2016", technique: "Huile sur papier", dimensions: "122 × 122 cm", serie: "Sous venir", hors: true },  // Sous venir/Je ne me souviens pas II_huile sur papier_122x122cm_2016_NON.jpg
    { src: "images/peintures/silhouettes-ii.jpg", w: 2400, h: 1830, titre: "Silhouettes II", annee: "2017", technique: "Huile sur papier", dimensions: "100 × 130 cm", serie: "Sous venir", hors: true },  // Sous venir/Silhouettes2_huile sur papier_100x130cm_2017_NON.jpg
    { src: "images/peintures/en-suspend-i.jpg", w: 2400, h: 1798, titre: "En suspend I", annee: "2017", technique: "Huile sur papier", dimensions: "75 × 100 cm", serie: "En suspend", hors: true },  // Sous venir/En suspend1_huile sur papier_75x100cm_2017_NON.jpg
    { src: "images/peintures/en-suspend-ii.jpg", w: 2400, h: 1780, titre: "En suspend II", annee: "2017", technique: "Huile sur papier", dimensions: "75 × 100 cm", serie: "En suspend", hors: true },  // Sous venir/En suspend2_huile sur papier_75x100cm_2017_NON.jpg
    { src: "images/peintures/en-suspend-iii.jpg", w: 2400, h: 1773, titre: "En suspend III", annee: "2017", technique: "Huile sur papier", dimensions: "75 × 100 cm", serie: "En suspend", hors: true },  // Sous venir/En suspend3_huile sur papier_75x100cm_2017_NON.jpg
    { src: "images/peintures/ma-memoire-floue-i.jpg", w: 2400, h: 1756, titre: "Ma mémoire floue I", annee: "2018", technique: "Huile sur toile", dimensions: "24 × 33 cm", serie: "Ma mémoire floue", collection: true },  // Ma mémoire floue/Ma mémoire floue I_huile sur toile_24x33cm_2018_CP.jpg
    { src: "images/peintures/ma-memoire-floue-ii.jpg", w: 2400, h: 1751, titre: "Ma mémoire floue II", annee: "2018", technique: "Huile sur toile", dimensions: "24 × 33 cm", serie: "Ma mémoire floue" },  // Ma mémoire floue/Ma mémoire floue II_huile sur toile_24x33cm_2018.jpg
    { src: "images/peintures/ma-memoire-floue-iii.jpg", w: 2400, h: 1759, titre: "Ma mémoire floue III", annee: "2018", technique: "Huile sur toile", dimensions: "24 × 33 cm", serie: "Ma mémoire floue", hors: true },  // Ma mémoire floue/Ma mémoire floue III_huile sur toile_24x33cm_2018_NON.jpg
    { src: "images/peintures/ma-memoire-floue-iv.jpg", w: 2400, h: 1671, titre: "Ma mémoire floue IV", annee: "2018", technique: "Huile sur toile", dimensions: "114 × 162 cm", serie: "Ma mémoire floue" },  // Ma mémoire floue/Ma mémoire floue IV_huile sur toile_114x162cm_2018.jpg
    { src: "images/peintures/lanniversaire-1.jpg", w: 2400, h: 1804, titre: "L'anniversaire #1", annee: "2019", technique: "Huile sur papier marouflé sur toile", dimensions: "28,5 × 37,5 cm", serie: "Super 8", collection: true },  // Super 8/Anniversaire/L'anniversaire #1_28,5x37,5cm_huile sur papier marouflée sur toile_2019_CP.jpg
    { src: "images/peintures/lanniversaire-2.jpg", w: 2400, h: 1834, titre: "L'anniversaire #2", annee: "2019", technique: "Huile sur papier marouflé sur toile", dimensions: "28,5 × 37,5 cm", serie: "Super 8", hors: true },  // Super 8/Anniversaire/L'anniversaire #2_28,5x37,5cm_huile sur papier marouflée sur toile_2019_NON.jpg
    { src: "images/peintures/lanniversaire-3.jpg", w: 2400, h: 1830, titre: "L'anniversaire #3", annee: "2019", technique: "Huile sur papier marouflé sur toile", dimensions: "28,5 × 37,5 cm", serie: "Super 8", collection: true },  // Super 8/Anniversaire/L'anniversaire #3_28,5x37,5cm_huile sur papier marouflée sur toile_2019_CP.jpg
    { src: "images/peintures/lanniversaire-4.jpg", w: 2400, h: 1814, titre: "L'anniversaire #4", annee: "2019", technique: "Huile sur papier marouflé sur toile", dimensions: "28,5 × 37,5 cm", serie: "Super 8", hors: true },  // Super 8/Anniversaire/L'anniversaire #4_28,5x37,5cm_huile sur papier marouflée sur toile_2019_NON.jpg
    { src: "images/peintures/lanniversaire-5.jpg", w: 2400, h: 1817, titre: "L'anniversaire #5", annee: "2019", technique: "Huile sur papier marouflé sur toile", dimensions: "28,5 × 37,5 cm", serie: "Super 8", collection: true },  // Super 8/Anniversaire/L'anniversaire #5_28,5x37,5cm_huile sur papier marouflée sur toile_2019_CP.jpg
    { src: "images/peintures/lanniversaire-6.jpg", w: 2400, h: 1600, titre: "L'anniversaire #6", annee: "2019", technique: "Huile sur papier marouflé sur toile", dimensions: "28,5 × 37,5 cm", serie: "Super 8", hors: true },  // Super 8/Anniversaire/L'anniversaire #6_28,5x37,5cm_huile sur papier marouflée sur toile_2019_NON.jpg
    { src: "images/peintures/vase-1.jpg", w: 2400, h: 1814, titre: "Vase #1", annee: "2019", technique: "Huile sur papier marouflé sur toile", dimensions: "28,5 × 37,5 cm", serie: "Super 8", collection: true },  // Super 8/Vase/Vase #1_28,5x37,5cm_huile sur papier marouflée sur toile_2019_CP.jpg
    { src: "images/peintures/vase-2.jpg", w: 2400, h: 1859, titre: "Vase #2", annee: "2019", technique: "Huile sur papier marouflé sur toile", dimensions: "28,5 × 37,5 cm", serie: "Super 8", hors: true },  // Super 8/Vase/Vase #2_28,5x37,5cm_huile sur papier marouflée sur toile_2019_NON.jpg
    { src: "images/peintures/vase-3.jpg", w: 2400, h: 1836, titre: "Vase #3", annee: "2019", technique: "Huile sur papier marouflé sur toile", dimensions: "28,5 × 37,5 cm", serie: "Super 8" },  // Super 8/Vase/Vase #3_28,5x37,5cm_huile sur papier marouflée sur toile_2019.jpg
    { src: "images/peintures/vase-4.jpg", w: 2400, h: 1843, titre: "Vase #4", annee: "2019", technique: "Huile sur papier marouflé sur toile", dimensions: "28,5 × 37,5 cm", serie: "Super 8", collection: true, hors: true },  // Super 8/Vase/Vase #4_28,5x37,5cm_huile sur papier marouflée sur toile_2019_CP_NON.jpg
    { src: "images/peintures/vase-5.jpg", w: 2400, h: 1829, titre: "Vase #5", annee: "2019", technique: "Huile sur papier marouflé sur toile", dimensions: "28,5 × 37,5 cm", serie: "Super 8" },  // Super 8/Vase/Vase #5_28,5x37,5cm_huile sur papier marouflée sur toile_2019.jpg
    { src: "images/peintures/vase-6.jpg", w: 2400, h: 1793, titre: "Vase #6", annee: "2019", technique: "Huile sur papier marouflé sur toile", dimensions: "28,5 × 37,5 cm", serie: "Super 8", collection: true },  // Super 8/Vase/Vase #6_28,5x37,5cm_huile sur papier marouflée sur toile_2019_CP.jpg
    { src: "images/peintures/short-film-i.jpg", w: 2400, h: 1796, titre: "Short Film I", annee: "2025", technique: "Huile sur bois", dimensions: "15 × 20 cm", serie: "Short Film", hors: true },  // _A classer/Short film/Short Film I_Huile sur bois_15x20cm_2025_NON.jpg
    { src: "images/peintures/short-film-ii.jpg", w: 2400, h: 1817, titre: "Short Film II", annee: "2025", technique: "Huile sur bois", dimensions: "15 × 20 cm", serie: "Short Film", hors: true },  // _A classer/Short film/Short Film II_Huile sur bois_15x20cm_2025_NON.jpg
    { src: "images/peintures/short-film-iii.jpg", w: 2400, h: 1804, titre: "Short Film III", annee: "2025", technique: "Huile sur bois", dimensions: "15 × 20 cm", serie: "Short Film", hors: true },  // _A classer/Short film/Short Film III_Huile sur bois_15x20cm_2025_NON.jpg
    { src: "images/peintures/short-film-iv.jpg", w: 2400, h: 1806, titre: "Short Film IV", annee: "2025", technique: "Huile sur bois", dimensions: "15 × 20 cm", serie: "Short Film", hors: true },  // _A classer/Short film/Short Film IV_Huile sur bois_15x20cm_2025_NON.jpg
    { src: "images/peintures/short-film-v.jpg", w: 2400, h: 1783, titre: "Short Film V", annee: "2025", technique: "Huile sur bois", dimensions: "15 × 20 cm", serie: "Short Film", hors: true },  // _A classer/Short film/Short Film V_Huile sur bois_15x20cm_2025_NON.jpg
    { src: "images/peintures/en-jouant-bac-a-sable-i.jpg", w: 2076, h: 1610, titre: "Bac à sable I", annee: "", technique: "", dimensions: "", serie: "En jouant", hors: true },  // z_Anciennes séries_NON/En jouant_NON/Bac à sable I.jpg — À COMPLÉTER
    { src: "images/peintures/en-jouant-cest-mon-lapin-i-i.jpg", w: 2400, h: 1746, titre: "C'est mon lapin I  I", annee: "", technique: "", dimensions: "", serie: "En jouant", hors: true },  // z_Anciennes séries_NON/En jouant_NON/C'est mon lapin I 1.jpg — À COMPLÉTER
    { src: "images/peintures/en-jouant-cest-mon-lapin-ii.jpg", w: 1835, h: 1428, titre: "C'est mon lapin II", annee: "", technique: "", dimensions: "", serie: "En jouant", hors: true },  // z_Anciennes séries_NON/En jouant_NON/C'est mon lapin II.jpg — À COMPLÉTER
    { src: "images/peintures/en-jouant-comedienne.jpg", w: 2400, h: 1823, titre: "Comédienne", annee: "", technique: "", dimensions: "", serie: "En jouant", hors: true },  // z_Anciennes séries_NON/En jouant_NON/Comédienne.jpg — À COMPLÉTER
    { src: "images/peintures/en-jouant-derriere-le-rideau-ii.jpg", w: 1810, h: 2400, titre: "Derrière le rideau II", annee: "", technique: "", dimensions: "", serie: "En jouant", hors: true },  // z_Anciennes séries_NON/En jouant_NON/Derriere le rideau II.jpg — À COMPLÉTER
    { src: "images/peintures/en-jouant-escargot.jpg", w: 2290, h: 1596, titre: "Escargot", annee: "", technique: "", dimensions: "", serie: "En jouant", hors: true },  // z_Anciennes séries_NON/En jouant_NON/Escargot.jpg — À COMPLÉTER
    { src: "images/peintures/en-jouant-etude-le-rideau.jpg", w: 1850, h: 1386, titre: "Étude Le rideau", annee: "", technique: "", dimensions: "", serie: "En jouant", hors: true },  // z_Anciennes séries_NON/En jouant_NON/Etude Le rideau.JPG — À COMPLÉTER
    { src: "images/peintures/en-jouant-etude-objets-precieux.jpg", w: 1949, h: 1439, titre: "Étude objets précieux", annee: "", technique: "", dimensions: "", serie: "En jouant", hors: true },  // z_Anciennes séries_NON/En jouant_NON/Etude objets precieux.JPG — À COMPLÉTER
    { src: "images/peintures/en-jouant-le-panier.jpg", w: 2400, h: 1808, titre: "Le panier", annee: "", technique: "", dimensions: "", serie: "En jouant", hors: true },  // z_Anciennes séries_NON/En jouant_NON/Le panier.jpg — À COMPLÉTER
    { src: "images/peintures/en-jouant-lecture-masquee.jpg", w: 1280, h: 956, titre: "Lecture masquée", annee: "", technique: "", dimensions: "", serie: "En jouant", hors: true },  // z_Anciennes séries_NON/En jouant_NON/Lecture masquée toile.JPG — À COMPLÉTER
    { src: "images/peintures/en-jouant-objets-precieux.jpg", w: 2400, h: 1803, titre: "Objets précieux", annee: "", technique: "", dimensions: "", serie: "En jouant", hors: true },  // z_Anciennes séries_NON/En jouant_NON/Objets precieux.jpg — À COMPLÉTER
    { src: "images/peintures/en-jouant-oh.jpg", w: 2283, h: 1598, titre: "Oh", annee: "", technique: "", dimensions: "", serie: "En jouant", hors: true },  // z_Anciennes séries_NON/En jouant_NON/Oh.jpg — À COMPLÉTER
    { src: "images/peintures/en-jouant-parterre.jpg", w: 2314, h: 1611, titre: "Parterre", annee: "", technique: "", dimensions: "", serie: "En jouant", hors: true },  // z_Anciennes séries_NON/En jouant_NON/Parterre.jpg — À COMPLÉTER
    { src: "images/peintures/en-jouant-repas-de-famille.jpg", w: 2075, h: 1612, titre: "Repas de famille", annee: "", technique: "", dimensions: "", serie: "En jouant", hors: true },  // z_Anciennes séries_NON/En jouant_NON/Repas de famille.jpg — À COMPLÉTER
    { src: "images/peintures/en-jouant-tiens.jpg", w: 2285, h: 1599, titre: "Tiens", annee: "", technique: "", dimensions: "", serie: "En jouant", hors: true },  // z_Anciennes séries_NON/En jouant_NON/Tiens.jpg — À COMPLÉTER
    { src: "images/peintures/en-jouant-chapeau.jpg", w: 769, h: 1000, titre: "Chapeau", annee: "", technique: "", dimensions: "", serie: "En jouant", hors: true },  // z_Anciennes séries_NON/En jouant_NON/Sasha LR/C chapeau.jpg — À COMPLÉTER
    { src: "images/peintures/en-jouant-masquee-iii.jpg", w: 991, h: 761, titre: "Masquée III", annee: "", technique: "", dimensions: "", serie: "En jouant", hors: true },  // z_Anciennes séries_NON/En jouant_NON/Sasha LR/C masquee3.jpg — À COMPLÉTER
    { src: "images/peintures/en-jouant-menace.jpg", w: 1000, h: 768, titre: "Menace", annee: "", technique: "", dimensions: "", serie: "En jouant", hors: true },  // z_Anciennes séries_NON/En jouant_NON/Sasha LR/C menace.jpg — À COMPLÉTER
    { src: "images/peintures/en-jouant-boa-etude.jpg", w: 997, h: 735, titre: "Boa (étude)", annee: "", technique: "", dimensions: "", serie: "En jouant", hors: true },  // z_Anciennes séries_NON/En jouant_NON/Sasha LR/E boa.jpg — À COMPLÉTER
    { src: "images/peintures/en-jouant-chapeau-etude.jpg", w: 995, h: 748, titre: "Chapeau (étude)", annee: "", technique: "", dimensions: "", serie: "En jouant", hors: true },  // z_Anciennes séries_NON/En jouant_NON/Sasha LR/E chapeau.jpg — À COMPLÉTER
    { src: "images/peintures/en-jouant-masquee-ii.jpg", w: 996, h: 701, titre: "Masquée II", annee: "", technique: "", dimensions: "", serie: "En jouant", hors: true },  // z_Anciennes séries_NON/En jouant_NON/Sasha LR/T masquee2.jpg — À COMPLÉTER
    { src: "images/peintures/en-jouant-penombre.jpg", w: 1000, h: 703, titre: "Pénombre", annee: "", technique: "", dimensions: "", serie: "En jouant", hors: true },  // z_Anciennes séries_NON/En jouant_NON/Sasha LR/T penombre.jpg — À COMPLÉTER
    { src: "images/peintures/en-jouant-penombre-ii.jpg", w: 1000, h: 766, titre: "Pénombre II", annee: "", technique: "", dimensions: "", serie: "En jouant", hors: true },  // z_Anciennes séries_NON/En jouant_NON/Sasha LR/T penombre2.jpg — À COMPLÉTER
    { src: "images/peintures/disparition-kermesse-i.jpg", w: 2400, h: 1902, titre: "Kermesse I", annee: "", technique: "", dimensions: "", serie: "Disparition", hors: true },  // z_Anciennes séries_NON/Disparition_NON/Kermesse1.jpg — À COMPLÉTER
    { src: "images/peintures/disparition-kermesse-ii.jpg", w: 2400, h: 1943, titre: "Kermesse II", annee: "", technique: "", dimensions: "", serie: "Disparition", hors: true },  // z_Anciennes séries_NON/Disparition_NON/Kermesse2.jpg — À COMPLÉTER
    { src: "images/peintures/disparition-kermesse-iii.jpg", w: 2400, h: 1872, titre: "Kermesse III", annee: "", technique: "", dimensions: "", serie: "Disparition", hors: true },  // z_Anciennes séries_NON/Disparition_NON/Kermesse3.jpg — À COMPLÉTER
    { src: "images/peintures/disparition-quai-st-bernard-i.jpg", w: 2400, h: 1688, titre: "Quai St Bernard I", annee: "", technique: "", dimensions: "", serie: "Disparition", hors: true },  // z_Anciennes séries_NON/Disparition_NON/Quai St Bernard I.jpg — À COMPLÉTER
    { src: "images/peintures/disparition-quai-st-bernard-ii.jpg", w: 2400, h: 1701, titre: "Quai St Bernard II", annee: "", technique: "", dimensions: "", serie: "Disparition", hors: true },  // z_Anciennes séries_NON/Disparition_NON/Quai St Bernard II.jpg — À COMPLÉTER
    { src: "images/peintures/disparition-quai-st-bernard-iii.jpg", w: 2400, h: 1694, titre: "Quai St Bernard III", annee: "", technique: "", dimensions: "", serie: "Disparition", hors: true },  // z_Anciennes séries_NON/Disparition_NON/Quai St Bernard III.jpg — À COMPLÉTER
    { src: "images/peintures/against-the-odds-dancing-i.jpg", w: 1792, h: 1595, titre: "Dancing I", annee: "", technique: "", dimensions: "", serie: "Against the odds", hors: true },  // z_Anciennes séries_NON/Against the odds_NON/Dancing I.jpg — À COMPLÉTER
    { src: "images/peintures/against-the-odds-dancing-ii.jpg", w: 2109, h: 1587, titre: "Dancing II", annee: "", technique: "", dimensions: "", serie: "Against the odds", hors: true },  // z_Anciennes séries_NON/Against the odds_NON/Dancing II.jpg — À COMPLÉTER
    { src: "images/peintures/against-the-odds-arguing.jpg", w: 2144, h: 1591, titre: "Arguing", annee: "", technique: "", dimensions: "", serie: "Against the odds", hors: true },  // z_Anciennes séries_NON/Against the odds_NON/arguing.jpg — À COMPLÉTER
    { src: "images/peintures/against-the-odds-changing.jpg", w: 2102, h: 1591, titre: "Changing", annee: "", technique: "", dimensions: "", serie: "Against the odds", hors: true },  // z_Anciennes séries_NON/Against the odds_NON/changing.jpg — À COMPLÉTER
    { src: "images/peintures/au-bain-etude-iv.jpg", w: 1111, h: 838, titre: "Étude IV", annee: "", technique: "", dimensions: "", serie: "Au bain", hors: true },  // z_Anciennes séries_NON/Au bain_NON/Etude4.jpg — À COMPLÉTER
    { src: "images/peintures/au-bain-dos-i.jpg", w: 977, h: 739, titre: "Dos I", annee: "", technique: "", dimensions: "", serie: "Au bain", hors: true },  // z_Anciennes séries_NON/Au bain_NON/T Dos I.jpg — À COMPLÉTER
    { src: "images/peintures/au-bain-dos-ii.jpg", w: 1000, h: 813, titre: "Dos II", annee: "", technique: "", dimensions: "", serie: "Au bain", hors: true },  // z_Anciennes séries_NON/Au bain_NON/T Dos II.jpg — À COMPLÉTER
    { src: "images/peintures/au-bain-garde-robe-i.jpg", w: 988, h: 706, titre: "Garde-robe I", annee: "", technique: "", dimensions: "", serie: "Au bain", hors: true },  // z_Anciennes séries_NON/Au bain_NON/T Garde robe I.jpg — À COMPLÉTER
    { src: "images/peintures/au-bain-garde-robe-ii.jpg", w: 1000, h: 693, titre: "Garde-robe II", annee: "", technique: "", dimensions: "", serie: "Au bain", hors: true },  // z_Anciennes séries_NON/Au bain_NON/T Garde robe II.jpg — À COMPLÉTER
    { src: "images/peintures/au-bain-le-bain-ii.jpg", w: 985, h: 773, titre: "Le bain II", annee: "", technique: "", dimensions: "", serie: "Au bain", hors: true },  // z_Anciennes séries_NON/Au bain_NON/T Le bain II.jpg — À COMPLÉTER
    { src: "images/peintures/autoportraits-autoportrait-i.jpg", w: 755, h: 1000, titre: "Autoportrait I", annee: "", technique: "", dimensions: "", serie: "Autoportraits", hors: true },  // z_Anciennes séries_NON/Autoportraits_NON/Autoportrait1.jpg — À COMPLÉTER
    { src: "images/peintures/autoportraits-autoportrait-ii.jpg", w: 762, h: 1000, titre: "Autoportrait II", annee: "", technique: "", dimensions: "", serie: "Autoportraits", hors: true },  // z_Anciennes séries_NON/Autoportraits_NON/Autoportrait2.jpg — À COMPLÉTER
    { src: "images/peintures/autoportraits-autoportrait-iii.jpg", w: 759, h: 1000, titre: "Autoportrait III", annee: "", technique: "", dimensions: "", serie: "Autoportraits", hors: true },  // z_Anciennes séries_NON/Autoportraits_NON/Autoportrait3.jpg — À COMPLÉTER
    { src: "images/peintures/terrasse-terrasse-1-ii.jpg", w: 2400, h: 1576, titre: "Terrasse 1. II", annee: "", technique: "", dimensions: "", serie: "Terrasse", hors: true },  // z_Anciennes séries_NON/Terrasse_NON/Terrasse 1.2.jpg — À COMPLÉTER
    { src: "images/peintures/terrasse-terrasse-i.jpg", w: 2400, h: 1589, titre: "Terrasse  I", annee: "", technique: "", dimensions: "", serie: "Terrasse", hors: true },  // z_Anciennes séries_NON/Terrasse_NON/Terrasse 1.jpg — À COMPLÉTER
    { src: "images/peintures/terrasse-terrasse-ii.jpg", w: 2400, h: 1539, titre: "Terrasse  II", annee: "", technique: "", dimensions: "", serie: "Terrasse", hors: true },  // z_Anciennes séries_NON/Terrasse_NON/Terrasse 2.jpg — À COMPLÉTER
    { src: "images/peintures/terrasse-terrasse-iii.jpg", w: 2400, h: 1585, titre: "Terrasse  III", annee: "", technique: "", dimensions: "", serie: "Terrasse", hors: true },  // z_Anciennes séries_NON/Terrasse_NON/Terrasse 3.jpg — À COMPLÉTER
    { src: "images/peintures/terrasse-terrasse-v.jpg", w: 2400, h: 1537, titre: "Terrasse  V", annee: "", technique: "", dimensions: "", serie: "Terrasse", hors: true },  // z_Anciennes séries_NON/Terrasse_NON/Terrasse 5.jpg — À COMPLÉTER
    { src: "images/peintures/terrasse-terrasse-viii.jpg", w: 2400, h: 1563, titre: "Terrasse  VIII", annee: "", technique: "", dimensions: "", serie: "Terrasse", hors: true },  // z_Anciennes séries_NON/Terrasse_NON/Terrasse 8.jpg — À COMPLÉTER
    { src: "images/peintures/terrasse-terrasse-ix.jpg", w: 2400, h: 1591, titre: "Terrasse  IX", annee: "", technique: "", dimensions: "", serie: "Terrasse", hors: true },  // z_Anciennes séries_NON/Terrasse_NON/Terrasse 9.jpg — À COMPLÉTER
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
      ],
    },

    {
      id: "montparnasse-2024", type: "collective", annee: "2024", titre: "Ce qui est vivant tend à disparaître", lieu: "Galerie du Montparnasse, Paris",
      vues: [
        { src: "images/expositions/montparnasse-2024/1.jpg", w: 2400, h: 1600, legende: "" },
        { src: "images/expositions/montparnasse-2024/2.jpg", w: 2400, h: 1600, legende: "" },
      ],
    },
    {
      id: "in-situ-2023", type: "collective", annee: "2023", titre: "IN SITU", lieu: "Espace Art et Liberté, Charenton-le-Pont",
      vues: [
        { src: "images/expositions/in-situ-2023/1.jpg", w: 2400, h: 1800, legende: "" },
        { src: "images/expositions/in-situ-2023/2.jpg", w: 1800, h: 2400, legende: "" },
        { src: "images/expositions/in-situ-2023/3.jpg", w: 2400, h: 1800, legende: "" },
      ],
    },
    {
      id: "montparnasse-2022", type: "collective", annee: "2022", titre: "", lieu: "Galerie du Montparnasse, Paris",
      vues: [
        { src: "images/expositions/montparnasse-2022/1.jpg", w: 2400, h: 1600, legende: "<em>Ruines du souvenir</em>, 2020", credit: "© Collectif Le Réseau" },
        { src: "images/expositions/montparnasse-2022/2.jpg", w: 2048, h: 1368, legende: "<em>Ruines du souvenir</em>, 2020", credit: "© Ludovic Marquier" },
        { src: "images/expositions/montparnasse-2022/3.jpg", w: 2048, h: 1368, legende: "<em>Ruines du souvenir</em>, 2020", credit: "© Ludovic Marquier" },
        { src: "images/expositions/montparnasse-2022/4.jpg", w: 2048, h: 1152, legende: "<em>Ruines du souvenir</em>, 2020" },
      ],
    },
    {
      id: "beaurepaire-2021", type: "collective", annee: "2021", titre: "Prix de l'Espace Beaurepaire", lieu: "Espace Beaurepaire, Paris",
      vues: [
        { src: "images/expositions/beaurepaire-2021/1.jpg", w: 1024, h: 768, legende: "" },
        { src: "images/expositions/beaurepaire-2021/2.jpg", w: 1024, h: 768, legende: "" },
      ],
    },
    // Vie d'Artiste 2019 : pas de vues (aucune photo satisfaisante)
    { type: "collective", annee: "2019", titre: "Vie d'Artiste", lieu: "Espace Beaurepaire, Paris" },
    { type: "collective", annee: "2019", titre: "87e salon de la Société artistique d'Étampes", lieu: "Étampes" },
    {
      id: "mons-2019", type: "collective", annee: "2019", titre: "De la forêt à moi", lieu: { fr: "Biennale de Mons, Beaux-Arts de Mons, Belgique", en: "Mons Biennial, Beaux-Arts de Mons, Belgium" },
      vues: [
        { src: "images/expositions/mons-2019/1.jpg", w: 2400, h: 1800, legende: "" },
        { src: "images/expositions/mons-2019/2.jpg", w: 2304, h: 1536, legende: "" },
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
        { src: "images/expositions/journet-2018/3.jpg", w: 2400, h: 1914, legende: "" },
        { src: "images/expositions/journet-2018/4.jpg", w: 2400, h: 1500, legende: "" },
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
      // Fresque peinte in situ dans la chapelle pour l'exposition « À bas bruit ». Vues : outils/preparer.py (MURALES)
      id: "a-bas-bruit-fresque",
      titre: "À bas bruit", annee: "2026",
      lieu: { fr: "Chapelle du Centre culturel de La Visitation, Périgueux", en: "Chapel, La Visitation cultural centre, Périgueux" },
      technique: { fr: "Peinture murale in situ", en: "Site-specific mural" }, dimensions: "",
      credit: "© Luc Fauret",
      vues: [
        { src: "images/murales/a-bas-bruit-fresque/1.jpg", w: 2400, h: 1601, legende: "" },
        { src: "images/murales/a-bas-bruit-fresque/2.jpg", w: 2400, h: 1601, legende: "" },
        { src: "images/murales/a-bas-bruit-fresque/3.jpg", w: 2400, h: 1601, legende: "" },
      ],
    },
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
