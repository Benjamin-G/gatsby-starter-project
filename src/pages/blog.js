import React from 'react'
import Layout from '../components/layout'
import { Link, useStaticQuery } from 'gatsby'

import blogStyles from '../styles/pages/blog.module.scss'
import Head from "../components/head"


const BlogPage = () => {
  /* markdownRemark, using markdown files 
  
  const data = useStaticQuery(graphql`
  query {
          allMarkdownRemark {
            edges {
              node {
                frontmatter{
                  title
                  date
                }
                fields{
                  slug
                }
              }
            }
          }
        }
  `) */

  const data = useStaticQuery(graphql`query {
    allContentfulBlogPost ( sort: { fields: publishedDate, order: DESC }) {
    edges {
      node {
        title
        slug
        publishedDate(formatString:"MMMM Do, YYYY")
      }
    }
  }
}
  `)
/*...data.allMarkdownRemark.edges,
  const dataTotal = [ ...data2.allContentfulBlogPost.edges, ...data.allMarkdownRemark.edges]

  console.log(dataTotal)*/

  return (
    <Layout>
      <Head title="Blogs" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge,index)=> (
          <li key={index} className={blogStyles.post}>
            <Link to={`/blog/${edge.node.slug}`}>
              <h2>{edge.node.title}</h2>
              <p>{edge.node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage