// Hardcoded player data with weekly scores
const players = [
    {
        name: "Matt",
        picture: "Assets/matt.png",
        weeklyScores: { 1: 7, 2: 6, 3: 2, 4: 3, 5: 6, 6: 10, 7: 7, 8: 5, 9: 7, 10: 4, 11: 7, 12: 5, 13: 15, 14: 6, 15: 9, 16: 5, 17: 5, 18: 5 }
    },
    // Other players omitted for brevity...
];

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
    for (let week = 1; week <= 18; week++) {
        const button = document.createElement('button');
        button.classList.add('collapsible');
        button.textContent = `Week ${week}`;

        const content = document.createElement('div');
        content.classList.add('content');
        content.innerHTML = players.map(player => `<p>${player.name}: ${player.weeklyScores[week] || 0}</p>`).join('');

        button.onclick = () => {
            button.classList.toggle('active');
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        };

        container.appendChild(button);
        container.appendChild(content);
    }
}

// Confetti for Honorary Winners
function createConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.id = 'confetti-container';
    document.getElementById('honorary-winners').appendChild(confettiContainer);

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        confettiContainer.appendChild(confetti);
    }
}

window.onload = () => {
    updateLeaderboard();
    createCollapsibleSections();
    createConfetti();
};
