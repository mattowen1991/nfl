// Load leaderboard from localStorage or initialize
let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || {};

// Handle form submission
document.getElementById('scoreForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const playerName = document.getElementById('playerName').value;
    const weekNumber = parseInt(document.getElementById('weekNumber').value);
    const score = parseInt(document.getElementById('score').value);

    // Add score to leaderboard
    if (!leaderboard[playerName]) {
        leaderboard[playerName] = { total: 0, weeks: {} };
    }

    leaderboard[playerName].weeks[weekNumber] = score;
    leaderboard[playerName].total = Object.values(leaderboard[playerName].weeks).reduce((a, b) => a + b, 0);

    // Save to localStorage
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));

    // Update displays
    updateLeaderboard();
    updatePlayerStats();

    // Clear form
    e.target.reset();
});

// Update leaderboard table
function updateLeaderboard() {
    const tbody = document.getElementById('leaderboardBody');
    tbody.innerHTML = ''; // Clear current rows

    // Sort players by total score
    const sortedPlayers = Object.entries(leaderboard).sort((a, b) => b[1].total - a[1].total);

    // Add rows to the table
    sortedPlayers.forEach(([playerName, data]) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${playerName}</td>
            <td>${data.total}</td>
        `;
        tbody.appendChild(row);
    });
}

// Update player statistics section
function updatePlayerStats() {
    const playerStatsContent = document.getElementById('playerStatsContent');
    playerStatsContent.innerHTML = ''; // Clear current content

    Object.entries(leaderboard).forEach(([playerName, data]) => {
        const playerDiv = document.createElement('div');
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

// Initial render
updateLeaderboard();
updatePlayerStats();
