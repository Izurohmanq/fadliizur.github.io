import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ClickCard({ image, judul, desc, tag, utils, link }) {
  return (
    <>
      <Card
        sx={{ maxWidth: 300, height: 380 }}
        className="m-5 transition ease-in-out hover:scale-110 border border-4 text-justify"
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={image[0]}
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
            <Typography
              variant="body2"
              color="text.secondary"
              className="truncate w-full"
            >
              {tag}
            </Typography>
            <Typography variant="body2" color="text.primary">
              {utils}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
