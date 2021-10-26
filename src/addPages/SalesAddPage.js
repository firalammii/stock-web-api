import React, {useState} from 'react'
import {TextField, Button, Box} from '@material-ui/core'
import {Form} from "reactstrap";
import { makeStyles } from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {useHistory} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import AuthorizedMaterialsListPage from "../tables/AuthorizedMaterialsListPage";

const useStyles = makeStyles(()=>({
    title: {
        flexGrow: 1,
    },
    TextField : {
        margin : 15
    },
    headers :{
        marginLeft:20

    },
    Button : {
        margin : 22
    },
    boxBorder :{
        border : "gray 5px solid",
        marginTop:10
    }

}));

const SalesAddPage = ()=>{

    const classes = useStyles();
    const history = useHistory();
    const customerAddUrl = "https://stock-mgt-sys-api.herokuapp.com/customer/add";

    const [customerData, setCustomerData] = useState({
        firstName: "", middleName: "",
        phoneNumber: "", itemId: ""
    })

    function customerHandleFields(e) {
        const newData = {...customerData}
        newData[e.target.id] = e.target.value;
        setCustomerData(newData);
    }

    function customerHandleSubmit(e) {
        e.preventDefault();
        Axios.post(customerAddUrl, {
            firstName: customerData.firstName,
            middleName: customerData.middleName,
            phoneNumber: customerData.phoneNumber,
            itemId: customerData.itemId,
        }).then(res => {
            alert(res.data.firstName + " " + res.data.middleName + " is successfully added\n" +
                "Id = " + res.data.id)
        }).catch(err => {
            alert("Error while adding customer: " + err)

        })
    }

    const salesAddUrl = "https://stock-mgt-sys-api.herokuapp.com/sales/add";

    const[salesData, setSalesData] = useState({
        customerId:"",itemId:"",quantity:"",price:""
    })
    function salesHandleFields(e){
        const newData = {...salesData}
        newData[e.target.id] = e.target.value;
        setSalesData(newData);
    }
    function salesHandleSubmit(e){
        e.preventDefault();
        Axios.post(salesAddUrl,{
            customerId:salesData.customerId,
            itemId:salesData.itemId,
            quantity:salesData.quantity,
            price:salesData.price

        }).then(res=>{
            alert(res.data);
        }).catch(err=>{
            alert(err + "\nError while saving the sales\n go and sign in first !!")

        })
    }

    return(
        <div>
            <div>
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
                            Stack Management System <br/> Customer Data Entry Fields
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

                <Box className={classes.boxBorder}>
                    <Form>
                        <TextField
                            type = {"text"}
                            id={"firstName"}
                            required = {true}
                            className = {classes.TextField}
                            label = {"First Name"}
                            placeholder = {"First Name"}
                            variant = {"outlined"}
                            value = {customerData.firstName}
                            onChange={(e)=>customerHandleFields(e)}

                        />

                        <TextField
                            type = {"text"}
                            id={"middleName"}
                            required = {true}
                            className = {classes.TextField}
                            label = {"Middle Name"}
                            placeholder = {"middle Name"}
                            variant = {"outlined"}
                            value = {customerData.middleName}
                            onChange={(e)=>customerHandleFields(e)}

                        />

                        <TextField
                            type = {"tel"}
                            id={"phoneNumber"}
                            required = {true}
                            className = {classes.TextField}
                            label = {"Mobile Phone Number"}
                            placeholder = {"0912345678"}
                            variant = {"outlined"}
                            value = {customerData.phoneNumber}
                            onChange={(e)=>customerHandleFields(e)}

                        />

                        <TextField
                            type = {"number"}
                            id={"itemId"}
                            required = {true}
                            className = {classes.TextField}
                            label = {"Item Id"}
                            placeholder = {"the Id"}
                            variant = {"outlined"}
                            value = {customerData.itemId}
                            onChange={(e)=>customerHandleFields(e)}

                        />

                        <Button
                            className = {classes.Button}
                            variant = {"contained"}
                            color = {"primary"}
                            onClick = {(e)=> customerHandleSubmit(e)}
                        >
                            save customer
                        </Button>
                    </Form>
                </Box>
            </div>

            <hr/>

            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title} component="div" sx={{ flexGrow: 1 }}>
                            Sales Data Entry Fields
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
            <hr/>

        <div className={classes.boxBorder}>
            <Form>
                <TextField
                    type = {"number"}
                    id={"customerId"}
                    required = {true}
                    className = {classes.TextField}
                    label = {"Customer Id"}
                    placeholder = {"1"}
                    variant = {"outlined"}
                    value = {salesData.customerId}
                    onChange={(e)=>salesHandleFields(e)}
                />
                <TextField
                    type = {"number"}
                    id={"itemId"}
                    required = {true}
                    className = {classes.TextField}
                    label = {"Item Id"}
                    placeholder = {"1"}
                    variant = {"outlined"}
                    value = {salesData.itemId}
                    onChange={(e)=>salesHandleFields(e)}
                />

                <TextField
                type = {"number"}
                id={"quantity"}
                required = {true}
                className = {classes.TextField}
                label = {"Quantity"}
                placeholder = {"1"}
                variant = {"outlined"}
                value = {salesData.quantity}
                onChange={(e)=>salesHandleFields(e)}
                />

                <TextField
                    type = {"number"}
                    id={"price"}
                    required = {true}
                    className = {classes.TextField}
                    label = {"Price"}
                    placeholder = {"1"}
                    variant = {"outlined"}
                    value = {salesData.price}
                    onChange={(e)=>salesHandleFields(e)}
                />

                <Button
                    className = {classes.Button}
                    variant = {"contained"}
                    color = {"primary"}
                    onClick = {(e)=> salesHandleSubmit(e)}
                >
                    sell item
                </Button>

            </Form>
        </div>
            <AuthorizedMaterialsListPage/>
        </div>

    )
}

export default SalesAddPage