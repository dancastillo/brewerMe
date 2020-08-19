import React from "react";
import fetch from "isomorphic-unfetch";

import { API_BY_ID } from "@constants/api";
import BreweryCard from "../../components/card/brewery";
import { getData } from "../../lib/utils/apiResponse";
import BeerCard from "../../components/card/beer";
import { IBeer } from "@interfaces/components/card/IBeer";
import { IBrewery } from "@interfaces/components/card/IBrewery";
import { Routes } from "@constants/routes";

interface Interface {
    response: IBeer|IBrewery;
    option: string;
}

export default function Search({response, option}: Interface) {
    if (option === Routes.BEER) {
        return (
            <BeerCard beer={response}/>
        );
    } else if (option === Routes.BREWERY) {
        return (
            <BreweryCard brewery={response}/>
        );
    }

}

export const getServerSideProps = async (ctx) => {
    const { id, option } = ctx.query;
    const res = await fetch(API_BY_ID(id, option));

    const jsonResult = await res.json();
    const data = getData(jsonResult);

    return { props: { response: { ...data }, option } };
};
