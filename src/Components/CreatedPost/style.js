import styled from "styled-components";

export const CreatedPostContainer = styled.section`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  flex-direction: column;
  //align-items: center;
  justify-content: center;
  //border: 1px solid black;
  h1 {
    font-size: 32px;
    margin: 10px;
  }

  form {
    display: grid;
    grid-template-rows: auto auto 20%;
    grid-template-columns: 30% 30% 40%;
    width: 90%;
    height: 90%;
    align-self: center;
    column-gap: 0.5rem;
    grid-template-areas:
      "titulo titulo problemas"
      "descricao descricao problemas"
      "buttom_post endereco anonimo";

    .problemas {
      height: 80%;
      width: 80%;
      display: flex;
      align-self: center;
      grid-area: problemas;
    }

    .anonimo {
      align-self: center;
      grid-area: anonimo;
    }

    .endereco {
      grid-area: endereco;
    }

    .titulo {
      height: 100%;
      width: 80%;
      align-self: center;
      grid-area: titulo;
    }

    .descricao {
      height: 80%;
      width: 80%;
      align-self: center;
      grid-area: descricao;
    }

    .buttom_post {
      align-self: center;
      grid-area: buttom_post;
    }

    .local {
      align-self: center;
      grid-area: local;
    }

    .descricao_localidade {
      align-self: center;
      grid-area: descricao_localidade;
    }
  }
`;
