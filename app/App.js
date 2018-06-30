import React, {Component} from 'react';
import api from './api';

class App extends Component {

    async componentDidMount() {
        const settings = await api.settings().getAll();
        console.log(settings.data);
    }

    render() {
        return <div>App</div>
    }
}

export default App;
