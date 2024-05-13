import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao";
import MenuDesignarCliente from "../menus/menuDesignarCliente";
import Acomodacao from "../modelos/acomodacao";
import Cliente from "../modelos/cliente";
import isTitular from "../utils/isTitular";

export default class TipoDesignarAcomodacao extends Processo {
    private clientes: Cliente[]
    private acomodacoes: Acomodacao[]

    constructor() {
        super()
        this.menu = new MenuDesignarCliente()
        this.clientes = Armazem.InstanciaUnica.Clientes
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }

    processar(): void {
        let nomeCliente = this.entrada.receberTexto('Qual o nome do cliente?')
        let cliente = this.clientes.find(cliente => cliente.Nome === nomeCliente)

        if (!cliente || !isTitular(cliente)) {
            console.log('Titular não encontrado')
            this.entrada.aguardarEnter()
            return
        }

        this.menu.mostrar()

        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        switch (this.opcao) {
            case 1:
                cliente.Acomodacao = this.acomodacoes.find(acomodacao => acomodacao.NomeAcomadacao === NomeAcomadacao.CasalSimples)!
                this.salvarCliente(cliente)
                return
            case 2:
                cliente.Acomodacao = this.acomodacoes.find(acomodacao => acomodacao.NomeAcomadacao === NomeAcomadacao.FamilaSimples)!
                this.salvarCliente(cliente)
                return 
            case 3:
                cliente.Acomodacao = this.acomodacoes.find(acomodacao => acomodacao.NomeAcomadacao === NomeAcomadacao.FamiliaMais)!
                this.salvarCliente(cliente)
                return
            case 4:
                cliente.Acomodacao = this.acomodacoes.find(acomodacao => acomodacao.NomeAcomadacao === NomeAcomadacao.FamiliaSuper)!
                this.salvarCliente(cliente)
                return
            case 5:
                cliente.Acomodacao = this.acomodacoes.find(acomodacao => acomodacao.NomeAcomadacao === NomeAcomadacao.SolteiroSimples)!
                this.salvarCliente(cliente)
                return
            case 6:
                cliente.Acomodacao = this.acomodacoes.find(acomodacao => acomodacao.NomeAcomadacao === NomeAcomadacao.SolteiroMais)!
                this.salvarCliente(cliente)
                return
            case 7:
                cliente.Acomodacao = undefined
                this.salvarCliente(cliente)
                return
            case 0:
                return
        }
    }

    private salvarCliente(cliente: Cliente) {
        let indice = this.clientes.findIndex(c => c.Nome === cliente.Nome)
        this.clientes[indice] = cliente
    }
}