import Entrada from "../io/entrada";
import Cliente from "../modelos/cliente";

export default abstract class Atualizar {
    protected cliente!: Cliente
    protected entrada = new Entrada()
    abstract atualizar(): void
}