'use strcit';

const rotators = document.querySelectorAll('.rotator');
rotators.forEach(rotator => {
  const rotatorCases = rotator.querySelectorAll('.rotator__case');
  let currentCase = 0;
  setInterval(() => {
    rotatorCases[currentCase].classList.remove('rotator__case_active');
    currentCase = currentCase === rotatorCases.length - 1 ? 0 : currentCase + 1;
    rotatorCases[currentCase].classList.add('rotator__case_active');
  }, 1000);
});