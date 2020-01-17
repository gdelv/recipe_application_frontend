import React from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "../shared/Button";
const logo = require("../images/receta_logo.png");

class Nav extends React.Component {
  state = {
    modal: false
  };

  handleModal = () => {
    this.setState({ modal: !this.state.modal });
    console.log("helloworld");
  };

  renderLinks = () => {
    return (
      <nav>
        <Button
          title={<GiHamburgerMenu size={30} />}
          className="open-modal"
          onClick={() => this.handleModal()}
        />

        <NavLink exact to="/">
          <img src={logo} className="logo" alt='home-link'/>
        </NavLink>

        
      </nav>
    );
  };

  renderNavModal = () => {
    if (this.state.modal) {
      return (
        <div className='hamburger-modal'>
          <Button
            title="X"
            className="close-modal"
            onClick={() => this.handleModal()}
          />
          <div className='hamburger-modal-container'>
          {/* <NavLink exact to="/" onClick={() => this.handleModal()}>
            Home
          </NavLink> */}

          <NavLink exact to="/recipes" onClick={() => this.handleModal()}>
            all_recipes
          </NavLink>

          <NavLink exact to="/recipes/create" onClick={() => this.handleModal()}>
            post_recipe
          </NavLink>
          </div>
          <div className='overlay'></div>
        </div>
      );
    }
  };

  render() {
    return (
      <>
        {this.renderLinks()}
        {this.renderNavModal()}
      </>
    );
  }
}

export default Nav;
