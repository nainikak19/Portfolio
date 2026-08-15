const menuButton = document.querySelector('#menuButton');
const mobileMenu = document.querySelector('#mobileMenu');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  mobileMenu.classList.toggle('hidden', open);
});

document.querySelectorAll('#mobileMenu a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('[data-resume-link]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const resumeUrl = link.href;
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');

    const downloadLink = document.createElement('a');
    downloadLink.href = resumeUrl;
    downloadLink.download = 'Nainika-Kaware-Resume.pdf';
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    downloadLink.remove();
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
  observer.observe(element);
});
