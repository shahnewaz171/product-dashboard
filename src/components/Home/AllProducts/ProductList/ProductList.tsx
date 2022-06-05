import React from 'react';
import { Box, Card, CardMedia, Chip, TableCell, TableRow, Typography } from '@mui/material';
import { productProps } from '../../../../types/model';

interface Props {
    products?: productProps[];
    item: any;
    key: string;
    handleProduct: any;
}

const ProductList: React.FC<Props> = ({ item, handleProduct }: Props) => {
    const { _id, brand, phone_title, phone_images, ram, storage, phone_price, tags } = item;

    return (
            <TableRow
                key={_id}
                sx={{ '& td, & th': { border: 0 }, '& td': { p: 0 } }}
            >
                <TableCell scope="row" className="product-card">
                    <Card className="d-flex align-center" sx={{ boxShadow: 'none' }}>
                        <CardMedia
                            onClick={() => handleProduct(_id)}
                            component="img"
                            className="cardMedia"
                            image={phone_images[0] || ''}
                            alt="product"
                        />
                        <Box className="d-flex" sx={{ flexDirection: 'column', pl: 2 }}>
                            <Typography component="p" className="fw-600" sx={{ color: '#575757', fontSize: '18px', whiteSpace: 'nowrap' }}>{phone_title || ''} </Typography>
                            <Typography component="p" className="fw-500" sx={{ color: '#74777B', fontSize: '16px', whiteSpace: 'nowrap' }}>{brand || ''}</Typography>
                        </Box>
                    </Card>
                </TableCell>
                <TableCell align="left" sx={{ width: {sm: 'auto', lg: '18%' } }}>
                    <Typography component="p" sx={{ color: '#74777B', fontSize: '16px', whiteSpace: 'nowrap', fontWeight: 500 }}>{(item?.ram_rom) || (`${ram || 0}/${storage || 0}`)}</Typography>
                </TableCell>
                <TableCell align="left">
                    {item.customTags ? [...tags, ...item.customTags]?.map((tag: string, i: number) => {
                        return (
                            <Chip key={i + 1} label={tag?.split('_').join(' ')} className={"tag-item " + (tag.includes('best_value') ? 'bestValue' : tag.includes('best_camera') ? 'bestCamera' : tag.includes('best_performance') ? 'bestPerformance' : '')} />
                        )
                    })
                        :
                        tags?.map((tag: string, i: number) => {
                            return (
                                <Chip key={i + 1} label={tag?.split('_').join(' ')} className={"tag-item " + (tag.includes('best_value') ? 'bestValue' : tag.includes('best_camera') ? 'bestCamera' : tag.includes('best_performance') ? 'bestPerformance' : '')} />
                            )
                        })
                    }
                </TableCell>
                <TableCell align="right">
                    <Typography component="p" sx={{ color: '#74777B', fontSize: '16px', whiteSpace: 'nowrap', fontWeight: 500 }}>TK {phone_price?.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</Typography>
                </TableCell>
            </TableRow>
    );
};

export default ProductList;