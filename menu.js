import prompt from 'prompt-sync'
let ler = prompt()

let text = ''

export function menu(mensagem) {

    text = `Seja bem-vindo à FinTech! Selecione abaixo como deseja prosseguir: 
    1. Exibir Saldo Bancário.
    2. Depositar.
    3. Sacar.
    4. Simular Investimento.
    5. Sair`

    return text
    
}

