import styled from "styled-components";

export const ProductContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 80%;
  height: fit-content;
  padding: 2rem;
  padding-bottom: 0;
  background-color: var(--gray800);
  border-radius: 15px;
  color: #ffffff;
  margin-bottom: 1rem;

  h1 {
    font-size: var(--bigger);
    font-weight: 400;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
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