import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import githubLogo from "./githubLogo.png";
import linkedinLogo from "./linkedinLogo.png";
import twitterLogo from "./twitterLogo.png";
import facebookLogo from "./facebookLogo.png";

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

const social = ["GitHub", "LinkedIn", "Twitter", "Facebook"];

const logos = [githubLogo, linkedinLogo, twitterLogo, facebookLogo];

const height = ["46px", "46px", "46px", "49px"];

const width = ["55px", "55px", "50px", "55px"];

const socialLinks = [
  "https://github.com/jvramirez13",
  "https://www.linkedin.com/in/jvramirez13/",
  "https://twitter.com/jvramirez13",
  "https://www.facebook.com/john.ramirez.94"
];

export default function Footer() {
  const classes = useStyles();
  return (
    <div>
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography
            variant="h5"
            gutterBottom
            className={classes.sidebarSection}
            style={{ fontFamily: "Futura" }}
          >
            Social Profiles
          </Typography>
          <div justifyContent="flex-start">
            {social.map((network, index) => (
              <Link
                display="flex"
                variant="body1"
                href={socialLinks[index]}
                key={network}
                style={{ padding: "20px" }}
              >
                <img
                  alt="logo"
                  src={logos[index]}
                  height={height[index]}
                  width={width[index]}
                  justifyContent="center"
                />
              </Link>
            ))}
          </div>
        </Container>
      </footer>
    </div>
  );
}
