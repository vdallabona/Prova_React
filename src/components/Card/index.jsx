import './styles.css'

export default function Card({ data: personagem }){
    let imagem = personagem.image;
    if (imagem === null){
        imagem = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNK7-n-r_w_qCEIjsnu8VXMBamUkSmLUr9Eg&s'
    }
    return(
        <div className='card char'>
            <img className='animation1' src={imagem} alt={personagem.name} /> 
            <h2>{personagem.name}</h2>

            <div className='char-info'>
                <span><b>Espécie: </b> {personagem.species} </span>
                <span><b>Gênero: </b> {personagem.gender} </span>
            </div>

            <h5><b>Status: </b>{personagem.status}</h5>
        </div>
    )
}