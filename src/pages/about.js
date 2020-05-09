import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const About = () => (
  <Layout>
  <Head title='About Me'/>
    <h1>About Me</h1>
    <div>
      Hi there my name is Joe
      <br />I am full-stack web developer
    </div>
    <p>
      Need a developer? <Link to="/contact">Contact Me</Link>
    </p>
  </Layout>
)

export default About
