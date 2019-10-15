import React from 'react';
import { MDBContainer, MDBFooter } from 'mdbreact';
import styled from 'styled-components';

const Foot = styled(MDBFooter)`
  position: relative;
  width: 100%;
  background-color: #3f51b5;
`;

const Footer = () => {
  return (
    <Foot className="font-small pt-4 mt-4">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          {/* <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a> */}
          <p className="text-monospace">
            {' '}
            Wishmart Designed by Oluwafemi Egbodofo with Stutord
          </p>
        </MDBContainer>
      </div>
    </Foot>
  );
};

export default Footer;
