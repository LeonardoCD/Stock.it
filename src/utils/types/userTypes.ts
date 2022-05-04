
export interface UserSingUp {
  nome: string;
  sobrenome: string;
  cpf: string;
  sexo: string; 
  dt_nascimento: string;
  email: string;
  senha: string;
  cep: string;
  cidade: string;
  estado: string;
  logradouro: string;
  bairro: string;
  complemento: string;
}

export type UserSingIn = {
  email: string;
  password: string; 
}

export type User = {
  email: string;
  nome: string;
  imagem: string;
  token: string;
  senha: string;
}