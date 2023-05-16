import React from "react"

import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import {AppProvider} from './Context'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import BookList from "./Components/BookList";
import BookDetails from "./Components/BookDetails";


function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home />}>
            <Route path = "about" element = {<About />} />
            <Route path = "book" element = {<BookList />} />
            <Route path = "/book/:id" element = {<BookDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
