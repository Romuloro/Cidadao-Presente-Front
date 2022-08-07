import styled from "styled-components";

export const HomeContainer = styled.section`
  padding: 0;
  margin: 0;
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const PostContainer = styled.section`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  display: flex;
  height: 100%;
  width: calc(100vw - 200px);
  border: 1px solid black;

  .post-container {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100%;
    width: inherit;
    overflow-y: scroll;

    .post-create {
      border: 1px solid black;
      height: 45%;

      h1 {
        font-size: 2.5rem;
        margin-left: 2rem;
      }
    }

    /* .box-post {
      align-self: center;
      width: 70%;
      border: 1px solid black;
      display: flex;
      gap: 1rem;
      margin-bottom: 3rem;

      .content-container {
        margin: 2rem;
      }

      .MuiAvatar-root {
        position: relative;
        left: -40px;
        top: 15%;
      }

      .post-text {
        font-size: 1.5rem;
        margin: 1rem;
      }

      .post-title {
        font-size: 2.5rem;
        margin: 2rem 0;
      }

      #tipo-container {
        display: flex;
        justify-content: flex-end;

        span {
          margin: 0 1rem;
          font-size: 1.4rem;
          border-radius: 30px;
          background-color: #50b7f5;
          width: 80px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    } */
  }
`;
