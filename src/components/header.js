import React from 'react'
import Link from 'gatsby-link'
import {
  Image,
} from 'semantic-ui-react';
import Logo from "../assets/images/logo.jpg";

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'black',
      marginBottom: '1.45rem',
    }}
  >
    <img src={Logo} size="" style={styles.logo} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

const styles = {
  logo: {
    height: '50%',
    width: 'auto',
  }
}

export default Header

