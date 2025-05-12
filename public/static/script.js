
// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById('mobileMenuButton');
  const navMenu = document.getElementById('navMenu');
  
  if (mobileMenuButton && navMenu) {
    mobileMenuButton.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }
  
  // Update copyright year
  const currentYearElements = document.querySelectorAll('#currentYear');
  const currentYear = new Date().getFullYear();
  
  currentYearElements.forEach(function(element) {
    element.textContent = currentYear;
  });
  
  // Form submission handling
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('emailNewsletter').value;
      alert(`Obrigado por se inscrever! Enviaremos nossa newsletter para ${email}`);
      newsletterForm.reset();
    });
  }
  
  const associationForm = document.getElementById('associationForm');
  if (associationForm) {
    associationForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Sua solicitação de associação foi enviada com sucesso! Entraremos em contato em breve.');
      associationForm.reset();
    });
  }
  
  // Add active class to current nav item based on page URL
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '/' && href === 'index.html')) {
      link.classList.add('active');
    } else if (href.includes('#') && currentPath === '/') {
      // Don't remove active class for anchor links on home page
    } else {
      link.classList.remove('active');
    }
  });
});

// Responsive navigation menu styles (add this to make mobile menu work)
document.head.insertAdjacentHTML('beforeend', `
  <style>
    @media (max-width: 767px) {
      .nav-menu {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: white;
        flex-direction: column;
        padding: 1rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        display: none;
        z-index: 100;
      }
      
      .nav-menu.active {
        display: flex;
      }
    }
  </style>
`);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    // Only prevent default for actual anchor links (not "#" placeholders)
    if (this.getAttribute('href').length > 1) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Calculate header height for offset
        const header = document.querySelector('.header');
        const headerHeight = header ? header.offsetHeight : 0;
        
        window.scrollTo({
          top: targetElement.offsetTop - headerHeight,
          behavior: 'smooth'
        });
        
        // Update URL but don't scroll again
        history.pushState(null, null, targetId);
      }
    }
  });
});
