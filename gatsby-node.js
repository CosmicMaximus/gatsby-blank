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
