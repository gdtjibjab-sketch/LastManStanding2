function updateWorldCupCountdown() {
  const el = document.getElementById("countdown");
  if (!el) return;
  const worldCupStart = new Date("2026-06-11T00:00:00");
  const now = new Date();
  const msPerDay = 1000 * 60 * 60 * 24;
  const diff = worldCupStart - now;
  const daysLeft = Math.ceil(diff / msPerDay);
  if (daysLeft > 0) {
    el.textContent = daysLeft.toLocaleString();
  } else if (daysLeft === 0) {
    el.textContent = "Today";
  } else {
    el.textContent = "Live";
  }
}
updateWorldCupCountdown();
setInterval(updateWorldCupCountdown, 1000 * 60 * 60);

/* ── Affiliate tracking ───────────────────────────────────────────────
   When a visitor arrives via the affiliate link, Scaleo adds cid + affid
   to the URL. We remember those, then attach them to every toshi.bet
   link on the page so the IDs follow the user through to toshi.bet.
   ─────────────────────────────────────────────────────────────────── */
(function () {
  // 1) Remember the tracking IDs from the landing URL
  var params = new URLSearchParams(window.location.search);
  if (params.get("cid"))   localStorage.setItem("aff_cid", params.get("cid"));
  if (params.get("affid")) localStorage.setItem("aff_affid", params.get("affid"));

  // 2) Add them to every link that points to toshi.bet
  var cid   = localStorage.getItem("aff_cid");
  var affid = localStorage.getItem("aff_affid");
  if (!cid && !affid) return;

  document.querySelectorAll('a[href*="toshi.bet"]').forEach(function (a) {
    try {
      var url = new URL(a.href);
      if (cid)   url.searchParams.set("cid", cid);     // 'cid' = the param toshi.bet expects (test confirms)
      if (affid) url.searchParams.set("affid", affid);
      a.href = url.toString();
    } catch (e) {}
  });
})();
