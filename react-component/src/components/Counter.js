import React from 'react';

class Counter extends React.Component {
    constructor(myAwesomeProps){
        super(myAwesomeProps);
        this.add = this.add.bind(this);//musimy zbindować by this odnosił sie do ..
        this.sub = this.sub.bind(this);
        this.state = {
            count: 0
        }
    }

    //funkcje do zwiększnia i zmniejszania licznika poprzez kliknięcie..//
    add() {
      this.setState({//polecenie setState zmienia stan..
          count: this.state.count +1
      });
    }

    sub() {
        this.setState({
            count: this.state.count -1
        });
    }

    render(){
        return <div>
            <h1>Hej, mam wartość: {this.state.count}</h1>
            <button onClick={this.add}>+</button>
            <button onClick={this.sub}>-</button>
        </div>
    }
}
export default Counter;