import viteLogo from '../../../public/vite.svg'
import reactLogo from '../../assets/react.svg'
import './styles.css'
import { Link } from 'react-router-dom'

export default function Header(){
    return (
        <>
            <header>
                <h1 className='sombraDissipada'>Bem-vindos ao Futurama Fanverse!</h1>
                <div className='imagensHeader'>
                </div>
            </header>
            <nav>
                <Link to='/'><p className='itemMenu'>Home</p><img className="rotate2" src='https://purepng.com/public/uploads/large/purepng.com-futurama-shipfuturamaanimationsciencefictioncartoon-1701528603944s3pzr.png' alt='Home' /></Link>
                <Link to='/Personagem'><p className='itemMenu'>Personagem</p><img className="rotate" src='https://cdn.awsli.com.br/600x1000/2607/2607018/produto/220651506/futurama-philip-j-fry-faef8fa1.png' alt='Personagens' /></Link>
                <Link to='/Episodios'><p className='itemMenu'>Episodios</p><img className="rotate2" src='https://images.fineartamerica.com/images/artworkimages/medium/3/bender-futurama-robots-ulva-mardhiyah-transparent.png' alt='Episodios' /></Link>
            </nav>
        </>
    )
}