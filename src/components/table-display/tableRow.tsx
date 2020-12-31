import React from 'react';

export default function TableRow({ id, name }: { id: string, name: string}) {
    return (
        <tr key={id}>
            <td>{name}</td>
        </tr>
    );
}
