function anosEsemanas() {
    let idade = prompt("Digite sua idade:");
    let semanas = idade * 52;
    let valor = 52 * 100;
    let semanasRestantes = valor - semanas

    let anos = 100 -  idade;

    alert("Você tem " + idade + " anos de idade")
    alert("Lhe restam " + anos + " anos de vida")
    alert("Você já teve " + semanas + " semanas")
    alert( "Você tem " + semanasRestantes +  " semanas restantes" );
}