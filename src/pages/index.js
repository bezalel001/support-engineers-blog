import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Michael's Answers</h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>

      {data.allMarkdownRemark.edges.map(({ node }) => {
        return (
          <div key={node.id}>
            <span>
              {node.frontmatter.title} - {node.frontmatter.date}
            </span>
            <p>{node.excerpt}</p>
          </div>
        )
      })}
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          excerpt
        }
      }
      totalCount
    }
  }
`
