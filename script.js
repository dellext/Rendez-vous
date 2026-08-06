let tailleOui = 1;
let tailleNon = 1;

const boutonOui = document.getElementById("oui");
const boutonNon = document.getElementById("non");
const message = document.getElementById("message");


boutonNon.addEventListener("click", () => {

    tailleOui += 0.2;
    tailleNon -= 0.15;

    boutonOui.style.transform = `scale(${tailleOui})`;
    boutonNon.style.transform = `scale(${tailleNon})`;


    const messages = [
        "Tu es sûre ? 🤨",
        "Réfléchis encore 😭",
        "Le bouton Non commence à avoir peur...",
        "Le Oui devient plus puissant 💪",
        "Attention, le Non est en danger 😈",
        "Il reste une dernière chance 😂"
    ];

    message.textContent =
        messages[Math.floor(Math.random() * messages.length)];


    if (tailleNon <= 0.3) {

        boutonNon.style.display = "none";

        message.textContent =
            "Le bouton Non a abandonné 😂❤️";
    }

});

boutonOui.addEventListener("click", () => {

    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.location.href = "rendezvous.html";
    }, 800);

});
