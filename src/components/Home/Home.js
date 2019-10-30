import React from 'react';
import './Home.css'; 

import NowPlaying from './Nowplaying/Nowplaying';
import Trending from './Trending/Trending';
const Home = props => {

    return (
        <div className="Home">
            <NowPlaying />
            <Trending />
        </div>
    );
}

export default Home;