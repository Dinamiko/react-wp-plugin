import React from 'react';

const form = (props) => {
    return (
        <form>
            <table className="form-table">
                <tbody>
                <tr>
                    <th scope="row"><label htmlFor="blogname">Site Title</label></th>
                    <td><input name="blogname" type="text" id="blogname" value="WordPress" className="regular-text"/></td>
                </tr>
                </tbody>
            </table>
            <p className="submit">
                <input type="submit" name="submit" id="submit" className="button button-primary" value="Save Changes"/>
            </p>
        </form>
    );
};

export default form;
