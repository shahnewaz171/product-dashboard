import React from 'react';
import { Typography } from '@mui/material';
import { Main } from '../shared/CustomStyles/CustomStyles';

const Home: React.FC = () => {

    return (
        <Main>
            <Typography component="h1" sx={{ textAlign: "center" }}>This is home page</Typography>
        </Main>
    );
};

export default Home;