import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Link from "next/link";
import styles from "./news.module.css";

const News = () => {
  return (
    <div className={styles.newsContainer}>
      <h1>LATEST NEWS</h1>
      <div className={styles.news}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image="/asset/education.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <Link href={"/"} className={styles.newsHeader}>
                  Foundational
                </Link>
              </Typography>
              <Typography gutterBottom variant="p" component="p">
                Dec, 3 2024
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link href={"/"}>Learn more</Link>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image="/asset/Children.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <Link href={"/"} className={styles.newsHeader}>
                  RECENT NEWS
                </Link>
              </Typography>
              <Typography gutterBottom variant="p" component="p">
                Dec, 3 2024
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link href={"/"}>Learn more</Link>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image="/asset/house.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <Link href={"/"} className={styles.newsHeader}>
                  Updated News
                </Link>
              </Typography>
              <Typography gutterBottom variant="p" component="p">
                Dec, 3 2024
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link href={"/"}>Learn more</Link>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default News;
