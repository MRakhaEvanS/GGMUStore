
  document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link-jenis-custom');

    navLinks.forEach(function(navLink) {
      navLink.addEventListener('click', function(event) {
        event.preventDefault(); 

        navLinks.forEach(function(link) {
          link.classList.remove('active');
        });

        this.classList.add('active');

        const targetPage = this.getAttribute('href');
        window.location.href = targetPage;
      });

      if (window.location.pathname.includes(navLink.getAttribute('href'))) {
        navLink.classList.add('active');
      }
    });
  });

