import { Stack } from "@mui/material";
import { ButtonBase } from "../../components/Button";
import { Input } from "../../components/Input";
import Grid from '@mui/material/Grid';

import * as S from "./styles";
import { CustomSelect } from "../../components/Select";
import { BasicDatePicker } from "../../components/DatePicker";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserSingUp } from "../../utils/types/userTypes";
import logo from '../../assets/logo.svg';

export function SingUp() {
  localStorage.clear();
  const {
    control,
    register,
    handleSubmit,
  } = useForm<UserSingUp>({});

  const singUp: SubmitHandler<UserSingUp> = (data) => {
    console.log(data);
  }

  return (
    <>
      <S.Header>
        <img src={logo} alt="GoBarber" />
      </S.Header>
      <S.SingUpContainer onSubmit={handleSubmit(singUp)}>
        <Stack spacing={2}>
          <h1>Que bom que quer se juntar a nós!</h1>
          <p>Primeiro precisamos saber um pouco mais sobre você:</p>
        </Stack>

        <Grid container spacing={8}>
          <Grid item xs={6}>
            <Input label='Nome' type='text' register={{ ...register('nome') }} />
          </Grid>
          <Grid item xs={6}>
            <Input label='Sobrenome' type='text' register={{ ...register('sobrenome') }} />
          </Grid>
          <Grid item xs={6}>
            <Input label='CPF' type='text' register={{...register('cpf')}} />
          </Grid>
          <Grid item xs={6}>
            <CustomSelect
              label="Sexo"
              options={[
                { value: 'sexo 1', label: 'Masculino' },
                { value: 'sexo 2', label: 'Feminino' },
                { value: 'sexo 3', label: 'Outro' },
              ]}
              control={control}
              {...register('sexo')}
            />
          </Grid>
          <Grid item xs={6}>
            <BasicDatePicker
              label="Data de Nascimento"
              control={control}
              testid="initial"
              {...register('dt_nascimento')}
            />
          </Grid>
        </Grid>

        <h1>Dados do login:</h1>

        <Grid container spacing={8}>
          <Grid item xs={6}>
            <Input label='E-mail' type='email' register={{...register('email')}}/>
          </Grid>
          <Grid item xs={6}>
            <Input label='Senha' type='password' register={{ ...register('senha') }} />
          </Grid>
        </Grid>

        <h1>Agora diz pra gente de onde você é:</h1>

        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Input label='CEP' type='text' register={{...register('cep')}}/>
          </Grid>
          <Grid item xs={6}>
            <Input label='Estado' type='text' register={{ ...register('estado') }} />
          </Grid>
          <Grid item xs={6}>
            <Input label='Cidade' type='text' register={{ ...register('cidade') }} />
          </Grid>
          <Grid item xs={6}>
            <Input label='Bairro' type='text' register={{ ...register('bairro') }} />
          </Grid>
          <Grid item xs={6}>
            <Input label='Logradouro' type='text' register={{ ...register('logradouro') }} />
          </Grid>
          <Grid item xs={12}>
            <Input label='Complemento' type='text' register={{ ...register('complemento') }} />
          </Grid>
        </Grid>

        <ButtonBase
          text='Enviar'
          variant='contained'
          size='large'
          type='submit'
        />
      </S.SingUpContainer>
    </>
  );
}
