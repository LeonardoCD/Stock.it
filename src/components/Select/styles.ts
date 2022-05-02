import styled from "styled-components";

interface WrapperProps {
  isNotEmpty?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  .MuiInputBase-formControl {
    max-height: 3.5rem;
    & fieldset {
      border-color: ${(props) => (props.isNotEmpty ? "#3182CE" : "")};
    }
  }
  .Mui-focused {
    border-color: #B3B5C6;
    & label {
    color: #ffffff !important;
  }
  }

  label {
    font-family: "Roboto" !important;
    color: #ffffff !important;
  }
`;

export const InvalidText = styled.p`
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;

  margin-top: 5px;
`;
