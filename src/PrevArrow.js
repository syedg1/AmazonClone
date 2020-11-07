import React from 'react'
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';

function PrevArrow(props) {
    const { style, onClick } = props
    return (
        <div
            className='slick-arrow'
            style={{...style, margin: 'auto', cursor: 'pointer'}}
            onClick={onClick}
        >
            <ArrowBackIosSharpIcon/>
        </div>
    );
}

export default PrevArrow
