import React, { useState } from 'react';
import { Autocomplete, Box, Button, CircularProgress, Grid, Modal, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { IoCloseSharp } from 'react-icons/io5';
import useGlobalContext from '../../../../context/useGlobalContext';
import { modalStyle } from '../../../shared/CustomStyles/CustomStyles';
import { ProductInput } from '../../../../types/model';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiCheckCircle } from "react-icons/fi";
import './AddProduct.css';
interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const productInputs: ProductInput[] = [
    { id: 1, title: "Product name", name: "phone_title", placeText: "Enter your product name" },
    { id: 2, title: "Brand", name: "brand", placeText: "Enter brand name..." },
    { id: 3, title: "Ram/Rom", name: "ram_rom", placeText: "Zip code" },
    { id: 4, title: "Tags", name: "tags", placeText: "Search and Select" },
    { id: 5, title: "Price", name: "phone_price", placeText: "Enter your product price" },
    { id: 6, title: "Image url", name: "phone_image", placeText: "Enter a image url" }
]
const tagLabel: string[] = ['Best Value', 'Best Camera', 'Best Performance'];


const AddProduct: React.FC<Props> = ({ open, setOpen }) => {
    const { ErrorMessages, products, getProducts } = useGlobalContext();
    const [disable, setDisable] = useState<boolean>(false);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<any>({
        mode: "all",
        reValidateMode: 'onChange'
    });

    const handleClose = () => {
        setOpen(false);
        reset();
        setSelectedTags([]);
    }

    const handleSelectedTags = (value: string[]) => {
        setSelectedTags(value);
    }

    const onSubmit = (data: any) => {
        setDisable(true);
        const tags =  selectedTags?.map(v => v.split(' ').join('_').toLowerCase());
        const newItem = { ...data, customTags: tags, phone_images: [data.phone_image] };
        const payload = [newItem, ...products]; 

        setTimeout(() => {
            setDisable(false);
            getProducts(payload);
            reset();
            setSelectedTags([]);
            setOpen(false);
        }, 1000);
    }

    return (
        <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
            className="add-product"
        >
            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={modalStyle}>
                <Box className="addProduct-header">
                    <Typography component="h2">
                        Add Product
                    </Typography>
                    <Typography component="p" onClick={handleClose}>
                        <IoCloseSharp />
                    </Typography>
                </Box>
                <Box className="addProduct-body">
                    <Grid container columnSpacing={3} >
                        {productInputs?.map(item => {
                            const { id, name, title, placeText } = item;
                            return (
                                name === "tags" ?
                                    <Grid key={id} item xs={12} sx={{ mb: 3 }}>
                                        <Typography component="p" className="searchItem-title" >
                                            {title}:
                                        </Typography>
                                        <Autocomplete
                                            multiple
                                            fullWidth
                                            id="tags-outlined"
                                            options={tagLabel}
                                            getOptionLabel={(option) => option}
                                            value={selectedTags}
                                            // filterSelectedOptions
                                            onChange={(event, value) => handleSelectedTags(value)}
                                            renderInput={(params) => (
                                                <TextField {...params} placeholder={placeText} {...register(`${name}`, { required: selectedTags.length ? '' : 'This field is required' })} sx={{
                                                    '& ::placeholder': {
                                                        fontSize: '12px',
                                                        color: '#000'
                                                    }
                                                }} />
                                            )}
                                        />
                                        <ErrorMessages errors={errors} inputName={`${name}`} />
                                    </Grid>
                                    :
                                    <Grid key={id} item xs={(name.includes('brand') || (name.includes('ram_rom'))) ? 6 : 12} sx={{ mb: 3, pt: name.includes('phone_title') ? 3 : 0 }}>
                                        <Typography component="p" className="searchItem-title" >
                                            {title}:
                                        </Typography>
                                        <TextField fullWidth type={name.includes('phone_price') ? "number" : name.includes('phone_image') ? 'url' : "text"} {...register(`${name}`, { required: 'This field is required' })} 
                                            placeholder={placeText} sx={{
                                                '& ::placeholder': {
                                                    fontSize: '12px',
                                                    color: '#000'
                                                }
                                            }} />
                                        <ErrorMessages errors={errors} inputName={`${name}`} />
                                    </Grid>
                            )
                        })}
                    </Grid>
                    <Box sx={{ py: 4, textAlign: 'end' }}>
                        <Button onClick={handleClose} value="submit_close" variant="contained" className="text-none addPd-btn" sx={{ backgroundColor: "#B7B8BC !important" }}>
                            <AiOutlineCloseCircle style={{ fontSize: '17px' }} />
                            <Typography component="span" sx={{ pl: .8 }}>Cancel</Typography>
                        </Button>
                        <Button disabled={disable} type="submit" value="submit_close" variant="contained" className={"text-none addPd-btn " + (disable ? "disable-color" : "")} sx={{ backgroundColor: "#0095A0 !important", ml: 2 }}>
                            {disable ?
                                <>
                                    <CircularProgress color="inherit" disableShrink className='disable-loader' />
                                    Publishing
                                </>
                                :
                                <>
                                    <FiCheckCircle style={{ fontSize: '17px' }} />
                                    <Typography component="span" sx={{ pl: .8 }}>Publish</Typography>
                                </>
                            }
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
};

export default AddProduct;