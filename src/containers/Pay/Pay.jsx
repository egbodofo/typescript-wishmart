import React from 'react';

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCardImage } from 'mdbreact';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';

const CheckOut = () => {
  return (
    <>
      <Navigation />
      <MDBContainer>
        <MDBRow className="d-flex justify-content-center px-2">
          <MDBCol className="card mt-3" sm="12" md="8" lg="6">
            <MDBCardImage
              top
              alt="Payment recieved"
              src="https://i.stack.imgur.com/YbIni.png"
              waves
            />
            <hr />
            <h3 className="text-center">
              Your payment has been recieved and your order is on its way!!!
            </h3>
            <MDBBtn className="btn btn-success">
              <a href={`/products`} as={`/products`}>
                Continue shopping
              </a>
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </>
  );
};

export default CheckOut;
