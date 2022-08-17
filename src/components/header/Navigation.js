import React from 'react'
import {Navbar, NavbarBrand} from 'reactstrap';

function Navigation() {
  return (
    <div>
        <Navbar dark color='dark'>
            <div className="container">
                  <NavbarBrand href='/'>Bohubrihi Restaurant</NavbarBrand>
            </div>
        </Navbar>
    </div>
  )
}

export default Navigation