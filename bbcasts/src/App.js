import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/ui/header';
import CharGrid from './components/Characters/CharGrid';


const App = () => {
  const [charcs, setCharcs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    const fetchItems = async() => {

      const result = await axios(`https://www.breakingbadapi.com/api/characters`)
      console.log(result.data)
      setCharcs(result.data)
      setIsLoading(false)
    }
    fetchItems()

  }, [])
  return ( 
    <div className = "container" >
    
    <Header />
    <CharGrid isLoading={isLoading} charcs={charcs} />
    </div>
  )
}

export default App;