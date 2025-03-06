import { useState } from "react";
import Form from "./components/Form.jsx";
import List from "./components/List.jsx";
import Header from "./components/Header.jsx";
import Summary from "./components/Summary.jsx";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items => [...items, item]));
  }

  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id));
  }

  function handleClearList(){
    const confirmation = window.confirm("Listedeki tüm ürünleri silmek istediğinizden emin misiniz?");
    if(confirmation){
      setItems([]);
    }
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} onClearList={handleClearList}/>
      <List items={items} onDeleteItem={handleDeleteItem} />
      <Summary items={items}/>
    </div>
  );
}

export default App