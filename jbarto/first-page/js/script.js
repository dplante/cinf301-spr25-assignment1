document.addEventListener("DOMContentLoaded", function() {
    const facts = [
        "Pac-Man was originally called 'Puck-Man' in Japan.",
        "The PlayStation 2 is the best-selling console of all time.",
        "The first video game ever made was 'Tennis for Two' in 1958."
    ];

    document.querySelector("aside p").addEventListener("click", function() {
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        this.textContent = randomFact;
    });
});

