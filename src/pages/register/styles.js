import styled from 'styled-components';
import Bg from './../../assets/BG.png';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  /* background: #8257e5; */
  background: url(${Bg});
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    border: solid 1px #8257e5;
    padding: 10px;
    color: #8257e5;
    background: white;
    border-radius: 4px;
    padding: 5% 3%;
  }

  h1,
  h4 {
    text-align: center;
  }

  h4 {
    margin-top: 3%;
    font-weight: 300;
    font-style: italic;
  }

  .alignLogo {
    height: auto;
    width: 250px;
    margin-bottom: -6px;
  }

  .alignInputs {
    display: flex;
    flex-direction: column;
    margin-top: 2vh;

    input {
      background: none;
      border-left: none;
      border-right: none;
      border-top: none;
      border-bottom: solid 1px #8257e5;
      padding: 2% 0;
      margin-top: 5%;
      outline: none;

      &::placeholder {
        color: #8257e5;
      }
    }
  }

  .Entrar {
    margin-top: 5%;
    background: #8257e5;
    color: white;
    border: none;
    height: 30px;
    width: 120px;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.9s;

    &:hover {
      background: none;
      border: solid 1px #8257e5;
      color: #8257e5;
    }
  }

  .Cadastrar {
    margin-top: 5%;
    background: #ffc93c;
    color: white;
    border: none;
    height: 30px;
    width: 120px;
    margin-left: 10px;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.9s;

    &:hover {
      background: none;
      border: solid 1px #ffc93c;
      color: #ffc93c;
    }
  }

  .cadSucess {
    display: none;
    background: #00bd56;
    margin-top: 10%;
    border-radius: 4px;
    color: white;
    padding: 4%;
  }

  .cadFail {
    /* display: none; */
    background: #d92027;
    margin-top: 10%;
    border-radius: 4px;
    color: white;
    padding: 4%;
  }
`;
