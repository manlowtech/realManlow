import React from 'react'
//import Cards from '../Card'
//import Img from '../../assets/banner.jpg'
import { ArrowForward} from '@material-ui/icons';
import {Button,IconButton} from '@material-ui/core'
function Featured() {
   
    return (
        <div className="cardf__wrapper">
          
          <div className="featured_card">
          <h5 className="card__header">Upcoming Events</h5>
          <hr/>
          <p className="card___content">Official Launch Of MernPress CMS</p>
          <hr/>
          <Button size="large" variant="contained"  color="primary" >Read More <IconButton><ArrowForward/></IconButton></Button>
          </div>

          <div className="featured_research">
          <h5 className="card__header">realManlow Research Data</h5>
          <hr/>
          <p className="card___content">Explore Scientific research findinds by Real manlow...</p>
          <hr/>
          <Button size="large" variant="contained"  color="secondary" >Read More <IconButton><ArrowForward/></IconButton></Button>
          </div>
         
        </div>
    )
}

export default Featured
