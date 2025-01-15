import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({info}) {
    const Init_URL= "https://media.istockphoto.com/id/824800468/photo/sun-on-blue-sky-with-clouds.webp?a=1&b=1&s=612x612&w=0&k=20&c=Slo8PLbmJmONDCBRazEkAwLj1LEqLb8AGmG82uyW0uI=";
    let COLD_URL= "https://images.unsplash.com/photo-1550077404-c00d89693129?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let HOT_URL= "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let RAIN_URL= "https://images.unsplash.com/photo-1438449805896-28a666819a20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    return (
        <div className='InfoBox'>
         <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={info.humidity>80 ? RAIN_URL : info.temp>15 ? HOT_URL: COLD_URL}
            />
         <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.city} {info.humidity>80 ? <ThunderstormIcon/> : info.temp>15 ? <WbSunnyIcon/>: <AcUnitIcon/>}
               </Typography>
             <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                <p>Temperature= {info.temp}&deg;C</p>
                <p>Humidity= {info.humidity}</p>
                <p>Min Temp= {info.tempMin}&deg;C</p>
                <p>Max Temp= {info.tempMax}&deg;C</p>
                <p>The weather can be described as <i>{info.weather}</i> & feels like {info.feelsLike}&deg;C</p>
              </Typography>
           </CardContent>
        </Card>
        </div>
            
    </div>
    )
}