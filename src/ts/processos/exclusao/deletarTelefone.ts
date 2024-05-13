import Atualizar from "../../abstracoes/atualizar";
import Cliente from "../../modelos/cliente";
import Telefone from "../../modelos/telefone";

export default class DeletarTelefone extends Atualizar {
    private telefones:Telefone[]

    constructor(cliente:Cliente) {
        super()
        this.telefones = cliente.Telefones
    }

    atualizar(): void {
        let numeroTelefone = this.entrada.receberTexto('Qual o número do telefone a ser deletado?')
        let index = this.telefones.findIndex(t => t.Numero == numeroTelefone)
        if (index == -1) {
            console.log('Telefone não encontrado')
        } else {
            this.telefones.splice(index, 1)
            console.log('Telefone deletado com sucesso!')
        }
    }
}