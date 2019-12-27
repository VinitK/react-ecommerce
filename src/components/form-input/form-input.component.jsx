import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherPartsOfProps }) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherPartsOfProps} />
        {label ? <label className={`${otherPartsOfProps.value.length ? "shrink form-input-label" : "form-input-label"}`}>{label}</label> : null}
    </div>
);

export default FormInput;