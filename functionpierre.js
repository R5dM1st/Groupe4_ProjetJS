//Page2 Recherche
/*const showButton = document.getElementById('modal-btn');
const container = document.getElementById('modal-container');
const closebtn = document.getElementById('close-btn');

const showButton2 = document.getElementById('modal-btn2');
const container2 = document.getElementById('modal-container2');
const closebtn2 = document.getElementById('close-btn2')
showButton.addEventListener('click', () => {
    container.showModal(); //ouvre la fenetre modal
});
closebtn.addEventListener('click', () => {
    container.close(); // Ferme la fenetre modal
});

showButton2.addEventListener('click', () => {
    container2.showModal(); //ouvre la fenetre modal
});
closebtn2.addEventListener('click', () => {
    container2.close(); // Ferme la fenetre modal
});
function copyplagia(){
    document.addEventListener('copy', (event) => { //En cas de copie d'un texte un message sur le plagiat s'affiche
        alert('Attention au plagiat');
    }
)};
copyplagia();*/

/*function changementImage(){
    //changement d'image en cas de click sur l'image
    
}*/

// Fonction de validation du formulaire
// Définition du texte à afficher
var texteComplet = "Qui sommes-nous ?";
var texteActuel = "";

// Récupération de l'élément HTML du texte
var texteElement = document.getElementById("textetransition");

// Fonction pour afficher le texte progressivement
function afficherTexte() {
  if (texteActuel.length < texteComplet.length) {
    texteActuel += texteComplet.charAt(texteActuel.length);
    texteElement.innerText = texteActuel;
    setTimeout(afficherTexte, 1000); // Attendre 1 seconde avant d'afficher le prochain caractère
  } else {
    // Animation du texte
    anime({
      targets: '#texte',
      translateX: ['0%', '50%', '0%'], // Translation de gauche à droite puis de droite à gauche
      duration: 2000, // Durée totale de l'animation en millisecondes
      loop: true // Répéter l'animation en boucle
    });
  }
}

// Lancer l'affichage du texte au chargement de la page
window.onload = afficherTexte;




