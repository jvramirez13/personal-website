import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import Container from "@material-ui/core/Container";
import Navbar from "./Navbar";
import Link from "@material-ui/core/Link";

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
    title: "Books and Author Project",
    description:
      "The web application asks for the title of a book and accesses the backend server to obtain the author of the entered title."
  },
  {
    title: "Charlottesville Restaurants Project",
    description:
      "This project shows the current open restaurants in Charlottesville, VA utilizing the Google Places API."
  },
  {
    title: "Personal Website",
    description:
      "The web application asks for the title of a book and accesses the backend server to obtain the author of the entered title."
  },
  {
    title: "Taxonomy Project",
    description:
      "This project shows the current open restaurants in Charlottesville, VA utilizing the Google Places API."
  }
];

const links = [
  "https://github.com/jvramirez13/pomodoro-project",
  "https://github.com/jvramirez13/star-wars-project"
];

const social = ["GitHub", "Twitter", "Facebook"];

const socialLinks = [
  "https://github.com/jvramirez13",
  "https://twitter.com/jvramirez13",
  "https://www.facebook.com/john.ramirez.94"
];

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Navbar />
        <main>
          {/* Main featured post */}
          {/* End main featured post */}

          <Grid container spacing={5} xs={12} className={classes.mainGrid}>
            {/* Main content */}
            <Grid item xs={12} md={12}>
              <Typography variant="h4" gutterBottom>
                Projects
              </Typography>
              <Grid container spacing={4} className={classes.cardGrid}>
                {featuredPosts.map((post, index) => (
                  <Grid item key={post.title} xs={12} md={6}>
                    <CardActionArea component="a" href={links[index]}>
                      <Card
                        className={classes.card}
                        style={{ maxHeight: "350px" }}
                      >
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
                            title="Image title"
                          />
                        </Hidden>
                      </Card>
                    </CardActionArea>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* End main content */}

            {/* End sidebar */}
          </Grid>
        </main>
      </Container>
      {/* Footer */}
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography
            variant="h6"
            gutterBottom
            className={classes.sidebarSection}
          >
            Social
          </Typography>
          {social.map((network, index) => (
            <Link
              display="block"
              variant="body1"
              href={socialLinks[index]}
              key={network}
            >
              {network}
            </Link>
          ))}
        </Container>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
