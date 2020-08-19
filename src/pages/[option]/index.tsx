import React from "react";
import fetch from "isomorphic-unfetch";

import { API_BY_OPTION } from "@constants/api";;
import { getData } from "../../lib/utils/apiResponse";
import TableDisplay from "../../components/table-display";
import { Routes } from "@constants/routes";

export default function Search({ response, option }) {
    const headers: string[] = (option === Routes.BEER)
        ? ["Beer"]
        : ["Brewery Name"];

    return (
        <>
            <TableDisplay tableHeaders={headers} tableData={response.data} />
        </>
    );
}

export const getServerSideProps = async (ctx) => {
    const { option } = ctx.query;
    const res = await fetch(API_BY_OPTION(option));
    const jsonResult = await res.json();
    const data = getData(jsonResult);

    return { props: { response: {...data}, option } };
};
