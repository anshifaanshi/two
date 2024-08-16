import React, { useState } from "react";
import Backbutton from "../component/Backbutton.jsx";
import Spinner from "../component/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const Createbook = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publishyear, setPublishYear] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    

    const handleSaveBook = () => {
        if(!title||!author||!publishyear){
            alert("please fill all feild")
        }
        
        const data = {
            title,
            author,
            publishyear
        };
        setLoading(true);
        axios
            .post("http://localhost:3004/books", data)
            .then(() => {
                setLoading(false);
                navigate("/"); // navigate to the home page after success
            })
            .catch((error) => {
                setLoading(false);
                alert("An error occurred while saving the book. Check the console for details.");
                console.log(error);
            });
    };

    return (
        <div className="bg-success-subtle">
        <div className="bg-success-subtle">
            <Backbutton />
            <h1 className="fw-bold text-primary">CREATE BOOK</h1>
            {loading ? <Spinner /> : ""}
            <div>
                <label className="ms-5 text-warning fw-bold">Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} className="ms-5 mt-3 bg-danger text-dark"
                />
            </div>
            <div>
                <label className="ms-5 text-warning fw-bold">Author</label>
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
             className="ms-4 mt-3  bg-danger text-dark"   />
            </div>
            <div>
                <label className="ms-4 text-warning fw-bold"> Publish Year</label>
                <input
                    type="number"
                    value={publishyear}
                    onChange={(e) => setPublishYear(e.target.value)} className="ms-3 mt-3  bg-danger text-dark"
                />
            </div>
            <button onClick={handleSaveBook} className="btn btn-primary mt-4 ms-5 me-5">Save Book</button>
        </div>
        </div>
    );
};

export default Createbook;
