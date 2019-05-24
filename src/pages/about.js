import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About Me"/>
      <h1>About</h1>
      <p>This is a test project for learning Gatsby JS</p>
      {
      //<p>Need a developer <a href='/contact'>Contact Me</a></p> 
      // Below is the optimized way of connecting pages
      }
      <p>Need a developer <Link to='/contact'>Contact Me</Link></p>
    </Layout>
  )
}

export default AboutPage