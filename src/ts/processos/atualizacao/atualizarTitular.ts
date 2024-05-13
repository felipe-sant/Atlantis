import Atualizar from "../../abstracoes/atualizar"
import Armazem from "../../dominio/armazem"
import Cliente from "../../modelos/cliente"
import isTitular from "../../utils/isTitular"

export default class AtualizarTitular extends Atualizar {
    private clientes: Cliente[]

    constructor(clienteDependente: Cliente) {
        super()
        this.cliente = clienteDependente
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    atualizar(): void {
        let titularAntigo = this.cliente.Titular
        let nomeNovoTitular = this.entrada.receberTexto('Qual o nome do novo titular?')
        let titularNovo = this.clientes.find(c => c.Nome == nomeNovoTitular)
        if (titularNovo == undefined) {
            console.log('Titular não encontrado...')
            this.entrada.aguardarEnter()
            return
        } else if (isTitular(titularNovo)) {
            let index = titularAntigo.Dependentes.findIndex(d => d.Nome == this.cliente.Nome)
            titularAntigo.Dependentes.splice(index, 1)
            this.cliente.Titular = titularNovo
            titularNovo.Dependentes.push(this.cliente)
            this.cliente.Telefones = titularNovo.Telefones
            this.cliente.Endereco = titularNovo.Endereco
            console.log('Titular atualizado com sucesso!')
            this.entrada.aguardarEnter()
        } else {
            console.log('O cliente informado não é um titular...')
            this.entrada.aguardarEnter()
            return
        }
    }
}