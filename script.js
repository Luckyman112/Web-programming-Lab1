const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.getElementById('navMenu');
const slides = [...document.querySelectorAll('.slide')];
const modal = document.getElementById('ticketModal');
const modalClose = document.querySelector('.modal-close');
const modalTriggers = document.querySelectorAll('.ticket-trigger');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, position) => {
    slide.classList.toggle('active', position === index);
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 4300);

function closeModal() {
  modal?.classList.remove('open');
  modal?.setAttribute('aria-hidden', 'true');
}

function openModal() {
  modal?.classList.add('open');
  modal?.setAttribute('aria-hidden', 'false');
}

modalTriggers.forEach((button) => {
  button.addEventListener('click', openModal);
});

modalClose?.addEventListener('click', closeModal);

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal?.classList.contains('open')) {
    closeModal();
  }
});

document.querySelector('.contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Thanks for reaching out! We will get back to you soon.');
  event.currentTarget.reset();
});

document.querySelector('.ticket-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Your tickets have been reserved successfully.');
  closeModal();
  event.currentTarget.reset();
});
