import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Home.css";
import { toast } from "react-toastify";
import axios from "axios";

const Home = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5001/api/get");
        setData(response.data);
        console.log(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);
    return (
        <div style={{ marginTop: "150px" }}>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{ textAlign: "center" }}>Id</th>
                        <th style={{ textAlign: "center" }}>Name</th>
                        <th style={{ textAlign: "center" }}>Roll No</th>
                        <th style={{ textAlign: "center" }}>Course</th>
                        <th style={{ textAlign: "center" }}>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.roll_no}</td>

                                <td>{item.course}</td>
                                <td>
                                    <Link to={`/update/${item.id}`}>
                                        <button>Editeeeeeeeeeeeeeeeeee</button>
                                    </Link>

                                    &nbsp;
                                    <Link to={`/view/${item.id}`}>
                                        <button>View</button>
                                    </Link>

                                </td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div >
    );
};

export default Home;
