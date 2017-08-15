import React, {Component} from 'react';
import './App.css';
import {FormGroup, FormControl, InputGroup, InputControl, Glyphicon} from 'react-bootstrap';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      query:''
    }
  }
  search(){
    console.log('this.state', this.state);
    const BASE_URL = 'https://api.spotify.com/v1/search?';
    const FETCH_URL = BASE_URL + 'q=' + this.state.query + '&type=artist&limit=1';
    var accessToken = 'AQAo_2bnMi48CDVlPW98zYDyAwPJuqcAgoudGdsrCSfgbpK7FpVykbOb9X9xzoiLQh2AStxQ71i6jDWrOx8cBc9EPk09DYGS6n7sbst2MMA4_0NzRQTYjzeiiFdixuE6r9XSp-vq--pltNrFu-yLM887PwSVRYXOsG_FdTn01_4uAwamT1KnXAUm5EVEnD0o_IRb55R1UbjieAz2Nh8I1ew8Ay_K-ODaYrZ6m3k4qUg7UAv-uJpOFQ';
    var myHeaders = new Headers();

    var myOptions = {
      method: 'GET',
      headers:  {
        'Authorization': 'Bearer ' + accessToken
     },
      mode: 'cors',
      cache: 'default'
    };

    fetch(FETCH_URL, myOptions )
      .then(response => response.json())
      .then(json => console.log(json))

    // console.log('FETCH_URL', FETCH_URL);
  }
  render(){
    return(
      <div className="App">
        <div className="Title">Music Master</div>
        <div>
          <FormGroup>
            <InputGroup>
              <FormControl
                type="text"
                placeholder="Search For An Artist..." value={this.state.query}
                onChange={event => {this.setState({query: event.target.value})}}
                onKeyPress={event => {if(event.key === 'Enter'){
                  this.search()
                }}}
              />
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
            </InputGroup>
          </FormGroup>
        </div>
        <div className="Profile">
          <div>Artist Picture</div>
          <div>Artist Name</div>
        </div>
        <div className="Gallery">
          Gallery
        </div>
      </div>
    )
  }
}

export default App;
