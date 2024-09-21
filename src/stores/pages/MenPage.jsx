import React from 'react'
import { menData } from '../data/men'
import Navbar from '../components/Navbar'
const MenPage = () => {
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
        {menData.map((item)=>{
            return(
                <div>
                    <div className="pageImage">
                        <img src={item.image} alt=""></img>
                    </div>
                    <div className="proModel">
                        {item.type},{item.brand}
                    </div>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default MenPage
