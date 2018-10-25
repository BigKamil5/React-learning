"use strict";

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "JAJ! M\xF3j das React"
    ),
    React.createElement(
        "p",
        null,
        "Imie"
    ),
    React.createElement(
        "p",
        null,
        "Naziwsko"
    )
);

var mysite = {
    name: "MyFirstRectApp STUFFSTUFSTUUFF",
    subtitle: "SubtitleToMyApp",
    options: ["jeden", "dwa"]
};

var getName = function getName(x) {
    return x.split(' ')[0];
};

var counter = 0;

var addOne = function addOne(x) {
    counter++;
    render();
};
var minusOne = function minusOne(x) {
    counter--;
    render();
};

var render = function render() {

    var template2 = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            getName(mysite.name)
        ),
        mysite.subtitle && React.createElement(
            "p",
            null,
            " ",
            mysite.subtitle,
            " "
        ),
        React.createElement(
            "p",
            null,
            mysite.options && mysite.options.length > 0 ? "Here are your options" : "No options"
        ),
        React.createElement(
            "h1",
            { className: "counter" },
            "Counter : ",
            counter
        ),
        React.createElement(
            "button",
            { onClick: addOne },
            "+1"
        ),
        React.createElement(
            "button",
            { onClick: minusOne },
            "-1"
        )
    );

    var mainContainer = document.getElementById('wrapper');
    ReactDOM.render(template2, mainContainer);
};
render();
// const obj = {
//     arr : [1,2,3,4,5,],
//     num : 3,
//     multiply() {
//         return this.arr.map((x) => x*this.num);
//     }
// }

// console.log(obj.multiply());