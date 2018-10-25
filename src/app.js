var template = (
        <div>
            <h1>JAJ! Mój das React</h1>
            <p>Imie</p>
            <p>Naziwsko</p>
        </div>
    );



const mysite = {
    name: "MyFirstRectApp STUFFSTUFSTUUFF",
    subtitle: "SubtitleToMyApp",
    options: ["jeden","dwa"]
}

const getName = (x) => x.split(' ')[0];

let counter = 0;

const addOne = (x) => {
    counter ++;
    render();
}
const minusOne = (x) => {
    counter --;
    render();
}

const render = () => {

    const template2 = (
        <div>
            <h1>{getName(mysite.name)}</h1>
            {mysite.subtitle && <p> {mysite.subtitle} </p>}
            <p>{(mysite.options && mysite.options.length > 0) ? "Here are your options" : "No options"}</p>
            
            <h1 className='counter' >Counter : {counter}</h1>
            <button onClick = {addOne} >+1</button>    
            <button onClick = {minusOne}>-1</button>    
        </div>
    );

    const mainContainer = document.getElementById('wrapper');
    ReactDOM.render(template2, mainContainer);

}
render();
// const obj = {
//     arr : [1,2,3,4,5,],
//     num : 3,
//     multiply() {
//         return this.arr.map((x) => x*this.num);
//     }
// }

// console.log(obj.multiply());