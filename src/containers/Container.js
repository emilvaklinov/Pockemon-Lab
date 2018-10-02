import React from 'react';
import CountrySelector from '../components/Selector';
import CountryDetail from '../components/Detail';

class Container extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pockemons: {},
      currentPockemon: null
    };
    this.handlePockemonSelected = this.handlePockemonSelected.bind(this);
  }

  componentDidMount() {
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({pockemons: data})
    });

    request.send();
  }

  handlePockemonSelected(index) {
    const selectedPockemon = this.state.pockemons[index];
    this.setState({currentPockemon: selectedPockemon})
  }

  render(){
    return (
      <div>
        <h2>Pockemon Container</h2>
        <PockemonSelector pockemons={this.state.pockemons} onPockemonSelected={this.handlePockemonSelected} />
        <PockemonDetail pockemon={this.state.currentPockemon} />
      </div>
    );
  }
}

export default Container;
