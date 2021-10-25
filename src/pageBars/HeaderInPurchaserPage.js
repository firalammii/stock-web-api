import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import React from "react";
import {makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";

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

const HeaderInPurchaserPage = () =>{

    const classes = useStyles();

    let history = useHistory();

    return(
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
                        history.push("/");
                    }}>
                        sign out
                    </Button>{ }

                    <Button color="inherit" onClick={()=> {
                        history.push("/");
                    }}>
                        Home
                    </Button>{ }
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default HeaderInPurchaserPage