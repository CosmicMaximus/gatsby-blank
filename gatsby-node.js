const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allWpPage {
        nodes {
          title
          content
          slug
        }
      }
      allWpPost(sort: { fields: [date] }) {
        nodes {
          title
          excerpt
          content
          slug
        }
      }
    }
  `).then((result) => {
    result.data.allWpPage.nodes.forEach((node) => {
      if (node.slug !== "home" && node.slug !== "gallery")
        createPage({
          path: node.slug,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            slug: node.slug,
          },
        });
    });

    result.data.allWpPost.nodes.forEach((node) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          slug: node.slug,
        },
      });
    });
  });
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /jquery.ripples/,
            use: loaders.null(),
          },
          {
            test: /bootstrap/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
