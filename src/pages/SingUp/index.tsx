import { Stack } from "@mui/material";
import { ButtonBase } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import Grid from '@mui/material/Grid';

import * as S from "./styles";
import { CustomSelect } from "../../components/Select";
import { BasicDatePicker } from "../../components/DatePicker";
import { useForm } from "react-hook-form";


export function SingUp() {
  const {
    control,
  } = useForm({ defaultValues: { type: 'AMOUNT' } });

  return (
    <>
      <Header />
      <S.SingUpContainer>
        <Stack spacing={2}>
          <h1>Que bom que quer se juntar a nós!</h1>
          <p>Primeiro precisamos saber um pouco mais sobre você:</p>
        </Stack>

        <Grid container spacing={8}>
          <Grid item xs={6}>
            <Input label='Nome' type='text' />
          </Grid>
          <Grid item xs={6}>
            <Input label='Sobrenome' type='text' />
          </Grid>
          <Grid item xs={6}>
            <Input label='CPF' type='text' />
          </Grid>
          <Grid item xs={6}>
            <CustomSelect
              name="sexo"
              label="Sexo"
              options={[
                { value: 1, label: 'Masculino' },
                { value: 2, label: 'Feminino' },
                { value: 3, label: 'Outro' },
              ]}
            />
          </Grid>
          <Grid item xs={6}>
            <BasicDatePicker
              name="initial"
              label="Data de Nascimento"
              control={control}
              testid="initial"
            />
          </Grid>
        </Grid>

        <h1>Dados do login:</h1>

        <Grid container spacing={8}>
          <Grid item xs={6}>
            <Input label='E-mail' type='email' />
          </Grid>
          <Grid item xs={6}>
            <Input label='Senha' type='password' />
          </Grid>
        </Grid>

        <h1>Agora diz pra gente de onde você é:</h1>

        <Grid container spacing={8}>
          <Grid item xs={6}>
            <Input label='CEP' type='text' />
          </Grid>
          <Grid item xs={6}>
            <Input label='Cidade' type='text' />
          </Grid>
          <Grid item xs={6}>
            <Input label='Estado' type='text' />
          </Grid>
          <Grid item xs={6}>
            <Input label='Logradouro' type='text' />
          </Grid>
          <Grid item xs={6}>
            <Input label='Bairro' type='text' />
          </Grid>
          <Grid item xs={6}>
            <Input label='Complemento' type='text' />
          </Grid>
        </Grid>

        <ButtonBase
          text='Enviar'
          variant='contained'
          size='large'
          onClick={() => console.log('clicou')}
        />
      </S.SingUpContainer>
    </>
  );
}
