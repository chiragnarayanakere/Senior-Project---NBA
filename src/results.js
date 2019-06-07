import React, { Component } from 'react';
import ReactTable from 'ReactTable.js'

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Component',
  lastName: 'Displaying',
};

const element = <h2>React {formatName(user)}.</h2>;

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="Table-header">Basic Table</p>
        <Table1 data={data}/>
      </div>
    );
  }
}
ReactDOM.render(element, document.getElementById('results_container'));

