import Logo from './assets/Logo.svg';
import Feed from './assets/feed.svg';
import Perfil from './assets/account_circle.svg'
import Info from './assets/info.svg'
import Sair from './assets/logout.svg'
import './style.css';

export default function Sidebar() {
    return(
        <aside>
            <img src={Logo} alt='Logo do CodeConnect' />
            <nav>
                <ul className='lista-sidebar'>
                    <li className='item__link-publicacao'>
                        <a href='#'><p>Publicar</p></a>
                    </li>
                    <li>
                        <a href='#' className='item__link item__link--ativo'>
                            <img src={Feed} alt='' />
                            <span>Feed</span> 
                        </a>
                    </li>
                    <li>
                        <a href="#" className='item__link'>
                            <img src={Perfil} alt='' />
                            <span>Perfil</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className='item__link'>
                            <img src={Info} alt='' />
                            <span>Sobre nós</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className='item__link'>
                            <img src={Sair} alt='' />
                            <span>Sair</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}