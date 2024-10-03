
// on créé un array de taille 9x9 rempli de valeurs nulles
var to_verify = Array.from(
    {
     length: 9 
    }, () => Array(9).fill(null)
);

// on rempli un tableau à double entrée à l'aide d'un tableau de string
function fill_double_entry_table(table_digits, to_check) {
    for (let i = 0; i < table_digits.length; i++) {
        const row = table_digits[i];
        for (let j = 0; j < table_digits.length; j++) {
            to_check[i][j] = row.split(" ")[j];
        }
    }
}


function display_table(to_be_verified) {
    // on créé une variable qui va prendre en valeur le code nécessaire à la création d'une table en html
    let table = "<table border='1'>";

    for (let i = 0; i < to_be_verified.length; i++) {
        // nouvelle ligne
        table += "<tr>";
        for (let j = 0; j < to_be_verified.length; j++) {
            // nouvelle colonne
            table += "<th>" + to_be_verified[i][j] + "</th>";
        }
        // fermeture de la ligne
        table += "</tr>";
    }

    // fermeture de la table
    table += "</table>";

    // on affiche la table dans un certain élément de notre fichier html
    document.getElementById("table-container").innerHTML = table;
}


