import React from 'react'
import { booksData } from '../data/books'
import Navbar from '../components/Navbar'

const BookPage = () => {
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
        {booksData.map((item)=>{
            return(
                <div>
                    <div className="pageImage">
                        <img src={item.image} alt=""></img>
                    </div>
                    <div className="proModel">
                        {item.title},{item.author}
                    </div>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default BookPage
