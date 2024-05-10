import Atualizar from "../abstracoes/atualizar";
import { TipoDocumento } from "../enumeracoes/TipoDocumento";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";

export default class AtualizarCPF extends Atualizar {
    private documentos:Documento[]

    constructor(cliente:Cliente) {
        super()
        this.documentos = cliente.Documentos
    }

    atualizar(): void {
        let index = this.documentos.findIndex(d => d.Tipo == TipoDocumento.CPF)
        let numero = this.entrada.receberTexto('Qual o novo número do CPF?')
        let dataExpedicao = this.entrada.receberData('Qual a nova data de expedição do CPF?')
        let cpf = new Documento(numero, TipoDocumento.CPF, dataExpedicao)
        if (index == -1) {
            this.documentos.push(cpf)
        } else {
            this.documentos[index] = cpf
        }
        console.log('CPF atualizado com sucesso!')
    }
}