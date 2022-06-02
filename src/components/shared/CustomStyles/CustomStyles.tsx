import React from "react";
import { Box, Container } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Footer from "../Footer/Footer";
import { ReactNode } from "../../../types/model";

export const Main: React.FC<ReactNode> = ({ children, sx }) => {

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    paddingTop: '100px',
                    paddingBottom: '20px',
                    paddingLeft: '80px',
                    paddingRight: "80px",
                    minHeight: '100vh',
                    position: 'relative',
                    ...sx
                }}
            >
                <Container
                    component="main"
                    fixed
                    sx={{
                        flexGrow: 1,
                        px: '0px !important'
                    }}
                >
                    {children}
                </Container>
            </Box>
            <Footer />
        </React.Fragment>
    )
}

export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: '1px solid #fff',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(1.5),
        width: 'auto',
    }
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 0, 1, 2),
        paddingRight: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '30ch',
        },
        fontSize: '14px',
        color: '#fff'
    }
}));

// Add product styles
export const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    minHeight: "90vh",
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24
  };