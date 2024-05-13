import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressaorCliente from "../../impressores/impressorCliente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

export default class ListagemTitularEspecifico extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        let dependente = this.entrada.receberTexto("Qual o nome do dependente?")
        let clienteDependente = this.clientes.find(c => c.Nome == dependente)
        if (clienteDependente == undefined) {
            console.log("\nDependente não encontrado...\n")
            this.entrada.aguardarEnter()
            return
        } else {
            console.log('Iniciando a listagem do titular do dependente...')
            this.impressor = new ImpressaorCliente(clienteDependente.Titular)
            console.log(this.impressor.imprimir())
            this.entrada.aguardarEnter()
        }
    }
}