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
        Header: "Visitor",
        accessor: "guest_name",
      },
      {
        Header: "Contact",
        accessor: "guest_contact",
      },

      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "Tag",
        accessor: "tag_no",
      },
      {
        Header: "Staff Name",
        accessor: "staff_name",
      },
      {
        Header: "Division",
        accessor: "division",
      },
      {
        Header: "Department",
        accessor: "department",
      },
      {
        Header: "Direct Line",
        accessor: "direct_line",
      },
      {
        Header: "Extension",
        accessor: "extension",
      },
      {
        Header: "Room",
        accessor: "room_no",
      },
      {
        Header: "Purpose",
        accessor: "purpose",
      },
      {
        Header: "Company",
        accessor: "company",
      },
      {
        Header: "Time In",
        accessor: "time_in",
      },
      {
        Header: "Time Out",
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
