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
let index = 0;
let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");
let progressStartValue = 0;
//let progressEndValue = songs[index].duration; //******** */
let progressEndValue = 0;
let songEndTime = document.querySelector(".track-time #end");
const speed = 1000;
let song = document.querySelector(songs[index].querySelectorName); //******
// let song = 0;
let play = document.querySelector(".play");
let pause = document.querySelector(".pause");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let volume = document.querySelector(".volume");
let mute = document.querySelector(".mute");
let prevBtn = document.querySelector("#prevBtn");
let nextBtn = document.querySelector("#nextBtn");
let trackTime = document.querySelector(".track-time #time");
let currTime = 0;
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
function playNext() {
	if (index == 0) {
		document.querySelector(".track-name .name").textContent =
			songs[index + 1].songName;
		document.querySelector(".track-name .artist").textContent =
			songs[index + 1].artistName;
		song.pause();
		progressBar.style.background = "#252525";
		trackTime.textContent = `00 : 00`;
		index = index + 1;
		song.currentTime = 0;
		playSong();
		next.style.opacity = "0.3";
		prev.style.opacity = "1";
	}
}
function playPrev() {
	if (index == 1) {
		document.querySelector(".track-name .name").textContent =
			songs[index - 1].songName;
		document.querySelector(".track-name .artist").textContent =
			songs[index - 1].artistName;
		song.pause();
		progressBar.style.background = "#252525";
		trackTime.textContent = `00 : 00`;
		index = index - 1;
		song.currentTime = 0;
		playSong();
		next.style.opacity = "1";
		prev.style.opacity = "0.3";
	}
}
function songMute() {
	song.muted = true;
	volume.style.display = "none";
	mute.style.display = "flex";
}
function songUnmute() {
	song.muted = false;
	mute.style.display = "none";
	volume.style.display = "flex";
}
function loop() {}
function playSong() {
	if (index == 1) {
		songEndTime.textContent = `0${Math.floor(songs[index].duration / 60)} : ${
			songs[index].duration % 60
		}`;
	}
	progressEndValue = songs[index].duration;
	song = document.querySelector(songs[index].querySelectorName);
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
