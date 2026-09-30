function validateForm(form){
  let valid = true;
  form.querySelectorAll('[data-required]').forEach(field => {
    const group = field.closest('.form-group');
    const value = field.value.trim();
    let fieldValid = value.length > 0;
    if (field.type === 'email' && value) fieldValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    if (field.type === 'tel' && value) fieldValid = value.replace(/[^0-9]/g, '').length >= 7;
    if (group) group.classList.toggle('error', !fieldValid);
    if (!fieldValid) valid = false;
  });
  return valid;
}

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (validateForm(contactForm)) {
        contactForm.style.display = 'none';
        document.getElementById('contactSuccess').style.display = 'block';
      }
    });
  }

  document.querySelectorAll('.letter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) {
        showToast("You're on the list for The Performance Letter.");
        form.reset();
      } else if (input) {
        input.style.borderColor = '#C77B7B';
        setTimeout(() => input.style.borderColor = '', 2000);
      }
    });
  });

  document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(field => {
    field.addEventListener('input', () => {
      const group = field.closest('.form-group');
      if (group) group.classList.remove('error');
    });
  });
});
