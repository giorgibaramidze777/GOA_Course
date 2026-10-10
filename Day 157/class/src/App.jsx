import { useState } from 'react'
import BooksSearch from './components/BooksSearch'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/books" element={<BooksSearch />} />
      </Routes>
    </>

  )
}

export default App
