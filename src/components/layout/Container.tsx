import React from 'react';

const Container = ({ children, cssProperty }: any) => {
  return (
    <div className="container">
      <div className={cssProperty}>{children}</div>
    </div>
  );
};

export default Container;
