import Processo from "../../abstracoes/processo"
import { TipoDocumento } from "../../enumeracoes/TipoDocumento"
import Cliente from "../../modelos/cliente"
import Documento from "../../modelos/documento"

export default class CadastroCPF extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        let numero = this.entrada.receberTexto('Qual o número do CPF?')
        let dataExpedicao = this.entrada.receberData('Qual a data de expedição do CPF?')
        let cpf = new Documento(numero, TipoDocumento.CPF, dataExpedicao)
        let index = this.cliente.Documentos.findIndex(d => d.Tipo == TipoDocumento.CPF)
        if (index == -1) {
            this.cliente.Documentos.push(cpf)
        } else {
            this.cliente.Documentos[index] = cpf
        }
    }
}