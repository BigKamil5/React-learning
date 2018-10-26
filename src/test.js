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