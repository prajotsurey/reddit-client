import React, { useState } from 'react'
import NavBar from './NavBar'
import SideBar from './Sidebar'

const Header = () => {

  const [sideBarOpen,setSideBarOpen] = useState(false)

  const toggle = (arg:boolean) => {
    setSideBarOpen(arg)
  }

  return(
    <header>
      <NavBar toggle={toggle}/>
      <SideBar sideBarOpen={sideBarOpen} toggle={toggle}/>
    </header>
  )
}

export default Header