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

// Create collapsible weekly scores
function createCollapsibleSections() {
    const container = document.getElementById('collapsibleScores');
    const totalWeeks = 18;

    for (let week = 1; week <= totalWeeks; week++) {
        // Create the ticket button
        const button = document.createElement('button');
        button.classList.add('collapsible');
        button.textContent = `Week ${week}`;

        // Create the content container for scores
        const content = document.createElement('div');
        content.classList.add('content');
        content.innerHTML = players
            .map(player => `<p>${player.name}: ${player.weeklyScores[week] || 0}</p>`)
            .join('');

        // Add click functionality to toggle the scores
        button.onclick = function () {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        };

        // Append the button and its content to the container
        container.appendChild(button);
        container.appendChild(content);
    }
}

// Initial render
createCollapsibleSections();
