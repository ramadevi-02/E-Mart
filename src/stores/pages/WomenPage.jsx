import React from 'react'
import { womanData } from '../data/woman'
import Navbar from '../components/Navbar'
const WomenPage = () => {
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
        {womanData.map((item)=>{
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

export default WomenPage
