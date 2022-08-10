import React, { Component } from 'react';
import {
    Button,
    FormControl, InputLabel, MenuItem, Select,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, TextField
} from "@mui/material";

import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/joy/IconButton";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import swal from 'sweetalert';
import {DesktopDatePicker} from "@mui/x-date-pickers";
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import ProductService from "../../services/ProductService";
import CartService from "../../services/CartService";
import UserService from "../../services/UserService";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            selectUserName: "",
            selectProduct: "",
            date: "",
qty:'',
            productList:[],
            userList:[],
            cartList:[],
        }
    }



    componentDidMount() {
        this.loadAllProducts();
        this.loadAllUsers();

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

    loadAllUsers = async () => {
        const resp = await UserService.fetchUsers();
        if (resp.status === 200) {
            console.log(resp.data);
            this.setState({userList: resp.data})
        } else {
            console.log("errr" + resp);
        }
    }

    // loadAllCarts = async () => {
    //     const resp = await CartService.fetchCarts();
    //     if (resp.status === 200) {
    //         console.log(resp.data);
    //         this.setState({cartList: resp.data})
    //     } else {
    //         console.log("errr" + resp);
    //     }
    // }

    render() {
        const handleChangeCartUserName = (event, newValue) => {
            this.setState({selectUsername: newValue})
        };

        const handleChangeCartProductTitle = ( e) => {
            this.setState({selectProduct: e.target.value})
        };

        const selectDate = (newValue) => {
            this.setState({date: newValue})
        };
        const addToCart = () => {
            console.log(this.state.selectProduct)
            let cartList = this.state.cartList;
            cartList.push({
                product:this.state.selectProduct,
                qty:this.state.qty
            });
            this.setState({cartList: cartList})
        };

        return (
            <>
                <ValidatorForm onSubmit={addToCart} onError={error => console.log(error)}>
                    <Stack direction="column" spacing={3}>

                        <Stack direction="row" spacing={5}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">User Name</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={this.state.selectUsername}
                                    label="Age"
                                    onChange={handleChangeCartUserName}
                                >
                                    {this.state.userList.map((user) => (
                                        <MenuItem value={user.username}>{user.username}</MenuItem>
                                    ))
                                    }
                                </Select>
                            </FormControl>

                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DesktopDatePicker
                                    label="Date"
                                    inputFormat="MM/dd/yyyy"
                                    value={this.state.date}
                                    onChange={selectDate}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>

                        </Stack>

                        <Stack direction="row" spacing={5}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Product Title</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={this.state.selectProduct.title}
                                    label="Age"
                                    onChange={handleChangeCartProductTitle}
                                >
                                    {this.state.productList.map((product) => (
                                        <MenuItem value={product}>{product.title}</MenuItem>
                                    ))
                                    }
                                </Select>
                            </FormControl>
                            <TextValidator sx={{width: '100%'}} label="Qty"
                                           variant="outlined"
                                           validators={['required',]}
                                value={this.state.qty}
                                onChange={(e) => {

                                    this.setState({qty:e.target.value})
                                }}
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
                                <TableCell aliign="left">Category</TableCell>
                                <TableCell aliign="left">Title</TableCell>
                                <TableCell aliign="left">Price</TableCell>
                                <TableCell aliign="left">Qty</TableCell>
                                <TableCell aliign="left">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                this.state.cartList.map((row) => (
                            <TableRow>
                                <TableCell aliign="left">{row.product.id}</TableCell>
                                <TableCell aliign="left">{row.product.category}</TableCell>
                                <TableCell aliign="left">{row.product.title}</TableCell>
                                <TableCell aliign="left">{row.product.price}</TableCell>
                                <TableCell aliign="left">{row.qty}</TableCell>
                                <TableCell aliign="left">
                                    <IconButton onClick={() => {

                                        // console.log(baseUrl+row.image1);
                                        // this.setState({btnVehicle: "Update"});
                                        // this.setState({vehicle: row});
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

export default Cart;

