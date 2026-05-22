/* ============================================================
   MAIN.JS — Script principale del sito personale
   ============================================================ */


/* -------------------------------------------------------
   0. COMPONENTI — Navbar e Footer scritti via JS
   Compatibile con apertura diretta file:// (no fetch)
------------------------------------------------------- */
const NAVBAR_HTML = `
<nav class="navbar-custom">
  <div class="container-fluid d-flex align-items-center justify-content-between flex-wrap px-4">

    <a class="navbar-brand" href="index.html">
      <span>Riccardo Santarelli</span>
    </a>

    <button class="hamburger" aria-label="Apri menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>

    <ul class="nav-list">
      <li class="nav-item-custom">
        <a class="nav-link-custom home-nav-link" href="index.html">Home</a>
      </li>
      <li class="nav-item-custom">
        <a class="nav-link-custom has-dropdown" href="#">Hobby/Passioni <span class="arrow">&#9660;</span></a>
        <div class="dropdown-custom">
          <a class="dropdown-item-custom" href="musica.html">
            <img class="dropdown-img" src="musica.jpeg" alt="Musica" />
            <span class="dropdown-label">Musica</span>
          </a>
          <a class="dropdown-item-custom" href="pallacanestro.html">
            <img class="dropdown-img" src="basket.jpeg" alt="Pallacanestro" />
            <span class="dropdown-label">Pallacanestro</span>
          </a>
        </div>
      </li>
      <li class="nav-item-custom">
        <a class="nav-link-custom has-dropdown" href="#">Materie <span class="arrow">&#9660;</span></a>
        <div class="dropdown-custom">
          <a class="dropdown-item-custom" href="ambito-tecnico.html">
            <img class="dropdown-img" src="ambito tecnico.jpg" alt="Ambito Tecnico" />
            <span class="dropdown-label">Ambito Tecnico</span>
          </a>
          <a class="dropdown-item-custom" href="ambito-umanistico.html">
            <img class="dropdown-img" src="ambito umanistico.jpg" alt="Ambito Umanistico" />
            <span class="dropdown-label">Ambito Umanistico</span>
          </a>
          <a class="dropdown-item-custom" href="argomenti-preferiti.html">
            <img class="dropdown-img" src="materie preferite.jpg" alt="Argomenti Preferiti" />
            <span class="dropdown-label">Argomenti Preferiti</span>
          </a>
        </div>
      </li>
      <li class="nav-item-custom">
        <a class="nav-link-custom" href="educazione-civica.html">Educazione Civica</a>
      </li>
      <li class="nav-item-custom">
        <a class="nav-link-custom has-dropdown" href="#">PCTO<span class="arrow">&#9660;</span></a>
        <div class="dropdown-custom">
          <a class="dropdown-item-custom" href="loccioni.html">
            <img class="dropdown-img" src="logo loccioni.png" alt="L'impresa Loccioni" />
            <span class="dropdown-label">L'impresa Loccioni</span>
          </a>
          <a class="dropdown-item-custom" href="pcto.html">
            <img class="dropdown-img" src="pcto navbar.png" alt="pcto" />
            <span class="dropdown-label">Il mio PCTO</span>
          </a>
        </div>
      </li>
      <li class="nav-item-custom">
        <a class="nav-link-custom" href="progetti.html">Progetti</a>
      </li>
      <li class="nav-item-custom">
        <a class="nav-link-custom has-dropdown" href="#">Certificazioni/Attestati<span class="arrow">&#9660;</span></a>
        <div class="dropdown-custom">
          <a class="dropdown-item-custom" href="ambito-scolastico.html">
            <img class="dropdown-img" src="materie preferite.jpg" alt="Ambito Scolastico" />
            <span class="dropdown-label">Ambito Scolastico</span>
          </a>
          <a class="dropdown-item-custom" href="ambito-personale.html">
            <img class="dropdown-img" src="coccarda.jpg" alt="Ambito Personale" />
            <span class="dropdown-label">Ambito Personale</span>
          </a>
        </div>
      </li>
      <li class="nav-item-custom">
        <a class="nav-link-custom" href="futuro.html">Futuro</a>
      </li>
    </ul>

  </div>
</nav>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="row gy-4">
      <div class="col-lg-4 col-md-6">
        <div class="footer-brand">Riccardo <span>Santarelli</span></div>
        <p class="footer-desc">Studente di informatica all'IIS Marconi Pieralisi, appassionato di musica, pallacanestro</p>
      </div>
      <div class="col-lg-4 col-md-6">
        <h4 class="footer-col-title">Contatti</h4>
        <ul class="footer-list">
          <li><i class="fas fa-phone"></i><a href="tel:+393703138201">+39 370 313 8201</a></li>
          <li><i class="fas fa-envelope"></i><a href="mailto:r.santarelli2007@gmail.com">r.santarelli2007@gmail.com</a></li>
          <li><i class="fas fa-map-marker-alt"></i>Jesi, Italia</li>
        </ul>
      </div>
      <div class="col-lg-4 col-md-12">
        <h4 class="footer-col-title">Seguimi</h4>
        <div class="social-links">
          <a class="social-link" href="https://www.instagram.com/rick._sants" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
    <hr class="footer-divider" />
    <p class="footer-copyright">&copy; <span id="current-year"></span> Riccardo Santarelli. Tutti i diritti riservati.</p>
  </div>
</footer>`;

// Inietta i componenti nei placeholder
const navbarEl = document.getElementById('navbar-placeholder');
if (navbarEl) navbarEl.innerHTML = NAVBAR_HTML;

const footerEl = document.getElementById('footer-placeholder');
if (footerEl) footerEl.innerHTML = FOOTER_HTML;


/* -------------------------------------------------------
   Tutto il resto viene eseguito dopo che il DOM è pronto
   e i componenti sono già stati iniettati sopra in modo
   sincrono, quindi non serve più attendere nulla.
------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function () {

  /* -------------------------------------------------------
     1. HAMBURGER MENU — Apertura/chiusura su mobile
  ------------------------------------------------------- */
  const hamburger = document.querySelector('.hamburger');
  const navList   = document.querySelector('.nav-list');

  if (hamburger && navList) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      navList.classList.toggle('open');
      const isOpen = navList.classList.contains('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });
  }

  /* -------------------------------------------------------
     2. DROPDOWN MOBILE — Click per aprire le sottovoci
  ------------------------------------------------------- */
  const dropdownTriggers = document.querySelectorAll('.nav-link-custom.has-dropdown');

  dropdownTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function (e) {
      if (window.innerWidth < 992) {
        e.preventDefault();
        const parentItem = trigger.closest('.nav-item-custom');
        document.querySelectorAll('.nav-item-custom.open').forEach(function (item) {
          if (item !== parentItem) item.classList.remove('open');
        });
        parentItem.classList.toggle('open');
      }
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.navbar-custom')) {
      if (hamburger) hamburger.classList.remove('open');
      if (navList)   navList.classList.remove('open');
      document.querySelectorAll('.nav-item-custom.open').forEach(function (item) {
        item.classList.remove('open');
      });
    }
  });

  /* -------------------------------------------------------
     3. NAVBAR SCROLL — Cambia aspetto della navbar allo scroll
  ------------------------------------------------------- */
  const navbar = document.querySelector('.navbar-custom');

  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 60) {
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.25)';
      } else {
        navbar.style.boxShadow = '0 6px 24px rgba(0, 0, 0, 0.12)';
      }
    });
  }

  /* -------------------------------------------------------
     4. ACTIVE NAV LINK — Evidenzia la voce corrente
  ------------------------------------------------------- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const allNavLinks = document.querySelectorAll('.nav-link-custom, .dropdown-item-custom');

  allNavLinks.forEach(function (link) {
    const href = link.getAttribute('href');
    if (href && href === currentPage) {
      link.classList.add('active');
      const parentNav = link.closest('.nav-item-custom');
      if (parentNav) {
        const parentLink = parentNav.querySelector('.nav-link-custom');
        if (parentLink) parentLink.classList.add('active');
      }
    }
  });

  if (currentPage === 'index.html' || currentPage === '') {
    const brandLink = document.querySelector('.home-nav-link');
    if (brandLink) brandLink.classList.add('active');
  }

  /* -------------------------------------------------------
     5. FADE-IN ANIMATIONS — Animazione elementi al scroll
  ------------------------------------------------------- */
  const fadeObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.fade-in').forEach(function (el) {
    fadeObserver.observe(el);
  });

  /* -------------------------------------------------------
     6. SMOOTH SCROLL — Scorrimento fluido per link interni
  ------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        const targetTop = target.getBoundingClientRect().top + window.scrollY - navbarHeight - 20;
        window.scrollTo({ top: targetTop, behavior: 'smooth' });
      }
    });
  });

  /* -------------------------------------------------------
     7. ANNO CORRENTE NEL FOOTER
  ------------------------------------------------------- */
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* -------------------------------------------------------
     8. TOOLTIP IMMAGINI MANCANTI
  ------------------------------------------------------- */
  document.querySelectorAll('img').forEach(function (img) {
    img.addEventListener('error', function () {
      this.style.minHeight = this.classList.contains('hero-photo') ? '400px' : '200px';
      this.style.background = 'linear-gradient(135deg, #edf2f7, #e2e8f0)';
      this.alt = this.alt || 'Immagine da inserire';
    });
  });

  /* -------------------------------------------------------
     9. CHIUSURA MENU MOBILE — al click su un link
  ------------------------------------------------------- */
  document.querySelectorAll('.nav-list a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth < 992) {
        if (hamburger) hamburger.classList.remove('open');
        if (navList)   navList.classList.remove('open');
        if (hamburger) hamburger.setAttribute('aria-expanded', false);
        document.querySelectorAll('.nav-item-custom.open').forEach(function (item) {
          item.classList.remove('open');
        });
      }
    });
  });

}); // Fine DOMContentLoaded