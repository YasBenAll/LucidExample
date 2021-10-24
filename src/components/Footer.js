/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>

        <div className="copyright" id="copyright">
        <nav>
          <ul>
            <li>
            © {new Date().getFullYear()}, Powered by Lucid Trading
            </li>
          </ul>
        </nav>

        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
