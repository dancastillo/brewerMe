import React from 'react';
import { ErrorMessage, Field } from 'formik';
import { IInput } from '@interfaces/components/IFormInput';

function TextInput({ key, name, type, label, placeholder }: IInput) {

    return (
        <div className="form-group">
            <Field
                key={key}
                className="form-control"
                name={name}
                type={type}
                label={label}
                placeholder={placeholder}
            />
            <ErrorMessage name={name} />
        </div>
    );
}

export default TextInput;
