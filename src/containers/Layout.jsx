import React from 'react'



export const Layout = (props) => {
  return (
    <div className='flex'>
        <div>Sidebar</div>
        {props.children}
    </div>
  )
}
