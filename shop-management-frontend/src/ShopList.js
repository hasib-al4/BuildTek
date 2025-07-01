import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddShop from './AddShop';

function ShopList() {
  const [shops, setShops] = useState([]);

  const fetchShops = () => {
    axios.get('http://localhost:5000/api/shops')
      .then(response => setShops(response.data))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    fetchShops();
  }, []);

  return (
    <div>
      <h2>Shops</h2>
      <AddShop onShopAdded={fetchShops} />
      <ul>
        {shops.map(shop => (
          <li key={shop._id}>{shop.name} - {shop.floor} - {shop.size}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShopList;
