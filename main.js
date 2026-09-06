const dropdownBtn = document.querySelectorAll('.nav__item--has-dropdown');
const dropdownCard = document.querySelectorAll('.nav__dropdown');
const dropdownArrow = document.querySelectorAll('.nav__arrow');

dropdownBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const isExpanded = btn.getAttribute('aria-expanded') !== 'true'; 
    dropdownArrow[index].src = isExpanded ? './images/icon-arrow-up.svg' : './images/icon-arrow-down.svg';
    btn.setAttribute('aria-expanded', isExpanded);
    dropdownCard[index].classList.toggle('hidden');
  });
});
