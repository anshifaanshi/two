import React, { useState } from "react";
import Backbutton from "../component/Backbutton.jsx";
import Spinner from "../component/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const DeleteBook = () => {
    const [loading, setLoading] = useState(false); // useState should be inside the component
    const navigate = useNavigate(); // useNavigate should be invoked as a hook
    const { id } = useParams(); // Get the id from the URL parameters

    const handleDelete = () => {
        setLoading(true); // Set loading to true before the request
        axios
            .delete(`http://localhost:3002/books/${id}`) // Use backticks for template literals
            .then(() => {
                setLoading(false);
                navigate("/"); // Redirect to the home page after deletion
            })
            .catch((error) => {
                setLoading(false); // Set loading to false in case of an error
                alert("Can't delete the book. Check the console for details.");
                console.log(error);
            });
    };

    return (
        <div className="bg-danger mt-5 ps-5 mb-5">
            <Backbutton />
            {loading ? <Spinner /> : ""}
            <div className="">
                <h3 className="fw-bold  ">Are you sure you want to delete?</h3>
                <button onClick={handleDelete} className="btn btn-primary">Yes, Delete</button>
            </div>
        </div>
    );
};

export default DeleteBook;
