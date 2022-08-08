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

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            selectUserName: "",
            selectProductTitle: "",
            date: "",
            cartList:[]
        }
    }

    componentDidMount() {
        this.loadAllCarts();
    }

    loadAllCarts = async () => {
        const resp = await CartService.fetchCarts();
        if (resp.status === 200) {
            console.log(resp.data);
            this.setState({cartList: resp.data})
        } else {
            console.log("errr" + resp);
        }
    }

    render() {
        const handleChangeCartUserName = (event, newValue) => {
            this.setState({selectUsername: newValue})
        };

        const handleChangeCartProductTitle = (event, newValue) => {
            this.setState({selectProductTitle: newValue})
        };

        const selectDate = (newValue) => {
            this.setState({date: newValue})
        };

        return (
            <>
                <ValidatorForm onError={error => console.log(error)}>
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
                                    <MenuItem value="None">None</MenuItem>
                                    <MenuItem value="Ten">Ten</MenuItem>

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
                                    value={this.state.selectProductTitle}
                                    label="Age"
                                    onChange={handleChangeCartProductTitle}
                                >
                                    <MenuItem value="None">None</MenuItem>
                                    <MenuItem value="Ten">Ten</MenuItem>
                                </Select>
                            </FormControl>
                            <TextValidator sx={{width: '100%'}} label="Qty"
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
                                this.state.cartList.map((row) => (
                            <TableRow>
                                <TableCell aliign="left"></TableCell>
                                <TableCell aliign="left">
                                    {/*<Avatar src={baseUrl+row.image1} alt=""/>*/}
                                </TableCell>
                                <TableCell aliign="left"></TableCell>
                                <TableCell aliign="left"></TableCell>

                                <TableCell aliign="left"></TableCell>
                                <TableCell
                                    aliign="left"></TableCell>
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

