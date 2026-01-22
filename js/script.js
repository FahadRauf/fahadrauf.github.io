// ===========================================
// NAVIGATION FUNCTIONALITY
// ===========================================

const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  }
});

// ===========================================
// SMOOTH SCROLLING
// ===========================================

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ===========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===========================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections and cards
const animateElements = document.querySelectorAll(
  '.about-content, .about-badge, .about-heading, .about-text, .skills-grid, ' +
  '.project-card, .section-header, .contact-content, .contact-intro, .contact-item, .social-link'
);

animateElements.forEach(el => {
  el.style.opacity = '0';
  observer.observe(el);
});

// ===========================================
// PARALLAX EFFECT FOR HERO SECTION
// ===========================================

const heroSection = document.querySelector('.hero-section');
const gradientOrbs = document.querySelectorAll('.gradient-orb');

window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const rate = scrolled * 0.5;
  
  if (heroSection) {
    gradientOrbs.forEach((orb, index) => {
      const speed = (index + 1) * 0.3;
      orb.style.transform = `translateY(${rate * speed}px)`;
    });
  }
});

// ===========================================
// ACTIVE NAVIGATION LINK HIGHLIGHTING
// ===========================================

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

// ===========================================
// PROJECT CARD HOVER EFFECTS
// ===========================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
  });
});

// ===========================================
// HERO SECTION ENTRANCE ANIMATION
// ===========================================

const heroContent = document.querySelector('.hero-content');
if (heroContent) {
  heroContent.style.opacity = '0';
  heroContent.style.transform = 'translateY(30px)';
  
  setTimeout(() => {
    heroContent.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    heroContent.style.opacity = '1';
    heroContent.style.transform = 'translateY(0)';
  }, 100);
}

// ===========================================
// SCROLL TO TOP BUTTON (Optional)
// ===========================================

// Create scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #10b981 0%, #22c55e 100%);
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 999;
  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.4);
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.style.opacity = '1';
    scrollTopBtn.style.visibility = 'visible';
  } else {
    scrollTopBtn.style.opacity = '0';
    scrollTopBtn.style.visibility = 'hidden';
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

scrollTopBtn.addEventListener('mouseenter', () => {
  scrollTopBtn.style.transform = 'scale(1.1)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
  scrollTopBtn.style.transform = 'scale(1)';
});

// ===========================================
// PERFORMANCE OPTIMIZATION
// ===========================================

// Throttle scroll events
let ticking = false;

function updateOnScroll() {
  // All scroll-based updates go here
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(updateOnScroll);
    ticking = true;
  }
});

// ===========================================
// LOADING ANIMATION & SCROLL TO TOP ON LOAD
// ===========================================

// Ensure page starts at top on load
window.addEventListener('load', () => {
  // Scroll to top immediately
  window.scrollTo(0, 0);
  
  // Remove any hash from URL without scrolling
  if (window.location.hash) {
    history.replaceState(null, null, ' ');
  }
  
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease-in';
    document.body.style.opacity = '1';
  }, 100);
});

// Also ensure scroll to top on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);
});