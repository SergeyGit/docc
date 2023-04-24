import React, { useMemo, useState } from 'react';
import { useTable } from 'react-table';
import clsx from 'clsx';
import ClearIcon from './Close.svg';
import Select from '@site/src/components/Select/Select';
import { PaymentColumn } from './Columns/PaymentColumn/PaymentColumn';
import { CaptionColumn } from './Columns/CaptionColumn/CaptionColumn';
import { FunctionalColumn } from './Columns/FunctionalColumn/FunctionalColumn';

import styles from './table.module.css';

function filterArray(data, filters) {
  if (!filters || filters.length === 0) {
    return data;
  }
  filters?.forEach((filter) => {
    const { name, value } = filter;
    data = data.filter((obj) => {
      if (!obj.hasOwnProperty(name)) {
        return true;
      }
      if (value.length === 0) {
        return true;
      }
      if (Array.isArray(obj[name])) {
        return obj[name].some((val) => value.includes(val));
      }
      return obj[name] === value;
    });
  });

  return data;
}

const Column = ({ cell, name }) => {
  switch (name) {
    case 'payment_method': {
      return (
        <PaymentColumn
          method={cell.row.original.payment_method}
          name={cell.row.original.payment_name}
        />
      );
    }
    case 'country':
    case 'integration':
    case 'currency': {
      return (
        <CaptionColumn
          caption={cell.column.Header}
          value={cell.value}
          oneLine={name !== 'integration'}
        />
      );
    }
    case 'functional': {
      return <FunctionalColumn caption={cell.column.Header} value={cell.value} />;
    }
    default:
      return cell.render('Cell');
  }
};

function MainTable({ columns, data }) {
  const [filterState, setFilterState] = useState([]);

  const tableData = useMemo(() => {
    return filterArray(data, filterState);
  }, [data, filterState]);
  const tableColumns = useMemo(() => columns, [columns]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns: tableColumns,
    data: tableData,
  });

  const handleFilterChange = (value, name) => {
    const filterIndex = filterState.findIndex((filter) => filter.name === name);
    if (filterIndex === -1) {
      setFilterState([...filterState, { name, value }]);
    } else {
      setFilterState([...filterState.filter((item) => item.name !== name), { name, value }]);
    }
  };

  const handleClearFilter = () => {
    setFilterState([]);
  };

  return (
    <div className={styles.tableWrap}>
      <table {...getTableProps()} className={styles.table}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className={clsx(styles.headCaption, {
                    [styles.align]: column.id === 'clear-button',
                  })}
                  style={{ width: `${column.width}px`, maxWidth: `${column.width}px` }}
                >
                  {column.id === 'clear-button' ? (
                    <button className={styles.clearBtn} onClick={handleClearFilter}>
                      <ClearIcon />
                    </button>
                  ) : (
                    <>
                      {column.render('Header')}
                      {column.filterOptions && (
                        <Select
                          options={column.filterOptions}
                          onSelect={handleFilterChange}
                          name={column.filterColumn || column.id}
                          selected={
                            filterState.find(
                              (item) => item.name === (column.filterColumn || column.id)
                            )?.value || []
                          }
                          placeholder={column.filterPlaceholder}
                        />
                      )}
                    </>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>
                      <Column name={cell.column.id} cell={cell} />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default MainTable;
