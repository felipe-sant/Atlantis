import Atualizar from "../../abstracoes/atualizar"
import { TipoDocumento } from "../../enumeracoes/TipoDocumento"
import Cliente from "../../modelos/cliente"
import Documento from "../../modelos/documento"

export default class AtualizarPassaporte extends Atualizar {
    private documentos:Documento[]

    constructor(cliente:Cliente) {
        super()
        this.documentos = cliente.Documentos
    }

    atualizar(): void {
        let index = this.documentos.findIndex(d => d.Tipo == TipoDocumento.Passaporte)
        let numero = this.entrada.receberTexto('Qual o novo número do Passaporte?')
        let dataExpedicao = this.entrada.receberData('Qual a nova data de expedição do Passaporte?')
        let passaporte = new Documento(numero, TipoDocumento.Passaporte, dataExpedicao)
        if (index == -1) {
            this.documentos.push(passaporte)
        } else {
            this.documentos[index] = passaporte
        }
        console.log('Passaporte atualizado com sucesso!')
    }
}