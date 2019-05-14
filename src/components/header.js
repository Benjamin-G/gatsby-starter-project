import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

//import '../styles/components/header.module.scss'
import headerStyles from '../styles/components/header.module.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
    query{site{siteMetadata{title}}}
  `)

  return (
    <header className={headerStyles.header}>
      <h1><Link className={headerStyles.title} to="/">{data.site.siteMetadata.title}</Link></h1>
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