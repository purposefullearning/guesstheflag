console.log("Script loaded successfully");

let flags = [
  { country: "United States", code: "us" },
  { country: "Japan", code: "jp" },
  { country: "Brazil", code: "br" },
  { country: "United Kingdom", code: "gb" },
  { country: "Germany", code: "de" },
  { country: "France", code: "fr" },
  { country: "Canada", code: "ca" },
  { country: "Australia", code: "au" },
  { country: "India", code: "in" },
  { country: "China", code: "cn" },
  { country: "Russia", code: "ru" },
  { country: "South Africa", code: "za" },
  { country: "Mexico", code: "mx" },
  { country: "Italy", code: "it" },
  { country: "Spain", code: "es" },
  { country: "Argentina", code: "ar" },
  { country: "South Korea", code: "kr" },
  { country: "Sweden", code: "se" },
  { country: "Norway", code: "no" },
  { country: "Switzerland", code: "ch" },
  { country: "Netherlands", code: "nl" },
  { country: "Belgium", code: "be" },
  { country: "Portugal", code: "pt" },
  { country: "Greece", code: "gr" },
  { country: "Turkey", code: "tr" },
  { country: "Egypt", code: "eg" },
  { country: "Nigeria", code: "ng" },
  { country: "Kenya", code: "ke" },
  { country: "Ghana", code: "gh" },
  { country: "Morocco", code: "ma" },
  { country: "Algeria", code: "dz" },
  { country: "Poland", code: "pl" },
  { country: "Ukraine", code: "ua" },
  { country: "Finland", code: "fi" },
  { country: "Denmark", code: "dk" },
  { country: "Ireland", code: "ie" },
  { country: "New Zealand", code: "nz" },
  { country: "Thailand", code: "th" },
  { country: "Vietnam", code: "vn" },
  { country: "Indonesia", code: "id" },
  { country: "Malaysia", code: "my" },
  { country: "Singapore", code: "sg" },
  { country: "Colombia", code: "co" },
  { country: "Chile", code: "cl" },
  { country: "Peru", code: "pe" },
  { country: "Venezuela", code: "ve" },
  { country: "Saudi Arabia", code: "sa" },
  { country: "United Arab Emirates", code: "ae" }
];
let currentFlags = [];
let score = 0, lives = 3, currentFlagIndex = 0, timer, maxFlags;

document.addEventListener("DOMContentLoaded", () => {
  updateHomeLeaderboard();
});

function startGame(numFlags) {
  console.log("startGame called with", numFlags);
  document.getElementById("home-screen").style.display = "none";
  document.getElementById("game-screen").style.display = "block";
  score = 0;
  lives = 3;
  currentFlagIndex = 0;
  maxFlags = numFlags; // Set maxFlags for the game
  currentFlags = shuffleArray(flags).slice(0, numFlags);
  updateUI();
  nextFlag();
}

function nextFlag() {
  if (currentFlagIndex >= currentFlags.length || lives <= 0) {
    endGame();
    return;
  }
  document.getElementById("feedback").textContent = "";
  let flag = currentFlags[currentFlagIndex];
  document.getElementById("flag").src = `assets/flags/${flag.code}.png`;
  let options = generateOptions(flag);
  document.getElementById("options").innerHTML = options.map(opt => 
    `<button onclick="checkAnswer('${opt}')">${opt}</button>`).join("");
  startTimer();
}

function checkAnswer(answer) {
  clearInterval(timer);
  let correct = currentFlags[currentFlagIndex].country;
  let feedback = document.getElementById("feedback");
  if (answer === correct) {
    score++;
    feedback.style.color = "green";
    feedback.textContent = "Correct!";
  } else {
    lives--;
    feedback.style.color = "red";
    feedback.textContent = `Wrong! It's ${correct}`;
  }
  updateUI();
  setTimeout(() => {
    currentFlagIndex++;
    nextFlag();
  }, 1000);
}

function startTimer() {
  let timeLeft = 15;
  document.getElementById("timer").textContent = `Time: ${timeLeft}s`;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = `Time: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      lives--;
      document.getElementById("feedback").textContent = `Time's up! It's ${currentFlags[currentFlagIndex].country}`;
      updateUI();
      setTimeout(() => {
        currentFlagIndex++;
        nextFlag();
      }, 1000);
    }
  }, 1000);
}

function updateUI() {
  document.getElementById("score").textContent = `Score: ${score}`;
  document.getElementById("lives").textContent = `Lives: ${"♥".repeat(lives)}`;
}

function generateOptions(correctFlag) {
  let options = [correctFlag.country];
  while (options.length < 4) {
    let randomFlag = flags[Math.floor(Math.random() * flags.length)].country;
    if (!options.includes(randomFlag)) options.push(randomFlag);
  }
  return shuffleArray(options);
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function endGame() {
  document.getElementById("game-screen").style.display = "none";
  document.getElementById("end-screen").style.display = "block";
  document.getElementById("final-score").textContent = `Final Score: ${score}/${maxFlags}`;
  updateHighScore();
  updateLeaderboard();
}

function updateHighScore() {
  let highScore = localStorage.getItem("highScore") || 0;
  if (score > highScore) {
    highScore = score;
    localStorage.setItem("highScore", highScore);
  }
  document.getElementById("high-score").textContent = `High Score: ${highScore}`;
}

function updateHomeLeaderboard() {
  let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
  leaderboard.sort((a, b) => b.score - a.score);
  leaderboard = leaderboard.slice(0, 10); // Top 10 for home page
  let leaderboardHTML = "Top 10 Leaderboard:<br>";
  leaderboard.forEach((entry, index) => {
    let entryMaxFlags = entry.maxFlags || 5; // Default to 5 (Easy) if not stored
    leaderboardHTML += `${index + 1}. ${entry.score}/${entryMaxFlags} - ${entry.handle} - ${entry.date}<br>`;
  });
  document.getElementById("leaderboard-home").innerHTML = leaderboardHTML || "No scores yet—start playing!";
}

function updateLeaderboard() {
  let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
  let xHandle = document.getElementById("x-handle").value || "Anonymous";
  leaderboard.push({ score: score, handle: xHandle, maxFlags: maxFlags, date: new Date().toLocaleDateString() });
  leaderboard.sort((a, b) => b.score - a.score);
  leaderboard = leaderboard.slice(0, 5); // Top 5 for end screen
  localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
  
  let leaderboardHTML = "Leaderboard (Local):<br>";
  leaderboard.forEach((entry, index) => {
    leaderboardHTML += `${index + 1}. ${entry.score}/${entry.maxFlags} - ${entry.handle} - ${entry.date}<br>`;
  });
  leaderboardHTML += "<br>Share your score on X with #GuessTheFlagScore to join the global leaderboard!";
  document.getElementById("leaderboard").innerHTML = leaderboardHTML;
}

function playAgain() {
  document.getElementById("end-screen").style.display = "none";
  document.getElementById("home-screen").style.display = "block";
  document.getElementById("x-handle").value = ""; // Reset input
}

function shareScore() {
  let xHandle = document.getElementById("x-handle").value || "@Anonymous";
  let text = `${xHandle} scored ${score}/${maxFlags} in Guess the Flag on TVBuzzNow! Can you beat me? #GuessTheFlagScore`;
  let url = `https://x.com/intent/tweet?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}