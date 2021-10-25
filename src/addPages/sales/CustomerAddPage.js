import React, {useState} from 'react'
import { TextField, Button, Box} from '@material-ui/core'
import {Form} from "reactstrap";
import { makeStyles } from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";

const useStyles = makeStyles(()=>({
    TextField : {
        margin : 20
    },
    Button : {
        margin : 30
    },
    boxBorder :{
        border : "gray 5px solid"
    }
}));

const CustomerAddPage = ()=>{
    const url = "https://stock-api-actse.herokuapp.com/customer/add";

    const classes = useStyles();

    const[data, setData] = useState({
        firstName:"", middleName:"",
        phoneNumber:"", itemId:""
    })

    function handleFields(e){
        const newData = {...data}
        newData[e.target.id] =e.target.value;
        setData(newData);
    }

    function handleSubmit(e){
        e.preventDefault();
        Axios.post(url,{
            firstName:data.firstName,
            middleName:data.middleName,
            phoneNumber:data.phoneNumber,
            itemId:data.itemId,
        }).then(res=>{
            alert(res.data.firstName+" "+res.data.middleName + " is successfully added\n"+
                "Id = "+ res.data.id)
        }).catch(err=>{
            alert("Error while adding customer: "+err)

        })
    }

    return(
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
                    value = {data.firstName}
                    onChange={(e)=>handleFields(e)}

                />

                <TextField
                    type = {"text"}
                    id={"middleName"}
                    required = {true}
                    className = {classes.TextField}
                    label = {"Middle Name"}
                    placeholder = {"middle Name"}
                    variant = {"outlined"}
                    value = {data.middleName}
                    onChange={(e)=>handleFields(e)}

                />

                <TextField
                    type = {"tel"}
                    id={"phoneNumber"}
                    required = {true}
                    className = {classes.TextField}
                    label = {"Mobile Phone Number"}
                    placeholder = {"0912345678"}
                    variant = {"outlined"}
                    value = {data.phoneNumber}
                    onChange={(e)=>handleFields(e)}

                />

                <TextField
                    type = {"number"}
                    id={"itemId"}
                    required = {true}
                    className = {classes.TextField}
                    label = {"Item Id"}
                    placeholder = {"the Id"}
                    variant = {"outlined"}
                    value = {data.itemId}
                    onChange={(e)=>handleFields(e)}

                />

                <Button
                    className = {classes.Button}
                    variant = {"contained"}
                    color = {"primary"}
                    onClick = {(e)=> handleSubmit(e)}
                >
                    save customer
                </Button>
            </Form>
        </Box>
    )
}

export default CustomerAddPage