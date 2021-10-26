import CustomerViewMaterialList from "../tables/CustomerViewMaterialList";
import {AppBar, Box, Button, IconButton, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

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
        <div>
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
                            <AddShoppingCartIcon/>

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

            <CustomerViewMaterialList/>

        </div>
    )
}

export default HomePageWithSearch