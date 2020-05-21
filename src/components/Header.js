import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
      <img src="../src/assets/images/icons-virus.png"></img>
        <p>COVID 19 STAT</p>
        <ul>
          <li>
            <Link to="/">Cases</Link>
          </li>
          <li>
            <Link to="/page-2/">Travel Score</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
