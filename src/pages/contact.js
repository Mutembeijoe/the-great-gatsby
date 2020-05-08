import React from "react"
import Layout from "../components/layout"

const Contact = () => (
 <Layout>
     <h1>Contact Me</h1>
    <div>
      Email : <span> joe@testing.email.com</span>
      <br />
      GitHub:{" "}
      <span>
        {" "}
        <a href="https://github.com/Mutembeijoe" target="_blank" rel="noopener noreferrer">
          {" "}
          Github
        </a>
      </span>
    </div>
 </Layout>
)

export default Contact
