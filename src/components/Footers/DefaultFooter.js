/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <div style={{float: 'right'}}>
            Coded with love ❤️
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
