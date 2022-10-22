let cancel = document.getElementsByClassName("annuler")[0],
    modal = document.getElementsByClassName("popup-cont")[0],
    confirm = document.getElementsByClassName("valider")[0];


function x() {
  modal.style.display = "none";
}
cancel.onclick = x;


confirm.onclick = function () {
  modal.style.display = "block";
};


window.onclick = function (e) {
  if (e.target.className === "popup-cont") {
    e.target.style.display = "none";
  }
};
