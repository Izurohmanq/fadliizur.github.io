import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function ClickCard({ image, judul, desc, tag, techstack, link}) {
  return (
    <>
      <Card sx={{ maxWidth: 300 }} className="m-5 border text-justify">
        <Link to={link} target="_blank" style={{ textDecoration: "none", color: "inherit" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={image}
              alt={judul}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {judul}
              </Typography>
              <Typography variant="body2" color="text.primary">
                {desc}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {tag}
              </Typography>
              <Typography variant="body2" color="text.primary">
                {techstack}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </>
  );
}
