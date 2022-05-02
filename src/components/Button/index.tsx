import { styled } from '@mui/material';
import Button, { ButtonProps } from '@mui/material/Button'

interface ButtonBaseProps {
  text: string;
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  // color: theme.palette.getContrastText(purple[500]),
  backgroundColor: '#3182CE',
  padding: '0.75rem 0',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: '#3182CE',
  },
}));

export function ButtonBase({ text, variant, size, onClick }: ButtonBaseProps) {
  return (
  <StyledButton 
    variant={variant} 
    size={size}
    onClick={onClick} 
  >
    {text}
  </StyledButton>
  )
}