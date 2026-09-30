// Interactive performance assessment: a multi step questionnaire, an
// analyzing animation, then a generated performance profile drawn
// from the visitor's own answers.
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('assessment');
  if (!root) return;

  const steps = Array.from(root.querySelectorAll('.assessment-step'));
  const progressBar = document.getElementById('assessmentProgress');
  const nextBtn = document.getElementById('assessmentNext');
  const backBtn = document.getElementById('assessmentBack');
  let current = 0;
  const answers = {};

  function renderProgress(){
    progressBar.innerHTML = steps.map((_, i) => `<span class="${i <= current ? 'done' : ''}"></span>`).join('');
  }

  function showStep(index){
    steps.forEach((s, i) => s.classList.toggle('active', i === index));
    backBtn.style.visibility = index === 0 ? 'hidden' : 'visible';
    nextBtn.textContent = index === steps.length - 1 ? 'See My Profile' : 'Continue';
    renderProgress();
  }

  root.querySelectorAll('.option-card').forEach(card => {
    card.addEventListener('click', () => {
      const group = card.closest('.assessment-step').dataset.key;
      card.parentElement.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      answers[group] = card.dataset.value;
    });
  });

  nextBtn.addEventListener('click', () => {
    if (current < steps.length - 1) {
      current += 1;
      showStep(current);
      root.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      root.querySelectorAll('input, select').forEach(f => { if (f.name) answers[f.name] = f.value; });
      runAnalysis();
    }
  });

  backBtn.addEventListener('click', () => {
    if (current > 0) { current -= 1; showStep(current); }
  });

  showStep(0);

  function runAnalysis(){
    document.getElementById('assessmentForm').style.display = 'none';
    const analyzing = document.getElementById('assessmentAnalyzing');
    analyzing.style.display = 'block';
    const lines = analyzing.querySelectorAll('.analyzing-line');
    lines.forEach((line, i) => {
      setTimeout(() => line.classList.add('shown'), 500 + i * 550);
    });
    setTimeout(() => {
      analyzing.style.display = 'none';
      showProfile(answers);
    }, 500 + lines.length * 550 + 700);
  }

  function showProfile(a){
    const result = document.getElementById('assessmentResult');
    result.style.display = 'block';

    const profile = buildProfile(a);
    document.getElementById('profileTitle').textContent = profile.title;
    document.getElementById('profileSummary').textContent = profile.summary;
    document.getElementById('profileMetrics').innerHTML = profile.metrics.map(m => `
      <div class="profile-metric"><div class="label">${m.label}</div><div class="value">${m.value}</div></div>
    `).join('');
    document.getElementById('profileProgram').textContent = profile.recommendedProgram;
    result.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function buildProfile(a){
    const goal = a.goal || 'performance';
    const schedule = a.schedule || 'moderate';
    const stress = a.stress || 'moderate';

    const titles = {
      strength: 'The Strength Builder',
      longevity: 'The Longevity Athlete',
      performance: 'The Executive Athlete',
      recovery: 'The Recovery Focused Professional',
    };
    const programs = {
      strength: 'The Athlete',
      longevity: 'The Longevity System',
      performance: 'The Executive',
      recovery: 'The Longevity System',
    };

    return {
      title: titles[goal] || 'The Executive Athlete',
      summary: `Your schedule, stress load and goals point toward consistency over intensity, with recovery planned as carefully as the sessions themselves.`,
      metrics: [
        { label: 'Training Consistency', value: schedule === 'demanding' ? 'Constrained' : 'Workable' },
        { label: 'Recovery Capacity', value: stress === 'high' ? 'Limited, so protect it' : 'Solid foundation' },
        { label: 'Primary Focus', value: goal.charAt(0).toUpperCase() + goal.slice(1) },
        { label: 'Schedule Compatibility', value: schedule === 'demanding' ? 'Shorter, focused sessions' : 'Flexible' },
      ],
      recommendedProgram: programs[goal] || 'The Executive',
    };
  }
});
