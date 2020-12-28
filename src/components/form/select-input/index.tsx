import React from 'react';
import { ErrorMessage, Field } from 'formik';
import { IInput } from '@interfaces/components/IFormInput';
import { selectOptions } from '@constants/form';

export default function SelectInput({name, type, label, placeholder}: IInput) {
    const options = selectOptions[label];

    return (
        <div className='form-group'>
            <Field
                key={name}
                as={type}
                name={name}
                className='form-control'
                defaultValue=''
            >
                <option key='disabledOption' value='' disabled>{placeholder}</option>
                {options && options.length > 0
                    ? (
                        options.map((option: {name: string, value: string}) => {
                            return (
                                <option key={option.name} value={option.name}>
                                    {option.value}
                                </option>
                            );
                        })
                    )
                    : (<></>)
                }
            </Field>
            <ErrorMessage name={name} />
        </div>
    );
}
