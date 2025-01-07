// Load leaderboard from localStorage or initialize
let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || {};

// Handle form submission
document.getElementById('scoreForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const playerName = document.getElementById('playerName').value;
    const weekNumber = parseInt(document.getElementById('weekNumber').value);
    const score = parseInt(document.getElementById('score').value);

    if (!leaderboard[playerName]) {
        leaderboard[playerName] = { total: 0, weeks: {} };
    }

    leaderboard[playerName].weeks[weekNumber] = score;
    leaderboard[playerName].total = Object.values(leaderboard[playerName].weeks).reduce((a, b) => a + b, 0);

    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));

    updateLeaderboard();
    updatePlayerStats();

    e.target.reset();
});

// Update leaderboard table
function updateLeaderboard() {
    const tbody = document.getElementById('leaderboardBody');
    tbody.innerHTML = '';

    const sortedPlayers = Object.entries(leaderboard).sort((a, b) => b[1].total - a[1].total);

    sortedPlayers.forEach(([playerName, data]) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${playerName}</td>
            <td>${data.total}</td>
        `;
        tbody.appendChild(row);
    });
}

// Update player statistics
function updatePlayerStats() {
    const playerStatsContent = document.getElementById('playerStatsContent');
    playerStatsContent.innerHTML = '';

    Object.entries(leaderboard).forEach(([playerName, data]) => {
        const playerDiv = document.createElement('div');
        playerDiv.classList.add('card');
        playerDiv.innerHTML = `
            <h3>${playerName}</h3>
            <p>Total Score: ${data.total}</p>
            <p>Weekly Scores: ${Object.entries(data.weeks)
                .map(([week, score]) => `Week ${week}: ${score}`)
                .join(', ')}</p>
        `;
        playerStatsContent.appendChild(playerDiv);
    });
}

// Reset data
document.getElementById('resetData').addEventListener('click', () => {
    localStorage.clear();
    leaderboard = {};
    updateLeaderboard();
    updatePlayerStats();
});

updateLeaderboard();
updatePlayerStats();
