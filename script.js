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
