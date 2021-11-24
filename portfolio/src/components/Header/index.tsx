import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

interface HeaderProps {
  title?: string;
}

function Header(props: HeaderProps) {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h5">
          { props.title }
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
