const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type == "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve(`./src/templates/blog.js`)

  const {data:{allMarkdownRemark:{edges}}} = await graphql(
    `
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  edges.forEach(edge => {
      createPage({
          path:`/blog/${edge.node.fields.slug}`,
          component:blogTemplate,
          context:{
              slug:edge.node.fields.slug
          }
      })
  })
}
