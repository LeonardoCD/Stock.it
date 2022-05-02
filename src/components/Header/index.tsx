import * as S from './styles';
import logo from '../../assets/logo.svg';

export function Header() {
  return (
    <S.Header>
        <img src={logo} alt="GoBarber" />
    </S.Header>
  );
}