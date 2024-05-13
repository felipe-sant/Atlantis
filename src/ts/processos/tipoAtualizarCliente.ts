
import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import isDependente from "../utils/isDependente";
import isTitular from "../utils/isTitular";
import AtualizarClienteDependente from "./atualizacao/atualizarClienteDependente";
import AtualizarClienteTitular from "./atualizacao/atualizarClienteTitular";

export default class TipoAtualizarCliente extends Processo {
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
            if (isDependente(cliente)) {
                let atualizarDependente = new AtualizarClienteDependente(cliente)
                while (true) {
                    atualizarDependente.processar()
                    if (!atualizarDependente.Execucao) {
                        break
                    }
                }
            }

            if (isTitular(cliente)) {
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