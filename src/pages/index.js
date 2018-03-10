import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/smb-logo.png'

const IndexPage = () => (
  <div className="center-wrapper">
    <div className="logo-wrapper">
      <img src={logo} />
      <a href="/about">About Us</a>
    </div>
  </div>
)

export default IndexPage
