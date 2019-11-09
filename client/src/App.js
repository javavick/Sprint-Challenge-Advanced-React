import React from "react";
import axios from "axios";
import "./App.css";
import PlayerMap from "./components/PlayerMap.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then((res) => {
        console.log(res.data);
        this.setState({ players: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <PlayerMap players={this.state.players} />
      </div>
    );
  }
}

export default App;
