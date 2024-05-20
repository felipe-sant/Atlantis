import Footer from "../components/footer";
import Navbar from "../components/navbar";
import css from "../styles/clientes.page.module.css";
import lupa from "../images/lupa.png";
import { useState } from "react";

export default function ClientesPage() {
    const [filtroNome, setFiltroNome] = useState<string>("")
    const [filtroCpf, setFiltroCpf] = useState<string>("")	

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
                        <button
                            onClick={buscarClientes}
                        >
                            <img src={lupa} alt="Buscar" />
                        </button>
                    </div>
                    <div className={css.clientes}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}