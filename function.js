//changement de page dès qu'on change de page sur le menu on a un chargement de page de 3 secondes
function changePage() {
    var page = document.getElementById("page").value;
    setTimeout(function () {
        window.location.href = page + ".html";
    }, 3000);
}
//pages 3 Membre