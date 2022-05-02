import * as S from './styles';
import { Input } from '../../components/Input';
import { Stack } from '@mui/material';
import { ButtonBase } from '../../components/Button';
import { Header } from '../../components/Header';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UserSingIn } from '../../utils/types/userTypes';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';


const signInFormSchema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  password: yup.string().required('Senha obrigatória'),
});

export function Login() {

  const singIn: SubmitHandler<UserSingIn> = (data) => {
    console.log(data);
  }

  const { register, handleSubmit, formState } = useForm<UserSingIn>({
    resolver: yupResolver(signInFormSchema),
  });

  const { errors } = formState;

  return (
    <>
      <Header />
      <S.LoginContainer onSubmit={handleSubmit(singIn)}>
        <h1>Bem-vindo de volta!</h1>
        <p>Para continuar informe seu e-mail e sua senha</p>
        <Stack spacing={2}>
          <Stack spacing={4}>
            <Input 
              label='E-mail' 
              type='email' 
              register={{...register('email')}}
              invalid={errors.email}
            />
            <Input 
              label='Senha' 
              type='password' 
              register={{...register('password')}}
              invalid={errors.password}
            />
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
              type='submit'
            />
          </Stack>
        </Stack>
      </S.LoginContainer>
    </>
  );
}