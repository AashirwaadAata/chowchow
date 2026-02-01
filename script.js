/* Mood System */
const mood = document.getElementById("mood");
const moods = ["🙂","😭"];
let moodLevel = 0;
let resetInterval;

function makeSad() {
  if(moodLevel < moods.length - 1){
    moodLevel++;
    mood.textContent = moods[moodLevel];
  }
}

function makeHappy() {
  mood.textContent = "🥰💖😍";
}

function resetMoodSmooth(){
  clearInterval(resetInterval);
  resetInterval = setInterval(() => {
    if(moodLevel > 0){
      moodLevel--;
      mood.textContent = moods[moodLevel];
    } else {
      clearInterval(resetInterval);
    }
  }, 200);
}

/* No Button */
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseenter", () => {
  moveNo();
  makeSad();
});

noBtn.addEventListener("click", () => {
  moveNo();
  makeSad();
});

noBtn.addEventListener("mouseleave", resetMoodSmooth);

function moveNo() {
  const maxX = 385;
  const maxY = 52;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

/* Yes Button */
const yesBtn = document.getElementById("yesBtn");

yesBtn.addEventListener("click", () => {

  makeHappy();
  startRain();
  startFlowerRain();
  startSparkleRain();

  // Music
  const bgMusic = document.getElementById("bgMusic");
  bgMusic.play().catch(()=>{});

  // Popup
  const popup = document.getElementById("customPopup");
  popup.classList.add("show");

  setTimeout(() => {
    popup.classList.remove("show");
  }, 2500);
});

/* Gift Video System */
const giftBtn = document.getElementById("giftBtn");
const videoPopup = document.getElementById("videoPopup");
const giftVideo = document.getElementById("giftVideo");
const closeVideo = document.getElementById("closeVideo");

giftBtn.addEventListener("click", () => {
  videoPopup.classList.add("show");
  giftVideo.play();
});

closeVideo.addEventListener("click", () => {
  videoPopup.classList.remove("show");
  giftVideo.pause();
  giftVideo.currentTime = 0;
});

/* Hearts */
function startRain(){
  const emojis = ["💖","💕","💘","💝","❤️","✨","💗","💞"];

  setInterval(() => {
    for(let i=0;i<4;i++){
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.textContent = emojis[Math.floor(Math.random()*emojis.length)];

      heart.style.left = Math.random()*100+"vw";
      heart.style.fontSize = (31+Math.random()*28)+"px";
      heart.style.animationDuration = (2+Math.random()*1.75)+"s";

      document.body.appendChild(heart);
      setTimeout(()=>heart.remove(),6000);
    }
  },180);
}

/* Flowers */
function startFlowerRain(){
  const flowers = ["🌸","🌺","🌼"];

  setInterval(()=>{
    for(let i=0;i<3;i++){
      const flower = document.createElement("div");
      flower.className="flower";
      flower.textContent=flowers[Math.floor(Math.random()*flowers.length)];

      flower.style.left=30+Math.random()*40+"vw";
      flower.style.fontSize=(24+Math.random()*20)+"px";
      flower.style.animationDuration=(3+Math.random()*1.5)+"s";

      document.body.appendChild(flower);
      setTimeout(()=>flower.remove(),4000);
    }
  },250);
}

/* Sparkles */
function startSparkleRain(){
  const sparkles=["✨","💫","🌟"];

  setInterval(()=>{
    for(let i=0;i<3;i++){
      const sparkle=document.createElement("div");
      sparkle.className="sparkle";
      sparkle.textContent=sparkles[Math.floor(Math.random()*sparkles.length)];

      sparkle.style.left=30+Math.random()*40+"vw";
      sparkle.style.fontSize=(16+Math.random()*20)+"px";
      sparkle.style.animationDuration=(3+Math.random()*1.5)+"s";

      document.body.appendChild(sparkle);
      setTimeout(()=>sparkle.remove(),4000);
    }
  },300);
}
