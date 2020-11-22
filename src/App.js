import React, { component, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import showUser from './showUser';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.handlerClick = this.handlerClick.bind(this);
  }
  
  state = {
    person: false,
    handlerClick : false,
  };
  
  async componentDidMount() {
    const url = 'https://randomuser.me/api/';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({person: data.results[0], loading: true})
  }

  render() {
    return (
    <div>
    {this.state.loading || !this.state.person ? (
      
    <div align = 'center'>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      cargando...
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button onClick = {this.handlerClick}> Consultar API </button>
      </div>
    ) : (
    <div align = 'center'>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>{this.state.person.name.title}</div>
      <div>{this.state.person.name.first}</div>
      <div>{this.state.person.name.last}</div>
      <img src={this.state.person.picture.large} />
    </div>
    )}
    <br></br>
    <br></br>
  </div>
    )
    
  }

  handlerClick() {
    this.setState({
      loading : false
    })
  }

}


export default App;
