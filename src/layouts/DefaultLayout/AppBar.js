import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const pages = ['Mua bán', 'Cho thuê', 'Sang nhượng', 'Tin tức'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: { md: 'flex', xs: 'none' },
            }}
          >
            <img
              src="https://res.cloudinary.com/dominic13/image/upload/v1663604639/RealEstate/logo.png"
              alt="Logo"
              height={50}
              style={{ marginRight: 8 }}
            />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon color="primary" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
            }}
          >
            <img
              src="https://res.cloudinary.com/dominic13/image/upload/v1663604639/RealEstate/logo.png"
              alt="Logo"
              height={50}
            />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 1,
                  display: 'block',
                }}
                variant="text"
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1 }} textAlign="right">
            <Typography variant="body2" color="GrayText">
              Thông tin liên hệ
            </Typography>
            <Typography fontWeight="500" variant="body1" color="CaptionText">
              0972.879.799 (Anh Huy)
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
