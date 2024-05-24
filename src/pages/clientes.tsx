import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ClienteTitular from "../components/clienteTitular";
import css from "../styles/clientes.page.module.css";
import lupa from "../images/lupa.png";
import { useEffect, useState } from "react";
import Cliente from "../models/cliente";
import Telefone from "../models/telefone";
import Endereco from "../models/endereco";
import Documento from "../models/documento";
import { TipoDocumento } from "../enums/tipoDocumento";
import isDependente from "../utils/isDependente";
import isTitular from "../utils/isTitular";
import ClienteDependente from "../components/clienteDependente";

export default function ClientesPage() {
    const [filtroNome, setFiltroNome] = useState<string>("")
    const [filtroCpf, setFiltroCpf] = useState<string>("")	
    const [clientes, setClientes] = useState<Cliente[]>([])

    useEffect(() => {
        let telefones:Telefone[] = []
        let telefone1 = new Telefone("11", "99999-9999")
        let telefone2 = new Telefone("11", "88888-8888")
        telefones.push(telefone1, telefone2)

        let endereco = new Endereco("Rua tal", "bairro n sei oq", "São José dos Campos", "SP", "Brasil", "12200-000")

        let documentos:Documento[] = []
        let documento1 = new Documento("117.242.410-10", TipoDocumento.CPF, new Date("2021-01-01"))
        let documento2 = new Documento("22.215.213-8", TipoDocumento.RG, new Date("2021-01-01"))
        let documento3 = new Documento("M724161", TipoDocumento.Passaporte, new Date("2021-01-01"))
        documentos.push(documento1, documento2, documento3)

        let dependentes: Cliente[] = []

        let clientes:Cliente[] = []
        let cliente:Cliente = new Cliente("Fulano", "Fulano de Tal", new Date())
        cliente.DataNascimento = new Date("1990-01-01")
        cliente.Telefones = telefones
        cliente.Endereco = endereco
        cliente.Documentos = documentos

        let clienteDependente: Cliente = new Cliente("beltrano", "beltrano de tal", new Date())
        clienteDependente.DataNascimento = new Date("2004-05-23")
        clienteDependente.Telefones = cliente.Telefones
        clienteDependente.Endereco = cliente.Endereco
        clienteDependente.Documentos = documentos

        clienteDependente.Titular = cliente
        dependentes.push(clienteDependente)
        cliente.Dependentes = dependentes

        clientes.push(cliente, clienteDependente)

        setClientes(clientes)
    }, [])

    function buscarClientes() {
        alert(filtroNome + " - " + filtroCpf)
    }

    /* Funções de mudança de input */

    const handleFiltroNome = (event: React.ChangeEvent<HTMLInputElement>) => {
        let nome = event.target.value
        if (nome.length > 50) return
        setFiltroNome(nome)
    }

    const handleFiltroCpf = (event: React.ChangeEvent<HTMLInputElement>) => {
        let cpf = event.target.value
        if (cpf != null && cpf.length > 0) {
            cpf = cpf.replace(/\D/g, "")
            cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2")
            cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2")
            cpf = cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
        } 
        if (cpf.length > 14) return
        setFiltroCpf(cpf)
    }

    return (
        <>
            <Navbar />
            <main className={css.main}>
                <div className={css.conteudo}>
                    <div className={css.filtro}>
                        <input 
                            type="text" 
                            placeholder="Nome do Cliente"
                            value={filtroNome}
                            onChange={handleFiltroNome}
                        />
                        <input 
                            type="text" 
                            placeholder="CPF" 
                            value={filtroCpf}
                            onChange={handleFiltroCpf}
                        />
                        <select
                        >
                            <option value=""></option>
                            <option value="">Titular</option>
                            <option value="">Dependente</option>
                        </select>

                        <button
                            onClick={buscarClientes}
                        >
                            <img src={lupa} alt="Buscar" />
                        </button>
                    </div>
                    <div className={css.clientes}>
                        {
                            clientes.map((cliente, index) => {
                                if (isDependente(cliente)) {
                                    return <ClienteDependente key={index} cliente={cliente} />
                                }
                                if (isTitular(cliente)) {
                                    return <ClienteTitular key={index} cliente={cliente} />
                                }
                                return <></>
                            })
                        }
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}