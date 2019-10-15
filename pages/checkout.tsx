import Checkout from '../src/containers/Checkout/Checkout';
import Footer from '../src/components/Footer/Footer';
import Navigation from '../src/components/Navigation/Navigation';
import { authInitialProps } from '../src/lib/auth';

const Check = () => {
  return (
    <>
      <Navigation />
      <Checkout />
      <Footer />
    </>
  );
};

Check.getInitialProps = authInitialProps(true, '/login');

export default Check;
