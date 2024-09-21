import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './stores/pages/LandingPage'
import MobilePage from './stores/pages/MobilePage'
import AcPage from './stores/pages/AcPage'
import BookPage from './stores/pages/BookPage'
import ComputerPage from './stores/pages/ComputerPage'
import FridgePage from './stores/pages/FridgePage'
import MenPage from './stores/pages/MenPage'
import SpeakerPage from './stores/pages/SpeakerPage'
import TvPage from './stores/pages/TvPage'
import WatchPage from './stores/pages/WatchPage'
import WomenPage from './stores/pages/WomenPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element= { <LandingPage />}/>
        <Route path='/mobiles' element= {<MobilePage /> }/>
        <Route path='/ac' element= {<AcPage /> }/>
        <Route path='/book' element= {<BookPage /> }/>
        <Route path='/computer' element= {<ComputerPage /> }/>
        <Route path='/fridge' element= {<FridgePage /> }/>
        <Route path='/men' element= {<MenPage /> }/>
        <Route path='/speaker' element= {<SpeakerPage /> }/>
        <Route path='/tv' element= {<TvPage /> }/>
        <Route path='/watch' element= {<WatchPage /> }/>
        <Route path='/women' element= {<WomenPage /> }/>

      </Routes>
    </div>
  )
}

export default App
