/* Renders the content in data.js into the page templates. */

function renderPrograms(containerId, opts = {}){
  const el = document.getElementById(containerId);
  if (!el || typeof PROGRAMS === 'undefined') return;
  const list = opts.limit ? PROGRAMS.slice(0, opts.limit) : PROGRAMS;
  el.innerHTML = list.map(p => programCard(p, opts.light)).join('');
}

function programCard(p, light = false){
  return `
    <div class="program-card reveal${light ? ' program-card-light' : ''}">
      <a class="frame" href="program-detail.html?slug=${p.slug}" tabindex="-1" aria-hidden="true">${renderRegistryImage(p.image)}</a>
      <div class="program-body">
        <div class="weeks">${p.weeks}</div>
        <h3>${p.name}</h3>
        <p class="tagline">${p.tagline}</p>
        <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <a class="link-line" href="program-detail.html?slug=${p.slug}">View Program →</a>
      </div>
    </div>`;
}

function renderMembership(containerId){
  const el = document.getElementById(containerId);
  if (!el || typeof MEMBERSHIP_TIERS === 'undefined') return;
  el.innerHTML = MEMBERSHIP_TIERS.map(t => `
    <div class="membership-card ${t.featured ? 'featured' : ''}">
      <div class="tier">${t.tier}</div>
      <h3>${t.tier}</h3>
      <p>${t.description}</p>
      <ul>${t.features.map(f => `<li>${f}</li>`).join('')}</ul>
      <a href="apply.html" class="btn ${t.featured ? 'btn-primary' : 'btn-outline'}">Request Details</a>
    </div>
  `).join('');
}

function renderTestimonials(containerId, dotsId){
  const el = document.getElementById(containerId);
  const dotsEl = document.getElementById(dotsId);
  if (!el || typeof TESTIMONIALS === 'undefined') return;
  el.innerHTML = TESTIMONIALS.map((t, i) => `
    <div class="testimonial-slide ${i === 0 ? 'active' : ''}">
      <p class="testimonial-quote">&ldquo;${t.quote}&rdquo;</p>
      <div class="testimonial-name">${t.name}</div>
      <div class="testimonial-role">${t.role}</div>
    </div>
  `).join('');
  if (dotsEl) dotsEl.innerHTML = TESTIMONIALS.map((_, i) => `<div class="slider-dot ${i === 0 ? 'active' : ''}"></div>`).join('');
}

function renderTeam(containerId, opts = {}){
  const el = document.getElementById(containerId);
  if (!el || typeof TEAM === 'undefined') return;
  const list = opts.limit ? TEAM.slice(0, opts.limit) : TEAM;
  el.innerHTML = list.map(m => `
    <div class="team-card reveal">
      <div class="frame">${renderRegistryImage(m.image)}</div>
      <h3>${m.name}</h3>
      <div class="role">${m.role}</div>
      <p>${m.bio}</p>
    </div>
  `).join('');
}

function journalCard(a, light = false){
  return `
    <div class="journal-card reveal${light ? ' journal-card-light' : ''}">
      <a class="frame" href="journal-article.html?slug=${a.slug}" tabindex="-1" aria-hidden="true">${renderRegistryImage(a.image)}</a>
      <div class="journal-meta"><span>${a.category}</span><span class="date">${a.date}</span></div>
      <h3><a href="journal-article.html?slug=${a.slug}">${a.title}</a></h3>
      <p>${a.excerpt}</p>
      <a class="link-line" href="journal-article.html?slug=${a.slug}">Read →</a>
    </div>`;
}

function renderJournal(containerId, opts = {}){
  const el = document.getElementById(containerId);
  if (!el || typeof JOURNAL === 'undefined') return;
  const list = opts.limit ? JOURNAL.slice(0, opts.limit) : JOURNAL;
  el.innerHTML = list.map(a => journalCard(a, opts.light)).join('');
}

function renderFaqs(containerId){
  const el = document.getElementById(containerId);
  if (!el || typeof FAQS === 'undefined') return;
  el.innerHTML = FAQS.map(f => `
    <div class="faq-item">
      <div class="faq-question"><h3>${f.q}</h3><span class="faq-icon"></span></div>
      <div class="faq-answer"><div class="faq-answer-inner">${f.a}</div></div>
    </div>
  `).join('');
}

function getQueryParam(name){
  return new URLSearchParams(window.location.search).get(name);
}
