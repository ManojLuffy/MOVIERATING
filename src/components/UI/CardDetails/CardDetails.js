import React, {useEffect} from 'react';
import './CardDetails.css';
import {connect} from 'react-redux';


//import ReactPlayer from 'react-player'
import { getCardDetails } from '../../../store/actions/CardDetails';

const CardDetails = props => {

    const {onGetCardDetailsInit} = props;
    
    useEffect(() => {  
        onGetCardDetailsInit(props.match.params.id, props.match.params.type);
    }, [onGetCardDetailsInit, props.match.params.id, props.match.params.type])
    
    let CardDetails = null;
    if(props.CardDetails)
    {
        CardDetails = props.CardDetails;
        console.log(CardDetails)
    }

    return (
        <div className="CardDetails">
                { CardDetails ? 
                    
                    <div className="main">
                        <img src={"https://image.tmdb.org/t/p/w500/" + CardDetails.poster_path} alt="details"/>
                        <div className="movieDetails">
                            <h2>{CardDetails.original_title? CardDetails.original_title : CardDetails.original_name}</h2>
                            <p>{CardDetails.overview}</p>

                            <div className="listcontent">
                                <strong>Genre: </strong>
                                    {CardDetails.genres.map((g,i) => {
                                        if(i === CardDetails.genres.length-1)
                                        {
                                            return g.name
                                        }
                                        else {
                                            return g.name+", "
                                        }
                                        
                                    })}
                            </div>

                            <div className="listcontent">
                                <strong>Actors: </strong>
                                    {CardDetails.credits.cast.map((a,i) => {
                                        if(i === CardDetails.genres.length-1)
                                        {
                                            return a.name
                                        }
                                        else {
                                            return a.name+", "
                                        }
                                    })}
                            </div>
                            {
                                CardDetails.credits.crew[0] ? 
                                <div className="listcontent">
                                <strong>Director: </strong>
                                    {CardDetails.credits.crew[0].name}
                                </div>
                                :
                                <div className="listcontent">
                                <strong>Director: </strong>
                                    {CardDetails.created_by[0].name}
                                </div>
                            }
                            
                            <div className="listcontent">
                                <strong>Rating: </strong>
                                    {CardDetails.vote_average}
                            </div>
                            {CardDetails.release_date ? 
                            <div className="listcontent">
                            <strong>Release Date: </strong>
                                {CardDetails.release_date}
                            </div>
                            :
                            <div className="listcontent">
                                <strong>Seasons: </strong>
                                    {CardDetails.seasons.length}
                            </div>
                            }
                            
                            

                        </div>
                    </div>
                    : null }
                    
                    <br/>
                   {/* <h3>More Info </h3>
                    <div className="bottom"> 
                        <ReactPlayer url='https://www.youtube.com/watch?v=oCBDl58lBoU' 
                            playing
                            controls
                            light />
                       
                    </div> */}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        CardDetails: state.carddetails.carddetails
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetCardDetailsInit: (id, type) => dispatch(getCardDetails(id, type))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardDetails);