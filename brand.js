
    // Mobile nav toggle
    const navToggle = document.getElementById('nav-toggle');
    const navLinksEl = document.querySelector('nav .nav-links');
    const navScrim = document.getElementById('nav-scrim');

    if (navToggle && navLinksEl) {
      const closeNav = () => {
        navToggle.classList.remove('open');
        navLinksEl.classList.remove('open');
        if (navScrim) navScrim.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      };
      const openNav = () => {
        navToggle.classList.add('open');
        navLinksEl.classList.add('open');
        if (navScrim) navScrim.classList.add('open');
        navToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      };
      navToggle.addEventListener('click', () => {
        navLinksEl.classList.contains('open') ? closeNav() : openNav();
      });
      navLinksEl.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
      if (navScrim) navScrim.addEventListener('click', closeNav);
      window.addEventListener('resize', () => { if (window.innerWidth > 900) closeNav(); });
    }

    // Scroll progress bar
    const progressBar = document.getElementById('scroll-progress');
    const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.width = (scrollTop / docHeight * 100) + '%';
      backToTop.classList.toggle('visible', scrollTop > 500);
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Scroll reveal — all animation types
    const allRevealTypes = [
      { selector: '.reveal', },
      { selector: '.reveal-left' },
      { selector: '.reveal-right' },
      { selector: '.reveal-scale' },
      { selector: '.stagger-children' },
      { selector: '.timeline-track' },
    ];

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 60);
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    allRevealTypes.forEach(({ selector }) => {
      document.querySelectorAll(selector).forEach(el => revealObserver.observe(el));
    });
    document.querySelectorAll('.faq-q').forEach(btn => {
      btn.addEventListener('click', () => {
        const answer = btn.nextElementSibling;
        const isOpen = btn.getAttribute('aria-expanded') === 'true';

        // Close all in same column
        const col = btn.closest('.faq-col');
        col.querySelectorAll('.faq-q').forEach(b => {
          b.setAttribute('aria-expanded', 'false');
          b.nextElementSibling.classList.remove('open');
        });

        // Open clicked if it was closed
        if (!isOpen) {
          btn.setAttribute('aria-expanded', 'true');
          answer.classList.add('open');
        }
      });
    });

    // Formspree async submission
    const form = document.getElementById('contact-form');
    const btn = document.getElementById('submit-btn');
    const success = document.getElementById('form-success');

    if (form && btn && success) {
      form.addEventListener('submit', async function(e) {
        e.preventDefault();
        btn.textContent = 'Sending...';
        btn.disabled = true;

        try {
          const res = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
          });

          if (res.ok) {
            form.reset();
            btn.style.display = 'none';
            success.style.display = 'block';
          } else {
            btn.textContent = 'Something went wrong — try again';
            btn.disabled = false;
          }
        } catch(err) {
          btn.textContent = 'Something went wrong — try again';
          btn.disabled = false;
        }
      });
    }
