/*
    Ecrire le code JavaScript qui permet de lancer les dès.

    Vous devez prendre en compte :
        - La génération aléatoire de deux nombres entre 1 et 6
        - L'affichage des deux dès grâce aux images présentes dans le dossier img et aux nombres générés
        - Indiquer le joueur gagnant ou une égalité

    INFORMATIONS :
        - Le code HTML est founi et ne doit PAS être modifié directement
        - Pour modifier une image, vous devez modifier sa source avec ceci :
            element.src = "img/dice1.png"

*/

let de1;
let de2;
let joueur1De;
let joueur2De;

function lancerDe() {
    return Math.floor(Math.random() * 6) + 1;
}

function jouer() {
    de1 = lancerDe();
    de2 = lancerDe();

    joueur1De = document.querySelector('.joueurs div:nth-child(1) img');
    joueur2De = document.querySelector('.joueurs div:nth-child(2) img');

    joueur1De.srcset = `img/dice${de1}.png 1x, img/dice${de1}@2x.png 2x, img/dice${de1}@3x.png 3x`;
    joueur2De.srcset = `img/dice${de2}.png 1x, img/dice${de2}@2x.png 2x, img/dice${de2}@3x.png 3x`;

    let resultat = document.createElement("p");

    if (de1 > de2) {
        resultat.textContent = "Joueur 1 gagne!";
    } else if (de2 > de1) {
        resultat.textContent = "Joueur 2 gagne!";
    } else {
        resultat.textContent = "Égalité!";
    }

    
    document.querySelector("h1").insertAdjacentElement("afterend", resultat);
    
}

// écouteur d'événements au clic 
document.querySelector('button').addEventListener('click', jouer);

// recharger la page au clic 1.5s après le résultat

document.querySelector('button').addEventListener('click', function() {
    setTimeout(function() {
        location.reload();
    }, 1500);
});




