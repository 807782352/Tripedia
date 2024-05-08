import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

const SpotCard: React.FC<SpotProps> = ({ spot }) => {
  const titleLen = spot.title.length;
  const title =
    titleLen > 20 ? spot.title.substring(0, 20) + "..." : spot.title;

  const briefLen = spot.brief.length;
  const brief =
    briefLen > 160 ? spot.brief.substring(0, 140) + "..." : spot.brief;

  return (
    <Card
      sx={{
        width: 300,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        sx={{
          width: "100%",
          height: "20vh",
          objectFit: "cover",
          objectPosition: "bottom",
        }}
        image={spot.imgPath}
      />
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Typography gutterBottom variant={"h5"} component="h3">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {brief}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 2,
        }}
      >
        <Box>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </Box>
        <Button variant="text">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default SpotCard;
