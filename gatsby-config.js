module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `EB Gifts`,
        short_name: `EB Gifts`,
        start_url: `/`,
        lang: `en`,
        description: `Can't find the time to pick up birthday or Christmas presents? Can't decide what to buy? EB Gifts provides gift buying and wrapping services for any occasion.`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        orientation: `portrait`,
        icon: `src/assets/images/fav.png`,
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://ebgifts.us4.list-manage.com/subscribe/post?u=a313061d84ff525d7d2572bd1&amp;id=d58ddf15d9",
      },
    },
  ],
};
