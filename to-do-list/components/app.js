import React from 'react';
import AppHead from './app-head'
import AppHeadName from './app-headName';
import AppContent from './app-content'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todo: []
        }
    }

    change(val) {
        this.state.todo.push(val);
        this.setState({
            todo: [...this.state.todo],
        })
    }

    render(){
        return (
            <div>
                <AppHead change={(val) => this.change(val)} />
                <AppHeadName />
                <AppContent items={this.state.todo}/>
            </div>
        )
    }
}

export default App;
