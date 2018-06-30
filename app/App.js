import React, {Component} from 'react';
import api from './api';
import SettingsForm from './components/SettingsForm';

class App extends Component {

    state = {
        settings: []
    };

    async componentDidMount() {
        const settings = await api.settings().getAll();
        this.setState({settings: settings.data});
    }

    render() {
        return(
            <div className="wrap">
                <h1>React Plugin</h1>
                <SettingsForm/>
            </div>
        );
    }
}

export default App;
