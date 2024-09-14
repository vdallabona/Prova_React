import viteLogo from '../../../public/vite.svg'
import reactLogo from '../../assets/react.svg'
import './styles.css'
import { Link } from 'react-router-dom'

export default function Header(){
    return (
        <>
            <header>
                <h1>Bem-vindos ao Futurama Fanverse!</h1>
                <div className='imagensHeader'>
                    <img className="rotate" src={reactLogo} alt='Logo do React' />
                    <img className="rotate2" src={viteLogo} alt='Logo do Vite' />
                </div>
            </header>
            <nav>
                <Link to='/Personagem'>Personagens</Link>
                <Link to='/Episodios'>Episodios</Link>
            </nav>
        </>
    )
}