import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Box,
    CircularProgress, makeStyles
} from "@material-ui/core";
import useAxios from "axios-hooks";
import HeaderInPurchaserPage from "../pageBars/HeaderInPurchaserPage";
import HeaderInAdminNSalesPage from "../pageBars/HeaderInAdminNSalesPage";

const useStyles = makeStyles(()=>({
    tableBorder :{
        border : "gray 5px solid",
        marginTop:10
    },
}));

const EmployeeListPage = () =>{

    const classes = useStyles();

    const [{data, loading, error}] = useAxios("https://stock-api-actse.herokuapp.com/employee/list")
    if(loading){
        return(
            <Box sx={{display:'flex'}}>
                <CircularProgress/>
            </Box>)
    }
    if(error){
        return (
            <Box sx={{display:'flex'}}>
                Error!!: {error.message}
            </Box>
        )
    }


    return (
        <div>
            <HeaderInAdminNSalesPage/>

            <TableContainer>
                <Table className={classes.tableBorder}>
                    <TableHead>
                        <TableRow>
                            <TableCell><b>Employee Id</b> </TableCell>
                            <TableCell><b>First Name</b> </TableCell>
                            <TableCell><b>Middle Name</b> </TableCell>
                            <TableCell><b>Last Name</b> </TableCell>
                            <TableCell><b>Email</b> </TableCell>
                            <TableCell><b>Phone Number</b> </TableCell>
                            <TableCell><b>Employment Date</b> </TableCell>
                            <TableCell><b>Position</b> </TableCell>
                            <TableCell><b>Role</b> </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row)=>{
                            return (
                                <TableRow>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.firstName}</TableCell>
                                    <TableCell>{row.middleName}</TableCell>
                                    <TableCell>{row.lastName}</TableCell>
                                    <TableCell>{row.email}</TableCell>
                                    <TableCell>{row.phoneNumber}</TableCell>
                                    <TableCell>{row.employmentDate}</TableCell>
                                    <TableCell>{row.position}</TableCell>
                                    <TableCell>{row.role}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
export default EmployeeListPage
