// dependencies
import React, { Component, Fragment } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            bool: false
        }
    }
    render() {
        return (
            <Fragment>
                <div>{this.state.count}</div>
                <button type="button" onClick={() => this.setState({ count: this.state.count + 1 })}>Aumentar</button>
                {
                    this.state.bool && <h1>es verdadero</h1>
                }
            </Fragment>
        );
    }
}

export default App;