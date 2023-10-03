import React from 'react'
import Sidebar from '../../../compnents/sidebar/sidebar'
import SinglePost from './singlePost/singlePost'
import "./single.css"

function Single() {
  return (
    <div className='single'>
        <SinglePost/>
     <Sidebar/>
    </div>
  )
}

export default Single
