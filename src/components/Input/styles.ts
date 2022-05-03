import styled from "styled-components";

interface ContainerProps {
  invalid?: boolean;
  error?: boolean;
  disabled?: boolean;
  value?: string | number;
}

export const TextInputContainer = styled.label<ContainerProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  border-radius: 8px;
  max-height: 5rem;

  fieldset {
    border-color: ${(props) => {
      if (props.error) {
        return '#E03222';
      }
      if (props.disabled) {
        return '#617282';
      }
      if (props.value) {
        return '#3182CE';
      }
      return '#181B23';
    }} !important;
  }

  .MuiTypography-root {
    font-family: 'Roboto', sans-serif !important;
  }

  label {
    font-family: 'Roboto', sans-serif;
    color: ${(props) => (props.error ? '#e8453e' : '')};
  }

  input {
    width: 100%;
    background-color: transparent;
    border-radius: 8px;
    border-width: 0px;
    outline: none;

    transition: box-shadow 0.4s, border 0.4s;

    color: var(--gray200);

    &:disabled {
      background-color: #f5f5f5;
    }

    /* Chrome, Safari, Edge, Opera */
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type='number'] {
      -moz-appearance: textfield;
    }

    &::placeholder {
      border-width: 2px;
      color: #cccccc;
      line-height: 16px;
    }
  }
`;