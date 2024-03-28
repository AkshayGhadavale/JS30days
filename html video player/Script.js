const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressbar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const fullscrebtn = player.querySelector(".fullscreen");

function toggleplay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function updatebtn() {
  const icon = this.paused ? "▶" : "⏸";
  toggle.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handlerange(){
    video[this.name]=this.value;

}

function handleprogress(){
const percent = (video.currentTime/video.duration)*100;
progressbar.style.flexBasis=`${percent}%`;
}

function srcub(e){
const cribtime =(e.offsetX/progress.offsetWidth)*video.duration;
video.currentTime=cribtime
}

function openFullscreen() {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { /* Safari */
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE11 */
      video.msRequestFullscreen();
    }
  }


video.addEventListener("click", toggleplay);
toggle.addEventListener("click", toggleplay);

//update play button

video.addEventListener("play", updatebtn);
video.addEventListener("pause", updatebtn);


video.addEventListener("timeupdate", handleprogress);



skipButtons.forEach((button) => button.addEventListener("click", skip));


fullscrebtn.addEventListener("click", openFullscreen);


ranges.forEach((button) => button.addEventListener("change", handlerange));
ranges.forEach((button) => button.addEventListener("mousemove", handlerange));

let mousedown =false;
progress.addEventListener('click',srcub)
progress.addEventListener('mousemove',(e)=> mousedown && srcub(e))

progress.addEventListener('mousedown',()=> mousedown=true)
progress.addEventListener('mouseup',()=> mousedown=false)