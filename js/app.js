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
    { id: 1,  title: "Tiger 3 — Action Still",       category: "movies",    image: "images/movies/tiger3-1.jpg",       featured: true },
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
    { id: 19, title: "Cinematic Poster Wallpaper",    category: "wallpapers", image: "images/wallpapers/wallpaper-2.jpg", downloadable: true },
    { id: 20, title: "HD Portrait Wallpaper",         category: "wallpapers", image: "images/wallpapers/wallpaper-3.jpg", downloadable: true }
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
                    const startOnInteraction = () => {
                        audio.play().then(() => setPlayingUI(true)).catch(() => {});
                        ["click", "touchstart", "keydown"].forEach(evt =>
                            document.removeEventListener(evt, startOnInteraction)
                        );
                    };
                    ["click", "touchstart", "keydown"].forEach(evt =>
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
    const audio = document.getElementById("bgMusic");
    if (!video) return;

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
    video.addEventListener("canplay", () => {
        video.play().catch(() => {});
        showVideo();
    }, { once: true });

    if (!audio) return; // no music element on this page -- video just plays once and stays

    audio.addEventListener("play", startCycle);
    audio.addEventListener("pause", stopCycle);
    audio.addEventListener("ended", stopCycle);
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
    }, { threshold: 0.15 });

    items.forEach(el => observer.observe(el));
}

/* -------------------------------------------------------------
   5. HOMEPAGE RENDERERS: featured filmstrip + popular categories
   ------------------------------------------------------------- */
function renderFilmstrip() {
    const track = document.querySelector("[data-filmstrip]");
    if (!track) return;

    const featured = photos.filter(p => p.featured);

    track.innerHTML = featured.map(photo => `
    <figure class="film-frame fade-up" tabindex="0" aria-label="${photo.title}">
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

    grid.innerHTML = categoryMeta.map(cat => {
        const sample = photos.find(p => p.category === cat.key);
        const count = photos.filter(p => p.category === cat.key).length;
        return `
      <a href="gallery.html?category=${cat.key}" class="category-card fade-up">
        <img src="${sample ? sample.image : ''}" alt="${cat.label} category cover" loading="lazy"
             onerror="this.src='https://placehold.co/400x500/1c1a20/c9a227?text=${encodeURIComponent(cat.label)}'">
        <div class="category-overlay">
          <h3>${cat.label}</h3>
          <span>${count} photo${count !== 1 ? "s" : ""} · ${cat.desc}</span>
        </div>
      </a>
    `;
    }).join("");
}

/* -------------------------------------------------------------
   6. INIT — runs on every page
   ------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    initNavbar();
    initHero();
    initHeroEntry();
    initMusic();
    renderFilmstrip();
    renderCategories();
    initScrollReveal();

    // Set active nav link based on current page
    const current = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a").forEach(link => {
        if (link.getAttribute("href") === current) link.classList.add("active");
    });
});