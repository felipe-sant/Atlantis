import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressaorCliente from "../impressores/impressorCliente";
import MenuAtualizarClienteDependente from "../menus/menuAtualizarClienteDependente";
import Cliente from "../modelos/cliente";
import AtualizarData from "./atualizarData";
import AtualizarNome from "./atualizarNome";
import AtualizarNomeSocial from "./atualizarNomeSocial";

export default class AtualizarClienteDependente extends Processo {
    private cliente: Cliente
    private clientes: Cliente[]

    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
        this.clientes = Armazem.InstanciaUnica.Clientes
        this.menu = new MenuAtualizarClienteDependente()
        this.execucao = true
    }

    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')

        switch (this.opcao) {
            case 1:
                let nome = new AtualizarNome(this.cliente)
                nome.atualizar()
                break
            case 2:
                let nomeSocial = new AtualizarNomeSocial(this.cliente)
                nomeSocial.atualizar()
                break
            case 3:
                let dataNascimento = new AtualizarData(this.cliente)
                dataNascimento.atualizar()
                break
            case 4:
                console.log('Atualizando documentos...')
                break
            case 5:
                console.log('Atualizando o titular...')
                break
            case 6:
                let impressao = new ImpressaorCliente(this.cliente)
                console.log(impressao.imprimir())
                this.entrada.aguardarEnter()
                break
            case 0:
                /* atualizar cliente */
                let index = this.clientes.findIndex(c => c.Nome === this.cliente.Nome)
                this.clientes[index] = this.cliente
                console.log('Cliente atualizado com sucesso!')
                this.execucao = false
                break
            default:
                console.log('Opção não entendida... :(')
        }
    }
}