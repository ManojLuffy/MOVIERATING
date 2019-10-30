import React, {useState, useEffect} from 'react';
import './Pagination.css';

const Pagination = props => {
    const [pagenum, setPagenum] = useState(1);

    const {pageNumberChange} = props;

    useEffect(() => {
        pageNumberChange(pagenum)
    }, [pageNumberChange, pagenum]) 

    const handlePagenum = e => {
        if(e.target.value === 0 || e.target.value > 500 || e.target.value < 0)
        return;
        setPagenum(e.target.value)
    }

    const nextButtonHandler = () => {
        if(pagenum >= 500)
        return;
        setPagenum(Number(pagenum) + 1)
    }

    const prevButtonHandler = () => {
        if(pagenum <= 1)
        return
        setPagenum(pagenum - 1)
    }

    return (
        <div className="pagination">
            <button onClick={prevButtonHandler}> Previous </button>
            <div className="pagenumber">
                <label> page </label>
                <input type="number" onChange={handlePagenum} value={pagenum} min="1" max={props.totalPages}></input>
                <label> of {props.totalPages} </label>
                {/* <input style={{backgroundColor: 'green'}} type="button" value="Go" onClick={() => props.pageNumberChange(pagenum)}/> */}
            </div>
            <button onClick={nextButtonHandler}> Next </button>
        </div>
    );
}

export default Pagination;