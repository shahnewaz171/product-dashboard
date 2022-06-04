import React from 'react';
import { Box, Card, CardMedia, Chip, Grid, Typography } from '@mui/material';
import { productProps } from '../../../../types/model';

interface Props {
    products?: productProps[];
    item: any;
    key: string;
}

const ProductList: React.FC<Props> = ({ item }: Props) => {
    const { brand, phone_title, phone_images,  ram, storage,  phone_price, tags } = item;
    console.log(item);

    return (
        <Grid container className="product" sx={{ pt: 3, pb: 4.5 }}>
            <Grid item xs={5} className="product-card">
                <Card sx={{ display: 'flex', boxShadow: 'none' }}>
                    <CardMedia
                        component="img"
                        sx={{ width: '99px', height: '76px' }}
                        image={phone_images[0] || ''}
                        alt="product"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column', pl: 2 }}>
                        <Typography component="p" className="fw-600" sx={{ color: '#575757', fontSize: '18px', whiteSpace: 'nowrap' }}>{phone_title || ''} </Typography>
                        <Typography component="p" className="fw-500" sx={{ color: '#74777B', fontSize: '16px', whiteSpace: 'nowrap' }}>{brand || ''}</Typography>
                    </Box>
                </Card>
            </Grid>
            <Grid item xs={2}>
                <Typography component="p" sx={{ color: '#74777B', fontSize: '16px', whiteSpace: 'nowrap', fontWeight: 500 }}>{`${ram || 0}/${storage || 0}`}</Typography>
            </Grid>
            <Grid item xs={3.5}>
                {tags?.map((tag: string, i: number) => {
                    return (
                        <Chip key={i + 1} label={tag?.split('_').join(' ')} className={"tag-item "+ (tag.includes('best_value') ? 'bestValue' : tag.includes('best_camera') ? 'bestCamera' : tag.includes('best_performance') ? 'bestPerformance' : '')}/>
                    )
                })}
            </Grid>
            <Grid item xs={1.5} sx={{ textAlign: 'end' }}>
                <Typography component="p" sx={{ color: '#74777B', fontSize: '16px', whiteSpace: 'nowrap', fontWeight: 500 }}>TK {phone_price?.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</Typography>
            </Grid>
        </Grid>
    );
};

export default ProductList;