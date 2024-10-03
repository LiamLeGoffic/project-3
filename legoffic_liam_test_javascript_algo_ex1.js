
// on créé un array de taille 9x9 rempli de valeurs nulles
var to_verify = Array.from(
    {
     length: 9 
    }, () => Array(9).fill(null)
);

function fill_double_entry_table(table_digits, to_check) {
    for (let i = 0; i < table_digits.length; i++) {
        const row = table_digits[i];
        for (let j = 0; j < table_digits.length; j++) {
            to_check[i][j] = row.split(" ")[j];
        }
    }
}

function display_table(to_be_verified) {
    let table = "<table border='1'>";

    for (let i = 0; i < to_be_verified.length; i++) {
        table += "<tr>";
        for (let j = 0; j < to_be_verified.length; j++) {
            table += "<th>" + to_be_verified[i][j] + "</th>";
        }
        table += "</tr>";
    }

    table += "</table>";

    document.getElementById("table-container").innerHTML = table;
}


