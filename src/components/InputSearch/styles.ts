import styled from 'styled-components';

export const Wrapper = styled.div`
  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
`;

export const InvalidText = styled.p`
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;

  margin-top: 5px;
`;
