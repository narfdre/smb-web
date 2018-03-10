import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'font-awesome/css/font-awesome.min.css'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div
    style={{
      backgroundColor: '#fff',
      height: '100vh'
    }}
  >
    <Helmet
      title="Swiss Master Builders"
      meta={[
        {
          name: 'description',
          content: 'Swiss Master Builders - Houston Based Contractors'
        },
        {
          name: 'keywords',
          content:
            'Construction, Contractors, Houston, Houston Texas, Drywall, commerical interiors, paint, acoustical cielings, framing, demolition, smbuilt, smb, swiss master builders'
        }
      ]}
    />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
