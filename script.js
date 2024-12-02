// Fetch data from JSON file
const fetchData = async (file) => {
  const response = await fetch(file);
  return response.json();
};

// Populate leaderboard
const populateLeaderboard = async () => {
  const data = await fetchData('data.json');
  const weeklyList = document.getElementById('weekly-list');
  const monthlyList = document.getElementById('monthly-list');

  if (weeklyList && monthlyList) {
    weeklyList.innerHTML = data.leaderboard.weekly
      .map(
        (player) =>
          <li class="flex items-center">
             <img src="${player.avatar}" alt="${player.name}" class="w-10 h-10 rounded-full mr-2">
             <span>${player.name}</span>
           </li>
      )
      .join('');
    monthlyList.innerHTML = data.leaderboard.monthly
      .map(
        (player) =>
          <li class="flex items-center">
             <img src="${player.avatar}" alt="${player.name}" class="w-10 h-10 rounded-full mr-2">
             <span>${player.name}</span>
           </li>
      )
      .join('');
  }
};

// Handle raffle form
const handleRaffleForm = async () => {
  const form = document.getElementById('raffle-form');
  const data = await fetchData('data.json');
  const entries = data.raffleEntries;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newEntry = {
      username: document.getElementById('username').value,
      email: document.getElementById('email').value,
      discord: document.getElementById('discord').value,
      telegram: document.getElementById('telegram').value,
      wallet: document.getElementById('wallet').value
    };
    entries.push(newEntry);
    console.log('Raffle entries:', entries); // Simulate saving to a database
    alert('Successfully entered the raffle!');
  });
};

// Dark Mode Toggle
const toggleTheme = () => {
  const toggle = document.getElementById('theme-toggle');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
};

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
  populateLeaderboard();
  handleRaffleForm();
  toggleTheme();
});
