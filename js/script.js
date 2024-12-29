// Script voor inspiratie
document.getElementById('motivation-button').addEventListener('click', function () {
    const quotes = [
        "Het is nooit te laat om iets nieuws te leren!",
        "Elke expert was ooit een beginner.",
        "Leeftijd is geen beperking, maar een kans om te schitteren!"
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote').textContent = randomQuote;
});

// Welkomstbericht met de huidige datum
const d = new Date();
console.log(`Welkom! Je bekijkt deze pagina op ${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}.`);
