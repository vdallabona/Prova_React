import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import SelectPage from '../../components/SelectPage';
import './styles.css'

export default function Personagem() {
    const [conteudo, setConteudo] = useState(<p>Carregando...</p>);
    const [numero, setNumero] = useState(1);
    const [totalPages, setTotalPages] = useState(0)

    async function carregarTodosOsPersonagens() {

        const reqOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const response = await fetch(
            `https://futuramaapi.com/api/characters?page=${numero}`,
            reqOptions
        );

        if (!response.ok) {
            throw new Error('Algo deu errado');
        }
        const responseApi = await response.json();
        return responseApi;
    }

    async function listaPersonagens() {
            const { items } = await carregarTodosOsPersonagens();
            setTotalPages(9)
            setConteudo(items.map(personagem => <Card data={personagem} key={personagem.id} />));
    }

    useEffect(() => {
        listaPersonagens();
    }, [numero]);

    function atualizarPagina(valor) {
        setNumero(prevNumero => {
            const novoNumero = valor === '+' ? prevNumero + 1 : prevNumero - 1;
            return novoNumero > 0 ? novoNumero : prevNumero;
        });
    }

    function pularPagina(paginaNova) {
        setNumero(paginaNova);
    }

    return (
        <main>
            <div className='linhaBotao'>
                <button onClick={() => atualizarPagina('-')}>Página anterior</button>
                    <SelectPage numero={numero} total={totalPages} mudancaPagina={pularPagina}/>
                <button onClick={() => atualizarPagina('+')}>Próxima página</button>
            </div>
            <div className='lista-principal'>
                {conteudo}
            </div>
            <div className='linhaBotao'>
                <button onClick={() => atualizarPagina('-')}>Página anterior</button>
                    <SelectPage numero={numero} total={totalPages} mudancaPagina={pularPagina}/>
                <button onClick={() => atualizarPagina('+')}>Próxima página</button>
            </div>
        </main>
    );
}