
import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, Button, Menu, IconButton, MenuItem, Tooltip, useScrollTrigger, Zoom, Fab } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Search, SearchIconWrapper, StyledInputBase } from '../CustomStyles/CustomStyles';
import useGlobalContext from '../../../context/useGlobalContext';
import AddProduct from '../../Home/AllProducts/AddProduct/AddProduct';
import NavigationIcon from "@mui/icons-material/Navigation";
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
    const { searchValue, setSearchValue } = useGlobalContext();
    const navigate = useNavigate();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);
    const [open, setOpen] = useState<boolean>(false);
    const trigger = useScrollTrigger();

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
            <MenuItem onClick={() => setOpen(true)}>
                Add Product
            </MenuItem>
        </Menu>
    );

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
            "#back-to-top-anchor");

        if (anchor) {
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    const goTohome = () => {
        setSearchValue("");
        console.log('aaaaa')
        navigate('/');
    }

    return (
        <React.Fragment>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar className="navbar">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, fontSize: { sm: '22px', md: '28px' }, fontWeight: 700, cursor: 'pointer' }}
                            className="text-uppercase"
                            onClick={goTohome}
                        >
                            Logo
                        </Typography>
                        <Box sx={{ display: { md: 'flex' } }} className="w-54">
                            <Search>
                                <SearchIconWrapper className='search-icon'>
                                    <SearchIcon sx={{ fontSize: '20px' }} />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search by Title or Brand"
                                    inputProps={{ 'aria-label': 'search' }}
                                    value={searchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    className="search-input"
                                   
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
                                sx={{ p: '0px 0px 0px 12px' }}
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

            {/* Scroll to top */}
            <Toolbar id="back-to-top-anchor" />
            <Zoom in={trigger}>
                <Tooltip
                    onClick={handleClick}
                    role="presentation"
                    sx={{ position: "fixed", bottom: 16, right: 16 }}
                    title="Scroll to Top"
                    arrow
                    placement="left"
                >
                    <Fab color="secondary" size="small" className="scroll-to-top">
                        <NavigationIcon  className="icon" />
                    </Fab>
                </Tooltip>
            </Zoom>
        </React.Fragment>
    );
};

export default Navbar;