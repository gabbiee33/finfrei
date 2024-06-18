import prompt from 'prompt-sync'
let ler = prompt()

let s1 = ''
let s2 = ''
let s3 = ''

export function depositar(sa) {

    let dp = Number(ler())
    
    while (dp <= 0) {
    console.log(`Informe um valor válido a ser depositado: `)
    dp = Number(ler()) 

    if(dp == 'C'){
        break
    }

    }

    s1 = sa  + dp

    return s1

}

export function sacar(sa) {

    let sq = Number(ler())

    while(sq <= 0) {
    console.log(`Informe um valor válido a ser sacado: `)
    sq = Number(ler())

    if(sq == 'C'){
        break
    }

    }

    s2 = s1 - sq

    return s2

}

export function exibirSaldo(sa) {

    let b = ''

    b = `O saldo atual em sua conta é: ${sa}`

    return b

}

export function simulaInvest(ca, jr, ti) {

    ca = Number(ler())
    jr = Number(ler())
    ti = Number(ler())

    while(ca <= 0 || jr <= 0 || ti <= 0) {
    console.log(`Informe valores válidos: `)
    ca = Number(ler())
    jr = Number(ler())
    ti = Number(ler())
    }

    let pc = jr / 100
    let c1 = (1 + pc)
    let c2 = c1**ti
    let c3 = ca * c2 
    let invest = c3

    return invest

}