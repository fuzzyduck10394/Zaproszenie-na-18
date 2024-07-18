document.addEventListener("DOMContentLoaded", function () {
  const image = document.getElementById("initial-image");
  const imageContainer = document.getElementById("image-container");
  const mainContent = document.getElementById("main-content");
  let clickCount = 0;
  let size = 1;

  const click1 = new Audio("./content/clicks/click (1).mp3");
  const click2 = new Audio("./content/clicks/click (2).mp3");
  const click3 = new Audio("./content/clicks/click (3).mp3");
  const click4 = new Audio("./content/clicks/click (4).mp3");
  const click5 = new Audio("./content/clicks/click (5).mp3");

  image.addEventListener("click", function () {
    clickCount++;
    size++;
    image.style.transform = `scale(${size})`;

    if (clickCount == 1) click1.play();
    else if (clickCount == 2) click2.play();
    else if (clickCount == 3) click3.play();
    else if (clickCount == 4) click4.play();
    else if (clickCount == 5) click5.play();

    if (clickCount >= 5) {
      setTimeout(() => {
        imageContainer.style.transform = "translateY(-100%)";
        setTimeout(() => {
          imageContainer.style.display = "none";
          mainContent.classList.remove("hidden");
          mainContent.classList.add("fade-in");
          setTimeout(() => {
            mainContent.classList.add("visible");
          }, 100);
        }, 500);
      }, 500);
    }
  });

  const eventDate = new Date("2024-08-30T20:00:00");

  function getCorrectWordForm(number, words) {
    if (number >= 5 && number <= 21) return words[2];
    else if (number === 1) return words[0]; // "sekunda"

    number = number % 10;

    if (number >= 2 && number <= 4) return words[1]; // "sekundy"
    return words[2]; // "sekund"
  }

  function updateCountdown() {
    const now = new Date();
    const timeLeft = eventDate - now;

    const days = Math.max(0, Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
    const hours = Math.max(
      0,
      Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const minutes = Math.max(
      0,
      Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
    );
    const seconds = Math.max(0, Math.floor((timeLeft % (1000 * 60)) / 1000));

    document.getElementById("days").innerText = days;
    document.getElementById("days-label").innerText = getCorrectWordForm(days, [
      "dzień",
      "dni",
      "dni",
    ]);

    document.getElementById("hours").innerText = hours;
    document.getElementById("hours-label").innerText = getCorrectWordForm(
      hours,
      ["godzina", "godziny", "godzin"]
    );

    document.getElementById("minutes").innerText = minutes;
    document.getElementById("minutes-label").innerText = getCorrectWordForm(
      minutes,
      ["minuta", "minuty", "minut"]
    );

    document.getElementById("seconds").innerText = seconds;
    document.getElementById("seconds-label").innerText = getCorrectWordForm(
      seconds,
      ["sekunda", "sekundy", "sekund"]
    );
  }

  const countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown();
});
