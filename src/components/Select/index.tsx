import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { FormControl, InputLabel } from '@mui/material';
import {
  Control,
  Controller,
  FieldError,
  RegisterOptions,
} from 'react-hook-form';
import * as S from './styles';

export interface SelectProps {
  label?: string;
  name: string;
  options: { value: string | number; label: string }[];
  control?: Control<any, object>;
  defaultValue?: string | number;
  unControlledValue?: string | number;
  unControlledonChange?: (e: string | number) => void;
  rules?: Omit<
    RegisterOptions,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  invalid?: FieldError;
}

const selectStyles = {
  borderRadius: '8px',
  textAlign: 'left',
  width: '100%',
  background: '#181B23',
  '& fieldset': {
    borderColor: '#181B23',
  },
  '&:hover fieldset': {
    borderColor: '#3182CE !important',
  },
  '&.Mui-focused fieldset': {
    borderColor: '#3182CE !important',
    color: '#fff',
  },
  '&.Mui-focused .MuiSvgIcon-root': {
    color: '#fff',
  },
  '&.MuiInputBase-root .MuiSvgIcon-root': {
    color: '#fff',
  },
  '&.Mui-focused': {
    color: '#fff',
    fontFamily: 'Roboto',
  },
  '&.MuiInputBase-root': {
    fontFamily: 'Roboto',
    color: '#fff',
  },
};

export function CustomSelect({
  options,
  label,
  control,
  name,
  defaultValue,
  unControlledValue,
  rules,
  unControlledonChange,
  invalid,
}: SelectProps) {
  const labelId = `${name}-label`;
  const [isNotEmpty, setIsNotEmpty] = useState(false);

  if (control) {
    return (
      <>
        <S.Wrapper style={{ width: '100%' }}>
          <FormControl fullWidth>
            <InputLabel id={labelId}>
              {label}
            </InputLabel>
            <Controller
              name={name}
              control={control}
              defaultValue={defaultValue}
              rules={rules}
              render={({ field: { onChange, value } }) => (
                <Select
                  labelId={labelId}
                  label={label}
                  variant="outlined"
                  value={value}
                  onInvalid={(e) => e.preventDefault()}
                  onChange={onChange}
                  style={{ marginTop: 0 }}
                  sx={selectStyles}
                >
                  {options.map((option) => {
                    return (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    );
                  })}
                </Select>
              )}
            />
          </FormControl>
          {invalid && (
            <S.InvalidText style={{ color: '#e8453e' }}>
              {invalid.message}
            </S.InvalidText>
          )}
        </S.Wrapper>
      </>
    );
  }

  return (
    <S.Wrapper isNotEmpty={isNotEmpty}>
      <FormControl fullWidth>
        <InputLabel id={labelId}>
          {label}
        </InputLabel>
        <Select
          labelId={labelId}
          label={label}
          variant="outlined"
          value={unControlledValue}
          defaultValue={defaultValue}
          onChange={(e) => {
            if (unControlledonChange) unControlledonChange(e.target.value);
            if (e.target.value) {
              setIsNotEmpty(true);
            }
          }}
          style={{ marginTop: 0 }}
          sx={selectStyles}
        >
          {options.map((option) => {
            return (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </S.Wrapper>
  );
};

