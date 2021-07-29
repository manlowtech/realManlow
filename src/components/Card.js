import React from 'react'
import { Button } from '@material-ui/core';

function Card({Image,Content,Value1,alt,Value2,...props}) {
    return (
        <div className="cardContainer"> 
            <img className="cardImg" src={Image} alt={alt} />
            <p className="CardImgContent">{Content}</p>
            <div className="CardBtnContainer"> 
            <Button className="cardBtn" variant="contained" color="primary">{Value1}</Button>
            <Button className="cardBtn" variant="contained" color="secondary">{Value2}</Button>
            </div>
           
        </div>
    )
}

export default Card
