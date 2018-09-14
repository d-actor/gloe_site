import React from 'react';
import Link from 'gatsby-link';

class MusicPage extends React.Component {
  //TODO connect spotify/apple music/bandcamp/itunes/etc
  //direct downloads? figure out if need full react

  render() {
    return(
      <div>
        Music
        <iframe src="https://open.spotify.com/embed/artist/3WM5LP74A1mISkxx0L6kcT" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    );
  }
}

export default MusicPage;
