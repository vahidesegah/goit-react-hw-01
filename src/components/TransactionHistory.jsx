/* eslint-disable react/prop-types */
export default function TransactionHistory({ items }) {
  return (
    <table className="container table table-striped table-hover text-center table-bordered border-dark">
      <thead className="table-dark">
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
