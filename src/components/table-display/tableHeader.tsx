import React from "react";

export default function TableHeader({ headers }: { headers: string[] }) {
    return (
        <thead>
            <tr>
                {headers.map((header: string) => {
                    return <th key="option-name-th">{header}</th>;
                })}
            </tr>
        </thead>
    );
}
