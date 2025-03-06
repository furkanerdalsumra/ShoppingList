import Item from "./Item.jsx";

export default function List({ items, onDeleteItem }) {
    return <>
      {
        items.length > 0 ? (
          <div className="list">
            <ul>
              {items.map((i, index) => (<Item item={i} key={index} onDeleteItem={onDeleteItem} />))}
            </ul>
          </div>
        ) :
          <div className="list">Sepette ürün yok.</div>
      }
    </>;
  }