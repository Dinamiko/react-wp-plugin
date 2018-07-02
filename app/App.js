import React, {Component} from 'react';
import api from './api';
import SettingsForm from './components/SettingsForm';

class App extends Component {

    onFormSubmit = async (event) => {
        event.preventDefault();

        const update = await api.settings().updateTitle(event.target.title.value);
        console.log(update);
    };

    render() {
        return(
            <div className="wrap">
                <h1>React Plugin</h1>
                <SettingsForm submit={(event) => this.onFormSubmit(event)}/>
            </div>
        );
    }
}

export default App;
