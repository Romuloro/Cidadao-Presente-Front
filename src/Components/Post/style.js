import styled from "styled-components";

export const PostContainer = styled.section`
  box-sizing: border-box;
  padding: 1rem 0;
  margin: 0;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
  border: 1px solid black;

  .MuiAvatar-root {
    position: relative;
    //left: -40px;
    top: 25px;
  }

  .box-post {
    align-self: center;
    width: 85%;
    border: 1px solid black;
    display: flex;
    justify-content: space-around;

    .content-container {
      margin: 1.5rem;
      width: 75%;
      display: flex;
      flex-wrap: wrap;
    }


    .post-text {
      font-size: 1.5rem;
      margin: 1rem;
    }

    .post-title {
      font-size: 1.5rem;
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
        width: 80%;
        height: 75px;
        display: flex;
        align-items: center;
        justify-content: center;

        h6 {
          text-align: center;
        }
      }
    }
  }
`;
