
import axios from 'axios';

const api = axios.create (
    { URL: 'https://rocketseat-node.herokuapp.com/api'}
);

export default api;