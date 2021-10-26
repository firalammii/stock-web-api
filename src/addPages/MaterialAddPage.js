import React, {useState} from 'react'
import { TextField, Button} from '@material-ui/core'
import {Form} from "reactstrap";
import { makeStyles } from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";
import HeaderInAdminNSalesPage from "../pageBars/HeaderInAdminNSalesPage";

const useStyles = makeStyles(()=>({
    TextField : {
        margin : 20
    },
    buttonSignin : {
        marginTop : 30,
            marginLeft :70
    },
    buttonSignup :{
        marginTop :30,
            marginLeft :110
    },
    form :{
        alignContent : "center"
    },
    Button :{
        margin:30
    },
    boxBorder :{
        border : "gray 5px solid",
        marginTop:10
    },
}));

const MaterialAddPage = ()=>{

    const classes = useStyles();
    const url = "https://stock-mgt-sys-api.herokuapp.com/material/add"

    const[data, setData] = useState({

        category:"", productCompany:"", productCountry:"",
        itemName:"", standard:"", noOfItem:"",
        cost:"", minSellingPrice:"", purchaserId:""

    })
    function handleFields(e){
        const newData = {...data}
        newData[e.target.id] =e.target.value;
        setData(newData);
    }
    function handleSubmit(e){
        e.preventDefault();
        Axios.post(url,{
            category:data.category,
            productCompany:data.productCompany,
            productCountry:data.productCountry,
            itemName:data.itemName,
            standard:data.standard,
            noOfItem:data.noOfItem,
            purchaser:data.purchaserId,
            cost:data.cost,
            minSellingPrice:data.minSellingPrice,

        }).then(res=>{
            alert("material is added successfully!!\nid: "+res.data.id)
        }).catch(err=>{
            alert("Error while adding material: " +err)

        })
    }
    return(
        <>
            <HeaderInAdminNSalesPage/>
        <div className={classes.boxBorder}>
            <Form>
                <TextField
                    type = {"text"}
                    id={"category"}
                    required={true}
                    className = {classes.TextField}
                    label = {"Category"}
                    placeholder = {"Agriculture"}
                    variant = {"outlined"}
                    value = {data.category}
                    onChange = {(event)=>handleFields(event)}

                />

                <TextField
                    type = {"text"}
                    id={"productCountry"}
                    required = {true}
                    className = {classes.TextField}
                    label = {"Country Made Of"}
                    placeholder = {"product country"}
                    variant = {"outlined"}
                    value = {data.productCountry}
                    onChange = {(event)=>handleFields(event)}
                />

                <TextField
                    type = {"text"}
                    id={"productCompany"}
                    required = {true}
                    className = {classes.TextField}
                    label = {"Product Company"}
                    placeholder = {"JohnDeere"}
                    variant = {"outlined"}
                    value = {data.productCompany}
                    onChange = {(event)=>handleFields(event)}
                />

                <TextField
                    type = {"text"}
                    id={"itemName"}
                    required = {true}
                    className = {classes.TextField}
                    label = {"Product Name"}
                    placeholder = {"Tractor"}
                    variant = {"outlined"}
                    value = {data.itemName}
                    onChange = {(event)=>handleFields(event)}
                />

                <TextField
                    type = {"text"}
                    id={"standard"}
                    required = {true}
                    label={"Standard"}
                    className = {classes.TextField}
                    variant = {"outlined"}
                    value = {data.standard}
                    onChange = {(event)=>handleFields(event)}
                />

                <TextField
                    type = {"number"}
                    id={"noOfItem"}
                    required = {true}
                    label={"Number Of Items"}
                    className = {classes.TextField}
                    variant = {"outlined"}
                    value = {data.noOfItem}
                    onChange = {(event)=>handleFields(event)}
                />
                <TextField
                    type = {"number"}
                    id={"cost"}
                    required = {true}
                    label={"Cost"}
                    className = {classes.TextField}
                    variant = {"outlined"}
                    value = {data.cost}
                    onChange = {(event)=>handleFields(event)}
                />
                <TextField
                    type = {"number"}
                    id={"minSellingPrice"}
                    required = {true}
                    label={"Minimum Selling Price"}
                    className = {classes.TextField}
                    variant = {"outlined"}
                    value = {data.minSellingPrice}
                    onChange = {(event)=>handleFields(event)}
                />

                <TextField
                    type = {"number"}
                    id={"purchaserId"}
                    required = {true}
                    className = {classes.TextField}
                    label = {"Purchaser Employee Company Id"}
                    placeholder = {"employee company id"}
                    variant = {"outlined"}
                    value = {data.purchaserId}
                    onChange = {(event)=>handleFields(event)}
                />

                <Button
                    className = {classes.Button}
                    variant = {"contained"}
                    color = {"primary"}
                    onClick = {(event)=> handleSubmit(event)}
                >
                    save to DB
                </Button>

            </Form>
        </div>
            </>
    )
}

export default MaterialAddPage