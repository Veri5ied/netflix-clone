import React, { useState, useEffect } from 'react';
import axios from "../../requests/axios"

function Rows({ title, fetchUrl }) {

    const [movies, setMovies] = useState([]);

    useEffect(() => { 
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl])

    console.log(movies);
    return (
        <div>
            <h3>{title}</h3>



        </div>
    )
}

export default Rows;
