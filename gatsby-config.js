module.exports = {
  siteMetadata: {
    title: 'Gatsby Practice',
    author: 'Benjamin Geyer'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ]
}