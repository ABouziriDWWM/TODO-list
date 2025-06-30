# To-Do List (JavaScript)
Cette application simple de to-do list permet à l'utilisateur d'ajouter des tâches et de les supprimer. Elle est construite en HTML, CSS (style minimal) et JavaScript pur (sans bibliothèque externe).

## le code Javascript est bien commenté (compréhensible)

## Fonctionnalités
✅ Ajouter une tâche via une boîte de dialogue (prompt)
✅ Afficher la tâche dans une liste (ul ou ol)
✅ Supprimer une tâche individuellement en cliquant sur un bouton
✅ Gestion dynamique des éléments du DOM

## Exemple de structure HTML
html
Copier
Modifier
<button id="addBtn">Ajouter une tâche</button>
<ul id="liste"></ul>

## Fonctionnement
L'utilisateur clique sur le bouton Ajouter une tâche

Une boîte prompt apparaît pour saisir la tâche

La tâche est ajoutée en haut de la liste (grâce à prepend)

Chaque tâche affichée contient un bouton Supprimer pour l'enlever de la liste

## Instructions
1️⃣ Ajoute le HTML ci-dessus dans ton fichier .html

2️⃣ Relie ton fichier JS avec un <script src="..."></script>

3️⃣ Ouvre la page dans un navigateur

4️⃣ Clique sur Ajouter une tâche et commence à gérer ta liste

## Améliorations possibles
💡 Remplacer prompt par un champ de saisie plus moderne

💡 Sauvegarder les tâches dans localStorage pour persistance

💡 Ajouter un style CSS pour améliorer l'apparence

💡 Éviter les doublons de tâches
