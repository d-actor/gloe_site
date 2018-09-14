import React from 'react'
import Link from 'gatsby-link'
import {
  Image,
  Menu,
} from 'semantic-ui-react';
import Logo from "../assets/images/logo.jpg";

class Header extends React.Component {

  navs = () => {
    return (
      <Menu.Menu position='right' style={styles.menu, styles.menuItem}>
        <Link to='/contact/'>
          <Menu.Item style={{color: 'white'}} name='Contact' />
        </Link>
        <Link to='/music/'>
          <Menu.Item name='Music' style={{color: 'white'}} />
        </Link>
      </Menu.Menu>
    );
  }

  render() {
    const { siteTitle } = this.props;
    return (
      <div style={styles.navBar}>
        <Menu>
          <Menu.Menu style={styles.navDiv}>
            <Link style={styles.logoContainer, styles.menuItem} to="/">
              <img src={Logo} style={styles.logo} />
            </Link>
            <h1 style={styles.menuItem}>
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
            { this.navs() }
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

const styles = {
  menuItem: {
    maxWidth: '33%',
  },
  navDiv: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    height: '4em',
    width: 'auto',
  },
  logoContainer: {
    alignSelf: 'flex-start',
  },
  menu: {
    alignSelf: 'flex-end',
  },
  navText: {
    color: 'white',
  },
  navBar: {
    background: 'black',
  },
}

export default Header

