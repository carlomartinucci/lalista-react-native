let ENDPOINT = 'http://192.168.1.7:3000'

if (process.env.NODE_ENV === 'production') {
  ENDPOINT = 'https://lalista-be.herokuapp.com';
}

const settings = {
  env: process.env.NODE_ENV,
  ENDPOINT,
};

export default settings;
