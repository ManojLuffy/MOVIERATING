import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import './Movies.css';

import{getMovies} from '../../store/actions/Movies';
import Cards from '../UI/Cards/Cards';
import Pagination from '../UI/Pagination/Pagination';

const Movies = props => {
    const [pagenumber, setPageNumber] = useState(1);
    const {onGetMoviesInit} = props;
    
    useEffect(() => {  
        onGetMoviesInit(pagenumber);
    }, [onGetMoviesInit, pagenumber])

    let movies = null;
    if(props.movies)
    {
        movies = props.movies.results;
    }

    const pageNumberChange = pagenum => {
        setPageNumber(pagenum)
    }

    return(
        <div className="Movies">
            <div className="Cards">
            { movies ? movies.map(res => {
                return <Link to={'/' + res.id} key={res.id}>
                            <Cards detailsPath={'/details'} 
                                cardposter={"https://image.tmdb.org/t/p/w500/"+res.poster_path}
                                title={res.title} 
                                rating={res.vote_average === 0 ? 'NA' : res.vote_average } />
                       </Link>
            }): null }
        </div>
            <Pagination totalPages={props.movies ? props.movies.total_pages: null} pageNumberChange={pageNumberChange}/>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        movies: state.movies.movies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetMoviesInit: (pagenumber) => dispatch(getMovies(pagenumber))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);