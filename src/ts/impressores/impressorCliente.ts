import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";
import isDependente from "../utils/isDependente";
import isTitular from "../utils/isTitular";
import ImpressorDocumentos from "./impressorDocumentos";
import ImpressorEndereco from "./impressorEndereco";
import ImpressorTelefones from "./impressorTelefones";

export default class ImpressaorCliente implements Impressor {
    private cliente: Cliente
    private impressor!: Impressor

    constructor(cliente: Cliente) {
        this.cliente = cliente

    }
    imprimir(): string {
        let impressao = `****************************\n`
            + `| Nome: ${this.cliente.Nome}\n`
            + `| Nome social: ${this.cliente.NomeSocial}\n`
            + `| Data de nascimento: ${this.cliente.DataNascimento.toLocaleDateString()}\n`
            + `| Data de cadastro: ${this.cliente.DataCadastro.toLocaleDateString()}`

        this.impressor = new ImpressorTelefones(this.cliente.Telefones)
        impressao = impressao + `\n${this.impressor.imprimir()}`

        this.impressor = new ImpressorEndereco(this.cliente.Endereco)
        impressao = impressao + `\n${this.impressor.imprimir()}`

        this.impressor = new ImpressorDocumentos(this.cliente.Documentos)
        impressao = impressao + `\n${this.impressor.imprimir()}`

        if (this.cliente.Dependentes != undefined && this.cliente.Dependentes.length > 0) {
            impressao = impressao + `\nDependentes:`
            this.cliente.Dependentes.forEach(dependente => {
                impressao = impressao + `\n${dependente.Nome}`
            })
        }

        if (this.cliente.Titular != undefined) {
            impressao = impressao + `\nTitular:`
            impressao = impressao + `\n- ${this.cliente.Titular.Nome}`
        }

        if (isTitular(this.cliente)) {
            if (this.cliente.Acomodacao != undefined) {
                impressao = impressao + `\nAcomodação:`
                impressao = impressao + `\n- ${this.cliente.Acomodacao.NomeAcomadacao}`
            } else {
                impressao = impressao + `\nAcomodação:`
                impressao = impressao + `\n- Não designada`
            }
        } else if (isDependente(this.cliente)) {
            if (this.cliente.Titular.Acomodacao != undefined) {
                impressao = impressao + `\nAcomodação:`
                impressao = impressao + `\n- ${this.cliente.Titular.Acomodacao.NomeAcomadacao}`
            } else {
                impressao = impressao + `\nAcomodação:`
                impressao = impressao + `\n- Não designada`
            }
        }

        impressao = impressao + `\n****************************`

        return impressao
    }

}