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

    onFormSubmit = async (event) => {
        event.preventDefault();

        const update = await api.settings().updateTitle(event.target.title.value);
        console.log(update);
    };

    render() {
        return(
            <div className="wrap">
                <h1>React Plugin</h1>
                <SettingsForm
                    data={this.state.settings}
                    submit={(event) => this.onFormSubmit(event)}
                />
            </div>
        );
    }
}

export default App;
