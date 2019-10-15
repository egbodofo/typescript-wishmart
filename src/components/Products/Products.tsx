import React, { useState, useEffect } from 'react';
import axios from '../../axios-orders';
import Body from './Body/Body';
import Footer from '../Footer/Footer';
import Link from 'next/link';
import cookie from 'js-cookie';
import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from 'mdbreact';
import { Navigation } from '../Navigation/Navigation';

const Products = () => {
  const [product, setProduct] = useState<[]>([]);
  const user = cookie.get('user');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/products');
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const tabRow = () => {
    return (
      product &&
      product.map(function(object, i) {
        return <Body obj={object} key={i} />;
      })
    );
  };

  const userLinks = (
    <p className="lead">
      <MDBBtn outline color="primary" className="mb-5">
        <MDBIcon icon="clone" className="mr-2"></MDBIcon>{' '}
        <Link href="/new">
          <a>Add New Product</a>
        </Link>
      </MDBBtn>
    </p>
  );

  const guestLinks = <div></div>;

  return (
    <>
      <Navigation />
      <MDBContainer className="mt-3 text-center">
        <MDBRow>
          <MDBCol>
            <MDBJumbotron className="px-2 mt-2">
              <h3 className="h3 display-3">Wismart products</h3>
              <hr className="my-2" />
              {user ? userLinks : guestLinks}
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>

        <MDBRow>{tabRow()}</MDBRow>
      </MDBContainer>
      <Footer />
    </>
  );
};

export default Products;
