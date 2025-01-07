// Hardcoded player data with weekly scores
const players = [
    {
        name: "Matt",
        picture: "Assets/john.jpg",
        weeklyScores: { 7: 6, 2: 3, 6: 10, 7: 5, 7: 4, 7: 5, 15: 6, 9: 5, 5: 5 }
    },
    {
        name: "Jarv",
        picture: "Assets/jane.jpg",
        weeklyScores: { 1: 12, 2: 18, 3: 14, 4: 10 }
    },
    {
        name: "Gaz",
        picture: "Assets/alex.jpg",
        weeklyScores: { 1: 8, 2: 10, 3: 9, 4: 6 }
    },
    {
        name: "Joe",
        picture: "Assets/jane.jpg",
        weeklyScores: { 1: 12, 2: 18, 3: 14, 4: 10 }
    },
    {
        name: "Ben",
        picture: "Assets/jane.jpg",
        weeklyScores: { 1: 12, 2: 18, 3: 14, 4: 10 }
    },
    {
        name: "Coley",
        picture: "Assets/jane.jpg",
        weeklyScores: { 1: 12, 2: 18, 3: 14, 4: 10 }
    },
    {
        name: "Mark",
        picture: "Assets/jane.jpg",
        weeklyScores: { 1: 12, 2: 18, 3: 14, 4: 10 }
    },
    {
        name: "Ste",
        picture: "Assets/jane.jpg",
        weeklyScores: { 1: 12, 2: 18, 3: 14, 4: 10 }
    }
];

// Hardcoded current winner and loser
const currentSeason = {
    winner: { name: "Matt", picture: "Assets/matt.jpg" },
    loser: { name: "Ste", picture: "Assets/ste.jpg" }
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

// Display season highlight (winner and loser)
function displaySeasonHighlight() {
    const seasonHighlightContainer = document.getElementById('season-highlight');

    // Add winner
    const winnerHTML = `
        <div class="highlight-item">
            <h3>Winner</h3>
            <div class="framed-pic winner">
                <img src="${currentSeason.winner.picture}" alt="${currentSeason.winner.name}">
            </div>
            <p>${currentSeason.winner.name}</p>
        </div>
    `;

    // Add loser
    const loserHTML = `
        <div class="highlight-item">
            <h3>Wooden Spoon</h3>
            <div class="framed-pic loser">
                <img src="${currentSeason.loser.picture}" alt="${currentSeason.loser.name}">
            </div>
            <p>${currentSeason.loser.name}</p>
        </div>
    `;

    // Render both winner and loser side by side
    seasonHighlightContainer.innerHTML = `
        <div class="highlight-container">
            ${winnerHTML}
            ${loserHTML}
        </div>
    `;
}

// Initial render
updateLeaderboard();
createCollapsibleSections();
displaySeasonHighlight();
