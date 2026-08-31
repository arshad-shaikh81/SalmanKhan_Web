/* ==========================================================================
   APP.JS — Central data + shared behaviors (navbar, lazy load, animations)
   Used across all pages. Gallery-specific filtering/lightbox lives in gallery.js
   ========================================================================== */

/* -------------------------------------------------------------
   1. CENTRAL PHOTO DATA
   To add a new photo: just push a new object into this array.
   category must be one of: movies | events | portraits | old-photos | wallpapers
   featured: true shows it in the homepage "Featured Photos" filmstrip
   ------------------------------------------------------------- */
const photos = [
    { id: 1,  title: "Ek Tha Tiger Poster Still",       category: "movies",    image: "images/movies/tiger-1.jpg",       featured: true },
    { id: 2,  title: "Dabangg — Chulbul Pandey",      category: "movies",    image: "images/movies/dabangg-1.jpg",       featured: true },
    { id: 3,  title: "Bajrangi Bhaijaan Still",       category: "movies",    image: "images/movies/bajrangi-1.jpg",      featured: true },
    { id: 4,  title: "Sultan — Wrestling Ring",       category: "movies",    image: "images/movies/sultan-1.jpg",        featured: false },
    { id: 5,  title: "Kick — Devil Look",             category: "movies",    image: "images/movies/kick-1.jpg",          featured: false },
    { id: 6,  title: "Ek Tha Tiger Poster Still",     category: "movies",    image: "images/movies/ektha-tiger-1.jpg",   featured: false },
    { id: 7,  title: "Wanted — First Look",           category: "movies",    image: "images/movies/wanted-1.jpg",        featured: false },

    { id: 8,  title: "Being Human Charity Gala",      category: "events",    image: "images/events/being-human-1.jpg",   featured: true },
    { id: 9,  title: "Bigg Boss Season Launch",       category: "events",    image: "images/events/bigg-boss-1.jpg",     featured: false },
    { id: 10, title: "Da-Bangg Reloaded Tour",        category: "events",    image: "images/events/dabangg-tour-1.jpg",  featured: false },
    { id: 11, title: "Award Night Appearance",        category: "events",    image: "images/events/awards-1.jpg",        featured: false },

    { id: 12, title: "Studio Portrait — Classic",     category: "portraits", image: "images/portraits/portrait-1.jpg",   featured: true },
    { id: 13, title: "Black & White Close-up",        category: "portraits", image: "images/portraits/portrait-2.jpg",   featured: false },
    { id: 14, title: "Casual Off-Screen Look",        category: "portraits", image: "images/portraits/portrait-3.jpg",   featured: false },

    { id: 15, title: "Early Career — 90s Era",        category: "old-photos", image: "images/old-photos/old-1.jpg",      featured: false },
    { id: 16, title: "Maine Pyar Kiya Era",           category: "old-photos", image: "images/old-photos/old-2.jpg",      featured: false },
    { id: 17, title: "Debut Years Throwback",         category: "old-photos", image: "images/old-photos/old-3.jpg",      featured: false },

    { id: 18, title: "Golden Hour Wallpaper",         category: "wallpapers", image: "images/wallpapers/wallpaper-1.jpg", downloadable: true },
    { id: 19, title: "Cinematic Poster Wallpaper",    category: "wallpapers", image: "images/wallpapers/wallpaper.jpg", downloadable: true },
    { id: 20, title: "HD Portrait Wallpaper",         category: "wallpapers", image: "images/wallpapers/wallpaper-2.jpg", downloadable: true },
    { id: 21, title: "HD Portrait Wallpaper",         category: "wallpapers", image: "images/wallpapers/wallpaper-3.jpg", downloadable: true },
    { id: 22, title: "HD Portrait Wallpaper",         category: "wallpapers", image: "images/wallpapers/wallpaper-0.jpg", downloadable: true },
    { id: 23, title: "Wallpaper-4",         category: "wallpapers", image: "images/wallpapers/wallpaper-4.jpg", downloadable: true },
    { id: 24, title: "Wallpaper-5",         category: "wallpapers", image: "images/wallpapers/wallpaper-5.jpg", downloadable: true },
    { id: 25, title: "Wallpaper-6",         category: "wallpapers", image: "images/wallpapers/wallpaper-6.jpg", downloadable: true },
    { id: 26, title: "Wallpaper-7",         category: "wallpapers", image: "images/wallpapers/wallpaper-7.jpg", downloadable: true },
    { id: 27, title: "Wallpaper-8",         category: "wallpapers", image: "images/wallpapers/wallpaper-8.jpg", downloadable: true },
    { id: 28, title: "Wallpaper-9",         category: "wallpapers", image: "images/wallpapers/wallpaper-9.jpg", downloadable: true },
    { id: 29, title: "Wallpaper-10",         category: "wallpapers", image: "images/wallpapers/wallpaper-10.jpg", downloadable: true },
    { id: 30, title: "Wallpaper-11",         category: "wallpapers", image: "images/wallpapers/wallpaper-11.jpg", downloadable: true },


];

/* -------------------------------------------------------------
   2. MOVIE COLLECTIONS DATA (used on movies.html)
   Each movie links to photos via matching "movieTag" — extend
   the photos array with a movieTag field as real images are added.
   ------------------------------------------------------------- */
const movies = [
    { id: "tiger",     title: "Tiger Series",        year: "2012–2023", cover: "images/movies/tiger3-1.jpg" },
    { id: "dabangg",   title: "Dabangg",             year: "2010–2019", cover: "images/movies/dabangg-1.jpg" },
    { id: "bajrangi",  title: "Bajrangi Bhaijaan",    year: "2015",      cover: "images/movies/bajrangi-1.jpg" },
    { id: "sultan",    title: "Sultan",              year: "2016",      cover: "images/movies/sultan-1.jpg" },
    { id: "kick",      title: "Kick",                year: "2014",      cover: "images/movies/kick-1.jpg" },
    { id: "ektatiger", title: "Ek Tha Tiger",         year: "2012",      cover: "images/movies/ektha-tiger-1.jpg" },
    { id: "wanted",    title: "Wanted",              year: "2009",      cover: "images/movies/wanted-1.jpg" }
];

/* -------------------------------------------------------------
   2b. DIALOGUES DATA
   To add a new dialogue: just push a new object into this array.
   NOTE: only "images/dialogues/dialogue-1.jpg" exists on disk right now
   (used below for the "Ready" quote). Add the remaining stills at the
   paths below (or rename them) and each card will pick up its real photo
   automatically — until then those entries fall back to a placeholder.
   ------------------------------------------------------------- */
const dialogues = [
    { quote: "Zindagi mein teen cheez kabhi underestimate nahi karna... I, Me and Myself!", movie: "Ready", image: "images/dialogues/dialogue-1.jpg" },
    { quote: "Ek baar jo maine commitment kar di, uske baad main khud ki bhi nahi sunta.", movie: "Wanted", image: "images/dialogues/dialogue-2.jpg" },
    { quote: "Shikar toh sab karte hai Lekin Tiger se behtar shikar koi nahi karta...", movie: "Tiger Zinda Hai", image: "images/dialogues/dialogue-3.jpg" },
    { quote: "Mai request nahi karta sirf ek hi baar bolta hoon.. aur Fool or Final ho jata hai.", movie: "Tere Namm", image: "images/dialogues/dialogue-4.jpg" },
];

/* -------------------------------------------------------------
   3. NAVBAR: scroll shrink + mobile toggle
   ------------------------------------------------------------- */
function initNavbar() {
    const navbar = document.querySelector(".navbar");
    const toggle = document.querySelector(".nav-toggle");
    const links = document.querySelector(".nav-links");

    if (!navbar) return;

    window.addEventListener("scroll", () => {
        navbar.classList.toggle("scrolled", window.scrollY > 40);
    });

    if (toggle && links) {
        toggle.addEventListener("click", () => {
            const isOpen = links.classList.toggle("open");
            toggle.setAttribute("aria-expanded", String(isOpen));
        });

        // Close mobile menu after a link is clicked
        links.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => links.classList.remove("open"));
        });
    }
}

/* -------------------------------------------------------------
   3b. HERO PHOTO LOADER
   The hero has a decorative CSS backdrop (spotlight rays + gold
   monogram) by default so it never looks empty. As soon as a real
   photo is dropped in at the path in data-src (e.g. replace
   images/hero/hero-main.jpg with a real, licensed photo), this
   swaps it in and dims the decorative layer automatically.
   ------------------------------------------------------------- */
function initHero() {
    const heroBg = document.querySelector(".hero-bg");
    if (!heroBg) return;

    const src = heroBg.dataset.src;
    if (!src) return;

    const preload = new Image();
    preload.onload = () => {
        heroBg.style.backgroundImage = `url('${src}')`;
        heroBg.setAttribute("data-has-photo", "true");
    };
    preload.onerror = () => {
        // Keep the decorative CSS backdrop — no real photo present yet.
    };
    preload.src = src;
}

/* -------------------------------------------------------------
   3c. BACKGROUND MUSIC
   Tries to play automatically on every page load (once through, no
   loop). Most browsers block autoplay-with-sound until the visitor
   interacts with the page at least once -- so if the direct autoplay
   attempt is blocked, playback starts silently on the visitor's
   first click/tap/keypress instead. The floating button always lets
   the visitor pause or manually replay.
   ------------------------------------------------------------- */
function initMusic() {
    const audio = document.getElementById("bgMusic");
    const toggle = document.getElementById("musicToggle");
    if (!audio || !toggle) return;

    const onIcon = toggle.querySelector(".icon-music-on");
    const offIcon = toggle.querySelector(".icon-music-off");

    const setPlayingUI = (isPlaying) => {
        toggle.classList.toggle("is-playing", isPlaying);
        toggle.setAttribute("aria-pressed", String(isPlaying));
        toggle.setAttribute("aria-label", isPlaying ? "Pause background music" : "Play background music");
        onIcon.hidden = !isPlaying;
        offIcon.hidden = isPlaying;
    };

    const tryAutoplay = () => {
        audio.volume = 0.5;
        const playPromise = audio.play();

        if (playPromise && playPromise.then) {
            playPromise
                .then(() => setPlayingUI(true))
                .catch(() => {
                    // Autoplay blocked -- wait for the first user interaction, then try once.
                    // Only "click" is used (not "touchstart"): some mobile browsers reject
                    // play() calls made during touchstart (it can just be a scroll gesture),
                    // and that would burn our one-shot listener before a real tap ever lands.
                    const startOnInteraction = () => {
                        audio.play().then(() => setPlayingUI(true)).catch(() => {});
                        ["click", "keydown"].forEach(evt =>
                            document.removeEventListener(evt, startOnInteraction)
                        );
                    };
                    ["click", "keydown"].forEach(evt =>
                        document.addEventListener(evt, startOnInteraction, { once: true })
                    );
                });
        }
    };

    // Manual control always available via the floating button
    toggle.addEventListener("click", () => {
        if (audio.paused) {
            if (audio.ended) audio.currentTime = 0;
            audio.play().then(() => setPlayingUI(true)).catch(() => {});
        } else {
            audio.pause();
            setPlayingUI(false);
        }
    });

    audio.addEventListener("ended", () => setPlayingUI(false)); // plays once, then stops (no loop)
    audio.addEventListener("pause", () => setPlayingUI(false));
    audio.addEventListener("play", () => setPlayingUI(true));

    tryAutoplay();
}

/* -------------------------------------------------------------
   3d. HERO ENTRY VIDEO (crossfades with the photo while music plays)
   The clip autoplays immediately on arrival (it's muted, so browsers
   always allow this -- no tap needed). The clip's own audio track is
   force-muted in JS too, so only the background music is ever heard.
   While the background music is playing, the hero rapidly blinks
   between the video and the normal photo (CYCLE_MS controls the
   speed). Once the music stops (paused or finished), it settles
   permanently on the normal photo.
   ------------------------------------------------------------- */
function initHeroEntry() {
    const video = document.querySelector(".hero-video");
    if (!video) return;

    // On phones, skip the video/blink animation entirely -- just show the
    // static photo. Music (initMusic) is unaffected and still plays.
    const isMobile = window.matchMedia("(max-width: 600px)").matches;
    if (isMobile) {
        video.style.display = "none";
        return;
    }

    const src = video.dataset.src;
    if (!src) return;

    const CYCLE_MS = 150;         // milliseconds each state (video / photo) stays visible -- rapid strobe blink
    const FALLBACK_BLINK_MS = 8000; // used only if the clip's real duration can't be read
    let cycleTimer = null;
    let maxTimer = null;
    let showingVideo = true;

    // The video plays continuously in the background (looped, muted) --
    // we only ever toggle its visibility. Restarting playback every cycle
    // was what caused it to freeze/stick on the first frame.
    const showVideo = () => {
        showingVideo = true;
        video.classList.remove("is-hidden");
    };

    const showPhoto = () => {
        showingVideo = false;
        video.classList.add("is-hidden");
    };

    const startCycle = () => {
        if (cycleTimer) return;
        cycleTimer = setInterval(() => {
            showingVideo ? showPhoto() : showVideo();
        }, CYCLE_MS);

        // Blink only for as long as the entry clip actually runs (matches the
        // clip's real length automatically -- change the clip, this adjusts too).
        const clipMs = video.duration && isFinite(video.duration) ? video.duration * 1000 : FALLBACK_BLINK_MS;
        maxTimer = setTimeout(stopCycle, clipMs);
    };

    const stopCycle = () => {
        clearInterval(cycleTimer);
        clearTimeout(maxTimer);
        cycleTimer = null;
        maxTimer = null;
        showPhoto(); // settle on the normal photo once blinking stops
    };

    video.addEventListener("error", () => {
        video.style.display = "none"; // no clip added yet -- just show the photo/backdrop
    });

    video.src = src;
    video.muted = true;
    video.volume = 0;
    video.loop = true;

    // Start actual playback once, when the clip is ready -- it then keeps
    // looping continuously in the background for as long as the page is open.
    // The blink cycle now starts right here too, automatically, regardless of
    // whether background music is playing -- muted video is always allowed
    // to autoplay, so this no longer waits on the audio's own autoplay status
    // (which mobile browsers can block until a tap).
    video.addEventListener("canplay", () => {
        video.play().catch(() => {});
        showVideo();
        startCycle();
    }, { once: true });
}

/* -------------------------------------------------------------
   3e. DIALOGUES: featured quote card (auto-rotating every ~3s) +
   "see all" modal
   ------------------------------------------------------------- */
function initDialogues() {
    const trigger = document.getElementById("dialogueTrigger");
    const media = document.getElementById("dialogueMedia");
    const quoteEl = document.getElementById("featuredQuote");
    const movieEl = document.getElementById("featuredMovie");
    const modal = document.getElementById("dialogueModal");
    const backdrop = document.getElementById("dialogueModalBackdrop");
    const closeBtn = document.getElementById("dialogueModalClose");
    const list = document.getElementById("dialogueList");

    if (!trigger || !modal || !dialogues.length) return;

    const ROTATE_MS = 3000;   // how long each dialogue stays on screen
    const FADE_MS = 350;      // must match the CSS transition on .dialogue-card-media
    let currentIndex = Math.floor(Math.random() * dialogues.length);
    let rotateTimer = null;

    // Renders one dialogue onto the featured card. The still already has
    // the quote + movie name burned into the photo, so quoteEl/movieEl are
    // hidden via CSS -- their text is still set for accessibility (screen
    // readers / the modal aria-label) and in case they're re-enabled later.
    const showDialogue = (index) => {
        const item = dialogues[index];
        if (quoteEl) quoteEl.textContent = item.quote;
        if (movieEl) movieEl.textContent = `— ${item.movie}`;

        if (!item.image || !media) return;

        const preload = new Image();
        const applyImage = (url) => {
            // Fade the current image out, swap the background once it's
            // fully transparent, then fade the new one back in.
            media.style.opacity = "0";
            setTimeout(() => {
                media.style.backgroundImage = `url('${url}')`;
                media.style.opacity = "1";
            }, FADE_MS);
        };
        preload.onload = () => applyImage(item.image);
        preload.onerror = () => applyImage(`https://placehold.co/1200x700/1c1a20/c9a227?text=${encodeURIComponent(item.movie)}`);
        preload.src = item.image;
    };

    // Show the first one immediately (no fade needed on initial load)
    if (dialogues[currentIndex].image && media) {
        media.style.backgroundImage = `url('${dialogues[currentIndex].image}')`;
    }
    if (quoteEl) quoteEl.textContent = dialogues[currentIndex].quote;
    if (movieEl) movieEl.textContent = `— ${dialogues[currentIndex].movie}`;

    // Auto-rotate through the remaining dialogues every ROTATE_MS, unless
    // the visitor prefers reduced motion (then it just stays on the first one).
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (dialogues.length > 1 && !prefersReducedMotion) {
        rotateTimer = setInterval(() => {
            currentIndex = (currentIndex + 1) % dialogues.length;
            showDialogue(currentIndex);
        }, ROTATE_MS);
    }

    list.innerHTML = dialogues.map(d => `
        <div class="dialogue-list-item">
            ${d.image ? `<img src="${d.image}" alt="${d.movie} still" loading="lazy" class="dialogue-list-thumb" onerror="this.src='https://placehold.co/160x160/1c1a20/c9a227?text=${encodeURIComponent(d.movie)}'">` : ""}
            <div class="dialogue-list-text">
                <p class="quote">${d.quote}</p>
                <span class="movie">— ${d.movie}</span>
            </div>
        </div>
    `).join("");

    const openModal = () => {
        modal.hidden = false;
        document.body.style.overflow = "hidden";
    };
    const closeModal = () => {
        modal.hidden = true;
        document.body.style.overflow = "";
    };

    trigger.addEventListener("click", openModal);
    trigger.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openModal();
        }
    });
    backdrop.addEventListener("click", closeModal);
    closeBtn.addEventListener("click", closeModal);
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !modal.hidden) closeModal();
    });
}

/* -------------------------------------------------------------
   3f. DIALOGUE IMAGE PARALLAX
   As the dialogue card scrolls through the viewport, the photo inside
   it drifts vertically a little slower/faster than the page itself --
   the classic "image rises up" effect seen on modern portfolio sites.
   Purely visual: driven by scroll position, throttled with
   requestAnimationFrame so it stays smooth and cheap.
   ------------------------------------------------------------- */
function initDialogueParallax() {
    const card = document.getElementById("dialogueTrigger");
    const media = document.getElementById("dialogueMedia");
    if (!card || !media) return;

    // Respect users who've asked for reduced motion -- just leave the
    // image static in that case.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const MAX_SHIFT = 36; // px of total vertical drift (subtle, not a full parallax scroll)
    let ticking = false;

    const update = () => {
        const rect = card.getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight;

        // progress: 0 when the card is just entering from the bottom of the
        // viewport, 1 when it's about to leave from the top.
        const total = vh + rect.height;
        let progress = (vh - rect.top) / total;
        progress = Math.min(1, Math.max(0, progress));

        // Map progress (0..1) to a shift range (-MAX_SHIFT..MAX_SHIFT) so the
        // photo drifts upward relative to the card as you scroll down past it.
        const shift = (progress - 0.5) * MAX_SHIFT * 2;
        media.style.transform = `translateY(${-shift}px)`;
        ticking = false;
    };

    const onScroll = () => {
        if (!ticking) {
            requestAnimationFrame(update);
            ticking = true;
        }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update(); // set correct position on load, before any scroll happens
}

/* -------------------------------------------------------------
   4. FADE-UP SCROLL ANIMATIONS (lightweight IntersectionObserver)
   ------------------------------------------------------------- */
function initScrollReveal() {
    const items = document.querySelectorAll(".fade-up");
    if (!items.length || !("IntersectionObserver" in window)) {
        items.forEach(el => el.classList.add("in-view"));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -60px 0px" });

    items.forEach(el => observer.observe(el));
}

/* -------------------------------------------------------------
   4b. STAT COUNTERS (About page)
   Numbers count up from 0 to their data-target value once they scroll
   into view, then get a small "pop" for a satisfying finish.
   ------------------------------------------------------------- */
function initStatCounters() {
    const numbers = document.querySelectorAll(".stat-number[data-target]");
    if (!numbers.length) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const animateCount = (el) => {
        const target = parseInt(el.dataset.target, 10) || 0;
        const suffix = el.dataset.suffix || "";

        if (prefersReducedMotion) {
            el.textContent = target + suffix;
            return;
        }

        const DURATION = 1200;
        const start = performance.now();

        const tick = (now) => {
            const elapsed = now - start;
            const progress = Math.min(1, elapsed / DURATION);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            const current = Math.round(target * eased);
            el.textContent = current + suffix;

            if (progress < 1) {
                requestAnimationFrame(tick);
            } else {
                el.textContent = target + suffix;
                el.classList.add("counted");
            }
        };

        requestAnimationFrame(tick);
    };

    if (!("IntersectionObserver" in window)) {
        numbers.forEach(animateCount);
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCount(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    numbers.forEach(el => observer.observe(el));
}

/* -------------------------------------------------------------
   4c. TIMELINE PROGRESS LINE (About page)
   The gold line down the timeline "draws" itself as you scroll through
   the section (via the --tl-progress CSS variable), and each milestone's
   dot lights up with a pulse once it scrolls into view.
   ------------------------------------------------------------- */
function initTimelineProgress() {
    const timeline = document.querySelector(".timeline");
    if (!timeline) return;

    const dots = timeline.querySelectorAll(".timeline-dot");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!dots.length) return;

    if (prefersReducedMotion) {
        timeline.style.setProperty("--tl-progress", "1");
    } else {
        const firstDot = dots[0];
        const lastDot = dots[dots.length - 1];
        let ticking = false;

        // Progress is measured between the first and last dot's actual
        // on-screen position (not a fixed scroll-distance guess), so the
        // line reliably reaches 100% once the last milestone has scrolled
        // up to the reference line -- regardless of how much extra page
        // there is to scroll past the timeline.
        const update = () => {
            const vh = window.innerHeight || document.documentElement.clientHeight;
            const refY = vh * 0.65; // the point on screen a dot counts as "reached"
            const firstY = firstDot.getBoundingClientRect().top;
            const lastY = lastDot.getBoundingClientRect().top;

            let progress;
            if (lastY === firstY) {
                progress = 1;
            } else {
                progress = (refY - firstY) / (lastY - firstY);
            }
            progress = Math.min(1, Math.max(0, progress));
            timeline.style.setProperty("--tl-progress", progress);
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(update);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        update();
    }

    // Mark each milestone as in-view (for the dot glow/pulse) using the
    // same reveal moment as its fade-up animation.
    const items = document.querySelectorAll(".timeline-item");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
        items.forEach(el => el.classList.add("in-view"));
        return;
    }

    const dotObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                dotObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });

    items.forEach(el => dotObserver.observe(el));
}

/* -------------------------------------------------------------
   5. HOMEPAGE RENDERERS: featured filmstrip + popular categories
   ------------------------------------------------------------- */
function renderFilmstrip() {
    const track = document.querySelector("[data-filmstrip]");
    if (!track) return;

    const featured = photos.filter(p => p.featured);

    track.innerHTML = featured.map(photo => `
    <figure class="film-frame" tabindex="0" aria-label="${photo.title}">
      <img src="${photo.image}" alt="${photo.title}" loading="lazy" width="280" height="373"
           onerror="this.src='https://placehold.co/560x746/1c1a20/c9a227?text=Salman+Khan&font=playfair-display'">
      <figcaption class="film-caption">${photo.title}</figcaption>
    </figure>
  `).join("");
}

function renderCategories() {
    const grid = document.querySelector("[data-category-grid]");
    if (!grid) return;

    const categoryMeta = [
        { key: "movies",    label: "Movies",     desc: "On-screen moments" },
        { key: "events",    label: "Events",     desc: "Public appearances" },
        { key: "portraits", label: "Portraits",  desc: "Studio & candid" },
        { key: "old-photos", label: "Old Photos", desc: "Throwback archive" },
        { key: "wallpapers", label: "Wallpapers", desc: "HD downloads" }
    ];

    // Wallpapers has its own dedicated page (wallpapers.html); the rest
    // still point at gallery.html?category=... until that page exists.
    const linkFor = (key) => key === "wallpapers" ? "wallpapers.html" : `gallery.html?category=${key}`;

    grid.innerHTML = categoryMeta.map(cat => {
        const sample = photos.find(p => p.category === cat.key);
        return `
      <a href="${linkFor(cat.key)}" class="category-card fade-up">
        <img src="${sample ? sample.image : ''}" alt="${cat.label} category cover" loading="lazy"
             onerror="this.src='https://placehold.co/400x500/1c1a20/c9a227?text=${encodeURIComponent(cat.label)}'">
        <div class="category-overlay">
          <h3>${cat.label}</h3>
        </div>
      </a>
    `;
    }).join("");
}

/* -------------------------------------------------------------
   5b. WALLPAPERS PAGE RENDERER (used on wallpapers.html)
   Renders every photo flagged downloadable:true with a working
   "Download" button (forces a save instead of opening the image).
   ------------------------------------------------------------- */
function renderWallpapers() {
    const grid = document.querySelector("[data-wallpaper-grid]");
    if (!grid) return;

    const wallpapers = photos.filter(p => p.category === "wallpapers");

    grid.innerHTML = wallpapers.map(photo => `
      <figure class="wallpaper-card fade-up">
        <img src="${photo.image}" alt="${photo.title}" loading="lazy"
             onerror="this.src='https://placehold.co/720x1280/1c1a20/c9a227?text=${encodeURIComponent(photo.title)}'">
        <figcaption class="wallpaper-overlay">
          <button type="button" class="btn btn-primary wallpaper-download" data-download="${photo.image}" data-name="${photo.title}">
            Download
          </button>
        </figcaption>
      </figure>
    `).join("");

    // Delegate click so it still works after the innerHTML re-render above.
    grid.addEventListener("click", async (e) => {
        const btn = e.target.closest(".wallpaper-download");
        if (!btn) return;

        const url = btn.dataset.download;
        const name = (btn.dataset.name || "wallpaper").replace(/\s+/g, "-").toLowerCase();

        try {
            // Fetch as a blob so the browser saves the file instead of
            // just navigating to/opening the image in a new tab.
            const res = await fetch(url);
            const blob = await res.blob();
            const blobUrl = URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = blobUrl;
            link.download = `${name}.jpg`;
            document.body.appendChild(link);
            link.click();
            link.remove();
            URL.revokeObjectURL(blobUrl);
        } catch (err) {
            // Fallback: plain download attribute (works for same-origin
            // images even if the fetch above fails for some reason).
            const link = document.createElement("a");
            link.href = url;
            link.download = `${name}.jpg`;
            link.click();
        }
    });
}

/* -------------------------------------------------------------
   6. INIT — runs on every page
   ------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    initNavbar();
    initHero();
    initHeroEntry();
    initMusic();
    initDialogues();
    initDialogueParallax();
    initStatCounters();
    initTimelineProgress();
    renderFilmstrip();
    renderCategories();
    renderWallpapers();
    initScrollReveal();

    // Set active nav link based on current page
    const current = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a").forEach(link => {
        if (link.getAttribute("href") === current) link.classList.add("active");
    });
});