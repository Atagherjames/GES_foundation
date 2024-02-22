import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
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
              image="/asset/Children.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <Link
                  href={"/news/onemanvillagechildsupport"}
                  className={styles.newsHeader}
                >
                  Silver SEG Foundation Brings Hope to Children in One Man
                  Village
                </Link>
              </Typography>
              <Typography gutterBottom variant="p" component="p">
                Posted on Feb 2, 2024
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Silver SEG Foundation launches a special initiative to support
                children in One Man Village, Nassarawa State, bringing hope and
                positive change to the community.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link href={"/news/onemanvillagechildsupport"}>Learn more</Link>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image="/asset/community.jpg"
              alt="Community Support"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <Link
                  href={"/news/community-support"}
                  className={styles.newsHeader}
                >
                  Silver SEG Foundation Launches Ambitious Community Support
                  Initiative
                </Link>
              </Typography>
              <Typography gutterBottom variant="p" component="p">
                Jan 04, 2024
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Silver SEG Foundation, under the visionary leadership of
                Sylvester Ejembi Ikwebe, announces a multifaceted community
                support initiative, aiming to uplift and transform communities
                throughout Nigeria.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link href={"/news/community-support"}>Learn more</Link>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default News;
