import React from 'react';
import { Link } from 'react-router-dom';

const Nomatch = () => (
  <h1>
    404 page not found
    <br />
    <Link to='/'>Go Back Home</Link>
  </h1>
)


export default Nomatch;