import React, { useState, useEffect } from "react";
import Backbutton from "../component/Backbutton.jsx";
import Spinner from "../component/Spinner.jsx";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const EditBook = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publishYear, setPublishYear] = useState("");
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`https://two-m5er.onrender.com/books/${id}`) // Use backticks for template literals
            .then((response) => {
                setTitle(response.data.title);
                setAuthor(response.data.author);
                setPublishYear(response.data.publishyear);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                alert("An error occurred while fetching the book details.");
                console.log(error);
            });
    }, [id]);

    const handleSave = () => {
        const data = {
            title,
            author,
            publishYear,
        };
        setLoading(true);
        axios
            .put(`https://two-m5er.onrender.com/books/${id}`, data) // Use PUT for updating an existing resource
            .then(() => {
                setLoading(false);
                navigate("/"); // Use navigate to redirect
            })
            .catch((error) => {
                setLoading(false);
                alert("An error occurred while saving the book.");
                console.log(error);
            });
    };

    return (
        <div>
            <Backbutton />
            <h1 className="ms-5  text-body-emphasis text-bg-light text-bg-danger">Edit Book</h1>
            {loading ? <Spinner /> : ""}
            <div>
                <div>
                    <label className="ms-5  fw-bold text-warning">Title</label>
                    <input
                        type="text"
                        value={title} // Set the value prop to display the current state
                        onChange={(e) => setTitle(e.target.value)}
                        className="ms-5 mt-3 fw-bold text-primary bg-danger"
                    />
                </div>
                <div>
                    <label className="ms-5 fw-bold text-warning ">Author</label>
                    <input
                        type="text"
                        value={author} // Set the value prop to display the current state
                        onChange={(e) => setAuthor(e.target.value)}
                className="ms-5 mt-3 fw-bold text-primary bg-danger"    />
                </div>
                <div>
                    <label className="ms-5 mt-3 fw-bold text-warning">Publish Year</label>
                    <input
                        type="number"
                        value={publishYear} // Set the value prop to display the current state
                        onChange={(e) => setPublishYear(e.target.value)}
                        className="ms-5 mt-3 fw-bold text-primary bg-danger"
                    />
                </div>
                <button onClick={handleSave}  className="btn btn-primary ms-5 mt-5">Save</button>
            </div>
        </div>
    );
};

export default EditBook;
