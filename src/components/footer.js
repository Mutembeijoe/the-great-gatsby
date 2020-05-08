import React from 'react'

const Footer = (props)=>(

    <div>
        <span>{props.author} &copy;{new Date().getFullYear()}</span>
    </div>
)

export default Footer;
