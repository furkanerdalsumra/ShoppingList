export default function Item({ item, onDeleteItem }) {
    return (
      <li>
        <span> {item.quantity} {item.title}</span>
        <button onClick={() => onDeleteItem(item.id)}>X</button>
      </li>
    );
  }