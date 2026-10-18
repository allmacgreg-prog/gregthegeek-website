/* Renders window.PROJECTS into any element with data-projects.
   data-projects="featured" shows only featured projects; "all" shows everything. */
(function () {
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function art(p) {
    if (p.art === "pinball") {
      return '<div class="project-art art-pinball" aria-hidden="true"><span class="ball"></span>' +
        '<span class="art-label">' + esc(p.artLabel || p.title) + "</span></div>";
    }
    if (p.art === "book") {
      var n = [5, "", 3, "", 7, "", 1, "", 9];
      return '<div class="project-art art-book" aria-hidden="true"><div class="book">' +
        '<div class="bt">Greg the Geek\'s<span>Puzzle Paradise</span></div>' +
        '<div class="sudoku">' + n.map(function (x) { return "<i>" + x + "</i>"; }).join("") + "</div>" +
        '<div class="ba">VOLUME 1</div></div></div>';
    }
    return '<div class="project-art"><img src="' + esc(p.art) + '" alt="' + esc(p.title) + '" loading="lazy"></div>';
  }
  function card(p, compact) {
    var feats = (p.features || []).map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("");
    var links = (p.links || []).map(function (l, i) {
      return '<a class="btn' + (i === 0 ? " primary" : "") + '" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + "</a>";
    }).join("");
    var ups = (p.updates || []).slice(0, compact ? 1 : 5).map(function (u) {
      return '<li><time datetime="' + esc(u.date) + '">' + esc(u.date) + "</time>" + esc(u.text) + "</li>";
    }).join("");
    return '<article class="project" id="' + esc(p.id) + '">' + art(p) +
      '<div class="project-body">' +
      '<span class="status ' + esc(p.status) + '">' + esc(p.statusLabel) + "</span>" +
      "<h3>" + esc(p.title) + "</h3>" +
      '<p class="summary">' + esc(p.summary) + "</p>" +
      (compact ? "" : '<ul class="features">' + feats + "</ul>") +
      (links ? '<div class="btn-row">' + links + "</div>" : "") +
      (ups ? '<div class="updates"><h4>' + (compact ? "Latest" : "Updates") + "</h4><ol>" + ups + "</ol></div>" : "") +
      "</div></article>";
  }
  document.querySelectorAll("[data-projects]").forEach(function (el) {
    var mode = el.getAttribute("data-projects");
    var list = (window.PROJECTS || []).filter(function (p) { return mode !== "featured" || p.featured; });
    el.innerHTML = list.map(function (p) { return card(p, mode === "featured"); }).join("");
  });
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
