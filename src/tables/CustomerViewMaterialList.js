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

const useStyles = makeStyles(()=>({
    tableBorder :{
        border : "gray 5px solid",
        marginTop:10
    },
}));

const CustomerViewMaterialList = () =>{

    const classes = useStyles();

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

        <TableContainer className={classes.tableBorder}>
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
                        <TableCell><b>Min Selling pp</b> </TableCell>

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
    )
}
export default CustomerViewMaterialList
