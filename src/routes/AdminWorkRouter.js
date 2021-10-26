import React from "react";
import HeaderInAdminNSalesPage from "../pageBars/HeaderInAdminNSalesPage";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(()=>({
    margin :{
        margin:40
    },
}));

const AdminWorkRouter =()=> {
    const classes = useStyles()

    return(
        <>
            <HeaderInAdminNSalesPage/>

            <div className={classes.margin}>

                <hr/>
                <h4> <a href={"/employee/add"}>  add employee </a> </h4>
                <h4> <a href={"/employee/list"}> list all employee details </a> </h4>

                <hr/>
                <h4> <a href={"/material/add"}>  add materials  </a> </h4>
                <h4> <a href={"/material/list"}>  list all materials in the store </a> </h4>

                <hr/>
                <h4> <a href={"/customer/list"}>  list all customers information </a> </h4>
                <h4> <a href={"/sales/list"}>  list all sales details </a> </h4>
                <hr/>

                <h4> <a href={"/authorizedEmployee/list"}>  list all Authorized Employees </a> </h4>
                <h4> <a href={"/customerView/material/list"}>  customer's view material list </a> </h4>
                <hr/>
            </div>
        </>
    )
}
export default AdminWorkRouter