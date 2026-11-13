(() => {
  // Montants en dollars canadiens : modifier uniquement ces valeurs pour mettre
  // à jour la jauge, les chiffres, le pourcentage et les mentions de l’objectif.
  const collecte = {
    montantAmasse: 5058,
    objectif: 120000,
    // Date réelle de mise à jour des montants (AAAA-MM-JJ), jamais la date de visite.
    derniereMiseAJour: '2026-11-05'
  };

  const integrations = {
    lienDonSportsQuebec: 'https://www.jedonneenligne.org/sportsquebec/GYMP2661/',
    // Photos authentiques autorisées uniquement. Aucun chargement si le chemin est vide.
    photosInitiatives: {
      fripgym: { chemin: '', texteAlternatif: 'La Fripgym, activité communautaire du Club Flipgym', credit: '' },
      chocolats: { chemin: '', texteAlternatif: 'La vente de chocolats au profit du nouveau sol de Flipgym', credit: '' }
    }
  };

  const money = new Intl.NumberFormat('fr-CA', {
    style: 'currency', currency: 'CAD', minimumFractionDigits: 0, maximumFractionDigits: 2
  });
  const percent = new Intl.NumberFormat('fr-CA', { maximumFractionDigits: 1 });
  const validAmount = (value) => typeof value === 'number' && Number.isFinite(value) && value >= 0;
  const hasRaised = validAmount(collecte.montantAmasse);
  const hasGoal = validAmount(collecte.objectif) && collecte.objectif > 0;
  const raised = document.getElementById('fundraisingRaised');
  const heroRaised = document.getElementById('heroFundraisingRaised');
  const goal = document.getElementById('fundraisingGoal');
  const remaining = document.getElementById('fundraisingRemaining');
  const meter = document.getElementById('fundraisingMeter');
  const status = document.getElementById('fundraisingStatus');
  const percentageText = document.getElementById('fundraisingPercent');
  const ring = document.getElementById('gaugeFill');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (raised && goal && remaining && meter && status && percentageText && ring) {
    raised.textContent = hasRaised ? money.format(collecte.montantAmasse) : 'À confirmer';
    if (heroRaised) {
      heroRaised.textContent = raised.textContent;
      heroRaised.parentElement.hidden = !hasRaised || !hasGoal;
    }
    goal.textContent = hasGoal ? money.format(collecte.objectif) : 'À confirmer';
    document.querySelectorAll('[data-funding-goal]').forEach((element) => {
      element.textContent = goal.textContent;
    });
    if (hasRaised && hasGoal) {
      // Les montants sont arrondis au cent pour éviter les écarts flottants.
      const raisedCents = Math.round(collecte.montantAmasse * 100);
      const goalCents = Math.round(collecte.objectif * 100);
      const percentage = (raisedCents / goalCents) * 100;
      const percentageLabel = percent.format(percentage);
      const visualPercentage = Math.min(100, percentage);
      remaining.textContent = money.format(Math.max(0, goalCents - raisedCents) / 100);
      percentageText.textContent = `${percentageLabel} % de l’objectif`;
      ring.setAttribute('stroke-dashoffset', String(100 - visualPercentage));
      meter.setAttribute('role', 'progressbar');
      meter.setAttribute('aria-valuemin', '0');
      meter.setAttribute('aria-valuemax', String(collecte.objectif));
      meter.setAttribute('aria-valuenow', String(Math.min(collecte.montantAmasse, collecte.objectif)));
      meter.setAttribute('aria-valuetext', `${raised.textContent} amassés sur ${goal.textContent}, soit ${percentageLabel} %`);
      status.textContent = percentage >= 100
        ? 'Objectif atteint. Merci de faire partie du mouvement !'
        : 'Ensemble, donnons vie à ce projet.';
      if (!reducedMotion.matches) ring.classList.add('is-animating');
    } else {
      remaining.textContent = 'À confirmer';
      percentageText.textContent = 'Progression à confirmer';
      ring.setAttribute('stroke-dashoffset', '100');
      meter.setAttribute('role', 'img');
      meter.setAttribute('aria-label', 'Progression de la collecte : montants à confirmer');
      ['aria-valuemin', 'aria-valuemax', 'aria-valuenow', 'aria-valuetext'].forEach((attribute) => meter.removeAttribute(attribute));
      status.textContent = 'Les montants seront affichés dès leur confirmation.';
    }
  }

  const updated = document.getElementById('fundraisingUpdated');
  if (updated) {
    // Construction locale à midi : la date reste identique dans tous les fuseaux.
    const isoDate = collecte.derniereMiseAJour;
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate);
    const date = match ? new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]), 12) : null;
    const validDate = date && date.getFullYear() === Number(match[1]) && date.getMonth() === Number(match[2]) - 1 && date.getDate() === Number(match[3]);
    if (validDate) {
      updated.dateTime = isoDate;
      updated.textContent = new Intl.DateTimeFormat('fr-CA', { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
    } else {
      updated.removeAttribute('datetime');
      updated.textContent = 'Date à confirmer';
    }
  }

  const photo = document.getElementById('floorOfficialPhoto');
  const diagram = document.getElementById('floorDiagram');
  const caption = document.getElementById('floorImageCaption');
  if (photo && diagram && caption) {
    const showFloorDiagram = () => {
      photo.hidden = true;
      diagram.hidden = false;
      diagram.style.removeProperty('display');
      caption.textContent = 'Illustration schématique du sol visé.';
    };
    photo.addEventListener('error', showFloorDiagram);
    if (photo.complete && !photo.naturalWidth) showFloorDiagram();
  }

  if (integrations.lienDonSportsQuebec.trim()) {
    // Coller l’URL HTTPS exacte de la campagne validée par le Club.
    let officialUrl;
    try {
      const candidate = new URL(integrations.lienDonSportsQuebec.trim());
      if (candidate.protocol === 'https:' && !candidate.username && !candidate.password) officialUrl = candidate.href;
    } catch { /* Sans URL valide, le contact du Club est conservé. */ }
    if (officialUrl) {
      document.querySelectorAll('[data-donation-link]').forEach((link) => {
        link.href = officialUrl;
        link.target = '_blank';
        link.rel = 'noopener';
        link.querySelector('[data-donation-label]').textContent = 'Faire un don';
        link.setAttribute('aria-label', 'Faire un don via SPORTSQUÉBEC (nouvel onglet)');
      });

      const formStatus = document.getElementById('donationFormStatus');
      if (formStatus) {
        const faqLink = document.createElement('a');
        faqLink.href = officialUrl;
        faqLink.target = '_blank';
        faqLink.rel = 'noopener';
        faqLink.textContent = 'Accéder au formulaire officiel SPORTSQUÉBEC';
        faqLink.setAttribute('aria-label', 'Accéder au formulaire officiel SPORTSQUÉBEC (nouvel onglet)');
        formStatus.replaceChildren(faqLink, '.');
      }
    }
  }

  Object.entries(integrations.photosInitiatives).forEach(([key, settings]) => {
    if (!settings.chemin.trim()) return;
    const image = document.getElementById(`${key}Photo`);
    const credit = document.getElementById(`${key}Credit`);
    if (!image || !credit) return;
    image.addEventListener('load', () => {
      image.hidden = false;
      credit.textContent = settings.credit.trim();
      credit.hidden = !settings.credit.trim();
    });
    image.addEventListener('error', () => {
      image.hidden = true;
      credit.hidden = true;
    });
    image.alt = settings.texteAlternatif;
    image.src = settings.chemin.trim();
  });

  const shareUrl = document.querySelector('link[rel="canonical"]')?.href;
  const shareStatus = document.getElementById('campaignShareStatus');
  const copyLink = document.getElementById('copyCampaignLink');
  const manualLink = document.getElementById('campaignShareUrl');
  const shareApps = document.getElementById('shareOtherApps');

  if (shareUrl && shareStatus && copyLink && manualLink) {
    manualLink.value = shareUrl;
    copyLink.parentElement.hidden = false;
    copyLink.addEventListener('click', async () => {
      shareStatus.textContent = '';
      try {
        await navigator.clipboard.writeText(shareUrl);
        manualLink.parentElement.hidden = true;
        shareStatus.textContent = 'Lien copié.';
      } catch {
        manualLink.parentElement.hidden = false;
        manualLink.focus();
        manualLink.select();
        shareStatus.textContent = 'Vous pouvez copier le lien sélectionné.';
      }
    });
  }

  if (shareUrl && shareStatus && shareApps && typeof navigator.share === 'function') {
    shareApps.parentElement.hidden = false;
    shareApps.addEventListener('click', async () => {
      shareStatus.textContent = '';
      try {
        await navigator.share({ title: 'Un nouveau sol pour le Club Flipgym', url: shareUrl });
      } catch (error) {
        if (error.name !== 'AbortError') {
          shareStatus.textContent = 'Vous pouvez utiliser une autre option de partage.';
        }
      }
    });
  }

  // Accordéon natif : Entrée/Espace, état ouvert/fermé annoncé par le navigateur.
  // Le groupe name fonctionne aussi sans JavaScript dans les navigateurs récents.
  const faqItems = [...document.querySelectorAll('.campaign-faq details')];
  faqItems.forEach((item) => {
    item.open = false;
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      faqItems.forEach((other) => { if (other !== item) other.open = false; });
    });
  });

  // Le contenu reste visible sans JavaScript et sans IntersectionObserver.
  if (!reducedMotion.matches && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('[data-reveal]').forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight) return;
      element.classList.add('reveal-ready');
      observer.observe(element);
    });
    reducedMotion.addEventListener('change', (event) => {
      if (!event.matches) return;
      document.querySelectorAll('.reveal-ready').forEach((element) => element.classList.add('is-visible'));
      observer.disconnect();
    });
  }
})();
