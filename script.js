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

// Create collapsible weekly scores
function createCollapsibleSections() {
    const container = document.getElementById('collapsibleScores');
    const totalWeeks = 18;

    for (let week = 1; week <= totalWeeks; week++) {
        const button = document.createElement('button');
        button.classList.add('collapsible');
        button.textContent = `Week ${week}`;

        const content = document.createElement('div');
        content.classList.add('content');
        content.innerHTML = players.map(player => `<p>${player.name}: ${player.weeklyScores[week] || 0}</p>`).join('');

        button.onclick = function () {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        };

        container.appendChild(button);
        container.appendChild(content);
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
createCollapsibleSections();
displayPlayerStats();
