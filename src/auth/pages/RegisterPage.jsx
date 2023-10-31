import { useNavigate } from 'react-router-dom';

import '../../styles.css'
import registerHero from '../../../assets/register-hero.png'

export const RegisterPage = () => {
    const navigate = useNavigate();

    const onCreateAccount = () => {
        navigate('/', {
            replace: true
        })

        window.alert("usuario creado con exito")
    }

    return (
        <div className="register">
            <div className="register-hero">
                <img className="register-hero-img" src={registerHero} alt="" />
            </div>
            <div className="register-form">
                <h1>Create Your account</h1>
                <form action="">
                    <h6>EMAIL</h6>
                    <input type="email" name="emailText" id="" className="form-control" autoComplete="off" />
                    <h6>PASSWORD</h6>
                    <input type="password" name="passwordText" id="" className="form-control" autoComplete="off" />

                    <button className='btn btn-primary' onClick={onCreateAccount}>
                        Create an account
                    </button>
                </form>
            </div>
        </div>
    )
}
