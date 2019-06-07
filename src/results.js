

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
var data = [
  {id: 1, name: 'Gob', value: '2'},
  {id: 2, name: 'Buster', value: '5'},
  {id: 3, name: 'George Michael', value: '4'}
];
 

class ReactTable extends React.Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey dataField='id'>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='name'>
            Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='value'>
            Value
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

const user = {
  firstName: 'Component',
  lastName: 'Displaying',
};  

const element = <h2>React {formatName(user)}.</h2>;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <p className="Table-header">Basic Table</p>
        <ReactTable data={data}/>
      </div>
    );
  }
}
ReactDOM.render(element, document.getElementById('results_container'));

