import prompt from 'prompt-sync'
let ler = prompt()

import { depositar, sacar, exibirSaldo, simulaInvest } from './financeiro.js'
import { menu } from './menu.js'

console.log('- FinTech -')
console.log('Simplificando o gerenciamento financeiro para todos!')

console.log('')

let opcao = ''
let sa = 0
let gd = ''
let ca = 0
let jr = 0
let ti = 0

while(opcao != 5){

    let m = menu()
    console.log(m)
    opcao = ler()

    if(opcao == 1) {

    let a = exibirSaldo(sa)
    console.log(a)

    }

    else if(opcao == 2) {

    console.log(`Informe o valor a ser depositado: `)
    sa = depositar(sa)
    let b = sa
    console.log(`Seu saldo atual é: ${b}`)
    console.log('')

    }

    else if(opcao == 3) {
    
    console.log(`Informe o valor a ser sacado: `)
    sa = sacar(sa)
    let c = sa
    console.log(`Após o saque, seu saldo atual é: ${c}`)
    console.log('')
    
    }

    else if(opcao == 4) {

    console.log(`Informe seu Capital Inicial, Juros e Tempo Investido para iniciar a simulação: `)
    gd = simulaInvest(ca, jr, ti)
    let d = gd
    console.log(`O valor final da sua Simulação de Investimento é: ${d}`)
    console.log('')

    }
    
}



