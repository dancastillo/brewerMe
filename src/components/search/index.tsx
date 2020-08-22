import React from "react";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import { Button, Row } from "react-bootstrap";
import FormInput from "../form/formInput";
import Router from "next/router";

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
        {name: "searchValue", type: "text", label: "", placeholder: "Search for brewery, beer, by location", inputType: "text"},
        {name: "searchBy", type: "select", label: "searchOptions", placeholder: "Choose an option...", inputType: "select"}
    ];

    const additionInputs = [
        {name: "city", type: "text", label: "", placeholder: "City...", inputType: "text"},
        {name: "state", type: "select", label: "states", placeholder: "Choose a State...", inputType: "select"}
    ];

    interface ISearchForm {
        searchValue: string;
        searchBy: "brewer" | "beer" | "location";
        city: string;
        state: string;
    }

    const submitSearch = ({searchValue, searchBy, city, state }: ISearchForm) => {
        if (searchBy === "location") {
            Router.push(`/${searchBy}?city=${city}&state=${state}`);
        } else {
            Router.push(`/${searchBy}/${searchValue}`);
        }
    };

    return (
        <Formik
            validationSchema={object(initialValidationSchema)}
            initialValues={initialValues}
            onSubmit={(values: ISearchForm) => {
                console.log(JSON.stringify(values, null, 2));
                submitSearch(values);
            }}>
            {({ values, isSubmitting }) => (
                <Row>
                    <Form className="p-3 mt-5 mb--3 offset-md-3 col-md-6 col-sm-12">
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
