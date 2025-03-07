export default function Summary({ items }) {
    const itemsCount = items.length;
    let totalCount = 0;
  
    if (itemsCount === 0) {
      return (
        <footer className="summary">Alışveriş sepetiniz boş.</footer>
      );
    }
    for (let i = 0; i < items.length; i++) {
      totalCount = totalCount + Number(items[i].quantity);
    }
    return (
      <footer className="summary">Alışveriş sepetinizde {itemsCount} farklı üründen {totalCount} adet bulunmaktadır.</footer>
    );
  }
  