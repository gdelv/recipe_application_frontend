import React from "react";
import "./App.css";
import { Routes } from "./routes";
import Nav from "./shared/Nav";
import Footer from "./shared/Footer";
import { Button } from "./shared/Button";

class App extends React.Component {
  state = {
    mode: ""
  };

  handleDarkMode = () => {
    if ((this.state.mode.length === 0)) {
      this.setState({ 
        mode: "dark-mode"
      });
      console.log("helllllo dark world");
    }
    else if (this.state.mode.length > 0)
    this.setState({
      mode: ""
    })
    console.log("helllllo light world");

  };

  render() {
    return (
      <div className={this.state.mode}>
        <header>
          <Button
            title="DARK"
            className="dark-mode-button"
            onClick={() => this.handleDarkMode()}
          />
          <Nav />
        </header>

        <main>
          <Routes />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
