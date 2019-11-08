import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import 'prismjs/themes/prism-tomorrow.css'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <h3
                style={{
                  margin: 0,
                }}
              >
                <Link style={{ boxShadow: `none`, color: `#D2FDFF`, fontSize: 20, fontWeight: 900 }} to={node.fields.slug}>
                <small 
                  style={{
                    fontWeight: 900,
                    fontSize: 20,
                    color: `#B4DFE5`
                  }}
                >
                  [{node.frontmatter.date}]
                </small> {title}
                </Link>
              </h3>
            </article>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD.MM.YYYY")
            title
          }
        }
      }
    }
  }
`
