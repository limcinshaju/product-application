import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <br /><br />
        <AppBar sx={{
           background:  'rgb(234,232,155)',
           background: 'linear-gradient(252deg, rgba(234,232,155,1) 0%, rgba(144,74,79,1) 100%)',
        }}>
            <Toolbar>
                <Typography variant='h6' color='inherit'>PRODUCT APPLICATION</Typography> <hr />
                <Link to={'/p'}><Button variant='contained' color='success'>Products</Button></Link> &nbsp; &nbsp;
               <Link to={'/a'}> <Button variant='contained' color='success'>Add Product</Button></Link> 
                
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar