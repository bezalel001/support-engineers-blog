import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`
const QuestionTitle = styled.h3`
  margin-bottom: 20px;
  color: blue;
`
export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Michael's Answers</h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>

      {data.allMarkdownRemark.edges.map(({ node }) => {
        return (
          <div key={node.id}>
            <BlogLink to={node.fields.slug}>
              <QuestionTitle>
                {node.frontmatter.title} - {node.frontmatter.date}
              </QuestionTitle>
            </BlogLink>
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
            date
          }
          fields {
            slug
          }
          excerpt
        }
      }
      totalCount
    }
  }
`
