import React from 'react';
import { Box, Card, CardMedia, Grid, MenuItem, Select, Typography } from '@mui/material';
import SquareIcon from '@mui/icons-material/Square';
import { Main } from '../shared/CustomStyles/CustomStyles';
import SourcesChart from './SourcesChart/SourcesChart';
import ConditionsChart from './ConditionsChart/ConditionsChart';
import './Home.css';

const Home: React.FC<any> = () => {

    return (
        <Main>
            <Grid container spacing={3} sx={{ mb: 5 }}>
                {/* Sources */}
                <Grid item xs={12} md={5}>
                    <Typography component="p" className="fw-600" sx={{ mb: 4, fontSize: "24px", color: '#575757' }}>
                        Sources
                    </Typography>
                    <Grid container columnSpacing={3} sx={{ alignItems: 'center' }}>
                        <Grid item xs={6}>
                            <SourcesChart />
                        </Grid>
                        <Grid item xs={6}>
                            {['Daraz', 'Bikroy', 'Pickaboo'].map((item, i) => {
                                return (
                                    <Box key={i + 1} sx={{ display: "flex", gap: 1, alignItems: "center", mt: "5px" }}>
                                        <SquareIcon sx={{ color: i === 0 ? "#84AF27" : i === 1 ? '#0095A0' : i === 2 ? '#FFC239' : '', height: "15px" }} />
                                        <Typography sx={{ fontSize: "16px", color: "#74777B" }}>
                                            {item}
                                        </Typography>
                                        <Typography className="fw-600" sx={{ fontSize: "21px", color: "#74777B;" }}>
                                            35%
                                        </Typography>
                                    </Box>
                                )
                            })
                            }
                        </Grid>
                    </Grid>
                </Grid>

                {/* Conditions */}
                <Grid item xs={12} md={7}>
                    <Typography component="p" className="fw-600" sx={{ mb: 4, fontSize: "24px", color: '#575757' }}>
                        Conditions
                    </Typography>
                    <Box>
                        <ConditionsChart />
                    </Box>
                </Grid>
            </Grid>

            {/* All Products */}
            <Box className="products" sx={{ pt: 5 }}>
                <Box className="d-flex justify-between align-center" sx={{ mb: 4 }}>
                    <Typography component="p" className="fw-700" sx={{ fontSize: "24px", color: '#575757' }}>
                        All Products
                    </Typography>
                    <Box className="d-flex justify-between align-center">
                        <Typography component="span" sx={{ color: '#74777B', fontSize: '16px', whiteSpace: 'nowrap' }}>Sort by:</Typography>
                        <Select defaultValue="a" className="text-gray filter-input" sx={{ ml: 1 }} >
                            <MenuItem value="a">All Products</MenuItem>
                            <MenuItem value="Best_value">Best value</MenuItem>
                            <MenuItem value="Best_Performance">Best Performance</MenuItem>
                        </Select>
                    </Box>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={5}>
                        <Typography component="p" sx={{ color: '#74777B', fontSize: '16px', whiteSpace: 'nowrap', mb: 3 }}>Model</Typography>
                        <Card sx={{ display: 'flex', boxShadow: 'none' }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 151 }}
                                image="https://res.cloudinary.com/towfiqu/image/upload/fl_progressive:steep/v1602744409/masterdeals_v_2.0/ayfimq6j3nzylqgpbfls.jpg"
                                alt="Live from space album cover"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column', pl: 2 }}>
                                <Typography component="p" className="fw-600" sx={{ color: '#575757', fontSize: '18px', whiteSpace: 'nowrap' }}>Samsung Galaxy S22 </Typography>
                                <Typography component="p" className="fw-500" sx={{ color: '#74777B', fontSize: '16px', whiteSpace: 'nowrap' }}>Samsung</Typography>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography component="p" sx={{ color: '#74777B', fontSize: '16px', whiteSpace: 'nowrap', mb: 3 }}>Ram/Rom</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography component="p" sx={{ color: '#74777B', fontSize: '16px', whiteSpace: 'nowrap', mb: 3 }}>Tag</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography component="p" sx={{ color: '#74777B', fontSize: '16px', whiteSpace: 'nowrap', mb: 3 }}>Price</Typography>
                    </Grid>
                </Grid>
            </Box>
        </Main>
    );
};

export default Home;