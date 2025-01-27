// Player data with weekly scores
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

// Populate the leaderboard
function updateLeaderboard() {
    const tbody = document.getElementById('leaderboardBody');
    tbody.innerHTML = players
        .map(player => `
            <tr>
                <td>
                    <img src="${player.picture}" alt="${player.name}" class="player-pic"> 
                    ${player.name}
                </td>
                <td>${Object.values(player.weeklyScores).reduce((a, b) => a + b, 0)}</td>
            </tr>
        `)
        .join('');
}

// Create weekly scores list
function createCollapsibleSections() {
    const container = document.getElementById('collapsibleScores');
    for (let week = 1; week <= 18; week++) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <button class="collapsible">Week ${week}</button>
            <div class="content">
                ${players.map(player => `<p>${player.name}: ${player.weeklyScores[week] || 0}</p>`).join('')}
            </div>
        `;
        container.appendChild(listItem);
    }

    // Add toggle functionality for collapsible buttons
    document.querySelectorAll('.collapsible').forEach(button => {
        button.addEventListener('click', function () {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            content.style.display = this.classList.contains('active') ? 'block' : 'none';
        });
    });
}

// Initialize the page
updateLeaderboard();
createCollapsibleSections();
