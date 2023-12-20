// - Créez une fonction qui est appelée chaque fois qu'un joueur clique sur un des boutons (Pierre,    Feuille, Ciseaux).
// - À l'intérieur de cette fonction, générez un choix aléatoire pour le robot en utilisant Math.random().
// - Comparez le choix du joueur avec celui du robot pour déterminer le gagnant de la manche.
// - Mettez à jour le score en fonction du gagnant.
// - Affichez les résultats de la manche, le score global, et changez la couleur du texte en fonction du résultat (vert pour gagner, rouge pour perdre, gris pour match nul).

// - Gestion de la Fin du Jeu : Vérifiez si l'un des joueurs a atteint 5 points.
// Si oui, affichez un message final avec une image de l'arbitre, et indiquez le gagnant du jeu.
// Empêchez tout jeu supplémentaire une fois qu'un joueur atteint 5 points en utilisant une variable de contrôle (par exemple, i).


// Variables
let btn = document.querySelectorAll('button');
let choix = document.querySelector('#choix');
let manche = document.querySelector('#manche');
let scoreText = document.querySelector('#score');
let fini = document.querySelector('#fini');
let gameOver = document.querySelector('#gameOver');
let arbitre = document.querySelector('#arbitre');

let playerScore = 0;
let aiScore = 0;
let gameOverBool = false;

// Assigner la fonction shifumi aux boutons
btn.forEach(button => { button.addEventListener('click', function () { shifumi(button.className) }) });


function shifumi(choice) {
    if (gameOverBool == false) {

        // Déterminer le choix du robot
        let randomNum = Math.floor(Math.random() * 3);
        console.log(randomNum);
        let aiPick = "";

        switch (randomNum) {
            case 0:
                aiPick = "pierre";
                break;
            case 1:
                aiPick = "feuille";
                break;
            case 2:
                aiPick = "ciseaux";
                break;
        }

        // Comparer le choix du joueur et du robot
        let playerPick = choice;
        let matchResult;

        switch (playerPick) {
            case "pierre":
                switch (aiPick) {
                    case "pierre":
                        choix.innerHTML = `Vous avez choisi <b>${playerPick}</b>, le robot a choisi <b>${aiPick}</b>`;
                        matchResult = 0;
                        break;
                    case "ciseaux":
                        choix.innerHTML = `Vous avez choisi <b>${playerPick}</b>, le robot a choisi <b>${aiPick}</b>`;
                        matchResult = 1;
                        break;
                    case "feuille":
                        choix.innerHTML = `Vous avez choisi <b>${playerPick}</b>, le robot a choisi <b>${aiPick}</b>`;
                        matchResult = 2;
                        break;
                }
                break;
            case "feuille":
                switch (aiPick) {
                    case "pierre":
                        choix.innerHTML = `Vous avez choisi <b>${playerPick}</b>, le robot a choisi <b>${aiPick}</b>`;
                        matchResult = 1;
                        break;
                    case "ciseaux":
                        choix.innerHTML = `Vous avez choisi <b>${playerPick}</b>, le robot a choisi <b>${aiPick}</b>`;
                        matchResult = 2;
                        break;
                    case "feuille":
                        choix.innerHTML = `Vous avez choisi <b>${playerPick}</b>, le robot a choisi <b>${aiPick}</b>`;
                        matchResult = 0;
                        break;
                }
                break;
            case "ciseaux":
                switch (aiPick) {
                    case "pierre":
                        choix.innerHTML = `Vous avez choisi <b>${playerPick}</b>, le robot a choisi <b>${aiPick}</b>`;
                        matchResult = 2;
                        break;
                    case "ciseaux":
                        choix.innerHTML = `Vous avez choisi <b>${playerPick}</b>, le robot a choisi <b>${aiPick}</b>`;
                        matchResult = 0;
                        break;
                    case "feuille":
                        choix.innerHTML = `Vous avez choisi <b>${playerPick}</b>, le robot a choisi <b>${aiPick}</b>`;
                        matchResult = 1;
                        break;
                }
                break;
        }

        // Résultat de la manche
        if (matchResult === 1) {
            manche.innerHTML = "Vous avez <b>gagné</b> cette manche";
            manche.style.color = "green";
            playerScore += 1;
        } else if (matchResult === 2) {
            manche.innerHTML = "Vous avez <b>perdu</b> cette manche";
            manche.style.color = "red";
            aiScore += 1;
        } else {
            manche.innerHTML = "<b>Match nul</b> pour cette manche";
            manche.style.color = "grey";
        }

        // Score final
        if (playerScore >= 5) {
            arbitre.style.display = 'initial';
            fini.style.display = 'initial';
            gameOver.style.color = 'green';
            gameOver.textContent = 'Vous avez gagné'
            gameOverBool = true;
        }
        else if (aiScore >= 5) {
            arbitre.style.display = 'initial';
            fini.style.display = 'initial';
            gameOver.style.color = 'red';
            gameOver.textContent = 'Vous avez perdu'
            gameOverBool = true;
        }

        scoreText.textContent = `Le score est de ${playerScore} (vous) à ${aiScore} (le robot)`;
    }
    else{
        return;
    }
}


