console.log("Script loaded successfully");

let flags = [
  { country: "Andorra", code: "ad" },
  { country: "United Arab Emirates", code: "ae" },
  { country: "Afghanistan", code: "af" },
  { country: "Antigua and Barbuda", code: "ag" },
  { country: "Anguilla", code: "ai" },
  { country: "Albania", code: "al" },
  { country: "Armenia", code: "am" },
  { country: "Angola", code: "ao" },
  { country: "Argentina", code: "ar" },
  { country: "Austria", code: "at" },
  { country: "Australia", code: "au" },
  { country: "Aruba", code: "aw" },
  { country: "Azerbaijan", code: "az" },
  { country: "Bosnia and Herzegovina", code: "ba" },
  { country: "Barbados", code: "bb" },
  { country: "Bangladesh", code: "bd" },
  { country: "Belgium", code: "be" },
  { country: "Burkina Faso", code: "bf" },
  { country: "Bulgaria", code: "bg" },
  { country: "Bahrain", code: "bh" },
  { country: "Burundi", code: "bi" },
  { country: "Benin", code: "bj" },
  { country: "Saint Barthelemy", code: "bl" },
  { country: "Bermuda", code: "bm" },
  { country: "Brunei", code: "bn" },
  { country: "Bolivia", code: "bo" },
  { country: "Brazil", code: "br" },
  { country: "Bahamas", code: "bs" },
  { country: "Bhutan", code: "bt" },
  { country: "Botswana", code: "bw" },
  { country: "Belarus", code: "by" },
  { country: "Belize", code: "bz" },
  { country: "Canada", code: "ca" },
  { country: "Cocos Islands", code: "cc" },
  { country: "Democratic Republic of the Congo", code: "cd" },
  { country: "Central African Republic", code: "cf" },
  { country: "Republic of the Congo", code: "cg" },
  { country: "Switzerland", code: "ch" },
  { country: "Cote d'Ivoire", code: "ci" },
  { country: "Cook Islands", code: "ck" },
  { country: "Chile", code: "cl" },
  { country: "Cameroon", code: "cm" },
  { country: "China", code: "cn" },
  { country: "Colombia", code: "co" },
  { country: "Costa Rica", code: "cr" },
  { country: "Cuba", code: "cu" },
  { country: "Cape Verde", code: "cv" },
  { country: "Curacao", code: "cw" },
  { country: "Christmas Island", code: "cx" },
  { country: "Cyprus", code: "cy" },
  { country: "Czech Republic", code: "cz" },
  { country: "Germany", code: "de" },
  { country: "Djibouti", code: "dj" },
  { country: "Denmark", code: "dk" },
  { country: "Dominica", code: "dm" },
  { country: "Dominican Republic", code: "do" },
  { country: "Algeria", code: "dz" },
  { country: "Ecuador", code: "ec" },
  { country: "Estonia", code: "ee" },
  { country: "Egypt", code: "eg" },
  { country: "Western Sahara", code: "eh" },
  { country: "Eritrea", code: "er" },
  { country: "Spain", code: "es" },
  { country: "Ethiopia", code: "et" },
  { country: "Finland", code: "fi" },
  { country: "Fiji", code: "fj" },
  { country: "Falkland Islands", code: "fk" },
  { country: "Micronesia", code: "fm" },
  { country: "Faroe Islands", code: "fo" },
  { country: "France", code: "fr" },
  { country: "Gabon", code: "ga" },
  { country: "United Kingdom", code: "gb" },
  { country: "Grenada", code: "gd" },
  { country: "Georgia", code: "ge" },
  { country: "French Guiana", code: "gf" },
  { country: "Guernsey", code: "gg" },
  { country: "Ghana", code: "gh" },
  { country: "Gibraltar", code: "gi" },
  { country: "Greenland", code: "gl" },
  { country: "Gambia", code: "gm" },
  { country: "Guinea", code: "gn" },
  { country: "Guadeloupe", code: "gp" },
  { country: "Equatorial Guinea", code: "gq" },
  { country: "Greece", code: "gr" },
  { country: "South Georgia and the South Sandwich Islands", code: "gs" },
  { country: "Guatemala", code: "gt" },
  { country: "Guam", code: "gu" },
  { country: "Guinea-Bissau", code: "gw" },
  { country: "Guyana", code: "gy" },
  { country: "Hong Kong", code: "hk" },
  { country: "Honduras", code: "hn" },
  { country: "Croatia", code: "hr" },
  { country: "Haiti", code: "ht" },
  { country: "Hungary", code: "hu" },
  { country: "Indonesia", code: "id" },
  { country: "Ireland", code: "ie" },
  { country: "Israel", code: "il" },
  { country: "Isle of Man", code: "im" },
  { country: "India", code: "in" },
  { country: "British Indian Ocean Territory", code: "io" },
  { country: "Iraq", code: "iq" },
  { country: "Iran", code: "ir" },
  { country: "Iceland", code: "is" },
  { country: "Italy", code: "it" },
  { country: "Jersey", code: "je" },
  { country: "Jamaica", code: "jm" },
  { country: "Jordan", code: "jo" },
  { country: "Japan", code: "jp" },
  { country: "Kenya", code: "ke" },
  { country: "Kyrgyzstan", code: "kg" },
  { country: "Cambodia", code: "kh" },
  { country: "Kiribati", code: "ki" },
  { country: "Comoros", code: "km" },
  { country: "Saint Kitts and Nevis", code: "kn" },
  { country: "North Korea", code: "kp" },
  { country: "South Korea", code: "kr" },
  { country: "Kuwait", code: "kw" },
  { country: "Cayman Islands", code: "ky" },
  { country: "Kazakhstan", code: "kz" },
  { country: "Laos", code: "la" },
  { country: "Lebanon", code: "lb" },
  { country: "Saint Lucia", code: "lc" },
  { country: "Liechtenstein", code: "li" },
  { country: "Sri Lanka", code: "lk" },
  { country: "Liberia", code: "lr" },
  { country: "Lesotho", code: "ls" },
  { country: "Lithuania", code: "lt" },
  { country: "Luxembourg", code: "lu" },
  { country: "Latvia", code: "lv" },
  { country: "Libya", code: "ly" },
  { country: "Morocco", code: "ma" },
  { country: "Monaco", code: "mc" },
  { country: "Moldova", code: "md" },
  { country: "Montenegro", code: "me" },
  { country: "Saint Martin", code: "mf" },
  { country: "Madagascar", code: "mg" },
  { country: "Marshall Islands", code: "mh" },
  { country: "North Macedonia", code: "mk" },
  { country: "Mali", code: "ml" },
  { country: "Myanmar", code: "mm" },
  { country: "Mongolia", code: "mn" },
  { country: "Macao", code: "mo" },
  { country: "Northern Mariana Islands", code: "mp" },
  { country: "Martinique", code: "mq" },
  { country: "Mauritania", code: "mr" },
  { country: "Montserrat", code: "ms" },
  { country: "Malta", code: "mt" },
  { country: "Mauritius", code: "mu" },
  { country: "Maldives", code: "mv" },
  { country: "Malawi", code: "mw" },
  { country: "Mexico", code: "mx" },
  { country: "Malaysia", code: "my" },
  { country: "Mozambique", code: "mz" },
  { country: "Namibia", code: "na" },
  { country: "New Caledonia", code: "nc" },
  { country: "Niger", code: "ne" },
  { country: "Norfolk Island", code: "nf" },
  { country: "Nigeria", code: "ng" },
  { country: "Nicaragua", code: "ni" },
  { country: "Netherlands", code: "nl" },
  { country: "Norway", code: "no" },
  { country: "Nepal", code: "np" },
  { country: "Nauru", code: "nr" },
  { country: "Niue", code: "nu" },
  { country: "New Zealand", code: "nz" },
  { country: "Oman", code: "om" },
  { country: "Panama", code: "pa" },
  { country: "Peru", code: "pe" },
  { country: "French Polynesia", code: "pf" },
  { country: "Papua New Guinea", code: "pg" },
  { country: "Philippines", code: "ph" },
  { country: "Pakistan", code: "pk" },
  { country: "Poland", code: "pl" },
  { country: "Saint Pierre and Miquelon", code: "pm" },
  { country: "Pitcairn Islands", code: "pn" },
  { country: "Puerto Rico", code: "pr" },
  { country: "Palestine", code: "ps" },
  { country: "Portugal", code: "pt" },
  { country: "Palau", code: "pw" },
  { country: "Paraguay", code: "py" },
  { country: "Qatar", code: "qa" },
  { country: "Reunion", code: "re" },
  { country: "Romania", code: "ro" },
  { country: "Serbia", code: "rs" },
  { country: "Russia", code: "ru" },
  { country: "Rwanda", code: "rw" },
  { country: "Saudi Arabia", code: "sa" },
  { country: "Solomon Islands", code: "sb" },
  { country: "Seychelles", code: "sc" },
  { country: "Sudan", code: "sd" },
  { country: "Sweden", code: "se" },
  { country: "Singapore", code: "sg" },
  { country: "Saint Helena", code: "sh" },
  { country: "Slovenia", code: "si" },
  { country: "Svalbard and Jan Mayen", code: "sj" },
  { country: "Slovakia", code: "sk" },
  { country: "Sierra Leone", code: "sl" },
  { country: "San Marino", code: "sm" },
  { country: "Senegal", code: "sn" },
  { country: "Somalia", code: "so" },
  { country: "Suriname", code: "sr" },
  { country: "South Sudan", code: "ss" },
  { country: "Sao Tome and Principe", code: "st" },
  { country: "El Salvador", code: "sv" },
  { country: "Sint Maarten", code: "sx" },
  { country: "Syria", code: "sy" },
  { country: "Eswatini", code: "sz" },
  { country: "Turks and Caicos Islands", code: "tc" },
  { country: "Chad", code: "td" },
  { country: "French Southern Territories", code: "tf" },
  { country: "Togo", code: "tg" },
  { country: "Thailand", code: "th" },
  { country: "Tajikistan", code: "tj" },
  { country: "Tokelau", code: "tk" },
  { country: "Timor-Leste", code: "tl" },
  { country: "Turkmenistan", code: "tm" },
  { country: "Tunisia", code: "tn" },
  { country: "Tonga", code: "to" },
  { country: "Turkey", code: "tr" },
  { country: "Trinidad and Tobago", code: "tt" },
  { country: "Tuvalu", code: "tv" },
  { country: "Taiwan", code: "tw" },
  { country: "Tanzania", code: "tz" },
  { country: "Ukraine", code: "ua" },
  { country: "Uganda", code: "ug" },
  { country: "United States", code: "us" },
  { country: "Uruguay", code: "uy" },
  { country: "Uzbekistan", code: "uz" },
  { country: "Vatican City", code: "va" },
  { country: "Saint Vincent and the Grenadines", code: "vc" },
  { country: "Venezuela", code: "ve" },
  { country: "British Virgin Islands", code: "vg" },
  { country: "United States Virgin Islands", code: "vi" },
  { country: "Vietnam", code: "vn" },
  { country: "Vanuatu", code: "vu" },
  { country: "Wallis and Futuna", code: "wf" },
  { country: "Samoa", code: "ws" },
  { country: "Kosovo", code: "xk" },
  { country: "Yemen", code: "ye" },
  { country: "Mayotte", code: "yt" },
  { country: "South Africa", code: "za" },
  { country: "Zambia", code: "zm" },
  { country: "Zimbabwe", code: "zw" }
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
  lives = 3 + Math.floor(numFlags / 50); // Extra lives for longer games (7 for 254 flags)
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
  const img = document.getElementById("flag");
  img.src = ""; // Clear previous
  img.onload = () => {
    let options = generateOptions(flag);
    document.getElementById("options").innerHTML = options.map(opt => 
      `<button onclick="checkAnswer('${opt}')">${opt}</button>`).join("");
    startTimer();
  };
  img.src = `assets/flags/${flag.code}.png`;
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
  let timeLeft = maxFlags <= 50 ? 20 : 30; // 20s for Master (50), 30s for Ultimate (254)
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
  showHandlePrompt(); // Use in-game prompt instead of alert
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
  // Filter out entries without required fields
  leaderboard = leaderboard.filter(entry => entry.score && entry.handle && entry.date && (entry.maxFlags || entry.maxFlags === 0));
  leaderboard.sort((a, b) => b.score - a.score);
  leaderboard = leaderboard.slice(0, 10); // Top 10 for home page
  let leaderboardHTML = "Top 10 Leaderboard:<br>";
  leaderboard.forEach((entry, index) => {
    let entryMaxFlags = entry.maxFlags || (entry.score <= 5 ? 5 : entry.score <= 10 ? 10 : entry.score <= 20 ? 20 : entry.score <= 50 ? 50 : 254); // Infer based on max possible score
    leaderboardHTML += `${index + 1}. ${entry.score}/${entryMaxFlags} - ${entry.handle} - ${entry.date}<br>`;
  });
  document.getElementById("leaderboard-home").innerHTML = leaderboardHTML || "No scores yet—start playing!";
}

function updateLeaderboard() {
  let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
  let xHandle = document.getElementById("x-handle").value.trim();
  if (!xHandle) {
    showHandlePrompt(); // Show in-game prompt instead of alert
    return;
  }
  if (!xHandle.startsWith("@")) {
    xHandle = "@" + xHandle; // Prepend @ if missing
  }
  document.getElementById("x-handle").value = xHandle; // Update input with formatted handle
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
  document.getElementById("x-handle").value = ""; // Clear after updating
  document.getElementById("handle-feedback").textContent = "Handle submitted! Share your score or play again.";
  setTimeout(() => document.getElementById("handle-feedback").textContent = "", 3000); // Clear feedback after 3s
}

function submitHandle() {
  let xHandle = document.getElementById("x-handle").value.trim();
  if (!xHandle) {
    document.getElementById("handle-feedback").textContent = "Please enter your X handle (e.g., @username) to appear on the leaderboard!";
    setTimeout(() => document.getElementById("handle-feedback").textContent = "", 3000);
    return;
  }
  if (!xHandle.startsWith("@")) {
    xHandle = "@" + xHandle; // Prepend @ if missing
  }
  document.getElementById("x-handle").value = xHandle; // Update input with formatted handle
  updateLeaderboard(); // Update leaderboard with new handle
  document.getElementById("handle-feedback").textContent = "Handle submitted! Share your score or play again.";
  setTimeout(() => document.getElementById("handle-feedback").textContent = "", 3000); // Clear feedback after 3s
}

function playAgain() {
  document.getElementById("end-screen").style.display = "none";
  document.getElementById("home-screen").style.display = "block";
  document.getElementById("x-handle").value = ""; // Clear handle on replay
  document.getElementById("handle-feedback").textContent = ""; // Clear feedback
}

function shareScore() {
  let xHandle = document.getElementById("x-handle").value.trim();
  if (!xHandle) {
    document.getElementById("handle-feedback").textContent = "Please submit your X handle before sharing to appear on X and the leaderboard!";
    setTimeout(() => document.getElementById("handle-feedback").textContent = "", 3000);
    return;
  }
  let text = `${xHandle} scored ${score}/${maxFlags} in Guess The Flag Game on TVBuzzNow! Can you beat me? Play now: https://tvbuzznow.com/guess-the-flags/ #GuessTheFlagScore #BarTrivia`;
  let url = `https://x.com/intent/tweet?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
  document.getElementById("x-handle").value = ""; // Clear after sharing
  document.getElementById("handle-feedback").textContent = "Score shared on X! Play again or submit a new handle.";
  setTimeout(() => document.getElementById("handle-feedback").textContent = "", 3000); // Clear feedback after 3s
}

function showHandlePrompt() {
  document.getElementById("handle-feedback").textContent = "Please enter your X handle (e.g., @username) to update the leaderboard!";
  setTimeout(() => document.getElementById("handle-feedback").textContent = "", 3000);
  document.getElementById("x-handle").focus(); // Auto-focus input for ease
}