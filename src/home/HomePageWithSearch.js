import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {useHistory} from "react-router-dom";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import Button from "@material-ui/core/Button";
import CustomersMaterialListPage from "../tables/usersPages/CustomersMaterialListPage";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
    },

    menuButton: {
        marginRight: theme.spacing(2),
    },

    title: {
        flexGrow: 1,
    },

}));
const HomePageWithSearch = () =>{
    const classes = useStyles();
    const history = useHistory()
    return (
        <>
            <Box sx={{ flexGrow: 0 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            className={classes.menuButton}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <LocalGroceryStoreIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title} component="div" sx={{ flexGrow: 1 }}>
                            Stack Management System
                        </Typography>

                        <Button color="inherit" onClick={()=> {
                            history.push("/authorizedEmployee/signup");
                        }}>
                            sign up
                        </Button>{ }

                        <Button color="inherit" onClick={()=> {
                            history.push("/authorizedEmployee/login");
                        }}>
                            sign in
                        </Button>{ }
                    </Toolbar>
                </AppBar>
            </Box>
            <CustomersMaterialListPage/>
        </>
    );
}

export default HomePageWithSearch