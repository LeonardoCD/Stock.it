import * as S from './styles';
import { Input } from '../../components/Input';
import { Stack } from '@mui/material';
import { ButtonBase } from '../../components/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { User, UserSingIn, UserSingUp } from '../../utils/types/userTypes';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { api } from '../../services/api';
import { useSnackbar } from 'notistack';
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import logo from '../../assets/logo.svg';



const signInFormSchema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  password: yup.string().required('Senha obrigatória'),
});

export function Login() {
  localStorage.clear();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const singIn: SubmitHandler<UserSingIn> = async (data) => {
    try {
      const response = await api.get(`/user?search=${data.password}`);
      if(data.password === response.data[0].senha
        && data.email === response.data[0].email) {
        enqueueSnackbar('Login efetuado com sucesso!', {
          variant: 'success',
        });
        
        localStorage.setItem('userName', response.data[0].nome);
        localStorage.setItem('userSurname', response.data[0].sobrenome);
        localStorage.setItem('userEmail', response.data[0].email);
        localStorage.setItem('userToken', response.data[0].token);
        localStorage.setItem('userImage', response.data[0].image);
        navigate('/');
      } else {
        enqueueSnackbar('E-mail ou senha incorretos', {
          variant: 'error',
        });
      }

    } catch {
      enqueueSnackbar('Falha ao fazer login!', {
        variant: 'error',
      });
    }
  }

  const { register, handleSubmit, formState } = useForm<UserSingIn>({
    resolver: yupResolver(signInFormSchema),
  });

  const { errors } = formState;

  return (
    <>
      <S.Header>
        <img src={logo} alt="GoBarber" />
      </S.Header>
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
              <Link to='/singUp'> clique aqui.</Link>
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