document.addEventListener('DOMContentLoaded', () => {
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('in-view'); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in-view'));
  }

  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      item.closest('.faq-list').querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-answer').style.maxHeight = null;
      });
      if (!isOpen) { item.classList.add('open'); answer.style.maxHeight = answer.scrollHeight + 'px'; }
    });
  });

  const slider = document.querySelector('.testimonial-slider');
  if (slider) {
    const slides = slider.querySelectorAll('.testimonial-slide');
    const dotsWrap = slider.querySelector('.slider-dots');
    let current = 0, timer;
    function goTo(index){
      slides[current].classList.remove('active');
      dotsWrap.children[current].classList.remove('active');
      current = (index + slides.length) % slides.length;
      slides[current].classList.add('active');
      dotsWrap.children[current].classList.add('active');
    }
    if (dotsWrap) dotsWrap.querySelectorAll('.slider-dot').forEach((dot, i) => dot.addEventListener('click', () => { goTo(i); reset(); }));
    function reset(){ clearInterval(timer); timer = setInterval(() => goTo(current + 1), 6500); }
    reset();
  }
});

function showToast(message){
  let container = document.querySelector('.toast-container');
  if (!container) { container = document.createElement('div'); container.className = 'toast-container'; document.body.appendChild(container); }
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.transition = 'opacity .3s ease, transform .3s ease';
    toast.style.opacity = '0'; toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
