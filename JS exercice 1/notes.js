/*
    Ecrivez un programme qui permet d'ajouter une note à un élève.
    Pour cela vous devez utiliser :
        - Un tableau JavaScript
        - La méthode push() pour les tableaux
        - L'écouteur d'évènement au click

    Chaque note que vous ajoutez doivent être ajoutée sur la page HTML
    dans le tableau prévu à cet effet
*/
// Déclarer un tableau pour stocker les notes
let notes = [];

// Fonction pour ajouter une note
function ajouterNote() {
    // Récupérer la valeur de l'input
    const note = document.getElementById("note").value;

    // Vérifier si la note est valide
    if (note !== "") {
        // Ajouter la note au tableau
        notes.push(note);

        // Effacer la valeur de l'input
        document.getElementById("note").value = "";

        // Appeler la fonction pour afficher les notes
        afficherNotes();
    }
}

// Fonction pour afficher les notes dans le tableau HTML
function afficherNotes() {
    const tableBody = document.getElementById("tableBody");

    // Supprimer le contenu actuel du tableau
    tableBody.innerHTML = "";

    // Parcourir le tableau de notes et créer des lignes pour chaque note
    for (let i = 0; i < notes.length; i++) {
        const newRow = tableBody.insertRow();
        const cellNum = newRow.insertCell(0);
        const cellNote = newRow.insertCell(1);
        cellNum.textContent = i + 1; // Numéro d'élève (commence à 1)
        cellNote.textContent = notes[i];
    }
}

// Ajouter un écouteur d'événement au bouton "Ajouter la note"
document.getElementById("ajouter").addEventListener("click", function (e) {
    e.preventDefault(); // Empêche la soumission du formulaire
    ajouterNote(); // Appelle la fonction pour ajouter une note
});

// Appeler la fonction pour afficher les notes au chargement de la page
afficherNotes();
