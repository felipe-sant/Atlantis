import { format } from "path";
import React, { useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

import form from "../styles/form.module.css"

export default function CadastrarClientePage() {
    const [tipoCliente, setTipoCliente] = useState<string>("")
    const [nullTipoCliente, setNullTipoCliente] = useState<boolean>(true)

    /* Utils */

    function limparCampos() {
        setTipoCliente("")
        setNullTipoCliente(true)
    }

    /* Handlechange */

    const handleTipoCliente = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === "") {
            setNullTipoCliente(true)
        }
        setTipoCliente(e.target.value)
    }

    /* funcoes finais */

    function cadastrar() {

    }

    return (
        <>
            <Navbar />
            <main>
                <form className={form.formulario}>
                    <div className={form.titulo}>
                        <h2>Cadastro de Clientes</h2>
                    </div>
                    <div className={form.campos}>
                        <div className={form.campo}>
                            <label className="text title required">Nome:</label>
                            <input 
                                className="text"
                                type="text" 
                                placeholder="Nome do Cliente" 
                            />
                        </div>
                        <div className={form.campo}>
                            <label className="text title">Nome Social:</label>
                            <input 
                                className="text"    
                                type="text" 
                                placeholder="Nome do Cliente" 
                            />
                        </div>
                        <div className={form.campo}>
                            <label className="text title required">Data Nascimento:</label>
                            <input 
                                className="text"
                                type="date" 
                                placeholder="Nome do Cliente" 
                            />
                        </div>
                        <div className={form.campo}>
                            <label className="text title required">Tipo de Cliente</label>
                            <select
                                className="text"
                                value={tipoCliente}
                                onChange={handleTipoCliente}
                            >
                                <option value="">- Nenhum tipo escolhido -</option>
                                <option value="dependente">Dependente</option>
                                <option value="titular">Títular</option>
                            </select>
                        </div>
                    </div>
                    <div className={form.botoes}>
                        <button 
                            className={form.limpar + " text"} 
                            onClick={limparCampos}
                        >Limpar</button>
                        <button 
                            className={form.cadastrar + " text"}
                            onClick={cadastrar}
                        >Enviar</button>
                    </div>
                </form>
            </main>
            <Footer />
        </>
    )
}