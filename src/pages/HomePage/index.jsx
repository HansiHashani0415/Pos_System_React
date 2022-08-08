import React, { Component } from 'react';
import Box from "@mui/material/Box";
import Tab from '@mui/material/Tab';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Product from "../Product";
import Cart from "../Cart";
import SignUp from "../SignUp";
import LogInPage from "../LogInPage";
import {Avatar, Chip, ListItemIcon, Menu, MenuItem, Stack} from "@mui/material";
import Divider from "@mui/material/Divider";
import {Logout, PersonAdd, Settings} from "@mui/icons-material";

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state={
            value:0,
            userLog:null,
            selectUserName:"",
            selectProductTitle:"",
            date:"",
            user:null,
        }
    }


    setUser = (data) => {
        this.setState({user:data})
    }

    render() {


        const handleChange = (event, newValue) => {
            this.setState({value:newValue})
        };

        const handleClose =()=>{
            this.setState({userLog:null})
        }
        const userMenu =(event)=>{
                this.setState({userLog:event.currentTarget})
        }
        const logout =()=>{
            this.setState({user:null})
        }

        return (
            <>
                {this.state.user === null && <LogInPage getUser={this.setUser.bind(this)}/>}


                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={this.state.value}>
                        <Stack  direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                spacing={2}  sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Box>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="Dashboard" value={0} />
                                    <Tab label="Product" value={1} />
                                    <Tab label="Cart" value={2} />
                                    <Tab label="User" value={3} />
                                </TabList>
                            </Box>
                            {this.state.user !== null && <Chip label={this.state.user} onClick={userMenu}/>}
                            <Menu
                                anchorEl={this.state.userLog}
                                id="account-menu"
                                open={Boolean(this.state.userLog)}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        '&:before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem>
                                    <Avatar /> Profile
                                </MenuItem>
                                <MenuItem>
                                    <Avatar /> My account
                                </MenuItem>
                                <Divider />
                                <MenuItem>
                                    <ListItemIcon>
                                        <PersonAdd fontSize="small" />
                                    </ListItemIcon>
                                    Add another account
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon>
                                        <Settings fontSize="small" />
                                    </ListItemIcon>
                                    Settings
                                </MenuItem>
                                <MenuItem onClick={logout}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </Stack>

                        <TabPanel value={0}>
                            Dashboard
                        </TabPanel>
                        <TabPanel value={1}>
                            Product
                            <Product/>
                        </TabPanel>
                        <TabPanel value={2}>
                            Cart
                            <Cart/>
                        </TabPanel>
                        <TabPanel value={3}>
                            User
                            <SignUp/>
                        </TabPanel>
                    </TabContext>


                </Box>

            </>

        );
    }
}

export default HomePage;