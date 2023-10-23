import { ButtonBase } from '@mui/material';
import Logo from './Logo';
import { useNavigate } from 'react-router-dom';

const LogoSection = () => {
  const navigate = useNavigate();
  return (
    <ButtonBase onClick={() => navigate("/")} disableRipple>
      <Logo />
    </ButtonBase>
  );
};

export default LogoSection;
