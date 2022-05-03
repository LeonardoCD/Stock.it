import { Stack } from "@mui/material";
import { ButtonBase } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import Grid from '@mui/material/Grid';

import * as S from "./styles";
import { CustomSelect } from "../../components/Select";
import { BasicDatePicker } from "../../components/DatePicker";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserSingUp } from "../../utils/types/userTypes";


export function SingUp() {
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
      <S.SingUpContainer onSubmit={handleSubmit(singUp)}>
        <Stack spacing={2}>
          <h1>Que bom que quer se juntar a nós!</h1>
          <p>Primeiro precisamos saber um pouco mais sobre você:</p>
        </Stack>

        <Grid container spacing={8}>
          <Grid item xs={6}>
            <Input label='Nome' type='text' register={{...register('name')}}/>
          </Grid>
          <Grid item xs={6}>
            <Input label='Sobrenome' type='text' register={{...register('surname')}}/>
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
              {...register('sex')}
            />
          </Grid>
          <Grid item xs={6}>
            <BasicDatePicker
              label="Data de Nascimento"
              control={control}
              testid="initial"
              {...register('birthDate')}
            />
          </Grid>
        </Grid>

        <h1>Dados do login:</h1>

        <Grid container spacing={8}>
          <Grid item xs={6}>
            <Input label='E-mail' type='email' register={{...register('email')}}/>
          </Grid>
          <Grid item xs={6}>
            <Input label='Senha' type='password' register={{...register('password')}}/>
          </Grid>
        </Grid>

        <h1>Agora diz pra gente de onde você é:</h1>

        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Input label='CEP' type='text' register={{...register('cep')}}/>
          </Grid>
          <Grid item xs={6}>
            <Input label='Estado' type='text' register={{...register('state')}}/>
          </Grid>
          <Grid item xs={6}>
            <Input label='Cidade' type='text' register={{...register('city')}}/>
          </Grid>
          <Grid item xs={6}>
            <Input label='Bairro' type='text' register={{...register('neighborhood')}}/>
          </Grid>
          <Grid item xs={6}>
            <Input label='Logradouro' type='text' register={{...register('publicPlace')}}/>
          </Grid>
          <Grid item xs={12}>
            <Input label='Complemento' type='text' register={{...register('complement')}}/>
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
