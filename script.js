function updateCountdown() {
  const el = document.getElementById("countdown");
  if (!el) return;

  const target = new Date("2026-06-11");
  const now = new Date();

  const diff = target - now;
  const days = Math.ceil(diff / (1000*60*60*24));

  el.innerText = days > 0 ? days : "Live";
}

function updatePlayers() {
  const el = document.getElementById("livePlayers");
  if (!el) return;

  const base = 10284;
  const rand = Math.floor(Math.random()*50);

  el.innerText = (base + rand).toLocaleString();
}

updateCountdown();
updatePlayers();

setInterval(updatePlayers, 10000);
