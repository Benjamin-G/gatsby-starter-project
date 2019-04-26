import React from 'react'
import {Link} from 'gatsby'

//import '../styles/components/header.module.scss'
import headerStyles from '../styles/components/header.module.scss'

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1><Link className={headerStyles.title} to="/">Gatsby Practice</Link></h1>
      <div>
        <nav>
          <ul className={headerStyles.navList}>
            {['Index','Blog','About','Contact'].map(linkGenerator)}
          </ul>
        </nav>
      </div>
    </header>
  )
}

const linkGenerator = (title, index) => {
  return title!=='Index' ? (<li key={index}><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to={'/'+title.toLowerCase()}>{title}</Link></li>) :
  (<li key={index}><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/'>Home  </Link></li>)
}

export default Header