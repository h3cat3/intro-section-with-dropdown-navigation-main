const desktopDropdownBtn = document.querySelectorAll('.nav__link');
const desktopDropdownCard = document.querySelectorAll('.nav__dropdown');
const desktopDropdownArrow = document.querySelectorAll('.nav__arrow');

function toggleDropdowns(dropdownBtn, dropdownCard, dropdownArrow) {
    dropdownBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const isExpanded = btn.getAttribute('aria-expanded') !== 'true'; 
        dropdownArrow[index].src = isExpanded ? './images/icon-arrow-up.svg' : './images/icon-arrow-down.svg';
        btn.setAttribute('aria-expanded', isExpanded);
        dropdownCard[index].classList.toggle('hidden');
    });
    });
}
//open/close desktop dropdowns
toggleDropdowns(desktopDropdownBtn, desktopDropdownCard, desktopDropdownArrow); 
//mobile menu
const mobileMenuOpenBtn = document.querySelector('.nav__toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuCloseBtn = document.querySelector('.mobile-menu__close');
const mobileDropdownBtn = document.querySelectorAll('.mobile-menu__link');
const mobileDropdownCard = document.querySelectorAll('.mobile-menu__dropdown');
const mobileDropdownArrow = document.querySelectorAll('.mobile-menu__arrow');   
//open mobile menu
mobileMenuOpenBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
  mobileMenu.setAttribute('aria-hidden', 'false');
});
//close mobile menu
mobileMenuCloseBtn.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
  mobileMenu.setAttribute('aria-hidden', 'true');
});
//mobile menu open/close dropdown
toggleDropdowns(mobileDropdownBtn, mobileDropdownCard, mobileDropdownArrow);    