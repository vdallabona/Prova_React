export default function Cardepisodes({ data: episodio }){
    return(
        <div className='card char'> 
            <h2>{episodio.name}</h2>

            <div className='char-info'>
                <span><b>Este foi o </b> {episodio.id}<b>° episódio lançado</b></span>
                <span><b>Data de Lançamento: </b> {episodio.airDate} </span>
                <span><b>Código de lançamento: </b>{episodio.broadcastCode}</span>
            </div>
                <h2><b>Temporada: </b>{episodio.season.id}</h2>

        </div>
    )
}