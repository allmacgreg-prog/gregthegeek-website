/* Contact form: sends through Web3Forms so the email address stays private.
   Booking: shows the Google Calendar booking page when one is configured. */
(function () {
  var cfg = window.SITE_CONFIG || {};

  // ----- Booking links / embed -----
  document.querySelectorAll("[data-booking-link]").forEach(function (a) {
    if (cfg.bookingUrl) { a.href = cfg.bookingUrl; a.target = "_blank"; a.rel = "noopener"; }
  });
  var embed = document.getElementById("booking-embed");
  if (embed) {
    if (cfg.bookingUrl) {
      var f = document.createElement("iframe");
      f.src = cfg.bookingUrl;
      f.title = "Book an appointment with Greg the Geek";
      f.loading = "lazy";
      embed.innerHTML = "";
      embed.appendChild(f);
      embed.classList.add("live");
    }
  }

  // ----- Contact form -----
  var form = document.getElementById("contact-form");
  if (!form) return;
  var status = document.getElementById("form-status");
  var btn = form.querySelector("button[type=submit]");

  function show(msg, kind) {
    status.textContent = msg;
    status.className = "form-status " + (kind || "");
    status.hidden = false;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.reportValidity()) return;
    if (!cfg.formKey) {
      show("The message form isn't switched on yet. Please call or text (408) 506-8546.", "error");
      return;
    }
    var data = Object.fromEntries(new FormData(form).entries());
    if (data.botcheck) return; // spam trap
    data.access_key = cfg.formKey;
    data.subject = "Website request: " + (data.issue || "General question") + " — " + (data.name || "");
    data.from_name = "GregTheGeek.com";
    btn.disabled = true;
    btn.textContent = "Sending…";
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data)
    })
      .then(function (r) { return r.json(); })
      .then(function (res) {
        if (res.success) {
          form.reset();
          show("Thanks! Your message is on its way to me. I'll get back to you as soon as I can.", "ok");
        } else {
          show("That didn't go through. Please try again, or call or text (408) 506-8546.", "error");
        }
      })
      .catch(function () {
        show("That didn't go through. Check your connection and try again, or call or text (408) 506-8546.", "error");
      })
      .finally(function () {
        btn.disabled = false;
        btn.textContent = "Send message";
      });
  });
})();
