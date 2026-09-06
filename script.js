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

    const resumeId = '12uRN3o06KfQl-pOXjODH5BQ2NaW8ECm7';
    const resumeViewUrl = `https://drive.google.com/file/d/${resumeId}/view?usp=sharing`;
    const resumeDownloadUrl = `https://drive.google.com/uc?export=download&id=${resumeId}`;

    window.open(resumeViewUrl, '_blank', 'noopener,noreferrer');

    const downloadLink = document.createElement('a');
    downloadLink.href = resumeDownloadUrl;
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
