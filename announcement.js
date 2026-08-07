(() => {
  const announcementText = 'Automne 2026 🍁 Préinscriptions réservées aux membres : mercredi 12 août 2026 à 10 h | Inscriptions ouvertes à tous : vendredi 14 août 2026 à 10 h';

  function injectStyles() {
    if (document.getElementById('site-announcement-styles')) return;

    const style = document.createElement('style');
    style.id = 'site-announcement-styles';
    style.textContent = `
      :root {
        --site-announcement-height: 0px;
      }

      .site-announcement {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1200;
        background: #10488b;
        color: #ffffff;
        box-shadow: 0 10px 26px rgba(15, 23, 42, 0.12);
        overflow: hidden;
      }

      .site-announcement__inner {
        width: min(1200px, 100%);
        margin: 0 auto;
        padding: 10px 24px;
        overflow: hidden;
      }

      .site-announcement__track {
        display: flex;
        width: max-content;
        animation: site-announcement-marquee 72s linear infinite;
      }

      .site-announcement__message {
        flex: 0 0 auto;
        padding-right: 72px;
        font-family: "Inter", Arial, sans-serif;
        font-size: 0.92rem;
        font-weight: 700;
        line-height: 1.35;
        white-space: nowrap;
      }

      .site-announcement:hover .site-announcement__track {
        animation-play-state: paused;
      }

      @keyframes site-announcement-marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }

      .has-site-announcement .navbar {
        top: var(--site-announcement-height) !important;
      }

      @media (max-width: 720px) {
        .site-announcement__inner {
          padding: 9px 16px;
        }

        .site-announcement__track {
          animation-duration: 64s;
        }

        .site-announcement__message {
          font-size: 0.78rem;
          line-height: 1.4;
          padding-right: 48px;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .site-announcement__track {
          animation: none;
        }

        .site-announcement__message {
          min-width: 0;
          white-space: normal;
          text-align: center;
          padding-right: 0;
        }

        .site-announcement__message + .site-announcement__message {
          display: none;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function updateAnnouncementHeight(announcement) {
    const height = Math.ceil(announcement.getBoundingClientRect().height);
    document.documentElement.style.setProperty('--site-announcement-height', `${height}px`);

    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.style.top = `${height}px`;
    }
  }

  function mountAnnouncement() {
    if (document.querySelector('.site-announcement')) return;

    injectStyles();

    const announcement = document.createElement('div');
    announcement.className = 'site-announcement';
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-label', 'Annonce inscriptions Automne 2026');

    const inner = document.createElement('div');
    inner.className = 'site-announcement__inner';

    const track = document.createElement('div');
    track.className = 'site-announcement__track';

    for (let index = 0; index < 8; index += 1) {
      const message = document.createElement('span');
      message.className = 'site-announcement__message';
      message.textContent = announcementText;
      message.setAttribute('aria-hidden', index === 0 ? 'false' : 'true');
      track.appendChild(message);
    }

    inner.appendChild(track);

    announcement.appendChild(inner);
    document.body.prepend(announcement);
    document.body.classList.add('has-site-announcement');
    updateAnnouncementHeight(announcement);

    if ('ResizeObserver' in window) {
      const observer = new ResizeObserver(() => updateAnnouncementHeight(announcement));
      observer.observe(announcement);
    }

    window.addEventListener('resize', () => updateAnnouncementHeight(announcement));
    requestAnimationFrame(() => updateAnnouncementHeight(announcement));
    setTimeout(() => updateAnnouncementHeight(announcement), 250);
    document.fonts?.ready.then(() => updateAnnouncementHeight(announcement));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountAnnouncement, { once: true });
  } else {
    mountAnnouncement();
  }
})();
