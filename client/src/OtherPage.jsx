import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <p>I am on some other page</p>
      <Link to="/">Home</Link>
    </div>
  );
};