let songs = [
	{
		songNumber: 1,
		songName: "The Avengers Theme",
		artistName: "Alan Silvestri",
		duration: 123,
		angle: 2.927,
		querySelectorName: ".song #avengers",
	},
	{
		songNumber: 2,
		songName: "Shape Of You",
		artistName: "Ed Sheeran",
		duration: 31,
		angle: 11.613,
		querySelectorName: ".song #shape-of-you",
	},
];
let index = 1;
let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");
let progressStartValue = 0;
let progressEndValue = songs[index].duration;
let songEndTime = document.querySelector(".track-time #end");
let speed = 1000;
let song = document.querySelector(songs[index].querySelectorName);
let play = document.querySelector(".play");
let pause = document.querySelector(".pause");
let trackTime = document.querySelector(".track-time #time");
let currTime = 0;
// let firstTime = true;
function getCurrentTime() {
	currTime = Math.floor(song.currentTime);
	currTime = currTime + 1;
	if (currTime < 60) {
		if (currTime < 10) {
			trackTime.textContent = `00 : 0${currTime}`;
		} else {
			trackTime.textContent = `00 : ${currTime}`;
		}
	} else if (currTime >= 60 && currTime < 120) {
		if (currTime % 60 < 10) {
			trackTime.textContent = `01 : 0${currTime % 60}`;
		} else {
			trackTime.textContent = `01 : ${currTime % 60}`;
		}
	} else {
		trackTime.textContent = `02 : 0${currTime % 120}`;
	}
}
function playSong() {
	if (index == 1) {
		songEndTime.textContent = `0${Math.floor(songs[index].duration / 60)} : ${
			songs[index].duration % 60
		}`;
	}

	song.play();
	play.style.display = "none";
	pause.style.display = "flex";
	pause.style.marginLeft = "-2.5px";
	let progress = setInterval(() => {
		getCurrentTime();
		progressStartValue = Math.floor(song.currentTime) + 1;
		// valueContainer.textContent = `${progressStartValue}%`;
		progressBar.style.background = `conic-gradient(
				#b0b0b0 ${(progressStartValue + 0.5) * songs[index].angle}deg,
				#252525 ${(progressStartValue + 0.5) * songs[index].angle}deg
		)`;
		if (progressStartValue == progressEndValue) {
			clearInterval(progress);
			play.style.display = "block";
			pause.style.display = "none";
			play.style.marginLeft = "2.5px";
			progressBar.style.background = "#252525";
			trackTime.textContent = `00 : 00`;
		}
	}, speed);
}
function pauseSong() {
	// firstTime = false;
	progressStartValue--;
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
