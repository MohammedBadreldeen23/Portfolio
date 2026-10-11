/* =========================================================
   Mohammed Badreldeen — Portfolio
   Vanilla JS: nav, scroll progress, typing, reveal, back-to-top
========================================================= */
(function() {
    "use strict";

    /* ---------------------------------------------------
       1. Header scrolled state
    --------------------------------------------------- */
    const header = document.querySelector("header");

    function updateHeader() {
        if (!header) return;
        if (window.scrollY > 20) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    /* ---------------------------------------------------
       2. Mobile navigation toggle
    --------------------------------------------------- */
    const navToggle = document.getElementById("navToggle");
    const primaryNav = document.getElementById("primaryNav");

    function closeNav() {
        if (!primaryNav || !navToggle) return;
        primaryNav.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open menu");
    }

    if (navToggle && primaryNav) {
        navToggle.addEventListener("click", () => {
            const isOpen = primaryNav.classList.toggle("open");
            navToggle.classList.toggle("open", isOpen);
            navToggle.setAttribute("aria-expanded", String(isOpen));
            navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
        });

        primaryNav.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", closeNav);
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") closeNav();
        });

        document.addEventListener("click", (e) => {
            if (!primaryNav.classList.contains("open")) return;
            if (!primaryNav.contains(e.target) && !navToggle.contains(e.target)) {
                closeNav();
            }
        });
    }

    /* ---------------------------------------------------
       3. Scroll progress bar
    --------------------------------------------------- */
    const progressBar = document.getElementById("scrollProgress");

    function updateProgress() {
        if (!progressBar) return;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = percent + "%";
    }

    /* ---------------------------------------------------
       4. Back-to-top button
    --------------------------------------------------- */
    const toTop = document.getElementById("toTop");

    function updateToTop() {
        if (!toTop) return;
        if (window.scrollY > 500) {
            toTop.classList.add("show");
        } else {
            toTop.classList.remove("show");
        }
    }

    if (toTop) {
        toTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    /* ---------------------------------------------------
       5. Active nav link based on scroll position
    --------------------------------------------------- */
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    function setActiveNavLink() {
        if (!sections.length || !navLinks.length) return;

        const scrollPos = window.scrollY + window.innerHeight * 0.28;
        let currentId = "";

        sections.forEach((section) => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            if (scrollPos >= top && scrollPos < bottom) {
                currentId = section.id;
            }
        });

        navLinks.forEach((link) => {
            const href = link.getAttribute("href");
            const isMatch = href === "#" + currentId;
            link.classList.toggle("active", isMatch);
        });
    }

    /* ---------------------------------------------------
       6. Unified scroll handler (rAF throttled)
    --------------------------------------------------- */
    let ticking = false;

    function onScroll() {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(() => {
            updateHeader();
            updateProgress();
            updateToTop();
            setActiveNavLink();
            ticking = false;
        });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    onScroll();

    /* ---------------------------------------------------
       7. Typing effect in hero
    --------------------------------------------------- */
    const typedText = document.getElementById("typedText");
    const roles = [
        "Software Developer",
        "C# / .NET Developer",
        "Problem Solver",
        "Desktop App Builder"
    ];

    if (typedText) {
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReduced) {
            typedText.textContent = roles[0];
        } else {
            let roleIndex = 0;
            let charIndex = 0;
            let isDeleting = false;

            const TYPE_SPEED = 90;
            const DELETE_SPEED = 45;
            const PAUSE_END = 1400;
            const PAUSE_START = 350;

            function tick() {
                const current = roles[roleIndex];

                if (isDeleting) {
                    charIndex--;
                    typedText.textContent = current.substring(0, charIndex);

                    if (charIndex === 0) {
                        isDeleting = false;
                        roleIndex = (roleIndex + 1) % roles.length;
                        setTimeout(tick, PAUSE_START);
                        return;
                    }
                    setTimeout(tick, DELETE_SPEED);
                } else {
                    charIndex++;
                    typedText.textContent = current.substring(0, charIndex);

                    if (charIndex === current.length) {
                        isDeleting = true;
                        setTimeout(tick, PAUSE_END);
                        return;
                    }
                    setTimeout(tick, TYPE_SPEED);
                }
            }

            setTimeout(tick, 500);
        }
    }

    /* ---------------------------------------------------
       8. Reveal on scroll (IntersectionObserver)
    --------------------------------------------------- */
    const revealEls = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window && revealEls.length) {
        const revealObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in");
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
        );

        revealEls.forEach((el) => revealObserver.observe(el));
    } else {
        revealEls.forEach((el) => el.classList.add("in"));
    }

    /* ---------------------------------------------------
       9. Smooth scroll for internal links
    --------------------------------------------------- */
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href");
            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);
            if (!target) return;

            e.preventDefault();
            const headerOffset = 90;
            const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;

            window.scrollTo({ top, behavior: "smooth" });
            history.replaceState(null, "", targetId);
        });
    });

})();