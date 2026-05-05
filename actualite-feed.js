window.FLIPGYM_INSTAGRAM = {
  handle: "@clubflipgym",
  profileUrl: "https://www.instagram.com/clubflipgym",

  /*
    Branche ici ton endpoint serveur quand il est prêt.
    Exemple attendu: /api/instagram-feed

    Important: ne mets jamais le token Instagram directement dans ce fichier,
    parce qu'il est public dans le navigateur.
  */
  apiEndpoint: "/api/instagram-feed",

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
