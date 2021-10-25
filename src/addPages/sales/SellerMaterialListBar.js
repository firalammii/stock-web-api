import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import React from "react";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
    title: {
        flexGrow: 1,
    },
}));

const SellerMaterialListBar = () =>{
    const classes = useStyles();

    return(
        <Box sx={{ flexGrow: 0 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} component="div" sx={{ flexGrow: 1 }}>
                        Materials in the store
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default SellerMaterialListBar