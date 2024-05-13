import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao"
import ConstrutorAcomodacao from "./construtorAcomodacao"

export default class ConstrutorAcomodacaoSolteiroMais extends ConstrutorAcomodacao {
    constructor() {
        super()
        this.NomeAcomodacao = NomeAcomadacao.FamiliaMais
        this.CamaCasal = 1
        this.Suite = 1
        this.Climatizacao = true
        this.Garagem = 1
    }
}