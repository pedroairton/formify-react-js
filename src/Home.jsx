import React from "react";
import './index.css'
import { useNavigate } from 'react-router-dom';
const Home = () => {

    const [contar, setContar] = React.useState(0)
    const navigate = useNavigate()
    const handleNavegacao = () => {
        // Navegar para a página desejada
        navigate('/Forme');
      };
    return (

    <div className="root">
        <div className="container">
            <div className="titleContainer">
                <img className="logo" src="./src/assets/ff.png" alt="" />
                <h3 className="logoText">FORMIFY</h3>
            </div>

            <div className="content">
                <div className="loginContainer">
                    {/* <h3 className="logText">Login</h3> */}
                    <input className="inputLogin" type="text" placeholder="Digite seu Login" />
                    {/* <h3 className="logText">Senha</h3> */}
                    <input className="inputLogin" type="text" placeholder="Digite sua Senha" />


                    <button className="logBtn" onClick={handleNavegacao}>FAZER LOGIN home</button>
               
                    <button className="logBtn">FAZER LOGIN ADM</button>
                </div>
            </div>

            <div className="bottomContainer">       
                <h3 className="text">Aplicativo React.JS (Teste)</h3>
                <button className="btn" onClick={() => setContar(contar+1) }>Número:{contar}</button>
            </div>
        </div>
        
    </div>
    
    )



}

export default Home