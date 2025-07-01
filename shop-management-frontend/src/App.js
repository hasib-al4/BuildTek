import React from 'react';
import ShopList from './ShopList';      // or './components/ShopList' if it's in a folder
import AddShop from './AddShop';        // or './components/AddShop'

function App() {
  const [refresh, setRefresh] = React.useState(false);

  return (
    <div style={{ maxWidth: 900, margin: '40px auto', padding: 24 }}>
      <h1>Shop Management Dashboard</h1>
      <AddShop onShopAdded={() => setRefresh(r => !r)} />
      <ShopList key={refresh} />
    </div>
  );
}

export default App;
