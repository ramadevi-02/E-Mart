import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './stores/pages/LandingPage'
import MobilePage from './stores/pages/MobilePage'
import AcPage from './stores/pages/AcPage'
import BookPage from './stores/pages/BookPage'
import CompPage from './stores/pages/CompPage'
import FridgePage from './stores/pages/FridgePage'
import MenPage from './stores/pages/MenPage'
import SpeakerPage from './stores/pages/SpeakerPage'
import TvPage from './stores/pages/TvPage'
import WatchPage from './stores/pages/WatchPage'
import WomanPage from './stores/pages/WomanPage'
import MobileSingle from './stores/singles/MobileSingle'
import UserCart from './stores/usercart'
import AcSingle from './stores/singles/AcSingle'
import ComputerSingle from './stores/singles/ComputerSingle'
import MenSingle from './stores/singles/MenSingle'
import WatchSingle from './stores/singles/WatchSingle'
import WomanSingle from './stores/singles/WomanSingle'
import FridgeSingle from './stores/singles/FridgeSingle'




const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element= { <LandingPage />}/>
        <Route path='/mobiles' element= {<MobilePage /> }/>
        <Route path='/ac' element= {<AcPage /> }/>
        <Route path='/book' element= {<BookPage /> }/>
        <Route path='/computer' element= {<CompPage /> }/>
        <Route path='/fridge' element= {<FridgePage /> }/>
        <Route path='/men' element= {<MenPage /> }/>
        <Route path='/speaker' element= {<SpeakerPage /> }/>
        <Route path='/tv' element= {<TvPage /> }/>
        <Route path='/watch' element= {<WatchPage /> }/>
        <Route path='/women' element= {<WomanPage /> }/>

             <Route path='/mobiles/:id'  element={<MobileSingle />} />
             <Route path='/cart' element = {<UserCart />} />

            <Route path='/ac/:id' element={<AcSingle />} />
            <Route path='/computers/:id' element = {<ComputerSingle />} />
      <Route path='/men/:id' element = {<MenSingle />} />
      <Route path='/watch/:id' element = {<WatchSingle />} />
      <Route path='/woman/:id' element = {<WomanSingle />} />
      <Route path='/fridge/:id' element = {<FridgeSingle />} />

      </Routes>
    </div>
  )
}

export default App
