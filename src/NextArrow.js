import React from 'react'
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';

function NextArrow(props) {
    const { style, onClick } = props
    return (
        <div
            className='slick-arrow'
            style={{...style, margin: 'auto', cursor: 'pointer'}}
            onClick={onClick}
        >
            <ArrowForwardIosSharpIcon/>
        </div>
    );
}

export default NextArrow