// Hardcoded player data with weekly scores reset to 0
const players = [
    {
        name: "Matt",
        picture: "Assets/matt.png",
        weeklyScores: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0 }
    },
    {
        name: "Jarv",
        picture: "Assets/jarv.png",
        weeklyScores: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0 }
    },
    {
        name: "Gaz",
        picture: "Assets/gaz.png",
        weeklyScores: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0 }
    },
    {
        name: "Joe",
        picture: "Assets/joe.png",
        weeklyScores: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0 }
    },
    {
        name: "Ben",
        picture: "Assets/ben.png",
        weeklyScores: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0 }
    },
    {
        name: "Coley",
        picture: "Assets/coley.png",
        weeklyScores: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0 }
    },
    {
        name: "Mark",
        picture: "Assets/mark.png",
        weeklyScores: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0 }
    },
    {
        name: "Ste",
        picture: "Assets/ste.png",
        weeklyScores: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0 }
    }
];

// Hardcoded current winner and loser
const currentSeason = {
    winner: { name: "Matt", picture: "Assets/matt.png" },
    loser: { name: "Ste", picture: "Assets/ste.png" }
};

// Calculate total scores for leaderboard
players.forEach(player => {
    player.totalScore = Object.values(player.weeklyScores).reduce((a, b) => a + b, 0);
});

// Update leaderboard
function updateLeaderboard() {
    const tbody = document.getElementById('leaderboardBody');
    tbody.innerHTML = '';

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
        content.innerHTML = players
            .map(player => `<p>${player.name}: ${player.weeklyScores[week] || 0}</p>`)
            .join('');

        button.onclick = function () {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        };

        container.appendChild(button);
        container.appendChild(content);
    }
}

// Display season highlight
function displaySeasonHighlight() {
    const seasonHighlightContainer = document.getElementById('season-highlight');

    const winnerHTML = `
        <div class="highlight-item">
            <h3>2024 Season Winner!</h3>
            <div class="framed-pic winner">
                <img src="${currentSeason.winner.picture}" alt="${currentSeason.winner.name}">
            </div>
            <p>${currentSeason.winner.name}</p>
        </div>
    `;

    const loserHTML = `
        <div class="highlight-item">
            <h3>🥄 Current Wooden Spoon Holder!</h3>
            <div class="framed-pic loser">
                <img src="${currentSeason.loser.picture}" alt="${currentSeason.loser.name}">
            </div>
            <p>${currentSeason.loser.name}</p>
        </div>
    `;

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
