class Counter extends React.Component{
    constructor(props){
        super(props)
        this.counter = 0;
        this.adder = this.adder.bind(this);
        this.subst = this.subst.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: props.counter
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            localStorage.setItem('count',this.state.count);
        }
    }

    componentDidMount(){
        const currentCounterString = localStorage.getItem('count');
        const currentCounter = parseInt(currentCounterString,10);

        if(!isNaN(currentCounter)){
            this.setState(()=>({count: currentCounter }))
        }
    }

    adder(){
        this.setState((a) => {
            return{
                count: a.count+1
            };
        });

    }

    subst(){
        this.setState((a) => {
            return{
                count: a.count-1
            };
        });
    }

    reset(){
        this.setState(() => {
            return{
                count: 0
            };
        });
    }

    render(){
        return (
            <div>
                <h1>COUNT : {this.state.count}</h1>
                <button onClick={this.adder}>+1</button>
                <button onClick={this.subst}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}

Counter.defaultProps = {
    counter: 0
}

ReactDOM.render(<Counter counter={-5}/>,document.getElementById('wrapper'));