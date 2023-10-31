import { useNavigate } from "react-router-dom"

import '../../styles.css'
import loginHero from '../../../assets/login-hero.png'
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export const LoginPage = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {

    login('Oscar Vasquez');

    navigate('/', {
      replace: true
    })
  }

  const onRegister = () => {
    navigate('/register')
  };

  return (
    <div className="login">
      <div className="login-hero">
        <img className="login-hero-img" src={loginHero} alt="" />
      </div>
      <div className="login-form">
        <h1>Your account</h1>
        <form action="">
          <h6>EMAIL</h6>
          <input type="email" name="emailText" id="" className="form-control" autoComplete="off" />
          <h6>PASSWORD</h6>
          <input type="password" name="passwordText" id="" className="form-control" autoComplete="off" />

          <button className='btn btn-primary' onClick={onLogin}>
            Login
          </button>
          <button className='btn btn-primary' onClick={onRegister}>
            Register
          </button>
        </form>
      </div>
    </div>
  )
}
