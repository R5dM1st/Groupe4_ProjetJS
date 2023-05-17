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
function changeImage(){
    const image = document.getElementById('img0');
    const image1 = document.getElementById('img1');

    image.addEventListener('click', () => {
        image.src = 'https://media.lesechos.com/api/v1/images/view/5c6ba5f93e45462730262d35/1280x720/060723627156-web-tete.jpg'
    });
    image1.addEventListener('click', () => {
        image1.src ='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Osama_bin_Laden_portrait.jpg/280px-Osama_bin_Laden_portrait.jpg'
    });
}
changeImage();