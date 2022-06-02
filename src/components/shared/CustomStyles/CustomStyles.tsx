import React from "react";
import { Box, Container, SxProps } from "@mui/material";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

interface Props{
    children: React.ReactNode,
    sx?: SxProps
}

export const Main: React.FC<Props> = ({ children, sx }) => {

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                ...sx
            }}
        >
            <Navbar />
            <Container
                component="main"
                fixed
                sx={{
                    flexGrow: 1,
                }}
            >
                {children}
            </Container>
            <Footer />
        </Box>
    )
}