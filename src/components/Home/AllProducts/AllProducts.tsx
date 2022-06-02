import React from 'react';
import { Box, Card, CardMedia, Chip, Grid, MenuItem, Select, Typography } from '@mui/material';
import './AllProducts.css';

const AllProducts: React.FC<any> = () => {
    
    return (
        <Box className="products" sx={{ pt: 5 }}>
            <Box className="d-flex justify-between align-center" sx={{ mb: 5 }}>
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
            <Grid container spacing={3} className="product">
                <Grid item xs={5} className="product-card">
                    <Typography component="p" className="product-title">Model</Typography>
                    <Card sx={{ display: 'flex', boxShadow: 'none' }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image="https://res.cloudinary.com/towfiqu/image/upload/fl_progressive:steep/v1602744409/masterdeals_v_2.0/ayfimq6j3nzylqgpbfls.jpg"
                            alt="product"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column', pl: 2 }}>
                            <Typography component="p" className="fw-600" sx={{ color: '#575757', fontSize: '18px', whiteSpace: 'nowrap' }}>Samsung Galaxy S22 </Typography>
                            <Typography component="p" className="fw-500" sx={{ color: '#74777B', fontSize: '16px', whiteSpace: 'nowrap' }}>Samsung</Typography>
                        </Box>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Typography component="p" className="product-title">Ram/Rom</Typography>
                    <Typography component="p" sx={{ color: '#74777B', fontSize: '16px', whiteSpace: 'nowrap', fontWeight: 500 }}>6/256</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography component="p" className="product-title">Tag</Typography>
                    <Chip label="Best Value" className="tag-item" />
                    <Chip label="Best Camera" className="tag-item" />
                    <Chip label="Best Performance" className="tag-item" />
                </Grid>
                <Grid item xs={2} sx={{ textAlign: 'end' }}>
                    <Typography component="p" className="product-title">Price</Typography>
                    <Typography component="p" sx={{ color: '#74777B', fontSize: '16px', whiteSpace: 'nowrap', fontWeight: 500 }}>TK 120,000</Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AllProducts;