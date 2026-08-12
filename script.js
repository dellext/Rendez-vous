/* =========================
   VARIABLES
========================= */

let tailleOui = 1;
let tailleNon = 1;
let taillePeutEtre = 1;


/* =========================
   ELEMENTS
========================= */

const boutonOui =
    document.getElementById("oui");

const boutonNon =
    document.getElementById("non");

const boutonPeutEtre =
    document.getElementById("peut-etre");

const message =
    document.getElementById("message");

const messagePeutEtre =
    document.getElementById("messagePeutEtre");

const musique =
    document.getElementById("musique");

const musicBtn =
    document.getElementById("musicBtn");

const continuerBtn =
    document.getElementById("continuerBtn");

const confirmBtn =
    document.getElementById("confirmBtn");

const dateInput =
    document.getElementById("date");

const heureInput =
    document.getElementById("heure");

const messageFinal =
    document.getElementById("messageFinal");

const confirmationText =
    document.getElementById("confirmationText");


/* =========================
   MUSIQUE
========================= */

let musiqueActive = false;


/*
   Les navigateurs bloquent généralement
   l'autoplay avec du son.

   On essaye dès l'arrivée,
   puis le premier clic lancera la musique.
*/

function lancerMusique() {

    if (musiqueActive) {
        return;
    }

    musique.volume = 0.45;

    musique.play()
        .then(() => {

            musiqueActive = true;

            musicBtn.textContent = "🔊";

        })
        .catch(() => {

            console.log(
                "Lecture automatique bloquée. En attente d'un clic."
            );

        });
}


/* Tentative automatique */

window.addEventListener(
    "load",
    () => {

        lancerMusique();

    }
);


/*
   Premier clic sur la page :
   le navigateur autorise alors
   généralement la musique.
*/

document.addEventListener(
    "click",
    () => {

        lancerMusique();

    },
    {
        once: true
    }
);


/* =========================
   BOUTON MUSIQUE
========================= */

musicBtn.addEventListener(
    "click",
    (event) => {

        event.stopPropagation();

        if (musique.paused) {

            musique.play()
                .then(() => {

                    musiqueActive = true;

                    musicBtn.textContent =
                        "🔊";

                })
                .catch(() => {

                    console.log(
                        "Impossible de lancer la musique."
                    );

                });

        } else {

            musique.pause();

            musiqueActive = false;

            musicBtn.textContent =
                "🔇";
        }

    }
);


/* =========================
   PARTICULES
========================= */

const particles =
    document.querySelector(".particles");

for (let i = 0; i < 45; i++) {

    const particle =
        document.createElement("div");

    particle.classList.add(
        "particle"
    );

    particle.style.left =
        `${Math.random() * 100}%`;

    particle.style.animationDuration =
        `${5 + Math.random() * 8}s`;

    particle.style.animationDelay =
        `${Math.random() * 8}s`;

    particles.appendChild(
        particle
    );
}


/* =========================
   COEURS
========================= */

const hearts =
    document.querySelector(".hearts");

const heartCharacters = [
    "❤️",
    "💕",
    "💗",
    "💖",
    "💓",
    "💘"
];

function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add(
        "heart"
    );

    heart.textContent =
        heartCharacters[
            Math.floor(
                Math.random() *
                heartCharacters.length
            )
        ];

    heart.style.left =
        `${Math.random() * 100}%`;

    heart.style.fontSize =
        `${15 + Math.random() * 25}px`;

    heart.style.animationDuration =
        `${5 + Math.random() * 6}s`;

    hearts.appendChild(
        heart
    );

    setTimeout(
        () => {

            heart.remove();

        },
        12000
    );
}

setInterval(
    createHeart,
    500
);


/* =========================
   MESSAGES
========================= */

function afficherMessage(
    element,
    texte
) {

    element.classList.remove(
        "message-pop"
    );

    void element.offsetWidth;

    element.textContent =
        texte;

    element.classList.add(
        "message-pop"
    );
}


/* =========================
   MESSAGES NON
========================= */

const messagesNon = [

    "Tu es sûre ? 🤨",

    "Réfléchis encore 😭",

    "Le bouton Non commence à avoir peur...",

    "Le Oui devient plus puissant 💪",

    "Attention, le Non est en danger 😈",

    "Il reste une dernière chance 😂"

];


/* =========================
   MESSAGES PEUT-ÊTRE
========================= */

const messagesPeutEtre = [

    "Tu hésites vraiment ? 🤨",

    "Le Peut-être, c'est presque Oui ça 😏",

    "Réfléchis encore un peu 😭",

    "Le bouton Peut-être commence à paniquer...",

    "Je sens que tu veux dire Oui 👀",

    "Allez... sois courageuse 😂❤️"

];


/* =========================
   BOUTON NON
========================= */

boutonNon.addEventListener(
    "click",
    () => {

        tailleOui += 0.2;

        tailleNon -= 0.15;

        boutonOui.style.transform =
            `scale(${tailleOui})`;

        boutonNon.style.transform =
            `scale(${Math.max(tailleNon, 0)})`;

        const texte =
            messagesNon[
                Math.floor(
                    Math.random() *
                    messagesNon.length
                )
            ];

        afficherMessage(
            message,
            texte
        );

        if (tailleNon <= 0.3) {

            boutonNon.classList.add(
                "disappear"
            );

            setTimeout(
                () => {

                    boutonNon.style.display =
                        "none";

                },
                500
            );

            afficherMessage(
                message,
                "Le bouton Non a abandonné 😂❤️"
            );
        }

    }
);


/* =========================
   BOUTON PEUT-ÊTRE
========================= */

boutonPeutEtre.addEventListener(
    "click",
    () => {

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
                Math.floor(
                    Math.random() *
                    messagesPeutEtre.length
                )
            ];

        afficherMessage(
            messagePeutEtre,
            texte
        );

        if (taillePeutEtre <= 0.3) {

            boutonPeutEtre.classList.add(
                "disappear"
            );

            setTimeout(
                () => {

                    boutonPeutEtre.style.display =
                        "none";

                },
                500
            );

            afficherMessage(
                messagePeutEtre,
                "Le bouton Peut-être a abandonné 😂❤️"
            );
        }

    }
);


/* =========================
   CHANGEMENT DE PAGE
========================= */

function changerPage(
    anciennePage,
    nouvellePage
) {

    anciennePage.classList.remove(
        "active"
    );

    setTimeout(
        () => {

            nouvellePage.classList.add(
                "active"
            );

        },
        100
    );
}


/* =========================
   BOUTON OUI
========================= */

boutonOui.addEventListener(
    "click",
    () => {

        lancerMusique();

        boutonOui.classList.add(
            "accepted"
        );

        const page1 =
            document.getElementById(
                "page1"
            );

        const page2 =
            document.getElementById(
                "page2"
            );

        changerPage(
            page1,
            page2
        );

    }
);


/* =========================
   CONTINUER
========================= */

continuerBtn.addEventListener(
    "click",
    () => {

        const page2 =
            document.getElementById(
                "page2"
            );

        const page3 =
            document.getElementById(
                "page3"
            );

        changerPage(
            page2,
            page3
        );

    }
);


/* =========================
   EMAILJS
========================= */

emailjs.init(
    "0jOxWfLIn86tCKIDB"
);


/* =========================
   CONFIRMATION
========================= */

confirmBtn.addEventListener(
    "click",
    async () => {

        const date =
            dateInput.value;

        const heure =
            heureInput.value;

        if (
            date === "" ||
            heure === ""
        ) {

            afficherMessage(
                messageFinal,
                "Choisis une date et une heure 😊"
            );

            return;
        }

        confirmBtn.disabled = true;

        confirmBtn.textContent =
            "Envoi en cours... 💌";

        afficherMessage(
            messageFinal,
            "Je prépare tout ça... ❤️"
        );

        try {

            await emailjs.send(
                "service_acfuhe4",
                "template_a6tkmk9",
                {
                    date_rdv: date,
                    heure_rdv: heure
                }
            );

            console.log(
                "EMAIL ENVOYÉ"
            );

            confirmationText.textContent =
                `🌹 Rendez-vous confirmé le ${date} à ${heure} ❤️`;

            const page3 =
                document.getElementById(
                    "page3"
                );

            const page4 =
                document.getElementById(
                    "page4"
                );

            changerPage(
                page3,
                page4
            );

            confirmBtn.textContent =
                "Rendez-vous confirmé 💕";

        } catch (error) {

            console.error(
                "ERREUR EMAILJS :",
                error
            );

            console.error(
                "STATUS :",
                error.status
            );

            console.error(
                "TEXT :",
                error.text
            );

            afficherMessage(
                messageFinal,
                "Erreur lors de l'envoi 😢"
            );

            confirmBtn.disabled =
                false;

            confirmBtn.textContent =
                "Réessayer 💌";
        }

    }
);
