import React from "react"
import { Link } from "gatsby"
import headerStyles from './navbar.module.scss'

const Navbar = () => (
  <header className={headerStyles.header}>
    <nav>
      <h1>
      <Link className={headerStyles.title} to='/'>
      Joe
      </Link></h1>
      <ul className={headerStyles.navList}>
        <li>
          <Link className={headerStyles.navListItem} activeClassName={headerStyles.active} to="/">Home</Link>
        </li>
        <li>
          <Link className={headerStyles.navListItem} activeClassName={headerStyles.active} to="/about">About</Link>
        </li>
        <li>
          <Link className={headerStyles.navListItem} activeClassName={headerStyles.active} to="/contact">Contact</Link>
        </li>
        <li>
          <Link className={headerStyles.navListItem} activeClassName={headerStyles.active} to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Navbar
