import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {

    return (
        <Box>
            <Typography component="div" sx={{  textAlign: "center"  }} >
                This is a demo footer @2022
            </Typography>
        </Box>
    );
};

export default Footer;