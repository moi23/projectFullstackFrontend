import React from 'react';

import { Container } from './styles';
import LogoEstudaApp from './../../assets/Logo.gif';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <Container>
      <form action="post">
        {/* <h1>EstudApp</h1> */}
        <img className="alignLogo" src={LogoEstudaApp} alt="" />
        <h4>
          Cadastre-se <br /> para usar a plataforma!
        </h4>
        <div className="alignInputs">
          <input type="text" placeholder="Digite seu seu nome aqui!" />
          <input type="text" placeholder="Digite seu seu sobrenome aqui!" />
          <input type="text" placeholder="Digite sua idade aqui!" />
          <input type="text" placeholder="Digite seu email aqui!" />
          <input type="password" placeholder="Digite sua senha aqui!" />
          <div>
            <button className="Entrar">Cadastrar</button>
            <Link to="/">
              <button className="Cadastrar">Voltar</button>
            </Link>
          </div>
        </div>
        <h4 class="cadSucess">
          Parabéns Seu cadastro <br /> Foi efetuado com Sucesso!
        </h4>
        <h4 class="cadFail">
          Eita!!!, parece que já existe <br /> uma conta com esse E-mail!
        </h4>
      </form>
    </Container>
  );
}

export default Register;
