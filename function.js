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
    if ( admin == 'admin'){
    let admin_pwd = prompt('Entrez le mot de passe du profil administrateur');
        if ( admin_pwd == 'admin'){
            alert('Vous êtes en mode édition');
            //change de couleur le bouton mode édition
            let mode = document.getElementsByClassName('modeEdition');
            mode.style.backgroundColor = 'green';
            //on peut modifier la balise name directement depuis le html et la mise à jour en appuiyant sur le bouton
            let name=document.getElementsByClassName('name');
            
            name[0].innerHTML = '<input type="text" name="name" value="Nom" id="input1">';
            name[1].innerHTML = '<input type="text" name="name" value="Nom" id="input2">';
            let name1=document.getElementById("input1").value;
            let name2=document.getElementById("input2").value;
            //click sur entrer pour mettre à jour le nom et enlever le mode édition
            document.getElementById("input1").addEventListener("keyup", function(event) {
                if (event.keyCode === 13) {
                    event.preventDefault();
                    document.getElementsByClassName('name')[0].innerHTML = name1;
                    document.getElementsByClassName('name')[1].innerHTML = name2;
                    alert('Vous n\'êtes plus en mode édition');
                }
            
            });
            document.getElementById("input2").addEventListener("keyup", function(event) {
                if (event.keyCode === 13) {
                    event.preventDefault();
                    document.getElementsByClassName('name')[0].innerHTML = name1;
                    document.getElementsByClassName('name')[1].innerHTML = name2;
                    alert('Vous n\'êtes plus en mode édition');
                }

            });
        }

            
    } else {
        alert('Vous n\'êtes pas en mode édition');
    }
}
//ajoute une carte membre profile-card dans la balise div container 
function ajouterMembre(){
    let container = document.getElementById('container');
    container.innerHTML += '<div class="profile-card"><div class="profile-picture"></div><div class="name">Nom</div><div class="profile-description">Description</div></div>';
    
}