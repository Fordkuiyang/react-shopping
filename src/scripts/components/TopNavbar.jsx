import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import GoodCartList from "../containers/GoodCartList";
import EnshrineGoods from "../containers/EnshrineGoods"
import SearchInput from "../containers/SearchInput";

class TopNavbar extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark" className="navposition">
          <Navbar.Brand href="/#">GUCCI官方商城</Navbar.Brand>
          <SearchInput />
          <Nav className="ml-auto">
            <GoodCartList />
          </Nav>
        </Navbar>
      </>
    );
  }
}

export default TopNavbar;
