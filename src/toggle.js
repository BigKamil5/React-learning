class ToggleVis extends React.Component{
    constructor(params){
        super(params);
        this.toggle = this.toggle.bind(this);
        this.state = {
            visibilty: false            
        }
    }

    toggle(){
        this.setState((prevState)=>{
            return{
                visibilty: !prevState.visibilty
            }
        })
    }

    render(){
        return(
            <div>
                <h1>Toggle Visibilty</h1>
                <button onClick={this.toggle}>{this.state.visibilty?"Hide text":"Show Text"}</button>
                {this.state.visibilty && <p>Toggle this</p>}
            </div>
        )
    }
}

ReactDOM.render(<ToggleVis />,document.getElementById('wrapper'))