import ConstrutorAcomodacaoCasalSimples from "./construtores/construtorAcomodacaoCasalSimples";
import ConstrutorAcomodacaoFamiliaMais from "./construtores/construtorAcomodacaoFamiliaMais";
import ConstrutorAcomodacaoFamiliaSimples from "./construtores/construtorAcomodacaoFamiliaSimples";
import ConstrutorAcomodacaoFamiliaSuper from "./construtores/construtorAcomodacaoFamiliaSuper";
import ConstrutorAcomodacaoSolteiroMais from "./construtores/construtorAcomodacaoSolteiroMais";
import ConstrutorAcomodacaoSolteiroSimples from "./construtores/construtorAcomodacaoSolteiroSimples";

const casalSimples = new ConstrutorAcomodacaoCasalSimples();
const familiaSimples = new ConstrutorAcomodacaoFamiliaSimples();
const familiaMais = new ConstrutorAcomodacaoFamiliaMais();
const familiaSuper = new ConstrutorAcomodacaoFamiliaSuper();
const solteiroSimples = new ConstrutorAcomodacaoSolteiroSimples();
const solteiroMais = new ConstrutorAcomodacaoSolteiroMais();

let acomodacao = casalSimples.construir();
console.log("\nAcomodação Casal Simples")
console.log(acomodacao);

acomodacao = familiaSimples.construir();
console.log("\nAcomodação Familia Simples")
console.log(acomodacao);

acomodacao = familiaMais.construir();
console.log("\nAcomodação Familia Mais")
console.log(acomodacao);

acomodacao = familiaSuper.construir();
console.log("\nAcomodação Familia Super")
console.log(acomodacao);

acomodacao = solteiroSimples.construir();
console.log("\nAcomodação Solteiro Simples")
console.log(acomodacao);

acomodacao = solteiroMais.construir();
console.log("\nAcomodação Solteiro Mais")
console.log(acomodacao);