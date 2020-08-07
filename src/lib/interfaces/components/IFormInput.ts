export interface IInput {
    key?: string;
    name: string;
    type: string;
    label: string;
    placeholder: string;
}

export interface IFormInput extends IInput{
    inputType: string;
}

