// Hardcoded player data with weekly scores
const players = [
    {
        name: "John Doe",
        picture: "john.jpg",
        weeklyScores: { 1: 10, 2: 15, 3: 12, 4: 8 }
    },
    {
        name: "Jane Smith",
        picture: "jane.jpg",
        weeklyScores: { 1: 12, 2: 18, 3: 14, 4: 10 }
    },
    {
        name: "Alex Johnson",
        picture: "alex.jpg",
        weeklyScores: { 1: 8, 2: 10, 3: 9, 4: 6 }
    }
];

// Calculate total scores for leaderboard
players.forEach(player => {
    player.totalScore = Object.values(player.weeklyScores).reduce((a, b) => a + b, 0);
});

// Update leaderboard
function updateLeaderboard() {
    const tbody = document.getElementById('leaderboardBody');
    tbody.innerHTML = '';

    // Sort players by total score
    const sortedPlayers = [...players].sort((a, b) => b.totalScore - a.totalScore);

    sortedPlayers.forEach(player => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${player.picture}" alt="${player.name}" class="player-pic">
                ${player.name}
            </td>
            <td>${player.totalScore}</td>
        `;
        tbody.appendChild(row);
    });
}

// Display weekly scores
function displayWeeklyScores() {
    const weeklyScoresContent = document.getElementById('weeklyScoresContent');
    weeklyScoresContent.innerHTML = '';

    // Determine the number of weeks
    const totalWeeks = Math.max(...players.map(player => Math.max(...Object.keys(player.weeklyScores))));

    for (let week = 1; week <= totalWeeks; week++) {
        const weekDiv = document.createElement('div');
        weekDiv.classList.add('week');
        weekDiv.innerHTML = `<h3>Week ${week}</h3>`;

        players.forEach(player => {
            const score = player.weeklyScores[week] || 0;
            weekDiv.innerHTML += `<p>${player.name}: ${score}</p>`;
        });

        weeklyScoresContent.appendChild(weekDiv);
    }
}

// Display player statistics
function displayPlayerStats() {
    const playerStatsContent = document.getElementById('playerStatsContent');
    playerStatsContent.innerHTML = '';

    players.forEach(player => {
        const playerDiv = document.createElement('div');
        playerDiv.classList.add('player-stats');
        playerDiv.innerHTML = `
            <img src="${player.picture}" alt="${player.name}" class="player-pic">
            <h3>${player.name}</h3>
            <p>Total Score: ${player.totalScore}</p>
            <p>Weekly Scores: ${Object.entries(player.weeklyScores)
                .map(([week, score]) => `Week ${week}: ${score}`)
                .join(', ')}</p>
        `;
        playerStatsContent.appendChild(playerDiv);
    });
}

// Initial render
updateLeaderboard();
displayWeeklyScores();
displayPlayerStats();
