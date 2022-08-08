import styled from "styled-components";

export const ModalStyled = styled.section`
  .modal {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 15;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;

    .modal-container {
      background-color: #ffffff;
      color: #000000;
      width: 60%;
      height: 60%;
      border-radius: 20px;

      .close {
        background-color: transparent;
        border: none;
        outline: none;
        width: 32px;
        height: 32px;
        right: calc(-100% + 64px);
        top: 16px;
        display: flex;
        position:relative;
        align-items: center;
        cursor: pointer;

        &:before,
        &:after {
          content: "";
          position: absolute;
          height: 24px;
          width: 2.5px;
          background-color: #000000;
        }
        &:before {
          transform: rotate(45deg);
        }
        &:after {
          transform: rotate(-45deg);
        }
      }
    }
  }

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
