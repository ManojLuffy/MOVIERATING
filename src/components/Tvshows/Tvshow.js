import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux'
import './Tvshow.css';
import {Link} from 'react-router-dom';

import{getTv} from '../../store/actions/Tvshow';
import Cards from '../UI/Cards/Cards';
import Pagination from '../UI/Pagination/Pagination';

const Tvshow = props => {
    const [pagenumber, setPageNumber] = useState(1);
    const {onGetTvInit} = props;
    
    useEffect(() => {  
        onGetTvInit(pagenumber);
    }, [onGetTvInit, pagenumber])

    let tv = null;
    if(props.tv)
    {
        tv = props.tv.results;
        //console.log(props.tv.results)
    }

    const pageNumberChange = pagenum => {
        setPageNumber(pagenum)
    }


    return(
        <div className="Tvshows">
            <div className="Cards">
            { tv ? tv.map(res => {
                return <Link to={'/' + res.id} key={res.id}>
                    <Cards key={res.id} cardposter={"https://image.tmdb.org/t/p/w500/"+res.poster_path}
                            title={res.name} rating={res.vote_average === 0 ? 'NA' : res.vote_average } />
                </Link>      
            }):null }
           
        </div>
            <Pagination totalPages={props.tv ? props.tv.total_pages: null} pageNumberChange={pageNumberChange}/>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        tv: state.tv.tv
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetTvInit: (pagenumber) => dispatch(getTv(pagenumber))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tvshow);