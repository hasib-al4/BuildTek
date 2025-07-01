import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box } from '@mui/material';

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
  <Box
    component="form"
    onSubmit={handleSubmit}
    sx={{
      display: 'flex',
      gap: 2,
      mb: 2,
      mt: 2,
      flexWrap: 'wrap'
    }}
  >
    <TextField label="Name" value={name} onChange={e => setName(e.target.value)} required />
    <TextField label="Floor" value={floor} onChange={e => setFloor(e.target.value)} required />
    <TextField label="Size" value={size} onChange={e => setSize(e.target.value)} required />
    <TextField label="Rent Amount" type="number" value={rentAmount} onChange={e => setRentAmount(e.target.value)} required />
    <Button type="submit" variant="contained">Add Shop</Button>
  </Box>
);

}

export default AddShop;
