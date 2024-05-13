import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao"
import ConstrutorAcomodacao from "./construtorAcomodacao"

export default class ConstrutorAcomodacaoFamiliaSuper extends ConstrutorAcomodacao {
    constructor() {
        super()
        this.NomeAcomodacao = NomeAcomadacao.FamiliaSuper
        this.CamaSolteiro = 6
        this.CamaCasal = 2
        this.Suite = 3
        this.Climatizacao = true
        this.Garagem = 2
    }
}