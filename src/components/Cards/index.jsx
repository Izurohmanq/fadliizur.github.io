import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function ClickCard({ image, judul, desc, tag, utils, link}) {
  return (
    <>
      <Card sx={{ maxWidth: 300, height:440 }} className="m-5 border border-4 text-justify">
        <Link to={link} target="_blank" style={{ textDecoration: "none", color: "inherit" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={image}
              alt={judul}
              sx={{ objectFit: "cover", width: "100%", height: "150px" }}
              loading="lazy"
            />
            <CardContent sx={{ height: 260 }}>
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
                {utils}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </>
  );
}
