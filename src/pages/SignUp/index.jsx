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
import Divider from "@mui/material/Divider";
import IconButton from "@mui/joy/IconButton";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import swal from 'sweetalert';
import ProductService from "../../services/ProductService";
import UserService from "../../services/UserService";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            lastName: '',
            email: '',
            userName: '',
            password: '',
            street: '',
            streetNo: '',
            zipCode: '',
            city: '',
            latValue: '',
            longValue: '',
            mobileNo: '',
            userList:[]
        }
    }

    componentDidMount() {
        this.loadAllUsers();
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

    deleteUser = async (id) => {

        let params = {id: id}
        console.log(id+"user deleted..")
        let resp = await UserService.deleteUser(id);
        console.log(resp);
        if (resp.status === 200) {
            console.log("Deleted..");
            // this.loadAllProducts();
            // this.clearDetails();
        } else {
            console.log(resp);
        }
    }

    render() {
        const submit = () => {
            console.log("submit")
            window.location.assign('/home');
        }

        return (
            <>
                <ValidatorForm onSubmit={submit} onError={error => console.log(error)}>
                    <Stack direction="column" spacing={3}>

                        <Stack direction="row" spacing={5}>
                            <TextValidator sx={{width: '100%'}} label="Full Name"
                                           variant="outlined"
                                           validators={['required',]}
                                           value={this.state.fullName}
                                           onChange={(e) => {
                                               this.setState({fullName: e.target.value})
                                           }}
                            />

                            <TextValidator sx={{width: '100%'}} label="Last Name"
                                           variant="outlined" validators={['required',]}
                                           value={this.state.lastName}
                                           onChange={(e) => {
                                               this.setState({lastName: e.target.value})
                                           }}
                            />

                        </Stack>

                        <Stack direction="row" spacing={5}>
                            <TextValidator sx={{width: '100%'}}
                                           label="E-mail" variant="outlined"
                                           validators={['required',]}
                                           value={this.state.email}
                                           onChange={(e) => {
                                               this.setState({email: e.target.value})
                                           }}
                            />
                            <TextValidator sx={{width: '100%'}} label="User Name"
                                           variant="outlined"
                                           validators={['required',]}
                                           value={this.state.userName}
                                           onChange={(e) => {
                                               this.setState({userName: e.target.value})
                                           }}
                            />
                        </Stack>


                        <Stack direction="row" spacing={5}>
                            <TextValidator sx={{width: '100%'}} label="Password"
                                           variant="outlined"
                                           validators={['required',]}
                                           value={this.state.password}
                                           onChange={(e) => {
                                               this.setState({password: e.target.value})
                                           }}
                            />
                            <TextValidator sx={{width: '100%'}} label="City"
                                           variant="outlined"
                                           validators={['required',]}
                                           value={this.state.city}
                                           onChange={(e) => {
                                               this.setState({city: e.target.value})
                                           }}
                            />
                        </Stack>


                        <Stack direction="row" spacing={5}>
                            <TextValidator sx={{width: '100%'}} label="Street"
                                           variant="outlined"
                                           validators={['required',]}
                                           value={this.state.street}
                                           onChange={(e) => {
                                               this.setState({street: e.target.value})
                                           }}
                            />
                            <TextValidator sx={{width: '100%'}} label="Street No"
                                           variant="outlined"
                                           validators={['required',]}
                                           value={this.state.streetNo}
                                           onChange={(e) => {
                                               this.setState({streetNo: e.target.value})
                                           }}
                            />
                        </Stack>


                        <Stack direction="row" spacing={5}>
                            <TextValidator sx={{width: '100%'}} label="Zip Code"
                                           variant="outlined"
                                           validators={['required',]}
                                           value={this.state.zipCode}
                                           onChange={(e) => {
                                               this.setState({zipCode: e.target.value})
                                           }}
                            />
                            <TextValidator sx={{width: '100%'}} label="Lat Value"
                                           variant="outlined"
                                           validators={['required',]}
                                           value={this.state.latValue}
                                           onChange={(e) => {
                                               this.setState({latValue: e.target.value})
                                           }}
                            />
                        </Stack>


                        <Stack direction="row" spacing={5}>
                            <TextValidator sx={{width: '100%'}} label="Long Value"
                                           variant="outlined"
                                           validators={['required',]}
                                           value={this.state.longValue}
                                           onChange={(e) => {
                                               this.setState({longValue: e.target.value})
                                           }}
                            />
                            <TextValidator sx={{width: '100%'}} label="Mobile No"
                                           variant="outlined"
                                           validators={['required',]}
                                           value={this.state.mobileNo}
                                           onChange={(e) => {
                                               this.setState({mobileNo: e.target.value})
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
                                <TableCell aliign="left">ID</TableCell>
                                <TableCell aliign="left">First Name</TableCell>
                                <TableCell aliign="left">Last Name</TableCell>
                                <TableCell aliign="left">E-mail</TableCell>
                                <TableCell aliign="left">User Name</TableCell>
                                <TableCell aliign="left">Password</TableCell>
                                <TableCell aliign="left">City</TableCell>
                                <TableCell aliign="left">Street</TableCell>
                                <TableCell aliign="left">Street No</TableCell>
                                <TableCell aliign="left">Zip Code</TableCell>
                                <TableCell aliign="left">Lat Value</TableCell>
                                <TableCell aliign="left">Long Value</TableCell>
                                <TableCell aliign="left">Mobile No</TableCell>
                                <TableCell aliign="left">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                this.state.userList.map((row) => (
                            <TableRow>
                                <TableCell aliign="left">{row.id}</TableCell>
                                <TableCell aliign="left">{row.name.firstname}</TableCell>
                                <TableCell aliign="left">
                                    {row.name.lastname}
                                </TableCell>
                                <TableCell aliign="left">{row.email}</TableCell>
                                <TableCell aliign="left">{row.username}</TableCell>
                                <TableCell aliign="left">{row.password}</TableCell>
                                <TableCell aliign="left">{row.address.city}</TableCell>
                                <TableCell aliign="left">{row.address.street}</TableCell>
                                <TableCell aliign="left">{row.address.number}</TableCell>
                                <TableCell aliign="left">{row.address.zipcode}</TableCell>
                                <TableCell aliign="left">{row.address.geolocation.lat}</TableCell>
                                <TableCell aliign="left">{row.address.geolocation.long}</TableCell>
                                <TableCell aliign="left">{row.phone}</TableCell>
                                <TableCell aliign="left">
                                    <IconButton onClick={() => {

                                        this.setState({user: row});
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
                                                    console.log(row.id+"hhhhhhhhhhhhhhhhhh")
                                                    this.deleteUser(row.id);
                                                    swal("Poof! Your imaginary file has been deleted!", {
                                                        icon: "success",
                                                    });
                                                } else {
                                                    swal("Your imaginary file is safe!");
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

export default SignUp;

