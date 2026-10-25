/* Leave-a-review form: emails the review to Greg through Web3Forms
   (same access key as the contact form, set in site-config.js).
   Nothing is posted to the site automatically. Greg picks which reviews to add. */
(function () {
  var cfg = window.SITE_CONFIG || {};
  var form = document.getElementById("review-form");
  if (!form) return;
  var status = document.getElementById("review-status");
  var btn = form.querySelector("button[type=submit]");

  function show(msg, kind) {
    status.textContent = msg;
    status.className = "form-status " + (kind || "");
    status.hidden = false;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.reportValidity()) {
      if (!form.querySelector("input[name=rating]:checked")) show("Please pick a star rating.", "error");
      return;
    }
    if (!cfg.formKey) {
      show("The review form isn't switched on yet. Please call or text (408) 506-8546.", "error");
      return;
    }
    var data = Object.fromEntries(new FormData(form).entries());
    if (data.botcheck) return; // spam trap
    var stars = parseInt(data.rating, 10) || 0;
    var payload = {
      access_key: cfg.formKey,
      subject: "New review: " + stars + " star" + (stars === 1 ? "" : "s") + " from " + (data.name || "a customer"),
      from_name: "GregTheGeek.com reviews",
      name: data.name,
      email: data.email,
      "Rating": "★".repeat(stars) + "☆".repeat(5 - stars) + " (" + stars + " of 5)",
      "Service": data.service,
      "Review": data.review,
      "OK to publish": data.ok_to_publish ? "Yes" : "No, keep private"
    };
    btn.disabled = true;
    btn.textContent = "Sending…";
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload)
    })
      .then(function (r) { return r.json(); })
      .then(function (res) {
        if (res.success) {
          form.reset();
          show("Thank you! Your review is on its way to me. I really appreciate it.", "ok");
        } else {
          show("That didn't go through. Please try again, or call or text (408) 506-8546.", "error");
        }
      })
      .catch(function () {
        show("That didn't go through. Check your connection and try again.", "error");
      })
      .finally(function () {
        btn.disabled = false;
        btn.textContent = "Send my review";
      });
  });
})();
