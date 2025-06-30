// des elements créé par html et lié en js
const addBtn = document.getElementById("addBtn");
const liste = document.getElementById("liste");

let tasks = [];

addBtn.onclick = function () {
  let pr = prompt("Votre tâche svp");
  if (!pr) return; // Ne rien faire si l'utilisateur annule

  tasks.push(pr);

  // Créer li et button
  const newListItem = document.createElement("li");
  const newBtnItem = document.createElement("button");

  // Remplir li et button
  newListItem.textContent = pr + " ";
  newBtnItem.textContent = "Supprimer";
  newListItem.style.textAlign = "center";
  newBtnItem.style.marginLeft = "5vh";

  // Ajouter l'action de suppression
  newBtnItem.onclick = function () {
    liste.removeChild(newListItem);
    tasks = tasks.filter((task) => task !== pr);
    console.log(tasks);
  };

  // Ajouter button dans li, puis li dans la liste
  newListItem.appendChild(newBtnItem);
  liste.prepend(newListItem);

  console.log(tasks);
};
