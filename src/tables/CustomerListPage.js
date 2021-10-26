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
import HeaderInAdminNSalesPage from "../pageBars/HeaderInAdminNSalesPage";

const useStyles = makeStyles(()=>({
    tableBorder :{
        border : "gray 5px solid",
        marginTop:10
    },
}));

const CustomerListPage = () =>{
    const classes = useStyles();

    const [{data, loading, error}] = useAxios("https://stock-api-actse.herokuapp.com/customer/list")
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
        <>
            <HeaderInAdminNSalesPage/>

            <TableContainer>
                <Table className={classes.tableBorder}>
                    <TableHead>
                        <TableRow>
                            <TableCell><b>DB_Id</b> </TableCell>
                            <TableCell><b>First Name</b> </TableCell>
                            <TableCell><b>Middle Name</b> </TableCell>
                            <TableCell><b>Phone Number</b> </TableCell>
                            <TableCell><b>Item Name</b> </TableCell>
                            <TableCell><b>Quantity</b> </TableCell>
                            <TableCell><b>Price</b> </TableCell>
                            <TableCell><b>num of Visits</b> </TableCell>
                            <TableCell><b>Date</b> </TableCell>
                        </TableRow>

                    </TableHead>

                    <TableBody>
                        {data.map((row)=>{
                            return (
                                <TableRow>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.firstName}</TableCell>
                                    <TableCell>{row.middleName}</TableCell>
                                    <TableCell>{row.phoneNumber}</TableCell>
                                    <TableCell>{row.itemName}</TableCell>
                                    <TableCell>{row.quantity}</TableCell>
                                    <TableCell>{row.price}</TableCell>
                                    <TableCell>{row.noOfVisit}</TableCell>
                                    <TableCell>{row.date}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>

    )
}

export default CustomerListPage