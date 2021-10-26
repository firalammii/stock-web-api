import React, {useState} from 'react'
import { TextField, Button} from '@material-ui/core'
import {Form} from "reactstrap";
import { makeStyles } from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";
import HeaderInAdminNSalesPage from "../pageBars/HeaderInAdminNSalesPage";

const useStyles = makeStyles(()=>({
    TextField : {
        margin : 15
    },
    Button : {
        margin : 22
    },
    boxBorder :{
        border : "gray 5px solid",
        marginTop:10
    },
}));

const EmployeeAddPage = ()=>{

    const classes = useStyles();
    const url = "https://stock-api-actse.herokuapp.com/employee/add"

    const[data, setData] = useState({

        firstName:"", middleName:"", lastName:"",
        birthDate:"", email:"", phoneNumber:"",
        position:"",  role:""

    })
    function handleFields(e){
        const newData = {...data}
        newData[e.target.id] = e.target.value;
        setData(newData);
    }

    function handleSubmit(e){
        e.preventDefault();
        Axios.post(url,{
            firstName:data.firstName,
            middleName:data.middleName,
            lastName:data.lastName,
            position:data.position,
            role:data.role,
            email:data.email,
            phoneNumber:data.phoneNumber,

        }).then(res=>{
            alert("Employee is added successfully with id: "+res.data.id)
        }).catch(err=>{
            alert(err)
        })
    }

    return(

        <>
            <HeaderInAdminNSalesPage/>
            <div className={classes.boxBorder}>

                <Form>
                    <TextField
                        type = {"text"}
                        id={"firstName"}
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
                        className = {classes.TextField}
                        label = {"Middle Name"}
                        placeholder = {"middle Name"}
                        variant = {"outlined"}
                        value = {data.middleName}
                        onChange={(e)=>handleFields(e)}
                    />

                    <TextField
                        type = {"text"}
                        id={"lastName"}
                        className = {classes.TextField}
                        label = {"Last Name"}
                        placeholder = {"Last Name"}
                        variant = {"outlined"}
                        value = {data.lastName}
                        onChange={(e)=>handleFields(e)}
                    />

                    <TextField
                        type = {"email"}
                        id={"email"}
                        className = {classes.TextField}
                        label = {"Email"}
                        placeholder = {"sth@sth.com"}
                        variant = {"outlined"}
                        value = {data.email}
                        onChange={(e)=>handleFields(e)}
                    />

                    <TextField
                        type = {"tel"}
                        id={"phoneNumber"}
                        className = {classes.TextField}
                        label = {"Mobile Phone Number"}
                        placeholder = {"0912345678"}
                        variant = {"outlined"}
                        value = {data.phoneNumber}
                        onChange={(e)=>handleFields(e)}
                    />

                    <TextField
                        type = {"text"}
                        id={"position"}
                        className = {classes.TextField}
                        label = {"Position"}
                        placeholder = {"Security Guard"}
                        variant = {"outlined"}
                        value = {data.position}
                        onChange={(e)=>handleFields(e)}
                    />

                    <TextField
                        type = {"text"}
                        id={"role"}
                        className = {classes.TextField}
                        label = {"Role"}
                        placeholder = {"Member"}
                        variant = {"outlined"}
                        value = {data.role}
                        onChange={(e)=>handleFields(e)}
                    />

                    <Button
                        className = {classes.Button}
                        variant = {"contained"}
                        color = {"primary"}
                        onClick={(e)=>handleSubmit(e)}
                    >
                        save employee
                    </Button>

                </Form>
            </div>
        </>
    )
}

export default EmployeeAddPage