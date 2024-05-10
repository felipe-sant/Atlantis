import Atualizar from "../abstracoes/atualizar";
import Cliente from "../modelos/cliente";

export default class AtualizarNomeSocial extends Atualizar {
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    atualizar(): void {
        let nomeSocial = this.entrada.receberTexto('Qual o novo nome social do cliente?')
        if (nomeSocial != '') {
            this.cliente.NomeSocial = nomeSocial
            console.log('Nome social atualizado com sucesso!')
        }
    }
}