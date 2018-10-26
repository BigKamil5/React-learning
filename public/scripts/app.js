"use strict";

var obj = {
    helper: false,
    paragraph: "This text should appear",
    button: "Show details"
};

var handler = function handler() {

    if (obj.helper) {
        obj.button = "Hide details";
        obj.helper = false;
    } else {
        obj.button = "Show details";
        obj.helper = true;
    }
    render();
};

var wrapper = document.getElementById('wrapper');
var render = function render() {

    var target = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Toggle button"
        ),
        React.createElement(
            "button",
            { onClick: handler },
            obj.button
        ),
        obj.helper && React.createElement(
            "p",
            null,
            obj.paragraph
        )
    );

    ReactDOM.render(target, wrapper);
};

render();
