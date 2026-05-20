/*
  Base de connaissances prioritaire de Flippy.
  Pour ajouter une reponse, ajoute un objet avec :
  - id: identifiant unique
  - category: categorie interne
  - keywords: expressions que les parents peuvent ecrire
  - answer: reponse courte, claire et prudente
  - links: liens utiles a ajouter a la fin de la reponse

  Variables disponibles dans les reponses :
  {phone}, {email}, {address}, {registrationUrl}, {contactFormUrl}, {auditionFormUrl}
*/
window.FLIPPY_KNOWLEDGE_BASE = [
  {
    id: 'contact-formulaire',
    category: 'contact',
    priority: 80,
    keywords: ['contact', 'contacter', 'vous joindre', 'joindre le club', 'ecrire au club', 'écrire au club', 'formulaire de contact', 'courriel', 'email', 'telephone', 'téléphone'],
    answer: "Vous pouvez joindre flipgym par telephone au {phone}, par courriel a {email}, ou avec le formulaire de contact du site. Pour une demande generale, le formulaire est souvent le plus simple.",
    links: [
      { label: 'Formulaire de contact', url: '{contactFormUrl}' }
    ]
  },
  {
    id: 'inscription-qidigo',
    category: 'inscriptions',
    priority: 85,
    keywords: ['inscription', 'inscrire mon enfant', 'inscrire', 'qidigo', 'places disponibles', 'place disponible', 'session', 'comment inscrire'],
    answer: "Bien sûr. Quel âge a votre enfant? Avec son âge, je pourrai mieux vous orienter vers le bon groupe récréatif. Les inscriptions se finalisent ensuite en ligne sur Qidigo, selon les périodes d'inscription et les places disponibles.",
    links: [
      { label: 'Inscription Qidigo', url: '{registrationUrl}' }
    ]
  },
  {
    id: 'niveau-non-debutant',
    category: 'inscriptions',
    priority: 130,
    keywords: ['pas debutant', 'pas débutant', 'pas debutante', 'pas débutante', "n'est pas debutante", "n'est pas débutante", 'nest pas debutante', 'nest pas débutante', 'non debutant', 'non débutant', 'non debutante', 'non débutante', 'niveau intermediaire', 'niveau intermédiaire', 'intermediaire', 'intermédiaire', 'deja fait de la gym', 'déjà fait de la gym', 'vient d un autre club', 'vient d’un autre club', 'autre club', 'club avant', 'ancien club'],
    answer: "Le niveau intermédiaire est sur invitation seulement. Vous avez le choix d'inscrire votre fille dans le niveau débutant pour débuter la session et, si les entraîneurs voient qu'elle a un niveau plus élevé que débutant, nous pourrons lui changer de niveau. Sinon, l'autre option est de passer une audition privée au coût de 40 $, où un entraîneur évaluera le niveau de votre enfant.",
    links: [
      { label: "Formulaire d'audition", url: '{auditionFormUrl}' },
      { label: 'Inscription Qidigo', url: '{registrationUrl}' }
    ]
  },
  {
    id: 'session-deja-commencee',
    category: 'inscriptions',
    priority: 90,
    keywords: ['session deja commence', 'session déjà commencée', 'inscrire en retard', 'trop tard pour inscrire', 'liste attente', 'liste d attente', "liste d'attente"],
    answer: "Il peut etre possible de s'inscrire meme si la session a deja commence, selon les places disponibles. Contactez le club pour verifier s'il reste une place ou pour etre ajoute a la liste d'attente."
  },
  {
    id: 'audition-formulaire',
    category: 'competitif',
    priority: 100,
    keywords: ['audition', 'demande audition', 'evaluation competitive', 'évaluation compétitive', 'tester niveau', 'evaluer niveau', 'évaluer niveau', 'autre club', 'integrer competitif', 'intégrer compétitif'],
    answer: "Pour demander une audition compétitive, remplissez le formulaire d'audition. Indiquez l'expérience gymnique de l'enfant, son niveau actuel, son club actuel s'il y a lieu, et le programme visé. L'équipe pourra ensuite vous recontacter pour la suite.",
    links: [
      { label: "Formulaire d'audition", url: '{auditionFormUrl}' }
    ]
  },
  {
    id: 'cours-essai',
    category: 'inscriptions',
    priority: 75,
    keywords: ['cours essai', "cours d'essai", 'essai gratuit', 'essayer un cours', 'premier cours'],
    answer: "Pour les cours d'essai, le mieux est de contacter le club, car les possibilites dependent de la session, du groupe d'age et des places disponibles.",
    links: [
      { label: 'Formulaire de contact', url: '{contactFormUrl}' }
    ]
  },
  {
    id: 'tenue-maillot',
    category: 'recreatif',
    priority: 120,
    keywords: ['maillot', 'uniforme', 'quoi porter', 'quoi elle doit porter', 'quoi il doit porter', 'porter pour son cours', 'porter pour le cours', 'tenue', 'vetement', 'vêtement', 'justaucorps'],
    answer: "Le maillot d'entrainement flipgym est obligatoire a partir du groupe 4-5 ans. Si l'enfant n'en possede pas, il peut etre achete au bureau administratif au cout de 45 $. Tous les modeles de maillots flipgym sont acceptes."
  },
  {
    id: 'affiliation-fgq',
    category: 'inscriptions',
    priority: 80,
    keywords: ['affiliation', 'federation', 'fédération', 'gymnastique quebec', 'gymnastique québec', 'fgq'],
    answer: "Une affiliation annuelle a la Federation de gymnastique du Quebec est requise pour chaque gymnaste. Pour la periode du 1er septembre 2025 au 31 aout 2026, elle est de 35 $ par gymnaste, ou 14 $ pour les enfants de 3 ans et moins."
  },
  {
    id: 'absence',
    category: 'vie-du-club',
    priority: 95,
    keywords: ['absence', 'absent', 'manquer un cours', 'manque un cours', 'manqué un cours', 'a manque un cours', 'a manqué un cours', 'rater un cours', 'ne peut pas assister', 'cours manque', 'cours manqué'],
    answer: "Si votre enfant doit manquer un cours, merci d'en informer le club par telephone ou par courriel. Indiquez le nom de l'enfant, le groupe, la date et la raison de l'absence si necessaire."
  },
  {
    id: 'reprise-cours',
    category: 'vie-du-club',
    priority: 110,
    keywords: ['reprise', 'reprendre un cours', 'peut le reprendre', 'peut on le reprendre', 'peut-on le reprendre', 'cours de reprise', 'cours manque repris', 'cours manqué repris', 'manque un cours reprendre', 'manqué un cours reprendre'],
    answer: "Les possibilites de reprise peuvent varier selon la session, les groupes et les places disponibles. Contactez le club pour verifier ce qui est possible pour votre situation.",
    links: [
      { label: 'Formulaire de contact', url: '{contactFormUrl}' }
    ]
  },
  {
    id: 'annulation-remboursement',
    category: 'inscriptions',
    priority: 120,
    keywords: ['annulation', 'annuler inscription', 'annuler mon inscription', 'annuler une inscription', 'remboursement', 'rembourser', 'credit', 'crédit', 'changer de groupe', 'transfert'],
    answer: "Pour une annulation, un remboursement, un credit ou un changement de groupe, contactez directement le club. Ces demandes dependent de la session, du moment de la demande et de la situation du participant.",
    links: [
      { label: 'Formulaire de contact', url: '{contactFormUrl}' }
    ]
  },
  {
    id: 'camp-de-jour',
    category: 'camp',
    priority: 80,
    keywords: ['camp', 'camp de jour', 'camp ete', 'camp été', 'camp recreatif', 'camp récréatif', 'service de garde camp'],
    answer: "flipgym propose des camps de jour recreatifs, releve et competitifs pendant l'ete. Les details peuvent varier selon les semaines et les groupes; consultez la page camp de jour ou contactez le club pour une question precise.",
    links: [
      { label: 'Camp de jour', url: 'camp-de-jour.html' }
    ]
  },
  {
    id: 'cours-prives',
    category: 'services',
    priority: 80,
    keywords: ['cours prive', 'cours privé', 'cours prives', 'cours privés', 'coach prive', 'entrainement personnalise', 'entraînement personnalisé'],
    answer: "flipgym offre des cours prives avec un entraineur selon le niveau et les objectifs de la gymnaste. Les demandes doivent etre validees avec le club selon les disponibilites.",
    links: [
      { label: 'Services', url: 'services.html#cours-prives' }
    ]
  },
  {
    id: 'fetes-enfants',
    category: 'services',
    priority: 120,
    keywords: ['fete enfant', 'fête enfant', 'fete d enfant', 'fête d enfant', "fete d'enfant", "fête d'enfant", 'reserver une fete', 'réserver une fête', 'reservation fete', 'réservation fête', 'anniversaire', 'party', 'fetes enfants', 'fêtes enfants'],
    answer: "Les fêtes d'enfants chez flipgym comprennent 1 heure d'activités dirigées sur les appareils avec un entraîneur, puis 30 minutes de jeu libre encadré. Le tarif est de 250 $ pour 10 enfants, puis 10 $ par enfant supplémentaire. Pour vérifier les disponibilités, contactez le club.",
    links: [
      { label: 'Fetes d’enfants', url: 'services.html#fetes' }
    ]
  },
  {
    id: 'location-gymnase',
    category: 'services',
    priority: 80,
    keywords: ['location gymnase', 'louer gymnase', 'louer le gym', 'location du gymnase', 'evenement corporatif', 'événement corporatif'],
    answer: "Le gymnase peut etre loue pour certaines activites sportives, pratiques ou evenements. Les conditions varient selon l'activite, le nombre de participants et l'encadrement requis.",
    links: [
      { label: 'Location du gymnase', url: 'services.html#location' }
    ]
  },
  {
    id: 'boutique',
    category: 'boutique',
    priority: 75,
    keywords: ['boutique', 'maillot', 'hoodie', 'gourde', 'cuissard', 'tape', 'k-tape', 'produits flipgym'],
    answer: "La boutique flipgym propose plusieurs articles comme maillots, hoodies, gourdes, cuissards, tape et K-Tape. Les achats se font directement au bureau administratif du club.",
    links: [
      { label: 'Boutique', url: 'boutique.html' }
    ]
  },
  {
    id: 'stationnement',
    category: 'visite',
    priority: 70,
    keywords: ['stationnement', 'parking', 'se stationner', 'voiture'],
    answer: "Pour les informations de stationnement les plus fiables selon le moment de votre visite, contactez le club ou prevoyez un peu d'avance avant le cours.",
    links: [
      { label: 'Nous joindre', url: '{contactFormUrl}' }
    ]
  },
  {
    id: 'objets-perdus',
    category: 'vie-du-club',
    priority: 130,
    keywords: ['objet perdu', 'objets perdus', 'perdu', 'perdue', 'gourde perdue', 'perdu une gourde', 'perdu ma gourde', 'bouteille perdue', 'perdu une bouteille', 'vetement perdu', 'vêtement perdu'],
    answer: "Pour un objet perdu, contactez le club en decrivant l'objet, le cours, la date approximative et le nom de l'enfant. L'equipe pourra verifier si l'objet a ete retrouve."
  },
  {
    id: 'emploi',
    category: 'club',
    priority: 75,
    keywords: ['emploi', 'emplois', 'travailler', 'postuler', 'cv', 'entraineur', 'entraîneur'],
    answer: "Pour les opportunites d'emploi ou pour envoyer une candidature, contactez flipgym par courriel a {email}. Vous pouvez aussi utiliser le formulaire de contact du site.",
    links: [
      { label: 'Formulaire de contact', url: '{contactFormUrl}' }
    ]
  },
  {
    id: 'salutation',
    category: 'conversation',
    priority: 60,
    keywords: ['bonjour', 'salut', 'allo', 'hello', 'bonsoir'],
    answer: "Bonjour! Je suis Flippy, l'assistante virtuelle de flipgym. Je peux vous aider avec les cours, les inscriptions, les auditions, le camp de jour, les services et les infos pratiques du club."
  }
];
