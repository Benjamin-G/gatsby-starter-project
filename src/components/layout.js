import React from 'react'

import Header from './header'
import Footer from './footer'

//Entry point for CSS and styling
import '../styles/index.scss'
import layoutStyles from '../styles/components/layout.module.scss'

const Layout = (props) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header/>
        {props.children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout