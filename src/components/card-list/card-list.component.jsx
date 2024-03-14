import { Component } from "react";

class Cardlist extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div>
        {monsters.map((monsters) => (
          <h3>{monsters.name}</h3>
        ))}
      </div>
    );
  }
}

export default Cardlist;
