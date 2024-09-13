import React, { useEffect, useState } from 'react';
import Cardepisodes from '../../components/Cardepisodes';
import SelectPage from '../../components/SelectPage';

export default function Episodios() {
    const [conteudo, setConteudo] = useState(<p>Carregando...</p>);
    const [numero, setNumero] = useState(1);
    const [totalPages, setTotalPages] = useState(0)

    async function carregarTodosOsPersonagens() {

        const reqOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const response = await fetch(
            `https://futuramaapi.com/api/episodes?page=${numero}`,
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
            setTotalPages(1)
            setConteudo(items.map(episodio => <Cardepisodes data={episodio} key={episodio.id} />));
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