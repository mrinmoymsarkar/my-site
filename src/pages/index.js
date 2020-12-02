import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"


export const query = graphql`{
allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        slug
        content
        desc
        date(formatString: "MMMM Do YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }}`
export default ({ data }) => {
  const {allStrapiBlogs : {nodes:blogs},
} = data
  return <Layout>
    <Hero />
    <Services/>
    <Jobs />
    <Blogs blogs = {blogs} title = "Latest Articles" showLink />
  </Layout>
}
// ...GatsbyImageSharpFluid
