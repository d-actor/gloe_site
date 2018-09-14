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
      <div style={styles.menu}>
        <Menu.Menu position='right' style={styles.menuItem, styles.navDiv}>
          <Link to='/contact/'>
	          <Menu.Item name='Contact' style={{color: 'white'}} />
          </Link>
          <Link to='/music/'>
            <Menu.Item name='Music' style={{color: 'white'}} />
          </Link>
          <Link to='/shop/'>
            <Menu.Item name='Shop' style={{color: 'white'}} />
          </Link>
          <Link to='/events/'>
            <Menu.Item name='Events' style={{color: 'white'}} />
          </Link>
        </Menu.Menu>
      </div>
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
    //TODO make this work
    '&:hover': {
      background: '#fff',
      color: '#648880',
    },
  },
  navDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    height: '3em',
    width: 'auto',
    position: 'absolute',
    top: '0',
  },
  logoContainer: {
    alignSelf: 'flex-start',
  },
  menu: {
    alignSelf: 'flex-end',
    width: '20%',
    paddingRight: '1em',
  },
  navText: {
    color: 'white',
  },
  navBar: {
    background: 'black',
  },
}

export default Header

