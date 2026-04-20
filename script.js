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

function updateLivePlayers() {
  const el = document.getElementById("livePlayers");
  if (!el) return;

  const base = 10284;
  const variance = Math.floor(Math.random() * 80);
  const direction = Math.random() > 0.5 ? 1 : -1;
  const value = base + variance * direction;

  el.textContent = value.toLocaleString();
}

updateWorldCupCountdown();
updateLivePlayers();

setInterval(updateWorldCupCountdown, 1000 * 60 * 60);
setInterval(updateLivePlayers, 1000 * 12);
