import { Button, Stack } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { FiLogOut } from 'react-icons/fi';
import {useNavigate} from "react-router-dom";

interface ProfileProps {
  email: string;
  name: string;
  surname: string;
  image: string;
}

export function Profile({ email, name, surname, image }: ProfileProps) {
  const navigate = useNavigate();

  return (
    <Stack direction="row" spacing={2} sx={{alignItems: 'center'}}>
      <Avatar src={image} sx={{ width: '3rem', height: '3rem' }} />
      <Stack direction="column" spacing={1}>
        <p style={{ color: 'var(--gray50)' }}>{name} {surname}</p>
        <span style={{ color: 'var(--gray300)' }}>{email}</span>
      </Stack>
      <Button variant="text" onClick={() => {
        localStorage.clear();
        navigate('/login');
      }}>
        <FiLogOut color='var(--gray400)' size={24} />
      </Button>
    </Stack>
  );
}