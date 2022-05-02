import { InputAdornment, styled } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useRef, useState } from 'react';

import {
  ChangeHandler,
  FieldError,
  RefCallBack,
  UseFormSetValue,
} from 'react-hook-form';
import * as S from './styles';

interface InputProps {
  label: string;
  type?: 'text' | 'password' | 'search' | 'number' | 'email';
  disabled?: boolean;
  labelColor?: string;
  register?: {
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    ref: RefCallBack;
    name: string;
  };
  invalid?: FieldError;
  error?: boolean;
  placeholder?: string;
  spellCheck?: boolean;
  setValue?: UseFormSetValue<any>;
  value?: string | number;
  defaultValue?: string | number;
  style?: React.CSSProperties;
  name?: string;
  max?: number;
  ref?: React.MutableRefObject<any>;
  containerStyle?: React.CSSProperties;
  onChange?: (text: string) => void;
  testid?: string;
  enableEndAdornment?: boolean;
  enableStartAdornment?: string;
  required?: boolean;
}

export const CssTextField = styled(TextField)({
  fontFamily: 'Roboto',
  '& fieldset': {
    borderRadius: '8px',
  },
  '& label': {
    fontFamily: 'Roboto',
    color: '#ffffff',
  },
  '& label.Mui-focused': {
    color: '#ffffff',
    fontFamily: 'Roboto',
  },
  '& .MuiOutlinedInput-root': {
    fontFamily: 'Roboto',
    '& fieldset': {
      borderColor: '#999999',
    },
    '&:hover fieldset': {
      borderColor: '#3182CE !important',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#3182CE!important',
    },
    '& .MuiOutlinedInput-input': {
      fontFamily: 'Roboto',
      backgroundColor: '#181B23',
      borderRadius: '8px',
    },
    '& .MuiFormControl-root': {
      width: '100%',
    },
    '& .MuiTextField-root': {
      width: '100%',
    },
  },
});

export function Input({
  label,
  type,
  disabled,
  register,
  invalid,
  placeholder,
  spellCheck = false,
  name,
  max,
  testid,
  defaultValue,
  error,
  enableStartAdornment,
  required,
}: InputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [value, setValue] = useState<string>(inputRef.current?.value || '');

  return (
    <S.TextInputContainer
      invalid={!!invalid}
      error={error}
      disabled={disabled}
      value={value}
    >
      <CssTextField
        variant='outlined'
        id={name}
        name={name}
        type={type}
        disabled={disabled}
        {...register}
        placeholder={placeholder}
        spellCheck={spellCheck}
        label={label}
        required={required}
        onInvalid={(e) => e.preventDefault()}
        inputProps={{ maxLength: max, 'data-testid': testid || 'text-test-id' }}
        InputProps={{
          startAdornment: enableStartAdornment ? (
            <InputAdornment position="start" style={{ margin: 0 }}>
              {enableStartAdornment}
            </InputAdornment>
          ) : null,
          inputProps: { 'data-testid': testid || 'text-test-id' },
        }}
        style={{ fontFamily: 'Poppins' }}
        inputRef={inputRef}
        onChange={(e) => setValue(e.target.value)}
        defaultValue={defaultValue}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderRadius: `8px`,
              borderColor: error ? '#E03222' : '#999999',
            },
          },
        }}
      />
      { !!invalid && <span style={{color: '#E03222', marginTop: '0.2rem' }}>{invalid.message}</span>}
    </S.TextInputContainer>
  )
}