import React from 'react';
import { navigation } from '../../components/homepage/data';
import '../../styles/Nav.css'


const Nav = () => {
  return (
    <nav className='nav ml-[390px]'>
      <ul className='flex gap-x-[42px]'>
        {navigation.map((item, index) => {
          return (
            <li key={index}>
              <a className='nav-item' href={item.href}>{item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
