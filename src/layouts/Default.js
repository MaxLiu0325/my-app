import React from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

import useLocalState from "../hooks/use-local-state";

const Navbar = styled.div`
  background-color: skyblue;
`;

const Footer = styled.div`
  background-color: lightgreen;
`;

const DefaultLayout = ({ children }) => {
  const { themeColor, setThemeColor } = useLocalState();
  // const style = css`
  //   background-color: ${themeColor};
  // `;
  const style = css({ backgroundColor: themeColor });
  return (
    <div css={style}>
      <Navbar>
        <div>Navbar</div>
        <Link css={linkStyle} to="/profile">
          Profile
        </Link>
        <Link css={linkStyle} to="/products">
          Product List
        </Link>
      </Navbar>
      {children}
      <Footer>
        Footer
        <button onClick={() => setThemeColor("white")}>White</button>
        <button onClick={() => setThemeColor("red")}>Red</button>
        <button onClick={() => setThemeColor("pink")}>Pink</button>
      </Footer>
    </div>
  );
};

export default DefaultLayout;

const linkStyle = css`
  margin-right: 10px;
`;
