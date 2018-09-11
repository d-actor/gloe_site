module.exports = {
  siteMetadata: {
    title: 'Gloe',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
  ],
}
