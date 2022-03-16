import React from 'react'

const CharItem = ({charc}) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={charc.img} alt='' />
        </div>
        <div className='card-back'>
          <h1>{charc.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {charc.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {charc.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {charc.birthday}
            </li>
            <li>
              <strong>Status:</strong> {charc.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
  


export default CharItem