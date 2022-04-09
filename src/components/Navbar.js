import React from 'react';
import { Link } from 'react-router-dom';
import NavbarDropdown from './NavbarDropdown';
import './styles/navbar.scss';
import logo from '../images/logo.svg'

import * as ReactBootStrap from "react-bootstrap"; // extension de ReactBootStrap

function Navbar() {
  return (
    <div className="sticky-top">

      <ReactBootStrap.Navbar collapseOnSelect expand="lg">
          <ReactBootStrap.Container fluid>

            <ReactBootStrap.Navbar.Brand href="/"><img alt="" src={logo} width="40" height="40" className="d-inline-block align-top"/>{' '} Multicarga </ReactBootStrap.Navbar.Brand>

            <NavbarDropdown/>

            <ReactBootStrap.Navbar.Toggle aria-controls="offcanvasNavbar" />

            <ReactBootStrap.Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
              <ReactBootStrap.Offcanvas.Header closeButton>
                <ReactBootStrap.Offcanvas.Title id="offcanvasNavbarLabel"></ReactBootStrap.Offcanvas.Title>
              </ReactBootStrap.Offcanvas.Header>

              <ReactBootStrap.Offcanvas.Body className="Offcanvas-Body">

                <ReactBootStrap.Nav className="justify-content-end flex-grow-1 pe-3">

                </ReactBootStrap.Nav>

              </ReactBootStrap.Offcanvas.Body>

            </ReactBootStrap.Navbar.Offcanvas>

          </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>

    </div>
  );
}

export default Navbar





