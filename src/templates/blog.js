import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const BlogTemplate = props => {
  const { data: { markdownRemark: { frontmatter: { title, date }, html} } } = props;
  return (
    <Layout>
      <h1>{title}</h1>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{__html:html}}></div>
    </Layout>
  )
}

export default BlogTemplate
