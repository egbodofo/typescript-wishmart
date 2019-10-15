import axios from '../../axios-orders';
import cookie from 'js-cookie';

export function newProduct(event: any) {
  return (dispatch: any) => {
    const token = cookie.get('jwtToken');
    return axios.post('/products', event, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
}
