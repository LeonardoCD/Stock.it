import styled from "styled-components";

export const SingUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 2rem;
  /* justify-content: center; */
  /* align-items: center; */

  margin: auto;
  width: 70%;
  height: fit-content;
  padding: 2rem;
  background-color: var(--gray800);
  border-radius: 15px;
  color: #ffffff;

  h1 {
    font-size: var(--bigger);
    font-weight: bold;
    color: #ffffff;
    font-family: 'Inter', sans-serif;
  }

  p {
    font-size: var(--medium);
    color: var(--gray200);
    font-family: 'Inter', sans-serif;
    margin-bottom: 2rem;
  }

  span {
    display: inline-block;
    color: '#ffffff';
    font-family: 'Roboto', sans-serif;
    font-size: var(--small);
    margin-bottom: 2rem;

    a {
      color: var(--blue500);
    }
  }
`;