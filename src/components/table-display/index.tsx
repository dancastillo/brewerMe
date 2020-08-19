import React from "react";
import Table from "react-bootstrap/Table";
import TableHeader from "./tableHeader";
import TableRow from "./tableRow";

interface ITableRows {
    tableHeaders: string[];
    tableData: {id: string, name: string}[];
}

export default function TableDisplay({ tableHeaders, tableData }: ITableRows) {

    return (
        <Table striped bordered hover className="text-center ">
            <TableHeader headers={tableHeaders}/>
            <tbody>
            {
                (tableData && tableData?.length > 0)
                    ? tableData.map(({id, name}) => {
                        return <TableRow key={id} id={id} name={name} />
                    })
                    : (<tr><td>None found.</td></tr>)
            }
            </tbody>
        </Table>
    );
}
