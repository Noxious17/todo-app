import React from 'react';
import './Header.css'; 

export default function Header() {
  const headerStyle = {
    backgroundImage: `url('https://tse4.mm.bing.net/th?id=OIP.tLGmL_34EOdFSJ2Ao5Ux8AHaDV&pid=Api&P=0&h=180')`, // Replace with your preferred image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
  };

  const textShadowStyle = {
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
    
  };

  return (
    <header style={headerStyle} className="text-center  py-5">
      <div>
        <h1 className style={textShadowStyle}>
          MY TO-DO LIST
        </h1>
        <p className="h4 mt-8" style={textShadowStyle}>
          Organize your tasks and stay productive!
        </p>
      </div>
    </header>
  );
}
