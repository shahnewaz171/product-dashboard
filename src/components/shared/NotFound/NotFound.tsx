import React from 'react';
import { Box, Typography } from '@mui/material';
import { Main } from '../CustomStyles/CustomStyles';
import localImages from '../localImages/localImages';

const NotFound: React.FC = () => {

    return (
        <Main>
            <Box sx={{ height: "60vh", display: "flex",  justifyContent: "center"  }}>
                <Typography component='img' src={localImages.logoImg} sx={{ height: 1 }} />
            </Box>
            <Typography component='h5' sx={{ fontWeight: "bold", textAlign: "center", my: 2 }}>
                Page not found!
            </Typography>
        </Main>
    );
};

export default NotFound;