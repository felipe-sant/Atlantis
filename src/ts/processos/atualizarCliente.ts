import verificarDependente from "../utils/verificarDependente";
import verificarTitular from "../utils/verificarTitular";
import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import AtualizarClienteDependente from "./atualizarClienteDependente";
import AtualizarClienteTitular from "./atualizarClienteTitular";

export default class AtualizarCliente extends Processo {
    private clientes: Cliente[]
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        let nome = this.entrada.receberTexto('Qual o nome do cliente a ser atualizado?')
        let cliente = this.clientes.find(c => c.Nome == nome)
        if (cliente == undefined) {
            console.log('Cliente não encontrado...')
            return
        } else {
            if (verificarDependente(cliente)) {
                let atualizarDependente = new AtualizarClienteDependente(cliente)
                while (true) {
                    atualizarDependente.processar()
                    if (!atualizarDependente.Execucao) {
                        break
                    }
                }
            }

            if (verificarTitular(cliente)) {
                let atualizarTitular = new AtualizarClienteTitular(cliente)
                while (true) {
                    atualizarTitular.processar()
                    if (!atualizarTitular.Execucao) {
                        break
                    }
                }
            }
        }
    }
}