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
        <NavLink exact to="/">
          <img src={logo} className="logo" />
        </NavLink>

        <Button
          title={<GiHamburgerMenu size={50} />}
          className="open-modal"
          onClick={() => this.handleModal()}
        />
      </nav>
    );
  };

  renderNavModal = () => {
    if (this.state.modal) {
      return (
        <div>
          <Button
            title="X"
            className="close-modal"
            onClick={() => this.handleModal()}
          />
          <NavLink exact to="/">
            Home
          </NavLink>

          <NavLink exact to="/recipes">
            all_recipes
          </NavLink>

          <NavLink exact to="/recipes/create">
            post_recipe
          </NavLink>
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
