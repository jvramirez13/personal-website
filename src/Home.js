import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import avatar from "./avatar.png";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

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
      "This application start a 25-minute timer and allowslog the tasks that complete during that time interval."
  },
  {
    title: "Star Wars Characters Project",
    description:
      "This application allows users to get and display a random Star Wars character from an API with the click of a button."
  },
  {
    title: "Personal Website",
    description:
      "This is a personal website created using the React JS framework along with Google's Material UI framework."
  },
  {
    title: "Charlottesville Restaurant Project",
    description:
      "This application displays the open restaurants in Charlottesville using Google Places API."
  }
];

const links = [
  "https://github.com/jvramirez13/pomodoro-project",
  "https://github.com/jvramirez13/star-wars-project",
  "https://github.com/jvramirez13/personal-website",
  "https://github.com/jvramirez13/charlottesville-restaurant-project"
];

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Navbar />
        <main>
          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            {/* Increase the priority of the hero background image */}
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={1}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography
                    component="h2"
                    variant="h2"
                    color="inherit"
                    gutterBottom
                    style={{ fontFamily: "Helvetica Neue" }}
                  >
                    Welcome to my website.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
          {/* End main featured post */}

          <Grid container spacing={5} xs={12} className={classes.mainGrid}>
            {/* Main content */}
            <Grid item xs={12} md={8} alignItems="stretch">
              <Typography
                variant="h4"
                gutterBottom
                style={{ fontFamily: "Futura" }}
              >
                Example Projects
              </Typography>
              <Grid container spacing={4} className={classes.cardGrid}>
                {featuredPosts.map((post, index) => (
                  <Grid item key={post.title} xs={12} md={6}>
                    <CardActionArea component="a" href={links[index]}>
                      <Card
                        className={classes.card}
                        style={{ maxHeight: "141px" }}
                      >
                        <div className={classes.cardDetails}>
                          <CardContent>
                            <Typography
                              component="h2"
                              variant="h5"
                              style={{
                                fontFamily: "Helvetica Neue",
                                fontWeight: "440"
                              }}
                            >
                              {post.title}
                            </Typography>
                            <Typography
                              variant="subtitle1"
                              color="textSecondary"
                              style={{ fontFamily: "Helvetica Neue" }}
                            >
                              {post.date}
                            </Typography>
                            <Typography
                              variant="subtitle1"
                              paragraph
                              style={{ fontFamily: "Helvetica Neue" }}
                            >
                              {post.description}
                            </Typography>
                          </CardContent>
                        </div>
                      </Card>
                    </CardActionArea>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* End main content */}
            {/* Sidebar */}
            <Grid item xs={12} md={4} style={{ marginBottom: "0px" }}>
              <Typography
                variant="h4"
                gutterBottom
                style={{ fontFamily: "Futura" }}
              >
                About Me
              </Typography>

              <Paper
                elevation={0}
                className={classes.sidebarAboutBox}
                style={{ maxHeight: "316px" }}
              >
                <Typography
                  style={{
                    padding: "0px",
                    fontFamily: "Helvetica Neue",
                    fontSize: "16px"
                  }}
                >
                  I am a student at the University of Virginia majoring in
                  Computer Science looking towards a career as a front end web
                  developer.
                </Typography>
                <img
                  src={avatar}
                  alt="avatar"
                  style={{ width: "221px", height: "221px", padding: "19px" }}
                />
              </Paper>
            </Grid>
            {/* End sidebar */}
          </Grid>
        </main>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
