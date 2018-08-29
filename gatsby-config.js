module.exports = {
  siteMetadata: {
    title: 'Eralp Karaduman',
    author: 'Eralp Karaduman',
    description: 'Personal website of Eralp Karaduman',
    siteUrl: 'https://eralpkaraduman.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/index.md`,
        name: "index-markdown-content",
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-85599671-1`,
      },
    },
  ],
}
