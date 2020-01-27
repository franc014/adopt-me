import React from "react";
import { Link } from "@reach/router";

import { css } from "@emotion/core";

const NavBar = () => (
  <header
    css={css`
      background: #3f3fc4;
      padding: 15px;
    `}
  >
    <Link to="/">Adopt me</Link>
    <span role="img" aria-label="logo">
      🐩
    </span>
  </header>
);

export default NavBar;
