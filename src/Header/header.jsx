import './header.css'
import imgPerfil from '/cat 1.png'

const Header = () => {
    return(
        <header className='header'>
            <img src={imgPerfil} alt="" />
            <ul>
                <li><a href="#" className='login'>LOGIN</a></li>
                <li><a href="#" className='registrar'>REGISTRAR</a></li>
            </ul>
        </header>
    )
}

export default Header