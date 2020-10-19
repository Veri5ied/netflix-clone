import React from 'react';
import Row from "../components/rows/Rows";
import requests from "../requests/requests";

function Screen() {
    return (
        <div className="App">
            <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
            <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
        </div>
    )
}

export default Screen;
