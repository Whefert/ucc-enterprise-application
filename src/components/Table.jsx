function Table({ data, columns, ...props }) {
  //   data = [
  //     {
  //       id: 1,
  //       name: "John Doe",
  //       email: "jeff@gmail.com",
  //       phone: "876-123-4567",
  //       address: "123 Main Street",
  //       city: "Kingston",
  //     },
  //   ];

  //   columns = ["id", "name", "email", "phone", "address", "city"];

  return (
    <table className="border-collapse border border-gray-800">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index} className="border border-gray-800 p-1">
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((column, index) => (
              <td key={index} className="border border-gray-800 p-1">
                {row[column]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
