import React from "react";

function Transaction({id, date, description, category, amount}) {
  function handleDelete(event){
    fetch(`https://vickyprinz.github.io/db/db.json/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(result => result.json())
    .then(alert("Item deleted!"))
}

return (
  <tr>
    <td>{date}</td>
    <td>{amount}</td>
    <td>{category}</td>
    <td>{description}</td>
    <td>{<button onClick={handleDelete}>Delete</button>}</td>
  </tr>
);
}

export default Transaction;

