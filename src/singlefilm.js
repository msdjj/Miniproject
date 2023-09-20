import React from 'react'
import { useParams } from 'react-router-dom'

const Singlefilm = () => {
  const {id}=useParams(0);
  return (
    <>
    <div >This is  My movies {id}</div>
    </>
  )
}

export default Singlefilm;
