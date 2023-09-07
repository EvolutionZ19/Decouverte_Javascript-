/*
    Développez le jeu pour découvrir le nombre secret.
    Cette fois-ci, vous devez laisser le joueur choisir le nombre.

    A chaque nombre choisi, vous devez afficher : Plus grand, plus petit, gagné ou perdu selon les cas.

    Le joueur n'a le droit qu'à 10 essai.

    Vous devez afficher et laisser choisir le joueur directement sur la page HTML

*/
let nombreSecret = Math.floor(Math.random() * 100) + 1;
let essais = 0;

function verifierNombre() {
    essais++;
    let nombreChoisi = document.getElementById('nombre').value;

     
    let essaisRestants = 10 - essais;
    document.getElementById('essais_restants').textContent = `Essais restants : ${essaisRestants}`;
 
   
    if (nombreChoisi == nombreSecret) {
        document.getElementById('resultat').innerHTML = 'Bien joué!, mais tu as utilisés ' + essais + ' essais', 'maintenant recommence !';
    } else if (nombreChoisi < nombreSecret) {
        document.getElementById('resultat').innerHTML = 'Plus grand !';
    } else {
        document.getElementById('resultat').innerHTML = 'Plus petit !';
    }
    
    console.log(essais);
    
    if (essais >= 10) {
        document.getElementById('resultat').innerHTML = 'Oh non tu as perdu... Eh bien maintenant recommence ! le nombre secret était ' + nombreSecret + ' !';
        document.getElementById('verifier').disabled = true;

    }

}

document.getElementById('verifier').addEventListener('click', verifierNombre);


function rejouer() {
    location.reload();
}


document.getElementById('recommencer').addEventListener('click', rejouer);


