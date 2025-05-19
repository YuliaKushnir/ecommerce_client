import '../styles/components/navbar.css'
import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CoffeeOutlinedIcon from '@mui/icons-material/CoffeeOutlined';

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='navbar-wrapper'>
            <div className='navbar-left'>
              {/* <span className='language'>EN</span> */}
              <div className='logo'>
                <CoffeeOutlinedIcon/>
              </div> 
            </div>

            <div className='navbar-center'>
              <div className='search-container'>
                <SearchIcon style={{ color:"gray" }}/>
                <input type="text" placeholder="search" className='input-search'></input>
              </div>
            </div>

            <div className='navbar-right'>
              <div className='menu-item'>Register</div>
              <div className='menu-item'>Sign in</div>
              <div className='menu-item'>
                <Badge badgeContent={1} 
                  sx={{"& .MuiBadge-badge": {backgroundColor: "brown"}}}>
                  <ShoppingBagOutlinedIcon/>
                </Badge>
              </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar
