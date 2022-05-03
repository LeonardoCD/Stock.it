import styled from 'styled-components';

export const HeaderLabel = styled.div`
  display: flex;
  width: 100%;
  .MuiTableCell-root {
    font-size: var(--small);
  }
`;

export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 2rem;
  padding-left: 2rem;
  padding-right: 6px;

  background: #fafafa;
  border-radius: 18px;

  font-size: var(--small);
  color: #222222;
`;

export const InputPage = styled.input`
  text-align: center;
  max-width: 2.4rem;
  max-height: 1.2rem;
  padding-top: 1.5px;

  color: #222222;
  border-radius: 12px;
  border: 1px solid #d3d3d3;
  background-color: #ffffff;

  outline: #18aa36;

  &:hover {
    border-color: #18aa36;
  }

  &:focus {
    border-color: #18aa36;
  }

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const GroupButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1px;

  background-color: #fb9555;
  border-radius: 12px;

  button {
    transition: all 0.4s;
    background-color: var(--primary);
    padding: 0.1rem 0.625rem;
    border: none;

    &:hover {
      cursor: pointer;
      background-color: #d74615;
    }
  }

  .before {
    border-radius: 12px 0 0 12px;
  }

  .after {
    border-radius: 0 12px 12px 0;
  }
`;
