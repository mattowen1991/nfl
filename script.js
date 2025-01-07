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

// Season winners and losers data
const seasonAwards = {
    winners: [
        { year: 2024, name: "Matt", picture: "matt.jpg" },
        { year: 2023, name: "Gaz", picture: "gaz.jpg" },
        { year: 2022, name: "Ste", picture: "ste.jpg" },
        { year: 2021, name: "Craig", picture: "craig.jpg" }
    ],
    losers: [
        { year: 2024, name: "Ste", picture: "ste.jpg" }
    ]
};

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

// Display season winners and losers
function displaySeasonAwards() {
    const winnersContainer = document.getElementById("winners");
    const losersContainer = document.getElementById("losers");

    // Render winners
    seasonAwards.winners.forEach(winner => {
        const winnerDiv = document.createElement("div");
        winnerDiv.classList.add("award-item");
        winnerDiv.innerHTML = `
            <div class="framed-pic">
                <img src="${winner.picture}" alt="${winner.name}">
            </div>
            <p>${winner.year} - ${winner.name}</p>
        `;
        winnersContainer.appendChild(winnerDiv);
    });

    // Render losers
    seasonAwards.losers.forEach(loser => {
        const loserDiv = document.createElement("div");
        loserDiv.classList.add("award-item");
        loserDiv.innerHTML = `
            <div class="framed-pic">
                <img src="${loser.picture}" alt="${loser.name}">
            </div>
            <p>${loser.year} - ${loser.name}</p>
        `;
        losersContainer.appendChild(loserDiv);
    });
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
displaySeasonAwards();
