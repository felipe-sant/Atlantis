import Atualizar from "../../abstracoes/atualizar"
import Cliente from "../../modelos/cliente"

export default class AtualizarNome extends Atualizar {
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    atualizar(): void {
        let nome = this.entrada.receberTexto('Qual o novo nome do cliente?')
        if (nome != '') {
            this.cliente.Nome = nome
            console.log('Nome atualizado com sucesso!')
        }
    }
}