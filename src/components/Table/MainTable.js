import React, { useMemo, useState } from 'react';
import { useTable, useFilters } from 'react-table';

function MainTable({ columns, data }) {
    // создаем состояние для фильтрации
    const [filterInput, setFilterInput] = useState('');

    // создаем колонки и данные таблицы
    const tableData = useMemo(() => data, [data]);
    const tableColumns = useMemo(() => columns, [columns]);

    // используем хук useTable для создания таблицы с возможностью фильтрации
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        setFilter,
    } = useTable(
        {
            columns: tableColumns,
            data: tableData,
        },
        useFilters
    );

    // функция для обновления значения фильтра
    const handleFilterChange = e => {
        const value = e.target.value || '';
        setFilter('name', value); // устанавливаем фильтр по столбцу "name"
        setFilterInput(value); // сохраняем значение фильтра
    };

    // отображаем таблицу и поле для фильтрации
    return (
        <>
            <div>
                <input
                    value={filterInput}
                    onChange={handleFilterChange}
                    placeholder={'Search name'}
                />
            </div>
            <table {...getTableProps()}>
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                            })}
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </>
    );
}

export default MainTable;
