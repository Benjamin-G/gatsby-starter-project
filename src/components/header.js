import React from 'react'
import {Link} from 'gatsby'

const Header = () => {
  return (
    <header>
      <h1>Gatsby Practice</h1>
      <div>
        <nav><ul>{['Index','Blog','About','Contact'].map(linkGenerator)}</ul></nav>
      </div>
    </header>
  )
}

const linkGenerator = (title, index) => {
  return title!=='Index' ? (<li key={index}><Link to={'/'+title.toLowerCase()}>{title}</Link></li>) :
  (<li key={index}><Link to='/'>Home  </Link></li>)
}

export default Header