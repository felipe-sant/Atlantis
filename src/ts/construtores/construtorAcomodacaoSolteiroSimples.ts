import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao"
import ConstrutorAcomodacao from "./construtorAcomodacao"

export default class ConstrutorAcomodacaoSolteiroSimples extends ConstrutorAcomodacao {
    constructor() {
        super()
        this.NomeAcomodacao = NomeAcomadacao.SolteiroSimples
        this.CamaSolteiro = 1
        this.Suite = 1
        this.Climatizacao = true
    }
}