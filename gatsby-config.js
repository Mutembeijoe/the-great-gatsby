/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title:"Gatsby Blog",
    author:"Ndirangu Joe"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve:'gatsby-source-filesystem',
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve:'gatsby-transformer-remark',
      options:{
        plugins:[
          'gatsby-remark-relative-images',
          {
            resolve:'gatsby-remark-images',
            options:{
              maxWidth:750,
              linkImagesToOriginal:false
            }
          }
        ]
      }
    }
  ]
}
