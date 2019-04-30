import React, { Component } from 'react'

import {
    Navbar,
    NavbarBrand,
    Container
} from 'reactstrap'


export class AppNav extends Component {

    state = {
        isOpen: false
    }   

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm"  className="mb-5">
            <Container>
                <NavbarBrand href='/clickygame/'>
                    Clicky Game by Emerson
                </NavbarBrand>
            </Container>
        </Navbar>
      </div>
    )
  }
}

export default AppNav
