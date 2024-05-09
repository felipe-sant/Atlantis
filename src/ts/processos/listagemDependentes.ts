import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressaorCliente from "../impressores/impressorCliente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ListagemDepentes extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        let titular = this.entrada.receberTexto("Qual o nome do titular?")
        let clienteTitular = this.clientes.find(c => c.Nome == titular)
        if (clienteTitular == undefined) {
            console.log("\nTitular não encontrado...\n")
            this.entrada.aguardarEnter()
            return
        } else {
            console.log('Iniciando a listagem dos clientes dependentes...')
            this.clientes.forEach(cliente => {
                if (this.dependente(cliente, clienteTitular)) {
                    this.impressor = new ImpressaorCliente(cliente)
                    console.log(this.impressor.imprimir())
                    this.entrada.aguardarEnter()
                }
            })
        }
        
    }
    private dependente(cliente: Cliente, clienteTitular: Cliente | undefined): boolean {
        let verificacao = false
        if (cliente.Titular != undefined && cliente.Titular.Nome == clienteTitular?.Nome) {
            verificacao = true
        }
        return verificacao
    }
}