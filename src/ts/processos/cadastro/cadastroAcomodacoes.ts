import Processo from "../../abstracoes/processo";
import DiretorCasalSimples from "../../diretores/diretorCasalSimples";
import DiretorFamiliaMais from "../../diretores/diretorFamiliaMais";
import DiretorFamiliaSimples from "../../diretores/diretorFamiliaSimples";
import DiretorFamiliaSuper from "../../diretores/diretorFamiliaSuper";
import DiretorSolteiroMais from "../../diretores/diretorSolteiroMais";
import DiretorSolteiroSimples from "../../diretores/diretorSolteiroSimples";
import Armazem from "../../dominio/armazem";
import Acomodacao from "../../modelos/acomodacao";

export default class CadastroAcomodacoes extends Processo {
    private acomodacoes: Acomodacao[]
    constructor() {
        super()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }
    processar(): void {
        let diretorCasalSimples = new DiretorCasalSimples()
        let diretorFamiliaSimples = new DiretorFamiliaSimples()
        let diretorFamiliaMais = new DiretorFamiliaMais()
        let diretorFamiliaSuper = new DiretorFamiliaSuper()
        let diretorSolteiroSimples = new DiretorSolteiroSimples()
        let diretorSolteiroMais = new DiretorSolteiroMais()

        this.acomodacoes.push(diretorCasalSimples.construir())
        this.acomodacoes.push(diretorFamiliaSimples.construir())
        this.acomodacoes.push(diretorFamiliaMais.construir())
        this.acomodacoes.push(diretorFamiliaSuper.construir())
        this.acomodacoes.push(diretorSolteiroSimples.construir())
        this.acomodacoes.push(diretorSolteiroMais.construir())
    }
}