import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";

export default class CadastroClienteDependente extends Processo {
    private clientes: Cliente[]
    private armazem: Armazem

    constructor() {
        super()
        this.armazem = Armazem.InstanciaUnica
        this.clientes = this.armazem.Clientes
    }

    processar(): void {
        console.log("Iniciando o cadastro de um novo dependente...")
        let titular = this.entrada.receberTexto("Qual o nome do titular?")
        let clienteTitular = this.clientes.find(c => c.Nome == titular)
        if (clienteTitular == undefined) {
            console.log("\nTitular não encontrado...\n")
            this.entrada.aguardarEnter()
            return
        }

        let nome = this.entrada.receberTexto("Qual o nome do novo dependente?")
        let nomeSocial = this.entrada.receberTexto("Qual o nome social do novo dependente?")
        let dataNascimento = this.entrada.receberData("Qual a data de nascimento?")
        let cliente = new Cliente(nome, nomeSocial, dataNascimento)

        cliente.Endereco = clienteTitular.Endereco

        this.processo = new CadastrarDocumentosCliente(cliente)
        this.processo.processar()

        clienteTitular.Dependentes.push(cliente)
        cliente.Titular = clienteTitular

        this.armazem.Clientes.push(cliente)

        console.log("Finalizando o cadastro do dependente...")
    }
}