import React from 'react';
import { Control, Controller, RegisterOptions } from 'react-hook-form';
import { InputAdornment, styled, TextField } from '@mui/material';

import * as S from './styles';
import { FiSearch } from 'react-icons/fi';

export interface InputSearchProps {
  label?: string;
  error?: boolean;
  fieldName: string;
  disabled?: boolean;
  labelColor?: string;
  defaultValue?: string;
  control?: Control<any>;
  uncontrolledValue?: string;
  placeholder?: string;
  style?: React.CSSProperties;
  rules?: Omit<
    RegisterOptions,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  uncontrolledOnChange?: React.Dispatch<React.SetStateAction<string>>;
}

export const CssTextField = styled(TextField)({
  fontFamily: 'Roboto',
  color: '#fff',
  '& fieldset': {
    borderRadius: '8px',
  },
  '& label': {
    fontFamily: 'Roboto',
    color: 'transparent',
  },
  '& label.Mui-focused': {
    color: '#ffffff',
    fontFamily: 'Roboto',
    svg: {
      fill: '#ffffff',
    },
  },
  '& .MuiOutlinedInput-root': {
    fontFamily: 'Roboto',
    backgroundColor: '#181B23',
    color: '#fff',
    borderRadius: '8px',
    '& fieldset': {
      borderColor: 'var(--gray900)',
    },
    '&:hover fieldset': {
      borderColor: 'var(--blue500) !important',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'var(--blue500) !important',
    },
    '& .MuiOutlinedInput-input': {
      fontFamily: 'Roboto',
    },
    '& .MuiFormControl-root': {
      width: '100%',
    },
    '& .MuiTextField-root': {
      width: '100%',
    },
  },
});

const InputSearch: React.FC<InputSearchProps> = ({
  uncontrolledOnChange,
  uncontrolledValue,
  defaultValue = '',
  placeholder,
  fieldName,
  control,
  style,
  label,
  rules,
}) => {
  if (control) {
    return (
      <Controller
        control={control}
        name={fieldName}
        rules={rules}
        defaultValue={defaultValue}
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { error },
        }) => (
          <S.Wrapper>
            <CssTextField
              type="search"
              ref={ref}
              placeholder={placeholder}
              onBlur={onBlur}
              name={name}
              label={label}
              onChange={(e) => {
                onChange(e);
                if (uncontrolledOnChange) uncontrolledOnChange(e.target.value);
              }}
              value={uncontrolledValue || value}
              inputProps={{
                spellCheck: 'false',
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    style={{ margin: 0, fontFamily: 'Roboto', marginRight: 6 }}
                  >
                    <FiSearch size={26} fill="#ffffff" />
                  </InputAdornment>
                ),
              }}
            />
          </S.Wrapper>
        )}
      />
    );
  }

  return (
    <CssTextField
      type="search"
      placeholder={placeholder}
      label={label}
      onChange={(e) => {
        if (uncontrolledOnChange) uncontrolledOnChange(e.target.value);
      }}
      value={uncontrolledValue}
      style={style}
      inputProps={{
        spellCheck: 'false',
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment
            position="start"
            style={{ 
              margin: 0, 
              fontFamily: 'Roboto', 
              marginRight: 6, 
              color: '#fff'
            }}
          >
            <FiSearch size={26} color="#fffff" />
          </InputAdornment>
        ),
      }}

    />
  );
};

export default InputSearch;
