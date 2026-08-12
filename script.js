let tailleOui = 1;
let tailleNon = 1;
let taillePeutEtre = 1;

const boutonOui = document.getElementById("oui");
const boutonNon = document.getElementById("non");
const boutonPeutEtre = document.getElementById("peut-être");

const message = document.getElementById("message");
const messagePeutEtre = document.getElementById("messagePeutEtre");

const musique = document.getElementById("musique");
const musicBtn = document.getElementById("musicBtn");

const messagesNon = [
    "Tu es sûre ? 🤨",
    "Réfléchis encore 😭",
    "Le bouton Non commence à avoir peur...",
    "Le Oui devient plus puissant 💪",
    "Attention, le Non est en danger 😈",
    "Il reste une dernière chance 😂"
];

const messagesPeutEtre = [
    "Tu hésites vraiment ? 🤨",
    "Le Peut-être, c'est presque Oui ça 😏",
    "Réfléchis encore un peu 😭",
    "Le bouton Peut-être commence à paniquer...",
    "Je sens que tu veux dire Oui 👀",
    "Allez... sois courageuse 😂❤️"
];


/* =========================
   MUSIQUE
========================= */

musique.volume = 0.5;

musicBtn.addEventListener("click", () => {

    if (musique.paused) {

        musique.play()
            .then(() => {
                musicBtn.textContent = "🔊";
            })
            .catch(() => {
                musicBtn.textContent = "🎵";
            });

    } else {

        musique.pause();
        musicBtn.textContent = "🔇";
    }
});


/* =========================
   PARTICULES
========================= */

const particles = document.querySelector(".particles");

for (let i = 0; i < 45; i++) {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left = `${Math.random() * 100}%`;

    particle.style.animationDuration =
        `${5 + Math.random() * 8}s`;

    particle.style.animationDelay =
        `${Math.random() * 8}s`;

    particles.appendChild(particle);
}


/* =========================
   COEURS
========================= */

const hearts = document.querySelector(".hearts");

const heartCharacters = [
    "❤️",
    "💕",
    "💗",
    "💖",
    "💓",
    "💘"
];

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.textContent =
        heartCharacters[
            Math.floor(Math.random() * heartCharacters.length)
        ];

    heart.style.left =
        `${Math.random() * 100}%`;

    heart.style.fontSize =
        `${15 + Math.random() * 25}px`;

    heart.style.animationDuration =
        `${5 + Math.random() * 6}s`;

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);
}

setInterval(createHeart, 500);


/* =========================
   MESSAGE
========================= */

function afficherMessage(element, texte) {

    element.classList.remove("message-pop");

    void element.offsetWidth;

    element.textContent = texte;

    element.classList.add("message-pop");
}


/* =========================
   BOUTON NON
========================= */

boutonNon.addEventListener("click", () => {

    tailleOui += 0.2;
    tailleNon -= 0.15;

    boutonOui.style.transform =
        `scale(${tailleOui})`;

    boutonNon.style.transform =
        `scale(${Math.max(tailleNon, 0)})`;

    const texte =
        messagesNon[
            Math.floor(Math.random() * messagesNon.length)
        ];

    afficherMessage(message, texte);

    if (tailleNon <= 0.3) {

        boutonNon.classList.add("disappear");

        setTimeout(() => {
            boutonNon.style.display = "none";
        }, 500);

        afficherMessage(
            message,
            "Le bouton Non a abandonné 😂❤️"
        );
    }
});


/* =========================
   BOUTON PEUT-ÊTRE
========================= */

boutonPeutEtre.addEventListener("click", () => {

    tailleOui += 0.2;
    tailleNon -= 0.1;
    taillePeutEtre -= 0.15;

    boutonOui.style.transform =
        `scale(${tailleOui})`;

    boutonNon.style.transform =
        `scale(${Math.max(tailleNon, 0)})`;

    boutonPeutEtre.style.transform =
        `scale(${Math.max(taillePeutEtre, 0)})`;

    const texte =
        messagesPeutEtre[
            Math.floor(Math.random() * messagesPeutEtre.length)
        ];

    afficherMessage(
        messagePeutEtre,
        texte
    );

    if (taillePeutEtre <= 0.3) {

        boutonPeutEtre.classList.add("disappear");

        setTimeout(() => {
            boutonPeutEtre.style.display = "none";
        }, 500);

        afficherMessage(
            messagePeutEtre,
            "Le bouton Peut-être a abandonné 😂❤️"
        );
    }
});


/* =========================
   BOUTON OUI
========================= */

boutonOui.addEventListener("click", () => {

    boutonOui.classList.add("accepted");

    /*
     * Le clic de l'utilisateur permet au navigateur
     * d'autoriser la lecture de la musique.
     */

    musique.volume = 0.5;

    musique.play()
        .then(() => {

            sessionStorage.setItem(
                "musiqueActive",
                "true"
            );

            sessionStorage.setItem(
                "musiqueTime",
                musique.currentTime
            );

            musicBtn.textContent = "🔊";

        })
        .catch(error => {

            console.log(
                "La musique a été bloquée :",
                error
            );

        });

    document.body.classList.add("fade-out");

    setTimeout(() => {

        window.location.href =
            "rendezvous.html";

    }, 1000);
});