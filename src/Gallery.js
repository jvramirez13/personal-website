import React from "react";
import Navbar from "./Navbar.js";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import pomodoro from "./pomodoroPage.png";
import starwars from "./starwarsPage.png";

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto"
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  },
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage:
      "url(https://news.virginia.edu/sites/default/files/styles/uva_basic_article/public/article_image/rotunda_summer_ss_header_3-2.jpg?itok=PP8Nw9vX)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)"
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  },
  mainGrid: {
    marginTop: theme.spacing(3)
  },
  card: {
    display: "flex"
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0)
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200]
  },
  sidebarSection: {
    marginTop: theme.spacing(3)
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0)
  }
}));

const featuredPosts = [
  {
    title: "Pomodoro Project",
    description:
      "This application allows users to start a 25-minute timer and log the tasks that they complete during that time interval."
  },
  {
    title: "Star Wars Characters Project",
    description:
      "This application displays a certain Star Wars character from an API with the click of a button."
  },
  {
    title: "Star Wars Characters Project",
    description:
      "This application displays a certain Star Wars character from an API with the click of a button."
  },
  {
    title: "Star Wars Characters Project",
    description:
      "This application displays a certain Star Wars character from an API with the click of a button."
  }
];

const links = [
  "https://github.com/jvramirez13/pomodoro-project",
  "https://github.com/jvramirez13/star-wars-project"
];

const pics = [pomodoro, starwars];

export default function Gallery() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Navbar />
        <main>
          {/* Main featured post */}
          {/* End main featured post */}

          
            <Grid item xs={3} md={8}>
              <Typography variant="h4" gutterBottom>
                Example Projects
              </Typography>
              <Divider />
              <Grid container spacing={4} className={classes.cardGrid}>
                {featuredPosts.map((post, index) => (
                  <Grid item key={post.title} xs={12} md={6}>
                    <CardActionArea component="a" href={links[index]}>
                      <Card className={classes.card}>
                        <div className={classes.cardDetails}>
                          <CardContent>
                            <Typography component="h2" variant="h5">
                              {post.title}
                            </Typography>
                            <Typography
                              variant="subtitle1"
                              color="textSecondary"
                            >
                              {post.date}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                              {post.description}
                            </Typography>
                          </CardContent>
                        </div>
                        <Hidden xsDown>
                          <CardMedia
                            style={{
                              width: "70vw",
                              transitionDuration: "0.3s"
                            }}
                            className={classes.cardMedia}
                            image={pics[index]}
                            title="Image title"
                          />
                        </Hidden>
                      </Card>
                    </CardActionArea>
                  </Grid>
                ))}
              </Grid>
            </Grid>
         
        </main>
      </Container>
    </React.Fragment>
  );
}
