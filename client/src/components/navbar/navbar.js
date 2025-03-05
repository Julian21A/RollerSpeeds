import "./navbar.css";
import loginIcon from "../../assets/loginicon.png";
import logouticon from "../../assets/logout.png";
import patin from "../../assets/patin.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/Reducer/authSlice";

export function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { success, user } = useSelector((state) => state.auth);

  /**
   * Maneja el cierre de sesión del usuario.
   *
   * Esta función despacha una acción para cerrar la sesión del usuario
   * y luego redirige al usuario a la página de inicio.
   *
   * @returns {void} No retorna ningún valor. Solo realiza el logout y redirige al inicio.
   */
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <header className="navbar">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container-fluid">
          <NavLink className="navlink" to="/">
            <img
              width="30px"
              height="30px"
              className="logo-mini"
              id="logo"
              src={patin}
              alt="wallpaper"
            />
            <span className="navbar-brand">RollerSpeed</span>
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavLink className="nav-item" to="/Mision">
                <li>
                  <span className="nav-link active" aria-current="page">
                    Misión
                  </span>
                </li>
              </NavLink>
              <NavLink className="nav-item" to="/Vision">
                <li>
                  <span className="nav-link active" aria-current="page">
                    Visión
                  </span>
                </li>
              </NavLink>
              <NavLink className="nav-item" to="/Precios">
                <li>
                  <span className="nav-link active" aria-current="page">
                    Valores
                  </span>
                </li>
              </NavLink>
              <NavLink className="nav-item" to="/Servicios">
                <li>
                  <span className="nav-link active" aria-current="page">
                    Servicios
                  </span>
                </li>
              </NavLink>
              <NavLink className="nav-item" to="/Eventos">
                <li>
                  <span className="nav-link active" aria-current="page">
                    Eventos de la escuela
                  </span>
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
      {!success ? (
        <NavLink className="navbar-brand" to="/Login">
          <div className="container-login">
            <h6 className="login-sec">Login</h6>
            <img
              className="icon-login"
              id="loginIcon"
              src={loginIcon}
              width="30px"
              height="30px"
              alt="Hombrecito"
            />
          </div>
        </NavLink>
      ) : (
        <div className="user-info">
          <h6 className="user-name">Hola, {user?.name}</h6>{" "}
          <img
            className="icon-logout"
            id="loginIcon"
            src={logouticon}
            width="25px"
            height="25px"
            alt="puertita"
            onClick={handleLogout}
          />
        </div>
      )}
    </header>
  );
}

export default NavBar;
