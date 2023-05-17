function loader(){
    let loader = document.getElementsByClassName('loader');
    setTimeout(function(){
        loader[0].style.display = 'none';
    }, 2000);
}


//pages 3 Membre
//La photo de la carte membre profile-picture est recouverte d’un élément opaque qu’il est possible de « gratter » en le survolant avec la souris. Le grattage fait apparaître la photo en dessous.
function scratchCard(){
    let scratch1 = document.getElementsByClassName('profile-picture')[0];
    let scratch2 = document.getElementsByClassName('profile-picture')[1];
    scratch1.addEventListener('mouseover', function(){
        scratch1.style.opacity = '0';
    }
    );
    scratch2.addEventListener('mouseover', function(){
        scratch2.style.opacity = '0';
    }
    );
    scratch1.addEventListener('mouseout', function(){
        scratch1.style.opacity = '1';
    }
    );
    
    scratch2.addEventListener('mouseout', function(){
        scratch2.style.opacity = '1';
    }
    );
}


//Un clic sur ce bouton entraîne l’ouverture d’une fenêtre prompt qui demande d’entrer le nom du profil administrateur « admin » si on clique sur le bouton
function modeEdition(){
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
    



//ajoute une carte membre profile-card dans la balise div container 
function ajouterMembre(){
    let container = document.getElementById('create');
    container.innerHTML += '<div class="profile-card"><div class="profile-picture"></div><div class="name">Nom Prénom</div><div class="profile-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.</div></div>';

}



//pied de page et onglet

//dès qu'on click sur le numero de telephone, il est copié dans le presse papier
function copierTel(){
    let tel = document.getElementsByClassName('num');
    tel.addEventListener('click', function(){
        tel.select();
        document.execCommand('copy');
        alert('Le numéro de téléphone a été copié');
    }
    );

}
