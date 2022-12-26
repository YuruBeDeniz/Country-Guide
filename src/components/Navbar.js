import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar bg-primary navbar-default justify-content-center">
    <Link style={{textDecoration: 'none', color: 'black', margin:'15px'}} to='/'><h1>2022's Last Country Guide</h1></Link>
    </nav>
  )
}
