import style from "./TransactionHistory.module.css";
export const TransactionHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead className={style.headTable}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={style.tbody}>
        {items.map((item) => (
          <tr key={item.id} className={style.сolumn}>
            <td className={style.tbody}>{item.type}</td>
            <td className={style.tbody}>{item.amount}</td>
            <td className={style.tbody}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
