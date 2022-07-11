import React, {Component} from "react";
import fruit from "./img-desafio/Maçã";

class App extends Component{

  state = {
    name: "Izaias Junior",
    age: 27,
    favoriteFood: "churrasco",
    favoriteMusic:["Last Night", "Living on a Prayer", "Apologize"]
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h2>{this.state.age}</h2>
        <h3>{this.state.favoriteFood}</h3>
        <h4>Fruta Favorita</h4>
        <img src={fruit} title="Maçã" alt="Maçã-img"/>
        <h2>Música Favorita</h2>
        <ul>
          <li>{this.state.favoriteMusic[0]}</li>
          <li>{this.state.favoriteMusic[1]}</li>
          <li>{this.state.favoriteMusic[2]}</li>
        </ul>
        <img src={maçã} alt="fruta maça"/>
      </div>

    )
  }
}

export default App;