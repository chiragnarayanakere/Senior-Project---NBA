var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function formatRank(data) {
  var names = "";
  for (i = 0; i < data.length; i++) {
    var names = names.concat(data[i].Rank + '.   ' + data[i].Name + "\n");
  }
  console.log(names);
  return names;
}

var data = [{ Rank: 1, Name: "Zion Williamson", Value: 34.6178 }, { Rank: 2, Name: "Bol Bol", Value: 28.1855 }, { Rank: 3, Name: "Brandon Clarke", Value: 27.7256 }, { Rank: 4, Name: "Ja Morant", Value: 26.2848 }, { Rank: 5, Name: "Daniel Gafford", Value: 25.6948 }, { Rank: 6, Name: "Dylan Windler", Value: 24.779 }, { Rank: 7, Name: "Charles Bassey", Value: 24.4099 }, { Rank: 8, Name: "RJ Barrett", Value: 24.0199 }, { Rank: 9, Name: "Dedric Lawson", Value: 23.4991 }, { Rank: 10, Name: "Rui Hachimura", Value: 23.3747 }, { Rank: 11, Name: "Shamorie Ponds", Value: 23.2179 }, { Rank: 12, Name: "Grant Williams", Value: 22.92 }, { Rank: 13, Name: "Jarrett Culver", Value: 21.9315 }, { Rank: 14, Name: "Bruno Fernando", Value: 21.5699 }, { Rank: 15, Name: "Tremont Waters", Value: 20.1567 }, { Rank: 16, Name: "Jalen McDaniels", Value: 19.9929 }, { Rank: 17, Name: "Nickeil Alexander-Walker", Value: 19.8963 }, { Rank: 18, Name: "Matisse Thybulle", Value: 19.6248 }, { Rank: 19, Name: 'Carsen Edwards', Value: 19.526 }, { Rank: 20, Name: 'Jaxson Hayes', Value: 19.04 }, { Rank: 21, Name: 'PJ Washington', Value: 18.6811 }, { Rank: 22, Name: 'Chuma Okeke', Value: 18.552 }, { Rank: 23, Name: 'Kezie Okpala', Value: 18.2464 }, { Rank: 24, Name: 'Admiral Schofield', Value: 18.0031 }, { Rank: 25, Name: 'Darius Garland', Value: 17.4425 }, { Rank: 26, Name: 'Romeo Langford', Value: 17.3207 }, { Rank: 27, Name: 'Isaiah Roby', Value: 17.1339 }, { Rank: 28, Name: 'Cameron Johnson', Value: 16.7172 }, { Rank: 29, Name: 'Tyler Herro', Value: 16.3931 }, { Rank: 30, Name: 'Naz Reid', Value: 16.3799 }, { Rank: 31, Name: 'Talen Horton-Tucker', Value: 16.0194 }, { Rank: 32, Name: 'Luguentz Dort', Value: 15.9048 }, { Rank: 33, Name: 'De Andre Hunter', Value: 15.845 }, { Rank: 34, Name: 'Coby White', Value: 15.7677 }, { Rank: 35, Name: 'Jaylen Hoard', Value: 15.6754 }, { Rank: 36, Name: 'Eric Paschall', Value: 15.0473 }, { Rank: 37, Name: 'Ty Jerome', Value: 15.0002 }, { Rank: 38, Name: 'Mfiondu Kabengele', Value: 14.9152 }, { Rank: 39, Name: 'Keldon Johnson', Value: 14.7478 }, { Rank: 40, Name: 'Louis King', Value: 14.215 }, { Rank: 41, Name: 'Cam Reddish', Value: 14.1665 }, { Rank: 42, Name: 'Jontay Porter', Value: 13.4932 }, { Rank: 43, Name: 'Nassir Little', Value: 12.2843 }, { Rank: 44, Name: 'Kevin Porter Jr.', Value: 11.922 }, { Rank: 45, Name: 'Lindell Wigginton', Value: 10.7898 }];

var ReactTable = function (_React$Component) {
  _inherits(ReactTable, _React$Component);

  function ReactTable() {
    _classCallCheck(this, ReactTable);

    return _possibleConstructorReturn(this, (ReactTable.__proto__ || Object.getPrototypeOf(ReactTable)).apply(this, arguments));
  }

  _createClass(ReactTable, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          BootstrapTable,
          { data: this.props.data },
          React.createElement(
            TableHeaderColumn,
            { isKey: true, dataField: "Rank" },
            "ID"
          ),
          React.createElement(
            TableHeaderColumn,
            { dataField: "name" },
            "Name"
          ),
          React.createElement(
            TableHeaderColumn,
            { dataField: "value" },
            "Value"
          )
        )
      );
    }
  }]);

  return ReactTable;
}(React.Component);

var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "App" },
        React.createElement(
          "p",
          { className: "Table-header" },
          "Basic Table"
        ),
        React.createElement(ReactTable, { data: data })
      );
    }
  }]);

  return App;
}(React.Component);
//ReactDOM.render(element, document.getElementById('top_results'));