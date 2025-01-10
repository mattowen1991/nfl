// Hardcoded player data with weekly scores
const players = [
    {
        name: "Matt",
        picture: "Assets/matt.png",
        weeklyScores: { 1: 7, 2: 6, 3: 2, 4: 3, 5: 6, 6: 10, 7: 7, 8: 5, 9: 7, 10: 4, 11: 7, 12: 5, 13: 15, 14: 6, 15: 9, 16: 5, 17: 5, 18: 5 }
    },
    {
        name: "Jarv",
        picture: "Assets/jarv.png",
        weeklyScores: { 1: 6, 2: 4, 3: 2, 4: 5, 5: 7, 6: 10, 7: 6, 8: 5, 9: 6, 10: 5, 11: 6, 12: 5, 13: 9, 14: 6, 15: 6, 16: 5, 17: 5, 18: 5 }
    },
    {
        name: "Gaz",
        picture: "Assets/gaz.png",
        weeklyScores: { 1: 6, 2: 3, 3: 4, 4: 5, 5: 7, 6: 5, 7: 7, 8: 4, 9: 6, 10: 4, 11: 5, 12: 5, 13: 12, 14: 6, 15: 9, 16: 5, 17: 4, 18: 2 }
    },
    {
        name: "Joe",
        picture: "Assets/joe.png",
        weeklyScores: { 1: 5, 2: 1, 3: 4, 4: 4, 5: 6, 6: 7, 7: 6, 8: 5, 9: 6, 10: 4, 11: 5, 12: 5, 13: 12, 14: 5, 15: 5, 16: 5, 17: 4, 18: 4 }
    },
    {
        name: "Ben",
        picture: "Assets/ben.png",
        weeklyScores: { 1: 6, 2: 5, 3: 3, 4: 3, 5: 6, 6: 7, 7: 7, 8: 5, 9: 6, 10: 4, 11: 7, 12: 6, 13: 15, 14: 6, 15: 6, 16: 5, 17: 4, 18: 5 }
    },
    {
        name: "Coley",
        picture: "Assets/coley.png",
        weeklyScores: { 1: 4, 2: 5, 3: 3, 4: 4, 5: 4, 6: 4, 7: 5, 8: 4, 9: 4, 10: 4, 11: 6, 12: 5, 13: 9, 14: 9, 15: 9, 16: 6, 17: 3, 18: 6 }
    },
    {
        name: "Mark",
        picture: "Assets/mark.png",
        weeklyScores: { 1: 7, 2: 4, 3: 2, 4: 3, 5: 5, 6: 7, 7: 7, 8: 5, 9: 6, 10: 4, 11: 5, 12: 5, 13: 12, 14: 6, 15: 9, 16: 5, 17: 3, 18: 4 }
    },
    {
        name: "Ste",
        picture: "Assets/ste.png",
        weeklyScores: { 1: 5, 2: 4, 3: 3, 4: 2, 5: 5, 6: 7, 7: 7, 8: 4, 9: 5, 10: 6, 11: 5, 12: 4, 13: 11, 14: 6, 15: 6, 16: 5, 17: 4, 18: 0 }
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
