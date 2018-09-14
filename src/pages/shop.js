import React from 'react';
import Link from 'gatsby-link';
import {
  Image,
} from 'semantic-ui-react';
import vestige from '../assets/images/Vestige_Cover.jpg';

class ShopPage extends React.Component {
  //TODO tees, cds, downloads, link to bigcartel. npm pckg?

  render() {
    return(
      <div>
        Merch
        <br />
        <Image src={vestige} style={styles.cd} />
      </div>
    );
  }
}

const styles = {
  cd: {
    height: '15em',
    width: 'auto',
  }
}

export default ShopPage;

