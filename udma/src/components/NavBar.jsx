import { AppBar, Toolbar, Typography } from '@mui/material';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h3"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          UDMA
        </Typography>
        <Typography
          noWrap
          component="a"
          href="/list"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontWeight: 200,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          All users
        </Typography>
        <Typography
          noWrap
          component="a"
          href="/create"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontWeight: 200,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Create user
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
