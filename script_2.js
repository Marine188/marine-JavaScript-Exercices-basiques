number = prompt("De quel nombre veux-tu calculer la factorielle ?");


function factorial(n) {
     return (n != 1) ? n * factorial(n - 1) : 1; // Par définition, une factorielle est n! peut être écrit comme n * (n-1) !.
                                                //  donc le résultat de la factorielle (n) peut être calculé comme étant n multiplié par le résultat de la factorielle (n-1). Et l'appel de n-1 peut descendre récursivement plus bas et plus bas jusqu'à 1.
}

console.log(factorial(number)); //on retourne donc la factorielle du nombre entré

//en utilisant la commande prompt() qui ouvre une fenêtre d'input dans ton navigateur
