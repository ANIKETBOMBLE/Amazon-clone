import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Componetus/Header'
import Footer from './Componetus/Footer'
function First() {
  return (
	<>
	<Header />
	<Outlet />
	<Footer/>
	</>
  )
}

export default First