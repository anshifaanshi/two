import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../component/Backbutton.jsx";
import Spinner from "../component/Spinner.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';


const ShowBook = () => {
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`https://two-m5er.onrender.com/books/${id}`)
            .then((response) => {
                setBook(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
            });
    }, []);

    return (
        <div className="container">
            <BackButton />
            <h1 className="fw-bold">Show Book</h1>
            {loading ? (
                <Spinner />
            ) : (
                <div>
                    <div className="p-3 bg-danger text-white">ID: {book._id}</div>
                    <div className="p-3 bg-danger text-white">Title: {book.title}</div>
                    <div className="p-3 bg-danger text-white">Author: {book.author}</div>
                    <div className="p-3 bg-danger text-white">Publish Year: {book.publishyear}</div>
                </div>
            )}
        </div>
    );
};

export default ShowBook;
