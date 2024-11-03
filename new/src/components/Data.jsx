import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Data = () => {
    var[product,setproduct]=useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((response)=>{
            setproduct(response.data)
    })
    .catch((error)=>{
        console.error("Error fetching data:",error);
    });
},[])

  return (
   <div>
    <br /><br />
    <Grid container spacing={3}>
        {product.map((val) => {
            return (
                <Grid item xs={12} sm={6} md={4} key={val.id}>
                    <Card className="card" sx={{ maxWidth: 345 }}>
                        <CardMedia className="card-media">
                            <img src={val.image} alt={val.title} style={{ height: '100%', width: '50%' }} />
                        </CardMedia>
                        <CardContent className="card-content">
                            <Typography variant="h5" component="h2">
                                {val.category}
                            </Typography>
                            <Typography variant="body1">
                                {val.title}
                            </Typography>
                            <Typography variant="body2">
                                {val.price}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant='contained' color='primary'size="small">Share</Button> &nbsp; 
                            <Button variant='contained' color='primary' size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            );
        })}
    </Grid>
</div>

  )
}

export default Data