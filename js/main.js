/*
var frase = "Japão é o melhor time do mundo";

//Replace pega o primeiro parametro e substitui pelo segundo 
console.log(frase.replace('Japão', 'Brasil'));

//Pega a string e tranforma tudo em maisculo
console.log(frase.toLocaleUpperCase());

//Pega a string e tranforma tudo em minusculo
console.log(frase.toLocaleLowerCase());

var lista = ["maça", "pêra", "laranja"];

//pega o primeiro elemento da lista 
console.log(lista[0]);

//adicionar um elemento a lista (adiciona ao final da lista)
lista.push("uva");

//remove um elemento a lista
lista.pop("uva");

//mostrar o tamanho da lista
console.log(lista.length);

//reverter lista
console.log(lista.reverse());

//transfomrar lista em string
console.log(lista.toString());

//transforma em string pegando a primeira letra do item
console.log(lista.toString()[1]);

//transforma em a lista em string e declara como deve ser a divição de itens
console.log(lista.join(" - "));

//dicionario
var fruta = { nome: "maça", cor: "vermelho" };

//printa a cor do dicionario fruta
console.log(fruta.cor);

var fruta1 =[{ nome: "maça", cor: "vermelho" }, {nome:"uva", cor:"roxa"}]

//printar quando tem mais de 1 dicionario
console.log(fruta1[1].cor);

//exiber um input parecido com o alert
var idade3 = prompt("qual sua idade");

//data
var d = new Date();
alert(d);

//trazer uma propriedade do objeto data
alert(d.getDay());
alert(d.getHours());

//uso de variavel global e local
var validar = 0;

function validarA(validar) {
    if (validar) {
        validar = 10; //usando variavel global
    }
}

function validarB(validar) {
    if (validar) {
        var validar = 10; //usando variavel local
    }
}

console.log(validarA());
console.log(validarB());
*/

function clicou() {

    //insere algo dentro do HTML, pode ser tanto string, como string com tags HTML
    document.getElementById("agradecimento").innerHTML =  "Obrigado por clicar";
}

function redirecionar() {

    //abre em uma nova janela
    window.open("https://facebook.com")

    //abre na mesma janela
    window.location.href = "https://instagram.com"
}

function trocar(elemento) {
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Página caregada!")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}