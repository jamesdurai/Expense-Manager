import React, { useState } from "react";
import { IoIosRemoveCircleOutline } from "react-icons/io";

const ExpenseEntryItem = (props) => {
  let [items, setItems] = useState(props.items);

  function handleDelete(id, e) {
    e.preventDefault();
    console.log(id);

    let newItems = items.filter((item) => item.id !== id);

    setItems(newItems);
  }

  function getTotal() {
    let total = 0;
    for (var i = 0; i < items.length; i++) {
      total += items[i].amount;
    }
    return total;
  }

  const lists = items.map((item) => (
    <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.amount}</td>
      <td>{new Date(item.spendDate).toDateString()}</td>
      <td>{item.category}</td>
      <td>
        {" "}
        <a onClick={(e) => handleDelete(item.id, e)}>
          <IoIosRemoveCircleOutline />
        </a>
      </td>
    </tr>
  ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Category</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {lists}
          <tr>
            <td colSpan="1" style={{ textAlign: "right" }}>
              Total Amount
            </td>
            <td colSpan="4" style={{ textAlign: "left" }}>
              {getTotal()}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseEntryItem;
