//toute les pages
function loader(){
    let loader = document.getElementsByClassName('loader');
    setTimeout(function(){
        loader[0].style.display = 'none';
    }, 2000);
}

function handleCopyEvent() {
    document.addEventListener('copy', function(e){
        e.preventDefault();
        alert('Le plagiat est interdit');
    }
    );
}


function horloge(){
    let chrono = document.getElementsByClassName('timer')[0];
    let time = -2;
    chrono.innerHTML = time;
    setInterval(function(){
        time++;
        chrono.innerHTML = time;
    }
    , 1000);
    //ajouter une horloge qui indique l'heure 
    let horloge = document.getElementsByClassName('clock')[0];
    let date = new Date();
    let heure = date.getHours();
    let minute = date.getMinutes();
    let seconde = date.getSeconds();
    horloge.innerHTML = heure+':'+minute+':'+seconde;
    setInterval(function(){
        date = new Date();
        heure = date.getHours();
        minute = date.getMinutes();
        seconde = date.getSeconds();
        horloge.innerHTML = heure+':'+minute+':'+seconde;
    }
    , 1000);
    
}

function confirmMembre(){
    //recheche la page membre class membre
    let membre = document.getElementsByClassName('membre')[0]; 

    membre.addEventListener('click', function(){
        let confirm = window.confirm('Voulez-vous vraiment accéder à la page Membres ?');
        if (confirm == true){
            window.location.href = 'membres.html';
        }
        else {
            window.location.href = 'index.html';
        }
    }
    );
}
//pages 3 Membre
//La photo de la carte membre profile-picture est recouverte d’un élément opaque qu’il est possible de « gratter » en le survolant avec la souris. Le grattage fait apparaître la photo en dessous.
function gratter(){
    let profilePicture = document.getElementsByClassName('profile-picture')[0];
    profilePicture.addEventListener('mouseover', function(){
        profilePicture.style.opacity = '0';
    }
    );
    profilePicture.addEventListener('mouseout', function(){
        profilePicture.style.opacity = '1';
    }
    );
}

//Un clic sur ce bouton entraîne l’ouverture d’une fenêtre prompt qui demande d’entrer le nom du profil administrateur « admin » si on clique sur le bouton
function modeEdition(){
    let count = 0;
    let admin = prompt('Entrez le nom du profil administrateur');
    if ( admin == 'admin'){

            alert('Vous êtes en mode édition');
            //on peut modifier la balise name directement depuis le html et la mise à jour en appuiyant sur le bouton
            let name1 = document.getElementsByClassName('name')[0].innerHTML;
            let name2 = document.getElementsByClassName('name')[1].innerHTML;
            document.getElementsByClassName('name')[0].innerHTML = '<input type="text" id="input1" value="'+name1+'">';
            document.getElementsByClassName('name')[1].innerHTML = '<input type="text" id="input2" value="'+name2+'">';
            
            //click sur entrer pour mettre à jour le nom et enlever le mode édition
            document.getElementById('input1').addEventListener('keyup', function(e){
                if (e.keyCode === 13){
                    document.getElementsByClassName('name')[0].innerHTML = document.getElementById('input1').value;
                    document.getElementsByClassName('name')[1].innerHTML = document.getElementById('input2').value;
                    alert('Vous n\'êtes plus en mode édition');
                }
            }
            );
            document.getElementById('input2').addEventListener('keyup', function(e){
                if (e.keyCode === 13){
                    document.getElementsByClassName('name')[0].innerHTML = document.getElementById('input1').value;
                    document.getElementsByClassName('name')[1].innerHTML = document.getElementById('input2').value;
                    alert('Vous n\'êtes plus en mode édition');
                }
            }
            );
        }
        else {
            alert('Vous n\'êtes pas en mode édition');

    
    }
}
    



//ajoute une carte membre profile-card et l'ajouter dans le corps de la page
function ajouterMembre() {
    let admin = prompt('Entrez le nom du profil administrateur');
    if ( admin == 'admin'){
        alert('Vous êtes en mode édition');
        let profileCard = document.createElement("div");
        profileCard.classList.add("profile-card");
        let profilePicture = document.createElement("img");
        profilePicture.src = "image/0.jpg";
        profilePicture.alt = "Profile picture";
        profilePicture.classList.add("profile-picture");
        profileCard.appendChild(profilePicture);

        // Création du nom
        let name = document.createElement("div");
        name.classList.add("name");
        let nameText = prompt('Entrez le nom du nouveau membre');
        name.textContent = nameText;
        profileCard.appendChild(name);

        // Création du titre
        let title = document.createElement("div");
        title.classList.add("title");
        title.textContent = "Nouveau membre";
        profileCard.appendChild(title);

        let affiliation = document.createElement("div");
        affiliation.classList.add("affiliation");
        affiliation.textContent = "ISEN Yncréa Ouest - Nantes";
        profileCard.appendChild(affiliation);

        let email = document.createElement("div");
        email.classList.add("email");
        email.textContent = nameText+"[at]isen-ouest.ycnrea.fr";
        profileCard.appendChild(email);
        //creer un bouton pour supprimer le membre
        let button = document.createElement("button");
        button.classList.add("button");
        button.textContent = "Supprimer le membre";
        button.addEventListener('click', function(){
            supprimerMembre();
        }
        );
        profileCard.appendChild(button);

        let contactInfo = document.createElement("div");
        contactInfo.classList.add("contact-info");

        profileCard.appendChild(contactInfo);
        document.body.appendChild(profileCard);

        let container = document.getElementsByClassName('container')[0];
        container.appendChild(profileCard);
    }
    else {
        alert('Vous n\'êtes pas en mode édition');
    }
}
function supprimerMembre(){
    let container = document.getElementsByClassName('container')[0];
    let profileCard = document.getElementsByClassName('profile-card')[0];
    container.removeChild(profileCard);
}

//pied de page et onglet




//Page2 Recherche
const showButton = document.getElementById('modal-btn');
const container = document.getElementById('modal-container');
const closebtn = document.getElementById('close-btn');


function copyplagia(){
    document.addEventListener('copy', (event) => {
        alert('Attention au plagiat');
    }
)};
copyplagia();



//page 1 accueil

