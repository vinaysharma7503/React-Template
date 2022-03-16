import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap'

interface Props {

}

const logout = () => {
  sessionStorage.setItem("token", '')
}

const header = (props: Props) => {

  return (
    <div className='absolute top-0 w-full z-10' style={{ height: '8vh' }} >
      <Navbar
        color="light"
        expand="md"
        light
      >
        <NavbarBrand href="/">
          Welcome to Dashboard
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() { }} />
        <Collapse navbar>
          <Nav
            className="me-auto"
            navbar
          >
          </Nav>
          <NavLink to='/' className='btn btn-warning' onClick={() => logout()}>
            Logout
          </NavLink>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default header
