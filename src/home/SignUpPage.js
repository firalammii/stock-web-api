import {Button, makeStyles, TextField} from "@material-ui/core";
import React, {useState} from "react";
import Axios from "axios";
import {useHistory} from "react-router-dom";
import {Form} from "reactstrap";
import HeaderCommon from "../pageBars/HeaderCommon";

const useStyles = makeStyles(()=>({
    TextField : {
        margin : 20
    },
    Button : {
        margin : 30
    },
    boxBorder :{
        border : "gray 5px solid",
        marginTop:10
    },
}));

const SignUpPage = ()=>{
    const url = "https://stock-mgt-sys-api.herokuapp.com/authorizedEmployee/signup";

    const classes = useStyles();

    let history = useHistory();

    const[data, setData] = useState({
        companyId:"",
        password:"",
        confirmPassword:""
    })

    function handleFields(e){
        const newData = {...data}
        newData[e.target.id] =e.target.value;
        setData(newData);
    }

    function handleSubmit(e){
        e.preventDefault();
        Axios.post(url,{
            companyId:data.companyId,
            password:data.password,
        }).then(res=>{
            alert("successfully registered as: "+ res.data+"\n go and sign in now as: "+res.data)
            history.push("/authorizedEmployee/login")
        }).catch(err=>{
            alert(err)
        })
    }


    return(
        <>
            <HeaderCommon/>

            <div className={classes.boxBorder}>
            <Form>
                <TextField
                    type = {"number"}
                    id={"companyId"}
                    autoFocus = {true}
                    className = {classes.TextField}
                    label = {"Company Id"}
                    placeholder = {"1"}
                    variant = {"outlined"}
                    value = {data.companyId}
                    onChange = {(e)=>handleFields(e)}
                />

                <TextField
                    type = {"password"}
                    id={"password"}
                    autoFocus = {true}
                    className = {classes.TextField}
                    label = {"Password"}
                    placeholder = {"MixLike(P@#er50jJ)"}
                    variant = {"outlined"}
                    value = {data.password}
                    onChange = {(e)=>handleFields(e)}
                />

                <TextField
                    type = {"password"}
                    id={"confirmPassword"}
                    autoFocus = {true}
                    className = {classes.TextField}
                    label = {"Confirm Password"}
                    placeholder = {"the same as above)"}
                    variant = {"outlined"}
                    value = {data.confirmPassword}
                    onChange = {(e)=>handleFields(e)}
                />

                <Button
                    className = {classes.Button}
                    variant = {"contained"}
                    color = {"primary"}
                    value={"submit"}
                    onClick = {(e)=> {
                        if(data.password !== data.confirmPassword){
                            alert("the passwords are different!!");
                        }
                        else{
                            handleSubmit(e)
                        }

                    }}
                >
                    sign up
                </Button>

            </Form>
            </div>
        </>


    );
}
export default SignUpPage
