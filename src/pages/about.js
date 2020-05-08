import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const About = () => (
  <Layout>
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
