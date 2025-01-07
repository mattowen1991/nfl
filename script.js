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

// Call functions to render content
updateLeaderboard();
createCollapsibleSections();
displayPlayerStats();
displaySeasonAwards();
