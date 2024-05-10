import Atualizar from "../abstracoes/atualizar";
import { TipoDocumento } from "../enumeracoes/TipoDocumento";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";

export default class DeletarRg extends Atualizar {
    private documentos:Documento[]

    constructor(cliente:Cliente) {
        super()
        this.documentos = cliente.Documentos
    }

    atualizar(): void {
        let numeroRg = this.entrada.receberTexto('Qual o número do RG a ser deletado?')
        let index = this.documentos.findIndex(d => d.Numero == numeroRg && d.Tipo == TipoDocumento.RG)
        if (index == -1) {
            console.log('RG não encontrado')
        } else {
            this.documentos.splice(index, 1)
            console.log('RG deletado com sucesso!')
        }
    }
}