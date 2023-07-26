import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Button, TextField } from "@mui/material"

function AddTour() {
    const navigate = useNavigate();
    const [tour, setTour] = useState({
        title: "",
        price: "",
        description: "",
    });
    const handleChange = (e) => {
        setTour({ ...tour, [e.target.name]: e.target.value });
    };

    const addTour = () => {
        axios.post("http://localhost:4000/tuors", tour);
        navigate("/")
    }

    return (
        <div className="container w-25 shadow-sm p-3 mb-5 bg-body rounded mt-5">
            <h2>Add Tour</h2>
            <div>
                <TextField name='title' id="title" value={tour.title} onChange={handleChange} label="Title" variant="outlined" />
            </div>

            <div>
                <TextField name='price' id="price" value={tour.price} onChange={handleChange} label="Price" variant="outlined" />
            </div>
            <textarea cols={100} rows={5}
                className="form-control"
                name="description"
                value={tour.description}
                onChange={handleChange}
                placeholder="Description"
            />
            <Button variant="text" onClick={addTour}>Add</Button>
        </div>
    );
}

export default AddTour;