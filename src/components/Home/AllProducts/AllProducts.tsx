import React, { useState } from 'react';
import { Box, Grid, MenuItem, Select, Typography } from '@mui/material';
import useGlobalContext from '../../../context/useGlobalContext';
import InfiniteScroll from 'react-infinite-scroll-component';
import ProductList from './ProductList/ProductList';
import Loader from '../../shared/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import './AllProducts.css';

const AllProducts: React.FC<any> = () => {
    const { products, searchValue } = useGlobalContext();
    const [visible, setVisible] = useState<number>(60);
    let [searchParams, setSearchParams] = useSearchParams();
    const allProducts = products?.slice(0, visible);

    const fetchMoreData = () => {
        setTimeout(() => {
            setVisible(previousItems => previousItems + 20);
        }, 1500);
    };

    console.log(searchValue)

    return (
        <Box className="products" sx={{ pt: 5 }}>
            <Box className="d-flex justify-between align-center" sx={{ mb: 5 }}>
                <Typography component="p" className="fw-700" sx={{ fontSize: "24px", color: '#575757' }}>
                    All Products
                </Typography>
                <Box className="d-flex justify-between align-center">
                    <Typography component="span" sx={{ color: '#74777B', fontSize: '16px', whiteSpace: 'nowrap' }}>Sort by:</Typography>
                    <Select
                        value={searchParams.get("filter") || "all_products"}
                        onChange={(event) => {
                            let filter = event.target.value;
                            if (filter) {
                                setSearchParams({ filter });
                            } else {
                                setSearchParams({});
                            }
                        }}
                        className="text-gray filter-input"
                        sx={{ ml: 1 }}
                    >
                        <MenuItem value="all_products">All Products</MenuItem>
                        <MenuItem value="best_value">Best value</MenuItem>
                        <MenuItem value="best_camera">Best camera</MenuItem>
                        <MenuItem value="best_performance">Best Performance</MenuItem>
                    </Select>
                </Box>
            </Box>

            {/* product title */}
            <Grid container spacing={3} className="product" sx={{ pb: 2 }}>
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
            </Grid>

            {/* product details */}
            <InfiniteScroll
                dataLength={allProducts.length}
                next={fetchMoreData}
                style={{ overflow: 'hidden' }}
                hasMore={allProducts.length === visible ? true : false}
                loader={<Loader />}
            >
                {allProducts?.filter((item: any) => {
                    let filter = searchParams.get("filter");
                    // if (!filter) return true;
                    let tags = item.tags;
                    let title = item.phone_title.toLowerCase();
                    // console.log(filter);
                    // console.log(tags)
                    // return searchValue ? (tags.includes(filter) && title.includes(searchValue.toLowerCase())): tags.includes(filter)
                    if(searchValue){
                        if(filter && !filter?.includes("all_products")){
                            return tags.includes(filter) && title.includes(searchValue.toLowerCase())
                        }
                        else{
                            title.includes(searchValue.toLowerCase());
                        }
                    }
                    else if(!searchValue){
                        return tags.includes(filter) || filter?.includes("all_products");
                    }
                    else{
                        return true
                    }
                }).map((item: any) => <ProductList key={item._id} item={item} />)
                }
            </InfiniteScroll>
        </Box>
    );
};

export default AllProducts;