import React from 'react'
import Image from '../../assets/banner.jpg'
import Logo from '../../assets/logo.png'
//import style from './banner.module.css'
import { ArrowForward} from '@material-ui/icons';
import {Button,IconButton} from '@material-ui/core'
import {Link} from 'react-router-dom'
function Banner() {
    return (
        <div className="container">
        
            <img className="imgBn" src={Image} alt="Banner Img" />
            <img className="logoImg" src={Logo} alt="logo Imag"/>
            <div className="welcomeTxT">
            <p className="welcomeP">Welcome to realManlow Blog</p>
            </div>
            <div className="BannerBtns">
            <Link className="btn__link" to="/explore">
            <Button size="large" variant="contained"  color="primary">Explore <IconButton><ArrowForward/></IconButton> </Button></Link>
            <Link className="btn__link" to="/about_us">
             <Button size="large" variant="contained"  color="secondary">About Us <IconButton><ArrowForward/></IconButton></Button></Link>
            </div>
           
        </div>
    )
}

export default Banner
