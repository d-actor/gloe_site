import React from 'react'
import Link from 'gatsby-link'
import {
  Image,
  Menu,
} from 'semantic-ui-react';
import Logo from "../assets/images/logo.jpg";

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'black',
      marginBottom: '1.45rem',
      display: 'flex',
      height: '4em',
    }}
  >
    <Menu.Menu>
      <img src={Logo} style={styles.logo} />
    </Menu.Menu>
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
    height: '4em',
    width: 'auto',
  },
}

export default Header

