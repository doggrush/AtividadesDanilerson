//1

function MaiorOuIgual(num1,num2){
    if(num1>=num2){
        console.log("O número 1 é maior ou igual ao número 2")
    
    }
    else {
        console.log("O número 2 é maior que o número 1")
    }
}
MaiorOuIgual(1,2)

//2

function YrToDay(idade){
    idadeDias = parseInt(idade*365.2425)
    if(idadeDias>=0){
        console.log(`Com ${idade} anos de idade, você tem aproximadamente ${idadeDias} dias de idade`)
    }
    else{
        console.log("Valor inválido")
    }
}
YrToDay(17)

//3

function MesIdentifier(mes){
    switch(mes){
        case 1:
            console.log("Janeiro")
            break;
        case 2:
            console.log("Fevereiro")
            break;
        case 3:
            console.log("Março")
            break;
        case 4:
            console.log("Abril")
            break;
        case 5:
            console.log("Maio")
            break;
        case 6:
            console.log("Junho")
            break;
        case 7:
            console.log("Julho")
            break;
        case 8:
            console.log("Agosto")
            break;
        case 9:
            console.log("Setembro")
            break;
        case 10:
            console.log("Outubro")
            break;
        case 11:
            console.log("Novembro")
            break;
        case 12:
            console.log("Dezembro")
            break;
        default:
            console.log("Valor inválido para um mês")
            break;
    }
}
MesIdentifier(12)

//4

function Reverse(variavel){
        if(typeof(variavel)==="boolean"){
            variavel=!variavel
            console.log(variavel)
        }
        else if(typeof(variavel)==="number"){
            variavel= -variavel
            console.log(variavel)
        }
        else{
            console.log(`Booelano ou Número esperados, mas o parâmetro é do tipo `+typeof(variavel)+".")
    }
}
Reverse(25)

//5

function Multiplicacao(num1,num2){
    let soma = num1
    for (let i=1;i<num2;i++){
        soma += num1
    }
    console.log(soma)
}
Multiplicacao(5,10)

//6

function repeticao(variavel, repetidor){
    let Array = []
    for (i=0;i<repetidor;i++){
        Array.push(variavel)
    }
    console.log(Array)
}
repeticao("teste", 5)

//7
const array = [5,6,'joãozinho',2,4,'augusto','marcus',6,7]
function filtroArray(array){
    let arrayFiltrado=[]
    for(let i=0;i<array.length;i++){
        if(typeof(array[i])==="number"){
            arrayFiltrado.push(array[i])
        }
        else {}
    }
    console.log(arrayFiltrado)
}
filtroArray(array)

//8

let numero = [1, 2, 3, 4, 5];
function somaArray(numero){
    let suma = 0;
    for (let i = 0; i < numero.length; i++ ) {
        suma += numero[i];
    }
    console.log(suma)
}
somaArray(numero)

//9

let valores=[1,7,3,10,54,45,29]
function segundoMaior(valores) {
    let max = 0;
    let segundoMax = 0;
    for (let i = 0; i < valores.length; i++) {
      if (valores[i] > max) {
        segundoMax = max;
        max = valores[i];
        } 
      else if (valores[i] < max && valores[i] > segundoMax) {
        segundoMax = valores[i];
        }
    }    
    console.log(segundoMax)
}
segundoMaior(valores)

//10


function melhoresAlunos(estudantes) {
  let melhorAluno = null;
  let melhorMedia = 0;

  for (let i = 0; i < estudantes.length; i++) {
    const aluno = estudantes[i];
    const media = calcularMedia(aluno.notas);

    if (media > melhorMedia) {
      melhorAluno = aluno.nome;
      melhorMedia = media;
    }
  }
console.log(`{nome: "${melhorAluno}", media: ${melhorMedia}}`)
}

function calcularMedia(notas) {
  const somaNotas = notas.reduce((total, nota) => total + nota, 0);
  return somaNotas / notas.length;
}
const estudantes = [
  {
    nome: 'Augusto',
    notas: [6, 5, 3, 7, 9]
  },
  {
    nome: 'Carlinhos',
    notas: [1, 3, 10, 10, 10]
  },
  {
    nome: 'Pedro',
    notas: [6, 8, 7, 7, 8]
  }
];
melhoresAlunos(estudantes);
