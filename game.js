// Roll Game Function
function startRoll() {
  const slots = [document.getElementById("roll1"), document.getElementById("roll2"), document.getElementById("roll3")];
  const rollingIntervals = slots.map(slot => setInterval(() => {
    slot.textContent = Math.floor(Math.random() * 10);
  }, 100));

  setTimeout(() => clearInterval(rollingIntervals[2]), 1000);
  setTimeout(() => clearInterval(rollingIntervals[1]), 2000);
  setTimeout(() => {
    clearInterval(rollingIntervals[0]);
    const results = slots.map(slot => parseInt(slot.textContent));
    const resultText = results.join(", ");

    let message = Results: ${resultText};
    if (new Set(results).size === 1) {
      message += " 🎉 Jackpot!";
    } else if (results[0] === results[1] || results[1] === results[2]) {
      message += " 🥈 Small prize!";
    } else {
      message += " ❌ Try again!";
    }
    document.getElementById("rollResult").textContent = message;
  }, 3000);
}

// Poll Submission Function
function submitPoll() {
  const form = document.getElementById("pollForm");
  const formData = new FormData(form);
  const results = {};

  formData.forEach((value, key) => {
    results[key] = value;
  });

  alert(Your choices have been submitted: ${JSON.stringify(results, null, 2)});
  // Update mock stats
  document.getElementById("game1Stats").textContent = "Win: 45%, Draw: 35%, Loss: 20%";
  document.getElementById("game2Stats").textContent = "Win: 50%, Draw: 30%, Loss: 20%";
}
