import './navbar.css'
import loginIcon from '../../assets/loginicon.png'; 
import { NavLink } from 'react-router-dom';

export function NavBar() {
    return (
        <header className="navbar">
            <nav 
            className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm" 
            >
            <div className="container-fluid" >
                <NavLink className="navlink" to='/' >
                    <a className="navbar-brand">RollerSpeed</a>
                </NavLink>
                <div 
                className="collapse navbar-collapse" 
                id="navbarSupportedContent" 
                >
                <ul 
                    className="navbar-nav me-auto mb-2 mb-lg-0" 
                >
                    <NavLink className="nav-item" to='/Mision'>
                        <li>
                            <a 
                                className="nav-link active" 
                                aria-current="page" 
                                >Misión
                            </a>
                        </li>
                    </NavLink>
                    <NavLink className="nav-item" to='/Vision'>
                        <li>
                            <a 
                                className="nav-link active" 
                                aria-current="page" 
                                >Visión
                            </a>
                        </li>
                    </NavLink>
                    <NavLink className="nav-item" to='/Precios'>
                        <li>
                            <a 
                                className="nav-link active" 
                                aria-current="page" 
                                >Valores
                            </a>
                        </li>
                    </NavLink>
                    <NavLink className="nav-item" to='/Servicios'>
                        <li>
                            <a 
                                className="nav-link active" 
                                aria-current="page" 
                                >Servicios
                            </a>
                        </li>
                    </NavLink>
                    <NavLink className="nav-item" to='/Eventos'>
                        <li>
                            <a 
                                className="nav-link active" 
                                aria-current="page" 
                                >Eventos de la escuela
                            </a>
                        </li>
                    </NavLink>
                </ul>
                </div>
            </div>
            </nav>
            <NavLink className="navbar-brand" to='/Login'>
                <div className="container-login" >
                        <h6 className="login-sec">Login</h6>
                        <img className="icon-login" id='loginIcon' src={loginIcon} width="30px" height="30px"/>
                </div>
            </NavLink>
        </header>
    )
}

export default NavBar