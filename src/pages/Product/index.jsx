import React, {Component} from 'react';
import {
    Button,
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

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            selectUserName: "",
            selectProductTitle: "",
            date: ""
        }
    }

    render() {


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
                            <TextValidator sx={{width: '100%'}}
                                           label="Category" variant="outlined"
                                           validators={['required',]}
                                // value={this.state.customer.customerDrivingLicenseNo}
                                // onChange={(e) => {
                                //     let tempCustomer = this.state.customer;
                                //     tempCustomer.customerDrivingLicenseNo = e.target.value;
                                //     this.setState({tempCustomer})
                                // }}
                            />
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
                            {/*{*/}
                            {/*    this.state.vehicleList.map((row) => (*/}
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

                            {/*    ))*/}
                            {/*}*/}
                        </TableBody>
                    </Table>
                </TableContainer>
            </>

        );
    }
}

export default Product;

