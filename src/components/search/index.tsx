import React from "react";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import { Button, Row } from "react-bootstrap";
import FormInput from "../form/formInput";

export default function Search() {
    const initialValidationSchema = {
        searchValue: string().required().min(2).max(100),
        searchBy: string().oneOf(["brewer", "beer", "location"] as const).required(),
        city: string()
            .when("searchBy", {
                is: "location",
                then: string().required().min(2).max(50),
                otherwise: string().notRequired().min(2).max(50),
            }),
        state: string()
            .when("searchBy", {
                is: "location",
                then: string().required().min(2).max(50),
                otherwise: string().notRequired().min(2).max(50),
            }),
    };

    const initialValues = {
        searchValue: "",
        searchBy: "",
        city: "",
        state: ""
    };

    const inputs = [
        {name: "searchValue", type: "text", label: "", placeholder: "Search for brewery, beer, by location", inputType: "TextInput"},
        {name: "searchBy", type: "select", label: "searchOptions", placeholder: "Choose an option...", inputType: "select"}
    ];

    const additionInputs = [
        {name: "city", type: "text", label: "", placeholder: "City...", inputType: "TextInput"},
        {name: "state", type: "select", label: "states", placeholder: "Choose a State...", inputType: "select"}
    ];

    return (
        <Formik
            validationSchema={object(initialValidationSchema)}
            initialValues={initialValues}
            onSubmit={(form) => { console.log(form); }}>
            {({ values, isSubmitting }) => (
                <Row>
                    <Form className="p-3 mt-5 mb--3">
                        {inputs.map((input) => {
                            return (
                                <FormInput
                                    key={input.name}
                                    inputType={input.inputType}
                                    name={input.name}
                                    type={input.type}
                                    label={input.label}
                                    placeholder={input.placeholder}
                                />
                            );
                        })}
                        {values.searchBy === "location"
                            ? (
                                <>
                                    {additionInputs.map((input) => {
                                        return (
                                            <FormInput
                                                key={input.name}
                                                inputType={input.inputType}
                                                name={input.name}
                                                type={input.type}
                                                label={input.label}
                                                placeholder={input.placeholder}
                                            />
                                        );
                                    })}
                                </>
                            )
                            : (
                                <></>
                            )
                        }

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="col-12"
                        >
                            Find
                        </Button>
                    </Form>
                </Row>
            )}
        </Formik>
    );
}
