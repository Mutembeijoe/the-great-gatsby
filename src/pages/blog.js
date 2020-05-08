import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"

const Blog = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              author
              date
            }
            html
          }
        }
      }
    }
  `)
  console.log(edges[0].node)

  return (
    <Layout>
      <h1>Blog Posts</h1>

      <ol>
        {edges.map(({ node: { frontmatter: { title, date } } }) => (
          <li>
            <span style={{ fontSize: "1.5rem" }}>{title} </span>
            <span>{date}</span>
          </li>
        ))}
      </ol>
      <p>Blog posts will go here</p>
    </Layout>
  )
}

export default Blog
