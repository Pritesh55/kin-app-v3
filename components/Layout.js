import React, { Children } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = props => (
  <>

    <Navbar></Navbar>

    {props.children}s

    <Footer></Footer>


  </>
);


export default Layout;