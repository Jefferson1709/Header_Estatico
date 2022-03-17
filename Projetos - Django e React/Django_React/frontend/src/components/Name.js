import React,{Component} from 'react';

class Name extends Component {
    constructor(){
        super()
        this.state={
            name:'Meu nome'
        }
    }

    cliqueAqui() {
        this.setState({
            name:'Muda o nome'
        })
    }

    render() {
        return(
            <div>
            <h1>{this.state.name}</h1>
            <button onClick={() => this.cliqueAqui()} className="btn btn-success">Mudar texto</button>
            </div>
        )
    }
}

export default Name