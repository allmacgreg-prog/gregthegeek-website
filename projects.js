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
    if (p.art === "book" && p.covers && p.covers.length) {
      return '<div class="project-art art-book' + (p.covers.length > 1 ? " art-books" : "") + '">' + p.covers.map(function (c) {
        return '<img class="book-cover" src="' + esc(c.src) + '" alt="' + esc(c.alt || p.title + " cover") + '" loading="lazy" onerror="this.remove()">';
      }).join("") + "</div>";
    }
    if (p.art === "book" && p.cover) {
      return '<div class="project-art art-book"><img class="book-cover" src="' + esc(p.cover) + '" alt="' + esc(p.title) + ' cover" loading="lazy"></div>';
    }
    if (p.art === "book") {
      var n = [5, "", 3, "", 7, "", 1, "", 9];
      return '<div class="project-art art-book" aria-hidden="true"><div class="book">' +
        '<div class="bt">Greg the Geek\'s<span>Puzzle Paradise</span></div>' +
        '<div class="sudoku">' + n.map(function (x) { return "<i>" + x + "</i>"; }).join("") + "</div>" +
        '<div class="ba">VOLUME 1</div></div></div>';
    }
    return '<div class="project-art"><img src="' + esc(p.art) + '" alt="' + esc(p.artAlt || p.title) + '" loading="lazy"></div>';
  }
  function gallery(p) {
    if (!p.gallery || !p.gallery.length) return "";
    return '<div class="gallery"><h4>Screenshots</h4><ul>' + p.gallery.map(function (g, i) {
      return '<li><button type="button" class="shot" data-gallery="' + esc(p.id) + '" data-index="' + i + '">' +
        '<img src="' + esc(g.thumb || g.src) + '" alt="' + esc(g.caption || p.title) + '" loading="lazy" width="640" height="360"></button></li>';
    }).join("") + "</ul></div>";
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
      "</div>" + (compact ? "" : gallery(p)) + "</article>";
  }
  // a simple viewer for the screenshots: click to enlarge, arrows / swipe-free buttons to step through
  function viewer() {
    var dlg = document.createElement("dialog");
    dlg.className = "viewer";
    dlg.innerHTML = '<figure><img alt=""><figcaption></figcaption></figure>' +
      '<button type="button" class="v-prev" aria-label="Previous screenshot">&#8249;</button>' +
      '<button type="button" class="v-next" aria-label="Next screenshot">&#8250;</button>' +
      '<button type="button" class="v-close" aria-label="Close">&times;</button>';
    document.body.appendChild(dlg);
    var list = [], at = 0;
    function show(i) {
      at = (i + list.length) % list.length;
      dlg.querySelector("img").src = list[at].src;
      dlg.querySelector("img").alt = list[at].caption || "";
      dlg.querySelector("figcaption").textContent = list[at].caption || "";
    }
    document.addEventListener("click", function (e) {
      var b = e.target.closest ? e.target.closest(".shot") : null;
      if (!b) return;
      var p = (window.PROJECTS || []).filter(function (x) { return x.id === b.getAttribute("data-gallery"); })[0];
      if (!p) return;
      list = p.gallery;
      show(parseInt(b.getAttribute("data-index"), 10) || 0);
      if (dlg.showModal) dlg.showModal(); else window.open(list[at].src, "_blank");
    });
    dlg.querySelector(".v-prev").addEventListener("click", function () { show(at - 1); });
    dlg.querySelector(".v-next").addEventListener("click", function () { show(at + 1); });
    dlg.querySelector(".v-close").addEventListener("click", function () { dlg.close(); });
    dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") show(at - 1);
      if (e.key === "ArrowRight") show(at + 1);
    });
  }
  if (document.querySelector('[data-projects="all"]')) viewer();
  document.querySelectorAll("[data-projects]").forEach(function (el) {
    var mode = el.getAttribute("data-projects");
    var list = (window.PROJECTS || []).filter(function (p) { return mode !== "featured" || p.featured; });
    el.innerHTML = list.map(function (p) { return card(p, mode === "featured"); }).join("");
  });
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
