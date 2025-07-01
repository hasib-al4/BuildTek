import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

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

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/shops/${id}`)
      .then(() => fetchShops())
      .catch(error => console.error(error));
  };

  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Floor</TableCell>
            <TableCell>Size</TableCell>
            <TableCell>Rent Amount</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {shops.map((shop) => (
            <TableRow key={shop._id}>
              <TableCell>{shop.name}</TableCell>
              <TableCell>{shop.floor}</TableCell>
              <TableCell>{shop.size}</TableCell>
              <TableCell>{shop.rentAmount}</TableCell>
              <TableCell>{shop.status}</TableCell>
              <TableCell>
                <IconButton color="error" onClick={() => handleDelete(shop._id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ShopList;
