import React from 'react';
import fetch from 'isomorphic-unfetch';

import { getLocationData } from '@constants/api';
import { getData } from '../../lib/utils/apiResponse';
import LocationCard from '../../components/card/location';
import BackButton from '../../components/back-button';
import { ILocationResponse } from '@interfaces/components/card/ILocationResponse';

interface Interface {
    data: ILocationResponse[];
}

export default function Location({ data }: Interface) {
    return (
        <>
            <BackButton />
            <>
                {data.map((locationData: ILocationResponse) => {
                    const { location, distance, brewer } = locationData;
                    return (
                        <LocationCard
                            key={location.id}
                            location={location}
                            distance={distance}
                            brewer={brewer}
                        />
                    );
                })}
            </>
        </>
    );
}

export const getServerSideProps = async (ctx) => {
    const { city, state } = ctx.query;
    const res = await fetch(getLocationData(city, state));


    const jsonResult = await res.json();
    const data = getData(jsonResult);

    return { props: {  ...data } };
};
