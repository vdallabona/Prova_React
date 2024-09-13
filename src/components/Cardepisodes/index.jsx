export default function Cardepisodes({ data: episodio }){
    return(
        <div className='card char'> 
            <h2>{episodio.name}</h2>

            <div className='char-info'>
                <span><b>Numero do episósio: </b> {episodio.number} </span>
                <span><b>Data de Lançamento: </b> {episodio.airDate} </span>
            </div>

            <h5><b>Código de lançamento: </b>{episodio.broadcastCode}</h5>
        </div>
    )
}