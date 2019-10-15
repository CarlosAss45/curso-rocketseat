import React from 'react';
import './Login.css';

import  logo from '../assets/images/logo.svg';

export default function Login(){
    return (
        <div className="login-container">
            <form>
                <img src={logo} alt="logo"/>
                <input 
                    type="text"
                    placeholder="Digite seu usuário do Github"
                />
                <button type="submit">Enviar</button>
            </form>
        </div>  
    );
}