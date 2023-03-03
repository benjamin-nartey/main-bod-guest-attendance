import "./data-table-allguest.styles.css";
import { useTable } from "react-table";
import { useMemo } from "react";
import { GuestContext } from "../../context/guest.context";
import { useContext } from "react";

const DataTableAllGuest = () => {
  const { allGuest } = useContext(GuestContext);
  const data = allGuest;
  useMemo(() => data, [data]);
  const columns = useMemo(
    () => [
      {
        Header: "VISITOR'S NAME",
        accessor: "guest_name",
      },
      {
        Header: "VISITOR'S CONTACT",
        accessor: "guest_contact",
      },

      {
        Header: "GENDER",
        accessor: "gender",
      },
      {
        Header: "TAG NUMBER.",
        accessor: "tag_no",
      },
      {
        Header: "STAFF NAME",
        accessor: "staff_name",
      },
      {
        Header: "DIVISION",
        accessor: "division",
      },
      {
        Header: "DEPARTMENT",
        accessor: "department",
      },
      {
        Header: "DIRECT LINE",
        accessor: "direct_line",
      },
      {
        Header: "EXTENSION",
        accessor: "extension",
      },
      {
        Header: "ROOM NUMBER",
        accessor: "room_no",
      },
      {
        Header: "REASON",
        accessor: "reason",
      },
      {
        Header: "RELATIONSHIP",
        accessor: "relationship",
      },
      {
        Header: "TIME IN",
        accessor: "time_in",
      },
      {
        Header: "TIME OUT",
        accessor: "time_out",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div>
      <div className="data-table-container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, index) => (
                  <th key={index} {...column.getHeaderProps()}>
                    {column.render("Header")}
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
                  {row.cells.map((cell, index) => (
                    <td key={index} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTableAllGuest;
