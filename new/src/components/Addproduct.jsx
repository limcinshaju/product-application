import { Button, TextField } from '@mui/material'
import React from 'react'


const Addproduct = () => {
  return (
    <div class="form">
      <br />
        <h1>Add Product</h1>
        <br /><br />
        <TextField variant='outlined'color='inherit'label='Product Name'></TextField><br /><br />
        <TextField variant='outlined'color='inherit'label='Description'></TextField><br /><br />
        <TextField variant='outlined'color='inherit'label='Price'></TextField><br /><br />
        <TextField variant='outlined'color='inherit'label='Category'></TextField><br /><br />
        <Button variant='contained' color='primary'>add</Button>
    </div>
  )
}

export default Addproduct