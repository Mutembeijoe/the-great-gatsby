import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"
import { useStaticQuery, graphql } from "gatsby"

const Layout = props => {
    const {site:{siteMetaData:{title,author}}} = useStaticQuery(graphql`
    query{
      site {
        siteMetaData {
          author
          title
        }
      }
    }
  `)
  
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Navbar title={title} />
        {props.children}
      </div>
      <Footer author={author} />
    </div>
  )
}

export default Layout
