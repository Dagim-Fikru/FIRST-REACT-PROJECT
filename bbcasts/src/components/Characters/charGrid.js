import React from 'react'
import CharItem from './CharItem'
import Spinner from '../ui/Spinner'

const CharGrid = ({ charcs, isLoading}) => {
  return isLoading ? (<Spinner />) : (<section className='cards'>

      {charcs.map(charc => (
          <CharItem key={charc.char_id} charc={charc}></CharItem>
      ))}

  </section>)
}

export default CharGrid