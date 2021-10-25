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
import HeaderCommon from "../pageBars/HeaderCommon";
import HeaderInAdminNSalesPage from "../pageBars/HeaderInAdminNSalesPage";
import HeaderInPurchaserPage from "../pageBars/HeaderInPurchaserPage";

const useStyles = makeStyles(()=>({
    boxBorder :{
        border : "gray 5px solid",
        marginTop:10
    },
}));
const MaterialListPage = () =>{
    const classes = useStyles()

    const [{data, loading, error}] = useAxios("https://stock-api-actse.herokuapp.com/sales/list")
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
                <Table className={classes.boxBorder}>
                    <TableHead>
                        <TableRow>

                            <TableCell><b>sales Id</b> </TableCell>
                            <TableCell><b>Seller Name</b> </TableCell>
                            <TableCell><b>Buyer Name</b> </TableCell>
                            <TableCell><b>Buyer tel</b> </TableCell>
                            <TableCell><b>Product Name</b> </TableCell>
                            <TableCell><b>product Category</b> </TableCell>
                            <TableCell><b>Quantity</b> </TableCell>
                            <TableCell><b>price</b> </TableCell>
                            <TableCell><b>Date</b> </TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row)=>{

                            return (
                                <TableRow>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.sellerFullName}</TableCell>
                                    <TableCell>{row.customerFullName}</TableCell>
                                    <TableCell>{row.customerPhoneNumber}</TableCell>
                                    <TableCell>{row.itemName}</TableCell>
                                    <TableCell>{row.itemCategory}</TableCell>
                                    <TableCell>{row.quantity}</TableCell>
                                    <TableCell>{row.price}</TableCell>
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
export default MaterialListPage
