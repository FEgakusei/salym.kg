import PropTypes from 'prop-types'
import React from 'react'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
        <Navbar className="header">
          <div className="container">
            <NavbarBrand>
            <a className="logo" href="/">
              <span>С</span>
              <span>А</span>
              <span>Л</span>
              <span>Ы</span>
              <span>М</span>
            </a>
            </NavbarBrand>
          <div className="nav-toggle"></div>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="menu" navbar>
                <NavItem>
                  <NavLink href="/index">Блог</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/SecondPage">Кыргызча IT</NavLink>
                </NavItem>
                </Nav>
                <Input>
                  <FormControl type="text" placeholder="Сайттан издөө..." className="searchform" />
                  <Button type="submit"></Button>
                </Input>
            </Collapse>
          </div>
        </Navbar>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string, // САЛЫМ
}

Header.defaultProps = {
  siteTitle: ``,
}
 
export default Header
