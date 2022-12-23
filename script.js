let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");
let progressStartValue = 0;
let progressEndValue = 123;
let speed = 1000;
// let progress = setInterval(() => {
// 	progressStartValue = progressStartValue + 1;
// 	// valueContainer.textContent = `${progressStartValue}%`;
// 	{
// 		progressBar.style.background = `conic-gradient(
//       #b0b0b0 ${(progressStartValue + 0.5) * 2.927}deg,
//       #252525 ${(progressStartValue + 0.5) * 2.927}deg
//   )`;
// 	}
// 	if (progressStartValue == progressEndValue) {
// 		clearInterval(progress);
// 	}
// }, speed);
let song = document.querySelector(".song audio");
let play = document.querySelector(".play");
let pause = document.querySelector(".pause");
function playSong() {
	song.play();
	play.style.display = "none";
	pause.style.display = "flex";
	pause.style.marginLeft = "-2.5px";
	// let progress = setInterval(() => {
	// 	progressStartValue = progressStartValue + 1;
	// 	valueContainer.textContent = `${progressStartValue}%`;
	// 	{
	// 		progressBar.style.background = `conic-gradient(
	// 			#b0b0b0 ${(progressStartValue + 0.5) * 2.927}deg,
	// 			#252525 ${(progressStartValue + 0.5) * 2.927}deg
	// 	)`;
	// 	}
	// 	if (progressStartValue == progressEndValue) {
	// 		clearInterval(progress);
	// 	}
	// }, speed);
}
function pauseSong() {
	song.pause();
	play.style.display = "block";
	pause.style.display = "none";
	play.style.marginLeft = "2.5px";
}
let favHollow = document.querySelector(".fav-hollow");
let favFill = document.querySelector(".fav-fill");
function like() {
	favHollow.style.display = "none";
	favFill.style.display = "flex";
	favFill.style.marginTop = "3px";
	favFill.style.marginRight = "5px";
}
function unlike() {
	favHollow.style.display = "flex";
	favFill.style.display = "none";
}
