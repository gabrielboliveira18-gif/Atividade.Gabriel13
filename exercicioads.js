{
let numero1 = 20
let numero2 = 20
let numero3 = 20
let numero4 = 7
let soma = numero1 + numero2 + numero3 + numero4
console.log(soma)
}

// exercico 2
{
let numero1 = 80
let numero2 = 60

let subtracao = numero1 - numero2
let multiplicacao = numero1 * numero2
let divisao = numero1 / numero2
let resto_divisao = numero1 % numero2

console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)
console.log(resto_divisao)
}

//exercicio 3

{
    let numero1 = 576

    if(numero1 % 2 === 0){
        console.log('seu numero e par')
    }else {
    console.log('seu numero é impar')
    }
}

//4

{
    let n1 = 7
    let n2 = '7'

    console.log(n1===n2)
}

//5
{
    let n1 = 50
    if(n1 % 5 === 5){
        console.log("seu numero e divisivel")
    }else{
        console.log("seu numero nao e divisivel")
    }
}

//6
{
    let idade = 20
    if(idade < 12){
        console.log("criança")
    }else if (idade >= 13 && idade < 18)
    {
        console.log("adolescente")
    }else if(idade >=18 && idade < 60)
    {
        console.log("adulto")
    }else{
        console.log("idoso")
    }

}

//7

{
    let opcao = 3
    switch(opcao){
        case 1: console.log("cadastrar");
        break;
        case 2: console.log("excluir");
        break;
        case 3: console.log("editar");
        break;
        default:
            console.log("opcao inesistente")
    }
}
//8
{
    let numero = 5
    let primo = true
    if(numero < 2){
        primo = false
    }else{
        for(let i = 2; i< numero; i++){
            if (numero % i === 0){
                primo = false
                break;
            }
        }
    }
    console.log(primo ? `${numero} e primo` : `${numero} nao e primo`)
}
//9
{
    for (let i =1; i<=5;i++)
    {
        switch(i){
            case 1:
                console.log("numero 1")
                break;
                case 3:
                console.log("numero 3")
                break;
                case 5:
                    console.log('numero 5')
                    break;
                    default:
                        console.log("numero invalido")
        }
    }
}
//10
{
    for(let i = 1; i<=10; i++){
    console.log(i)
    } 
}
//11
{
    let array =[1, 2, 3, 4, 5]
    console.log(array)
    array.push(6)
    console.log(array)
    array.unshift(0)
    console.log(array)
    array.pop(3)
    console.log(array)
    let cores =['preto','vermelho','branco','azul','cinza']
    cores [2] = 'rosa'
    console.log(cores)
    let frutas = ['banana','maca','uva','abacaxi','mamao']
    console.log(frutas)
    frutas.push('acerola')
    frutas.unshift('lichia')
    console.log(frutas)
    frutas.pop()
    console.log(frutas)
    frutas.shift(frutas)
    console.log(frutas)
}

