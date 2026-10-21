/* =====================================================================
   GREG THE GEEK — PROJECTS
   This is the only file you need to edit to add a project or post an update.
   - New project: copy one { ... } block, paste it at the TOP of the list, edit it.
   - New update: add a line at the TOP of that project's "updates" list.
   - status: "dev" (In development), "soon" (Coming soon), "live" (Available now)
   - featured: true = also shows on the home page
   - art: "pinball", "book", or an image path like "assets/my-project.jpg"
   - cover: (books) a cover image shown on the book art, e.g. "assets/cover.jpg"
   - covers: (books) several covers shown side by side, newest last
   - gallery: screenshots shown under the project on the Projects page
       { src: full-size image, thumb: small version, caption: short text }
   - page: the project's own page (e.g. "pinball-parallax.html"); the Projects
       page shows a tile linking to it. A new project needs its own page too:
       copy pinball-parallax.html and change data-projects="..." to the new id.
   ===================================================================== */
window.PROJECTS = [
  {
    id: "pinball-parallax",
    page: "pinball-parallax.html",
    title: "Pinball Parallax",
    status: "dev",
    statusLabel: "In development · PC",
    featured: true,
    art: "assets/pinball/lobby.jpg",
    artAlt: "Pinball Parallax table-select arcade with the Sunset Circuit, Mirrorball Fever and Saturday Morning Mayhem cabinets",
    summary:
      "A next-generation pinball game built in Unreal Engine 5, designed to look and feel like a real modern arcade machine. Walk up to a row of cabinets in a neon arcade and pick a table: Sunset Circuit, Mirrorball Fever and Saturday Morning Mayhem are free to play, with more themed tables to follow.",
    features: [
      "3D-rendered art on every table: the playfields, backglasses and cabinets are rendered scenes, not flat drawings",
      "Glowing neon shot inserts that light up the art around them as you play",
      "Webcam head tracking: lean left or right and the whole table shifts like you're really leaning over a machine",
      "Real pinball hardware on every table: star posts, rubber-band slingshots, pop bumpers, drop targets and wire ramps",
      "Adaptive music that builds with your play, lights that pulse to the beat, and controller rumble that kicks in during multiball",
      "A 16-colour LED score display with its own animations for each table",
      "Achievements and high-score leaderboards, photo mode, and VR support planned"
    ],
    links: [
      { label: "Join the Discord", url: "https://discord.gg/hmX7Hf4E5" },
      { label: "Follow on Facebook", url: "https://www.facebook.com/profile.php?id=61595696966480" }
      // { label: "Wishlist on Steam", url: "https://store.steampowered.com/app/XXXX" }
    ],
    gallery: [
      { src: "assets/pinball/lobby.jpg", thumb: "assets/pinball/thumb-lobby.jpg", caption: "The table-select arcade: walk up to a cabinet and press start" },
      { src: "assets/pinball/sunset-inserts.jpg", thumb: "assets/pinball/thumb-sunset-inserts.jpg", caption: "Sunset Circuit: neon shot inserts over the new 3D-rendered road" },
      { src: "assets/pinball/sunset-bumpers.jpg", thumb: "assets/pinball/thumb-sunset-bumpers.jpg", caption: "Sunset Circuit: pop bumpers under the wire ramps, with the sun on the horizon" },
      { src: "assets/pinball/sunset-cabinet.jpg", thumb: "assets/pinball/thumb-sunset-cabinet.jpg", caption: "Sunset Circuit's cabinet, with its 3D-rendered side art" },
      { src: "assets/pinball/mirrorball-floor.jpg", thumb: "assets/pinball/thumb-mirrorball-floor.jpg", caption: "Mirrorball Fever: the light-up dance floor and DJ booth" },
      { src: "assets/pinball/mirrorball-bumpers.jpg", thumb: "assets/pinball/thumb-mirrorball-bumpers.jpg", caption: "Mirrorball Fever: the pop bumpers and the mirror ball" },
      { src: "assets/pinball/smm-room.jpg", thumb: "assets/pinball/thumb-smm-room.jpg", caption: "Saturday Morning Mayhem: a sunny living room, rendered in 3D" },
      { src: "assets/pinball/smm-cabinet.jpg", thumb: "assets/pinball/thumb-smm-cabinet.jpg", caption: "Saturday Morning Mayhem's cabinet in the arcade" },
      { src: "assets/pinball/smm-multiball-comic.jpg", thumb: "assets/pinball/thumb-smm-multiball-comic.jpg", caption: "Saturday Morning Mayhem multiball: ink-outlined balls and comic pop-ups on every hit" }
    ],
    updates: [
      { date: "2026-10-21", text: "Saturday Morning Mayhem's multiball now has a cartoon look: ink-outlined balls, speed lines, comic pop-ups (BOING! BAM! ZAP!) on every bumper and slingshot hit, and KABOOM! when two balls collide." },
      { date: "2026-10-21", text: "A polish pass on every table: a new clipping check makes sure no part passes through another, and the ball never rolls through a toy or decoration." },
      { date: "2026-10-21", text: "The outlanes were tuned after a simulated playtest of more than 100,000 balls, so balls last longer and drains feel fair, closer to a real machine." },
      { date: "2026-10-20", text: "Every table now has 3D-rendered playfield art, and the shot arrows and lights are glowing neon inserts that light up the art around them." },
      { date: "2026-10-20", text: "Head tracking feels much more natural: lean left and the whole table shifts right, just like leaning over a real machine." },
      { date: "2026-10-20", text: "The table lights now pulse to the music, and the controller rumbles on the beat during multiball." },
      { date: "2026-10-20", text: "A new animated splash screen, new slingshot, spinner and rollover sounds, and achievements and leaderboards are ready for launch." },
      { date: "2026-10-19", text: "New 3D-rendered cabinet and backglass art for every table, and a 90s neon confetti carpet for the arcade." },
      { date: "2026-10-19", text: "Real pinball hardware is going in across every table: posts, bumpers, slingshots, flippers, drop and stand-up targets, and smooth wire ramps." },
      { date: "2026-10-19", text: "New 16-colour LED displays, and every cabinet in the arcade now has its own lit LED panel and speakers." },
      { date: "2026-10-17", text: "New adaptive music engine is in and play-tested." },
      { date: "2026-10-16", text: "Free launch table renamed to Sunset Circuit." }
    ]
  },
  {
    id: "puzzle-paradise",
    page: "puzzle-paradise.html",
    title: "Greg the Geek's Puzzle Paradise",
    status: "live",
    statusLabel: "Available now on Amazon",
    featured: true,
    art: "book",
    covers: [
      { src: "assets/puzzle-paradise-vol1.jpg", alt: "Greg the Geek's Puzzle Paradise Volume 1 cover" },
      { src: "https://m.media-amazon.com/images/I/71MDnxRFi6L._SL800_.jpg", alt: "Greg the Geek's Puzzle Paradise Volume 2 cover" }
    ],
    summary:
      "A growing series of puzzle books packed with crosswords, Sudoku and word searches, for puzzlers of every skill level. Volumes 1 and 2 are out now on Amazon, with more on the way.",
    features: [
      "Volume 1: 45 challenge puzzles, with crosswords, Sudoku and word finds",
      "Volume 2: a fresh mix of Sudoku, word searches and crosswords in a large 8.5 x 11 inch paperback",
      "Both volumes available now on Amazon",
      "Volume 3 is already in the works"
    ],
    links: [
      { label: "Get Volume 2 on Amazon", url: "https://www.amazon.com/dp/B0HNKJYQVG" },
      { label: "Get Volume 1 on Amazon", url: "https://www.amazon.com/dp/B0HN6NWBCH" }
    ],
    updates: [
      { date: "2026-10-16", text: "Volume 2 is published and available on Amazon." },
      { date: "2026-10", text: "Volume 1 is published and available on Amazon." }
    ]
  }
];
