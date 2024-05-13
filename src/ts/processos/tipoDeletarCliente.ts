import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import isDependente from "../utils/isDependente";
import isTitular from "../utils/isTitular";

export default class TipoDeletarCliente extends Processo {
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
            if (isDependente(cliente)) {
                let titular = this.clientes.find(c => c = cliente.Titular)
                if (titular != undefined) {
                    let indice = titular.Dependentes.indexOf(cliente)
                    titular.Dependentes.splice(indice, 1)
                }
            }

            if (isTitular(cliente)) {
                let dependentes = this.clientes.filter(c => c.Titular == cliente)
                dependentes.forEach(d => {
                    let indice = this.clientes.indexOf(d)
                    this.clientes.splice(indice, 1)
                })
            }
            
            let indice = this.clientes.indexOf(cliente)
            this.clientes.splice(indice, 1)
            console.log('Cliente excluído com sucesso!')
        } else {
            console.log('Cliente não encontrado...')
        }
    }
}