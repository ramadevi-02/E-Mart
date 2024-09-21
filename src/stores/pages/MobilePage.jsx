import React from 'react'
import {mobileData} from '../data/mobiles'
import Navbar from '../components/Navbar'

const MobilePage = () => {
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
        {mobileData.map((item)=>{
            return(
                <div>
                    <div className="pageImage">
                        <img src={item.image} alt=""></img>
                    </div>
                    <div className="proModel">
                        {item.company},{item.model}
                    </div>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default MobilePage
