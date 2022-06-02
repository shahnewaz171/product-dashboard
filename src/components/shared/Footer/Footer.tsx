import React from 'react';
import { Box, Typography } from '@mui/material';
import moment from 'moment';

const Footer: React.FC = () => {

    return (
        <Box sx={{ bgcolor: '#e5e5e5' , mt: 5}} >
            <Typography component="p" sx={{ textAlign: "center" , py: 2, fontSize: '12px' }} >
                &copy; {moment().format('YYYY')} Muhammad Shahnewaz. All right reserved.
            </Typography>
        </Box>
    );
};

export default Footer;