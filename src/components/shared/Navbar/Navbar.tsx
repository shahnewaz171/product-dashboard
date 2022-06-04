
import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, Button, Menu, IconButton, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Search, SearchIconWrapper, StyledInputBase } from '../CustomStyles/CustomStyles';
import useGlobalContext from '../../../context/useGlobalContext';
import AddProduct from '../../Home/AllProducts/AddProduct/AddProduct';
import './Navbar.css';

const Navbar: React.FC = () => {
    const { setSearchValue } = useGlobalContext();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);
    const [open, setOpen] = useState<boolean>(false);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <p>Add Product</p>
            </MenuItem>
        </Menu>
    );

    return (
        <React.Fragment>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar className="navbar">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, fontSize: '28px', fontWeight: 700 }}
                            className="text-uppercase"
                        >
                            Logo
                        </Typography>
                        <Box sx={{ display: { md: 'flex' } }}>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search by Title or Brand"
                                    inputProps={{ 'aria-label': 'search' }}
                                    defaultValue=""
                                    onChange={(e) => setSearchValue(e.target.value)}
                                />
                            </Search>
                            <Button onClick={() => setOpen(true)} sx={{ display: { xs: 'none', md: 'block' } }} variant="contained" className='text-none addProduct-btn'>
                                Add Product
                            </Button>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
            </Box>
            {
                <AddProduct open={open} setOpen={setOpen} />
            }
        </React.Fragment>
    );
};

export default Navbar;