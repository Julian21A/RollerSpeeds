import "./login.css";
import patin from "../../assets/patin.png";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { loginUser } from "../../redux/Reducer";
import { useNavigate } from 'react-router-dom';

export function Login() {
  const dispatch = useDispatch();
  const history = useNavigate();

  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  });

  const { loading, error } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser(userData));
      history.push('/'); 
    } catch (err) {}
  };

  return (
    <div className="card">
      <img src={patin} className="card-img-top" alt="aqui va un patin" />
      <div className="card-body">
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div className="input-form">
              <label htmlFor="userName" className="form-label">
                Username:
              </label>
              <input
                type="text"
                className="form-control"
                id="userName"
                name="userName"
                value={userData.userName}
                onChange={handleChange}
                placeholder="username"
              />
            </div>
            <div className="input-form">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                placeholder="*********"
              />
            </div>
            <div className="error-container">
              {error && <span className="error-alert">{error}</span>}
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? "Cargando..." : "Aceptar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
