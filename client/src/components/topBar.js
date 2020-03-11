import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleMenuToggle = this.handleMenuToggle.bind(this);
  }

  handleMenuToggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">React</NavbarBrand>
        <NavbarToggler onClick={this.handleMenuToggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/ChanVinSheng">Chan Vin Sheng</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/kychok">KY Chok</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Timothy">Timothy</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/LiewYihChan">Liew Yih Chan</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/DotaAPI">Dota2</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/budget">Budget Tracker</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/budget/create">Add Expense</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/user">Create User</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
