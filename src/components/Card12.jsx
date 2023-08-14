import axios from "axios";
import  { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
import Grid from '@mui/material/Grid';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const Card12 = () => {
  const [data, setData] = useState();
  const getData = async () => {
    try {
      const a = await axios.get("https://dummyjson.com/products");
      console.log(a,'')
      setData(a.data.products);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(data, "data");
  return (
    <Box>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}  rowSpacing={{ xs: 3, sm: 2, md: 3 }} sx={{p:2}}>
    {data&&data.map((ele)=>(
      
      <Grid item key={ele.id} xs={12} sm={6} md={3} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>

      <Card sx={{ maxWidth: 300 }} >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={ele.images[0]}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {ele.brand}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {ele.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">Read more <ArrowRightAltIcon/></Button>
      </CardActions>
    </Card> 
    </Grid>
    ))}
     </Grid>
    </Box>
  );
};

export default Card12;
