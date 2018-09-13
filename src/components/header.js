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
      <Menu.Menu position='right' style={{color: 'white'}}>
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
      <div
        style={{
          background: 'black',
        }}
      >
        <Menu pointing secondary>
          <Menu.Menu>
            <img src={Logo} style={styles.logo} />
          </Menu.Menu>
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
          { this.navs() }
        </Menu>
      </div>
      )
  }
}

//const Header = ({ siteTitle }) => (
//  <div
//    style={{
//      background: 'black',
//      marginBottom: '1.45rem',
//      display: 'flex',
//      height: '4em',
//    }}
//  >
//    <Menu.Menu>
//      <img src={Logo} style={styles.logo} />
//    </Menu.Menu>
//    <div
//      style={{
//        margin: '0 auto',
//        maxWidth: 960,
//        padding: '1.45rem 1.0875rem',
//      }}
//    >
//      <h1 style={{ margin: 0 }}>
//        <Link
//          to="/"
//          style={{
//            color: 'white',
//            textDecoration: 'none',
//          }}
//        >
//          {siteTitle}
//        </Link>
//      </h1>
//    </div>
//    <Menu.Menu style={{flex: 'right'}}position="right">
//      <Link to="/contact/">
//        <Menu.Item name='Contact' style={styles.navText} />
//      </Link>
//    </Menu.Menu>
//  </div>
//)

const styles = {
  logo: {
    height: '4em',
    width: 'auto',
  },
  navText: {
    color: 'white',
  },
}

export default Header

