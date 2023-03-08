let n1 = 3
const n2 = 2

function soma () { //Criação de uma function.
    return n1 + n2 //Return faz com que retorne a soma.
}

console.log(soma()) //Parar exibir uma função, basta colocar o nome dela e ().

// n1 = 6
// n2 = 10

// console.log(soma())

const funcaoSoma = (a, b) => {
    return a + b
}

console.log(funcaoSoma(1, 2))
console.log(funcaoSoma(6, 7))