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
   ===================================================================== */
window.PROJECTS = [
  {
    id: "pinball-parallax",
    title: "Pinball Parallax",
    status: "dev",
    statusLabel: "In development · PC",
    featured: true,
    art: "assets/pinball/lobby.jpg",
    artAlt: "Pinball Parallax table-select arcade with Sunset Circuit and Mirrorball Fever cabinets",
    summary:
      "A next-generation pinball game built in Unreal Engine 5, designed to look and feel like a real modern arcade machine. Walk up to a row of cabinets in a neon arcade and pick a table: Sunset Circuit, Mirrorball Fever and Saturday Morning Mayhem are free, with Doubloon Reef leading the themed tables to follow.",
    features: [
      "Webcam head tracking: move your head and the table's perspective shifts for a holographic, look-through-the-glass effect",
      "Real pinball hardware on every table: star posts, rubber-band slingshots, pop bumpers, drop targets and wire ramps",
      "A 16-colour LED score display with its own animations for each table",
      "Adaptive music that reacts to how you play, with sound effects that change on every hit",
      "Photo mode with a free-roaming camera, controller rumble, and VR support planned"
    ],
    links: [
      // { label: "Wishlist on Steam", url: "https://store.steampowered.com/app/XXXX" }
    ],
    gallery: [
      { src: "assets/pinball/lobby.jpg", thumb: "assets/pinball/thumb-lobby.jpg", caption: "The table-select arcade: walk up to a cabinet and press start" },
      { src: "assets/pinball/sunset-bumpers.jpg", thumb: "assets/pinball/thumb-sunset-bumpers.jpg", caption: "Sunset Circuit: pop bumpers under the wire ramps" },
      { src: "assets/pinball/doubloon-reef-table.jpg", thumb: "assets/pinball/thumb-doubloon-reef-table.jpg", caption: "Doubloon Reef: the pirate table, with your hands on the flipper buttons" },
      { src: "assets/pinball/mirrorball-upper.jpg", thumb: "assets/pinball/thumb-mirrorball-upper.jpg", caption: "Mirrorball Fever: the dance floor and DJ booth" },
      { src: "assets/pinball/smm-lower.jpg", thumb: "assets/pinball/thumb-smm-lower.jpg", caption: "Saturday Morning Mayhem: cartoon art and lit shot inserts" },
      { src: "assets/pinball/doubloon-reef-ramps.jpg", thumb: "assets/pinball/thumb-doubloon-reef-ramps.jpg", caption: "Doubloon Reef: smooth chrome wire ramps over the bumpers" },
      { src: "assets/pinball/slingshot.jpg", thumb: "assets/pinball/thumb-slingshot.jpg", caption: "Close-up: a slingshot with its rubber band, star posts and lit plastic" }
    ],
    updates: [
      { date: "2026-10-19", text: "Real pinball hardware is going in across all four tables: posts, bumpers, slingshots, flippers, drop and stand-up targets, and smooth wire ramps." },
      { date: "2026-10-19", text: "New 16-colour LED displays, and every cabinet in the arcade now has its own lit LED panel and speakers." },
      { date: "2026-10-18", text: "Doubloon Reef, the first pirate-themed table, is playable." },
      { date: "2026-10-17", text: "New adaptive music engine is in and play-tested." },
      { date: "2026-10-16", text: "Free launch table renamed to Sunset Circuit." }
    ]
  },
  {
    id: "puzzle-paradise",
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
