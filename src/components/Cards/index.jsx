import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function ClickCard({ Image, Title, Desc, href }) {
  return (
    <>
      <Card sx={{ maxWidth: 300 }} className="m-5 border">
        <Link to={href} target="_blank" style={{ textDecoration: "none", color: "inherit" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={Image}
              alt="green iguana"
              href={href}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {Title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {Desc}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </>
  );
}
