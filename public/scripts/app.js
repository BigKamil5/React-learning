"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.deleteOptions = _this.deleteOptions.bind(_this);
        _this.addOption = _this.addOption.bind(_this);
        _this.chooseDestiny = _this.chooseDestiny.bind(_this);
        _this.state = {
            options: []
        };
        return _this;
    }

    _createClass(App, [{
        key: "deleteOptions",
        value: function deleteOptions() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: "chooseDestiny",
        value: function chooseDestiny() {
            alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
        }
    }, {
        key: "addOption",
        value: function addOption(option) {
            var newString = option;

            if (newString) {
                this.setState(function (prev) {
                    return {
                        options: [].concat(_toConsumableArray(prev.options), [newString])
                    };
                });
            }
        }
    }, {
        key: "render",
        value: function render() {

            var title = "My Beautiful Appoooppp",
                subtitle = "Let destiny lead You!";

            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, { chooseOption: this.chooseDestiny, areThereOptions: this.state.options.length > 0 }),
                React.createElement(Options, { options: this.state.options, deleteFunction: this.deleteOptions }),
                React.createElement(AddOption, { addingFunction: this.addOption })
            );
        }
    }]);

    return App;
}(React.Component);

// class Header extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1> {this.props.title} </h1>
//                 <h3> {this.props.subtitle} </h3>
//             </div>
//         )
//     }
// }

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            " ",
            props.title,
            " "
        ),
        React.createElement(
            "h3",
            null,
            " ",
            props.subtitle,
            " "
        )
    );
};

// class Action extends React.Component{

//     render(){
//         return(
//             <button 
//                 onClick={this.props.chooseOption} 
//                 disabled={!this.props.areThereOptions}>
//                 Tell me Lord what should i do
//             </button>
//             )
//     }
// }

var Action = function Action(props) {
    return React.createElement(
        "button",
        {
            onClick: props.chooseOption,
            disabled: !props.areThereOptions },
        "Tell me Lord what should i do"
    );
};

// class Options extends React.Component{

//     render(){
//         return(
//             <div>      
//                 <button onClick={this.props.deleteFunction}>Remove All</button>
//                 <ul>
//                 {
//                     this.props.options.map((option,index) => <Option key={index} optionText={option} />)
//                 }
//                 </ul>
//             </div>
//         )
//     }
// }

var Options = function Options(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.deleteFunction },
            "Remove All"
        ),
        React.createElement(
            "ul",
            null,
            props.options.map(function (option, index) {
                return React.createElement(Option, { key: index, optionText: option });
            })
        )
    );
};

// class Option extends React.Component{
//     render(){
//         return(
//             <li>{this.props.optionText}</li>
//         )
//     }
// }

var Option = function Option(props) {
    return React.createElement(
        "li",
        null,
        props.optionText
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handlerForm = _this2.handlerForm.bind(_this2);
        _this2.state = {
            errorMsg: ''
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: "handlerForm",
        value: function handlerForm(e) {
            e.preventDefault();

            var newOption = e.target.elements.option.value.trim();

            if (!newOption) {
                this.setState(function () {
                    return {
                        errorMsg: "Try one more time"
                    };
                });
            }

            if (newOption) {
                this.setState(function () {
                    return {
                        errorMsg: ""
                    };
                });
                //mysite.lastoption = newOption;
                //mysite.options.push(newOption);
                e.target.elements.option.value = '';
                this.props.addingFunction(newOption);
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.state.errorMsg && React.createElement(
                    "p",
                    null,
                    this.state.errorMsg
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.handlerForm },
                    React.createElement("input", { type: "text", name: "option" }),
                    React.createElement(
                        "button",
                        null,
                        "Add option"
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('wrapper'));
