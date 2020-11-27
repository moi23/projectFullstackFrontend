import React from 'react';

import { Container } from './styles';
import LogoEstudaApp from './../../assets/Logo.gif';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <Container>
      <form action="post">
        {/* <h1>EstudApp</h1> */}
        <img className="alignLogo" src={LogoEstudaApp} alt="" />
        <h4>"A Prática leva a perfeição"</h4>
        <div className="alignInputs">
          <input type="text" placeholder="Digite seu email aqui!" />
          <input type="password" placeholder="Digite sua senha aqui!" />
          <div>
            <button className="Entrar">Entrar</button>
            <Link to="/register">
              <button className="Cadastrar">Cadastrar</button>
            </Link>
          </div>
        </div>
      </form>
    </Container>
  );
}

export default Login;
