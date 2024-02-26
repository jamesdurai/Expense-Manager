// //import React from "react";
// import React, { useState } from "react";

// const ExpenseEntryItem = (props) => {
//   let [items, setItems] = useState(props.items);

//   function handleMouseEnter(e) {
//     e.target.parentNode.classList.add("highlight");
//   }

//   function handleMouseLeave(e) {
//     e.target.parentNode.classList.remove("highlight");
//   }

//   function handleMouseOver(e) {
//     console.log("The Mouse is at (" + e.clientX + "," + e.clientY + ")");
//   }

//   function handleDelete(id, e) {
//     e.preventDefault();
//     console.log(id);

//     let newItems = items.filter((item) => item.id !== id);

//     setItems(newItems);
//   }

//   function getTotal() {
//     let total = 0;
//     for (var i = 0; i < items.length; i++) {
//       total += items[i].amount;
//     }
//     return total;
//   }

//   const lists = items.map((item) => (
//     <tr
//       key={item.id}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <td>{item.name}</td>
//       <td>{item.amount}</td>
//       <td>{new Date(item.spendDate).toDateString()}</td>
//       <td>{item.category}</td>
//       <td>
//         <a href="#" onClick={(e) => handleDelete(item, id, e)}>
//           Remove
//         </a>
//       </td>
//     </tr>
//   ));

//   return (
//     <div>
//       <table onMouseOver={handleMouseOver}>
//         <thead>
//           <tr>
//             <th>Item</th>
//             <th>Amount</th>
//             <th>Date</th>
//             <th>Category</th>
//             <th>Remove</th>
//           </tr>
//         </thead>
//       </table>
//       <tbody>
//         {lists}
//         <tr>
//           <td colSpan="1" style={{ textAlign: "right" }}>
//             Total Amount
//           </td>
//           <td colSpan="4" style={{ textAlign: "left" }}>
//             {getTotal()}
//           </td>
//         </tr>
//       </tbody>
//     </div>
//   );
// };

// export default ExpenseEntryItem;

// function handleMouseEnter(e) {
//   e.target.parentNode.classList.add("highlight");
// }

// function handleMouseLeave(e) {
//   e.target.parentNode.classList.remove("highlight");
// }

// function handleMouseOver(e) {
//   console.log("The Mouse is at (" + e.clientX + "," + e.clientY + ")");
// }

// key={item.id}
// onMouseEnter={handleMouseEnter}
// onMouseLeave={handleMouseLeave}
