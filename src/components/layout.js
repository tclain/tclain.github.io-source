import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Root } from '../styled/index'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Root>{children}</Root>}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
