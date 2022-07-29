import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

export default function Nav({onSearch}) {
  return (
    <div>
        <SearchBar onSearch = {onSearch} />
    </div>
  );
};

