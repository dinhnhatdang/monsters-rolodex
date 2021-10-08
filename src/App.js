
import React, { Component } from 'react';
// import logo from './logo.svg';

import { Cardlist } from './components/card-list/card-list.component';

import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    const { monsters, searchField } = this.state;
    //Line trên tương tự như dưới:
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;

    //Filter này giải thích là: filter ra mấy thằng monster.name (có tên) giốn với (includes) cái nhập vào searchField
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={e => {
            this.setState({ searchField: e.target.value })
          }}
        />
        <Cardlist monsters={filteredMonsters} />
      </div>
    );
  }
}






export default App;
