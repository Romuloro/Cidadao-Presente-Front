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
      //display:flex;

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
        z-index: 25;

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
      .content{
        position: relative;
        top: -7.5%;
        width: 100%;
        height: 100%;
      }
    }
  }

  
`;
