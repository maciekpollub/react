import React from 'react';

class Counter extends React.Component {
    constructor(myAwesomeProps){
        super(myAwesomeProps);
        this.add = this.add.bind(this);//musimy zbindować by this odnosił sie do constructora. Można by zamiast tego użyc funkcji strzałkowej w add i subgt
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
    componentWillMount() {
        console.log('jestem w will mount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.name === 'Warszawa'){
            return false;//nie wyrenderuje sie jeżli wpadnie Warszawa...
        }
        if (nextState.count === 100){
            return false;//jeśli uzytkownik wyklika 100 razy to zblokujemy go...
        }
        return true;
    }

    componentWillReceiveProps(nextProps){
        //tutaj można robić operacje na stanie
        this.props.name //Lublin
        nextProps.name//W-wa
    }

    render(){
        return <div>
            <h1>Hej, mam wartość: {this.state.count}</h1>
            <button onClick={this.add}>+</button>
            <button onClick={this.sub}>-</button>
        </div>
    }

    componentDidMount() {
        console.log('jestem w did mount');
    }
    componentWillUnmount() {
        console.log('jestem w unmount');
    }
}
export default Counter;