import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import SquareIcon from '@mui/icons-material/Square';
import { Main } from '../shared/CustomStyles/CustomStyles';
import SourcesChart from './SourcesChart/SourcesChart';
import ConditionsChart from './ConditionsChart/ConditionsChart';
import AllProducts from './AllProducts/AllProducts';
import useGlobalContext from '../../context/useGlobalContext';
import { ToastContainer } from 'react-toastify';
import './Home.css';


const Home: React.FC<any> = () => {
    const { percentage } = useGlobalContext();

    return (
        <Main>
            <Grid container spacing={3} sx={{ mb: 5 }}>
                
                {/* Sources */}
                <Grid item xs={12} md={5.2}>
                    <Typography component="p" className="fw-600" sx={{ mb: 4, fontSize: "24px", color: '#575757' }}>
                        Sources
                    </Typography>
                    <Grid container columnSpacing={3} sx={{ alignItems: 'center' }}>
                        <Grid item xs={6}>
                            <SourcesChart />
                        </Grid>
                        <Grid item xs={6}>
                            {percentage && Object.keys(percentage)?.map((item, i) => {
                                
                                return (
                                    <Box key={i + 1} sx={{ display: "flex", gap: 1, alignItems: "center", mt: "5px" }}>
                                        <SquareIcon sx={{ color: i === 0 ? "#84AF27" : i === 1 ? '#0095A0' : i === 2 ? '#FFC239' : '', height: "16px" }} />
                                        <Typography sx={{ fontSize: "15px", color: "#74777B", textTransform: 'capitalize' }}>
                                            {item}:
                                        </Typography>
                                        <Typography className="fw-600" sx={{ fontSize: "20px", color: "#74777B;" }}>
                                            {percentage[item]}%
                                        </Typography>
                                    </Box>
                                )
                                
                            })}
                        </Grid>
                    </Grid>
                </Grid>

                {/* Conditions */}
                <Grid item xs={12} md={6.8}>
                    <Typography component="p" className="fw-600" sx={{ mb: 4, fontSize: "24px", color: '#575757' }}>
                        Conditions
                    </Typography>
                    <ConditionsChart />
                </Grid>
            </Grid>

            {/* All Products */}
            <AllProducts />
            <ToastContainer />
        </Main>
    );
};

export default Home;