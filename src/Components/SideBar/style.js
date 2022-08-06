import styled from "styled-components";

export const Link = styled.section`
  .link {
    display: flex;
    align-items: cover;
    cursor: pointer;
    border-radius: 30px;
  }
  .link > h2 {
    font-weight: 700;
    font-size: 20px;
    margin-left: 20px;
  }
  `;

export const SidebarContainer = styled.section`
height: 100vh;
margin: 0;
padding: 0;
  .sidebar {
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 100%;
    padding: 50% 0;
    box-sizing: border-box;
    min-width: 175px;
    box-shadow: 0 0 6px hsl(210 14% 90%);
    justify-content: space-evenly;
  }
  .sidebar div {
    display: flex;
  }

  .sidebar div:hover {
    background-color: #e8f5fe;
    color: #50b7f5;
    transition: color 100ms ease-out;
  }
  .sidebar .MuiSvgIcon-root {
    padding: 20px;
  }
`;
