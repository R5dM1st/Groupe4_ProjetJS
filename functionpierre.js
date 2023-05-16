//Page2 Recherche
const showButton = document.getElementById('modal-btn');
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
    document.addEventListener('copy', (event) => {
        alert('Attention au plagiat');
    }
)};
copyplagia();