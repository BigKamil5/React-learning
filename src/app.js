class App extends React.Component{
    render(){

        const title = "My Beautiful App",
              subtitle = "Led destiny lead You!",
              options = ['opt1', 'opt2', 'opt3'];

        return(
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component{
    render(){
        return(
            <div>
                <h1> {this.props.title} </h1>
                <h3> {this.props.subtitle} </h3>
            </div>
        )
    }
}

class Action extends React.Component{
    btnHandler(){
        alert('KRAKRA');
    }
    
    render(){
        return(
            <button onClick={this.btnHandler} >Tell me Lord what should i do</button>
            )
    }
}

class Options extends React.Component{

    removeAllOptions(){
        alert("i am removing bro");
    }

    render(){
        return(
            <div>      
                <button onClick={this.removeAllOptions}>Remove All</button>
                <ul>
                {
                    this.props.options.map((option,index) => <Option key={index} optionText={option} />)
                }
                </ul>
            </div>
        )
    }
}

class Option extends React.Component{
    render(){
        return(
            <li>{this.props.optionText}</li>
        )
    }
}

class AddOption extends React.Component{

    handlerForm(e){
        e.preventDefault();

        const newOption = e.target.elements.option.value.trim();

        if(newOption){
            //mysite.lastoption = newOption;
            //mysite.options.push(newOption);
            e.target.elements.option.value = ''
            alert(newOption);
        }

    }

    render(){
        return(
            <form onSubmit={this.handlerForm}>
                <input type = "text" name = "option"/>
                <button>Add option</button>
            </form>
        )
    }
}


ReactDOM.render(<App/>,document.getElementById('wrapper'))