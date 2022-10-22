import React from 'react';
import { Link } from 'react-router-dom';

export const CustomLink = (props) => {
  return (
    <Link
      {...props}
      style={{
        textDecoration: 'none',
        cursor: 'pointer',
        color: 'initial',
      }}
    >
      {props.children}
    </Link>
  );
};
