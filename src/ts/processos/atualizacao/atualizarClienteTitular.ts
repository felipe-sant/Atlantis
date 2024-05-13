import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressaorCliente from "../../impressores/impressorCliente";
import MenuAtualizarClienteTitular from "../../menus/menuAtualizarClienteTitular";
import Cliente from "../../modelos/cliente";
import CadastroEnderecoTitular from "../cadastro/cadastroEnderecoTitular";
import AtualizarData from "./atualizarData";
import AtualizarDocumentos from "./atualizarDocumentos";
import AtualizarNome from "./atualizarNome";
import AtualizarNomeSocial from "./atualizarNomeSocial";
import AtualizarTelefone from "./atualizarTelefone";

export default class AtualizarClienteTitular extends Processo {
    private cliente: Cliente
    private clientes: Cliente[]

    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
        this.clientes = Armazem.InstanciaUnica.Clientes
        this.menu = new MenuAtualizarClienteTitular()
        this.execucao = true
    }

    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')

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
                let data = new AtualizarData(this.cliente)
                data.atualizar()
                break
            case 4:
                let telefone = new AtualizarTelefone(this.cliente)
                telefone.processar()
                break
            case 5:
                let endereco = new CadastroEnderecoTitular(this.cliente)
                endereco.processar()
                break
            case 6:
                let documentos = new AtualizarDocumentos(this.cliente)
                documentos.processar()
            case 7:
                let impressao = new ImpressaorCliente(this.cliente)
                console.log(impressao.imprimir())
                this.entrada.aguardarEnter()
                break
            case 0:
                let index = this.clientes.findIndex(c => c.Nome === this.cliente.Nome)
                this.clientes[index] = this.cliente
                this.cliente.Dependentes.forEach(d => {
                    d.Endereco = this.cliente.Endereco
                    d.Telefones = this.cliente.Telefones
                })
                console.log('Cliente atualizado com sucesso!')
                this.execucao = false
                break
            default:
                console.log("Opção não entendida... :(")
        }
    }
}