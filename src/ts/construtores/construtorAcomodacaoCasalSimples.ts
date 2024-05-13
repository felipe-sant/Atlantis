import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao";
import ConstrutorAcomodacao from "./construtorAcomodacao";

export default class ConstrutorAcomodacaoCasalSimples extends ConstrutorAcomodacao {
    constructor() {
        super()
        this.NomeAcomodacao = NomeAcomadacao.CasalSimples
        this.CamaCasal = 1
        this.Suite = 1
        this.Climatizacao = true
        this.Garagem = 1
    }
}