import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {


    return(
        <nav className='nav-container'>
            <ul className='ul--left'>
                <li className='li-container'>
                    <NavLink to='/' className='nav-link'>
                        Projectos
                    </NavLink>
                </li>
                <li  className='li-container'>
                    <NavLink to='/about' className='nav-link'>
                        Sobre Mi
                    </NavLink>
                </li>
            </ul>

            <ul className='ul--right'>
                
                <li  className='li-container' >
                    <NavLink to='/' >
                        <div className='nav-link--item'>
                            <img src='src\assets\icon\es.svg' alt='es' />
                        </div>
                    </NavLink>
                </li>
                <li  className='li-container'>
                    <NavLink to='/'>
                        <div className='nav-link--item'>
                            <img src='src\assets\icon\en.svg' alt='en' />
                        </div>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar ;