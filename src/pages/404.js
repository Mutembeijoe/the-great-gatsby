import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const NotFound = () => (
  <Layout>
    <Head title='404'/>
    <h3>Not Found</h3>
    <Link to="/">Go Back to Home</Link>
  </Layout>
)
export default NotFound
