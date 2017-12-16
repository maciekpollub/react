import React, {Component} from 'react'
import { database } from './firebase'

class AppFirebase extends Component {

    state = {
        counter: null
    }

    incHandler = () => {
        database.ref('./counter')
            .set(this.state.counter +1)
    }

    componentDidMount(){
        database.ref('/counter')
            .on('value', (snapshot)=>{
                this.setState({counter: snapshot.value()
                })
            })
    }

    render(){
        return <h1>{this.state.counter}</h1>
    }

}

export default AppFirebase;