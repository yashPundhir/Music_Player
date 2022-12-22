let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");
let progressStartValue = 0;
let progressEndValue = 100;
let speed = 100;
let progress = setInterval(() => {
	progressStartValue = progressStartValue + 1;
	// valueContainer.textContent = `${progressStartValue}%`;
	{
		progressBar.style.background = `conic-gradient(
      #ff9955 ${(progressStartValue + 0.5) * 3.6}deg,
    #fee1ce ${(progressStartValue + 0.5) * 3.6}deg
  )`;
	}
	if (progressStartValue == progressEndValue) {
		clearInterval(progress);
	}
}, speed);
