class App extends React.Component{
    constructor(props){
        super(props);
        this.deleteOptions = this.deleteOptions.bind(this);
        this.addOption = this.addOption.bind(this);
        this.chooseDestiny = this.chooseDestiny.bind(this);
        this.state = {
            options: []
        }
    }

    deleteOptions(){
        this.setState(()=>({options: [] }))
    }

    chooseDestiny(){
        alert(this.state.options[Math.floor(Math.random()*this.state.options.length)])
    }
    
    addOption(option){
        let newString = option

        if(newString){
            this.setState((prev)=>({
                options: [...prev.options,newString] 
            }))
        }
    }

    render(){

        const title = "My Beautiful Appoooppp",
              subtitle = "Let destiny lead You!";

        return(
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action chooseOption={this.chooseDestiny} areThereOptions={this.state.options.length>0}/>
                <Options options={this.state.options} deleteFunction={this.deleteOptions}/>
                <AddOption addingFunction={this.addOption}/>
            </div>
        )
    }
}

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

const Header = (props) => {
    return(
        <div>
            <h1> {props.title} </h1>
            {props.subtitle && <h3> {props.subtitle} </h3>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Default Title',
    subtitle: "Default Subtitle"
}

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

const Action = (props) => {
    return(
        <button 
            onClick={props.chooseOption} 
            disabled={!props.areThereOptions}>
            Tell me Lord what should i do
        </button>
    )
}

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

const Options = (props) => {
    return(
        <div>      
            <button onClick={props.deleteFunction}>Remove All</button>
            <ul>
            {
                props.options.map((option,index) => <Option key={index} optionText={option} />)
            }
            </ul>
        </div>
    )

}

// class Option extends React.Component{
//     render(){
//         return(
//             <li>{this.props.optionText}</li>
//         )
//     }
// }

const Option = (props) => {
    return(
        <li>{props.optionText}</li>
    )
}

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handlerForm = this.handlerForm.bind(this);
        this.state = {
            errorMsg : ''
        }
    }

    handlerForm(e){
        e.preventDefault();

        const newOption = e.target.elements.option.value.trim();

        if(!newOption){
            this.setState(()=>{
                return{
                    errorMsg: "Try one more time"
                }
            })
        }

        if(newOption){
            this.setState(()=>({errorMsg: ""}))
            //mysite.lastoption = newOption;
            //mysite.options.push(newOption);
            e.target.elements.option.value = '';
            this.props.addingFunction(newOption);
        }

    }

    render(){
        return(
            <div >
            
            {this.state.errorMsg && <p >{this.state.errorMsg}</p>}
                <form onSubmit={this.handlerForm}>
                    <input type = "text" name = "option"/>
                    <button>Add option</button>
                </form>
            </div>
        )
    }
}


ReactDOM.render(<App/>,document.getElementById('wrapper'))