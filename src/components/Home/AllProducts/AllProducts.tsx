import React from 'react';
import { Box, Grid, MenuItem, Select, Typography } from '@mui/material';
import useGlobalContext from '../../../context/useGlobalContext';
import './AllProducts.css';
import ProductList from './ProductList/ProductList';

const AllProducts: React.FC<any> = () => {
    const { products } = useGlobalContext();
    console.log(products);

    return (
        <Box className="products" sx={{ pt: 5 }}>
            <Box className="d-flex justify-between align-center" sx={{ mb: 5 }}>
                <Typography component="p" className="fw-700" sx={{ fontSize: "24px", color: '#575757' }}>
                    All Products
                </Typography>
                <Box className="d-flex justify-between align-center">
                    <Typography component="span" sx={{ color: '#74777B', fontSize: '16px', whiteSpace: 'nowrap' }}>Sort by:</Typography>
                    <Select defaultValue="" className="text-gray filter-input" sx={{ ml: 1 }} >
                        <MenuItem value="">All Products</MenuItem>
                        <MenuItem value="best_value">Best value</MenuItem>
                        <MenuItem value="Best camera">Best camera</MenuItem>
                        <MenuItem value="best_performance">Best Performance</MenuItem>
                    </Select>
                </Box>
            </Box>
            <Grid container spacing={3} className="product">
                {/* product title */}
                <Grid item container xs={12} className="product-card">
                    <Grid item xs={5} className="product-card">
                        <Typography component="p" className="product-title">Model</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography component="p" className="product-title">Ram/Rom</Typography>
                    </Grid>
                    <Grid item xs={3.5}>
                        <Typography component="p" className="product-title">Tag</Typography>
                    </Grid>
                    <Grid item xs={1.5} sx={{ textAlign: 'end' }}>
                        <Typography component="p" className="product-title">Price</Typography>
                    </Grid>
                </Grid>

                {/* product details */}
                {
                    products?.map((item: any) => <ProductList key={item._id} item={item} />)
                }
            </Grid>
        </Box>
    );
};

export default AllProducts;