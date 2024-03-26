import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Header from './Header'

import CardData from './CardData'
import CardDetails from './CardDetails';
import Cards from './Cards';

const App = () => {
  return (
    <BrowserRouter>
        <Header/>
      <Routes>
      <Route path='/cards' element={<Cards/>}/>
        <Route path='/cardData' element={<CardData/>}/>
        <Route path='/carddetails/:id' element={<CardDetails/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App