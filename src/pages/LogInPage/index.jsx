import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Stack} from "@mui/material";
import login from "../../assets/login.gif";
import Divider from "@mui/material/Divider";
import {
    Autocomplete,
    Button,
    CardActionArea,
    CardActions,
    Dialog, DialogActions,
    DialogContent, DialogContentText,
    DialogTitle, Slide,
    TextField
} from "@mui/material";
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';



class LogInPage extends Component {
    render() {
        return (
            <>
                <Stack direction='row' spacing={8} style={{
                    width: '97vw',
                    height: '97vh',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>



                    <Stack direction='column' spacing={3} sx={{border:'1px solid green', width:'300px',height:'300px'}}>
                        <h1>Log In</h1>
                        <ValidatorForm
                            // onSubmit={signInOnClick}
                            onError={error => console.log(error)}>
                            <Stack spacing={3} justifyContent="center" alignItems="">

                                <TextValidator
                                    helperText="Please enter your username"
                                    id="demo-helper-text-misaligned"
                                    label="User Name"
                                    validators={['required',]}
                                    // value={this.state.userEmail}
                                    // onChange={(e) => {
                                    //     // console.log(e.target.value)
                                    //     this.setState({userEmail:e.target.value})
                                    //     searchUser(e.target.value)
                                    // }}/>
                                />
                                <TextValidator
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    validators={['required',]}
                                    // value={this.state.userPassword}
                                    // onChange={(e) => {
                                    //     // console.log(e.target.value)
                                    //     this.setState({userPassword:e.target.value})
                                    //
                                    // }}/>
                                />

                            </Stack>
                            <Button variant="contained" type="submit">Log In</Button>
                            <h4>Create new user account? click here</h4>
                            {/*<Button variant="contained" onClick={handleClose}>Sign Up</Button>*/}
                        </ValidatorForm>

                    </Stack>
                    {/*<Divider sx={{height:'375px'}} orientation="vertical" flexItem>*/}
                    {/*</Divider>*/}
                    <img style={{width: '375px', height: '375px'}} src={login} alt=""/>
                </Stack>

            </>

        );
    }
}

export default LogInPage;

