/* ================================================
   flipgym Montréal — Agent IA
   Propulsé par OpenAI GPT-4o
================================================ */

// ─── CONFIGURATION MANUELLE DU CHATBOT ────────────────────────────────────
// Modifie d'abord cette section si tu veux mettre a jour Flippy.
const FLORA_CONFIG = {
  assistantName: 'Flippy',
  clubName: 'Club flipgym de Montreal',
  tone: 'chaleureux, professionnel et enthousiaste',
  contact: {
    address: '1600 Rue de Drucourt, Montreal (QC) H2G 1N6 — Quartier Rosemont',
    phone: '514 948-2222',
    email: 'flipgym@flipgym.com',
    website: 'flipgym.com',
    registrationUrl: 'qidigo.com/u/Club-Flipgym-de-Montreal/activities/session'
  },
  openingHours: [
    'Lundi au vendredi : 13h a 20h',
    'Samedi au dimanche : 9h a 16h'
  ],
  history: "Etabli depuis 1977 dans le quartier Rosemont.",
  recreationalNotes: {
    uniformRule: "Le maillot d'entrainement flipgym est obligatoire a partir du groupe 4-5 ans.",
    uniformPrice: "Le maillot coute 45$ au bureau administratif si l'enfant n'en possede pas deja un.",
    uniformModels: 'Tous les modeles de maillots flipgym sont acceptes.',
    affiliationRule: 'Une affiliation annuelle a la Federation de gymnastique du Quebec est requise.',
    affiliationRegular: '35$ par gymnaste',
    affiliationToddler: '14$ pour les enfants de 3 ans et moins',
    affiliationPeriod: "L'affiliation est payable une seule fois par annee et couvre la periode du 1er septembre 2025 au 31 aout 2026."
  },
  programs: {
    recreational: [
      'Mini-gym (18 mois - 3 ans)',
      "Cours par groupes d'age",
      'Pour decouvrir la gym dans un cadre amusant et securitaire',
      'Inscription via Qidigo'
    ],
    competitive: [
      'Releve-Defi',
      'Niveau Regional',
      'Provincial / Sport-Etudes',
      'Entraineurs certifies'
    ],
    camp: [
      'Camp de jour recreatif',
      'Camp de jour releve',
      "Camp d'entrainement competitif",
      'Guide du parent disponible sur le site'
    ]
  },
  services: [
    'Cours prives — entrainement personnalise',
    "Fetes d'enfants — dans le gymnase",
    'Location du gymnase — evenements sportifs ou corporatifs',
    'Aide financiere — disponible pour les familles dans le besoin',
    'Auditions — pour integrer les programmes competitifs',
    'Emplois — postes disponibles sur le site',
    'Services aux membres — page dediee sur le site'
  ],
  mission: 'Promouvoir le bien-etre physique et psychologique des enfants par la pratique de la gymnastique artistique dans un environnement securitaire, dynamique et stimulant.',
  values: ['Respect', 'Perseverance', 'Estime de soi', 'Accomplissement', 'Solidarite', 'Passion'],
  demo: {
    greeting: "Bonjour! Je suis Flippy, l’assistante virtuelle de flipgym. Je peux vous guider pour les cours, les inscriptions, les horaires et les services du club.",
    fallback: "Je suis en mode demo local pour l'instant, donc mes reponses sont simulees. Je peux quand meme vous aider sur les horaires, les inscriptions, les programmes recreatifs ou competitifs, et les services du club.",
    recreationalFallback: "Le secteur recreatif comprend la petite enfance des 18 mois, puis des groupes 4-5 ans, 6-7 ans, 8-10 ans, 11 ans et +, ainsi que 16 ans et +. Si vous me donnez l'age exact de l'enfant, je peux vous repondre avec les groupes, horaires et prix de la session Printemps 2026.",
    competitiveReply: "Le secteur competitif fonctionne sur audition et comprend notamment Releve-Defi, le niveau regional et le provincial / sport-etudes. Pour une integration, le plus sur est de contacter directement le club afin d'obtenir les criteres exacts.",
    campReply: "flipgym propose des camps de jour recreatifs, releve et competitifs pendant l'ete. Le guide du parent et les details d'inscription sont generalement fournis sur le site du club.",
    pricingReply: "Pour la session Printemps 2026, les tarifs recreatifs affiches vont notamment de 155$ a 220$ pour les groupes 1x/semaine, puis 415$, 430$ ou 475$ pour certains groupes 2x/semaine selon l'age et le niveau. Si vous me donnez l'age de l'enfant, je peux vous dire directement les groupes et les prix correspondants.",
    agePrograms: {
      toddler: {
        label: '18 mois a 4 ans',
        reply: `Pour la session Printemps 2026, en petite enfance il y a :
- Parent-Enfant 18-36 mois : samedi 8h30 a 190$ ou dimanche 8h30 a 155$
- Parent-Enfant 3-4 ans : samedi 8h30 a 190$ ou samedi 9h30 a 190$
Ces cours durent 45 minutes et sont penses pour developper la motricite dans un cadre amusant et securitaire.`
      },
      '4-5': {
        label: '4-5 ans',
        reply: `Pour un enfant de 4-5 ans, voici les groupes recreatifs de la session Printemps 2026 :
- Debutant, 55 minutes : vendredi 16h30 a 190$, samedi 8h30 a 190$, samedi 9h30 a 190$, samedi 10h30 a 190$, dimanche 8h30 a 155$
- Debutant garcons : samedi 8h30 a 190$
- Intermediaire, 1h25 : dimanche 9h30 a 180$
Le groupe intermediaire est sur recommandation.`
      },
      '6-7': {
        label: '6-7 ans',
        reply: `Pour un enfant de 6-7 ans, voici les groupes recreatifs de la session Printemps 2026 :
- Debutant, 1h25 : vendredi 17h30 a 220$, samedi 9h30 a 220$, samedi 11h a 220$, dimanche 9h30 a 180$, dimanche 12h30 a 180$
- Intermediaire, 1h25 : samedi 9h30 a 220$
- Intermediaire-avance 2x/semaine : mercredi 17h + samedi 9h30 a 415$
Le groupe debutant est mixte. Les groupes intermediaires et avances sont sur recommandation.`
      },
      '8-10': {
        label: '8-10 ans',
        reply: `Pour 8-10 ans pendant la session Printemps 2026 :
- Debutant, 1h25 : vendredi 19h a 220$, samedi 11h a 220$, samedi 12h30 a 220$, samedi 14h a 220$, samedi 15h30 a 220$, dimanche 11h a 180$, dimanche 14h a 180$
- Debutant 2x/semaine : mardi 17h + samedi 14h30 a 415$
- Intermediaire : vendredi 19h a 220$ ou samedi 16h a 220$
- Avance 2x/semaine : mercredi 18h30 + samedi 12h30 a 475$
Dans la description des cours, les groupes 8-10 ans sont presentes comme filles uniquement.`
      },
      '11+': {
        label: '11 ans et +',
        reply: `Pour 11 ans et plus a la session Printemps 2026 :
- Debutant : samedi 15h30 a 220$
- Intermediaire-avance 2x/semaine : mardi 18h30 + dimanche 15h30 a 430$
Les descriptions indiquent que ces groupes sont orientes vers un perfectionnement plus pousse, avec certains niveaux sur recommandation.`
      },
      '16+': {
        label: '16 ans et +',
        reply: `Pour 16 ans et plus a la session Printemps 2026 :
- Debutant : mercredi 20h30 a 220$
- Intermediaire : jeudi 20h30 a 220$`
      }
    }
  }
};

const FLORA_SITE_KNOWLEDGE = {
  about: {
    history: "Le club flipgym de Montreal est etabli a Rosemont depuis 1977. La gymnastique y est presentee comme une discipline qui aide les jeunes a se depasser, a construire leur confiance et a developper leur estime de soi dans un environnement physique et psychologique stable et securitaire.",
    mission: "La mission du club est de promouvoir le bien-etre physique et psychologique des enfants par la pratique de la gymnastique artistique dans un environnement securitaire, dynamique et stimulant. Le site met aussi de l'avant les bienfaits d'un mode de vie actif, le travail d'equipe, la confiance en soi et l'apprentissage face a l'echec comme a la reussite."
  },
  competitive: {
    releveDefi: {
      preDefi: "Le groupe Pre-Defi s'adresse aux enfants de 4 a 6 ans deja preselectionnees. Elles se demarquent par leurs qualites physiques et leur interet a apprendre. Le programme vise l'apprentissage des fondements gymniques et des bases de mouvements complexes, de facon ludique et securitaire.",
      defi12: "Le programme Defi 1-2 est une initiation a la competition chez les plus jeunes. Il permet aux gymnastes de presenter les elements pratiques lors d'evaluations de la federation. L'enfant doit etre recommande pour etre admis dans ce groupe.",
      defi3456: "Le programme Defi 3-4-5-6 poursuit cette initiation a la competition et peut mener la gymnaste vers le secteur competitif. L'accent est mis sur les fondements gymniques, le developpement physique et personnel, et l'admission se fait sur recommandation."
    },
    regional: {
      releve810r: "Le groupe Releve 8-10 R permet a la gymnaste de developper ses habiletes gymniques avec plus de precision technique. Elle y developpe aussi sa force physique, sa flexibilite et sa coordination. Ce cours est base sur le programme regional, offert 2 a 3 fois par semaine, et l'enfant doit etre recommande pour y etre admis.",
      r1r2: "Les groupes R1 et R2 offrent une initiation a la competition dans un contexte de plaisir et de reussite. Le programme est base sur le competitif regional, offert 2 fois par semaine, et l'enfant doit etre recommande pour y etre admis.",
      r3: "Le groupe R3 fait partie du secteur competitif. Il est base sur le programme regional, offert 3 fois par semaine, et comprend des elements imposes par la Federation de gymnastique du Quebec. L'athlete doit etre recommande pour etre admis.",
      r4r5: "Le groupe R4-R5 fait partie du secteur competitif regional. Il est offert 3 fois par semaine et permet une plus grande flexibilite dans les elements en routine. L'athlete doit etre recommande pour etre admis."
    },
    provincial: {
      overview: "Le programme provincial comporte les categories Nintro a N8 selon differents groupes d'age. Il se base sur le programme provincial de la Federation de gymnastique du Quebec et demande de fortes qualites de force, puissance et flexibilite. C'est la porte d'entree vers le secteur national et c'est aussi dans ce secteur que le club selectionne les gymnastes pour ses groupes sport-etudes. Le club a presentement 2 groupes de soir s'entrainant 11 h 30 par semaine.",
      competitions: "Le circuit provincial implique minimalement 2 competitions par annee. Selon le classement, une 3e ou une 4e competition peut s'ajouter. La finalite des categories Nintro a N6 est la Coupe provinciale. Les athletes du secteur provincial sont aussi invites a participer a l'International Gymnix, une competition facultative mais fortement recommandee.",
      primarySportEtudes: "Le programme eleve-athlete primaire permet aux athletes de 3e a 6e annee de concilier etudes et sport avec un horaire adapte. L'admission gymnique se fait sous recommandation uniquement, avec attitude exemplaire, evaluation obligatoire, et une experience minimale en competition provinciale ou en evaluation defi provinciale 4 et plus. L'ecole partenaire est l'Ecole St-Arsene.",
      secondarySportEtudes: "Le programme sport-etudes secondaire est reconnu par le ministere de l'Education. L'eleve-athlete doit etre age de 12 ans et plus, etre reconnu par la federation et etre admis dans une ecole offrant le programme sport-etudes reconnu. Pour etre un athlete identifie, il faut minimalement etre dans la categorie N7.",
      partnerSchools: "Les ecoles partenaires mentionnees sont l'Ecole Antoine de St-Exupery, le College Reine-Marie et le College de Montreal. Le site mentionne aussi des liens utiles vers le programme sport-etudes du gouvernement du Quebec et celui de la Federation de gymnastique du Quebec."
    }
  },
  camp: {
    recreatif: "Le camp de jour recreatif s'adresse aux jeunes filles de 6 ans, ou ayant complete la maternelle, et plus, qu'elles aient deja fait ou non de la gymnastique. L'enfant y effectue un minimum de 12 h de gymnastique par semaine.",
    recreatifFees: "Les frais obligatoires sont de 240 $ par semaine pour les semaines 3 a 9, 192 $ pour les semaines 1 et 2, 15 $ pour le chandail du camp, et 18 $ d'affiliation Gymnastique Quebec pour les nouveaux membres jusqu'au 31 aout 2026. Le service de garde est facultatif : 40 $ par semaine pour les semaines 3 a 9 et 32 $ pour les semaines 1 et 2.",
    recreatifSchedule: "La journee type est la suivante : du lundi, mardi, jeudi et vendredi, activites ou gymnastique de 9 h a 12 h, diner et jeux calmes de 12 h a 13 h, puis activites ou gymnastique de 13 h a 16 h. Le mercredi, la journee de 9 h a 16 h est reservee a une sortie.",
    releve: "Le camp de jour releve s'adresse aux jeunes filles de 6 ans et plus, ou ayant complete la maternelle. Mixant activite et entrainement, l'enfant y effectue un minimum de 12 h de gymnastique par semaine. Les groupes admissibles sont R1-R2, Pre-Defi/Defi 1-2-3, Pre-regional, Releve 6-7 et Releve 8-10.",
    competitive: "Le camp d'entrainement competitif s'adresse aux gymnastes deja inscrites dans un groupe competitif du club. La gymnaste effectue 20 h de gymnastique pour le competitif de soir ou 22 h pour le sport-etudes. Les entrainements se divisent en 4 demi-journees et une journee complete le mercredi, avec un cours de danse le mercredi apres-midi. Les groupes admissibles sont Sport-Etude, N4 et +, et R3 et +."
  },
  services: {
    auditions: "Si une gymnaste vient d'un autre club en secteur Releve ou Competitif, il est possible de planifier une audition privee pour evaluer le groupe le plus adapte a son profil au sein du club. Cette rencontre est menee par l'equipe technique. Le cout de l'audition est de 40 $.",
    privateLessons: "Le club offre des cours prives avec un entraineur selon le niveau et les objectifs de la gymnaste. Les tarifs horaires sont de 40 $ en secteur recreatif, 50 $ en secteur regional et 60 $ en secteur provincial. Un frais d'affiliation de 5 $ s'applique si la gymnaste n'est pas deja affiliee a la Federation de gymnastique du Quebec.",
    birthdays: "Les fetes d'enfants comprennent 1 heure d'activites dirigees sur les appareils, animees par un entraineur qualifie, ainsi que 30 minutes de jeu libre encadre. Le tarif est de 250 $ pour 10 enfants, puis 10 $ par enfant supplementaire. Un frais d'affiliation de 5 $ s'applique pour chaque enfant non affilie a la federation.",
    rental: "Le gymnase peut etre loue en dehors des heures de cours pour une activite sportive, une pratique ou un evenement special. Le plateau comprend trampoline, barres, poutres, sol, table de saut et plus encore. Les conditions et tarifs varient selon l'activite, le nombre de participants et l'encadrement requis. La reservation est obligatoire."
  },
  team: {
    administration: "L'administration presentee sur le site comprend Emily St-Hilaire Chumbe, directrice technique; Younes Aydi, directeur administratif; Felicia Beauchamp, coordonnatrice du secteur recreatif et du camp de jour / entraineur secteur provincial et sport-etudes; Flora Baron, responsable du secteur regional / entraineur secteur provincial et sport-etudes; et Gabryelle Boudreault-Lafortune, responsable secteur releve / entraineur secteur Defi."
  }
};

function buildSystemPrompt(config) {
  const recreationalLines = [
    ...config.programs.recreational,
    `Note: ${config.recreationalNotes.uniformRule}`,
    config.recreationalNotes.uniformPrice,
    config.recreationalNotes.uniformModels,
    config.recreationalNotes.affiliationRule,
    `Frais d'affiliation: ${config.recreationalNotes.affiliationRegular}, ou ${config.recreationalNotes.affiliationToddler}`,
    config.recreationalNotes.affiliationPeriod
  ];

  return `Tu es ${config.assistantName}, l'agente virtuelle et accueillante du ${config.clubName}.
Tu reponds UNIQUEMENT en francais, avec un ton ${config.tone}.
Tu gardes tes reponses concises (3-5 phrases max) et utiles.
Tu utilises parfois des emojis pour etre sympathique, mais pas excessivement.

═══ INFORMATIONS EXACTES DU CLUB ═══

📍 ADRESSE: ${config.contact.address}
📞 TELEPHONE: ${config.contact.phone}
✉️ COURRIEL: ${config.contact.email}
🌐 SITE WEB: ${config.contact.website}
📝 INSCRIPTION EN LIGNE: ${config.contact.registrationUrl}

🕐 HEURES D'OUVERTURE:
${config.openingHours.map((line) => `- ${line}`).join('\n')}

📅 HISTORIQUE: ${config.history}

═══ PROGRAMMES ═══

🌱 RECREATIF:
${recreationalLines.map((line) => `- ${line}`).join('\n')}

🏆 COMPETITIF (sur audition):
${config.programs.competitive.map((line) => `- ${line}`).join('\n')}

☀️ CAMP DE JOUR (ete):
${config.programs.camp.map((line) => `- ${line}`).join('\n')}

═══ SERVICES ═══
${config.services.map((line) => `- ${line}`).join('\n')}

═══ MISSION & VALEURS ═══
Mission: ${config.mission}
Valeurs: ${config.values.join(', ')}.

═══ REGLES DE REPONSE ═══
- Si on te demande les tarifs precis, dis que les tarifs sont disponibles sur le site ou en appelant le ${config.contact.phone} car ils varient selon la session et le groupe d'age.
- Pour les horaires de cours specifiques, redirige vers Qidigo ou le site web.
- Ne jamais inventer de prix ou d'horaires precis que tu ne connais pas.
- Toujours proposer d'appeler ou d'ecrire pour les questions complexes.
- Si quelqu'un veut s'inscrire, donne le lien Qidigo.`;
}

// ─── SYSTÈME PROMPT ────────────────────────────────────────────────────────
const SYSTEM_PROMPT = buildSystemPrompt(FLORA_CONFIG);

// ─── STATE ─────────────────────────────────────────────────────────────────
// ⬇️  COLLE TA CLÉ OpenAI ICI — le formulaire ne s'affichera plus jamais
const PRESET_KEY = 'COLLE_TA_CLÉ_ICI';  // ex: 'sk-proj-abc123...'

let apiKey = PRESET_KEY || localStorage.getItem('flipgym_key') || '';
let conversationHistory = [];
let isTyping = false;
let demoMode = !apiKey || apiKey === 'COLLE_TA_CLÉ_ICI';
let floraLastTopic = null;

// ─── DOM REFS ──────────────────────────────────────────────────────────────
const chatFab      = document.getElementById('chatFab');
const chatWindow   = document.getElementById('chatWindow');
const chatSetup    = document.getElementById('chatSetup');
const chatMain     = document.getElementById('chatMain');
const apiKeyInput  = document.getElementById('apiKeyInput');
const startChatBtn = document.getElementById('startChatBtn');
const chatMessages = document.getElementById('chatMessages');
const chatInput    = document.getElementById('chatInput');
const sendBtn      = document.getElementById('sendBtn');
const chatClose    = document.getElementById('chatClose');
const openChatHero    = document.getElementById('openChatHero');
const openChatContact = document.getElementById('openChatContact');
const quickReplies    = document.getElementById('quickReplies');
const avatarMarkup = '<img src="flora-avatar.png" alt="Avatar de Flippy" />';
const navToggle = document.getElementById('navToggle');
const navbar = document.getElementById('navbar');
const mobileNavLinks = document.querySelectorAll('#mainNav a');
const mobileDropdownTriggers = document.querySelectorAll('#mainNav .has-dropdown > .nav-link');
const chatFabLabel = document.getElementById('chatFabLabel');
const chatFabLabelClose = document.getElementById('chatFabLabelClose');

chatFabLabel?.classList.remove('is-hidden');

// ─── NAVBAR SCROLL ─────────────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

navToggle?.addEventListener('click', () => {
  const isOpen = navbar.classList.toggle('menu-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navToggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
  if (!isOpen) {
    document.querySelectorAll('#mainNav .has-dropdown.mobile-open').forEach((item) => {
      item.classList.remove('mobile-open');
    });
  }
});

mobileDropdownTriggers.forEach((trigger) => {
  trigger.addEventListener('click', (event) => {
    if (window.innerWidth > 768) return;

    event.preventDefault();
    const item = trigger.closest('.has-dropdown');
    const isOpen = item.classList.toggle('mobile-open');

    document.querySelectorAll('#mainNav .has-dropdown.mobile-open').forEach((otherItem) => {
      if (otherItem !== item) otherItem.classList.remove('mobile-open');
    });

    trigger.setAttribute('aria-expanded', String(isOpen));
  });
});

mobileNavLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768 && link.classList.contains('dropdown-link')) {
      navbar.classList.remove('menu-open');
      navToggle?.setAttribute('aria-expanded', 'false');
      navToggle?.setAttribute('aria-label', 'Ouvrir le menu');
      document.querySelectorAll('#mainNav .has-dropdown.mobile-open').forEach((item) => {
        item.classList.remove('mobile-open');
      });
    }
  });
});

chatFabLabelClose?.addEventListener('click', (event) => {
  event.stopPropagation();
  chatFabLabel?.classList.add('is-hidden');
});

// ─── CHAT OPEN/CLOSE ───────────────────────────────────────────────────────
function openChat() {
  chatWindow.classList.add('open');
  document.querySelector('.fab-badge').style.display = 'none';
  // Si clé déjà définie ou mode démo → ouvre directement le chat
  if ((apiKey && apiKey !== 'COLLE_TA_CLÉ_ICI') || demoMode) {
    chatSetup.style.display = 'none';
    chatMain.style.display = 'flex';
    chatInput.focus();
  } else {
    chatSetup.style.display = 'flex';
    chatMain.style.display = 'none';
  }
}

function closeChat() {
  chatWindow.classList.remove('open');
}

chatFab.addEventListener('click', openChat);
chatClose.addEventListener('click', closeChat);
openChatHero?.addEventListener('click', openChat);
openChatContact?.addEventListener('click', openChat);

// Keep the chat stable while typing; it closes only with the dedicated close button.
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && chatWindow.classList.contains('open')) {
    closeChat();
  }
});

// ─── START CHAT (fallback si pas de clé en dur) ────────────────────────────
startChatBtn.addEventListener('click', () => {
  const key = apiKeyInput.value.trim();
  if (!key) {
    demoMode = true;
    apiKey = '';
    localStorage.removeItem('flipgym_key');
  } else {
    if (!key.startsWith('sk-')) {
      shake(apiKeyInput);
      showSetupError('Veuillez entrer une clé OpenAI valide (commence par sk-) ou laisser vide pour le mode démo');
      return;
    }
    demoMode = false;
    apiKey = key;
    localStorage.setItem('flipgym_key', key);
  }
  chatSetup.style.display = 'none';
  chatMain.style.display = 'flex';
  chatInput.focus();
});

// Load saved key
const savedKey = localStorage.getItem('flipgym_key');
if (savedKey) {
  apiKey = savedKey;
  apiKeyInput.value = savedKey;
  demoMode = false;
}

function showSetupError(msg) {
  let err = chatSetup.querySelector('.setup-error');
  if (!err) {
    err = document.createElement('p');
    err.className = 'setup-error';
    err.style.cssText = 'color:#f87171;font-size:0.82rem;margin-top:8px;font-family:var(--font-body);';
    startChatBtn.insertAdjacentElement('afterend', err);
  }
  err.textContent = msg;
}

function shake(el) {
  el.style.animation = 'none';
  el.offsetHeight;
  el.style.animation = 'shake 0.4s ease';
  el.addEventListener('animationend', () => el.style.animation = '', { once: true });
}
const shakeStyle = document.createElement('style');
shakeStyle.textContent = '@keyframes shake{0%,100%{transform:translateX(0)}20%,60%{transform:translateX(-6px)}40%,80%{transform:translateX(6px)}}';
document.head.appendChild(shakeStyle);

// ─── QUICK REPLIES ─────────────────────────────────────────────────────────
document.querySelectorAll('.quick-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const q = btn.dataset.q;
    // Remove quick replies
    if (quickReplies) quickReplies.remove();
    sendMessage(q);
  });
});

// ─── SEND MESSAGE ──────────────────────────────────────────────────────────
sendBtn.addEventListener('click', () => { sendFromInput(); });
chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendFromInput(); }
});

function sendFromInput() {
  const msg = chatInput.value.trim();
  if (!msg || isTyping) return;
  chatInput.value = '';
  sendMessage(msg);
}

async function sendMessage(text) {
  // Remove quick replies if still present
  const qr = document.getElementById('quickReplies');
  if (qr) qr.remove();

  // Add user message to UI
  appendMessage('user', text);

  // Add to history
  conversationHistory.push({ role: 'user', content: text });

  // Show typing indicator
  const typingId = showTyping();
  isTyping = true;
  sendBtn.disabled = true;

  try {
    if (demoMode) {
      const reply = getDemoReply(text);
      await wait(650);
      conversationHistory.push({ role: 'assistant', content: reply });
      removeTyping(typingId);
      appendMessage('agent', reply);
      return;
    }

    if (!apiKey) { openChat(); return; }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...conversationHistory
        ],
        temperature: 0.7,
        max_tokens: 400
      })
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error?.message || `Erreur API: ${response.status}`);
    }

    const data = await response.json();
    const reply = data.choices[0].message.content;

    // Add assistant reply to history
    conversationHistory.push({ role: 'assistant', content: reply });

    // Remove typing, show reply
    removeTyping(typingId);
    appendMessage('agent', reply);

  } catch (err) {
    removeTyping(typingId);
    let friendlyMsg = '❌ Une erreur s\'est produite. ';
    if (err.message.includes('401')) {
      friendlyMsg += 'Clé API invalide. <button onclick="resetKey()" style="color:var(--primary-light);background:none;border:none;cursor:pointer;font-family:var(--font);text-decoration:underline;">Changer la clé</button>';
      apiKey = '';
      localStorage.removeItem('flipgym_key');
    } else if (err.message.includes('429')) {
      friendlyMsg += 'Limite de requêtes atteinte. Veuillez réessayer dans un moment.';
    } else {
      friendlyMsg += err.message;
    }
    appendMessage('agent', friendlyMsg, true);
  } finally {
    isTyping = false;
    sendBtn.disabled = false;
    chatInput.focus();
  }
}

// ─── UI HELPERS ────────────────────────────────────────────────────────────
function appendMessage(role, content, isHTML = false) {
  const msgEl = document.createElement('div');
  msgEl.className = `msg ${role === 'user' ? 'user-msg' : 'agent-msg'}`;

  const bubbleEl = document.createElement('div');
  bubbleEl.className = 'msg-bubble';

  if (isHTML) {
    bubbleEl.innerHTML = content;
  } else {
    // Convert markdown-like **bold** and line breaks
    bubbleEl.innerHTML = formatText(content);
  }

  if (role === 'agent') {
    const avatarEl = document.createElement('div');
    avatarEl.className = 'msg-avatar';
    avatarEl.innerHTML = avatarMarkup;
    msgEl.appendChild(avatarEl);
  }

  msgEl.appendChild(bubbleEl);
  chatMessages.appendChild(msgEl);
  scrollToBottom();
}

function formatText(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br/>');
}

function showTyping() {
  const id = 'typing-' + Date.now();
  const el = document.createElement('div');
  el.className = 'msg agent-msg';
  el.id = id;
  el.innerHTML = `
    <div class="msg-avatar">${avatarMarkup}</div>
    <div class="msg-bubble typing-bubble">
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
    </div>
  `;
  chatMessages.appendChild(el);
  scrollToBottom();
  return id;
}

function removeTyping(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

function scrollToBottom() {
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function resetKey() {
  apiKey = '';
  demoMode = true;
  localStorage.removeItem('flipgym_key');
  chatSetup.style.display = 'flex';
  chatMain.style.display = 'none';
  apiKeyInput.value = '';
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const DEMO_PROGRAMS = FLORA_CONFIG.demo.agePrograms;
const FLORA_KNOWLEDGE_BASE = [
  {
    id: 'activites',
    keywords: ['activites', 'activités', 'propose', 'offrez', 'offrent', 'qu est ce que flipgym propose', 'que propose flipgym'],
    answer: () => "Nous proposons des cours pour tous les ages et niveaux, que ce soit dans le secteur recreatif, releve ou competitif. Vous pouvez consulter la description de chaque niveau dans l'onglet specifique de chaque secteur sur notre site."
  },
  {
    id: 'mission-valeurs',
    keywords: ['mission', 'valeurs', 'vision', 'a propos', 'à propos', 'histoire', 'historique', 'depuis 1977'],
    answer: () => `${FLORA_SITE_KNOWLEDGE.about.history} ${FLORA_SITE_KNOWLEDGE.about.mission}`
  },
  {
    id: 'horaires',
    keywords: ['horaire', 'horaires', 'heure', 'heures', 'ouvert', 'ouverture', 'ferme', 'fermeture'],
    answer: () => `Nos heures d'ouverture sont ${FLORA_CONFIG.openingHours[0].toLowerCase()} et ${FLORA_CONFIG.openingHours[1].toLowerCase()}. Pour les horaires de cours precis, le mieux est de consulter Qidigo ou de nous appeler au ${FLORA_CONFIG.contact.phone}.`
  },
  {
    id: 'inscription',
    keywords: ['inscription', 'inscriptions', 'inscrire', 'inscris', 'qidigo', 'register', 'comment inscrire', 'comment puis je inscrire'],
    answer: () => `Les inscriptions se font directement en ligne via la plateforme Qidigo, selon les periodes d'inscription. Vous pouvez verifier la disponibilite sur notre site. Voici le lien d'inscription : ${FLORA_CONFIG.contact.registrationUrl}`
  },
  {
    id: 'session-commencee',
    keywords: ['session commence', 'session a deja commence', 'session déjà commencée', 'inscrire en retard', 'session en cours', 'liste d attente', 'liste d\'attente'],
    answer: () => "Oui, il est possible de s'inscrire meme si la session a deja commence. Contactez-nous pour verifier s'il reste des places disponibles ou pour etre ajoute a la liste d'attente. Si une place se libere, vous beneficierez d'un rabais sur les cours que votre enfant a manques."
  },
  {
    id: 'tarifs',
    keywords: ['tarif', 'tarifs', 'prix', 'cout', 'coût', 'combien'],
    answer: () => FLORA_CONFIG.demo.pricingReply
  },
  {
    id: 'affiliation',
    keywords: ['affiliation', 'federation', 'fédération', 'fgq', 'gymnastique quebec', 'gymnastique québec'],
    answer: () => `Chaque gymnaste doit payer des frais d'affiliation a la Federation de gymnastique du Quebec une seule fois par annee. Le montant est de ${FLORA_CONFIG.recreationalNotes.affiliationRegular}, ou de ${FLORA_CONFIG.recreationalNotes.affiliationToddler}, et couvre la periode du 1er septembre 2025 au 31 aout 2026.`
  },
  {
    id: 'maillot',
    keywords: ['maillot', 'uniforme', 'justaucorps', 'quoi porter', 'porter pour mon cours', 'porter pour le cours', 'tenue', 'vetement', 'vêtement'],
    answer: () => "Le maillot flipgym est obligatoire pour tous les enfants a partir de 4-5 ans inscrits a la session. Si votre enfant ne possede pas de maillot d'entrainement, vous devrez en acheter un au cout de 45$ au bureau administratif, avant ou apres le debut du cours. Tous les modeles de maillots flipgym sont acceptes."
  },
  {
    id: 'paiement',
    keywords: ['paiement', 'payer', 'modes de paiement', 'mode de paiement', 'carte', 'debit', 'débit', 'credit', 'crédit', 'argent comptant', 'comptant'],
    answer: () => "Les frais d'inscription sont payables en ligne. Pour l'achat des maillots, des gants ou des produits flipgym, vous pouvez vous procurer ces articles au bureau administratif. Nous acceptons les cartes de debit et de credit, ainsi que l'argent comptant."
  },
  {
    id: 'age-minimum',
    keywords: ['quel age', 'quel âge', 'a partir de quel age', 'a partir de quel âge', '18 mois', 'age minimum', 'âge minimum'],
    answer: () => "Nous acceptons les enfants des l'age de 18 mois. Pour plus de details, vous pouvez consulter l'onglet Recreatif sur notre site."
  },
  {
    id: 'recreatif',
    keywords: ['recreatif', 'récréatif', 'cours', 'groupe', 'groupes'],
    answer: () => FLORA_CONFIG.demo.recreationalFallback
  },
  {
    id: 'releve-defi',
    keywords: ['pre-defi', 'pré-défi', 'pre defi', 'defi 1', 'défi 1', 'defi 2', 'défi 2', 'defi 3', 'défi 3', 'defi 4', 'défi 4', 'defi 5', 'défi 5', 'defi 6', 'défi 6', 'releve defi', 'relève défi'],
    answer: () => `Dans le secteur Releve/Defi, le groupe Pre-Defi s'adresse aux 4 a 6 ans preselectionnees et travaille les fondements gymniques. Le programme Defi 1-2 est une initiation a la competition chez les plus jeunes, avec admission sur recommandation. Le programme Defi 3-4-5-6 poursuit cette progression et peut mener la gymnaste vers le secteur competitif.`
  },
  {
    id: 'competitif',
    keywords: ['competitif', 'compétitif', 'audition', 'releve', 'relève', 'defi', 'défi', 'regional', 'régional', 'provincial', 'sport-etudes', 'sport études'],
    answer: () => FLORA_CONFIG.demo.competitiveReply
  },
  {
    id: 'competitif-autre-club',
    keywords: ['autre club', 'vient d un autre club', 'venant d un autre club', 'niveau competitif dans un autre club', 'integrer le programme competitif', 'intégrer le programme compétitif'],
    answer: () => "Pour evaluer l'integration de votre enfant au programme competitif de flipgym, merci de nous envoyer une demande d'inscription a l'adresse flipgym@flipgym.com. Veuillez preciser l'experience gymnique de votre enfant. Une audition privee sera ensuite organisee avec l'un de nos entraineurs pour evaluer ses competences et determiner son niveau."
  },
  {
    id: 'camp-recreatif-detail',
    keywords: ['camp de jour recreatif', 'camp de jour récréatif', 'camp recreatif', 'camp récréatif', 'tarifs camp', 'journee type', 'journée type', 'service de garde camp', 'chandail camp'],
    answer: () => "Le camp de jour recreatif s'adresse aux jeunes filles de 6 ans, ou ayant complete la maternelle, et plus, avec ou sans experience en gymnastique. Il comprend un minimum de 12 h de gymnastique par semaine, ainsi que des activites variees. Si vous voulez, je peux aussi vous donner seulement les tarifs ou seulement la journee type."
  },
  {
    id: 'camp-releve',
    keywords: ['camp de jour releve', 'camp de jour relève', 'camp releve', 'camp relève', 'pre-regional', 'pré-régional', 'releve 6-7', 'releve 8-10', 'relève 6-7', 'relève 8-10'],
    answer: () => FLORA_SITE_KNOWLEDGE.camp.releve
  },
  {
    id: 'camp-competitif',
    keywords: ['camp d entrainement competitif', 'camp d\'entrainement competitif', 'camp d entrainement compétitif', 'camp d\'entrainement compétitif', 'camp competitif', 'camp compétitif', 'sport-etude camp', 'sport étude camp'],
    answer: () => FLORA_SITE_KNOWLEDGE.camp.competitive
  },
  {
    id: 'camp',
    keywords: ['camp', 'ete', 'été', 'camp de jour'],
    answer: () => FLORA_CONFIG.demo.campReply
  },
  {
    id: 'camp-tarifs-detail',
    keywords: ['tarifs camp', 'prix camp', 'cout camp', 'coût camp', 'frais camp', 'service de garde camp'],
    answer: () => FLORA_SITE_KNOWLEDGE.camp.recreatifFees
  },
  {
    id: 'camp-horaire-detail',
    keywords: ['journee type camp', 'journée type camp', 'horaire camp', 'horaires camp', 'journee camp', 'journée camp', 'sortie mercredi'],
    answer: () => FLORA_SITE_KNOWLEDGE.camp.recreatifSchedule
  },
  {
    id: 'regional-detail',
    keywords: ['releve 8-10 r', 'r1-r2', 'r1', 'r2', 'r3', 'r4-r5', 'regional detail', 'programme regional'],
    answer: () => `${FLORA_SITE_KNOWLEDGE.competitive.regional.releve810r} ${FLORA_SITE_KNOWLEDGE.competitive.regional.r1r2} ${FLORA_SITE_KNOWLEDGE.competitive.regional.r3} ${FLORA_SITE_KNOWLEDGE.competitive.regional.r4r5}`
  },
  {
    id: 'provincial-detail',
    keywords: ['provincial', 'nintro', 'n7', 'n8', 'coupe provinciale', 'gymnix', 'programme provincial'],
    answer: () => `${FLORA_SITE_KNOWLEDGE.competitive.provincial.overview} ${FLORA_SITE_KNOWLEDGE.competitive.provincial.competitions}`
  },
  {
    id: 'sport-etudes-detail',
    keywords: ['sport-etudes', 'sport études', 'eleve-athlete', 'élève-athlète', 'primaire', 'secondaire', 'antoine de st-exupery', 'reine-marie', 'college de montreal', 'collège de montréal'],
    answer: () => `${FLORA_SITE_KNOWLEDGE.competitive.provincial.primarySportEtudes} ${FLORA_SITE_KNOWLEDGE.competitive.provincial.secondarySportEtudes} ${FLORA_SITE_KNOWLEDGE.competitive.provincial.partnerSchools}`
  },
  {
    id: 'services-detail',
    keywords: ['services', 'cours prive', 'cours privé', 'fete', 'fête', 'location', 'gymnase', 'auditions'],
    answer: () => `${FLORA_SITE_KNOWLEDGE.services.auditions} ${FLORA_SITE_KNOWLEDGE.services.privateLessons} ${FLORA_SITE_KNOWLEDGE.services.birthdays} ${FLORA_SITE_KNOWLEDGE.services.rental}`
  },
  {
    id: 'contact',
    keywords: ['telephone', 'téléphone', 'courriel', 'email', 'adresse', 'contact', 'appeler', 'ecrire', 'écrire'],
    answer: () => `Vous pouvez nous joindre au ${FLORA_CONFIG.contact.phone}, par courriel a ${FLORA_CONFIG.contact.email}, ou venir au club au ${FLORA_CONFIG.contact.address}.`
  },
  {
    id: 'equipe',
    keywords: ['equipe', 'équipe', 'administration', 'emily', 'younes', 'felicia', 'flora baron', 'gabryelle'],
    answer: () => FLORA_SITE_KNOWLEDGE.team.administration
  },
  {
    id: 'absence',
    keywords: ['absence', 'absent', 'manquer un cours', 'peut pas assister', 'ne peut pas assister', 'rater un cours'],
    answer: () => "Merci de nous informer par courriel ou par telephone si votre enfant ne peut pas assister a un cours."
  },
  {
    id: 'spectacle',
    keywords: ['evenement', 'événement', 'demonstration', 'démonstration', 'spectacle', 'fin d annee', 'fin d année', 'juin'],
    answer: () => "Oui, chaque annee, nous organisons un spectacle de fin d'annee en juin, ou nos membres peuvent presenter leurs progres et performances devant leurs familles et amis."
  },
  {
    id: 'salutation',
    keywords: ['bonjour', 'salut', 'hello', 'bonsoir'],
    answer: () => FLORA_CONFIG.demo.greeting
  }
];

function getAffiliationNote(ageGroup) {
  if (ageGroup === 'toddler') {
    return `L'affiliation annuelle a la Federation de gymnastique du Quebec est aussi requise au cout de ${FLORA_CONFIG.recreationalNotes.affiliationToddler}, valable du 1er septembre 2025 au 31 aout 2026.`;
  }

  return `L'affiliation annuelle a la Federation de gymnastique du Quebec est aussi requise au cout de ${FLORA_CONFIG.recreationalNotes.affiliationRegular}, valable du 1er septembre 2025 au 31 aout 2026. ${FLORA_CONFIG.recreationalNotes.uniformRule} Si votre enfant n'en a pas, vous pouvez l'acheter au bureau administratif pour 45$, et ${FLORA_CONFIG.recreationalNotes.uniformModels.toLowerCase()}`;
}

function extractAge(message) {
  const normalized = message
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  if (normalized.includes('18 mois') || normalized.includes('24 mois') || normalized.includes('36 mois') || normalized.includes('3 ans') || normalized.includes('3-4 ans') || normalized.includes('parent-enfant')) {
    return 'toddler';
  }

  const match = normalized.match(/(\d{1,2})\s*ans?/);
  if (!match) return null;

  const age = Number(match[1]);
  if (age <= 3) return 'toddler';
  if (age <= 5) return '4-5';
  if (age <= 7) return '6-7';
  if (age <= 10) return '8-10';
  if (age <= 15) return '11+';
  return '16+';
}

function normalizeForMatch(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function findKnowledgeBaseMatch(text) {
  const normalized = normalizeForMatch(text);
  let bestMatch = null;

  for (const entry of FLORA_KNOWLEDGE_BASE) {
    for (const keyword of entry.keywords) {
      const normalizedKeyword = normalizeForMatch(keyword);
      if (!normalized.includes(normalizedKeyword)) continue;

      const score = normalizedKeyword.length;
      if (!bestMatch || score > bestMatch.score) {
        bestMatch = { entry, score };
      }
    }
  }

  if (!bestMatch) return null;

  return {
    id: bestMatch.entry.id,
    answer: bestMatch.entry.answer(text)
  };
}

function getDemoReply(text) {
  const ageGroup = extractAge(text);
  const normalized = normalizeForMatch(text);

  if (ageGroup && DEMO_PROGRAMS[ageGroup]) {
    floraLastTopic = `age-${ageGroup}`;
    return `${DEMO_PROGRAMS[ageGroup].reply}\n\nA noter : ${getAffiliationNote(ageGroup)}`;
  }

  if ((normalized.includes('tarif') || normalized.includes('prix') || normalized.includes('cout') || normalized.includes('frais')) && floraLastTopic === 'camp-recreatif-detail') {
    floraLastTopic = 'camp-tarifs-detail';
    return FLORA_SITE_KNOWLEDGE.camp.recreatifFees;
  }

  if ((normalized.includes('journee') || normalized.includes('horaire') || normalized.includes('horaires') || normalized.includes('sortie')) && floraLastTopic === 'camp-recreatif-detail') {
    floraLastTopic = 'camp-horaire-detail';
    return FLORA_SITE_KNOWLEDGE.camp.recreatifSchedule;
  }

  const knowledgeMatch = findKnowledgeBaseMatch(text);
  if (knowledgeMatch) {
    floraLastTopic = knowledgeMatch.id;
    return knowledgeMatch.answer;
  }

  floraLastTopic = null;
  return FLORA_CONFIG.demo.fallback;
}

// ─── PROG CARDS ANIMATION ──────────────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, delay);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.prog-card, .service-item, .valeur-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

const statNumbers = document.querySelectorAll('.stat-number');

function animateStatNumber(el) {
  const target = Number(el.dataset.target || 0);
  const duration = 1400;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = String(Math.round(target * eased));

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      el.textContent = String(target);
    }
  }

  requestAnimationFrame(tick);
}

if (statNumbers.length) {
  const startStatsAnimation = () => {
    statNumbers.forEach((el) => {
      if (el.dataset.animated === 'true') return;
      el.dataset.animated = 'true';
      animateStatNumber(el);
    });
  };

  const statsObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      startStatsAnimation();
      obs.disconnect();
    });
  }, { threshold: 0.35 });

  const statsBand = document.querySelector('.stats-band');
  if (statsBand) statsObserver.observe(statsBand);
  window.setTimeout(startStatsAnimation, 1200);
}
