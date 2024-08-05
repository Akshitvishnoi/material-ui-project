import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { makeStyles } from '@mui/styles';
import { Badge, Divider, IconButton, Toolbar, Typography, } from "@mui/material";
import SideDrawer from "./SideDrawer";
const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
    tagline: {
        fontSize: 20,
        textTransform: "uppercase",
        justifyContent: "center",
        fontFamily: "Montserrat",
    },
}));

function Header() {
    const classes = useStyles();

    return (
        <>
            <Toolbar>
                <SideDrawer>
                    <IconButton color="inherit">
                        <MenuIcon />
                    </IconButton>
                </SideDrawer>
                <Typography variant="h6" className={classes.title}>
                    website for Blog
                </Typography>
                <IconButton color="inherit">
                    <Badge badgeContent={7 + "+"} color="info">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton color="inherit">
                    <AccountCircleIcon />
                </IconButton>
            </Toolbar>

            <Divider />

            <Toolbar className={classes.tagline}>
                Express your emotions through words
            </Toolbar>
        </>
    );
}

export default Header;