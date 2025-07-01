import React, { useState } from 'react';
import axios from 'axios';

function AddShop({ onShopAdded }) {
  const [name, setName] = useState('');
  const [floor, setFloor] = useState('');
  const [size, setSize] = useState('');
  const [rentAmount, setRentAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/shops', {
        name,
        floor,
        size,
        rentAmount: Number(rentAmount),
        status: 'vacant',
        documents: []
      });
      setName('');
      setFloor('');
      setSize('');
      setRentAmount('');
      onShopAdded(); // Notify parent to refresh list
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
      <input placeholder="Floor" value={floor} onChange={e => setFloor(e.target.value)} required />
      <input placeholder="Size" value={size} onChange={e => setSize(e.target.value)} required />
      <input placeholder="Rent Amount" type="number" value={rentAmount} onChange={e => setRentAmount(e.target.value)} required />
      <button type="submit">Add Shop</button>
    </form>
  );
}

export default AddShop;
