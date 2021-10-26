import { Button, makeStyles, TextField} from "@material-ui/core";
import React, {useState} from "react";
import {Form} from "reactstrap";
import {useHistory} from "react-router-dom";
import HeaderCommon from "../pageBars/HeaderCommon";
import Axios from "axios";

const useStyles = makeStyles(()=>({
    TextField : {
        margin : 15,
    },
    buttonSignup :{
        marginTop :22,
        marginLeft :110
    },
    boxBorder :{
        border : "gray 5px solid",
        marginTop:10
    },
}));

const SignInPage = ()=>{
    const url = "https://stock-mgt-sys-api.herokuapp.com/authorizedEmployee/login";

    const history =useHistory();
    const classes = useStyles();

    const[data, setData] = useState({
        companyId:"",
        password:"",
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
            handleLogin(res.data)
        }).catch(err=>{
            alert(err + "\nEither your password or your user id is incorrect" +
                "\n or You are not an authorized user")
        })
    }

    function handleLogin (res){
        
        const resArray = res.split(" ");

        if(resArray[0] === "admin"){
            alert("WELCOME BACK " + resArray[1]+" "+resArray[2]+"!!\nsuccessfully logged in as: "+resArray[0])
            history.push("/admin/work")
        }
        else if(resArray[0] === "purchaser"){
            alert("WELCOME BACK " + resArray[1]+" "+resArray[2]+"!!\nsuccessfully logged in as: "+resArray[0])
            history.push("/purchaser/material/add")

        }
        else if(resArray[0] === "sales"){
            alert("WELCOME BACK " + resArray[1]+" "+resArray[2]+"!!\nsuccessfully logged in as: "+resArray[0])
            history.push("/sales/add")
        }
        else if(resArray[0] === "authorization"){
            alert("you are not AUTHORIZED TO LOGIN!!")
        }
        else{
            alert("your password is INCORRECT")
        }
    }

    return(
        <>
            <HeaderCommon/>
            <div className={classes.boxBorder}>

                <Form>
                    <TextField
                        type = {"number"}
                        id={"companyId"}
                        required = {true}
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
                        required = {true}
                        className = {classes.TextField}
                        label = {"Password"}
                        placeholder = {"P@#er50jJ"}
                        variant = {"outlined"}
                        value = {data.password}
                        onChange = {(e)=>handleFields(e)}
                    />

                    <Button
                        className = {classes.buttonSignup}
                        variant = {"contained"}
                        color = {"primary"}
                        onClick = {(e)=> handleSubmit(e)}
                    >
                        sign in
                    </Button>
                </Form>

            </div>
        </>
    )
}
export default SignInPage
