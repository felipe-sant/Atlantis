import Atualizar from "../abstracoes/atualizar";
import Cliente from "../modelos/cliente";

export default class AtualizarData extends Atualizar {
    constructor(cliente:Cliente) {
        super()
        this.cliente = cliente
    }

    atualizar(): void {
        console.log('Atualizando data de nascimento...')
        let data = this.entrada.receberData('Qual a nova data de nascimento?')
        this.cliente.DataNascimento = data
        console.log('Data de nascimento atualizada com sucesso!')
    }
}