import { NextPageContext } from 'next';
import React, { ReactElement } from 'react';

const Error: React.FC = (err: Record<string, unknown>): ReactElement => {
    const statusCode = err['statusCode'] ? err['statusCode'] : null;

    return (
        <p>
            {statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client.'}
        </p>
    );
};

Error['getInitialPages'] = ({res, err}: NextPageContext) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;
