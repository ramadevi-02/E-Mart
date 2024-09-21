import React from 'react'
import { tvData } from '../data/tv'
import Navbar from '../components/Navbar'
const TvPage = () => {
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
        {tvData.map((item)=>{
            return(
                <div>
                    <div className="pageImage">
                        <img src={item.image} alt=""></img>
                    </div>
                    <div className="proModel">
                        {item.brand},{item.model}
                    </div>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default TvPage
