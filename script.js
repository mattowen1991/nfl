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

// Honorary winners
const honoraryWinners = [
    { year: 2024, name: "Matt", picture: "Assets/matt.png" },
    { year: 2023, name: "Gaz", picture: "Assets/gaz.png" },
    { year: 2022, name: "Ste", picture: "Assets/ste.png" },
    { year: 2021, name: "Jarv", picture: "Assets/jarv.png" }
];

// Update leaderboard
function updateLeaderboard() {
    const tbody = document.getElementById('leaderboardBody');
    tbody.innerHTML = ''; // Clear existing content

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
    container.innerHTML = ''; // Clear existing content

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
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        };

        container.appendChild(button);
        container.appendChild(content);
    }
}

// Display honorary winners
function displayHonoraryWinners() {
    const container = document.getElementById('honorary-winners');
    container.innerHTML = ''; // Clear existing content

    honoraryWinners.forEach(winner => {
        const winnerHTML = `
            <div class="honorary-item">
                <div class="framed-pic">
                    <img src="${winner.picture}" alt="${winner.name}">
                </div>
                <p>${winner.year} - ${winner.name}</p>
            </div>
        `;
        container.innerHTML += winnerHTML;
    });
}

// Initial render
updateLeaderboard();
createCollapsibleSections();
displayHonoraryWinners();
