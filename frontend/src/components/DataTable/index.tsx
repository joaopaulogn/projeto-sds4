import React, { useEffect, useState } from 'react'
import api from 'services/api';
import { SalePage } from 'types/sale';
import { formatLocalDate } from 'utils/format';

const DataTable = () => {
    const [page, setPage] = useState<SalePage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0
    })

    useEffect(() => {
        api.get('/sales?page=0&size=20&sort=date,desc')
            .then((response) => {
                const data = response.data as SalePage;
                setPage({
                    content: data.content,
                    first: data.first,
                    last: data.last,
                    number: data.number,
                    totalElements: data.totalElements,
                    totalPages: data.totalPages
                })
            })
    })

    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {page.content
                        && page.content?.map((data => 
                            <tr key={data.id}>
                                <td>{formatLocalDate(data.date, "dd/MM/yyyy")}</td>
                                <td>{data.seller.name}</td>
                                <td>{data.visited}</td>
                                <td>{data.deals}</td>
                                <td>{data.amount.toFixed(2)}</td>
                            </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable;
