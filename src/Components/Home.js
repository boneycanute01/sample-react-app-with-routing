import logo2 from './03_512.png';
import '../App.css';
import React from 'react'

function Home() {
  return (
    <header className="App-header">
        <img src={logo2} className="App-logo" alt="logo" />
        <h1 className='tagline'>Home</h1>
      </header>
  )
}

export default Home