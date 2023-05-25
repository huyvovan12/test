import { Grid } from '@mui/material';
import { StyledLoginContainer } from './styled';

const LoginContainer = () => {
  return (
    <StyledLoginContainer>
      <Grid xs={12} className='flex'>
        <img src='src/assets/company_logo.png' alt='logo' />
        <div className='text-pink-500'>hihi</div>
      </Grid>
    </StyledLoginContainer>
  );
};

export default LoginContainer;
