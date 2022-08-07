import styled from "styled-components";

export const CreatedPostContainer = styled.section`
  box-sizing: border-box;
  padding: 1rem 0;
  margin: 0;
  //display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
  //border: 1px solid black;

  form {
    display: grid;
    grid-template-rows: auto auto auto;
    grid-template-columns: auto auto auto auto;
    gap: 0.5rem;
    grid-template-areas:
      "titulo titulo titulo anonimo"
      "descricao descricao descricao descricao"
      "endereco endereco problemas problemas";

    .problemas {
      grid-area: problemas;
    }

    .anonimo {
      grid-area: anonimo;
    }

    .endereco {
      grid-area: endereco;
    }

    .titulo {
      grid-area: titulo;
    }

    .descricao {
      grid-area: descricao;
    }
  }
`;
