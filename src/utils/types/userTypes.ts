
export interface UserSingUp {
  name: string;
  surname: string;
  cpf: string;
  sex: string; 
  birthDate: string;
  email: string;
  password: string;
  cep: string;
  city: string;
  state: string;
  publicPlace: string;
  neighborhood: string;
  complement: string;
}

export type UserSingIn = {
  email: string;
  password: string; 
}