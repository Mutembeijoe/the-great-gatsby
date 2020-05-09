import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import blogStyles from './blog.module.scss'
import Head from "../components/head"

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
            fields{
              slug
            }
          }
        }
      }
    }
  `)
  console.log(edges[0].node)

  return (
    <Layout>
    <Head title='Blog'/>
      <h1>Blog Posts</h1>

      <ol className={blogStyles.posts}>
        {edges.map(({ node: { frontmatter: { title, date }, fields:{slug} } }) => (
          <li className={blogStyles.post}>
            <Link to={`/blog/${slug}`}>
            <h2>{title}</h2>
            <span>{date}</span>
            </Link>
            
            
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default Blog
