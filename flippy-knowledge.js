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
    id: 'activites',
    category: 'club',
    priority: 70,
    keywords: ['activites', 'activités', 'propose', 'offrez', 'offrent', 'qu est ce que flipgym propose', 'que propose flipgym', 'programmes offerts'],
    answer: "flipgym offre des cours recreatifs, des programmes releve et competitifs, des camps de jour, ainsi que plusieurs services comme les cours prives, les fetes d'enfants et la location de gymnase."
  },
  {
    id: 'mission-valeurs',
    category: 'club',
    priority: 70,
    keywords: ['mission', 'valeurs', 'vision', 'a propos', 'à propos', 'histoire', 'historique', 'depuis 1977'],
    answer: "Le club flipgym de Montreal est etabli a Rosemont depuis 1977. Sa mission est de promouvoir le bien-etre physique et psychologique des enfants par la gymnastique artistique, dans un environnement securitaire, dynamique et stimulant."
  },
  {
    id: 'horaires',
    category: 'contact',
    priority: 100,
    keywords: ['horaire', 'horaires', 'heure', 'heures', 'ouvert', 'ouverture', 'ferme', 'fermeture', 'quand etes vous ouvert', 'quand êtes vous ouvert'],
    answer: "Les heures d'ouverture du club sont du lundi au vendredi de 13 h 30 a 20 h 30, et le samedi et dimanche de 8 h 30 a 18 h. Pour les horaires de cours precis, consultez la page Horaires & Tarifs ou Qidigo.",
    links: [
      { label: 'Horaires & Tarifs', url: 'recreatif-horaires-tarifs.html' },
      { label: 'Inscription Qidigo', url: '{registrationUrl}' }
    ]
  },
  {
    id: 'inscription-qidigo',
    category: 'inscriptions',
    priority: 85,
    keywords: ['inscription', 'inscrire mon enfant', 'inscrire', 'qidigo', 'comment inscrire'],
    answer: "Bien sûr. Quel âge a votre enfant? Avec son âge, je pourrai mieux vous orienter vers le bon groupe récréatif. Les inscriptions se finalisent ensuite en ligne sur Qidigo, selon les périodes d'inscription et les places disponibles.",
    links: [
      { label: 'Inscription Qidigo', url: '{registrationUrl}' }
    ]
  },
  {
    id: 'tarifs',
    category: 'inscriptions',
    priority: 95,
    keywords: ['tarif', 'tarifs', 'prix', 'cout', 'coût', 'combien', 'combien ca coute', 'combien ça coûte'],
    answer: "Pour la session Printemps 2026, les tarifs recreatifs affiches vont notamment de 155 $ a 220 $ pour les groupes 1x/semaine, puis 415 $, 430 $ ou 475 $ pour certains groupes 2x/semaine selon l'age et le niveau. Si vous me donnez l'age de l'enfant, je peux vous orienter vers les groupes correspondants.",
    links: [
      { label: 'Horaires & Tarifs', url: 'recreatif-horaires-tarifs.html' }
    ]
  },
  {
    id: 'paiement',
    category: 'inscriptions',
    priority: 75,
    keywords: ['paiement', 'payer', 'modes de paiement', 'mode de paiement', 'carte', 'debit', 'débit', 'credit', 'crédit', 'argent comptant', 'comptant'],
    answer: "Les frais d'inscription sont payables en ligne. Pour l'achat des maillots, des gants ou des produits flipgym, les achats se font au bureau administratif; les cartes de debit, les cartes de credit et l'argent comptant sont acceptes."
  },
  {
    id: 'age-minimum',
    category: 'recreatif',
    priority: 90,
    keywords: ['quel age', 'quel âge', 'a partir de quel age', 'a partir de quel âge', '18 mois', 'age minimum', 'âge minimum', 'mon enfant a quel age'],
    answer: "Les cours commencent des 18 mois avec les groupes Parent-Enfant. Si vous me donnez l'age de votre enfant, je peux vous indiquer les groupes recreatifs correspondants."
  },
  {
    id: 'recreatif',
    category: 'recreatif',
    priority: 65,
    keywords: ['recreatif', 'récréatif', 'cours', 'groupe', 'groupes'],
    answer: "Le secteur recreatif comprend la petite enfance des 18 mois, puis des groupes 4-5 ans, 6-7 ans, 8-10 ans, 11 ans et +, ainsi que 16 ans et +. Si vous me donnez l'age exact de l'enfant, je peux vous repondre avec les groupes, horaires et prix de la session Printemps 2026.",
    links: [
      { label: 'Description des cours', url: 'recreatif-description.html' },
      { label: 'Horaires & Tarifs', url: 'recreatif-horaires-tarifs.html' }
    ]
  },
  {
    id: 'niveau-non-debutant',
    category: 'inscriptions',
    priority: 130,
    keywords: ['pas debutant', 'pas débutant', 'pas debutante', 'pas débutante', "n'est pas debutante", "n'est pas débutante", 'nest pas debutante', 'nest pas débutante', 'non debutant', 'non débutant', 'non debutante', 'non débutante', 'niveau intermediaire', 'niveau intermédiaire', 'intermediaire', 'intermédiaire', 'deja fait de la gym', 'déjà fait de la gym'],
    answer: "Le niveau intermédiaire est sur invitation seulement. Vous avez le choix d'inscrire votre fille dans le niveau débutant pour débuter la session et, si les entraîneurs voient qu'elle a un niveau plus élevé que débutant, nous pourrons lui changer de niveau. Sinon, l'autre option est de passer une audition privée au coût de 40 $, où un entraîneur évaluera le niveau de votre enfant.",
    links: [
      { label: "Formulaire d'audition", url: '{auditionFormUrl}' },
      { label: 'Inscription Qidigo', url: '{registrationUrl}' }
    ]
  },
  {
    id: 'session-deja-commencee',
    category: 'inscriptions',
    priority: 140,
    keywords: ['session deja commence', 'session déjà commencée', 'session est deja commencee', 'session est déjà commencée', 'inscrire en retard', 'trop tard pour inscrire', 'places disponibles', 'place disponible', 'reste des places', 'reste une place', 'liste attente', 'liste d attente', "liste d'attente"],
    answer: "Les places disponibles peuvent varier selon l'age, le groupe et le moment de la session. Si la session est deja commencee, contactez le club pour verifier s'il reste une place ou s'il est possible d'etre ajoute a la liste d'attente.",
    links: [
      { label: 'Formulaire de contact', url: '{contactFormUrl}' },
      { label: 'Inscription Qidigo', url: '{registrationUrl}' }
    ]
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
    id: 'releve-defi',
    category: 'competitif',
    priority: 85,
    keywords: ['pre-defi', 'pré-défi', 'pre defi', 'defi 1', 'défi 1', 'defi 2', 'défi 2', 'defi 3', 'défi 3', 'defi 4', 'défi 4', 'defi 5', 'défi 5', 'defi 6', 'défi 6', 'releve defi', 'relève défi'],
    answer: "Dans le secteur Releve/Defi, le groupe Pre-Defi s'adresse aux 4 a 6 ans preselectionnees et travaille les fondements gymniques. Les programmes Defi 1-2 puis Defi 3-4-5-6 poursuivent cette progression et peuvent mener vers le secteur competitif, avec admission sur recommandation.",
    links: [
      { label: 'Relève / Défi', url: 'competitif-releve-defi.html' }
    ]
  },
  {
    id: 'competitif',
    category: 'competitif',
    priority: 70,
    keywords: ['competitif', 'compétitif', 'releve', 'relève', 'defi', 'défi', 'regional', 'régional', 'provincial', 'sport-etudes', 'sport études'],
    answer: "Le secteur competitif fonctionne sur audition ou recommandation et comprend notamment Releve/Defi, le niveau regional et le provincial / sport-etudes. Pour une integration, le plus fiable est de remplir le formulaire d'audition ou de contacter le club.",
    links: [
      { label: "Formulaire d'audition", url: '{auditionFormUrl}' },
      { label: 'Secteur compétitif', url: 'competitif-releve-defi.html' }
    ]
  },
  {
    id: 'competitif-autre-club',
    category: 'competitif',
    priority: 150,
    keywords: ['autre club', 'vient d un autre club', 'vient d’un autre club', 'venant d un autre club', 'club avant', 'ancien club', 'niveau competitif dans un autre club', 'integrer le programme competitif', 'intégrer le programme compétitif'],
    answer: "Si votre enfant vient d'un autre club ou a deja une experience competitive, vous pouvez remplir le formulaire d'audition. Precisez son experience gymnique, son niveau actuel et son club actuel; l'equipe pourra ensuite evaluer le groupe le plus adapte.",
    links: [
      { label: "Formulaire d'audition", url: '{auditionFormUrl}' }
    ]
  },
  {
    id: 'cours-essai',
    category: 'inscriptions',
    priority: 75,
    keywords: ['cours essai', "cours d'essai", 'essai gratuit', 'essayer un cours', 'premier cours'],
    answer: "Le club n'offre pas de cours d'essai. Pour decouvrir les groupes disponibles, consultez les descriptions de cours et les horaires, puis finalisez l'inscription sur Qidigo selon les places disponibles.",
    links: [
      { label: 'Description des cours', url: 'recreatif-description.html' },
      { label: 'Inscription Qidigo', url: '{registrationUrl}' }
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
    id: 'camp-recreatif-detail',
    category: 'camp',
    priority: 110,
    keywords: ['camp de jour recreatif', 'camp de jour récréatif', 'camp recreatif', 'camp récréatif', 'tarifs camp', 'journee type', 'journée type', 'service de garde camp', 'chandail camp'],
    answer: "Le camp de jour recreatif s'adresse aux jeunes filles de 6 ans, ou ayant complete la maternelle, et plus, avec ou sans experience en gymnastique. Il comprend un minimum de 12 h de gymnastique par semaine, ainsi que des activites variees. Si vous voulez, je peux aussi vous donner seulement les tarifs ou seulement la journee type.",
    links: [
      { label: 'Camp de jour', url: 'camp-de-jour.html' }
    ]
  },
  {
    id: 'camp-releve',
    category: 'camp',
    priority: 105,
    keywords: ['camp de jour releve', 'camp de jour relève', 'camp releve', 'camp relève', 'pre-regional', 'pré-régional', 'releve 6-7', 'releve 8-10', 'relève 6-7', 'relève 8-10'],
    answer: "Le camp de jour releve s'adresse aux jeunes filles de 6 ans et plus, ou ayant complete la maternelle. Il mixe activites et entrainement avec un minimum de 12 h de gymnastique par semaine. Les groupes admissibles sont R1-R2, Pre-Defi/Defi 1-2-3, Pre-regional, Releve 6-7 et Releve 8-10.",
    links: [
      { label: 'Camp de jour', url: 'camp-de-jour.html' }
    ]
  },
  {
    id: 'camp-competitif',
    category: 'camp',
    priority: 105,
    keywords: ['camp d entrainement competitif', "camp d'entrainement competitif", 'camp d entrainement compétitif', "camp d'entraînement compétitif", 'camp competitif', 'camp compétitif', 'sport-etude camp', 'sport étude camp'],
    answer: "Le camp d'entrainement competitif s'adresse aux gymnastes deja inscrites dans un groupe competitif du club. La gymnaste effectue 20 h de gymnastique pour le competitif de soir ou 22 h pour le sport-etudes. Les groupes admissibles sont Sport-Etude, N4 et +, et R3 et +.",
    links: [
      { label: 'Camp de jour', url: 'camp-de-jour.html' }
    ]
  },
  {
    id: 'camp-tarifs-detail',
    category: 'camp',
    priority: 150,
    keywords: ['tarifs camp', 'tarifs du camp', 'prix camp', 'prix du camp', 'cout camp', 'cout du camp', 'coût camp', 'coût du camp', 'combien coute le camp', 'combien coûte le camp', 'frais camp', 'frais du camp', 'service de garde camp'],
    answer: "Les frais obligatoires du camp recreatif sont de 240 $ par semaine pour les semaines 3 a 9, 192 $ pour les semaines 1 et 2, 15 $ pour le chandail du camp, et 18 $ d'affiliation Gymnastique Quebec pour les nouveaux membres jusqu'au 31 aout 2026. Le service de garde est facultatif : 40 $ par semaine pour les semaines 3 a 9 et 32 $ pour les semaines 1 et 2.",
    links: [
      { label: 'Camp de jour', url: 'camp-de-jour.html' }
    ]
  },
  {
    id: 'camp-horaire-detail',
    category: 'camp',
    priority: 160,
    keywords: ['journee type camp', 'journée type camp', 'horaire camp', 'horaires camp', 'horaire du camp', 'horaires du camp', 'journee camp', 'journée camp', 'journee du camp', 'journée du camp', 'sortie mercredi'],
    answer: "La journee type du camp se deroule generalement de 9 h a 16 h. Les lundis, mardis, jeudis et vendredis alternent activites, gymnastique, diner et jeux calmes. Le mercredi, la journee de 9 h a 16 h est reservee a une sortie.",
    links: [
      { label: 'Camp de jour', url: 'camp-de-jour.html' }
    ]
  },
  {
    id: 'regional-detail',
    category: 'competitif',
    priority: 130,
    keywords: ['regional', 'régional', 'le regional', 'le régional', 'c est quoi le regional', 'c est quoi le régional', 'niveau regional', 'niveau régional', 'releve 8-10 r', 'r1-r2', 'r1', 'r2', 'r3', 'r4-r5', 'regional detail', 'programme regional', 'programme régional'],
    answer: "Le programme regional comprend notamment les groupes Releve 8-10 R, R1-R2, R3 et R4-R5. Ces groupes permettent de developper les habiletes gymniques avec plus de precision technique, dans un cadre competitif regional, et l'admission se fait sur recommandation.",
    links: [
      { label: 'Régional', url: 'competitif-regional.html' }
    ]
  },
  {
    id: 'provincial-detail',
    category: 'competitif',
    priority: 90,
    keywords: ['provincial', 'nintro', 'n7', 'n8', 'coupe provinciale', 'gymnix', 'programme provincial'],
    answer: "Le programme provincial comporte les categories Nintro a N8 selon differents groupes d'age. Il demande de fortes qualites de force, puissance et flexibilite, et peut mener vers le secteur national ou les groupes sport-etudes. Le circuit provincial implique minimalement deux competitions par annee.",
    links: [
      { label: 'Provincial / Sport-Études', url: 'competitif-provincial-sport-etudes.html' }
    ]
  },
  {
    id: 'sport-etudes-detail',
    category: 'competitif',
    priority: 95,
    keywords: ['sport-etudes', 'sport études', 'eleve-athlete', 'élève-athlète', 'primaire', 'secondaire', 'antoine de st-exupery', 'reine-marie', 'college de montreal', 'collège de montréal'],
    answer: "Le programme eleve-athlete primaire et le programme sport-etudes secondaire permettent de concilier les etudes et la gymnastique avec un horaire adapte. L'admission gymnique se fait sous recommandation, avec evaluation obligatoire selon le niveau. Les ecoles partenaires mentionnees sont l'Ecole St-Arsene, Antoine de St-Exupery, le College Reine-Marie et le College de Montreal.",
    links: [
      { label: 'Provincial / Sport-Études', url: 'competitif-provincial-sport-etudes.html' }
    ]
  },
  {
    id: 'services-detail',
    category: 'services',
    priority: 70,
    keywords: ['services', 'cours prive', 'cours privé', 'fete', 'fête', 'location', 'gymnase', 'auditions'],
    answer: "flipgym offre plusieurs services : cours prives, fetes d'enfants, location de gymnase et auditions pour certains profils. Les conditions varient selon le service, le nombre de participants et les disponibilites.",
    links: [
      { label: 'Services', url: 'services.html' }
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
    priority: 150,
    keywords: ['fete enfant', 'fête enfant', 'fete d enfant', 'fête d enfant', 'fetes d enfants', 'fêtes d enfants', "fete d'enfant", "fête d'enfant", "fetes d'enfants", "fêtes d'enfants", 'reserver une fete', 'réserver une fête', 'reservation fete', 'réservation fête', 'anniversaire', 'party', 'fetes enfants', 'fêtes enfants'],
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
    keywords: ['boutique', 'maillot', 'hoodie', 'gourde', 'verre', 'vitre', 'paille', 'cuissard', 'slides', 'sandales', 'pines', 'crocs', 'bas', 'chaussettes', 'tape', 'k-tape', 'produits flipgym'],
    answer: "La boutique flipgym propose plusieurs articles comme maillots, hoodies, gourdes, verres, cuissards, slides, pines de crocs, bas, tape et K-Tape. Les achats se font directement au bureau administratif du club.",
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
    id: 'contact',
    category: 'contact',
    priority: 90,
    keywords: ['adresse', 'appeler', 'ou etes vous', 'où êtes vous', 'ou se trouve', 'où se trouve'],
    answer: "Vous pouvez joindre flipgym au {phone}, par courriel a {email}, via le formulaire de contact, ou venir au club au {address}.",
    links: [
      { label: 'Formulaire de contact', url: '{contactFormUrl}' }
    ]
  },
  {
    id: 'equipe',
    category: 'club',
    priority: 75,
    keywords: ['equipe', 'équipe', 'administration', 'emily', 'younes', 'felicia', 'flora baron', 'gabryelle'],
    answer: "L'administration presentee sur le site comprend Emily St-Hilaire Chumbe, directrice technique; Younes Aydi, directeur administratif; Felicia Beauchamp, coordonnatrice du secteur recreatif et du camp de jour; Flora Baron, responsable du secteur regional; et Gabryelle Boudreault-Lafortune, responsable secteur releve.",
    links: [
      { label: 'Équipe', url: 'equipe.html' }
    ]
  },
  {
    id: 'retard',
    category: 'vie-du-club',
    priority: 80,
    keywords: ['retard', 'en retard', 'arriver en retard', 'retard cours'],
    answer: "Si vous pensez arriver en retard, le mieux est de contacter directement le club afin que l'equipe puisse vous guider selon le cours et le contexte.",
    links: [
      { label: 'Formulaire de contact', url: '{contactFormUrl}' }
    ]
  },
  {
    id: 'spectacle',
    category: 'evenements',
    priority: 90,
    keywords: ['evenement', 'événement', 'demonstration', 'démonstration', 'spectacle', 'fin d annee', 'fin d année', 'juin', 'billet spectacle', 'billetterie', 'ordre de passage'],
    answer: "Le spectacle de fin d'annee 2026 aura lieu en juin. Les informations importantes, la billetterie et l'ordre de passage sont disponibles sur la page Spectacle du site. Pour une question precise sur le spectacle, contactez le club.",
    links: [
      { label: 'Spectacle', url: 'spectacle.html' }
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
