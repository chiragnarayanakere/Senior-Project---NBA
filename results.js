var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
var data = [{ id: 1, name: 'Gob', value: '2' }, { id: 2, name: 'Buster', value: '5' }, { id: 3, name: 'George Michael', value: '4' }];

var ReactTable = function (_React$Component) {
  _inherits(ReactTable, _React$Component);

  function ReactTable() {
    _classCallCheck(this, ReactTable);

    return _possibleConstructorReturn(this, (ReactTable.__proto__ || Object.getPrototypeOf(ReactTable)).apply(this, arguments));
  }

  _createClass(ReactTable, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          BootstrapTable,
          { data: this.props.data },
          React.createElement(
            TableHeaderColumn,
            { isKey: true, dataField: 'id' },
            'ID'
          ),
          React.createElement(
            TableHeaderColumn,
            { dataField: 'name' },
            'Name'
          ),
          React.createElement(
            TableHeaderColumn,
            { dataField: 'value' },
            'Value'
          )
        )
      );
    }
  }]);

  return ReactTable;
}(React.Component);

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

var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'App' },
        React.createElement(
          'p',
          { className: 'Table-header' },
          'Basic Table'
        ),
        React.createElement(ReactTable, { data: data })
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(element, document.getElementById('results_container'));