import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import EmployeeAddPage from '../addPages/EmployeeAddPage'
import SignUpPage from "../home/SignUpPage";
import AdminWorkRouter from "./AdminWorkRouter";
import SalesAddPage from "../addPages/SalesAddPage";
import MaterialAddPage from "../addPages/MaterialAddPage";
import SignInPage from "../home/SignInPage";
import EmployeeListPage from "../tables/EmployeeListPage";
import MaterialListPage from "../tables/MaterialListPage";
import CustomerListPage from "../tables/CustomerListPage";
import AuthorizedEmployeeListPage from "../tables/AuthorizedEmployeeListPage";
import HomePageWithSearch from "../home/HomePageWithSearch";
import SalesListPage from "../tables/SalesListPage";
import AuthorizedMaterialsListPage from "../tables/AuthorizedMaterialsListPage";
import CustomerViewMaterialListFromAuthorizedUserPage from "../tables/CustomerViewMaterialListFromAuthorizedUserPage"

const GeneralRouter = () => {
    return(
        <Router>
            <Switch>

                <Route exact path= "/" component = {HomePageWithSearch}/>
                <Route exact path = "/authorizedEmployee/signup" component = {SignUpPage}/>
                <Route exact path = "/authorizedEmployee/login" component = {SignInPage}/>
                <Route exact path = "/admin/work" component = {AdminWorkRouter}/>

                <Route exact path = "/employee/add" component = {EmployeeAddPage}/>
                <Route exact path ="/employee/list" component = {EmployeeListPage}/>
                <Route exact path = "/material/add" component = {MaterialAddPage}/>
                <Route exact path ="/material/list" component = {AuthorizedMaterialsListPage}/>
                <Route exact path ="/customer/list" component = {CustomerListPage}/>
                <Route exact path = "/sales/list" component = {SalesListPage}/>
                <Route exact path ="/authorizedEmployee/list" component = {AuthorizedEmployeeListPage}/>
                <Route exact path ="/customerView/material/list" component = {CustomerViewMaterialListFromAuthorizedUserPage}/>

                <Route exact path = "/sales/add" component = {SalesAddPage}/>




                <Route exact path ="/employee/list/{id}" component = {EmployeeListPage}/>
                <Route exact path ="/material/list/{itemTagNum}" component = {MaterialListPage}/>
                <Route exact path ="/customer/list/{phoneNumber}" component = {CustomerListPage}/>
                <Route exact path ="/authorizedEmployee/list/{companyId}" component = {AuthorizedEmployeeListPage}/>

            </Switch>
        </Router>
    )
}
export default GeneralRouter