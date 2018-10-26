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
    lastoption: '',
    options: []
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

const submitForm = (e) => {
    e.preventDefault();

    const newOption = e.target.elements.option.value;

    if(newOption){
        mysite.lastoption = newOption;
        mysite.options.push(newOption);
        e.target.elements.option.value = ''
        render();
    }
}

const resetOptions = () => {
    mysite.options=[];
    mysite.lastoption = undefined;
    render();
}

const getMyAns = () => {
    alert(mysite.options[Math.floor(Math.random()*mysite.options.length)])
}

const mainContainer = document.getElementById('wrapper');

const render = () => {

    const template2 = (
        <div>
            <h1>{getName(mysite.name)}</h1>
            {mysite.subtitle && <p> {mysite.subtitle} </p>}
            <p>{(mysite.options && mysite.options.length > 0) ? "Here are your options" : "No options"}</p>
            
            <h1 className='counter' >Counter : {counter}</h1>
            <button onClick = {addOne} >+1</button>    
            <button onClick = {minusOne}>-1</button>    

            <button disabled = {mysite.options.length === 0} onClick={getMyAns}>Check my destiny!</button>
            <h3>{mysite.options.length}</h3>
            <form onSubmit = {submitForm}>
                <input type = "text" name = "option"/>
            </form>
            <ul>
                {
                    mysite.options.map((option,index) => <li key={index}>{option}</li>)
                }
            </ul>
            <button onClick={resetOptions}>Reset Your Options</button>
        </div>
    );

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

// console.log(obj.multiply())