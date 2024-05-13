import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao"
import ConstrutorAcomodacao from "./construtorAcomodacao"

export default class ConstrutorAcomodacaoFamiliaMais extends ConstrutorAcomodacao {
    constructor() {
        super()
        this.NomeAcomodacao = NomeAcomadacao.FamiliaMais
        this.CamaSolteiro = 5
        this.CamaCasal = 1
        this.Suite = 2
        this.Climatizacao = true
        this.Garagem = 2
    }
}