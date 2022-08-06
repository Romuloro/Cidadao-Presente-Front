import styled from "styled-components";

export const FormLogin = styled.section`
  background-color: #000000;
  color: #ffffff;
  width: 100%;
  height: 100vh;
  margin: 0px;
  body {
    margin: 0px;
    padding: 0px;
  }

  .login {
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: space-around;
    /* align-items: center; */
  }

  .imageGood {
    width: 100%;
    height: 100%;
    border-right: 3px #00ff00 solid;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    img {
      position: relative;
      width: 100%;
      height: 100%;
      filter: blur(5px);
      -webkit-filter: blur(5px);
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      position: absolute;
      z-index: 1000;
    }

    h1 {
      margin: 0px;
      height: 100%;
      width: 100%;
      border-right: 0.15em solid orange;
      font-size: 40px;
      white-space: nowrap;
      overflow: hidden;
      z-index: 1000;
    }
    h1:nth-child(1) {
      width: 100%;
      -webkit-animation: type 4s steps(16, end);
      animation: type 3s steps(16, end);
      -webkit-animation-fill-mode: forwards;
      animation-fill-mode: forwards;
    }

    h1:nth-child(2) {
      width: 100%;
      opacity: 0;
      -webkit-animation: type2 2s steps(16, end);
      animation: type2 2s steps(16, end);
      -webkit-animation-delay: 4.5s;
      animation-delay: 3.5s;
      -webkit-animation-fill-mode: forwards;
      animation-fill-mode: forwards;
    }

    @keyframes type {
      0% {
        width: 0;
      }
      99.9% {
        border-right: 0.15em solid orange;
      }
      100% {
        border: none;
      }
    }

    @-webkit-keyframes type {
      0% {
        width: 0;
      }
      99.9% {
        border-right: 0.15em solid orange;
      }
      100% {
        border: none;
      }
    }

    @keyframes type2 {
      0% {
        width: 0;
      }
      1% {
        opacity: 1;
      }
      99.9% {
        border-right: 0.15em solid orange;
      }
      100% {
        opacity: 1;
        border: none;
      }
    }

    @-webkit-keyframes type2 {
      0% {
        width: 0;
      }
      1% {
        opacity: 1;
      }
      99.9% {
        border-right: 0.15em solid orange;
      }
      100% {
        opacity: 1;
        border: none;
      }
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2.5% 5%;
  }

  .text {
    height: 30%;
    h1 {
      font-size: 2rem;
      margin-bottom: 0px;
    }
    h2 {
      font-size: 1.5rem;
      color: gray;
      margin-bottom: 0px;
    }
  }

  .form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .input {
    input {
      width: 100%;
      height: 100%;
      margin-bottom: 2rem;
      box-sizing: border-box;
      border: none;
      border-bottom: 1px solid #00ff00;
      color: #ffffff;
      font-size: 1.5rem;
      outline: none;
      background: transparent;
      position: relative;

      ::placeholder {
        padding-left: 15px;
        font-size: 1rem;
      }
    }
  }

  .button-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      background-color: #4caf50; /* Green */
      border: none;
      color: white;
      font-weight: bold;
      padding: 1rem 3rem;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 22px;
      margin: 4px 2px;
      -webkit-transition-duration: 0.4s; /* Safari */
      transition-duration: 0.4s;
      cursor: pointer;
    }

    .button {
      height: 65%;
      background-color: black;
      color: white;
      border: 2px solid #4caf50;

      :hover {
        background-color: #4caf50;
        color: white;
      }
    }
  }

  .singupText {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    h1,
    h2 {
      font-size: 1rem;
    }
    h2 {
      color: #00ff00;
    }
  }
`;
