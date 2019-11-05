import React, {useEffect , useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './Trending.css';

import { getTrendingMovies, getTrendingTv } from '../../../store/actions/Home';
import Cards from '../../UI/Cards/Cards';

const Trending = props => {

    const [showResults, setShowResults] = useState(true);

    const {onGetTrendingMoviesInit, onGetTrendingTvInit} = props;

    useEffect(() => {   
        onGetTrendingMoviesInit();
        onGetTrendingTvInit();
    }, [onGetTrendingMoviesInit, onGetTrendingTvInit])

    let movieResults = null, tvResults = null;

    if(props.results)
    {
        movieResults = props.results;
    }
    tvResults = props.tvResults ? props.tvResults : null;

    const onMovieNavigationHandler = () => {
        setShowResults(true);
    }

    const onTvNavigationHandler = () => {
        setShowResults(false);
    }

    return (
        <div>
            <div className="navigationTrending">
            <p className={showResults? 'active' : null} onClick = {onMovieNavigationHandler}> TRENDING MOVIES</p>
            <p className={!showResults? 'active' : null}onClick = {onTvNavigationHandler}> TRENDING TV</p>
            </div>
            <div className="Cards">
            {showResults ? movieResults ? movieResults.map(res => {
                return <Link to={'/' + res.id + '/movie'} key={res.id}>
                    <Cards key={res.id} cardposter={"https://image.tmdb.org/t/p/w500/"+res.poster_path}
                            title={res.title} rating={res.vote_average === 0 ? 'NA' : res.vote_average } />
                </Link>
                
            }):null :  
            tvResults ? tvResults.map(res => {
                return  <Link to={'/' + res.id + '/tv'} key={res.id}>
                    <Cards key={res.id} cardposter={"https://image.tmdb.org/t/p/w500/"+res.poster_path}
                            title={res.name} rating={res.vote_average === 0 ? 'NA' : res.vote_average } />
                </Link>
                
            }):null }
            
            </div>
        </div>
        
    )
}

const mapStateToProps = state => {
    return {
        results: state.home.trendingMovies,
        tvResults: state.home.trendingTv
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetTrendingMoviesInit: () => dispatch(getTrendingMovies()),
        onGetTrendingTvInit: () => dispatch(getTrendingTv()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trending);