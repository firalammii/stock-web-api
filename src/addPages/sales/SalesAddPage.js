import React, {useState} from 'react'
import { TextField, Button} from '@material-ui/core'
import {Form} from "reactstrap";
import { makeStyles } from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerAddPage from "./CustomerAddPage";
import SellerMaterialList from "./SellerMaterialList";
import Axios from "axios";
import HeaderInAdminNSalesPage from "../../pageBars/HeaderInAdminNSalesPage";

const useStyles = makeStyles(()=>({
    TextField : {
        margin : 15
    },
    headers :{
        alignContent: "center"
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

    const url = "https://stock-api-actse.herokuapp.com/sales/add";

    const classes = useStyles();

    const[data, setData] = useState({
        customerId:"",itemId:"",quantity:"",price:""
    })
    function handleFields(e){
        const newData = {...data}
        newData[e.target.id] =e.target.value;
        setData(newData);
    }
    function handleSubmit(e){
        e.preventDefault();
        Axios.post(url,{
            customerId:data.customerId,
            itemId:data.itemId,
            quantity:data.quantity,
            price:data.price

        }).then(res=>{
            alert(res.data)
        }).catch(err=>{
            alert("Error while saving the sales\n go and sign in first !!")

        })
    }
    return(
        <>
            <HeaderInAdminNSalesPage/>

            <hr/>
            <div>
                <h2 className={classes.headers}>Customer Data Entry Fields</h2>
            </div>
            <hr/>

            <CustomerAddPage/>

            <hr/>
            <div>
            <h2 className={classes.headers}>Sales Data Entry Fields</h2>
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
                    value = {data.customerId}
                    onChange={(e)=>handleFields(e)}
                />
                <TextField
                    type = {"number"}
                    id={"itemId"}
                    required = {true}
                    className = {classes.TextField}
                    label = {"Item Id"}
                    placeholder = {"1"}
                    variant = {"outlined"}
                    value = {data.itemId}
                    onChange={(e)=>handleFields(e)}
                />

                <TextField
                type = {"number"}
                id={"quantity"}
                required = {true}
                className = {classes.TextField}
                label = {"Quantity"}
                placeholder = {"1"}
                variant = {"outlined"}
                value = {data.quantity}
                onChange={(e)=>handleFields(e)}
                />

                <TextField
                    type = {"number"}
                    id={"price"}
                    required = {true}
                    className = {classes.TextField}
                    label = {"Price"}
                    placeholder = {"1"}
                    variant = {"outlined"}
                    value = {data.price}
                    onChange={(e)=>handleFields(e)}
                />

                <Button
                    className = {classes.Button}
                    variant = {"contained"}
                    color = {"primary"}
                    onClick = {(e)=> handleSubmit(e)}
                >
                    sell
                </Button>

            </Form>
        </div>
            <SellerMaterialList/>
        </>

    )
}

export default SalesAddPage