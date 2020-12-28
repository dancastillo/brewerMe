import React from 'react';
import TextInput from './text-input';
import SelectInput from './select-input';
import { IFormInput } from '@interfaces/components/IFormInput';

export default function FormInput({ inputType, name, type, label, placeholder }: IFormInput) {

    return (
        <>
        {inputType === 'text'
        ? (
            <TextInput
                name={name}
                type={type}
                label={label}
                placeholder={placeholder} />
        )
        : (
            <SelectInput
                name={name}
                type={type}
                label={label}
                placeholder={placeholder}
            />
        )
        }
        </>
    );
}
