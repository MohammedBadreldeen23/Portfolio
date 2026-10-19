/* =========================================================
   Mohammed Badreldeen — Portfolio
   Index: renders works from data + filters + skills animation
   Details: reads ?id= from URL and renders the matching item
========================================================= */
(function() {
    "use strict";

    /*
       Direct-open safeguard: if Live Server starts on details.html
       without a selected work (?id=...), send the visitor to the home page.
       Valid detail URLs, such as details.html?id=portfolio-web, are unaffected.
    */
    if (
        document.getElementById("detailPage") &&
        !new URLSearchParams(window.location.search).has("id")
    ) {
        window.location.replace(new URL("index.html", window.location.href).href);
        return;
    }

    /* =========================================================
       SITE DATA — all works live here
       Add / edit items here and both pages update automatically.
    ========================================================= */
    const SITE_DATA = {
        works: [
            /* ---------- PROJECTS ---------- */
            {
                id: "Desgin-system",
                category: "projects",
                categoryLabel: "Project",
                title: "Pharmaceutical Warehouse System",
                subtitle: "A desktop application for medicine warehouse management.",
                image: "SRC/PIC/Capture.PNG",
                images: ["SRC/PIC/Capture2.PNG", "SRC/PIC/Capture3.PNG", "SRC/PIC/Capture4.PNG", "SRC/PIC/Capture5.PNG", "SRC/PIC/Capture.PNG"], // Add more image paths here when those files exist.
                date: "2022",
                duration: "3 months",
                role: "Solo Developer",
                tags: ["C#", ".NET", "Windows Forms", "SQL Server"],
                description: "A desktop application built with C# and Windows Forms to support medicine warehouse operations. It helps staff maintain medicine records through a straightforward interface backed by a SQL Server database. The project focuses on reliable data handling, practical workflows, and a clean object-oriented structure.",
                highlights: [
                    "Create, view, update, and delete medicine records",
                    "Expiry-date tracking and overdue alerts",
                    "Search and filter medicine records",
                    "Reports and data export functionality",
                    "Local SQL Server database integration"
                ],
                links: []
            },

            {
                id: "portfolio-web",
                category: "projects",
                categoryLabel: "Project",
                title: "Personal Portfolio Website",
                subtitle: "A responsive portfolio built with semantic HTML, modern CSS and vanilla JavaScript.",
                image: "SRC/PIC/web.jpg",
                images: [],
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
                links: []
            },

            /* ---------- PAPERS ---------- */
            {
                id: "Pharmaceutical-Warehouse-System-paper",
                category: "papers",
                categoryLabel: "Research Paper",
                title: "Implementation of a Medicine Warehouse System",
                subtitle: "A research paper on designing and implementing a medicine warehouse management system.",
                image: "SRC/PIC/Paper.jpg",
                images: [],
                date: "2022",
                role: "Author",
                tags: ["Software Engineering", "Design Patterns", "C#"],
                description: "This paper examines the design and implementation of a medicine warehouse information system. It discusses the importance of managing warehouse data reliably and describes a flexible database structure intended to make records easier to maintain and update. The study used a descriptive approach and presented a working system for medicine, supplier, customer, and sales records.",
                highlights: [
                    "A flexible database structure designed for easier updates",
                    "Medicine warehouse inventory management",
                    "Records for suppliers, customers, and medicine categories",
                    "Sales invoices and transaction records"
                ],
                links: [
                    { label: "Read the paper (PDF)", url: "assets/last.pdf" }
                ]
            },

            /* ---------- EVENTS ---------- */
            {
                id: "IEEE-ComPTION",
                category: "Events",
                categoryLabel: "Events",
                title: "IEEE UofG SB Programming Competition",
                subtitle: "Programming Contestant | Problem-Solving | Competitive Programming.",
                image: "SRC/PIC/Comp1.jpg",
                images: ["SRC/PIC/Comp2.jpg", "SRC/PIC/Comp1.jpg"],
                date: "2021",
                role: "Participant",
                tags: ["C#", ".NET", "Events", "IEEE UOFG SB"],
                description: "Participated as a contestant in an open programming competition organized by the IEEE University of Gezira Student Branch. The competition provided an opportunity to apply programming knowledge, logical reasoning, and problem-solving skills under contest conditions.",
                highlights: [
                    "Participated as a contestant in an open programming competition organized by IEEE UofG SB.",
                    "Applied programming knowledge and logical thinking to solve coding challenges.",
                    "Demonstrated problem-solving and analytical skills in a competitive environment.",
                    "Gained valuable experience in competitive programming and technical skill development."
                ],
                links: []
            },

            {
                id: "IEEE-UOFG-SOCIAL",
                category: "Events",
                categoryLabel: "Events",
                title: "IEEE UOFG SB Social Event",
                subtitle: "Connecting Members Through Fun, Friendship, and Teamwork",
                image: "SRC/PIC/Soc.jpg",
                images: [],
                date: "2025",
                role: "Participant",
                tags: ["Networking", "Social", "IEEE"],
                description: "Participated in the IEEE University of Gezira Student Branch Social Day, an event designed to bring members together through interactive games, social activities, and opportunities to connect with fellow volunteers. The event fostered friendship, strengthened relationships among members, and promoted a sense of belonging within the IEEE community.",
                highlights: [
                    "Participated in interactive games and fun social activities with IEEE members.",
                    "Networked with fellow IEEE members and volunteers.",
                    "Contributed to fostering a welcoming, collaborative, and engaging IEEE community.",
                    "Enhanced teamwork, communication, and interpersonal skills."
                ],
                links: []
            },

            {
                id: "IEEE-DAY",
                category: "Events",
                categoryLabel: "Events",
                title: "IEEE Day — IEEE UofG SB",
                subtitle: "Celebrating the IEEE community, volunteering, and technology",
                image: "SRC/PIC/Day1.jpg",
                images: [],
                date: "2025",
                role: "HR Coordinator",
                tags: ["Tech Summit", "Networking", "IEEE-UOFG-SB"],
                description: "Participated in IEEE Day celebrations organized by the IEEE University of Gezira Student Branch, an occasion celebrating the IEEE community, its achievements, and its impact on technology and engineering. The event brought members together to recognize volunteer contributions, share experiences, and strengthen the spirit of collaboration and innovation.",
                highlights: [
                    "Celebrated IEEE's global community and its contributions to technology and engineering",
                    "Recognized the importance of volunteering, teamwork, and professional growth.",
                    "Connected with IEEE UofG SB members and fellow volunteers"
                ],
                links: []
            },

            /* ---------- CONFERENCES ---------- */
            {
                id: "ieee-uofg-conferences-1",
                category: "conferences",
                categoryLabel: "Conference",
                title: "From Code to Presentation: 50 Scientific Papers Challenge",
                subtitle: "Finalist with a Medicine Warehouse Management System Developed in VB.NET | IEEE UofG SB.",
                image: "SRC/PIC/Con1.jpg",
                images: ["SRC/PIC/Con1.jpg", "SRC/PIC/Con2.jpg", "SRC/PIC/Con3.jpg"],
                date: "2022",
                role: "Participant",
                tags: ["IEEE", "Conference", "Networking", "Uofg"],
                description: "I participated in the IEEE University of Gezira Student Branch 50 Scientific Papers Challenge and presented my Medicine Warehouse Management System, developed using VB.NET. Reaching the final stage was a valuable milestone in my academic and technical journey. I explained the project's concept and demonstrated how software can address practical challenges in medicine warehouse management. The experience also strengthened my public speaking, technical communication, and project presentation skills.",
                highlights: [
                    "Reached the final stage of the IEEE UofG SB 50 Scientific Papers Challenge.",
                    "Developed a Medicine Warehouse Management System using VB.NET.",
                    "Networked with IEEE members and industry professionals.",
                    "Presented the project to an audience, demonstrating its concept and practical applications.",
                    "Enhanced technical communication, public speaking, and software presentation skills."
                ],
                links: []
            }
        ]
    };

    /* =========================================================
       UTILITIES
    ========================================================= */

    function escapeHTML(value) {
        const div = document.createElement("div");
        div.textContent = String(value);
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
        SITE_DATA.works.forEach((item) => {
            const li = document.createElement("li");
            li.className = "workItem";
            li.setAttribute("data-category", item.category);

            const tagsHTML = item.tags
                .slice(0, 3)
                .map((tag) => `<span class="workTag">${escapeHTML(tag)}</span>`)
                .join("");

            li.innerHTML = `
                <a href="details.html?id=${encodeURIComponent(item.id)}"
                   aria-label="View details: ${escapeHTML(item.title)}">
                    <div class="workThumb">
                        <img src="${escapeHTML(item.image)}"
                             alt="${escapeHTML(item.title)}"
                             loading="lazy"
                             decoding="async">
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

            const cardImage = li.querySelector("img");
            if (cardImage) {
                cardImage.addEventListener("error", () => {
                    cardImage.classList.add("image-missing");
                    cardImage.removeAttribute("src");
                }, { once: true });
            }
        });

        const filterButtons = document.querySelectorAll(".filter-btn");

        filterButtons.forEach((button) => {
            button.addEventListener("click", () => {
                filterButtons.forEach((otherButton) => {
                    otherButton.classList.remove("active");
                    otherButton.setAttribute("aria-selected", "false");
                });

                button.classList.add("active");
                button.setAttribute("aria-selected", "true");

                const filter = button.getAttribute("data-filter");

                document.querySelectorAll(".workItem").forEach((workItem) => {
                    const category = workItem.getAttribute("data-category");
                    const shouldShow = filter === "all" || filter === category;
                    workItem.classList.toggle("hidden", !shouldShow);
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
        const item = SITE_DATA.works.find((work) => work.id === id);

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
            document.title = `${item.title} | Mohammed Badreldeen`;

            const setText = (elementId, value) => {
                const element = document.getElementById(elementId);
                if (element) element.textContent = value;
            };

            setText("detailBadge", item.categoryLabel);
            setText("detailTitle", item.title);
            setText("detailSub", item.subtitle);
            setText("detailDescription", item.description);

            /* Main image */
            const mainImage = document.getElementById("detailImage");

            if (mainImage) {
                mainImage.src = item.image;
                mainImage.alt = item.title;
                mainImage.loading = "eager";
                mainImage.decoding = "async";

                mainImage.addEventListener("error", () => {
                    const hero = mainImage.closest(".detailHero");
                    if (hero) hero.classList.add("image-unavailable");
                    mainImage.hidden = true;
                }, { once: true });
            }

            /* Optional gallery */
            const gallery = document.getElementById("detailGallery");
            const galleryGrid = document.getElementById("detailGalleryGrid");

            const extraImages = Array.isArray(item.images) ?
                item.images.filter((src) =>
                    typeof src === "string" &&
                    src.trim() &&
                    src !== item.image
                ) : [];

            if (gallery && galleryGrid && extraImages.length > 0) {
                gallery.hidden = false;

                galleryGrid.innerHTML = extraImages.map((src, index) => `
                    <button
                        class="detailGalleryItem"
                        type="button"
                        data-gallery-src="${escapeHTML(src)}"
                        aria-label="View additional image ${index + 1} for ${escapeHTML(item.title)}"
                        aria-pressed="false">
                        <img
                            src="${escapeHTML(src)}"
                            alt="${escapeHTML(item.title)} — image ${index + 2}"
                            loading="lazy"
                            decoding="async">
                        <span>Image ${index + 2}</span>
                    </button>
                `).join("");

                galleryGrid.querySelectorAll(".detailGalleryItem").forEach((button) => {
                    const thumbnail = button.querySelector("img");

                    if (thumbnail) {
                        thumbnail.addEventListener("error", () => button.remove(), { once: true });
                    }

                    button.addEventListener("click", () => {
                        if (!mainImage) return;

                        mainImage.hidden = false;
                        mainImage.src = button.getAttribute("data-gallery-src");

                        // Fixed: Removed the space between ? and .alt that caused the syntax error
                        const thumbImg = button.querySelector("img");
                        mainImage.alt = thumbImg ? thumbImg.alt : item.title;

                        const hero = mainImage.closest(".detailHero");
                        if (hero) hero.classList.remove("image-unavailable");

                        galleryGrid.querySelectorAll(".detailGalleryItem").forEach((otherButton) => {
                            otherButton.setAttribute(
                                "aria-pressed",
                                String(otherButton === button)
                            );
                        });

                        if (hero) {
                            hero.scrollIntoView({
                                behavior: "smooth",
                                block: "center"
                            });
                        }
                    });
                });
            } else if (gallery && galleryGrid) {
                gallery.hidden = true;
                galleryGrid.replaceChildren();
            }

            /* Meta line */
            const metaElement = document.getElementById("detailMeta");

            if (metaElement) {
                const parts = [];

                if (item.date) {
                    parts.push(`<span><strong>Date:</strong> ${escapeHTML(item.date)}</span>`);
                }

                if (item.duration) {
                    parts.push(`<span><strong>Duration:</strong> ${escapeHTML(item.duration)}</span>`);
                }

                if (item.role) {
                    parts.push(`<span><strong>Role:</strong> ${escapeHTML(item.role)}</span>`);
                }

                metaElement.innerHTML = parts.join("");
            }

            /* Highlights */
            const highlightsElement = document.getElementById("detailHighlights");

            if (highlightsElement && Array.isArray(item.highlights)) {
                highlightsElement.innerHTML = item.highlights
                    .map((highlight) => `<li>${escapeHTML(highlight)}</li>`)
                    .join("");
            }

            /* Tags */
            const tagsElement = document.getElementById("detailTags");

            if (tagsElement) {
                tagsElement.innerHTML = item.tags
                    .map((tag) => `<span class="workTag">${escapeHTML(tag)}</span>`)
                    .join("");
            }

            /* Links */
            const linksElement = document.getElementById("detailLinks");

            if (linksElement) {
                const validLinks = (Array.isArray(item.links) ? item.links : [])
                    .filter((link) =>
                        link &&
                        typeof link.label === "string" &&
                        link.label.trim() &&
                        typeof link.url === "string" &&
                        link.url.trim() &&
                        link.url.trim() !== "#"
                    );

                if (validLinks.length === 0) {
                    linksElement.innerHTML = `
                        <p class="detailMuted">No external links available.</p>
                    `;
                } else {
                    linksElement.innerHTML = validLinks.map((link) => {
                        const url = link.url.trim();
                        const isPdf = /\.pdf(\?.*)?$/i.test(url);
                        const isExternal = /^https?:\/\//i.test(url);
                        const target = isExternal ? "_blank" : "_self";
                        const rel = isExternal ? 'rel="noopener noreferrer"' : "";
                        const download = isPdf && !isExternal ? "download" : "";
                        const icon = isPdf ? "📄" : "🔗";

                        return `
                            <a class="detailLink"
                               href="${escapeHTML(url)}"
                               target="${target}"
                               ${rel}
                               ${download}>
                               ${icon} ${escapeHTML(link.label)} →
                            </a>
                        `;
                    }).join("");
                }
            }

            /* Related items from the same category */
            const relatedElement = document.getElementById("detailRelated");

            if (relatedElement) {
                const relatedItems = SITE_DATA.works
                    .filter((work) =>
                        work.category === item.category &&
                        work.id !== item.id
                    )
                    .slice(0, 3);

                if (relatedItems.length === 0) {
                    relatedElement.innerHTML = `
                        <p class="detailMuted">No related items yet.</p>
                    `;
                } else {
                    relatedElement.innerHTML = relatedItems.map((related) => `
                        <a class="relatedCard" href="details.html?id=${encodeURIComponent(related.id)}">
                            <img
                                src="${escapeHTML(related.image)}"
                                alt="${escapeHTML(related.title)}"
                                loading="lazy"
                                decoding="async">
                            <div>
                                <span class="relatedBadge">${escapeHTML(related.categoryLabel)}</span>
                                <h4>${escapeHTML(related.title)}</h4>
                            </div>
                        </a>
                    `).join("");
                }
            }
        }
    }

    /* =========================================================
       SHARED — header, navigation, scroll, typing, reveal and top
    ========================================================= */

    const header = document.querySelector("header");

    function updateHeader() {
        if (!header) return;
        header.classList.toggle("scrolled", window.scrollY > 20);
    }

    /* Mobile navigation */
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
            navToggle.setAttribute(
                "aria-label",
                isOpen ? "Close menu" : "Open menu"
            );
        });

        primaryNav.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", closeNav);
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") closeNav();
        });

        document.addEventListener("click", (event) => {
            if (!primaryNav.classList.contains("open")) return;

            if (!primaryNav.contains(event.target) &&
                !navToggle.contains(event.target)
            ) {
                closeNav();
            }
        });
    }

    /* Scroll progress */
    const progressBar = document.getElementById("scrollProgress");

    function updateProgress() {
        if (!progressBar) return;

        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollableHeight =
            document.documentElement.scrollHeight - window.innerHeight;

        const progress = scrollableHeight > 0 ?
            Math.min(1, Math.max(0, scrollTop / scrollableHeight)) :
            0;

        progressBar.style.transform = `scaleX(${progress})`;
    }

    /* To top */
    const toTop = document.getElementById("toTop");

    function updateToTop() {
        if (!toTop) return;
        toTop.classList.toggle("show", window.scrollY > 500);
    }

    if (toTop) {
        toTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    /* Active navigation link */
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    function setActiveNavLink() {
        if (!sections.length || !navLinks.length) return;

        const position = window.scrollY + window.innerHeight * 0.28;
        let currentSection = "";

        sections.forEach((section) => {
            if (
                position >= section.offsetTop &&
                position < section.offsetTop + section.offsetHeight
            ) {
                currentSection = section.id;
            }
        });

        navLinks.forEach((link) => {
            const href = link.getAttribute("href") || "";
            link.classList.toggle(
                "active",
                href.endsWith("#" + currentSection)
            );
        });
    }

    /* Unified scroll handler */
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
    const roles = [
        "Software Developer",
        "C# / .NET Developer",
        "Desktop App Builder",
        "Problem Solver"
    ];

    if (typedText) {
        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (reduceMotion) {
            typedText.textContent = roles[0];
        } else {
            let roleIndex = 0;
            let characterIndex = 0;
            let deleting = false;

            const typeSpeed = 90;
            const deleteSpeed = 45;
            const endPause = 1400;
            const startPause = 350;

            (function tick() {
                const currentRole = roles[roleIndex];

                if (deleting) {
                    characterIndex--;
                    typedText.textContent = currentRole.substring(0, characterIndex);

                    if (characterIndex === 0) {
                        deleting = false;
                        roleIndex = (roleIndex + 1) % roles.length;
                        setTimeout(tick, startPause);
                        return;
                    }

                    setTimeout(tick, deleteSpeed);
                } else {
                    characterIndex++;
                    typedText.textContent = currentRole.substring(0, characterIndex);

                    if (characterIndex === currentRole.length) {
                        deleting = true;
                        setTimeout(tick, endPause);
                        return;
                    }

                    setTimeout(tick, typeSpeed);
                }
            })();
        }
    }

    /* Reveal on scroll */
    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window && revealElements.length) {
        const observer = new IntersectionObserver(
            (entries, activeObserver) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in");
                        activeObserver.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.12,
                rootMargin: "0px 0px -60px 0px"
            }
        );

        revealElements.forEach((element) => observer.observe(element));
    } else {
        revealElements.forEach((element) => element.classList.add("in"));
    }

    /* Smooth scroll for same-page anchor links */
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const id = link.getAttribute("href");
            if (!id || id === "#") return;

            const target = document.querySelector(id);
            if (!target) return;

            event.preventDefault();

            const top =
                target.getBoundingClientRect().top +
                window.scrollY -
                90;

            window.scrollTo({ top, behavior: "smooth" });
            history.replaceState(null, "", id);
        });
    });

    /* =========================================================
       PROFILE DRAWER + BILINGUAL INTERFACE
    ========================================================= */

    const sidebar = document.getElementById("sidebar");
    const sidebarOverlay = document.getElementById("sidebarOverlay");

    const profileButtons = [
        document.getElementById("profileDetailsToggle"),
        document.getElementById("mobileProfileOpen")
    ].filter(Boolean);

    function setProfileDrawer(open) {
        if (!sidebar) return;

        sidebar.classList.toggle("drawer-open", open);

        if (sidebarOverlay) {
            sidebarOverlay.classList.toggle("visible", open);
        }

        profileButtons.forEach((button) => {
            button.setAttribute("aria-expanded", String(open));
        });

        document.body.classList.toggle("profile-drawer-open", open);
    }

    profileButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (!sidebar) return;
            setProfileDrawer(!sidebar.classList.contains("drawer-open"));
        });
    });

    if (sidebarOverlay) {
        sidebarOverlay.addEventListener("click", () => setProfileDrawer(false));
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") setProfileDrawer(false);
    });

    if (sidebar) {
        sidebar.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => setProfileDrawer(false));
        });
    }

    /* =========================================================
       LANGUAGE TRANSLATION ENGINE
    ========================================================= */
    const translations = {
        "About Me": "نبذة عني",
        "MyWorks": "أعمالي",
        "Skills": "المهارات",
        "About": "نبذة",
        "me": "عني",
        "My recent": "أحدث",
        "works": "الأعمال",
        "Projects, research papers, events, and conferences — click any item to see the full details.": "مشروعات وأوراق علمية وفعاليات ومؤتمرات — اختر أي عنصر لعرض التفاصيل.",
        "All": "الكل",
        "Projects": "المشروعات",
        "Papers": "الأوراق العلمية",
        "Events": "الفعاليات",
        "Conferences": "المؤتمرات",
        "Skills &": "المهارات و",
        "Experience": "الخبرات",
        "What I do best": "أبرز مهاراتي",
        "Desktop App Development": "تطوير تطبيقات سطح المكتب",
        "Databases & Data Modeling": "قواعد البيانات ونمذجة البيانات",
        "Object-Oriented Programming": "البرمجة كائنية التوجه",
        "Web Development": "تطوير الويب",
        "Problem Solving & Algorithms": "حل المشكلات والخوارزميات",
        "Version Control & Collaboration": "إدارة الإصدارات والعمل الجماعي",
        "Tools & Technologies": "الأدوات والتقنيات",
        "Experience & Activities": "الخبرات والأنشطة",
        "Available for opportunities": "متاح للفرص المهنية",
        "Hire Me": "تواصل للتوظيف",
        "Download Cv": "تحميل السيرة الذاتية",
        "Get in touch": "تواصل معي",
        "Top Skills": "أهم المهارات",
        "Back to works": "العودة إلى الأعمال",
        "Overview": "نظرة عامة",
        "Highlights": "أبرز النقاط",
        "Technologies": "التقنيات",
        "Links": "الروابط",
        "Related items": "عناصر ذات صلة",
        "← Explore more works": "← استكشف المزيد من الأعمال",
        "Profile details": "تفاصيل الملف الشخصي",
        "Details": "التفاصيل",
        "Software Developer": "مطور برمجيات",
        "Built by": "تصميم وتطوير",
        "Open to remote opportunities": "متاح للعمل عن بُعد",
        "Software Development": "تطوير البرمجيات",
        "HR & Volunteering": "الموارد البشرية والتطوع",
        "Administration & IT Training": "الإدارة والتدريب التقني",
        "Additional Experience": "خبرات إضافية",
        "Date:": "التاريخ:",
        "Duration:": "المدة:",
        "Role:": "الدور:",
        "More images": "صور إضافية",
        "Image 2": "الصورة 2",
        "Image 3": "الصورة 3",
        "No external links available.": "لا توجد روابط خارجية متاحة.",
        "Item not found": "لم يتم العثور على العنصر",
        "Sorry, we couldn't find the item you're looking for.": "عذرًا، لم نعثر على العنصر الذي تبحث عنه.",
        "I'M Mohammed Badreldeen": "أنا محمد برالدين",
        "I build practical desktop applications with C# and .NET, and explore web and mobile development with HTML, CSS, JavaScript, Flutter and Dart.": "أبني تطبيقات سطح مكتب عملية باستخدام C# و .NET، وأستكشف تطوير الويب والجوال باستخدام HTML و CSS و JavaScript و Flutter و Dart.",
        "I build practical desktop & web applications with C#, .NET, Java and Python — focused on clean architecture and real-world problems.": "أبني تطبيقات عملية لسطح المكتب والويب باستخدام C# و .NET و Java و Python — مع التركيز على البنية النظيفة والمشكلات الواقعية.",
        "Wad Madani, Sudan · Open to remote opportunities": "ود مدني، السودان · متاح للعمل عن بُعد",
        "Sudan · Remote friendly": "السودان · متاح للعمل عن بُعد",
        "Software Developer ·": "مطور برمجيات ·",
        "Software Developer · C# / .NET": "مطور برمجيات · C# / .NET",
        "Soft Skills": "مهارات شخصية",
        "Reporting": "إعداد التقارير",
        "Technical Skills": "مهارات تقنية",
        "Project": "مشروع",
        "Research Paper": "ورقة علمية",
        "Conference": "مؤتمر",
        "Events": "فعالية",
        "IEEE University of Gezira Student Branch": "فرع طلاب IEEE جامعة الجزيرة",
        "Active Member & Volunteer": "عضو نشط ومتطوع",
        "Freelance Software Development": "تطوير برمجيات مستقل",
        "Solo Developer": "مطور فردي",
        "Human Resources Coordinator": "منسق الموارد البشرية",
        "HR Volunteer & Technical Support": "متطوع موارد بشرية ودعم فني",
        "Human Resources": "الموارد البشرية",
        "Secretary & Administrative Support": "سكرتير ودعم إداري",
        "Technical Team Member": "عضو فريق فني",
        "IT Support Trainee": "متدرب دعم فني",
        "Google Developer Student Clubs (GDSC)": "نوادي طلاب مطوري جوجل (GDSC)",
        "LCOY Gezira – Local Conference of Youth": "LCOY الجزيرة - المؤتمر المحلي للشباب",
        "Sudanese Standards and Metrology Organization": "الهيئة السودانية للمواصفات والمقاييس",
        "Information Center of Gezira State": "مركز معلومات ولاية الجزيرة",
        "2023 — Present": "2023 — الآن",
        "May 2025 – Aug 2026": "مايو 2025 – أغسطس 2026",
        "Volunteer Experience": "خبرة تطوعية",
        "HR Experience": "خبرة في الموارد البشرية",
        "One Year – National Service": "سنة واحدة – الخدمة الوطنية",
        "2020 · 3 Months": "2020 · 3 أشهر",
        "Organizing and volunteering in technical events, workshops, and student activities. Collaborating with a multidisciplinary team to deliver IEEE activities, and representing the branch at conferences.": "تنظيم والتطوع في الفعاليات التقنية وورش العمل والأنشطة الطلابية. التعاون مع فريق متعدد التخصصات لتقديم أنشطة IEEE، وتمثيل الفرع في المؤتمرات.",
        "Building small desktop and web applications for local clients and personal projects. Focus on clean architecture, offline-first desktop apps, and user-friendly interfaces.": "بناء تطبيقات سطح مكتب وويب صغيرة للعملاء المحليين والمشاريع الشخصية. التركيز على البنية النظيفة وتطبيقات سطح المكتب التي تعمل دون اتصال وواجهات سهلة الاستخدام.",
        "Led human resources activities, supported volunteer engagement, coordinated HR team operations, and contributed to team restructuring and organizational development. Helped improve volunteer participation through recruitment, performance evaluation, and team development initiatives.": "قيادة أنشطة الموارد البشرية، ودعم مشاركة المتطوعين، وتنسيق عمليات فريق الموارد البشرية، والمساهمة في إعادة هيكلة الفريق والتطوير التنظيمي. ساعد في تحسين مشاركة المتطوعين من خلال التوظيف وتقييم الأداء ومبادرات تطوير الفريق.",
        "Contributed to human resources activities while supporting technical operations. Collaborated with team members, assisted with organizational tasks, and supported initiatives aimed at strengthening volunteer engagement and team performance.": "المساهمة في أنشطة الموارد البشرية مع دعم العمليات التقنية. التعاون مع أعضاء الفريق، والمساعدة في المهام التنظيمية، ودعم المبادرات الرامية إلى تعزيز مشاركة المتطوعين وأداء الفريق.",
        "Gained exposure to the human resources field, building an understanding of HR practices and the role of people management in organizational development.": "اكتساب خبرة في مجال الموارد البشرية، وبناء فهم لممارسات الموارد البشرية ودور إدارة الأفراد في التطوير التنظيمي.",
        "Handled administrative and secretarial tasks, maintained records and documentation, organized data, and supported computer-based office operations. Also contributed to IT support and administrative workflows within the organization.": "التعامل مع المهام الإدارية والسكرتارية، والحفاظ على السجلات والوثائق، وتنظيم البيانات، ودعم عمليات المكتب المحوسبة. كما ساهم في دعم تكنولوجيا المعلومات وسير العمل الإداري داخل المنظمة.",
        "Contributed to technical team activities, collaborated with fellow technology enthusiasts, and supported knowledge-sharing initiatives within the student developer community.": "المساهمة في أنشطة الفريق الفني، والتعاون مع زملاء التكنولوجيا، ودعم مبادرات تبادل المعرفة داخل مجتمع مطوري الطلاب.",
        "Managed HR operations for the local climate conference, overseeing volunteer recruitment, team coordination, task allocation, communication, and volunteer engagement. Supported team organization and ensured effective collaboration to achieve the conference objectives.": "إدارة عمليات الموارد البشرية للمؤتمر المناخي المحلي، والإشراف على توظيف المتطوعين، وتنسيق الفريق، وتوزيع المهام، والتواصل، ومشاركة المتطوعين. دعم تنظيم الفريق وضمان التعاون الفعال لتحقيق أهداف المؤتمر.",
        "Received practical training in computer maintenance, hardware troubleshooting, and computer networking. Developed foundational technical skills in diagnosing computer issues, maintaining hardware, and understanding network infrastructure and connectivity.": "تلقى تدريبًا عمليًا في صيانة الكمبيوتر واستكشاف أخطاء الأجهزة وإصلاحها وشبكات الكمبيوتر. تطوير المهارات التقنية الأساسية في تشخيص مشاكل الكمبيوتر، وصيانة الأجهزة، وفهم البنية التحتية للشبكة والاتصال."
    };

    const originalText = new WeakMap();

    function applyLanguage(language) {
        const arabic = language === "ar";
        document.documentElement.lang = arabic ? "ar" : "en";
        document.documentElement.dir = arabic ? "rtl" : "ltr";

        const toggle = document.getElementById("languageToggle");
        if (toggle) {
            toggle.textContent = arabic ? "English" : "العربية";
        }
        document.body.classList.toggle("language-ar", arabic);

        // TreeWalker translates text nodes precisely without breaking HTML tags/icons
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT, {
                acceptNode: function(node) {
                    if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
                    const parent = node.parentElement;
                    if (!parent) return NodeFilter.FILTER_REJECT;
                    if (parent.tagName === "SCRIPT" || parent.tagName === "STYLE") return NodeFilter.FILTER_REJECT;
                    // Ignore elements that are dynamic or shouldn't be translated
                    if (parent.classList.contains("typed-text") || parent.id === "typedText" || parent.classList.contains("caret") || parent.id === "languageToggle") {
                        return NodeFilter.FILTER_REJECT;
                    }
                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        );

        let node;
        const textNodes = [];
        while ((node = walker.nextNode())) {
            textNodes.push(node);
        }

        textNodes.forEach((textNode) => {
            if (!originalText.has(textNode)) {
                originalText.set(textNode, textNode.nodeValue);
            }
            const original = originalText.get(textNode);
            const trimmed = original.trim();

            if (arabic && translations[trimmed]) {
                const leading = original.match(/^\s*/)[0];
                const trailing = original.match(/\s*$/)[0];
                textNode.nodeValue = leading + translations[trimmed] + trailing;
            } else if (!arabic) {
                textNode.nodeValue = original;
            }
        });
    }

    const languageToggle = document.getElementById("languageToggle");
    let currentLanguage = "en";

    try {
        currentLanguage = localStorage.getItem("portfolio-language") || "en";
    } catch (_) {
        currentLanguage = "en";
    }

    if (languageToggle) {
        languageToggle.addEventListener("click", () => {
            currentLanguage = currentLanguage === "en" ? "ar" : "en";
            try { localStorage.setItem("portfolio-language", currentLanguage); } catch (e) {}
            location.reload(); // Reload to ensure dynamic content translates properly
        });
    }

    /* Organize existing experience entries into readable groups. */
    const timeline = document.querySelector(".timeline");

    if (timeline && !timeline.dataset.grouped) {
        const entries = Array.from(
            timeline.querySelectorAll(":scope > .timelineItem")
        );

        const groups = [{
                title: "Software Development",
                match: (item) => /Freelance Software Development/i.test(item.textContent)
            },
            {
                title: "HR & Volunteering",
                match: (item) => /IEEE University of Gezira|NextSudan HR|LCOY Gezira|Google Developer Student Clubs/i.test(item.textContent)
            },
            {
                title: "Administration & IT Training",
                match: (item) => /Sudanese Standards and Metrology|Information Center of Gezira State/i.test(item.textContent)
            }
        ];

        const assigned = new Set();

        // Translate group headers if in Arabic mode
        const groupTitleMap = {
            "Software Development": "تطوير البرمجيات",
            "HR & Volunteering": "الموارد البشرية والتطوع",
            "Administration & IT Training": "الإدارة والتدريب التقني",
            "Additional Experience": "خبرات إضافية"
        };

        groups.forEach((group) => {
            const matchingItems = entries.filter(
                (entry) => !assigned.has(entry) && group.match(entry)
            );

            if (!matchingItems.length) return;

            const wrapper = document.createElement("section");
            wrapper.className = "timelineGroup";

            const heading = document.createElement("h3");
            heading.className = "timelineGroupTitle";

            // Use translated title if Arabic
            heading.textContent = (currentLanguage === "ar" && groupTitleMap[group.title]) ? groupTitleMap[group.title] : group.title;

            wrapper.appendChild(heading);

            matchingItems.forEach((entry) => {
                assigned.add(entry);
                wrapper.appendChild(entry);
            });

            timeline.appendChild(wrapper);
        });

        const remainingItems = entries.filter((entry) => !assigned.has(entry));

        if (remainingItems.length) {
            const wrapper = document.createElement("section");
            wrapper.className = "timelineGroup";

            const heading = document.createElement("h3");
            heading.className = "timelineGroupTitle";
            heading.textContent = (currentLanguage === "ar" && groupTitleMap["Additional Experience"]) ? groupTitleMap["Additional Experience"] : "Additional Experience";

            wrapper.appendChild(heading);

            remainingItems.forEach((entry) => wrapper.appendChild(entry));
            timeline.appendChild(wrapper);
        }

        timeline.dataset.grouped = "true";
    }

    /* Apply translation on page load if Arabic is selected */
    if (currentLanguage === "ar") {
        applyLanguage("ar");
    }

    /* Keep copyright years current. */
    const currentYear = String(new Date().getFullYear());

    ["year", "yearSide"].forEach((id) => {
        const year = document.getElementById(id);
        if (year) year.textContent = currentYear;
    });

})();