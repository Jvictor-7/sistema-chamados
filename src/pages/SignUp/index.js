import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png'

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='container-center'>
            <div className='login'>
                <div className='login-area'>
                    <img src={logo} alt='Logo do sistema de chamados' />
                </div>

                <form>
                    <h1>Nova conta</h1>
                    <input
                        type='text'
                        placeholder='Seu Nome'
                        value={name}
                        onChange={(e) => {setName(e.target.value)}}
                    />

                    <input
                        type='email'
                        placeholder='email@email.com'
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}}
                    />

                    <input
                        type='password'
                        placeholder='*******'
                        value={password}
                        onChange={(e) => {setPassword(e.target.value)}}
                    />

                    <button type='submit'>Cadstrar</button>
                </form>

                <Link to="/">
                    Já possuí uma conta? Faça login
                </Link>

            </div>
        </div>
    );
}

export default SignUp;