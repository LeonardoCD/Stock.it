import { Box, Stack } from "@mui/material";
import * as S from "./styles";
import { FiList } from "react-icons/fi";
import { Link } from "react-router-dom";

export function Sidebar() {
  return(
    <S.SidebarContainer>
      <Stack spacing={12} alignContent="flex-start" >
        <Box>
          <p>GERAL</p>
          <Stack spacing={4} marginTop="8" alignItems="center" direction="row">
            <FiList size={24} color="var(--blue500)"/>
            <Link 
              to="/" 
              style={{ marginLeft: '1rem', color: 'var(--blue500)', textDecoration: 'none'}}
            >
              Produtos
            </Link>
          </Stack>
        </Box>
      </Stack>
    </S.SidebarContainer>
  );
}