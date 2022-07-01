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
  }

  .imageGood {
    width: 100%;
    border-right: 3px #00ff00 solid;
  }

  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 25vh;
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
      background-color: #000000;
      border: 2px solid #00ff00;
    }
  }
`;
