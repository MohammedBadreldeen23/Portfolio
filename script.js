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
            }, {
                id: "islamic-quiz",
                category: "projects",
                categoryLabel: "Mobile & Web",
                title: "Islamic Quiz — Mobile & Web",
                subtitle: "An interactive Islamic quiz app built with Flutter, available on mobile and web.",
                image: "SRC/PIC/islamic-quiz-1.png",
                images: [
                    "SRC/PIC/islamic-quiz-1.png",
                    "SRC/PIC/islamic-quiz-2.png",
                    "SRC/PIC/islamic-quiz-3.png",
                    "SRC/PIC/islamic-quiz-4.png",
                    "SRC/PIC/islamic-quiz-web-1.jpg",
                    "SRC/PIC/islamic-quiz-web-2.png",
                    "SRC/PIC/islamic-quiz-web-3.png",
                    "SRC/PIC/islamic-quiz-web-4.png"
                ],
                date: "2026",
                duration: "3 weeks",
                role: "Solo Developer",
                tags: ["Flutter", "Dart", "Flutter Web", "Material 3", "Audioplayers"],
                description: "A cross-platform Islamic quiz application built with Flutter and deployed on both mobile and web. It features 30 diverse questions across aqeedah, Quran, seerah, fiqh, and companions, with sound effects, instant visual feedback, live scoring, and a modern Islamic-inspired design. The web build runs directly in the browser with no installation, while the mobile app delivers the same experience on Android and iOS.",
                highlights: [
                    "30 diverse Islamic questions across five categories",
                    "Available on both mobile (Android/iOS) and web browsers",
                    "Sound effects for correct/wrong answers and fireworks on completion",
                    "Instant visual feedback with the correct answer revealed on mistakes",
                    "Live score tracking that persists across navigation",
                    "Results screen with percentage circle and star rating (0–3)",
                    "Modern Islamic design with emerald, gold, and warm white colors",
                    "Cairo and Amiri fonts for a traditional yet highly readable feel",
                    "Code-drawn Islamic geometric pattern (no external image assets)",
                    "Fully RTL Arabic interface with responsive layout"
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
                    { label: "Read the paper (PDF)", url: "assets/last%20.pdf" }
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
                subtitle: "Finalist with a Medicine Warehouse Management System Developed in C# | IEEE UofG SB.",
                image: "SRC/PIC/Con1.jpg",
                images: ["SRC/PIC/Con1.jpg", "SRC/PIC/con2.jpg", "SRC/PIC/con3.jpg"],
                date: "2022",
                role: "Participant",
                tags: ["IEEE", "Conference", "Networking", "Uofg"],
                description: "I participated in the IEEE University of Gezira Student Branch 50 Scientific Papers Challenge and presented my Medicine Warehouse Management System, developed using C#. Reaching the final stage was a valuable milestone in my academic and technical journey. I explained the project's concept and demonstrated how software can address practical challenges in medicine warehouse management. The experience also strengthened my public speaking, technical communication, and project presentation skills.",
                highlights: [
                    "Reached the final stage of the IEEE UofG SB 50 Scientific Papers Challenge.",
                    "Developed a Medicine Warehouse Management System using C#.",
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
       IMAGE VIEWER — main image, thumbnails and full-screen lightbox.
       Shows every image listed for a work. A missing file is labelled
       "unavailable" instead of being silently removed.
    ========================================================= */

    const VIEWER_TEXT = {
        "Image unavailable": "الصورة غير متاحة",
        "Unavailable": "غير متاح",
        "Previous image": "الصورة السابقة",
        "Next image": "الصورة التالية",
        "Close image viewer": "إغلاق عارض الصور",
        "Open full-size image": "فتح الصورة بالحجم الكامل",
        "Show image": "عرض الصورة"
    };

    /* Called only after the page has loaded (inside promise callbacks). */
    function viewerTitle(title) {
        try {
            if (localStorage.getItem("portfolio-language") === "ar" && translations[title]) return translations[title];
        } catch (_) {}
        return title;
    }

    function viewerText(text) {
        let arabic = false;
        try {
            arabic = localStorage.getItem("portfolio-language") === "ar";
        } catch (_) {}
        return arabic && VIEWER_TEXT[text] ? VIEWER_TEXT[text] : text;
    }

    /* GitHub Pages is case-sensitive: "shot.PNG" and "shot.png" are different files.
       If one spelling fails, try the other once before giving up. */
    function swapExtensionCase(src) {
        return src.replace(/\.(png|jpe?g|webp|gif)$/i, (match) => {
            const ext = match.slice(1);
            const swapped = ext === ext.toUpperCase() ? ext.toLowerCase() : ext.toUpperCase();
            return "." + swapped;
        });
    }

    /* Attach a one-time fallback to an <img>. Calls onFail when both spellings fail. */
    function attachImageFallback(img, onFail) {
        let retried = false;
        img.addEventListener("error", () => {
            const original = img.dataset.src;
            if (!retried) {
                retried = true;
                const alternative = swapExtensionCase(original);
                if (alternative !== original) {
                    img.src = alternative;
                    return;
                }
            }
            img.removeAttribute("src");
            onFail();
        });
    }

    /* Probe each source once and cache the working URL (or null). */
    const resolvedImageCache = new Map();

    function resolveImageSource(src) {
        if (!resolvedImageCache.has(src)) {
            resolvedImageCache.set(src, new Promise((resolve) => {
                const tryUrl = (url, onFail) => {
                    const probe = new Image();
                    probe.onload = () => resolve(url);
                    probe.onerror = onFail;
                    probe.src = url;
                };

                tryUrl(src, () => {
                    const alternative = swapExtensionCase(src);
                    if (alternative === src) {
                        resolve(null);
                        return;
                    }
                    tryUrl(alternative, () => resolve(null));
                });
            }));
        }
        return resolvedImageCache.get(src);
    }

    /* Main image first, then extra images, without duplicates or empty paths. */
    function collectImages(item) {
        const sources = [item.image].concat(Array.isArray(item.images) ? item.images : []);
        const seen = new Set();

        return sources
            .filter((src) => typeof src === "string" && src.trim())
            .map((src) => src.trim())
            .filter((src) => {
                if (seen.has(src)) return false;
                seen.add(src);
                return true;
            });
    }

    function initImageViewer(item) {
        const hero = document.getElementById("detailHero");
        const mainImage = document.getElementById("detailImage");
        const fallback = document.getElementById("detailFallback");
        const prevButton = document.getElementById("viewerPrev");
        const nextButton = document.getElementById("viewerNext");
        const expandButton = document.getElementById("viewerExpand");
        const counter = document.getElementById("viewerCounter");
        const gallery = document.getElementById("detailGallery");
        const thumbGrid = document.getElementById("detailGalleryGrid");
        const lightbox = document.getElementById("lightbox");
        const lightboxStage = document.getElementById("lightboxStage");
        const lightboxImage = document.getElementById("lightboxImage");
        const lightboxCaption = document.getElementById("lightboxCaption");
        const lightboxClose = document.getElementById("lightboxClose");
        const lightboxPrev = document.getElementById("lightboxPrev");
        const lightboxNext = document.getElementById("lightboxNext");

        if (!hero || !mainImage) return;

        const images = collectImages(item);
        const total = images.length;
        const hasMany = total > 1;
        let current = 0;
        let mainRequest = 0;
        let lightboxRequest = 0;
        let lastFocus = null;

        if (total === 0) {
            mainImage.hidden = true;
            fallback.textContent = viewerText("Image unavailable");
            fallback.hidden = false;
            return;
        }

        /* Labels for controls that are static in HTML. */
        [
            [prevButton, "Previous image"], [nextButton, "Next image"],
            [lightboxPrev, "Previous image"], [lightboxNext, "Next image"],
            [lightboxClose, "Close image viewer"], [expandButton, "Open full-size image"]
        ].forEach(([element, label]) => {
            if (element) element.setAttribute("aria-label", viewerText(label));
        });

        [prevButton, nextButton, counter, lightboxPrev, lightboxNext].forEach((el) => {
            if (el) el.hidden = !hasMany;
        });
        if (gallery) gallery.hidden = !hasMany;

        /* Thumbnails: every image is listed; failures are labelled. */
        if (thumbGrid && hasMany) {
            thumbGrid.innerHTML = images.map((src, index) => `
                <button class="detailGalleryItem" type="button"
                        data-index="${index}" aria-pressed="false"
                        aria-label="${escapeHTML(viewerText("Show image"))} ${index + 1} / ${total}">
                    <span class="thumbFrame">
                        <img data-src="${escapeHTML(src)}" src="${escapeHTML(src)}"
                             alt="" loading="lazy" decoding="async">
                        <span class="thumbMissing">${escapeHTML(viewerText("Unavailable"))}</span>
                    </span>
                    <span class="thumbLabel">${index + 1} / ${total}</span>
                </button>
            `).join("");

            thumbGrid.querySelectorAll(".detailGalleryItem").forEach((button) => {
                const thumb = button.querySelector("img");
                attachImageFallback(thumb, () => button.classList.add("unavailable"));
            });
        }

        function updateControls() {
            if (counter) counter.textContent = `${current + 1} / ${total}`;

            if (thumbGrid) {
                thumbGrid.querySelectorAll(".detailGalleryItem").forEach((button) => {
                    const active = Number(button.dataset.index) === current;
                    button.setAttribute("aria-pressed", String(active));
                    button.classList.toggle("active", active);
                });
            }
        }

        function showMain(index) {
            current = (index + total) % total;
            updateControls();

            const request = ++mainRequest;
            resolveImageSource(images[current]).then((url) => {
                if (request !== mainRequest) return;

                if (url) {
                    mainImage.src = url;
                    mainImage.alt = `${viewerTitle(item.title)} — ${current + 1} / ${total}`;
                    mainImage.hidden = false;
                    fallback.hidden = true;
                } else {
                    mainImage.hidden = true;
                    mainImage.removeAttribute("src");
                    fallback.textContent = viewerText("Image unavailable");
                    fallback.hidden = false;
                }
            });

            /* Warm the next image so navigation feels instant. */
            if (hasMany) resolveImageSource(images[(current + 1) % total]);
        }

        function renderLightbox(index) {
            if (!lightbox) return;

            const request = ++lightboxRequest;
            resolveImageSource(images[index]).then((url) => {
                if (request !== lightboxRequest) return;

                if (url) {
                    lightboxImage.src = url;
                    lightboxImage.alt = `${viewerTitle(item.title)} — ${index + 1} / ${total}`;
                    lightboxImage.hidden = false;
                    lightboxCaption.textContent = `${index + 1} / ${total}`;
                } else {
                    lightboxImage.hidden = true;
                    lightboxImage.removeAttribute("src");
                    lightboxCaption.textContent = viewerText("Image unavailable");
                }
            });
        }

        function goTo(index) {
            showMain(index);
            if (lightbox && !lightbox.hidden) renderLightbox(current);
        }

        function openLightbox() {
            if (!lightbox) return;
            lastFocus = document.activeElement;
            renderLightbox(current);
            lightbox.hidden = false;
            document.body.classList.add("lightbox-open");
            if (lightboxClose) lightboxClose.focus();
        }

        function closeLightbox() {
            if (!lightbox || lightbox.hidden) return;
            lightbox.hidden = true;
            document.body.classList.remove("lightbox-open");
            if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
        }

        /* Thumbnail clicks. Scroll the viewer into view only if it is off-screen. */
        if (thumbGrid) {
            thumbGrid.addEventListener("click", (event) => {
                const button = event.target.closest(".detailGalleryItem");
                if (!button || !thumbGrid.contains(button)) return;

                goTo(Number(button.dataset.index));

                if (hero.getBoundingClientRect().top < 0) {
                    hero.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            });
        }

        if (prevButton) prevButton.addEventListener("click", () => goTo(current - 1));
        if (nextButton) nextButton.addEventListener("click", () => goTo(current + 1));
        if (expandButton) expandButton.addEventListener("click", openLightbox);
        mainImage.addEventListener("click", openLightbox);
        mainImage.style.cursor = "zoom-in";

        if (lightboxPrev) lightboxPrev.addEventListener("click", () => goTo(current - 1));
        if (lightboxNext) lightboxNext.addEventListener("click", () => goTo(current + 1));
        if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);

        /* Clicking the dark area (not the image) closes the lightbox. */
        if (lightboxStage) {
            lightboxStage.addEventListener("click", (event) => {
                if (event.target === lightboxStage) closeLightbox();
            });
        }

        document.addEventListener("keydown", (event) => {
            if (!lightbox || lightbox.hidden) return;

            if (event.key === "Escape") {
                closeLightbox();
            } else if (event.key === "ArrowRight" && hasMany) {
                goTo(current + 1);
            } else if (event.key === "ArrowLeft" && hasMany) {
                goTo(current - 1);
            } else if (event.key === "Tab") {
                /* Keep keyboard focus inside the open lightbox. */
                const focusable = [lightboxClose, lightboxPrev, lightboxNext]
                    .filter((el) => el && !el.hidden);
                const first = focusable[0];
                const last = focusable[focusable.length - 1];

                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last.focus();
                } else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first.focus();
                }
            }
        });

        /* Swipe left/right on touch screens. */
        function addSwipe(element) {
            if (!element) return;
            let startX = null;

            element.addEventListener("touchstart", (event) => {
                startX = event.changedTouches[0].clientX;
            }, { passive: true });

            element.addEventListener("touchend", (event) => {
                if (startX === null || !hasMany) return;
                const deltaX = event.changedTouches[0].clientX - startX;
                startX = null;
                if (Math.abs(deltaX) > 45) goTo(current + (deltaX < 0 ? 1 : -1));
            }, { passive: true });
        }

        addSwipe(hero);
        addSwipe(lightboxStage);

        showMain(0);
    }

    /* =========================================================
       INDEX PAGE — RENDER WORKS + FILTERS
    ========================================================= */

    const worksGrid = document.getElementById("worksGrid");

    /* Technology filter groups. Matching uses each item's existing tags only;
       a group button is shown only if at least one work matches it. */
    const TECH_GROUPS = [
        { key: "csharp", label: "C# / .NET", tags: ["c#", ".net", "windows forms"] },
        { key: "flutter", label: "Flutter / Dart", tags: ["flutter", "dart", "flutter web"] },
        { key: "web", label: "HTML / CSS / JS", tags: ["html", "css", "javascript"] }
    ];

    function techKeysOf(item) {
        const tags = item.tags.map((tag) => tag.toLowerCase());
        return TECH_GROUPS
            .filter((group) => group.tags.some((tag) => tags.includes(tag)))
            .map((group) => group.key);
    }

    if (worksGrid) {
        SITE_DATA.works.forEach((item) => {
            const li = document.createElement("li");
            li.className = "workItem";
            li.setAttribute("data-category", item.category);
            li.setAttribute("data-tech", techKeysOf(item).join(" "));

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
                        <span class="workCta">View details
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                        </span>
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

        /* Build technology buttons from the data (only groups that have works). */
        const techFilter = document.getElementById("techFilter");
        const activeTechGroups = TECH_GROUPS.filter((group) =>
            SITE_DATA.works.some((item) => techKeysOf(item).includes(group.key))
        );

        if (techFilter && activeTechGroups.length) {
            techFilter.innerHTML =
                '<button class="filter-btn active" type="button" data-tech="all" aria-pressed="true">All technologies</button>' +
                activeTechGroups.map((group) =>
                    `<button class="filter-btn" type="button" data-tech="${group.key}" aria-pressed="false">${escapeHTML(group.label)}</button>`
                ).join("");
        } else if (techFilter) {
            techFilter.hidden = true;
        }

        /* Category and technology filters combine (AND). */
        const filterState = { category: "all", tech: "all" };

        function applyFilters() {
            document.querySelectorAll(".workItem").forEach((workItem) => {
                const categoryOk = filterState.category === "all" ||
                    filterState.category === workItem.getAttribute("data-category");
                const techOk = filterState.tech === "all" ||
                    workItem.getAttribute("data-tech").split(" ").includes(filterState.tech);
                workItem.classList.toggle("hidden", !(categoryOk && techOk));
            });
        }

        function bindFilterGroup(container, attribute, stateKey) {
            if (!container) return;
            container.addEventListener("click", (event) => {
                const button = event.target.closest(".filter-btn");
                if (!button || !container.contains(button)) return;

                container.querySelectorAll(".filter-btn").forEach((other) => {
                    const isActive = other === button;
                    other.classList.toggle("active", isActive);
                    other.setAttribute("aria-pressed", String(isActive));
                });

                filterState[stateKey] = button.getAttribute(attribute);
                applyFilters();
            });
        }

        bindFilterGroup(document.getElementById("categoryFilter"), "data-filter", "category");
        bindFilterGroup(techFilter, "data-tech", "tech");
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

            /* Image viewer: main image, thumbnails and lightbox */
            initImageViewer(item);

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

    /* =========================================================
       CERTIFICATES — add yours here. Each entry becomes a card.
       image: optional picture path (SRC/PIC/...). file: optional PDF/image link.
       category: "University" | "Experience" | "Course" (any label works).
    ========================================================= */
    const CERTIFICATES = [
        { title: "Higher Diploma Certificate", issuer: "University of Gezira", year: "2026", category: "University", image: "", file: "" },
        { title: "Computer Science Degree Certificate", issuer: "Wad Madani Ahlia University", year: "2022", category: "University", image: "", file: "" }
    ];

    const certGrid = document.getElementById("certGrid");

    if (certGrid) {
        certGrid.innerHTML = CERTIFICATES.map((cert) => {
            const preview = cert.image
                ? `<img src="${escapeHTML(cert.image)}" alt="${escapeHTML(cert.title)}" loading="lazy" decoding="async">`
                : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="9" r="5"/><path d="M9 13.5L8 21l4-2 4 2-1-7.5"/></svg>`;
            const link = cert.file
                ? `<a class="certLink" href="${escapeHTML(cert.file)}" target="_blank" rel="noopener">View certificate</a>`
                : "";
            return `
                <li class="certCard">
                    <div class="certPreview">${preview}</div>
                    <div class="certBody">
                        <span class="workBadge">${escapeHTML(cert.category)}</span>
                        <h3>${escapeHTML(cert.title)}</h3>
                        <p>${escapeHTML(cert.issuer)} · ${escapeHTML(cert.year)}</p>
                        ${link}
                    </div>
                </li>`;
        }).join("");
    }

    /* Typing effect */
    const typedText = document.getElementById("typedText");
    let arabicSelected = false;
    try { arabicSelected = localStorage.getItem("portfolio-language") === "ar"; } catch (_) {}

    const roles = arabicSelected
        ? ["مطوّر برمجيات", "مطوّر C# / .NET", "مطوّر تطبيقات سطح المكتب", "حلّال مشكلات"]
        : ["Software Developer", "C# / .NET Developer", "Desktop App Builder", "Problem Solver"];

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
        "All technologies": "كل التقنيات",
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
        "Project images": "صور المشروع",
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


    /* Full Arabic coverage for the sections and project data added/used after the first release. */
    Object.assign(translations, {
        "Skip to content": "انتقل إلى المحتوى",
        "Mohammed Badreldeen": "محمد بدر الدين البلال",
        "· Made with": "· صُنع بـ",
        "My Works": "أعمالي", "Education": "التعليم", "Certificates": "الشهادات",
        "I'm Mohammed Badreldeen": "أنا محمد بدر الدين البلال",
        "View my work ↓": "شاهد أعمالي ↓",
        "I build practical desktop applications with C# and .NET, and explore web and mobile development with HTML, CSS, JavaScript, Flutter and Dart.": "أبني تطبيقات سطح مكتب عملية باستخدام C# و .NET، وأستكشف تطوير الويب والجوال باستخدام HTML و CSS و JavaScript و Flutter و Dart.",
        "Hi, I'm Mohamed Badreldeen Albalal, a Software Developer with a background in Computer Science and a strong interest in building practical software solutions that solve real-world problems. My technical interests include C#, .NET, Windows Forms, Java, Python, Object-Oriented Programming (OOP), and database technologies such as SQL Server and SQLite. I enjoy developing desktop applications, working with data, and continuously expanding my technical skills to create reliable, user-friendly solutions.": "مرحبًا، أنا محمد بدر الدين البلال، مطوّر برمجيات خلفيتي في علوم الحاسوب، ولديّ اهتمام كبير ببناء حلول برمجية عملية تعالج مشكلات واقعية. تشمل اهتماماتي التقنية C# و .NET و Windows Forms و Java و Python والبرمجة كائنية التوجّه (OOP) وقواعد البيانات مثل SQL Server و SQLite. أستمتع بتطوير تطبيقات سطح المكتب والعمل مع البيانات وتطوير مهاراتي التقنية باستمرار لبناء حلول موثوقة وسهلة الاستخدام.",
        "Beyond programming, I have experience in Human Resources (HR), team coordination, and volunteering, particularly through my involvement with IEEE University of Gezira Student Branch. These experiences have strengthened my communication, teamwork, organizational, and problem-solving skills, helping me understand that successful software development is not just about writing code, but also about understanding people, their needs, and how technology can improve their work.": "إلى جانب البرمجة، لديّ خبرة في الموارد البشرية وتنسيق الفرق والعمل التطوعي، خاصةً من خلال مشاركتي في فرع طلاب IEEE بجامعة الجزيرة. عززت هذه التجارب مهاراتي في التواصل والعمل الجماعي والتنظيم وحل المشكلات، وجعلتني أدرك أن نجاح تطوير البرمجيات لا يقتصر على كتابة الكود، بل يشمل فهم الناس واحتياجاتهم وكيف تُحسّن التقنية عملهم.",
        "I believe in continuous learning, collaboration, and building solutions that create real value. My goal is to combine technology, creativity, and management skills to develop meaningful software, contribute to innovative projects, and grow as a developer. Let's connect and turn ideas into practical solutions.": "أؤمن بالتعلّم المستمر والتعاون وبناء حلول تصنع قيمة حقيقية. هدفي الجمع بين التقنية والإبداع والمهارات الإدارية لتطوير برمجيات ذات معنى، والمساهمة في مشاريع مبتكرة، والنمو كمطوّر. دعونا نتواصل ونحوّل الأفكار إلى حلول عملية.",
        "Projects, research papers, events and conferences. Click any card to open its full details.": "مشاريع وأوراق بحثية وفعاليات ومؤتمرات. اضغط على أي بطاقة لفتح تفاصيلها الكاملة.",
        "View details": "عرض التفاصيل",
        "Mobile & Web": "جوال وويب",
        "Software Engineering": "هندسة البرمجيات", "Design Patterns": "أنماط التصميم", "Networking": "التواصل المهني", "Social": "اجتماعي", "Tech Summit": "قمة التقنية",
        "Pharmaceutical Warehouse System": "نظام مستودع الأدوية",
        "A desktop application for medicine warehouse management.": "تطبيق سطح مكتب لإدارة مستودعات الأدوية.",
        "Personal Portfolio Website": "موقع الملف الشخصي",
        "A responsive portfolio built with semantic HTML, modern CSS and vanilla JavaScript.": "موقع ملف شخصي متجاوب مبني بـ HTML دلالي وCSS حديث وJavaScript خالصة.",
        "Islamic Quiz — Mobile & Web": "مسابقة إسلامية — جوال وويب",
        "An interactive Islamic quiz app built with Flutter, available on mobile and web.": "تطبيق مسابقة إسلامية تفاعلي مبني بـ Flutter، متاح على الجوال والويب.",
        "Implementation of a Medicine Warehouse System": "تنفيذ نظام مستودع أدوية",
        "A research paper on designing and implementing a medicine warehouse management system.": "ورقة بحثية عن تصميم وتنفيذ نظام لإدارة مستودعات الأدوية.",
        "IEEE UofG SB Programming Competition": "مسابقة البرمجة — فرع IEEE بجامعة الجزيرة",
        "Programming Contestant | Problem-Solving | Competitive Programming.": "متسابق برمجة | حل المشكلات | البرمجة التنافسية.",
        "IEEE UOFG SB Social Event": "فعالية اجتماعية — فرع IEEE بجامعة الجزيرة",
        "Connecting Members Through Fun, Friendship, and Teamwork": "تقريب الأعضاء من خلال المرح والصداقة والعمل الجماعي",
        "IEEE Day — IEEE UofG SB": "يوم IEEE — فرع IEEE بجامعة الجزيرة",
        "Celebrating the IEEE community, volunteering, and technology": "الاحتفاء بمجتمع IEEE والعمل التطوعي والتقنية",
        "From Code to Presentation: 50 Scientific Papers Challenge": "من الكود إلى العرض: تحدي الخمسين ورقة علمية",
        "Finalist with a Medicine Warehouse Management System Developed in C# | IEEE UofG SB.": "متأهل للنهائيات بنظام إدارة مستودع أدوية مطوَّر بلغة C# | فرع IEEE بجامعة الجزيرة.",
        "Data Structures · Logic": "هياكل البيانات · المنطق",
        "Led human resources activities, supported volunteer engagement, coordinated HR team operations, and contributed to team restructuring and organizational development. Helped improve volunteer participation through recruitment, performance evaluation, and team development initiatives.": "قدت أنشطة الموارد البشرية، ودعمت إشراك المتطوعين، ونسّقت عمليات فريق الموارد البشرية، وساهمت في إعادة هيكلة الفريق والتطوير التنظيمي. ساعدت في رفع مشاركة المتطوعين عبر الاستقطاب وتقييم الأداء ومبادرات تطوير الفريق.",
        "May 2025 – Aug 2025": "مايو 2025 – أغسطس 2025",
        "Managed HR operations for the local climate conference, overseeing volunteer recruitment, team coordination, task allocation, communication, and volunteer engagement. Supported team organization and ensured effective collaboration to achieve the conference objectives.": "أدرت عمليات الموارد البشرية للمؤتمر المحلي للمناخ، وأشرفت على استقطاب المتطوعين وتنسيق الفريق وتوزيع المهام والتواصل وإشراك المتطوعين. دعمت تنظيم الفريق وضمنت التعاون الفعّال لتحقيق أهداف المؤتمر.",
        "Educational": "المسار", "Path": "التعليمي",
        "My academic journey, from primary school to postgraduate studies.": "رحلتي الأكاديمية، من المرحلة الأساسية إلى الدراسات العليا.",
        "Higher Diploma": "دبلوم عالٍ", "University of Gezira": "جامعة الجزيرة",
        "Grade: Good": "التقدير: جيد",
        "Computer Science": "علوم الحاسوب", "Wad Madani Ahlia University": "جامعة ود مدني الأهلية",
        "Secondary School": "المرحلة الثانوية", "Nokhba Wad Madani": "نخبة ود مدني",
        "Primary School": "المرحلة الأساسية", "Al-Bandar": "البندر",
        "Certificates &": "الشهادات", "Credentials": "والمؤهلات",
        "Academic and professional certificates.": "الشهادات الأكاديمية والمهنية.",
        "University": "جامعية",
        "Higher Diploma Certificate": "شهادة الدبلوم العالي",
        "University of Gezira · 2026": "جامعة الجزيرة · 2026",
        "Computer Science Degree Certificate": "شهادة علوم الحاسوب",
        "Wad Madani Ahlia University · 2022": "جامعة ود مدني الأهلية · 2022",
        "Let's work together": "لنعمل معًا",
        "Have a project or an opportunity in mind? Send me an email and I will reply as soon as possible.": "هل لديك مشروع أو فرصة عمل؟ راسلني عبر البريد وسأردّ في أقرب وقت.",
        "Email me": "راسلني",
        "Profile sidebar": "الشريط الجانبي للملف الشخصي",
        "Close profile details": "إغلاق تفاصيل الملف الشخصي",
        "Back to top": "العودة للأعلى",
        "Mohammed Badreldeen Logo": "شعار محمد بدر الدين البلال",
        "Switch language": "تغيير اللغة", "Open menu": "فتح القائمة",
        "Main navigation": "التنقل الرئيسي", "Arrow": "سهم",
        "Hero illustration": "رسم توضيحي", "About me illustration": "رسم توضيحي عني",
        "Filter works by type": "تصفية الأعمال حسب النوع",
        "Filter works by technology": "تصفية الأعمال حسب التقنية",
        "Back to home": "العودة للرئيسية", "Project image viewer": "عارض صور المشروع",
        "3 months": "3 أشهر", "2 weeks": "أسبوعان", "3 weeks": "3 أسابيع",
        "Designer & Developer": "مصمم ومطوّر", "Author": "المؤلف", "Participant": "مشارك",
        "HR Coordinator": "منسق الموارد البشرية",
        "No related items yet.": "لا توجد عناصر ذات صلة بعد.",
        "📄 Read the paper (PDF) →": "📄 اقرأ الورقة (PDF) ←",
        "A desktop application built with C# and Windows Forms to support medicine warehouse operations. It helps staff maintain medicine records through a straightforward interface backed by a SQL Server database. The project focuses on reliable data handling, practical workflows, and a clean object-oriented structure.": "تطبيق سطح مكتب مبني بـ C# وWindows Forms لدعم عمليات مستودع الأدوية. يساعد الموظفين على إدارة سجلات الأدوية عبر واجهة بسيطة مدعومة بقاعدة بيانات SQL Server. يركّز المشروع على موثوقية التعامل مع البيانات وسير عمل عملي وبنية كائنية نظيفة.",
        "Create, view, update, and delete medicine records": "إضافة سجلات الأدوية وعرضها وتعديلها وحذفها",
        "Expiry-date tracking and overdue alerts": "متابعة تواريخ الصلاحية وتنبيهات المنتهي منها",
        "Search and filter medicine records": "البحث في سجلات الأدوية وتصفيتها",
        "Reports and data export functionality": "التقارير وتصدير البيانات",
        "Local SQL Server database integration": "التكامل مع قاعدة بيانات SQL Server محلية",
        "A modern, static portfolio designed to showcase projects, skills, and experience. The focus was on clean structure, accessibility, and a smooth experience across every device — without any external dependencies.": "موقع ملف شخصي ثابت وحديث لعرض المشاريع والمهارات والخبرات. ركّزتُ على البنية النظيفة وسهولة الوصول وتجربة سلسة على كل الأجهزة، دون أي اعتماديات خارجية.",
        "Fully responsive layout for all screen sizes": "تصميم متجاوب بالكامل لجميع أحجام الشاشات",
        "Smooth scroll and reveal animations": "تمرير سلس ورسوم ظهور متحركة",
        "Accessible semantic markup": "ترميز دلالي سهل الوصول",
        "Zero dependencies — pure HTML, CSS and JS": "بلا اعتماديات — HTML وCSS وJS خالصة",
        "A cross-platform Islamic quiz application built with Flutter and deployed on both mobile and web. It features 30 diverse questions across aqeedah, Quran, seerah, fiqh, and companions, with sound effects, instant visual feedback, live scoring, and a modern Islamic-inspired design. The web build runs directly in the browser with no installation, while the mobile app delivers the same experience on Android and iOS.": "تطبيق مسابقة إسلامية متعدد المنصات مبني بـ Flutter ومنشور على الجوال والويب. يضم 30 سؤالًا متنوعًا في العقيدة والقرآن والسيرة والفقه والصحابة، مع مؤثرات صوتية وتغذية راجعة بصرية فورية ونتيجة مباشرة وتصميم حديث بطابع إسلامي. نسخة الويب تعمل مباشرة في المتصفح دون تثبيت، وتطبيق الجوال يقدّم التجربة نفسها على أندرويد وiOS.",
        "30 diverse Islamic questions across five categories": "30 سؤالًا إسلاميًا متنوعًا في خمسة أقسام",
        "Available on both mobile (Android/iOS) and web browsers": "متاح على الجوال (أندرويد/iOS) ومتصفحات الويب",
        "Sound effects for correct/wrong answers and fireworks on completion": "مؤثرات صوتية للإجابات الصحيحة والخاطئة وألعاب نارية عند الإتمام",
        "Instant visual feedback with the correct answer revealed on mistakes": "تغذية راجعة بصرية فورية مع إظهار الإجابة الصحيحة عند الخطأ",
        "Live score tracking that persists across navigation": "متابعة مباشرة للنتيجة تبقى أثناء التنقل",
        "Results screen with percentage circle and star rating (0–3)": "شاشة نتائج بدائرة النسبة المئوية وتقييم بالنجوم (0–3)",
        "Modern Islamic design with emerald, gold, and warm white colors": "تصميم إسلامي حديث بألوان الزمرد والذهب والأبيض الدافئ",
        "Cairo and Amiri fonts for a traditional yet highly readable feel": "خطا القاهرة والأميري لإحساس تقليدي وسهل القراءة",
        "Code-drawn Islamic geometric pattern (no external image assets)": "نقش هندسي إسلامي مرسوم بالكود (دون صور خارجية)",
        "Fully RTL Arabic interface with responsive layout": "واجهة عربية كاملة من اليمين لليسار بتصميم متجاوب",
        "This paper examines the design and implementation of a medicine warehouse information system. It discusses the importance of managing warehouse data reliably and describes a flexible database structure intended to make records easier to maintain and update. The study used a descriptive approach and presented a working system for medicine, supplier, customer, and sales records.": "تتناول هذه الورقة تصميم وتنفيذ نظام معلومات لمستودع الأدوية. وتناقش أهمية إدارة بيانات المستودع بموثوقية، وتصف بنية قاعدة بيانات مرنة تسهّل صيانة السجلات وتحديثها. استخدمت الدراسة المنهج الوصفي وقدّمت نظامًا عاملًا لسجلات الأدوية والموردين والعملاء والمبيعات.",
        "A flexible database structure designed for easier updates": "بنية قاعدة بيانات مرنة تسهّل التحديث",
        "Medicine warehouse inventory management": "إدارة مخزون مستودع الأدوية",
        "Records for suppliers, customers, and medicine categories": "سجلات للموردين والعملاء وفئات الأدوية",
        "Sales invoices and transaction records": "فواتير المبيعات وسجلات المعاملات",
        "Participated as a contestant in an open programming competition organized by the IEEE University of Gezira Student Branch. The competition provided an opportunity to apply programming knowledge, logical reasoning, and problem-solving skills under contest conditions.": "شاركتُ متسابقًا في مسابقة برمجة مفتوحة نظّمها فرع طلاب IEEE بجامعة الجزيرة. أتاحت المسابقة فرصة لتطبيق المعرفة البرمجية والتفكير المنطقي ومهارات حل المشكلات في أجواء تنافسية.",
        "Participated as a contestant in an open programming competition organized by IEEE UofG SB.": "شاركتُ متسابقًا في مسابقة برمجة مفتوحة نظّمها فرع IEEE بجامعة الجزيرة.",
        "Applied programming knowledge and logical thinking to solve coding challenges.": "طبّقتُ المعرفة البرمجية والتفكير المنطقي لحل تحديات برمجية.",
        "Demonstrated problem-solving and analytical skills in a competitive environment.": "أظهرتُ مهارات حل المشكلات والتحليل في بيئة تنافسية.",
        "Gained valuable experience in competitive programming and technical skill development.": "اكتسبتُ خبرة قيّمة في البرمجة التنافسية وتطوير المهارات التقنية.",
        "Participated in the IEEE University of Gezira Student Branch Social Day, an event designed to bring members together through interactive games, social activities, and opportunities to connect with fellow volunteers. The event fostered friendship, strengthened relationships among members, and promoted a sense of belonging within the IEEE community.": "شاركتُ في اليوم الاجتماعي لفرع طلاب IEEE بجامعة الجزيرة، وهي فعالية تجمع الأعضاء عبر ألعاب تفاعلية وأنشطة اجتماعية وفرص للتعارف مع زملاء المتطوعين. عززت الفعالية الصداقة وقوّت العلاقات بين الأعضاء وزادت الشعور بالانتماء لمجتمع IEEE.",
        "Participated in interactive games and fun social activities with IEEE members.": "شاركتُ في ألعاب تفاعلية وأنشطة اجتماعية ممتعة مع أعضاء IEEE.",
        "Networked with fellow IEEE members and volunteers.": "تواصلتُ مع أعضاء IEEE وزملاء المتطوعين.",
        "Contributed to fostering a welcoming, collaborative, and engaging IEEE community.": "ساهمتُ في بناء مجتمع IEEE مرحّب وتعاوني ونشط.",
        "Enhanced teamwork, communication, and interpersonal skills.": "طوّرتُ مهارات العمل الجماعي والتواصل والعلاقات الشخصية.",
        "Participated in IEEE Day celebrations organized by the IEEE University of Gezira Student Branch, an occasion celebrating the IEEE community, its achievements, and its impact on technology and engineering. The event brought members together to recognize volunteer contributions, share experiences, and strengthen the spirit of collaboration and innovation.": "شاركتُ في احتفالات يوم IEEE التي نظّمها فرع طلاب IEEE بجامعة الجزيرة، وهي مناسبة للاحتفاء بمجتمع IEEE وإنجازاته وأثره في التقنية والهندسة. جمعت الفعالية الأعضاء لتقدير إسهامات المتطوعين وتبادل الخبرات وتعزيز روح التعاون والابتكار.",
        "Celebrated IEEE's global community and its contributions to technology and engineering": "احتفلتُ بمجتمع IEEE العالمي وإسهاماته في التقنية والهندسة",
        "Recognized the importance of volunteering, teamwork, and professional growth.": "أدركتُ أهمية التطوع والعمل الجماعي والنمو المهني.",
        "Connected with IEEE UofG SB members and fellow volunteers": "تواصلتُ مع أعضاء فرع IEEE بجامعة الجزيرة وزملاء المتطوعين",
        "I participated in the IEEE University of Gezira Student Branch 50 Scientific Papers Challenge and presented my Medicine Warehouse Management System, developed using C#. Reaching the final stage was a valuable milestone in my academic and technical journey. I explained the project's concept and demonstrated how software can address practical challenges in medicine warehouse management. The experience also strengthened my public speaking, technical communication, and project presentation skills.": "شاركتُ في تحدي الخمسين ورقة علمية لفرع طلاب IEEE بجامعة الجزيرة وقدّمتُ نظام إدارة مستودع الأدوية الذي طوّرته بلغة C#. كان الوصول إلى المرحلة النهائية محطة مهمة في مسيرتي الأكاديمية والتقنية. شرحتُ فكرة المشروع وبيّنتُ كيف تعالج البرمجيات تحديات عملية في إدارة مستودعات الأدوية. كما عززت التجربة مهاراتي في الإلقاء والتواصل التقني وعرض المشاريع.",
        "Reached the final stage of the IEEE UofG SB 50 Scientific Papers Challenge.": "وصلتُ إلى المرحلة النهائية من تحدي الخمسين ورقة علمية لفرع IEEE بجامعة الجزيرة.",
        "Developed a Medicine Warehouse Management System using C#.": "طوّرتُ نظام إدارة مستودع أدوية بلغة C#.",
        "Networked with IEEE members and industry professionals.": "تواصلتُ مع أعضاء IEEE ومختصين في المجال.",
        "Presented the project to an audience, demonstrating its concept and practical applications.": "قدّمتُ المشروع أمام جمهور مبيّنًا فكرته وتطبيقاته العملية.",
        "Enhanced technical communication, public speaking, and software presentation skills.": "طوّرتُ مهارات التواصل التقني والإلقاء وعرض البرمجيات."
    });

    /* Dynamic labels: "View details: X" and "X — 1 / 5". */
    function translateDynamic(text) {
        const key = text.trim().replace(/\s+/g, " ");
        if (translations[key]) return translations[key];

        let match = key.match(/^View details: (.+)$/);
        if (match) return "عرض التفاصيل: " + (translations[match[1]] || match[1]);

        match = key.match(/^(.+) — (\d+ \/ \d+)$/);
        if (match && translations[match[1]]) return translations[match[1]] + " — " + match[2];

        return null;
    }

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

        /* Translate accessible names and tooltips too. */
        document.querySelectorAll("[aria-label], [alt], [title]").forEach((element) => {
            ["aria-label", "alt", "title"].forEach((attribute) => {
                if (!element.hasAttribute(attribute)) return;
                const key = "data-orig-" + attribute;
                if (!element.hasAttribute(key)) element.setAttribute(key, element.getAttribute(attribute));
                const original = element.getAttribute(key);
                const translated = arabic ? translateDynamic(original) : null;
                element.setAttribute(attribute, translated || original);
            });
        });

        textNodes.forEach((textNode) => {
            if (!originalText.has(textNode)) {
                originalText.set(textNode, textNode.nodeValue);
            }
            const original = originalText.get(textNode);
            const trimmed = original.trim().replace(/\s+/g, " ");

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