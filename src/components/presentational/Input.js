
/*
This is a prentational component which will be used by the container component. This component receives 
data from the container component through props

*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        const { label, text, type, id, value, handleChange } = this.props;
            const input = (
                <div className="form-group">
                 <label htmlFor={label}>{text}</label>   
                    <input type={type}
                        className="form-control"
                        id={id}
                        value={value}
                        onChange={handleChange}
                        required
                    />
                </div>);
            return input;
        }
    }

/*
it is always a good practise to utilise the in built typechecking mechanism of React by defining the PropTypes.
This exports the following validators which can make sure the component receives data and is valid
*/
Input.Proptypes = {
    label: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default Input;