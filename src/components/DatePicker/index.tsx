import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Control, Controller } from 'react-hook-form';
import ptBR from 'date-fns/locale/pt-BR';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import * as S from './styles';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material';

interface BasicDatePickerProps {
  label: string;
  name: string;
  control: Control<any, object>;
  rules?: {
    required?: boolean | string;
    minLength?: number;
  };
  testid?: string;
}

const invalidStyle = {
  '& .MuiOutlinedInput-root': {
    fontFamily: 'Poppins',
    '& fieldset': {
      borderColor: '#E8453E',
      borderWidth: '2px',
    },
    '&:hover fieldset': {
      borderColor: '#E8453E',
      borderWidth: '2px',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#E8453E',
      borderWidth: '2px',
    },
    '& .MuiOutlinedInput-input': {
      fontFamily: 'Poppins',
    },
    '& .MuiFormControl-root': {
      width: '100%',
    },
    '& .MuiTextField-root': {
      width: '100%',
    },
  },
};

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
  '& MuiInputBase-root': {
    color: '#ffffff',
  },
  '& .MuiOutlinedInput-root': {
    fontFamily: 'Roboto',
    '& fieldset': {
      borderColor: '#181B23',
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
    },
    '& .MuiFormControl-root': {
      width: '100%',
    },
    '& .MuiTextField-root': {
      width: '100%',
    },
  },
});

export function BasicDatePicker({
  label,
  name,
  control,
  rules,
  testid,
}: BasicDatePickerProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
      <Controller
        name={name}
        control={control}
        defaultValue={null}
        rules={rules}
        render={({
          field: { onChange, value },
          fieldState: { invalid, error },
        }) => {
          return (
            <DatePicker
              label={label}
              value={value}
              onChange={onChange}
              InputProps={{
                placeholder: 'dd/mm/aaaa',
              }}
              renderInput={(params: any) => (
                <S.Column>
                  <CssTextField
                    sx={invalid ? invalidStyle : {}}
                    inputProps={{
                      placeholder: 'dd/mm/aaaa',
                      'data-testid': testid || 'text-test-id',
                    }}
                    {...params}
                  />
                  <S.InvalidText>{error?.message}</S.InvalidText>
                </S.Column>
              )}
            />
          );
        }}
      />
    </LocalizationProvider>
  );
};

