"use strict";
// arrays
let numbers = [1, 2, 5, 6];
numbers.push(5);
console.log(numbers[2]);
//numbers = 'teste'
const nomes = ['jose', 'ana', 'joao'];
// outra sintaxe array
const nums = [5, 8, 9, 7];
nums.push(300);
console.log(nums);
console.log(nums[1]);
// any
const arr1 = [1, 'teste', true, { nome: 'jose' }];
console.log(arr1);
arr1.push([1, 5, 6]);
console.log(arr1);
// paramentros tipados
function soma(a, c) {
    console.log(a + c);
}
soma(5, 8);
// retorno de funcoes
function greeting(name) {
    return `ola ${name}`;
}
console.log(greeting('jose'));
// funcoes anonimas 
setTimeout(function () {
    const sallary = 1000;
    // console.log(parseFloat(sallary)) ainda funciona o ts
    //console.log(sallary)
}, 2000);
// objetos
function passCoordinates(coord) {
    console.log("x " + coord.x);
    console.log("y " + coord.y);
}
const obCoord = { x: 352, y: 84.5 };
passCoordinates(obCoord);
// propriedades opcionais
function showNumbers(a, b, c) {
    console.log("a " + a);
    console.log("b " + b);
    if (c) {
        console.log("c " + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 5);
// validando propriedades opcionais
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `ola ${firstName} ${lastName}`;
    }
    return `ola ${firstName}`;
}
console.log(advancedGreeting('jose', 'silva'));
console.log(advancedGreeting('jose'));
// union type
function showBalance(balance) {
    console.log(`o saldo da conta e R$ ${balance}`);
}
showBalance(100);
showBalance("500");
const arr2 = [1, '5', true];
// avancando em union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return 'usuario nao aprovado';
    }
    return `a funcao do usuario e ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole('admin'));
function showId(id) {
    console.log(`o id e ${id}`);
}
showId(1);
showId('200');
function showCoords(obj) {
    console.log(`x ${obj.x} y ${obj.y} z ${obj.z}`);
}
const coordObj = {
    x: 2,
    y: 4,
    z: 34
};
showCoords(coordObj);
const somePerson = { name: "jose", age: 33 };
//type personType = {       type e uma constante n pode ser modificado
//   age: number
//}
// literal types
let test;
test = 'testando';
console.log(test);
function showDirection(direction) {
    console.log(`a direcao e ${direction}`);
}
showDirection('left');
//showDirection('top')
// not null assertion operators
const p = document.getElementById("some-p");
console.log(p.innerText);
// bigint
let n;
//n = 1
n = 1000n;
console.log(typeof n);
// symbol
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
