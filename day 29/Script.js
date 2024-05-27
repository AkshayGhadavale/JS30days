let countdown;
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;

  countdown = setInterval(() => {
    const secondsleft = Math.round((then - Date.now()) / 1000);

    if (secondsleft <= 0) {
      clearInterval(countdown);
      return;
    }

    console.log(secondsleft);
    displaytimeleft(secondsleft);
    displayEndTime(then);
  }, 1000);
}

function displaytimeleft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const reminderseconds = seconds % 60;
  const display = `${minutes}:${
    reminderseconds < 10 ? "0" : ""
  }${reminderseconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}


function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour - 12 : hour;
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
  }

  function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
  }

  buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  console.log(mins);
  timer(mins * 60);
  this.reset();
});