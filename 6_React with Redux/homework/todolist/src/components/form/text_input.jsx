import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {
    const {
        name,
        onChange,
        value = "",
        label, 
        placeHolder,
        mandatory = false,
        helper,
        err = false,
    } = props;

    const mandatoryStr = mandatory && (<span className="text-danger">*</span>);

    return (
        <div className="form-group">
            <label for = { name } className={err ? "text-danger" : null}>
                { label }
                {mandatoryStr }
            </label>
            <input 
                className={`form-control ${ err && "is-invalid"}`}
                placeholder={ placeHolder || label}
                name={ name }
                value={ value }
                onChange={ typeof onChange === "function" ? onChange : null}
            />
            <small 
                className={`form-text ${ err && "text-danger"}`}> 
                { helper }
            </small>
      </div>
    )
};

TextInput.propTypes = {
    name: PropTypes.string, // name for input
	onChange: PropTypes.func, // change handler for input
	value: PropTypes.string, // value for input
	label: PropTypes.string, // label
	placeHolder: PropTypes.string, // placeholder for input
	mandatory: PropTypes.bool, // required to fill
	helper: PropTypes.string, // text for help
	err: PropTypes.bool, // flag about mistake
};

export default TextInput;
