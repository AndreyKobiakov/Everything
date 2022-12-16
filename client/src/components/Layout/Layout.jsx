import React from 'react';
import './Layout.css';

export default function Layout({ children, background }) {
  return (
    <div
      className="coxLayout"
      style={{
        backgroundImage: background,
      }}
    >
      {children}
    </div>
  );
}
