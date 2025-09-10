//criar uma variavel 'nome' com seu nome e mostrar 'Olá, <nome>!.'
//variavel nome, idade, cidade  - "Meu nome é <nome>, eu tenho <idade> anos e moro em <cidade>."

// let nome = "Marcos";
// let idade = 41;
// let cidade = "Maringá";

// console.log("Olá, "+nome+"!.");
// console.log(`Olá, ${nome}!.`)

// document.writeln("Olá, "+nome+"!.");
// document.writeln(`Olá, ${nome}!.`);


// console.log(`Meu nome é ${nome}, e tenho ${idade} anos e moro em ${cidade}.`);
// document.writeln(`Meu nome é ${nome}, e tenho ${idade} anos e moro em ${cidade}.`);

//document.getElementById("texto1").innerHTML = (`Meu nome é ${nome}, e tenho ${idade} anos e moro em ${cidade}.`);

// const numero = 123;
// const naoEhNumero = "456";

// console.log(numero + naoEhNumero);
// console.log(numero - naoEhNumero);

// console.log(typeof nome);
// console.log(typeof naoEhNumero);
// console.log(typeof true);
// console.log(typeof '');

// let idade = 71;

// if (idade <= 18) {
//     console.log("Maior de idade. ")
// } else {
//     console.log("Menor de idade. ")
// }


// if (idade < 15) {
//     console.log ("Não votante")
// } else if (idade >= 16  && idade < 17) {
//     console.log ("Não Obrigatório")
// } else if (idade >= 18 && idade <= 70) {
//     console.log ("Obrigatório")
// } else {
//     console.log("Não votante")
// }


// const valor = 120;
// if (valor > 100) {
//     desconto = valor * 0.10;
// } else {
//     desconto = valor * 0.05;
// }
// console.log(´O desconto é de: R$ ${desconto.toFixed(2)}´)

const dia = 7
let nomeDia
switch (dia) {
    case 1: 
        nomeDia = "Domingo"; 
         break;
    case 2: 
        nomeDia = "Segunda - Feira";
        break;
    case 3:
        nomeDia = "Terça - Feira";
        break;
    case 4:
        nomeDia = "Quarta - Feira";
        break;
    case 5:
        nomeDia = "Quinta - Feira";
        break;
    case 6: 
        nomeDia = "sexta - Feira";
        break;
    case 7:
        nomeDia = "Sabado";
        break;
    default:
        console.log("Dia inválido");
        break;
}
console.log(nomeDia);