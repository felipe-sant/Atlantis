import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao"
import ConstrutorAcomodacao from "./construtorAcomodacao"

export default class ConstrutorAcomodacaoFamiliaSimples extends ConstrutorAcomodacao {
    constructor() {
        super()
        this.NomeAcomodacao = NomeAcomadacao.FamilaSimples
        this.CamaSolteiro = 2
        this.CamaCasal = 1
        this.Suite = 1
        this.Climatizacao = true
        this.Garagem = 1
    }
}