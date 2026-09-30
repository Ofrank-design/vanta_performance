// Multi step application: About you, Goals, Routine, Schedule,
// Expectations, Coaching format, Contact details, Submit.
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('applyForm');
  if (!root) return;

  const steps = Array.from(root.querySelectorAll('.assessment-step'));
  const progressBar = document.getElementById('applyProgress');
  const nextBtn = document.getElementById('applyNext');
  const backBtn = document.getElementById('applyBack');
  let current = 0;

  function renderProgress(){
    progressBar.innerHTML = steps.map((_, i) => `<span class="${i <= current ? 'done' : ''}"></span>`).join('');
  }
  function showStep(index){
    steps.forEach((s, i) => s.classList.toggle('active', i === index));
    backBtn.style.visibility = index === 0 ? 'hidden' : 'visible';
    nextBtn.textContent = index === steps.length - 1 ? 'Submit Application' : 'Continue';
    renderProgress();
  }

  root.querySelectorAll('.option-card').forEach(card => {
    card.addEventListener('click', () => {
      card.parentElement.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
    });
  });

  function validateStep(index){
    const step = steps[index];
    let valid = true;

    // Text/select fields marked required
    step.querySelectorAll('input[data-required], textarea[data-required], select[data-required]').forEach(field => {
      const group = field.closest('.form-group');
      const filled = field.value.trim().length > 0;
      if (group) group.classList.toggle('error', !filled);
      if (!filled) valid = false;
    });

    // Option-card groups: valid if the group contains a required marker
    // and at least one card in it is selected.
    const optionGroup = step.querySelector('.option-grid');
    if (optionGroup && optionGroup.querySelector('[data-required]')) {
      const hasSelection = !!optionGroup.querySelector('.option-card.selected');
      optionGroup.style.outline = hasSelection ? 'none' : '1px solid #C77B7B';
      optionGroup.style.outlineOffset = '8px';
      if (!hasSelection) valid = false;
    }

    return valid;
  }

  nextBtn.addEventListener('click', () => {
    if (!validateStep(current)) return;
    if (current < steps.length - 1) {
      current += 1;
      showStep(current);
      root.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      root.style.display = 'none';
      document.getElementById('applySuccess').style.display = 'block';
      document.getElementById('applySuccess').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
  backBtn.addEventListener('click', () => { if (current > 0) { current -= 1; showStep(current); } });

  showStep(0);
});
