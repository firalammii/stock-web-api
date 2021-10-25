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
import HeaderCommon from "../../pageBars/HeaderCommon";
import HeaderInAdminNSalesPage from "../../pageBars/HeaderInAdminNSalesPage";


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
const CustomersMaterialListPage = () =>{
    const classes=useStyles();

    const [{data, loading, error}] = useAxios("https://stock-api-actse.herokuapp.com/material/list")
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

            <TableContainer className={classes.boxBorder}>
                <Table>
                    <TableHead>
                        <TableRow>

                            <TableCell><b>Item Id</b> </TableCell>

                            <TableCell><b>Category</b> </TableCell>
                            <TableCell><b>Product Country</b> </TableCell>
                            <TableCell><b>Product Company</b> </TableCell>
                            <TableCell><b>Product Name</b> </TableCell>
                            <TableCell><b>Number in Store</b> </TableCell>
                            <TableCell><b>Standard</b> </TableCell>

                            <TableCell><b>Price pp</b> </TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row)=>{

                            return (
                                <TableRow>
                                    <TableCell>{row.id}</TableCell>

                                    <TableCell>{row.category}</TableCell>
                                    <TableCell>{row.productCountry}</TableCell>
                                    <TableCell>{row.productCompany}</TableCell>
                                    <TableCell>{row.itemName}</TableCell>
                                    <TableCell>{row.noOfItem}</TableCell>
                                    <TableCell>{row.standard}</TableCell>

                                    <TableCell>{row.minSellingPrice}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>

    )
}
export default CustomersMaterialListPage