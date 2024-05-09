import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";

export default class ExclusaoCliente extends Processo {
    private clientes: Cliente[]
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        let nome = this.entrada.receberTexto('Qual o nome do cliente a ser excluído?')
        let cliente = this.clientes.find(c => c.Nome == nome)
        if (cliente != undefined) {
            let indice = this.clientes.indexOf(cliente)
            this.clientes.splice(indice, 1)
            console.log('Cliente excluído com sucesso!')
        } else {
            console.log('Cliente não encontrado...')
        }
    }
}