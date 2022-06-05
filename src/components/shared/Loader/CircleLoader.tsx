import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const CircleLoader: React.FC = () => {

    return (
        <Box className="d-flex justify-center">
            <CircularProgress sx={{ height: '40px !important', width: '40px !important' }} />
        </Box>
    );
};

export default CircleLoader;