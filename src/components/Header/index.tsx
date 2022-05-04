import * as S from './styles';
import logo from '../../assets/logo.svg';
import { Profile } from '../Profile';

export function Header() {
  const userName = localStorage.getItem('userName');
  const userSurname = localStorage.getItem('userSurname');
  const userEmail = localStorage.getItem('userEmail');
  const userImage = localStorage.getItem('userImage');
  return (
    <S.Header>
      <img src={logo} alt="logo" />
      {userName
        && userEmail
        && userImage
        && userSurname &&
        <>
          <Profile
            name={userName}
            surname={userSurname}
            email={userEmail}
            image={userImage}
          />
        </>
      }
    </S.Header>
  );
}