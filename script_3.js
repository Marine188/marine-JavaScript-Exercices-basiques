number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

function Pyramid(number) {

    for (var i = 1; i <= number; i++) { // j'ouvre la boucle qui part de 1 au premier tour, tourne jusqu'à arriver au nombre choisi, et rajoute 1 à chaque tour

      var row = ''; // je crée la variable row qui démarre vide

      for (var space = 1; space <= (number - i); space++) { // boucle pour l'espace qui part de 1 au premier tour, tourne jusqu'à arriver au nombre choisi moins i, et rajoute 1 à chaque tour
        row += ' '; // ajoute un espace supplémentaire avant l'étape suivante (affichage du #)
      }

      for (var floor = 1; floor <= i; floor++) { // boucle pour l'affichage du #, qui part de 1 au premier tour, tourne jusqu'à arriver au numéro du tour, et rajoute 1 à chaque tour
        row += '#'; // ajoute un # supplémentaire
      }

      console.log(row);
    }
  }

Pyramid(number);
