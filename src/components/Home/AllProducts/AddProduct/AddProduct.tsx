import React, { useState } from 'react';
import { Autocomplete, Box, Button, CircularProgress, Grid, Modal,  TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { IoCloseSharp } from 'react-icons/io5';
import { modalStyle } from '../../../shared/CustomStyles/CustomStyles';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiCheckCircle } from "react-icons/fi";
import './AddProduct.css';

const productInfo = [
    { id: 1, title: "Product name", name: "name", placeHolder: "Enter your product name" },
    { id: 2, title: "Brand", name: "brand", placeHolder: "Enter brand name..." },
    { id: 3, title: "Ram/Rom", name: "ram_rom", placeHolder: "Zip code" },
    { id: 4, title: "Tags", name: "tags", placeHolder: "Search and Select" },
    { id: 5, title: "Price", name: "price", placeHolder: "Enter your product price" }
]

const optionsInfo = ['Option 1', 'Option 2', 'Option 3']

const AddProduct: React.FC<any> = ({ open, setOpen }) => {
    const [disable, setDisable] = useState(false);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const { register, handleSubmit, reset, formState: { errors }, control } = useForm({
        mode: "all",
        reValidateMode: 'onChange'
    });

    const handleClose = () => {
        setOpen(false);
    }

    const handleSelectedTags = (value: string[]) => {
        setSelectedTags(value);
    }

    const onSubmit = (data: any) => {
        console.log(data);
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
                        Add Promotion
                    </Typography>
                    <Typography component="p" onClick={handleClose}>
                        <IoCloseSharp />
                    </Typography>
                </Box>
                <Box className="addProduct-body">
                    <Box sx={{ mb: 3, mt: 3 }}>
                        <Typography component="p" className="searchItem-title" >
                            Product name:
                        </Typography>
                        <TextField fullWidth placeholder='Enter your product name' {...register("name", { required: "This field is required" })} error={Boolean(errors.name)} helperText={errors.name?.message} />
                    </Box>
                    <Grid container columnSpacing={3} >
                        <Grid item xs={6} sx={{ mb: 3 }}>
                            <Box>
                                <Typography component="p" className="searchItem-title" >
                                    Brand:
                                </Typography>
                                <TextField fullWidth {...register("brand", { required: "This field is required" })} error={Boolean(errors.brand)} helperText={errors.brand?.message} />
                            </Box>
                        </Grid>
                        <Grid item xs={6} sx={{ mb: 3 }}>
                            <Box>
                                <Typography component="p" className="searchItem-title" >
                                    Promotion From:
                                </Typography>
                                <TextField fullWidth {...register("question", { required: "This field is required" })} error={Boolean(errors.question)} helperText={errors.question?.message} />
                            </Box>
                        </Grid>
                    </Grid>
                    <Box sx={{ mb: 3 }}>
                        <Typography component="p" className="searchItem-title" >
                            Tags:
                        </Typography>
                        <Autocomplete
                            multiple
                            fullWidth
                            id="tags-outlined"
                            options={optionsInfo}
                            getOptionLabel={(option) => option}
                            value={selectedTags}
                            // filterSelectedOptions
                            onChange={(event, value) => handleSelectedTags(value)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                />
                            )}
                        />
                    </Box>
                    <Box sx={{ mb: 3 }}>
                        <Typography component="p" className="searchItem-title" >
                            Price:
                        </Typography>
                        <TextField fullWidth {...register("question", { required: "This field is required" })} error={Boolean(errors.question)} helperText={errors.question?.message} />
                    </Box>
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