const openButton = document.getElementById('openButton');
const opening = document.getElementById('opening');
const invitation = document.getElementById('invitation');
const music = document.getElementById('bgMusic');
let isPlaying = false;

// Fade-in
window.addEventListener("load", () => {
  document.querySelectorAll(".fade-in").forEach(el => el.classList.add("show"));
});

// Buka undangan
openButton.addEventListener('click', () => {
  opening.classList.remove('show');
  setTimeout(() => {
    opening.style.display = 'none';
    invitation.classList.remove('hidden');
    setTimeout(() => invitation.classList.add('show'), 100);
  }, 800);

  music.play().then(() => {
    isPlaying = true;
  }).catch(() => console.log("User interaction required"));
  startCountdown();
});

// Countdown ke 14 Oktober 2026, 16:00 WIB
const TARGET_DATE = new Date('2026-10-14T14:00:00').getTime();

function startCountdown() {
  setInterval(() => {
    const now = new Date().getTime();
    const diff = TARGET_DATE - now;

    if (diff <= 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }, 1000);
}

// Simpan ke kalender
function saveToCalendar() {
  alert("📅 Acara wisuda telah disimpan di kalender Anda!");
}