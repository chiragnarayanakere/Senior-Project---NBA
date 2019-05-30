function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Component',
  lastName: 'Displaying',
};

const element = <h2>React {formatName(user)}.</h2>;

ReactDOM.render(element, document.getElementById('results_container'));
