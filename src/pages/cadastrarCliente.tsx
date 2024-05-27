import React, { useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

import form from "../styles/form.module.css"
import Cliente from "../models/cliente";
import Documento from "../models/documento";
import { TipoDocumento } from "../enums/tipoDocumento";
import Telefone from "../models/telefone";

export default function CadastrarClientePage() {
    const listaTitulares: Cliente[] = [
        new Cliente("pedro augusto", "", new Date()),
        new Cliente("gustavo gabriel", "", new Date()),
        new Cliente("yzabella luiza", "", new Date())
    ]

    const [nome, setNome] = useState<string>("")
    const [errorNome, setErrorNome] = useState<boolean>(false)
    const [nomeSocial, setNomeSocial] = useState<string>("")
    const [dataNascimento, setDataNascimento] = useState<string>("")
    const [errorDataNascimento, setErrorDataNascimento] = useState<boolean>(false)

    const [documentos, setDocumentos] = useState<Documento[]>([])
    const [errorDocumentos, setErrorDocumentos] = useState<boolean>(false)
    const [tipoDocumento, setTipoDocumento] = useState<string>("")
    const [nullTipoDocumento, setNullTipoDocumento] = useState<boolean>(true)
    const [numeroDocumentoCPF, setNumeroDocumentoCPF] = React.useState<string>("")
    const [numeroDocumentoRG, setNumeroDocumentoRG] = React.useState<string>("")
    const [numeroDocumentoPassaporte, setNumeroDocumentoPassaporte] = React.useState<string>("")
    const [errorNumeroDocumento, setErrorNumeroDocumento] = React.useState<boolean>(false)
    const [dataExpedicaoDocumento, setDataExpedicaoDocumento] = React.useState<string>("")
    const [errorDataExpedicao, setErrorDataExpedicao] = React.useState<boolean>(false)

    const [tipoCliente, setTipoCliente] = useState<string>("")
    const [nullTipoCliente, setNullTipoCliente] = useState<boolean>(true)
    const [errorTipoCliente, setErrorTipoCliente] = useState<boolean>(false)

    const [titular, setTitular] = useState<string>("")
    const [nullTitular, setNullTitular] = useState<boolean>(true)
    const [errorTitular, setErrorTitular] = useState<boolean>(false)

    const [telefone, setTelefone] = useState<string>("")
    const [errorTelefone, setErrorTelefone] = useState<boolean>(false)
    const [telefones, setTelefones] = useState<Telefone[]>([])
    const [errorTelefones, setErrorTelefones] = useState<boolean>(false)

    /* Utils */

    function limparCampos() {
        setNome("")
        setNomeSocial("")
        setDataNascimento("")
        limparCamposDocumentos()
        setDocumentos([])
        setTipoCliente("")
        limparCamposTitular()
        limparCamposDependente()
        setTelefones([])
    }

    function limparCamposDocumentos() {
        setTipoDocumento("")
        setNullTipoDocumento(true)
        setNumeroDocumentoCPF("")
        setNumeroDocumentoRG("")
        setNumeroDocumentoPassaporte("")
        setDataExpedicaoDocumento("")
    }

    function limparCamposTitular() {
        setTitular("")
    }

    function limparCamposDependente() {
        setTelefone("")
    }

    function limparErros() {
        setErrorNome(false)
        setErrorDataNascimento(false)
        setErrorDocumentos(false)
        setErrorNumeroDocumento(false)
        setErrorDataExpedicao(false)
        setErrorTipoCliente(false)
        setErrorTitular(false)
        setErrorTelefone(false)
        setErrorTelefones(false)
    }

    function verificarCamposRequired(): boolean {
        if (nome === "") {
            setErrorNome(true)
            focusNome()
            return false
        }

        if (dataNascimento === "") {
            setErrorDataNascimento(true)
            focusDataNascimento()
            return false
        }

        if (documentos.length === 0) {
            setErrorDocumentos(true)
            focusDocumentos()
            return false
        }

        if (tipoCliente === "") {
            setErrorTipoCliente(true)
            focusTipoCliente()
            return false
        }

        if (tipoCliente === "dependente" && titular === "") {
            setErrorTitular(true)
            focusTitular()
            return false
        }

        if (tipoCliente === "titular" && telefones.length === 0) {
            setErrorTelefones(true)
            focusTelefone()
            return false
        }

        return true
    }

    /* Focus */

    function focusNome() {
        const input = document.getElementById("nome")
        if (input) input.focus()
    }

    function focusDataNascimento() {
        const input = document.getElementById("dataNascimento")
        if (input) input.focus()
    }

    function focusDocumentos() {
        const input = document.getElementById("tipoDocumento")
        if (input) input.focus()
    }

    function focusTipoCliente() {
        const input = document.getElementById("tipoCliente")
        if (input) input.focus()
    }

    function focusTitular() {
        const input = document.getElementById("titular")
        if (input) input.focus()
    }

    function focusTelefone() {
        const input = document.getElementById("telefone")
        if (input) input.focus()
    }

    /* Handlechange */

    const handleNome = (e: React.ChangeEvent<HTMLInputElement>) => {
        limparErros()
        setNome(e.target.value)
    }

    const handleNomeSocial = (e: React.ChangeEvent<HTMLInputElement>) => {
        limparErros()
        setNomeSocial(e.target.value)
    }

    const handleDataNascimento = (e: React.ChangeEvent<HTMLInputElement>) => {
        limparErros()
        setDataNascimento(e.target.value)
    }

    const handleTipoDocumento = (e: React.ChangeEvent<HTMLSelectElement>) => {
        limparErros()
        limparCamposDocumentos()
        if (e.target.value === "") {
            setNullTipoDocumento(true)
        } else {
            setNullTipoDocumento(false)
        }
        setTipoDocumento(e.target.value)
    }

    const handleNumeroDocumentoCPF = (e: React.ChangeEvent<HTMLInputElement>) => {
        limparErros()
        let numero = e.target.value
        numero = numero.replace(/\D/g, "")
        numero = numero.replace(/(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3/$4")
        if (numero.length > 14) return
        setNumeroDocumentoCPF(numero)
    }

    const handleNumeroDocumentoRG = (e: React.ChangeEvent<HTMLInputElement>) => {
        limparErros()
        let numero = e.target.value
        numero = numero.replace(/\D/g, "")
        numero = numero.replace(/(\d{2})(\d{3})(\d{3})(\d{1})$/, "$1.$2.$3-$4")
        if (numero.length > 12) return
        setNumeroDocumentoRG(numero)
    }

    const handleNumeroDocumentoPassaporte = (e: React.ChangeEvent<HTMLInputElement>) => {
        limparErros()
        let numero = e.target.value
        if (numero.length > 9) return
        setNumeroDocumentoPassaporte(numero)
    }

    const handleDataExpericaoDocumento = (e: React.ChangeEvent<HTMLInputElement>) => {
        limparErros()
        setDataExpedicaoDocumento(e.target.value)
    }

    const handleTipoCliente = (e: React.ChangeEvent<HTMLSelectElement>) => {
        limparErros()
        if (e.target.value === "") {
            setNullTipoCliente(true)
        } else {
            setNullTipoCliente(false)
        }
        setTipoCliente(e.target.value)
    }

    const handleTitular = (e: React.ChangeEvent<HTMLSelectElement>) => {
        limparErros()
        if (e.target.value === "") {
            setNullTitular(true)
        } else {
            setNullTitular(false)
        }
        setTitular(e.target.value)
    }

    const handleTelefone = (e: React.ChangeEvent<HTMLInputElement>) => {
        limparErros()
        let numero = e.target.value
        numero = numero.replace(/\D/g, "")
        numero = numero.replace(/(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3")
        if (numero.length > 15) return
        setTelefone(numero)
    }

    /* class condicional */

    function classErrorNome(): string {
        return errorNome ? form.errorInput + " text" : "text"
    }

    function classErrorDataNascimento(): string {
        return errorDataNascimento ? form.errorInput + " text" : "text"
    }

    function classErrorNumeroDocumento(): string {
        return errorNumeroDocumento ? form.errorInput + " text" : "text"
    }

    function classErrorDataExpedicao(): string {
        return errorDataExpedicao ? form.errorInput + " text" : "text"
    }

    function classErrorDocumentos(): string {
        return errorDocumentos ? form.errorDiv + " " + form.visualizar : form.visualizar
    }

    function classTipoCliente(): string {
        if (nullTipoCliente === true && errorTipoCliente === true) {
            return form.selectVazio + " text " + form.errorInput
        }

        if (nullTipoCliente === true && errorTipoCliente === false) {
            return form.selectVazio + " text"
        }

        if (nullTipoCliente === false && errorTipoCliente === true) {
            return "text " + form.errorInput
        }

        return "text"
    }

    function classTitular(): string {
        if (nullTitular === true && errorTitular === true) {
            return form.selectVazio + " text " + form.errorInput
        }

        if (nullTitular === true && errorTitular === false) {
            return form.selectVazio + " text"
        }

        if (nullTitular === false && errorTitular === true) {
            return "text " + form.errorInput
        }

        return "text"
    }

    function classErrorTelefone(): string {
        return errorTelefone && tipoCliente === "titular" ? form.errorInput + " text" : "text"
    }

    function classErrorTelefones(): string {
        return errorTelefones && tipoCliente === "titular" ? form.errorDiv + " " + form.visualizar : form.visualizar
    }

    /* funcoes finais */

    function adicionarDocumento() {
        limparErros()
        if (tipoDocumento === "") {
            setErrorDocumentos(true)
            return
        }

        if (tipoDocumento === "cpf") {
            if (numeroDocumentoCPF === "") {
                setErrorNumeroDocumento(true)
                return
            }
            if (dataExpedicaoDocumento === "") {
                setErrorDataExpedicao(true)
                return
            }
            const novoDocumento = new Documento(numeroDocumentoCPF, TipoDocumento.CPF, new Date(dataExpedicaoDocumento))
            setDocumentos([...documentos, novoDocumento])
        }

        if (tipoDocumento === "rg") {
            if (numeroDocumentoRG === "") {
                setErrorNumeroDocumento(true)
                return
            }
            if (dataExpedicaoDocumento === "") {
                setErrorDataExpedicao(true)
                return
            }
            const novoDocumento = new Documento(numeroDocumentoRG, TipoDocumento.RG, new Date(dataExpedicaoDocumento))
            setDocumentos([...documentos, novoDocumento])
        }

        if (tipoDocumento === "passaporte") {
            if (numeroDocumentoPassaporte === "") {
                setErrorNumeroDocumento(true)
                return
            }
            if (dataExpedicaoDocumento === "") {
                setErrorDataExpedicao(true)
                return
            }
            const novoDocumento = new Documento(numeroDocumentoPassaporte, TipoDocumento.Passaporte, new Date(dataExpedicaoDocumento))
            setDocumentos([...documentos, novoDocumento])
        }

        limparCamposDocumentos()
    }

    function removerDocumento(documento: Documento) {
        let index = documentos.indexOf(documento)
        let documentosAtualizados = documentos
        documentosAtualizados.splice(index, 1)
        setDocumentos([...documentosAtualizados])
    }

    function adicionarTelefone() {
        if (telefone === "") {
            setErrorTelefone(true)
            return
        }

        let ddd = telefone.substring(1, 3)
        let numero = telefone.substring(5)

        const novoTelefone = new Telefone(ddd, numero)
        setTelefones([...telefones, novoTelefone])
        setTelefone("")
    }

    function removerTelefone(telefone: Telefone) {
        let index = telefones.indexOf(telefone)
        let telefonesAtualizados = telefones
        telefonesAtualizados.splice(index, 1)
        setTelefones([...telefonesAtualizados])
    }

    function cadastrar() {
        if (verificarCamposRequired() === false) return
        console.log("cadastrando novo cliente")
        console.log("nome: " + nome)
        console.log("nome social: " + nomeSocial)
        console.log("data de nascimento: " + dataNascimento)
        console.log("documentos: ")
        documentos.forEach(documento => {
            console.log("tipo: " + documento.Tipo + " numero: " + documento.Numero + " data: " + documento.DataExpedicao)
        })
        console.log("tipo de cliente: " + tipoCliente)
        if (tipoCliente === "dependente") {
            console.log("titular: " + titular)
        }
        if (tipoCliente === "titular") {
            console.log("telefones: ")
            telefones.forEach(telefone => {
                console.log("ddd: " + telefone.Ddd + " numero: " + telefone.Numero)
            })
        }
    }

    return (
        <>
            <Navbar />
            <main>
                <div className={form.formulario}>
                    <div className={form.titulo}>
                        <h2>Cadastro de Clientes</h2>
                    </div>

                    <div className={form.campos}>
                        <div className={form.campo}> {/* Nome */}
                            <label className="text title required">Nome:</label>
                            <input
                                id = "nome"
                                className={classErrorNome()}
                                type="text"
                                placeholder="Nome do Cliente"
                                value={nome}
                                onChange={handleNome}
                            />
                        </div>

                        <div className={form.campo}> {/* Nome Social */}
                            <label className="text title">Nome Social:</label>
                            <input
                                className="text"
                                type="text"
                                placeholder="Nome do Cliente"
                                value={nomeSocial}
                                onChange={handleNomeSocial}
                            />
                        </div>

                        <div className={form.campo}> {/* Data de nascimento */}
                            <label className="text title required">Data de Nascimento:</label>
                            <input
                                id = "dataNascimento"
                                className={classErrorDataNascimento()}
                                type="date"
                                placeholder="Nome do Cliente"
                                value={dataNascimento}
                                onChange={handleDataNascimento}
                            />
                        </div>

                        <div className={form.campo}> {/* Documentos */}
                            <label className="text title required">Documentos</label>
                            <select
                                id="tipoDocumento"
                                className={nullTipoDocumento ? form.selectVazio + " text" : "text"}
                                value={tipoDocumento}
                                onChange={handleTipoDocumento}
                            >
                                <option value="">- Nenhum documento selecionado -</option>
                                <option value="cpf">CPF</option>
                                <option value="rg">RG</option>
                                <option value="passaporte">Passaporte</option>
                            </select>

                            {
                                tipoDocumento === "cpf" && (
                                    <>
                                        <input
                                            className={classErrorNumeroDocumento()}
                                            type="text"
                                            placeholder="000.000.000-00"
                                            onChange={handleNumeroDocumentoCPF}
                                            value={numeroDocumentoCPF}
                                        />
                                        <input
                                            className={classErrorNumeroDocumento()}
                                            type="date"
                                            onChange={handleDataExpericaoDocumento}
                                            value={dataExpedicaoDocumento}
                                        />
                                        <button className={form.addButton} onClick={adicionarDocumento}>+</button>
                                    </>
                                )
                            }

                            {
                                tipoDocumento === "rg" && (
                                    <>
                                        <input
                                            className={classErrorNumeroDocumento()}
                                            type="text"
                                            placeholder="00.000.000-0"
                                            onChange={handleNumeroDocumentoRG}
                                            value={numeroDocumentoRG}
                                        />
                                        <input
                                            className={classErrorNumeroDocumento()}
                                            type="date"
                                            onChange={handleDataExpericaoDocumento}
                                            value={dataExpedicaoDocumento}
                                        />
                                        <button className={form.addButton} onClick={adicionarDocumento}>+</button>
                                    </>
                                )
                            }

                            {
                                tipoDocumento === "passaporte" && (
                                    <>
                                        <input
                                            className={classErrorNumeroDocumento()}
                                            type="text"
                                            placeholder="000000000"
                                            onChange={handleNumeroDocumentoPassaporte}
                                            value={numeroDocumentoPassaporte}
                                        />
                                        <input
                                            className={classErrorDataExpedicao()}
                                            type="date"
                                            onChange={handleDataExpericaoDocumento}
                                            value={dataExpedicaoDocumento}
                                        />
                                        <button className={form.addButton} onClick={adicionarDocumento}>+</button>
                                    </>
                                )
                            }

                            <div className={classErrorDocumentos()}>
                                {
                                    documentos.map((documento, index) => {
                                        return (
                                            <div className={form.documento} key={index}>
                                                <div className={form.textos}>
                                                    <div className="text">{documento.Tipo}</div>
                                                    <div className="text">{documento.Numero}</div>
                                                    <div className="text">{documento.DataExpedicao.toLocaleDateString()}</div>
                                                </div>
                                                <button className={form.removeButton} onClick={() => removerDocumento(documento)}>-</button>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className={form.campo}> {/* Tipo do cliente */}
                            <label className="text title required">Tipo de Cliente</label>
                            <select
                                id = "tipoCliente"
                                className={classTipoCliente()}
                                value={tipoCliente}
                                onChange={handleTipoCliente}
                            >
                                <option value="">- Nenhum tipo escolhido -</option>
                                <option value="dependente">Dependente</option>
                                <option value="titular">Títular</option>
                            </select>
                        </div>

                        {
                            tipoCliente === "titular" && (
                                <>
                                    <div className={form.campo}>
                                        <label className="text title required">Telefones</label>
                                        <input 
                                            id = "telefone"
                                            className={classErrorTelefone()}
                                            type="text"
                                            placeholder="00 00000-0000"
                                            value={telefone}
                                            onChange={handleTelefone}
                                        />
                                        <button 
                                            className={form.addButton}
                                            onClick={adicionarTelefone}
                                        >+</button>
                                        <div className={classErrorTelefones()}>
                                            {
                                                telefones.map((telefone, index) => {
                                                    return (
                                                        <div className={form.documento} key={index}>
                                                            <div className={form.textos}>
                                                                <div className="text">({telefone.Ddd}) {telefone.Numero}</div>
                                                            </div>
                                                            <button 
                                                                className={form.removeButton}
                                                                onClick={() => removerTelefone(telefone)}
                                                            >-</button>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </>
                            )
                        }

                        {
                            tipoCliente === "dependente" && (
                                <div className={form.campo}>
                                    <label className="text title required">Titular</label>
                                    <select
                                        id = "titular"
                                        className={classTitular()}
                                        value={titular}
                                        onChange={handleTitular}
                                    >
                                        <option value="">- Nenhum titular escolhido</option>
                                        {
                                            listaTitulares.map((titular, index) => {
                                                return <option value={titular.Nome} key={index}>{titular.Nome}</option>
                                            })
                                        }
                                    </select>
                                </div>
                            )
                        }

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
                </div>
            </main>
            <Footer />
        </>
    )
}