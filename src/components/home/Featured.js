import React from 'react'
import Cards from '../Card'
import Img from '../../assets/banner.jpg'
function Featured() {
    const Arr = [
        {name:"heloooo"},
        {name:"heloooo"},
        {name:"heloooo"}
    ]
    return (
        <div>
           <hr/>
          
           
        { Arr.map((x,i)=>
         <div className="wrapperCd">
        <Cards Content={x.name} Image={Img} Value1={x.name} Value2={x.name} />
        </div>
        )}
         
        </div>
    )
}

export default Featured
