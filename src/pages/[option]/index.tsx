import React from 'react';
import fetch from 'isomorphic-unfetch';

import { getDataByOption } from '@constants/api';
import { getData } from '../../lib/utils/apiResponse';
import TableDisplay from '../../components/table-display';
import { Routes } from '@constants/routes';

interface Interface {
    response: { data: {id: string, name: string}[] },
    option: string
}

export default function Search({ response, option }: Interface) {
    const headers: string[] = (option === Routes.BEER)
        ? ['Beer']
        : ['Brewery Name'];

    return (
        <>
            <TableDisplay tableHeaders={headers} tableData={response.data} />
        </>
    );
}

export const getServerSideProps = async (ctx) => {
    const { option } = ctx.query;
    const res = await fetch(getDataByOption(option));
    const jsonResult = await res.json();
    const data = getData(jsonResult);

    return { props: { response: {...data}, option } };
};
