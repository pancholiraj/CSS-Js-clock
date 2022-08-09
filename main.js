const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hrHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegree = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;

  const mins = now.getMinutes();
  const minsDegree = (mins / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minsDegree}deg)`;

  const hr = now.getHours();
  const hrDegree = (hr / 12) * 360 + 90;
  hrHand.style.transform = `rotate(${hrDegree}deg)`;
}

setInterval(setDate, 1000);
