function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
if(num.value.lenght == 0){// eu só vou pegar o valor da variavel se ele for igual a zero 
    window.alert('Por favor, digite um número!')
} else{ 
    let n = Number(num.value)// essa variavel n é o numero que o cara digitou, ele ta pegando o numero
    let c= 1// a tabuada começa com 1
    tab.innerHTML= '' // tab recebe nada, isto é, ele vai fazer uma limpeza antes de começar outra tabuada, se não fizer isso, aparece tudo como sequência 
    while (c <= 10){ // a tabuada vai de 1 até 10, enquanto o contador for menor ou igual a dez ele vai executar esse bloco
let item = document.createElement('option')    // aqui eu to criando a tabuada no js porque não tem, to criando um elemento, to criando o elemento opção / quero a opção dinamica
    item.text= `${n} x ${c} = ${n*c}` //parte de dentro do option  um numero x o outro numero é igual ao resultado da multiplicação 
    tab.appendChild(item) //adicionar um elemento filho
    c++ //ou c+1
}
}

}