const desktopDropdownBtn = document.querySelectorAll('.nav__link-btn');
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
function closeAllDropdowns(dropdownBtn, dropdownCard, dropdownArrow) {
  dropdownBtn.forEach((btn,index) => {
    dropdownArrow[index].src = './images/icon-arrow-down.svg';
    btn.setAttribute('aria-expanded', 'false');
    dropdownCard[index].classList.add('hidden');
  })
}
//open/close desktop dropdowns
toggleDropdowns(desktopDropdownBtn, desktopDropdownCard, desktopDropdownArrow); 
//close descktop dropdowns
document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav__item--has-dropdown')){
    closeAllDropdowns(desktopDropdownBtn, desktopDropdownCard, desktopDropdownArrow); 
  }
})
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeAllDropdowns(desktopDropdownBtn, desktopDropdownCard, desktopDropdownArrow);
})
//mobile menu
const mobileMenuOpenBtn = document.querySelector('.nav__toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuCloseBtn = document.querySelector('.mobile-menu__close');
const mobileDropdownBtn = document.querySelectorAll('.mobile-menu__link-btn');
const mobileDropdownCard = document.querySelectorAll('.mobile-menu__dropdown');
const mobileDropdownArrow = document.querySelectorAll('.mobile-menu__arrow');   
//open mobile menu
mobileMenuOpenBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
  mobileMenu.setAttribute('aria-hidden', 'false');
  mobileMenuOpenBtn.setAttribute('aria-expanded', 'true');
  mobileMenuOpenBtn.setAttribute('aria-label', 'close menu');
});
//close mobile menu
mobileMenuCloseBtn.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
  mobileMenu.setAttribute('aria-hidden', 'true');
  mobileMenuOpenBtn.setAttribute('aria-expanded', 'false');
  mobileMenuOpenBtn.setAttribute('aria-label', 'open menu');
});
//mobile menu open/close dropdown
toggleDropdowns(mobileDropdownBtn, mobileDropdownCard, mobileDropdownArrow);    

//close dropdown when click outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.mobile-menu__item--has-dropdown')){
    closeAllDropdowns(mobileDropdownBtn, mobileDropdownCard, mobileDropdownArrow);
  }
})