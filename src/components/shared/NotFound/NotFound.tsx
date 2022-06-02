import React from 'react';
import { Box, Typography } from '@mui/material';
import { Main } from '../CustomStyles/CustomStyles';
import logoImg from '../../../images/404.png';

const NotFound: React.FC = () => {

    return (
        <Main>
            <Box sx={{ height: "60vh", display: "flex",  justifyContent: "center"  }}>
                <Typography component='img' src={logoImg} sx={{ height: 1 }} />
            </Box>
            <Typography component='h5' sx={{ fontWeight: "bold", textAlign: "center", my: 2 }}>
                Page not found!
            </Typography>
        </Main>
    );
};

export default NotFound;