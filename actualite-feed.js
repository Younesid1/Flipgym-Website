window.FLIPGYM_INSTAGRAM = {
  handle: "@clubflipgym",
  profileUrl: "https://www.instagram.com/clubflipgym",

  /*
    GitHub Pages ne peut pas executer une API privee.
    La page essaie donc l'API locale/serveur, puis une cache JSON generee
    par GitHub Actions, puis les publications fallback.

    Important: ne mets jamais le token Instagram directement dans ce fichier,
    parce qu'il est public dans le navigateur.
  */
  apiEndpoints: [
    "/api/instagram-feed",
    "instagram-feed-cache.json"
  ],

  fallbackPosts: [
    {
      permalink: "https://www.instagram.com/p/DXnfkuUFWNs/?img_index=1",
      caption: "Dernière publication du Club Flipgym de Montréal."
    },
    {
      permalink: "https://www.instagram.com/p/DXP7DgrDnmN/?img_index=1",
      caption: "Suivez nos nouvelles, événements et moments forts sur Instagram."
    },
    {
      permalink: "https://www.instagram.com/p/DXHoUyWlSJs/?img_index=1",
      caption: "La vie du club, directement depuis notre compte officiel."
    },
    {
      permalink: "https://www.instagram.com/p/DW_017OFS9P/?img_index=1",
      caption: "Compétitions, cours, spectacles et annonces importantes."
    },
    {
      permalink: "https://www.instagram.com/p/DWr-07bmJB3/?img_index=1",
      caption: "Un aperçu des activités récentes de Flipgym."
    },
    {
      permalink: "https://www.instagram.com/p/DWcG7x3mCHS/?img_index=1",
      caption: "Retrouvez toutes les publications sur Instagram."
    }
  ]
};
