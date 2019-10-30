import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import './Nowplaying.css';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {getNowPlaying} from '../../../store/actions/Home';
import Spinner from '../../UI/Spinner/Spinner';

const Nowplaying = props => {

    const {onGetNowPlayingInit} = props;
    
    useEffect(() => {
        onGetNowPlayingInit();
    }, [onGetNowPlayingInit]);

    let carousel = <Spinner />;
    if(!props.loading)
    {
         carousel = (
            <div style={{width: '100%'}}>
            <Carousel className="Carousel"
                autoPlay
                showIndicators= {false}
                in1finiteLoop
                showArrows
                emulateTouch
                >
                {props.results ?  props.results.map((img) => {
                    return (
                        <div key={img.id}>
                            <img style={{height: '100%'}}src={"https://image.tmdb.org/t/p/original/"+img.backdrop} alt="img"/>
                            <p style={{fontWeight: 'bold', color: 'green'}} className="legend">{img.title+" - "+img.rating}</p>
                        </div>
                    ) 
                })  : null}
            </Carousel>
        </div>
        );
    }

    return carousel;
}

const mapStateToProps = state => {
    return {
      results: state.home.data,
      loading: state.home.loading
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        onGetNowPlayingInit: () => dispatch(getNowPlaying())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nowplaying);