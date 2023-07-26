import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material"

function DeleteTour() {
    const [tour, setTour] = useState({});
    const [isDelete, setIsDelete] = useState(false)
    let { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:4000/tuors/${id}`).then((res) => {
            setTour(res.data);
        });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:4000/tuors/${id}`).then(res => {
            setTour();
            setIsDelete(true);
        })
    }

    if (isDelete) {
        return (
            <>
                <h1>Tour already deteled</h1>
                <Link to={'/'}><Button variant="text" >Exit</Button></Link>
            </>
        )
    } else {
        return (
            <>
                <h1>Delete Tour</h1>
                <h3>{tour.price}</h3>
                <p>{tour.description}</p>
                <Button variant="text" onClick={() => handleDelete(id)}>Delete</Button>
                <Link to={'/'}><Button variant="text" >Exit</Button></Link>
            </>
        )
    }

}

export default DeleteTour;