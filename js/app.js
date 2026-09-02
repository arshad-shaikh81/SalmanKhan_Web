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
    { id: 1,  title: "Ek Tha Tiger Poster Still",       category: "movies",    image: "images/movies/tiger-1.jpg",       featured: true,  movieTag: "ektatiger" },
    { id: 2,  title: "Dabangg — Chulbul Pandey",      category: "movies",    image: "images/movies/dabangg-1.jpg",       featured: true,  movieTag: "dabangg1" },
    { id: 3,  title: "Bajrangi Bhaijaan Still",       category: "movies",    image: "images/movies/bajrangi-1.jpg",      featured: true,  movieTag: "bajrangi" },
    { id: 4,  title: "Sultan — Wrestling Ring",       category: "movies",    image: "images/movies/sultan-1.jpg",        featured: false, movieTag: "sultan" },
    { id: 5,  title: "Kick — Devil Look",             category: "movies",    image: "images/movies/kick-1.jpg",          featured: false, movieTag: "kick" },
    { id: 6,  title: "Ek Tha Tiger Poster Still",     category: "movies",    image: "images/movies/ektha-tiger-1.jpg",   featured: false, movieTag: "ektatiger" },
    { id: 7,  title: "Wanted — First Look",           category: "movies",    image: "images/movies/wanted-1.jpg",        featured: false, movieTag: "wanted" },

    { id: 8,  title: "Being Human Charity Gala",      category: "events",    image: "images/events/being-human-1.jpg",   featured: true },
    { id: 9,  title: "Bigg Boss Season Launch",       category: "events",    image: "images/events/bigg-boss-1.jpg",     featured: false },
    { id: 10, title: "Da-Bangg Reloaded Tour",        category: "events",    image: "images/events/dabangg-tour-1.jpg",  featured: false },
    { id: 11, title: "Award Night Appearance",        category: "events",    image: "images/events/awards-1.jpg",        featured: false },

    { id: 12, title: "Studio Portrait — Classic",     category: "portraits", image: "images/portraits/portrait-1.jpg",   featured: true },
    { id: 13, title: "Black & White Close-up",        category: "portraits", image: "images/portraits/portrait-2.jpg",   featured: false },
    { id: 14, title: "Casual Off-Screen Look",        category: "portraits", image: "images/portraits/portrait-3.jpg",   featured: false },

    { id: 15, title: "Salman Khan — Throwback Photo",  category: "old-photos", image: "images/old-photos/old-1.jpg",      featured: false },
    { id: 16, title: "Salman Khan — Throwback Photo",  category: "old-photos", image: "images/old-photos/old-2.jpg",      featured: false },
    { id: 17, title: "Salman Khan — Throwback Photo",  category: "old-photos", image: "images/old-photos/old-3.jpg",      featured: false },
    { id: 56, title: "Salman Khan — Throwback Photo",  category: "old-photos", image: "images/old-photos/old-4.jpg",      featured: false },
    { id: 57, title: "Salman Khan — Throwback Photo",  category: "old-photos", image: "images/old-photos/old-5.jpg",      featured: false },
    { id: 58, title: "Salman Khan — Throwback Photo",  category: "old-photos", image: "images/old-photos/old-6.jpg",      featured: false },
    { id: 59, title: "Salman Khan — Throwback Photo",  category: "old-photos", image: "images/old-photos/old-7.jpg",      featured: false },
    { id: 60, title: "Salman Khan — Throwback Photo",  category: "old-photos", image: "images/old-photos/old-8.jpg",      featured: false },
    { id: 61, title: "Salman Khan — Throwback Photo",  category: "old-photos", image: "images/old-photos/old-9.jpg",      featured: false },
    { id: 62, title: "Salman Khan — Throwback Photo",  category: "old-photos", image: "images/old-photos/old-10.jpg",     featured: false },
    { id: 63, title: "Salman Khan — Throwback Photo",  category: "old-photos", image: "images/old-photos/old-11.jpg",     featured: false },
    { id: 64, title: "Salman Khan — Throwback Photo",  category: "old-photos", image: "images/old-photos/old-12.jpg",     featured: false },
    { id: 65, title: "Salman Khan — Throwback Photo",  category: "old-photos", image: "images/old-photos/old-13.jpg",     featured: false },
    { id: 66, title: "Salman Khan — Throwback Photo",  category: "old-photos", image: "images/old-photos/old-14.jpg",     featured: false },
    { id: 67, title: "Salman Khan — Throwback Photo",  category: "old-photos", image: "images/old-photos/old-15.jpg",     featured: false },
    { id: 68, title: "Salman Khan — Throwback Photo",  category: "old-photos", image: "images/old-photos/old-16.jpg",     featured: false },
    { id: 69, title: "Salman Khan — Throwback Photo",  category: "old-photos", image: "images/old-photos/old-17.jpg",     featured: false },
    { id: 70, title: "Salman Khan — Throwback Photo",  category: "old-photos", image: "images/old-photos/old-18.jpg",     featured: false },
    { id: 71, title: "Salman Khan — Throwback Photo",  category: "old-photos", image: "images/old-photos/old-19.jpg",     featured: false },
    { id: 72, title: "Salman Khan — Throwback Photo",  category: "old-photos", image: "images/old-photos/old-20.jpg",     featured: false },
    { id: 73, title: "Salman Khan — Throwback Photo",  category: "old-photos", image: "images/old-photos/old-21.jpg",     featured: false },

    { id: 18, title: "Wallpaper 1",  category: "wallpapers", image: "images/wallpapers/wallpaper.jpg",    downloadable: true },
    { id: 19, title: "Wallpaper 2",  category: "wallpapers", image: "images/wallpapers/wallpaper-0.jpg",  downloadable: true },
    { id: 20, title: "Wallpaper 3",  category: "wallpapers", image: "images/wallpapers/wallpaper-1.jpg",  downloadable: true },
    { id: 21, title: "Wallpaper 4",  category: "wallpapers", image: "images/wallpapers/wallpaper-2.jpg",  downloadable: true },
    { id: 22, title: "Wallpaper 5",  category: "wallpapers", image: "images/wallpapers/wallpaper-3.jpg",  downloadable: true },
    { id: 23, title: "Wallpaper 6",  category: "wallpapers", image: "images/wallpapers/wallpaper-4.jpg",  downloadable: true },
    { id: 24, title: "Wallpaper 7",  category: "wallpapers", image: "images/wallpapers/wallpaper-5.jpg",  downloadable: true },
    { id: 25, title: "Wallpaper 8",  category: "wallpapers", image: "images/wallpapers/wallpaper-6.jpg",  downloadable: true },
    { id: 26, title: "Wallpaper 9",  category: "wallpapers", image: "images/wallpapers/wallpaper-7.jpg",  downloadable: true },
    { id: 27, title: "Wallpaper 10", category: "wallpapers", image: "images/wallpapers/wallpaper-8.jpg",  downloadable: true },
    { id: 28, title: "Wallpaper 11", category: "wallpapers", image: "images/wallpapers/wallpaper-9.jpg",  downloadable: true },
    { id: 29, title: "Wallpaper 12", category: "wallpapers", image: "images/wallpapers/wallpaper-10.jpg", downloadable: true },
    { id: 30, title: "Wallpaper 13", category: "wallpapers", image: "images/wallpapers/wallpaper-11.jpg", downloadable: true },
    { id: 31, title: "Wallpaper 14", category: "wallpapers", image: "images/wallpapers/wallpaper-12.jpg", downloadable: true },
    { id: 32, title: "Wallpaper 15", category: "wallpapers", image: "images/wallpapers/wallpaper-13.jpg", downloadable: true },
    { id: 33, title: "Wallpaper 16", category: "wallpapers", image: "images/wallpapers/wallpaper-14.jpg", downloadable: true },
    { id: 34, title: "Wallpaper 17", category: "wallpapers", image: "images/wallpapers/wallpaper-15.jpg", downloadable: true },
    { id: 35, title: "Wallpaper 18", category: "wallpapers", image: "images/wallpapers/wallpaper-16.jpg", downloadable: true },
    { id: 36, title: "Wallpaper 19", category: "wallpapers", image: "images/wallpapers/wallpaper-17.jpg", downloadable: true },
    { id: 37, title: "Wallpaper 20", category: "wallpapers", image: "images/wallpapers/wallpaper-18.jpg", downloadable: true },
    { id: 38, title: "Wallpaper 21", category: "wallpapers", image: "images/wallpapers/wallpaper-19.jpg", downloadable: true },
    { id: 39, title: "Wallpaper 22", category: "wallpapers", image: "images/wallpapers/wallpaper-20.jpg", downloadable: true },

    { id: 40, title: "Wallpaper 23", category: "wallpapers", image: "images/wallpapers/wallpaper-21.jpg", downloadable: true },
    { id: 41, title: "Wallpaper 24", category: "wallpapers", image: "images/wallpapers/wallpaper-22.jpg", downloadable: true },
    { id: 42, title: "Wallpaper 25", category: "wallpapers", image: "images/wallpapers/wallpaper-23.jpg", downloadable: true },
    { id: 43, title: "Wallpaper 26", category: "wallpapers", image: "images/wallpapers/wallpaper-24.jpg", downloadable: true },
    { id: 44, title: "Wallpaper 27", category: "wallpapers", image: "images/wallpapers/wallpaper-25.jpg", downloadable: true },
    { id: 45, title: "Wallpaper 28", category: "wallpapers", image: "images/wallpapers/wallpaper-26.jpg", downloadable: true },
    { id: 46, title: "Wallpaper 29", category: "wallpapers", image: "images/wallpapers/wallpaper-27.jpg", downloadable: true },
    { id: 47, title: "Wallpaper 30", category: "wallpapers", image: "images/wallpapers/wallpaper-28.jpg", downloadable: true },
    { id: 48, title: "Wallpaper 31", category: "wallpapers", image: "images/wallpapers/wallpaper-29.jpg", downloadable: true },
    { id: 49, title: "Wallpaper 32", category: "wallpapers", image: "images/wallpapers/wallpaper-30.jpg", downloadable: true },
    { id: 50, title: "Wallpaper 33", category: "wallpapers", image: "images/wallpapers/wallpaper-31.jpg", downloadable: true },
    { id: 51, title: "Wallpaper 34", category: "wallpapers", image: "images/wallpapers/wallpaper-32.jpg", downloadable: true },
    { id: 52, title: "Wallpaper 35", category: "wallpapers", image: "images/wallpapers/wallpaper-33.jpg", downloadable: true },
    { id: 53, title: "Wallpaper 36", category: "wallpapers", image: "images/wallpapers/wallpaper-34.jpg", downloadable: true },
    { id: 54, title: "Wallpaper 37", category: "wallpapers", image: "images/wallpapers/wallpaper-35.jpg", downloadable: true },
    { id: 55, title: "Wallpaper 38", category: "wallpapers", image: "images/wallpapers/wallpaper-36.jpg", downloadable: true },




];

/* -------------------------------------------------------------
   2. MOVIE COLLECTIONS DATA (used on movies.html)
   Each movie links to photos via matching "movieTag" — extend
   the photos array with a movieTag field as real images are added.

   Budget/gross/verdict figures were cross-matched from two source
   tables (a Year+Verdict list and a separate Budget/Gross/Verdict
   list) by row order and year, then appended to each movie's
   description as plain text.
   ------------------------------------------------------------- */
const movies = [
    { id: "mainepyarkiya", title: "Maine Pyar Kiya", year: "1989", sortYear: 1989, popular: true, cover: "images/movies/mainepyarkiya-1.jpg",
        description: "Salman Khan's breakout lead role — a romantic drama that made him an overnight star and won him the Filmfare Award for Best Male Debut. Verdict: All Time Blockbuster (ATB)." },

    { id: "haahk", title: "Hum Aapke Hain Koun..!", year: "1994", sortYear: 1994, popular: true, cover: "images/movies/haahk-1.jpg",
        description: "A family drama centered on two families brought together by marriage — one of Bollywood's biggest hits of the 1990s. Verdict: All Time Blockbuster (ATB)." },

    { id: "karanarjun", title: "Karan Arjun", year: "1995", sortYear: 1995, popular: true, cover: "images/movies/karanarjun-1.jpg",
        description: "A reincarnation drama co-starring Shah Rukh Khan that helped revitalise Salman Khan's career in the mid-90s. Verdict: Blockbuster." },

    { id: "partner", title: "Partner", year: "2007", sortYear: 2007, popular: true, cover: "images/movies/partner-1.jpg",
        description: "A comedy about a matchmaker helping a shy man find love, co-starring Govinda. Verdict: Blockbuster." },

    { id: "veer", title: "Veer", year: "2010", sortYear: 2010, popular: true, cover: "images/movies/veer-1.jpg",
        description: "A period action-drama in which Salman Khan plays a Rajput warrior fighting against British colonial rule. Budget: ₹63 crore | Box office gross: ₹61 crore | Verdict: Below Average." },

    { id: "dabangg1",  title: "Dabangg",             year: "2010",      sortYear: 2010, popular: true,  cover: "images/movies/dabangg-1.jpg",
        description: "Salman Khan plays Chulbul Pandey, a fearless, corrupt-but-charming cop who locks horns with a crooked politician after a troubled relationship with his own family. Budget: ₹41 crore | Box office gross: ₹219 crore | Verdict: Blockbuster.",
        ott: "Amazon Prime Video" },

    { id: "ready", title: "Ready", year: "2011", sortYear: 2011, popular: true, cover: "images/movies/ready-1.jpg",
        description: "A romantic comedy about a wedding-crashing scheme that leads to real romance. Budget: ₹30 crore | Box office gross: ₹183 crore | Verdict: Blockbuster." },

    { id: "bodyguard", title: "Bodyguard", year: "2011", sortYear: 2011, popular: true, cover: "images/movies/bodyguard-1.jpg",
        description: "An action-romance in which Salman Khan plays a bodyguard hired to protect a young woman, only to secretly fall for her. Budget: ₹60 crore | Box office gross: ₹252.9 crore | Verdict: Blockbuster." },

    { id: "ektatiger", title: "Ek Tha Tiger",         year: "2012",      sortYear: 2012, popular: true, cover: "images/movies/ektha-tiger-1.jpg",
        description: "A top Indian spy is sent to observe a scientist suspected of leaking data to Pakistan, but ends up falling for the scientist's mysterious caretaker instead. Budget: ₹75 crore | Box office gross: ₹335 crore | Verdict: Blockbuster.",
        ott: "Netflix" },

    { id: "dabangg2",  title: "Dabangg 2",           year: "2012",      sortYear: 2012, popular: true,  cover: "images/movies/dabangg2-1.jpg",
        description: "Chulbul Pandey stirs fresh trouble when he kills the brother of a corrupt politician, who then sends henchmen after Chulbul's wife in retaliation. Budget: ₹50 crore | Box office gross: ₹255 crore | Verdict: Blockbuster.",
        ott: "Amazon Video (Rent/Buy)" },

    { id: "jaiho", title: "Jai Ho", year: "2014", sortYear: 2014, popular: true, cover: "images/movies/jaiho-1.jpg",
        description: "An action film in which Salman Khan plays a former officer who champions a pay-it-forward philosophy. Budget: ₹102 crore | Box office gross: ₹195 crore | Verdict: Semi Hit." },

    { id: "kick",      title: "Kick",                year: "2014",      sortYear: 2014, popular: true,  cover: "images/movies/kick-1.jpg",
        description: "A thrill-seeking, adrenaline-chasing man leads a double life as a masked thief, staying one step ahead of the cop who's falling for him. Budget: ₹140 crore | Box office gross: ₹402 crore | Verdict: Blockbuster.",
        ott: "Netflix" },

    { id: "bajrangi",  title: "Bajrangi Bhaijaan",    year: "2015",      sortYear: 2015, popular: true,  cover: "images/movies/bajrangi-1.jpg",
        description: "A devoted, big-hearted man undertakes a heartfelt journey across the border to reunite a lost, mute Pakistani girl with her family. Budget: ₹90 crore | Box office gross: ₹918.18 crore | Verdict: All Time Blockbuster.",
        ott: "Netflix" },

    { id: "premratan", title: "Prem Ratan Dhan Payo", year: "2015", sortYear: 2015, popular: true, cover: "images/movies/premratan-1.jpg",
        description: "A royal family drama in which Salman Khan plays a dual role, released as a big Diwali tentpole. Budget: ₹90 crore | Box office gross: ₹432 crore | Verdict: Blockbuster." },

    { id: "sultan",    title: "Sultan",              year: "2016",      sortYear: 2016, popular: true,  cover: "images/movies/sultan-1.jpg",
        description: "An ageing wrestler chases one last shot at Olympic glory while trying to repair his personal life and marriage. Budget: ₹90 crore | Box office gross: ₹623.33 crore | Verdict: Blockbuster.",
        ott: "Netflix" },

    { id: "tubelight", title: "Tubelight", year: "2017", sortYear: 2017, popular: true, cover: "images/movies/tubelight-1.jpg",
        description: "A drama set during the 1962 Indo-China war, following a man's unwavering faith that his brother will return. Budget: ₹100 crore | Box office gross: ₹211.14 crore | Verdict: Below Average." },

    { id: "tigerzindahai", title: "Tiger Zinda Hai",  year: "2017",      sortYear: 2017, popular: true,  cover: "images/movies/tigerzindahai-1.jpg",
        description: "RAW agent Tiger and ISI agent Zoya come out of hiding to rescue a group of Indian and Pakistani nurses held hostage by a terrorist organization. Budget: ₹130 crore | Box office gross: ₹565 crore | Verdict: Blockbuster.",
        ott: "Netflix" },

    { id: "race3", title: "Race 3", year: "2018", sortYear: 2018, popular: true, cover: "images/movies/race3-1.jpg",
        description: "An action-thriller and the third installment in the Race franchise, featuring an ensemble cast. Budget: ₹180 crore | Box office gross: ₹303 crore | Verdict: Average." },

    { id: "bharat", title: "Bharat", year: "2019", sortYear: 2019, popular: true, cover: "images/movies/bharat-1.jpg",
        description: "An epic drama spanning decades of Indian history as seen through the life of one man. Budget: ₹100 crore | Box office gross: ₹325.58 crore | Verdict: Semi Hit." },

    { id: "dabangg3",  title: "Dabangg 3",           year: "2019",      sortYear: 2019, popular: true,  cover: "images/movies/dabangg3-1.jpg",
        description: "Chulbul Pandey's past comes back to haunt him when an old enemy, Balli Singh, returns and puts his family in danger. Budget: ₹178 crore | Box office gross: ₹217 crore | Verdict: Flop.",
        ott: "Netflix" },

    { id: "radhe", title: "Radhe", year: "2021", sortYear: 2021, popular: true, cover: "images/movies/radhe-1.jpg",
        description: "An action film released direct-to-digital during the pandemic on a pay-per-view model. Budget: ₹90 crore | OTT earnings: ₹18.3 crore | Verdict: Super Successful on OTT." },

    { id: "antim", title: "Antim: The Final Truth", year: "2021", sortYear: 2021, popular: true, cover: "images/movies/antim-1.jpg",
        description: "A crime drama in which Salman Khan plays a cop pursuing a gangster, also marking Aayush Sharma's second lead role. Budget: ₹40 crore | Box office gross: ₹59 crore | Verdict: Flop." },

    { id: "kkbkj", title: "Kisi Ka Bhai Kisi Ki Jaan", year: "2023", sortYear: 2023, popular: true, cover: "images/movies/kkbkj-1.jpg",
        description: "An action-drama, released for Eid 2023, following a man's devotion to protecting his sisters. Budget: ₹125 crore | Box office gross: ₹182.44 crore | Verdict: Flop." },

    { id: "tiger3",     title: "Tiger 3",             year: "2023",      sortYear: 2023, popular: true,  cover: "images/movies/tiger3-1.jpg",
        description: "RAW agent Avinash \"Tiger\" Singh Rathore is forced to choose between his country and his family when an old enemy returns and threatens them both.",
        ott: "Amazon Prime Video" },

    { id: "wanted",    title: "Wanted",              year: "2009",      sortYear: 2009, popular: false, cover: "images/movies/wanted-1.jpg",
        description: "A small-time crook gets entangled with a mysterious, dangerous man who turns out to be far more than he appears.",
        ott: "Amazon Prime Video" }
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
   2c. POPULAR BGM DATA (used by the "Popular BGM" nav trigger)
   Reuses the single existing <audio id="bgMusic"> element on every page
   -- picking a track here just swaps its src and plays it, same element
   the floating music-toggle button already controls.
   NOTE: only "assets/audio/theme.mp3" exists on disk right now. Add real
   mp3 files at the other paths below (or rename them to match) and each
   row will start playing automatically -- until then, clicking those
   rows simply won't play anything (missing files fail silently).
   ------------------------------------------------------------- */
const bgmTracks = [
    { title: "Ek Tha Tiger",  movie: "Ek Tha Tiger",  src: "assets/audio/ekthatiger.mp3" },
    { title: "Radhe",         movie: "Radhe",         src: "assets/audio/radhe.mp3" },
    { title: "Sikandar",      movie: "Sikandar",      src: "assets/audio/sikandar.mp3" },
    { title: "Tere Naam BGM",      movie: "Tere Naam",      src: "assets/audio/terenaam.mp3" },
    { title: "Dabangg Chulbul Pandey",      movie: "Dabangg",      src: "assets/audio/dabangg.mp3" }
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
/* -------------------------------------------------------------
   3c. BACKGROUND MUSIC
   Tries to play automatically on every page load (once through, no
   loop). Most browsers block autoplay-with-sound until the visitor
   interacts with the page -- if that direct attempt is blocked, the
   track simply stays paused (no sound) until the visitor presses the
   floating button themselves. It does NOT start on a random click
   anywhere on the page -- only on load, or on an explicit press of
   the button.
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
                    // Autoplay blocked -- stay paused. The visitor can start
                    // playback anytime with the floating button below.
                    setPlayingUI(false);
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

    // Autoplay only on the home page (on load/refresh). On every other
    // page the music stays off by default -- the visitor has to start
    // it manually with the floating button; navigating between pages
    // must never auto-trigger playback again.
    const current = window.location.pathname.split("/").pop() || "index.html";
    const isHomePage = current === "index.html" || current === "";

    if (isHomePage) {
        tryAutoplay();
    } else {
        setPlayingUI(false);
    }
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
   3e-ii. POPULAR BGM MODAL
   Opened from any "Popular BGM" trigger (navbar link, mobile menu item,
   or the hero CTA on the homepage -- all share the .bgm-trigger class).
   Reuses the page's single <audio id="bgMusic"> element: picking a row
   swaps its src and plays it; clicking the currently-playing row's
   button again pauses it. The floating music-toggle button (initMusic)
   and this modal both just listen to the audio element's own play/
   pause/ended events, so their UI always stays in sync automatically.
   ------------------------------------------------------------- */
function initBgmList() {
    const triggers = document.querySelectorAll(".bgm-trigger");
    const modal = document.getElementById("bgmModal");
    const backdrop = document.getElementById("bgmModalBackdrop");
    const closeBtn = document.getElementById("bgmModalClose");
    const list = document.getElementById("bgmList");
    const audio = document.getElementById("bgMusic");

    if (!triggers.length || !modal || !list || !audio || !bgmTracks.length) return;

    list.innerHTML = bgmTracks.map(t => `
        <div class="bgm-list-item">
            <div class="bgm-track-info">
                <span class="bgm-track-title">${t.title}</span>
                <span class="bgm-track-movie">${t.movie}</span>
            </div>
            <button type="button" class="bgm-play-btn" data-bgm-src="${t.src}" aria-label="Play ${t.title}">
                <svg class="icon-play" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
                <svg class="icon-pause" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" hidden><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>
            </button>
        </div>
    `).join("");

    const playButtons = list.querySelectorAll(".bgm-play-btn");

    // Reflects which row (if any) matches the audio element's current
    // playing track -- called on open and whenever the audio element
    // itself fires play/pause/ended, so it stays correct even if the
    // floating music-toggle button is the one that paused it.
    const syncButtons = () => {
        playButtons.forEach(btn => {
            const isThis = !audio.paused && !!audio.currentSrc && audio.currentSrc.endsWith(btn.dataset.bgmSrc);
            btn.classList.toggle("is-playing", isThis);
            btn.querySelector(".icon-play").hidden = isThis;
            btn.querySelector(".icon-pause").hidden = !isThis;
        });
    };

    playButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const src = btn.dataset.bgmSrc;
            const isThisPlaying = !audio.paused && !!audio.currentSrc && audio.currentSrc.endsWith(src);

            if (isThisPlaying) {
                audio.pause();
                return;
            }

            if (!audio.currentSrc || !audio.currentSrc.endsWith(src)) {
                audio.src = src;
            }
            audio.play().catch(() => {});
        });
    });

    audio.addEventListener("play", syncButtons);
    audio.addEventListener("pause", syncButtons);
    audio.addEventListener("ended", syncButtons);

    const openModal = () => {
        modal.hidden = false;
        document.body.style.overflow = "hidden";
        syncButtons();
    };
    const closeModal = () => {
        modal.hidden = true;
        document.body.style.overflow = "";
    };

    triggers.forEach(trigger => {
        trigger.addEventListener("click", (e) => {
            e.preventDefault();
            openModal();
        });
    });

    backdrop.addEventListener("click", closeModal);
    closeBtn.addEventListener("click", closeModal);
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !modal.hidden) closeModal();
    });
}

/* -------------------------------------------------------------
   3e-iii. STANDALONE BGM PAGE (bgm.html)
   Renders every track from bgmTracks as a simple list row (same
   look as the old modal) into #bgmPageList. Shares the single
   <audio id="bgMusic"> element with the floating music-toggle
   button, so play state always stays in sync between the two.
   Only runs on pages that actually have #bgmPageList (i.e. bgm.html).
   ------------------------------------------------------------- */
function initBgmPage() {
    const list = document.getElementById("bgmPageList");
    const audio = document.getElementById("bgMusic");
    if (!list || !audio || !bgmTracks.length) return;

    list.innerHTML = bgmTracks.map(t => `
        <div class="bgm-list-item">
            <div class="bgm-track-info">
                <span class="bgm-track-title">${t.title}</span>
                <span class="bgm-track-movie">${t.movie}</span>
            </div>
            <button type="button" class="bgm-play-btn" data-bgm-src="${t.src}" aria-label="Play ${t.title}">
                <svg class="icon-play" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
                <svg class="icon-pause" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" hidden><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>
            </button>
        </div>
    `).join("");

    const playButtons = list.querySelectorAll(".bgm-play-btn");

    const syncButtons = () => {
        playButtons.forEach(btn => {
            const isThis = !audio.paused && !!audio.currentSrc && audio.currentSrc.endsWith(btn.dataset.bgmSrc);
            btn.classList.toggle("is-playing", isThis);
            btn.querySelector(".icon-play").hidden = isThis;
            btn.querySelector(".icon-pause").hidden = !isThis;
        });
    };

    playButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const src = btn.dataset.bgmSrc;
            const isThisPlaying = !audio.paused && !!audio.currentSrc && audio.currentSrc.endsWith(src);

            if (isThisPlaying) {
                audio.pause();
                return;
            }

            if (!audio.currentSrc || !audio.currentSrc.endsWith(src)) {
                audio.src = src;
            }
            audio.play().catch(() => {});
        });
    });

    audio.addEventListener("play", syncButtons);
    audio.addEventListener("pause", syncButtons);
    audio.addEventListener("ended", syncButtons);

    syncButtons();
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
        { key: "movies",    label: "Movies",     desc: "On-screen moments",image: "images/movies/karanarjun-1.jpg" },
        { key: "events",    label: "Events",     desc: "Public appearances" },
        { key: "bgm",       label: "Popular BGM", desc: "Iconic scores & tracks", image: "images/movies/kick-1.jpg" },
        { key: "old-photos", label: "Old Photos", desc: "Throwback archive" },
        { key: "wallpapers", label: "Wallpapers", desc: "HD downloads",image: "images/wallpapers/wallpaper-10.jpg" }
    ];

    // Movies, Wallpapers, Popular BGM, and Old Photos each have their own
    // dedicated page; the rest still point at gallery.html?category=...
    // until that page exists.
    const linkFor = (key) => {
        if (key === "movies") return "movies.html";
        if (key === "wallpapers") return "wallpapers.html";
        if (key === "bgm") return "bgm.html";
        if (key === "old-photos") return "old-photos.html";
        return `gallery.html?category=${key}`;
    };

    grid.innerHTML = categoryMeta.map(cat => {
        const sample = cat.image ? { image: cat.image } : photos.find(p => p.category === cat.key);
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
   5b. SHARED FULL-SCREEN PHOTO VIEWER
   Used by both the Wallpapers page and the Old Photos page. Wires
   up the single #photoViewer modal (present in each page's HTML)
   to a given list of photos: click/tap a grid card to open it full
   screen, with a top-left Back button, a bottom Download button,
   and Prev/Next (buttons, arrow keys, Escape to close).
   ------------------------------------------------------------- */
function initFullscreenPhotoViewer(items, grid, cardClass, altPrefix, fileNamePrefix) {
    const modal = document.getElementById("photoViewer");
    if (!modal) return;

    const modalImg = document.getElementById("photoViewerImg");
    const backdrop = document.getElementById("photoViewerBackdrop");
    const closeBtn = document.getElementById("photoViewerClose");
    const prevBtn = document.getElementById("photoViewerPrev");
    const nextBtn = document.getElementById("photoViewerNext");
    const downloadBtn = document.getElementById("photoViewerDownload");
    const shareBtn = document.getElementById("photoViewerShare"); // optional -- only present on some pages (e.g. wallpapers)
    const shareLabel = shareBtn ? shareBtn.querySelector(".photo-viewer-share-label") : null;

    let currentIndex = 0;

    const show = (index) => {
        currentIndex = (index + items.length) % items.length;
        const photo = items[currentIndex];
        modalImg.src = photo.image;
        modalImg.alt = `${altPrefix} ${currentIndex + 1}`;
        downloadBtn.dataset.download = photo.image;
        downloadBtn.dataset.name = `${fileNamePrefix}-${currentIndex + 1}`;
    };

    const open = (index) => {
        show(index);
        modal.hidden = false;
        document.body.style.overflow = "hidden";
        closeBtn.focus();
    };

    const close = () => {
        modal.hidden = true;
        document.body.style.overflow = "";
    };

    grid.addEventListener("click", (e) => {
        const card = e.target.closest(`.${cardClass}`);
        if (!card) return;
        open(Number(card.dataset.index));
    });

    grid.addEventListener("keydown", (e) => {
        if (e.key !== "Enter" && e.key !== " ") return;
        const card = e.target.closest(`.${cardClass}`);
        if (!card) return;
        e.preventDefault();
        open(Number(card.dataset.index));
    });

    backdrop.addEventListener("click", close);
    closeBtn.addEventListener("click", close);
    prevBtn.addEventListener("click", () => show(currentIndex - 1));
    nextBtn.addEventListener("click", () => show(currentIndex + 1));

    downloadBtn.addEventListener("click", async () => {
        const url = downloadBtn.dataset.download;
        const name = downloadBtn.dataset.name || fileNamePrefix;

        try {
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
            const link = document.createElement("a");
            link.href = url;
            link.download = `${name}.jpg`;
            link.click();
        }
    });

    // Share button is optional -- only wired up when the page actually
    // has one (currently just the Wallpapers viewer).
    if (shareBtn) {
        shareBtn.addEventListener("click", async () => {
            const absoluteUrl = new URL(downloadBtn.dataset.download, window.location.href).href;
            const shareData = {
                title: "Salman Khan Wallpaper",
                text: "Check out this Salman Khan wallpaper",
                url: absoluteUrl
            };

            // Native share sheet where supported (most mobile browsers).
            if (navigator.share) {
                try {
                    await navigator.share(shareData);
                } catch (err) {
                    // User cancelled the share sheet -- nothing to do.
                }
                return;
            }

            // Desktop fallback: copy the link and briefly confirm it.
            if (navigator.clipboard && navigator.clipboard.writeText) {
                try {
                    await navigator.clipboard.writeText(absoluteUrl);
                    if (shareLabel) {
                        shareLabel.textContent = "Copied!";
                        setTimeout(() => { shareLabel.textContent = "Share"; }, 1500);
                    }
                } catch (err) {
                    // Clipboard blocked -- nothing more we can do silently.
                }
            }
        });
    }

    document.addEventListener("keydown", (e) => {
        if (modal.hidden) return;
        if (e.key === "Escape") close();
        if (e.key === "ArrowLeft") show(currentIndex - 1);
        if (e.key === "ArrowRight") show(currentIndex + 1);
    });
}

/* -------------------------------------------------------------
   5c. WALLPAPERS PAGE RENDERER (used on wallpapers.html)
   Renders every photo flagged downloadable:true as a plain thumbnail.
   Tapping one opens the shared full-screen viewer (Back / Download /
   Prev / Next) instead of downloading straight from the grid.
   ------------------------------------------------------------- */
function renderWallpapers() {
    const grid = document.querySelector("[data-wallpaper-grid]");
    if (!grid) return;

    const wallpapers = photos.filter(p => p.category === "wallpapers");

    grid.innerHTML = wallpapers.map((photo, index) => `
      <figure class="wallpaper-card fade-up" data-index="${index}" tabindex="0" role="button"
              aria-label="Open wallpaper ${index + 1} of ${wallpapers.length} full screen">
        <img src="${photo.image}" alt="Salman Khan wallpaper ${index + 1}" loading="lazy"
             onerror="this.src='https://placehold.co/720x1280/1c1a20/c9a227?text=Wallpaper+${index + 1}'">
      </figure>
    `).join("");

    initFullscreenPhotoViewer(wallpapers, grid, "wallpaper-card", "Salman Khan wallpaper", "salman-khan-wallpaper");
}

/* -------------------------------------------------------------
   5d. OLD PHOTOS PAGE RENDERER (used on old-photos.html)
   Renders every photo in the "old-photos" category as a grid of
   throwback thumbnails. Tapping one opens the shared full-screen
   viewer (Back / Download / Prev / Next).
   ------------------------------------------------------------- */
function renderOldPhotos() {
    const grid = document.querySelector("[data-old-photos-grid]");
    if (!grid) return;

    const oldPhotos = photos.filter(p => p.category === "old-photos");

    grid.innerHTML = oldPhotos.map((photo, index) => `
      <figure class="old-photo-card fade-up" data-index="${index}" tabindex="0" role="button"
              aria-label="Open photo ${index + 1} of ${oldPhotos.length} full screen">
        <img src="${photo.image}" alt="Salman Khan throwback photo ${index + 1}" loading="lazy"
             onerror="this.src='https://placehold.co/600x750/1c1a20/c9a227?text=Photo+${index + 1}'">
      </figure>
    `).join("");

    initFullscreenPhotoViewer(oldPhotos, grid, "old-photo-card", "Salman Khan throwback photo", "salman-khan-old-photo");
}

/* -------------------------------------------------------------
   5c. MOVIES PAGE RENDERER (used on movies.html)
   Every movie now gets its OWN separate heading (its year), even if
   another movie shares the same release year -- movies are no longer
   merged/grouped under one shared year heading. Sort dropdown still
   works exactly as before (it just calls this function again).
   ------------------------------------------------------------- */
function renderMoviesPage(sortOrder) {
    const movieGrid = document.querySelector("[data-movie-grid]");
    if (!movieGrid) return;

    const order = sortOrder || "oldest";

    const popularMovies = movies
        .filter(m => m.popular)
        .sort((a, b) => order === "newest" ? b.sortYear - a.sortYear : a.sortYear - b.sortYear);

    movieGrid.innerHTML = popularMovies.map(m => `
      <div class="movie-year-group">
        <h3 class="movie-year-heading">${m.year}</h3>
        <div class="movie-year-row">
          <a href="movie-detail.html?id=${m.id}" class="movie-card">
            <span class="movie-poster">
              <img src="${m.cover}" alt="${m.title}" loading="lazy"
                   onerror="this.src='https://placehold.co/400x500/1c1a20/c9a227?text=${encodeURIComponent(m.title)}'">
            </span>
            <span class="movie-meta">
              <span class="movie-name">${m.title}</span>
              <span class="movie-year">${m.year}</span>
            </span>
          </a>
        </div>
      </div>
    `).join("");
}

/* -------------------------------------------------------------
   5c-ii. MOVIES SORT DROPDOWN (used on movies.html)
   A single themed "Sort" button top-right -- click opens a small menu
   with the two order options, click one to apply and close.
   ------------------------------------------------------------- */
function initMovieSort() {
    const dropdown = document.getElementById("sortDropdown");
    const toggle = document.getElementById("sortToggle");
    const menu = document.getElementById("sortMenu");
    if (!dropdown || !toggle || !menu) return;

    const closeMenu = () => {
        menu.style.display = "none";
        toggle.setAttribute("aria-expanded", "false");
    };
    const openMenu = () => {
        menu.style.display = "block";
        toggle.setAttribute("aria-expanded", "true");
    };

    toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        if (menu.style.display === "none") openMenu(); else closeMenu();
    });

    menu.querySelectorAll(".sort-option").forEach(btn => {
        btn.addEventListener("click", () => {
            menu.querySelectorAll(".sort-option").forEach(o => o.classList.toggle("active", o === btn));
            closeMenu();
            renderMoviesPage(btn.dataset.value);
        });
    });

    // Close when clicking anywhere outside, or on Escape
    document.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target)) closeMenu();
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeMenu();
    });
}

/* -------------------------------------------------------------
   5d. MOVIE DETAIL PAGE RENDERER (used on movie-detail.html)
   Reads ?id=<movieId> from the URL and renders that movie's
   poster, description, and OTT badge (OTT badge only if known).
   ------------------------------------------------------------- */
function renderMovieDetailPage() {
    const detailPanel = document.querySelector("[data-movie-detail]");
    if (!detailPanel) return;

    const id = new URLSearchParams(window.location.search).get("id");
    const m = movies.find(mv => mv.id === id) || movies.find(mv => mv.popular);

    if (!m) {
        detailPanel.innerHTML = `<p class="empty-state">Movie not found.</p>`;
        return;
    }

    document.title = `${m.title} | Salman Khan Photo Gallery`;

    detailPanel.innerHTML = `
      <div class="movie-detail-card in-view">
        <img src="${m.cover}" alt="${m.title}" class="movie-detail-poster"
             onerror="this.src='https://placehold.co/400x500/1c1a20/c9a227?text=${encodeURIComponent(m.title)}'">
        <div class="movie-detail-body">
          <h3>${m.title} <span class="movie-detail-year">${m.year}</span></h3>
          <p class="movie-detail-desc">${m.description}</p>
          ${m.ott ? `<span class="ott-badge">▶ Streaming on ${m.ott}</span>` : ""}
        </div>
      </div>
    `;
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
    initBgmList();
    initBgmPage();
    initDialogueParallax();
    initStatCounters();
    initTimelineProgress();
    renderFilmstrip();
    renderCategories();
    renderWallpapers();
    renderOldPhotos();
    renderMoviesPage();
    renderMovieDetailPage();
    initMovieSort();
    initScrollReveal();

    // Set active nav link based on current page
    const current = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a").forEach(link => {
        if (link.getAttribute("href") === current) link.classList.add("active");
    });
});