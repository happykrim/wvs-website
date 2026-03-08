/* =============================================================
   Wide View Solutions – Main JavaScript
   ============================================================= */

(function () {
  'use strict';

  /* ---- Helpers ---- */
  function $(selector, parent) {
    return (parent || document).querySelector(selector);
  }

  function $$(selector, parent) {
    return Array.from((parent || document).querySelectorAll(selector));
  }

  /* ============================================================
     NAVIGATION: scroll shadow + mobile toggle
     ============================================================ */
  var header = $('#site-header');
  var navToggle = $('#nav-toggle');
  var navMenu = $('#nav-menu');

  // Add shadow when scrolled
  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile toggle
  navToggle.addEventListener('click', function () {
    var isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close menu on nav link click
  $$('.nav__link', navMenu).forEach(function (link) {
    link.addEventListener('click', function () {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close menu on outside click
  document.addEventListener('click', function (e) {
    if (
      navMenu.classList.contains('is-open') &&
      !navMenu.contains(e.target) &&
      !navToggle.contains(e.target)
    ) {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  /* ============================================================
     FOOTER YEAR
     ============================================================ */
  var yearEl = $('#footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ============================================================
     COUNTER ANIMATION (hero stats)
     ============================================================ */
  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-target'), 10);
    var duration = 1800;
    var start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      // Ease out cubic
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    }

    requestAnimationFrame(step);
  }

  /* ============================================================
     INTERSECTION OBSERVER – fade-in + counter trigger
     ============================================================ */
  var observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  };

  // Fade-in observer
  var fadeObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Mark elements for fade-in
  var fadeTargets = $$(
    '.card--service, .process__step, .niche-tag, .value, .section-header'
  );
  fadeTargets.forEach(function (el) {
    el.classList.add('fade-in');
    fadeObserver.observe(el);
  });

  // Counter observer
  var counterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        $$('[data-target]', entry.target).forEach(function (counter) {
          animateCounter(counter);
        });
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  var statsSection = $('.hero__stats');
  if (statsSection) {
    counterObserver.observe(statsSection);
  }

  /* ============================================================
     CONTACT FORM VALIDATION
     ============================================================ */
  var form = $('#contact-form');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (validateForm()) {
        submitForm();
      }
    });

    // Live validation on blur
    $$('input[required], textarea[required]', form).forEach(function (field) {
      field.addEventListener('blur', function () {
        validateField(field);
      });
      field.addEventListener('input', function () {
        if (field.classList.contains('is-invalid')) {
          validateField(field);
        }
      });
    });
  }

  function validateField(field) {
    var errorEl = $('#' + field.id + '-error');
    var valid = true;
    var message = '';

    if (field.required && !field.value.trim()) {
      valid = false;
      message = 'This field is required.';
    } else if (field.type === 'email' && field.value.trim()) {
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(field.value.trim())) {
        valid = false;
        message = 'Please enter a valid email address.';
      }
    }

    field.classList.toggle('is-invalid', !valid);
    if (errorEl) {
      errorEl.textContent = message;
    }
    return valid;
  }

  function validateForm() {
    var fields = $$('input[required], textarea[required]', form);
    var allValid = true;
    fields.forEach(function (field) {
      if (!validateField(field)) {
        allValid = false;
      }
    });
    if (!allValid) {
      var firstInvalid = $('.is-invalid', form);
      if (firstInvalid) firstInvalid.focus();
    }
    return allValid;
  }

  function submitForm() {
    var submitBtn = $('button[type="submit"]', form);
    var successMsg = $('#form-success');

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    // Simulate async submission (replace with real fetch call)
    setTimeout(function () {
      form.reset();
      $$('.is-invalid', form).forEach(function (el) {
        el.classList.remove('is-invalid');
      });
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
      if (successMsg) {
        successMsg.hidden = false;
        setTimeout(function () {
          successMsg.hidden = true;
        }, 6000);
      }
    }, 1200);
  }

})();
