function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

var user = {
  firstName: 'Component',
  lastName: 'Displaying'
};

var element = React.createElement(
  'h2',
  null,
  'React ',
  formatName(user),
  '.'
);

ReactDOM.render(element, document.getElementById('results_container'));