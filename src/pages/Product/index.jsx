import React, {Component} from 'react';
import {
    Avatar,
    Button, FormControl, InputLabel, MenuItem, Select,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/joy/IconButton";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import swal from 'sweetalert';
import ProductService from "../../services/ProductService";


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            selectUserName: "",
            selectProductTitle: "",
            date: "",
            productList: [],
            categoryList: []
        }
    }


    componentDidMount() {
        this.loadAllProducts();
        this.loadAllCategories();
    }

    loadAllProducts = async () => {
        const resp = await ProductService.fetchProducts();
        if (resp.status === 200) {
            console.log(resp.data);
            this.setState({productList: resp.data})
        } else {
            console.log("errr" + resp);
        }
    }

    loadAllCategories = async () => {
        const resp = await ProductService.fetchProductCategories();
        if (resp.status === 200) {
            console.log(resp.data);
            this.setState({categoryList: resp.data})
        } else {
            console.log("errr" + resp);
        }
    }

    // getAllProducts = async () => {
    //     let resp = await ProductService.fetchProducts();
    //     if (resp.status === 200) {
    //         let list = resp.data;
    //         console.log(list)
    //         this.setState({productList: list})
    //         console.log(this.state.productList);
    //     } else {
    //         console.log(resp);
    //     }
    // }


    render() {

        const handleChangeCategory = (event, newValue) => {
            this.setState({selectCategory: newValue})
        };

        return (
            <>
                <ValidatorForm onError={error => console.log(error)}>
                    <Stack direction="column" spacing={3}>

                        <Stack direction="row" spacing={5}>
                            <TextValidator sx={{width: '350px'}} label="Title"
                                           variant="outlined"
                                           validators={['required',]}

                                // value={this.state.customer.customerName}
                                // onChange={(e) => {
                                //     console.log()
                                //     let tempCustomer = this.state.customer;
                                //     tempCustomer.customerName = e.target.value;
                                //     this.setState({tempCustomer})
                                // }}
                            />

                            <TextValidator sx={{width: '100%'}} label="Price"
                                           variant="outlined" validators={['required',]}
                                // value={this.state.customer.customerNIC}
                                // onChange={(e) => {
                                //     let tempCustomer = this.state.customer;
                                //     tempCustomer.customerNIC = e.target.value;
                                //     this.setState({tempCustomer})
                                // }}
                            />
                            <Button style={{height: '55px'}} variant="contained" component="label">
                                Upload
                                <PhotoCameraIcon/>
                                <input hidden accept="image/*" multiple type="file"
                                    // onChange={this.uploadImage}
                                />
                            </Button>
                            <div style={{border: '1px solid red', width: '8%', height: '55px', borderRadius: '54px'}}>
                                {/*{this.state.image1 &&*/}
                                {/*<img height="70px" src={URL.createObjectURL(this.state.image1)} alt=""/>}*/}

                            </div>

                        </Stack>

                        <Stack direction="row" spacing={5}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={this.state.selectCategory}
                                    label="Category"
                                    onChange={handleChangeCategory}
                                >
                                    {/*<MenuItem value="None">None</MenuItem>*/}
                                    {this.state.categoryList.map((category) => (
                                        <MenuItem value={category}>{category}</MenuItem>
                                    ))
                                    }

                                </Select>
                            </FormControl>
                            <TextValidator sx={{width: '100%'}} label="Description"
                                           variant="outlined"
                                           validators={['required',]}
                                // value={this.state.customer.customerAddress}
                                // onChange={(e) => {
                                //     let tempCustomer = this.state.customer;
                                //     tempCustomer.customerAddress = e.target.value;
                                //     this.setState({tempCustomer})
                                // }}
                            />
                        </Stack>


                        <Stack width="100%" spacing={3} direction="row">

                            <Button style={{backgroundColor: '#f1c40f', width: 'calc(1/5)'}} variant="contained"
                                    size="large">
                                CLEAR
                            </Button>
                            <Button type="submit" style={{width: 'calc(2/5)'}} variant="contained" size="large">
                                SAVE
                            </Button>

                        </Stack>
                    </Stack>
                </ValidatorForm>
                <Divider></Divider>
                <TableContainer>
                    <Table style={{backgroundColor: '#ecf0f1'}}>
                        <TableHead>
                            <TableRow>
                                <TableCell aliign="left">Product ID</TableCell>
                                <TableCell aliign="left">Title</TableCell>
                                <TableCell aliign="left">Image</TableCell>
                                <TableCell aliign="left">Price</TableCell>
                                <TableCell aliign="left">Category</TableCell>
                                <TableCell aliign="left">Description</TableCell>
                                <TableCell aliign="left">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                this.state.productList.map((row) => (
                                    <TableRow>
                                        <TableCell aliign="left">{row.id}</TableCell>
                                        <TableCell aliign="left">
                                            {row.title}
                                        </TableCell>
                                        <TableCell aliign="left">
                                            <Avatar src={row.image} alt=""/>
                                        </TableCell>
                                        <TableCell aliign="left">{row.price}</TableCell>

                                        <TableCell aliign="left">{row.category}</TableCell>
                                        <TableCell
                                            aliign="left">{row.description}</TableCell>
                                        <TableCell aliign="left">
                                            <IconButton onClick={() => {

                                            }

                                            }>
                                                <BorderColorIcon style={{color: '#2ecc71'}}/>
                                            </IconButton>

                                            <IconButton onClick={() => {
                                                swal({
                                                    title: "Are you sure?",
                                                    text: "Once deleted, you will not be able to recover this imaginary file!",
                                                    icon: "warning",
                                                    buttons: true,
                                                    dangerMode: true,
                                                })
                                                    .then((willDelete) => {

                                                        if (willDelete) {
                                                            // this.deleteVehicle(row.vehicleID);
                                                            // swal("Poof! Your imaginary file has been deleted!", {
                                                            //     icon: "success",
                                                            // });
                                                        } else {
                                                            // swal("Your imaginary file is safe!");
                                                        }
                                                    });
                                            }

                                            }
                                            >
                                                <DeleteIcon style={{color: '#e74c3c'}}/>
                                            </IconButton>

                                        </TableCell>
                                    </TableRow>

                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </>

        );
    }
}

export default Product;

