let homeScore = 0;
let guestScore = 0;

document.getElementById("home-score").textContent = homeScore;
document.getElementById("guest-score").textContent = guestScore;

function addHomePoints(values) {
  homeScore += values;
  const homeSpan = document.getElementById("home-score");
  homeSpan.textContent = homeScore;

  homeSpan.classList.add("highlights");
  setTimeout(
    () => { homeSpan.classList.remove("highlights") }, 500
  );
}

function addGuestPoints(values) {
  guestScore += values;
  const guestSpan = document.getElementById("guest-score");
  guestSpan.textContent = guestScore;

  guestSpan.classList.add("highlights");
  setTimeout(
    () => { guestSpan.classList.remove("highlights") }, 500
  );
}
