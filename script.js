/* ==========================================================================
   Portfolio interactivity
   Organized into small, reusable functions — no external dependencies.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  setFooterYear();
  initMobileMenu();
  initScrollSpy();
  initBackToTop();
  initRevealAnimations();
  loadProjects().then(() => {
    initSkillFilters();
  });
});

/* -------------------------------------------------------------------- */
/* Footer year                                                          */
/* -------------------------------------------------------------------- */
function setFooterYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

/* -------------------------------------------------------------------- */
/* Mobile hamburger menu                                                */
/* -------------------------------------------------------------------- */
function initMobileMenu() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  links.querySelectorAll('[data-nav]').forEach((link) => {
    link.addEventListener('click', () => {
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* -------------------------------------------------------------------- */
/* Scroll-spy: highlight active nav link for the section in view        */
/* -------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav__link[data-nav]');
  if (!sections.length || !navLinks.length) return;

  const linkFor = (id) => document.querySelector(`.nav__link[href="#${id}"]`);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((l) => l.classList.remove('is-active'));
          const active = linkFor(entry.target.id);
          if (active) active.classList.add('is-active');
        }
      });
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

/* -------------------------------------------------------------------- */
/* Back-to-top floating button                                          */
/* -------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('is-visible', window.scrollY > 480);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* -------------------------------------------------------------------- */
/* Scroll-triggered reveal animation                                    */
/* -------------------------------------------------------------------- */
function initRevealAnimations() {
  const targets = document.querySelectorAll(
    '.section__inner > *, .stat, .skill-cat, .cert-card, .timeline__item'
  );
  targets.forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  targets.forEach((el) => observer.observe(el));
}

/* -------------------------------------------------------------------- */
/* Projects: load from projects.json and render cards                   */
/* -------------------------------------------------------------------- */
async function loadProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  try {
    const res = await fetch('projects.json');
    const projects = await res.json();
    grid.innerHTML = projects.map(projectCardTemplate).join('');
  } catch (err) {
    grid.innerHTML = '<p style="color:var(--muted)">Could not load projects.json — check the file exists next to index.html.</p>';
    console.error('Failed to load projects.json', err);
  }
}

function projectCardTemplate(project) {
  const badges = project.tools.map((t) => `<span class="badge">${escapeHTML(t)}</span>`).join('');
  const insights = project.insights.map((i) => `<li>${escapeHTML(i)}</li>`).join('');
  const demoBtn = project.demo
    ? `<a href="${project.demo}" target="_blank" rel="noopener" class="project-card__link project-card__link--ghost">Live Demo</a>`
    : '';

  return `
    <article class="project-card" data-tags="${project.tags.join(',')}">
      <div class="project-card__image">
        <img src="${project.image}" alt="${escapeHTML(project.title)} screenshot" loading="lazy">
      </div>
      <div class="project-card__body">
        <h3 class="project-card__title">${escapeHTML(project.title)}</h3>
        <p class="project-card__desc">${escapeHTML(project.description)}</p>
        <p class="project-card__problem"><strong>Problem:</strong> ${escapeHTML(project.problem)}</p>
        <div class="badge-row">${badges}</div>
        <ul class="project-card__insights">${insights}</ul>
        <div class="project-card__actions">
          <a href="${project.github}" target="_blank" rel="noopener" class="project-card__link">GitHub</a>
          ${demoBtn}
        </div>
      </div>
    </article>
  `;
}

function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/* -------------------------------------------------------------------- */
/* Skill filter buttons — multi-select, filters project grid            */
/* -------------------------------------------------------------------- */
function initSkillFilters() {
  const buttons = document.querySelectorAll('.skill-btn');
  const cards = document.querySelectorAll('.project-card');
  if (!buttons.length || !cards.length) return;

  const activeFilters = new Set();

  function applyFilters() {
    cards.forEach((card) => {
      const tags = (card.dataset.tags || '').split(',');
      const matches = activeFilters.size === 0 || tags.some((t) => activeFilters.has(t));
      card.classList.toggle('is-hidden', !matches);
    });
  }

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      const nowActive = !btn.classList.contains('is-active');
      btn.classList.toggle('is-active', nowActive);
      btn.setAttribute('aria-pressed', String(nowActive));

      if (nowActive) activeFilters.add(filter);
      else activeFilters.delete(filter);

      applyFilters();
    });
  });
}
