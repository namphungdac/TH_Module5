import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Button, TextField } from "@mui/material"
import axios from "axios";

function EditTour() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [tour, setTour] = useState({
        title: "",
        price: "",
        description: "",
    });

    useEffect(() => {
        axios.get(`http://localhost:4000/tuors/${id}`).then((res) => {
            setTour(res.data);
        });
    }, [id]);

    const handleChange = (e) => {
        setTour({ ...tour, [e.target.name]: e.target.value });
    };

    const editTour = () => {
        axios.put(`http://localhost:4000/tuors/${id}`, tour);
        navigate("/");
    }

    return (

        <div className="container w-15 justify-content-around shadow-sm p-3 mb-2 bg-body rounded mt-2">
            <h1>Chỉnh sửa Tour</h1>
            Tên tour: <input
                type="text"
                className="form-control"
                name="title"
                value={tour.title}
                onChange={handleChange}
            />
            <br />
            Giá tour: <input
                type="text"
                className="form-control"
                name="price"
                value={tour.price}
                onChange={handleChange}
            />
            <br />
            Mô tả: <textarea cols={100} rows={5}
                className="form-control"
                name="description"
                value={tour.description}
                onChange={handleChange}
            />
            <br />
            <Button variant="text" onClick={editTour}>Edit</Button>
        </div>
    );
}

export default EditTour;