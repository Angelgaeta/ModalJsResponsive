// 1_Récupérer les ID
// 2_Ajouter le gestionnaire d'événement
// 3_Définir la fonction en reprenant le style pour l'afficher


const confirm = document.getElementById("valider"),
      cancel = document.getElementById("annuler"),
      modal = document.getElementById("popupone"),
      ajouter = document.getElementById("addprod"),
      succes = document.querySelector(".overlay");
 
confirm.addEventListener("click", function(){
    modal.style.display = 'block';
    succes.style.display = 'none';
});

ajouter.addEventListener("click", function(){
    succes.style.display = 'block';
    modal.style.display = 'none';
});

cancel.addEventListener('click', function(){
  modal.style.display = 'none';
});
