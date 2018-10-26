"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToggleVis = function (_React$Component) {
    _inherits(ToggleVis, _React$Component);

    function ToggleVis(params) {
        _classCallCheck(this, ToggleVis);

        var _this = _possibleConstructorReturn(this, (ToggleVis.__proto__ || Object.getPrototypeOf(ToggleVis)).call(this, params));

        _this.toggle = _this.toggle.bind(_this);
        _this.state = {
            visibilty: false
        };
        return _this;
    }

    _createClass(ToggleVis, [{
        key: "toggle",
        value: function toggle() {
            this.setState(function (prevState) {
                return {
                    visibilty: !prevState.visibilty
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Toggle Visibilty"
                ),
                React.createElement(
                    "button",
                    { onClick: this.toggle },
                    this.state.visibilty ? "Hide text" : "Show Text"
                ),
                this.state.visibilty && React.createElement(
                    "p",
                    null,
                    "Toggle this"
                )
            );
        }
    }]);

    return ToggleVis;
}(React.Component);

ReactDOM.render(React.createElement(ToggleVis, null), document.getElementById('wrapper'));
