import React from 'react'
import './Loading.css'
import spin from './spin.svg'

const Loading = () => {
  return (
    <div className="Loading">
      <img src={spin} />
    </div>
  )
}

export default Loading
