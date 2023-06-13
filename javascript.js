var startButton = document.getElementById("startButton");
var stopButton = document.getElementById("stopButton");
var timerElement = document.getElementById("timer");

startButton.addEventListener("click", function () {
  timerElement.classList.add("rotate");
});

stopButton.addEventListener("click", function () {
  timerElement.classList.remove("rotate");
});
