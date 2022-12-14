import React, {Component} from 'react';
import {Stack} from "@mui/material";
import login from "../../assets/login.gif";
import {
    Button,
} from "@mui/material";
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


class LogInPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            userName:"",
            userPassword:''
        }
    }
    render() {

        const signInOnClick = () =>{
            this.props.getUser(this.state.userName)
        }

        return (
            <>
                <Stack direction='row' spacing={8} style={{
                    width: '97vw',
                    height: '97vh',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position:'absolute',
                    backgroundColor:'white',
                    zIndex:5
                }}>



                    <Stack direction='column' spacing={3} sx={{ width:'315px',height:'395px',alignItems:'center', justifyContent:'center'}}>

                        <ValidatorForm
                             onSubmit={signInOnClick}
                            onError={error => console.log(error)}>
                            <Stack spacing={3} justifyContent="center" alignItems="">
                                <h1>Log In</h1>
                                <TextValidator
                                    sx={{width:'100%'}}
                                    helperText="Please enter your username"
                                    id="demo-helper-text-misaligned"
                                    label="User Name"
                                    validators={['required',]}
                                    value={this.state.userName}
                                    onChange={(e) => {
                                        // console.log(e.target.value)
                                        this.setState({userName:e.target.value})
                                    }}/>

                                <TextValidator
                                    sx={{width:'100%'}}
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    validators={['required',]}
                                    value={this.state.userPassword}
                                    onChange={(e) => {
                                        // console.log(e.target.value)
                                        this.setState({userPassword:e.target.value})

                                    }}/>

                                <Button variant="contained" type="submit">Log In</Button>
                                <p>Create new user account? <a href="/signUp">click here</a></p>
                            </Stack>

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

