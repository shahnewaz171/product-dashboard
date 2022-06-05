import React, { useState } from 'react';
import { Box, Dialog, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import useGlobalContext from '../../../context/useGlobalContext';
import InfiniteScroll from 'react-infinite-scroll-component';
import ProductList from './ProductList/ProductList';
import CircleLoader from '../../shared/Loader/CircleLoader';
import { useSearchParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import './AllProducts.css';
interface ImageGalleryProp {
    original: string;
    thumbnail: string;
}

const AllProducts: React.FC = () => {
    const { products, searchValue } = useGlobalContext();
    const [visible, setVisible] = useState<number>(20);
    const [searchParams, setSearchParams] = useSearchParams();
    const [openImgGallery, setOpenImgGallery] = useState<boolean>(false);
    const [images, setImages] = useState<ImageGalleryProp[]>([]);
    const allProducts = products?.slice(0, visible);
    let productsInfo = [];

    if (allProducts) {
        productsInfo = allProducts?.filter((item: any) => {
            const filter = searchParams.get("filter");
            const tags = item.tags?.includes(filter) || item.customTags?.includes(filter);
            const title = item.phone_title.toLowerCase()?.includes(searchValue.toLowerCase());
            const brand = item.brand.toLowerCase()?.includes(searchValue.toLowerCase());
            const validAllProduct = filter?.includes("all_products");

            if (searchValue) {
                if (validAllProduct) {
                    return validAllProduct && (title || brand);
                }
                else if (filter && validAllProduct) {
                    return tags && (title || brand) && validAllProduct;
                }
                else if (filter) {
                    return tags && (title || brand);
                }
                else {
                    return (title || brand);
                }
            }
            else if (!searchValue && filter) {
                return filter?.includes("all_products") || tags;
            }
            else if (!filter) {
                return true;
            }
            return true;

        })
    }

    const fetchMoreData = () => {
        setTimeout(() => {
            setVisible(previousItems => previousItems + 20);
        }, 1000);
    };

    const handleProduct = (id: any) => {
        const item = products.find((pd: any) => pd._id === id);
        const images = item?.phone_images?.map((item: any) => {
            const img = {
                original: item,
                thumbnail: item
            }
            return img;
        });
        if (images) {
            setImages(images);
            setOpenImgGallery(true);
        }
    }

    return (
        <Box className="products" sx={{ pt: 5 }}>
            <Box className="d-flex justify-between align-center flex-wrap" sx={{ mb: 5 }}>
                <Typography component="p" className="fw-700" sx={{ fontSize: "24px", color: '#575757' }}>
                    All Products
                </Typography>
                <Box className="d-flex justify-between align-center">
                    <Typography component="span" sx={{ color: '#74777B', fontSize: '16px', whiteSpace: 'nowrap' }}>Sort by:</Typography>
                    <Select
                        value={searchParams.get("filter") || "all_products"}
                        onChange={(event) => {
                            const filter = event.target.value;
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

            {/* product details */}
            <TableContainer component={Paper} elevation={0} className="product">
                <InfiniteScroll
                    dataLength={allProducts.length}
                    next={fetchMoreData}
                    style={{ overflow: 'hidden' }}
                    hasMore={allProducts.length === visible ? true : false}
                    loader={<CircleLoader />}
                >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table" className="product-card">
                        <TableHead>
                            <TableRow  sx={{ '& th': { border: 0 } }}>
                                <TableCell align="left" className="product-title">Model</TableCell>
                                <TableCell align="left" className="product-title">Ram/Rom</TableCell>
                                <TableCell align="left" className="product-title">Tag</TableCell>
                                <TableCell align="right" className="product-title">Price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody sx={{ mt: 4 }}>
                            {productsInfo.length ?
                                productsInfo?.map((item: any) => <ProductList key={item._id} item={item} handleProduct={handleProduct} />)
                                :
                                allProducts.length !== visible &&
                                <TableRow>
                                    <TableCell colSpan={4} sx={{ textAlign: 'center' }}>
                                        <Typography component="h5" className="text-center not-found" sx={{ mt: 4 }}>
                                            No Product
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            }
                        </TableBody>
                    </Table>
                </InfiniteScroll>
            </TableContainer>

            {/* Image Gallery */}
            <Dialog onClose={() => setOpenImgGallery(false)} open={openImgGallery}>
                <ImageGallery items={images} />
            </Dialog>
        </Box>
    );
};

export default (AllProducts);