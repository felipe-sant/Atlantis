import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Slider from "../components/slider";
import css from "../styles/home.page.module.css"
import { acomodacao } from "../types/acomodacao";
import Acomodacao from "../components/acomodacao";
import Footer from "../components/footer";

export default function HomePage() {
    const acomodacoes: acomodacao[] = [
        {
            imagem: 'https://placehold.co/250x300',
            titulo: 'Solteiro Simples',
            descricao: 'Acomodação simples para solteiro(a).'
        },
        {
            imagem: 'https://placehold.co/250x300',
            titulo: 'Solteiro Mais',
            descricao: 'Acomodação com garagem para solteiro(a).'
        },
        {
            imagem: 'https://placehold.co/250x300',
            titulo: 'Casal Simples',
            descricao: 'Acomodação simples para casal.'
        },
        {
            imagem: 'https://placehold.co/250x300',
            titulo: 'Famila Simples',
            descricao: 'Acomodação para família com até duas crianças.'
        },
        {
            imagem: 'https://placehold.co/250x300',
            titulo: 'Familia Mais',
            descricao: 'Acomodação para família com até cinco crianças.'
        },
        {
            imagem: 'https://placehold.co/250x300',
            titulo: 'Familia Super',
            descricao: 'Acomodação para até duas familias, casal e três crianças cada.'
        },
    ]

    return (
        <>
            <Navbar />
            <main className={css.main}>
                <Slider />
                <section className={css.conteudo}>
                    <article className="funcionalidades">
                        <h2>Funcionalidades do Site</h2>
                        <div className={css.paragrafos}>
                            <p>Nosso site simplifica o cadastro de clientes titulares e dependentes, facilitando o gerenciamento de dados pessoais e de contato.</p>
                            <p>Com a funcionalidade de CRUD, é possivel facilmente <Link to="/clientes" className="span link">gerenciar clientes</Link>, atualizando informações e adicionando ou removendo dependentes conforme necessário.</p>
                            <p>Além disso, nosso sistema oferece um recurso integrado de registro de hospedagem, agilizando o acompanhamento das estadias dos clientes.</p>
                        </div>
                    </article>
                    <article>
                        <h2>Nossas Hospedagens</h2>
                        <div className={css.hospedagens}>
                            {acomodacoes.map((acomodacao, index) => (
                                <Acomodacao key={index} acomodacao={acomodacao} />
                            ))}
                        </div>
                    </article>
                    <article className={css.sobre}>
                        <h2>Sobre nós</h2>
                        <div className={css.paragrafos}>
                            <p>
                                A Ocean Solutions, especializada em desenvolvimento de software personalizado, orgulhosamente apresenta o projeto Atlantis. Concebido para atender às demandas específicas dos gerentes de parques aquáticos, o Atlantis oferece uma plataforma completa para otimizar todas as operações, desde a gestão de bilheteria até o controle de acesso e programação de eventos. Com ferramentas poderosas para gerenciar recursos humanos e analisar dados de visitantes, o Atlantis capacita parques aquáticos de todos os portes a alcançar novos patamares de eficiência e excelência na experiência do cliente.
                            </p>
                        </div>
                    </article>
                </section>
            </main>
            <Footer />
        </>
    );
}