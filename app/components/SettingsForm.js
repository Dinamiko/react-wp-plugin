import React, {Component} from 'react';
import api from "../api";

class Form extends Component {

    state = {
        title: ''
    };

    async componentDidMount() {
        const settings = await api.settings().getAll();
        this.setState({title: settings.data.title});
    }

    onTitleChange = (value) => {
        this.setState({title: value});
    };

    render() {
        return (
            <form onSubmit={this.props.submit}>
                <table className="form-table">
                    <tbody>
                    <tr>
                        <th scope="row"><label htmlFor="blogname">Site Title</label></th>
                        <td><input name="title" type="text"
                                   value={this.state.title}
                                   onChange={( event ) => this.onTitleChange(event.target.value)}
                                   className="regular-text"/></td>
                    </tr>
                    </tbody>
                </table>
                <p className="submit">
                    <input type="submit" className="button button-primary" value="Save Changes"/>
                </p>
            </form>
        );
    }
}

export default Form;
