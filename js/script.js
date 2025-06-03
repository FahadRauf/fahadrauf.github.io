 const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target); // Optional: animate once
      }
    });
  });

  document.querySelectorAll(".fade-target").forEach((el) => {
    observer.observe(el);
  });
