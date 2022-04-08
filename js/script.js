function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


let wallpapers = ["red-gradient", "night-city", "burger", "bluewaves"];

let randomWallpaper = wallpapers[Math.floor(Math.random()*wallpapers.length)];

document.body.style.backgroundImage = "url('wallpapers/" + randomWallpaper + ".jpg')"; 

function goTo(url){
    window.location = (url);
}


const f = document.getElementById('form');
const q = document.getElementById('query');
const google = 'https://www.google.com/search?q=';

function submitted(event) {
  event.preventDefault();
  const url = google + q.value;
  document.getElementById("query").value = "";
  const win = window.open(url, '_blank');
  win.focus();
}

f.addEventListener('submit', submitted);