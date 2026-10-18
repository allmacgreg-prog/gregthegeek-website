/* =====================================================================
   GREG THE GEEK — PROJECTS
   This is the only file you need to edit to add a project or post an update.
   - New project: copy one { ... } block, paste it at the TOP of the list, edit it.
   - New update: add a line at the TOP of that project's "updates" list.
   - status: "dev" (In development), "soon" (Coming soon), "live" (Available now)
   - featured: true = also shows on the home page
   - art: "pinball", "book", or an image path like "assets/my-project.jpg"
   - cover: (books) a cover image shown on the book art, e.g. "assets/cover.jpg"
   ===================================================================== */
window.PROJECTS = [
  {
    id: "pinball-parallax",
    title: "Pinball Parallax",
    status: "dev",
    statusLabel: "In development · PC",
    featured: true,
    art: "pinball",
    artLabel: "SUNSET CIRCUIT",
    summary:
      "A next-generation pinball game built in Unreal Engine 5, designed to look and feel like a real modern arcade machine. The first table, Sunset Circuit, is a free-to-play retro-wave ride, with more themed tables to follow.",
    features: [
      "Webcam head tracking: move your head and the table's perspective shifts for a holographic, look-through-the-glass effect",
      "Adaptive music that reacts to how you play, with sound effects that change on every hit",
      "Photo mode with a free-roaming camera",
      "VR support planned, plus controller rumble",
      "A table-select lineup, with new themed tables added over time"
    ],
    links: [
      // { label: "Wishlist on Steam", url: "https://store.steampowered.com/app/XXXX" }
    ],
    updates: [
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
    cover: "assets/puzzle-paradise-vol1.jpg",
    summary:
      "A growing series of puzzle books packed with crosswords, Sudoku and word searches. Volume 1 is out now on Amazon, with more volumes on the way.",
    features: [
      "Volume 1: 45 challenge puzzles, with crosswords, Sudoku and word finds",
      "Available now on Amazon",
      "Volumes 2 and 3 are already in the works"
    ],
    links: [
      { label: "Get Volume 1 on Amazon", url: "https://www.amazon.com/dp/B0HN6NWBCH" }
    ],
    updates: [
      { date: "2026-10", text: "Volume 1 is published and available on Amazon." }
    ]
  }
];
