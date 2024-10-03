
function check_nine_digit_table(to_check) {
    // vérification de la taille de l'input
    if (to_check.length != 9) {
        console.log("L'input ne contient pas 9 positions: " + to_check.join(', '));
        return false;
    }

    // vérification que chaque chiffre de 1 à 9 soit une case de l'input
    for (let i = 1; i <= 9; i++) {
        if (!to_check.includes(i.toString())) {
            return false;
        }
    }

    // toutes les condtionssont valides donc 
    return true;
}
