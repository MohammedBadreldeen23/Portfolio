/* =========================================================
   Mohammed Badreldeen — Portfolio
   Index: renders works from data + filters + skills animation
   Details: reads ?id= from URL and renders the matching item
========================================================= */
(function() {
    "use strict";

    /* =========================================================
       SITE DATA — all works live here
       Add / edit items here and both pages update automatically.
    ========================================================= */
    const SITE_DATA = {
        works: [
            /* ---------- PROJECTS ---------- */
            {
                id: "library-app",
                category: "projects",
                categoryLabel: "Project",
                title: "Library Management System",
                subtitle: "A desktop application for managing books, members, and borrowing workflows.",
                image: "assets/imgs/app.png",
                date: "2024",
                duration: "3 months",
                role: "Solo Developer",
                tags: ["C#", ".NET", "Windows Forms", "SQLite"],
                description: "A complete desktop solution built with C# and Windows Forms for small libraries. Staff can manage books, members and borrowing records through a clean, fast interface backed by a local SQLite database. The focus was on reliability, offline-first design, and a clean object-oriented structure.",
                highlights: [
                    "Full CRUD for books, members and borrowing records",
                    "Due-date tracking with overdue alerts",
                    "Advanced search and filtering",
                    "Reports and export functionality",
                    "Offline-first local database with SQLite"
                ],
                links: [
                    { label: "Source code on GitHub", url: "https://github.com/MohammedBadreldeen23" }
                ]
            },
            {
                id: "portfolio-web",
                category: "projects",
                categoryLabel: "Project",
                title: "Personal Portfolio Website",
                subtitle: "A responsive portfolio built with semantic HTML, modern CSS and vanilla JavaScript.",
                image: "assets/imgs/landingPage.png",
                date: "2024",
                duration: "2 weeks",
                role: "Designer & Developer",
                tags: ["HTML", "CSS", "JavaScript"],
                description: "A modern, static portfolio designed to showcase projects, skills, and experience. The focus was on clean structure, accessibility, and a smooth experience across every device — without any external dependencies.",
                highlights: [
                    "Fully responsive layout for all screen sizes",
                    "Smooth scroll and reveal animations",
                    "Accessible semantic markup",
                    "Zero dependencies — pure HTML, CSS and JS"
                ],
                links: [
                    { label: "View on GitHub", url: "https://github.com/MohammedBadreldeen23" }
                ]
            },
            {
                id: "task-manager",
                category: "projects",
                categoryLabel: "Project",
                title: "Task Manager Desktop App",
                subtitle: "A lightweight Windows application for organizing daily tasks and projects.",
                image: "assets/imgs/webApp.png",
                date: "2023",
                duration: "1 month",
                role: "Solo Developer",
                tags: ["C#", ".NET", "Windows Forms"],
                description: "A small but practical desktop tool for organizing tasks by project, priority and deadline. Built with C# and Windows Forms, with a focus on keyboard shortcuts and fast data entry.",
                highlights: [
                    "Project-based task organization",
                    "Priority levels and deadlines",
                    "Quick search and filters",
                    "Data persistence with SQLite"
                ],
                links: []
            },

            /* ---------- PAPERS ---------- */
            {
                id: "Pharmaceutical-Warehouse-System-paper",
                category: "papers",
                categoryLabel: "Research Paper",
                title: "Implementation of Drugs Warehouse System Paper",
                subtitle: "Design and implementation of a pharmaceutical warehouse management system.",
                image: "assets/imgs/app.png",
                date: "2022",
                role: "Author",
                tags: ["Software Engineering", "Design Patterns", "C#"],
                description: "This scientific paper will talk about drug warehouse" +
                    "system and applications, through this study will learn about the" +
                    "importance of systems, one of the main objectives of the study" +
                    "is design a flexible database that gives ease of modification and" +
                    "use of data so that data is not lost, this study The study used" +
                    "the descriptive approach, the most prominent results of the study" +
                    "are a system that gives satisfactory results." +
                    "Index Terms—System, warehouse, Pharmaceutical warehouse," +
                    "Management System",
                highlights: [
                    "a database that gives flexibility modifying and using data easy.",
                    "Control of warehouse.",
                    "All supplier and customer and drug classes records are present in system.",
                    "Bills for sale in the system."
                ],
                links: [
                    { label: "Read the paper (PDF)", url: "assets/last .pdf" }
                ]
            },
            {
                id: "db-normalization-paper",
                category: "papers",
                categoryLabel: "Research Paper",
                title: "Database Normalization for Small-Scale Applications",
                subtitle: "Balancing performance and data integrity in small desktop and web applications.",
                image: "assets/imgs/webApp.png",
                date: "2023",
                role: "Author",
                tags: ["Databases", "SQL", "Normalization"],
                description: "A practical guide to applying normalization rules (1NF to 3NF) in small-scale applications without over-engineering the schema. Includes real SQL examples and a clear trade-off analysis.",
                highlights: [
                    "Step-by-step normalization walkthrough",
                    "Trade-offs between normalization and performance",
                    "Common mistakes in small projects",
                    "SQL examples for SQL Server and SQLite"
                ],
                links: [
                    { label: "Read the paper (PDF)", url: "#" }
                ]
            },

            /* ---------- SEMINARS ---------- */
            {
                id: "IEEE-ComPTION",
                category: "Events",
                categoryLabel: "Events",
                title: "IEEE UofG SB Programming Competition",
                subtitle: "Programming Contestant | Problem-Solving | Competitive Programming.",
                image: "SRC/PIC/Comp1.jpg",
                date: "2021",
                role: "participated",
                tags: ["C#", ".NET", "Events", "IEEE UOFG SB"],
                description: "Presented an overview of the latest C# language features and .NET 8 improvements relevant to desktop developers, including performance improvements, new syntax, and best practices.",
                highlights: [
                    "participated as a contestant in an open programming competition organized by IEEE UofG SB.",
                    "Applied programming knowledge and logical thinking to solve coding challenges.",
                    "Demonstrated problem-solving and analytical skills in a competitive environment.",
                    "Gained valuable experience in competitive programming and technical skill development."
                ],
                links: []
            },
            {
                id: "git-Events",
                category: "Events",
                categoryLabel: "Events",
                title: "Git & GitHub Best Practices",
                subtitle: "A practical seminar on version control for student developers.",
                image: "assets/imgs/landingPage.png",
                date: "2023",
                role: "Speaker",
                tags: ["Git", "GitHub", "Version Control"],
                description: "Delivered a hands-on seminar covering Git fundamentals, branching strategies, pull requests, and collaborative workflows for student teams and small projects.",
                highlights: [
                    "Git fundamentals and mental model",
                    "Branching strategies for teams",
                    "Pull request and code review workflow",
                    "Hands-on exercises for attendees"
                ],
                links: []
            },

            /* ---------- CONFERENCES ---------- */
            {
                id: "ieee-uofg-conferences-1",
                category: "conferences",
                categoryLabel: "Conference",
                title: "From Code to Presentation: 50 Scientific Papers Challenge ",
                subtitle: "Finalist with a Medicine Warehouse Management System Developed in VB.NET | IEEE UofG SB.",
                image: "SRC/PIC/Con1.jpg",
                date: "2022",
                role: "Participant",
                tags: ["IEEE", "Conference", "Networking", "Uofg"],
                description: "As a participant in the 50 Scientific Papers Challenge organized by the IEEE University of Gezira Student Branch, I presented my Medicine Warehouse Management System, a software project developed using VB.NET. Reaching the final stage of the challenge was a valuable milestone in my academic and technical journey. I had the opportunity to present my paper to an audience, explain the project's concept, and demonstrate how software development can be applied to address practical challenges in medicine warehouse management.Beyond the technical experience, this achievement helped me develop my public speaking, technical communication, and project presentation skills, bringing together my academic background in Computer Science and my passion for software development.",
                highlights: [
                    "Reached the final stage of the IEEE UofG SB 50 Scientific Papers Challenge.",
                    "Developed a Medicine Warehouse Management System using VB.NET.",
                    "Networked with IEEE members and industry professionals",
                    "Presented the project to an audience, demonstrating its concept and practical applications.",
                    "Enhanced technical communication, public speaking, and software presentation skills."
                ],
                links: []
            },
            {
                id: "sudan-tech-summit",
                category: "conferences",
                categoryLabel: "Conference",
                title: "Sudan Tech Summit 2023",
                subtitle: "Attended sessions on software development and emerging technologies.",
                image: "assets/imgs/webApp.png",
                date: "2023",
                role: "Attendee",
                tags: ["Tech Summit", "Networking"],
                description: "Participated in the Sudan Tech Summit 2023, attending talks and workshops on software development, cloud technologies, and the growing tech ecosystem in Sudan.",
                highlights: [
                    "Attended talks on cloud and DevOps",
                    "Participated in a workshop on modern web development",
                    "Networked with local tech companies and startups"
                ],
                links: []
            }
        ]
    };

    /* =========================================================
       UTILITIES
    ========================================================= */
    function escapeHTML(str) {
        const div = document.createElement("div");
        div.textContent = String(str);
        return div.innerHTML;
    }

    function getQueryParam(name) {
        return new URLSearchParams(window.location.search).get(name);
    }

    /* =========================================================
       INDEX PAGE — RENDER WORKS + FILTERS
    ========================================================= */
    const worksGrid = document.getElementById("worksGrid");

    if (worksGrid) {
        /* --- Render all cards --- */
        SITE_DATA.works.forEach((item) => {
            const li = document.createElement("li");
            li.className = "workItem";
            li.setAttribute("data-category", item.category);

            const tagsHTML = item.tags
                .slice(0, 3)
                .map((t) => `<span class="workTag">${escapeHTML(t)}</span>`)
                .join("");

            li.innerHTML = `
                <a href="details.html?id=${encodeURIComponent(item.id)}" aria-label="View details: ${escapeHTML(item.title)}">
                    <div class="workThumb">
                        <img src="${item.image}" alt="${escapeHTML(item.title)}" loading="lazy">
                        <span class="workBadge">${escapeHTML(item.categoryLabel)}</span>
                    </div>
                    <div class="workBody">
                        <h3>${escapeHTML(item.title)}</h3>
                        <p>${escapeHTML(item.subtitle)}</p>
                        <div class="workMeta">${tagsHTML}</div>
                    </div>
                </a>
            `;
            worksGrid.appendChild(li);
        });

        /* --- Filter buttons --- */
        const filterButtons = document.querySelectorAll(".filter-btn");

        filterButtons.forEach((btn) => {
            btn.addEventListener("click", () => {
                filterButtons.forEach((b) => {
                    b.classList.remove("active");
                    b.setAttribute("aria-selected", "false");
                });
                btn.classList.add("active");
                btn.setAttribute("aria-selected", "true");

                const filter = btn.getAttribute("data-filter");
                document.querySelectorAll(".workItem").forEach((item) => {
                    const cat = item.getAttribute("data-category");
                    const show = filter === "all" || filter === cat;
                    item.classList.toggle("hidden", !show);
                });
            });
        });
    }

    /* =========================================================
       DETAILS PAGE
    ========================================================= */
    const detailPage = document.getElementById("detailPage");

    if (detailPage) {
        const id = getQueryParam("id");
        const item = SITE_DATA.works.find((w) => w.id === id);

        if (!item) {
            detailPage.innerHTML = `
                <div class="detailContainer">
                    <div class="detailError">
                        <h1>Item not found</h1>
                        <p>Sorry, we couldn't find the item you're looking for.</p>
                        <a class="hireMe" href="index.html#MyWorks">← Back to works</a>
                    </div>
                </div>
            `;
        } else {
            document.title = item.title + " | Mohammed Badreldeen";

            const setText = (elId, value) => {
                const el = document.getElementById(elId);
                if (el) el.textContent = value;
            };

            setText("detailBadge", item.categoryLabel);
            setText("detailTitle", item.title);
            setText("detailSub", item.subtitle);
            setText("detailDescription", item.description);

            /* Hero image */
            const img = document.getElementById("detailImage");
            if (img) {
                img.src = item.image;
                img.alt = item.title;
            }

            /* Meta line */
            const metaEl = document.getElementById("detailMeta");
            if (metaEl) {
                const parts = [];
                if (item.date) parts.push(`<span><strong>Date:</strong> ${escapeHTML(item.date)}</span>`);
                if (item.duration) parts.push(`<span><strong>Duration:</strong> ${escapeHTML(item.duration)}</span>`);
                if (item.role) parts.push(`<span><strong>Role:</strong> ${escapeHTML(item.role)}</span>`);
                metaEl.innerHTML = parts.join("");
            }

            /* Highlights */
            const highlightsEl = document.getElementById("detailHighlights");
            if (highlightsEl && item.highlights) {
                highlightsEl.innerHTML = item.highlights
                    .map((h) => `<li>${escapeHTML(h)}</li>`)
                    .join("");
            }

            /* Tags */
            const tagsEl = document.getElementById("detailTags");
            if (tagsEl) {
                tagsEl.innerHTML = item.tags
                    .map((t) => `<span class="workTag">${escapeHTML(t)}</span>`)
                    .join("");
            }

            /* Links */
            const linksEl = document.getElementById("detailLinks");
            if (linksEl) {
                if (!item.links || item.links.length === 0) {
                    linksEl.innerHTML = `<p class="detailMuted">No external links available.</p>`;
                } else {
                    linksEl.innerHTML = item.links
                        .map((l) => {
                            const url = l.url || "";
                            const isPdf = /\.pdf(\?.*)?$/i.test(url);
                            const isExternal = /^https?:\/\//i.test(url);

                            // PDF محلي → افتح في نفس الصفحة
                            // رابط خارجي → تبويب جديد
                            // رابط داخلي آخر → نفس الصفحة
                            const target = isExternal ? "_blank" : "_self";
                            const rel = isExternal ? 'rel="noopener noreferrer"' : "";
                            const download = isPdf && !isExternal ? "download" : "";
                            const icon = isPdf ? "📄" : "🔗";

                            return `<a class="detailLink" href="${escapeHTML(url)}" target="${target}" ${rel} ${download}>${icon} ${escapeHTML(l.label)} →</a>`;
                        })
                        .join("");
                }
            }

            /* Related items (same category) */
            const relatedEl = document.getElementById("detailRelated");
            if (relatedEl) {
                const related = SITE_DATA.works
                    .filter((w) => w.category === item.category && w.id !== item.id)
                    .slice(0, 3);

                if (related.length === 0) {
                    relatedEl.innerHTML = `<p class="detailMuted">No related items yet.</p>`;
                } else {
                    relatedEl.innerHTML = related
                        .map(
                            (r) => `
                            <a class="relatedCard" href="details.html?id=${encodeURIComponent(r.id)}">
                                <img src="${r.image}" alt="${escapeHTML(r.title)}">
                                <div>
                                    <span class="relatedBadge">${escapeHTML(r.categoryLabel)}</span>
                                    <h4>${escapeHTML(r.title)}</h4>
                                </div>
                            </a>
                        `
                        )
                        .join("");
                }
            }
        }
    }

    /* =========================================================
       SHARED — header, nav, scroll, typing, reveal, to-top
    ========================================================= */

    /* Header scrolled */
    const header = document.querySelector("header");

    function updateHeader() {
        if (!header) return;
        header.classList.toggle("scrolled", window.scrollY > 20);
    }

    /* Mobile nav */
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

        primaryNav.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeNav));
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") closeNav();
        });
        document.addEventListener("click", (e) => {
            if (!primaryNav.classList.contains("open")) return;
            if (!primaryNav.contains(e.target) && !navToggle.contains(e.target)) closeNav();
        });
    }

    /* Scroll progress */
    const progressBar = document.getElementById("scrollProgress");

    function updateProgress() {
        if (!progressBar) return;
        const st = window.scrollY || document.documentElement.scrollTop;
        const dh = document.documentElement.scrollHeight - window.innerHeight;
        progressBar.style.width = (dh > 0 ? (st / dh) * 100 : 0) + "%";
    }

    /* To top */
    const toTop = document.getElementById("toTop");

    function updateToTop() {
        if (!toTop) return;
        toTop.classList.toggle("show", window.scrollY > 500);
    }
    if (toTop) {
        toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    }

    /* Active nav link */
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    function setActiveNavLink() {
        if (!sections.length || !navLinks.length) return;
        const pos = window.scrollY + window.innerHeight * 0.28;
        let current = "";
        sections.forEach((s) => {
            if (pos >= s.offsetTop && pos < s.offsetTop + s.offsetHeight) current = s.id;
        });
        navLinks.forEach((l) => {
            const href = l.getAttribute("href") || "";
            l.classList.toggle("active", href.endsWith("#" + current));
        });
    }

    /* Unified scroll */
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

    /* Typing effect */
    const typedText = document.getElementById("typedText");
    const roles = ["Software Developer", "C# / .NET Developer", "Desktop App Builder", "Problem Solver"];
    if (typedText) {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduce) {
            typedText.textContent = roles[0];
        } else {
            let ri = 0,
                ci = 0,
                del = false;
            const TS = 90,
                DS = 45,
                PE = 1400,
                PS = 350;
            (function tick() {
                const cur = roles[ri];
                if (del) {
                    ci--;
                    typedText.textContent = cur.substring(0, ci);
                    if (ci === 0) {
                        del = false;
                        ri = (ri + 1) % roles.length;
                        setTimeout(tick, PS);
                        return;
                    }
                    setTimeout(tick, DS);
                } else {
                    ci++;
                    typedText.textContent = cur.substring(0, ci);
                    if (ci === cur.length) {
                        del = true;
                        setTimeout(tick, PE);
                        return;
                    }
                    setTimeout(tick, TS);
                }
            })();
        }
    }

    /* Reveal on scroll */
    const revealEls = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && revealEls.length) {
        const obs = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in");
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
        );
        revealEls.forEach((el) => obs.observe(el));
    } else {
        revealEls.forEach((el) => el.classList.add("in"));
    }

    /* Smooth scroll for same-page anchor links */
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (e) => {
            const id = link.getAttribute("href");
            if (!id || id === "#") return;
            const target = document.querySelector(id);
            if (!target) return;
            e.preventDefault();
            const top = target.getBoundingClientRect().top + window.scrollY - 90;
            window.scrollTo({ top, behavior: "smooth" });
            history.replaceState(null, "", id);
        });
    });



})();