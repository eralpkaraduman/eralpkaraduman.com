const siteAddress = new URL("https://eralpkaraduman.com")

module.exports = {
  siteMetadata: {
    title: 'Eralp Karaduman',
    author: 'Eralp Karaduman',
    description: 'Personal website of Eralp Karaduman',
    siteUrl: siteAddress.href,
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
    {
      resolve: `gatsby-plugin-s3`,
      options: {
          bucketName: 'eralpkaraduman.com',
          protocol: siteAddress.protocol.slice(0, -1),
          hostname: siteAddress.hostname,
          region: 'us-east-1',
      },
    },
  ],
}
