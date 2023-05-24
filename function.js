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

//si on click sur la page membre, on affiche une fenetre qui demande de confirmer si on veut accéder à la page sinon on reste sur la page d'actuelle
    




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
    
    let admin = prompt('Entrez le nom du profil administrateur');
    if ( admin == 'admin'){
        let adminpwd = prompt('Entrez le mot de passe du profil administrateur');
        if(adminpwd == 'admin'){
            
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
        }
        else {
            alert('Vous n\'êtes pas en mode édition');

    
    }

} 



//ajoute une carte membre profile-card et l'ajouter dans le corps de la page
function ajouterMembre() {
            let profileCard = document.createElement("div");//créer une div
            profileCard.classList.add("profile-card");//ajouter la classe profile-card à la div
            let profilePicture = document.createElement("img");//créer une image
            profilePicture.src = "image/0.jpg";//ajouter l'image
            profilePicture.alt = "Profile picture";//ajouter l'alt
            profilePicture.classList.add("profile-picture");//ajouter la classe profile-picture à l'image
            profileCard.appendChild(profilePicture);//ajouter l'image à la div


            let name = document.createElement("div");//créer une div
            name.classList.add("name");//ajouter la classe name à la div
            let nameText = prompt('Entrez le nom du nouveau membre');
            name.textContent = nameText;
            profileCard.appendChild(name);


            let title = document.createElement("div");//créer une div
            title.classList.add("title");//ajouter la classe title à la div
            title.textContent = "Nouveau membre";
            profileCard.appendChild(title);

            let affiliation = document.createElement("div");//créer une div
            affiliation.classList.add("affiliation");//ajouter la classe affiliation à la div
            affiliation.textContent = "ISEN Yncréa Ouest - Nantes";
            profileCard.appendChild(affiliation);

            let email = document.createElement("div");//créer une div
            email.classList.add("email");//ajouter la classe email à la div
            email.textContent = nameText+"[at]isen-ouest.ycnrea.fr";
            profileCard.appendChild(email);
    
            let button = document.createElement("button");//créer un bouton
            button.classList.add("button");//ajouter la classe button au bouton
            button.textContent = "Supprimer le membre";
            button.addEventListener('click', function(){//ajouter un évènement au bouton
                supprimerMembre();
            }
            );
            profileCard.appendChild(button);

            let contactInfo = document.createElement("div");//créer une div
            contactInfo.classList.add("contact-info");//ajouter la classe contact-info à la div

            profileCard.appendChild(contactInfo);//ajouter la div à la div profile-card
            document.body.appendChild(profileCard);//ajouter la div profile-card au corps de la page

            let container = document.getElementsByClassName('container')[0];//récupérer la div container
            container.appendChild(profileCard);//ajouter la div profile-card à la div container
    }

function supprimerMembre(){
//supprimer la carte membre profile-card où ce trouve le bouton
    let profileCard = document.getElementsByClassName('profile-card')[0];
    profileCard.remove();
}

//pied de page et onglet






function copyplagia(){
    document.addEventListener('copy', (event) => { //En cas de copie sur un page une alerte s'active avec un message sur le plagiat
        alert('Attention au plagiat');
    }
)};
copyplagia();



//page 1 accueil

//Page thematique de recherche 
function container(){
    let showButton = document.getElementById('modal-btn'); //On récupère l'id du bouton pour ouvrir la fenêtre modale
    let container = document.getElementById('modal-container'); //On récupère l'id de la fenetre modale
    let closebtn = document.getElementById('close-btn');//On recupère l'id du bouton pour fermer la fenetre modale
    const showButton2 = document.getElementById('modal-btn2');
    const container2 = document.getElementById('modal-container2');
    const closebtn2 = document.getElementById('close-btn2')
    showButton.addEventListener('click', () => { // Si il y a un click sur le bouton
        container.showModal(); //ouvre la fenetre modal
        //agrandir la fenetre modal
        container.style.width = '100%';
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
        document.addEventListener('copy', (event) => {
            alert('Attention au plagiat');
        }
    )}; 
}
copyplagia();



//page 1 accueil

//page publication
function namefiltre() {
    
    let input = document.getElementById("myInput");
    let filter = input.value.toUpperCase();
    let table = document.getElementsByClassName("publi")[0];
    let tr = table.getElementsByTagName("tr");
  
    for (i = 0; i < tr.length; i++) {//pour chaque ligne de la table
      td = tr[i].getElementsByTagName("td")[2];//on prend la 3eme colonne
      if (td) {//si la colonne existe
        txtValue = td.textContent || td.innerText;//on prend le texte de la colonne
        if (txtValue.toUpperCase().indexOf(filter) > -1) {//si le nom de l'auteur contient le texte recherché
          tr[i].style.display = "";//on affiche la ligne
        } else {//sinon on la cache
          tr[i].style.display = "none";
        }
      }
    }
  }

function  titrefiltre(){
    let input = document.getElementById("myInput2");
    let filter = input.value.toUpperCase();
    let table = document.getElementsByClassName("publi")[0];
    let tr = table.getElementsByTagName("tr");
  
    for (i = 0; i < tr.length; i++) {//pour chaque ligne de la table
      td = tr[i].getElementsByTagName("td")[1];//on prend la 3eme colonne
      if (td) {//si la colonne existe
        txtValue = td.textContent || td.innerText;//on prend le texte de la colonne
        if (txtValue.toUpperCase().indexOf(filter) > -1) {//si le nom de l'auteur contient le texte recherché
          tr[i].style.display = "";//on affiche la ligne
        } else {//sinon on la cache
          tr[i].style.display = "none";
        }
      }
    }
}

//cherche parmis les id des publications com_congre ou article et effacer les autres qui n'ont  pas le meme id

//Page thematique de recherche 
function container(){
        let showButton = document.getElementById('modal-btn');
        let container = document.getElementById('modal-container');
        let closebtn = document.getElementById('close-btn');

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
}
container();


//Page 4 Contactez nous
//utilise les elements du fromlaire dans le html qui si chaque champ input est vide le bouton a id valider n'est pas afficher sinon si tous les champs sont remplis le bouton est afficher
function valider(){
    let firstpassword=document.f1.password.value;
    let secondpassword=document.f1.password2.value;
    
    if(firstpassword==secondpassword){
    return true;
    }
    else{
    alert("password must be same!");
    return false;
    }
}
