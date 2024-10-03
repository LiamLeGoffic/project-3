
function check_lines(to_check) {
    let error = "";

    for (let i = 0; i < to_check.length; i++) {
        // pour chaque ligne incorrecte on ajoute une ligne d'erreur à afficher dans la table d'erreur
        if (!check_nine_digit_table(to_check[i])) {
            error += "<tr>" + "<th>Line " + (i + 1) + " incorrect:</th><th>" + to_check[i].join("</th><th>") + "</th></tr>";
        }
    }

    // on affiche les lignes d'erreurs dans un certain élément (une table) de notre fichier html
    document.getElementById("error-container").innerHTML += error;
}

function check_columns(to_check) {
    let error = "";

    for (let i = 0; i < to_check.length; i++) {
        // Utilisation de `map()` pour extraire la colonne i
        const column = to_check.map(row => row[i]);

        // pour chaque colonne incorrecte on ajoute une ligne d'erreur à afficher dans la table d'erreur
        if (!check_nine_digit_table(column)) {
            error += "<tr>" + "<th>Column " + (i + 1) + " incorrect:</th><th>" + column.join("</th><th>") + "</th></tr>";
        }
    }

    // on affiche les lignes d'erreurs dans un certain élément (une table) de notre fichier html
    document.getElementById("error-container").innerHTML += error;
}


function check_regions(to_check) {
    let error = "";

    for (let i = 0; i < to_check.length; i++) {
        // créaction d'un tableau vide qui va prendre en valeurs les chiffres de la régions
        const region = new Array(9);

        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                // Calcule les indices de la ligne et de la colonne en fonction de la région, j, et k.
                // Math.floor(i / 3) * 3 + j : détermine l'indice de la ligne dans la grille à partir de la région et j.
                // (i % 3) * 3 + k : détermine l'indice de la colonne dans la grille à partir de la région et k.
                region[j * 3 + k] = to_check[
                    Math.floor(i / 3) * 3 + j 
                ][
                    (i % 3) * 3 + k
                ];
            }
        }
        // pour chaque région incorrecte on ajoute une ligne d'erreur à afficher dans la table d'erreur
        if (!check_nine_digit_table(region)) {
            error += "<tr>" + "<th>Region " + (i + 1) + " incorrect:</th><th>" + region.join("</th><th>") + "</th></tr>";
        }
    }

    // on affiche les lignes d'erreurs dans un certain élément (une table) de notre fichier html
    document.getElementById("error-container").innerHTML += error;
}
