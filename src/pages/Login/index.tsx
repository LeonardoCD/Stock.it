import * as S from './styles';
import { Input } from '../../components/Input';
import { Stack } from '@mui/material';
import { ButtonBase } from '../../components/Button';
import { Header } from '../../components/Header';


export function Login() {
  return (
    <>
      <Header />
      <S.LoginContainer>
        <h1>Bem-vindo de volta!</h1>
        <p>Para continuar informe seu e-mail e sua senha</p>
        <Stack spacing={2}>
          <Stack spacing={4}>
            <Input label='E-mail' type='email' />
            <Input label='Senha' type='password' />
          </Stack>
          <Stack>
            <span>
              Ainda não tem uma conta?
              <a href='#'> clique aqui.</a>
            </span>
            <ButtonBase 
              text='Entrar' 
              variant='contained' 
              size='large'
              onClick={() => console.log('clicou')} 
            />
          </Stack>
        </Stack>
      </S.LoginContainer>
    </>
  );
}