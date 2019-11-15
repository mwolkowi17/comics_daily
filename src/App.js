import React from 'react';
import './App.css';
import { Comicfetch } from './Comicfetch';
import {Heading} from './Heading';
import {Footer} from './Footer';


class App extends React.Component {
  constructor() {
    super();
    this.state =
      {
        dane: {
          comicB: [1, 2],
          comic: "a"
        },
        komiksy: null,
        komiksyMiesiac: null,
        komiksyObrazek: null
      }
  }

  componentDidMount() {
    fetch("https://xkcd.now.sh/?comic=latest")
      .then(res => res.json())
      .then(data => this.setState({ komiksyMiesiac: data.month }))
      .then(console.log(this.state.dane))

      fetch("https://xkcd.now.sh/?comic=latest")
      .then(res=>res.json())
      .then(data=> this.setState({komiksyObrazek:data.img}))

      fetch("https://xkcd.now.sh/?comic=latest")
      .then(res => res.json())
      .then(data => this.setState({ comic: data.title }))
      .then(console.log(this.state.dane))
      



  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Heading />
         
         
         
          <Comicfetch  title={this.state.comic} miesiac={this.state.komiksyMiesiac}  source={this.state.komiksyObrazek}/>
          
          <Footer />
        </header>

      </div>
    );
  }
}

export default App;
