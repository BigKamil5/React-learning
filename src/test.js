const obj = {
    helper: false,
    paragraph: "This text should appear",
    button: "Show details"
}

const handler = () => {

    if(obj.helper){
        obj.button = "Hide details";
        obj.helper = false;
    }else{
        obj.button = "Show details";
        obj.helper = true;

    }
    render();
}


const wrapper = document.getElementById('wrapper');
const render = () =>{

    const target = (
        <div>
            <h1>Toggle button</h1>
            <button onClick = {handler}>{obj.button}</button>
            {obj.helper && <p>{obj.paragraph}</p>}
        </div>
    )

    ReactDOM.render(target,wrapper);
}

render();



class Person {
    constructor(name = 'Anonymous',age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi. I am ${this.name} and I am ${this.age}.`
    }
}

const me = new Person("Kamil", 21);

console.log(me.getGreeting());

class Traveler extends Person{
    constructor(name,age,destination){
        super(name,age)
        this.destination = destination;
    }
    getGreeting(){
        let out = super.getGreeting() + `I am going to see ${this.destination}.`;
        return out;
    }

}

const notme = new Traveler('Jan',24,'Paris');
console.log(notme.getGreeting());