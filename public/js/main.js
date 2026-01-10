/**
 * WSC Theme - Main JavaScript
 * Globale Funktionen und Initialisierungen
 */

(function() {
    'use strict';

    /**
     * Initialisierung nach DOM-Load
     */
    document.addEventListener('DOMContentLoaded', function() {
        initSmoothScroll();
        initMobileMenu();
        initBackToTop();
    });

    /**
     * Smooth Scroll für Anchor-Links
     */
    function initSmoothScroll() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');

        anchorLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    /**
     * Mobile Menu - Auto-Close bei Link-Klick
     */
    function initMobileMenu() {
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        const navbarCollapse = document.querySelector('.navbar-collapse');

        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                    if (bsCollapse) {
                        bsCollapse.hide();
                    }
                }
            });
        });
    }

    /**
     * Back to Top Button (optional)
     */
    function initBackToTop() {
        // Kann später implementiert werden
    }

})();
