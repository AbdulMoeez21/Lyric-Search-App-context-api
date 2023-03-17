import React from 'react'

const Layout = (props) => {
  return (
   <div> <nav className='navbar navbar-dark bg-dark mb-5'>
    <span className="navbar-brand mb-0 h1 mx-auto">
      LyricFinder
    </span>
  </nav>
  
  
  {props.children}</div>
  )
}

export default Layout
