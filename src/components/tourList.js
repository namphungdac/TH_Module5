import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Button, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from "@mui/material"

function TourList() {
    const navigate = useNavigate();
    const [listTour, setListTour] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/tuors").then((response) => {
            setListTour(response.data);
        });
    }, [listTour]);


    return (
        <>
            <Button variant="text" onClick={() => { navigate("/add") }}>Add</Button>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">#</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Price</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listTour.map((row, index) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left">{index + 1}</TableCell>
                                <TableCell component="th" scope="row">{row.title}</TableCell>
                                <TableCell align="left">{row.price}</TableCell>
                                <TableCell align="left">
                                    <Button variant="text" onClick={() => { navigate(`/edit/${row.id}`) }}>Edit</Button>
                                    <Button variant="text" onClick={() => { navigate(`/delete/${row.id}`) }} >Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default TourList;

