import { Stack } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { CustomSelect } from '../Select';


export function Profile() {
  return (
    <Stack direction="row" spacing={2} sx={{alignItems: 'center'}}>
      <Avatar sx={{ width: '3rem', height: '3rem' }} />
      <Stack direction="column" spacing={1}>
        <p style={{ color: 'var(--gray50)'}}>Leonardo Carvalho</p>
        <span style={{ color: 'var(--gray300)'}}>leonardofelipe931@gmail.com</span>
      </Stack>
      <CustomSelect name='logout' options={[{ value: 1, label: 'Sair'}]}/>
    </Stack>
  );
}