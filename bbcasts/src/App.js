import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/ui/header';
import charGrid from './components/Characters/charGrid';


const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    const fetchItems = async() => {

      const result = await axios(`https://www.breakingbadapi.com/api/characters`)
      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()

  }, [])
  return ( 
    <div className = "container" >
    
    <Header />
    <charGrid isLoading={isLoading} items={items} />
    </div>
  )
}

export default App;