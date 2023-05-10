//changement de page dès qu'on change de page quand on click sur la nav on a un chargement de page de 3 secondes avant de changer de page
function changePage() {
    let page = document.getElementById('page');
    page.innerHTML = '<div class="loader"></div>';
    setTimeout(function () {
        page.innerHTML = '<h1>Page chargée</h1>';
    }, 3000);
}
//pages 3 Membre
//La photo de la carte membre profile-picture d’un élément gris
function scratchCard() {
    let scratch = document.getElementsByClassName('profile-picture');
    scratch[0].style.backgroundColor = 'grey';
    
}
//Un clic sur ce bouton entraîne l’ouverture d’une fenêtre prompt qui demande d’entrer le nom du profil administrateur « admin » si on clique sur le bouton
function modeEdition(){
    let admin = prompt('Entrez le nom du profil administrateur');
    if (admin == 'admin'){
        alert('Vous êtes en mode édition');
        //on peut modifier la balise name directement depuis le html et la mise à jour en appuiyant sur le bouton
        let name = document.getElementsByClassName('name');
        name[0].innerHTML = '<input type="text" name="name" value="Nom" id="p1">';
        name[1].innerHTML = '<input type="text" name="name" value="Nom" id="p2">';
        let input = document.getElementById("in").value;



        
    } else {
        alert('Vous n\'êtes pas en mode édition');
    }
}