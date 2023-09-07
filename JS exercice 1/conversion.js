// Appel initial à la fonction conversion() lorsque la page est chargée
document.addEventListener('DOMContentLoaded', function() {
    conversion();
    
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        conversion();
    });
});

function conversion() {
    // Récupération de la valeur du champ
    let secondes = parseInt(document.getElementById('secondes').value);

    // Conversion en minutes des secondes
    let minutes = Math.floor(secondes / 60);
    let secondesRestantes = secondes % 60;

    // singulier/pluriel pour les minutes
    let minutesText = minutes === 1 ? "minute" : "minutes";

    // singulier/pluriel pour les secondes
    let secondesText = secondesRestantes === 1 ? "seconde" : "secondes";

    // Affichage du résultat 
    let resultText = `${secondes} ${secondesText} est égal à ${minutes} ${minutesText}`;

    // modification du texte si il y a des secondes restantes
    if (secondesRestantes !== 0) {
        resultText += ` et ${secondesRestantes} ${secondesText}`;
    }

    document.getElementById('convert').innerHTML = resultText;
}
