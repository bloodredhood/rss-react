import React, { FC } from 'react';
import './Error.css';

const Error: FC = () => {
  return (
    <div className="error">
      <div className="title">Error 404</div>
      <div className="descr">
        {' '}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, fugit hic! Molestiae
        veritatis facere cupiditate eligendi quidem dicta qui! Natus veniam nulla rerum fugit porro
        eius facilis! Molestias, maxime quo.
      </div>
    </div>
  );
};

export default Error;
