import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';

import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocationCityIcon from '@material-ui/icons/LocationCity';

import Modal from '@material-ui/core/Modal';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        austinyatesportfolio.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  paper: {
    position: 'absolute',
    width: 800,
    height:700,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    borderRadius: '5px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function Album() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title" style={{fontSize:25}}>About Me</h2>
      <p id="simple-modal-description">
     
      <h3 style={{paddingTop:10, marginTop:10, fontSize:30}}>I began coding at the age of 16 skillfully enough was able to recieve an internship to microsoft at 17 and it's been a journey since. I've work in langues from Html, Css, Javscript,C# but my specialty in particular is React.js. MERN Stack</h3>
       
      </p>
      
      <Modal />
    </div>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          
          <Typography variant="h6" color="inherit" noWrap>
            Austin Yates 
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Austin Yates Portfolio
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            
              Full stack React Developer
              <p>
                <span>
                  <LocationCityIcon />
                </span>
                  Location: New York, NY
                
              </p>
              
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" onClick={handleOpen}>
                    About Me
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                  >
                    <h4>{body}</h4>

                  </Modal>

                  <div className={classes.heroButtons}>
              <Grid container spacing={6} justify="center">
                <Grid item>
                    <Link href="https://github.com/AustinStoneui">
                    <GitHubIcon ariant="contained" color="primary" style={{ fontSize: 40 }} />
                    </Link>
                </Grid>
                <Grid item>
                    <Link href="https://www.linkedin.com/in/austin-yates-39828014a">
                    <LinkedInIcon ariant="contained" color="primary" style={{ fontSize: 50, marginTop:-4 }} />
                    </Link>
                </Grid>
              </Grid>
            </div>
                </Grid>
                
              </Grid>
             
            </div>
            
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid className="MyWork" container spacing={4}>
                
              <Grid  item key={classes} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Amazon Clone
                    </Typography>
                    <Typography>
                     Fully front-end and active E-commerce functionality. 
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button href="https://github.com/AustinStoneui/Amazon-clone" size="small" color="primary">
                      Host
                    </Button>
                    <Button href="https://github.com/AustinStoneui/Amazon-clone" size="small" color="primary">
                      Source
                    </Button>
                    
                  </CardActions>
                </Card>
              </Grid>

              <Grid item key={classes} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://aldianews.com/sites/default/files/articles/spotify-logo-1920x1080_fouoik-1.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Spotify Clone
                    </Typography>
                    <Typography>
                      Full spotify app using spotify Api and React for development.
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button href="https://github.com/AustinStoneui/spotify-Clone" size="small" color="primary">
                      Host
                    </Button>
                    <Button  href="https://github.com/AustinStoneui/spotify-Clone" size="small" color="primary">
                      Source
                    </Button>
                   
                  </CardActions>
                </Card>
              </Grid>

              
   
              <Grid item key={classes} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://cdn.geekwire.com/wp-content/uploads/2020/03/Nucamp-Logo-300x240.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Nucampsite React
                    </Typography>
                    <Typography>
                      Website for a campsite,full comment section, event planning.Done using Redux.
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button href="https://github.com/AustinStoneui/Nucampsite-Reactified" size="small" color="primary">
                      Host
                    </Button>
                    <Button  href="https://github.com/AustinStoneui/Nucampsite-Reactified" size="small" color="primary">
                      Source
                    </Button>
                   
                  </CardActions>
                </Card>
              </Grid>

              <Grid item key={classes} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://cdn4.vectorstock.com/i/1000x1000/20/08/gold-alphabet-letter-d-logo-icon-design-vector-21362008.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Deja'me  
                      
                    </Typography>
                    <Typography>
                      Ecommerce clothing website
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button href="https://compassionate-shannon-10559d.netlify.app" size="small" color="primary">
                      Host
                    </Button>
                    <Button href="https://github.com/AustinStoneui/DejaMe" size="small" color="primary">
                      Source
                    </Button>
                   
                  </CardActions>
                </Card>
              </Grid>

              <Grid item key={classes} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://images-na.ssl-images-amazon.com/images/I/6146X5NOj8L.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     Birthday Reminder
                      
                    </Typography>
                    <Typography>
                      Birthday Reminder developed using React.js
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button href="https://affectionate-spence-f58160.netlify.app" size="small" color="primary">
                      Host
                    </Button>
                    <Button href="https://github.com/AustinStoneui/Birthday-reminder" size="small" color="primary">
                      Source
                    </Button>
                   
                  </CardActions>
                </Card>
              </Grid>

              <Grid item key={classes} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://timothytcliu.github.io/React-nucampsite/static/media/redux-woods.dfcc8ddc.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Nucampsite <br/>  
                      React-Native
                    </Typography>
                    <Typography>
                      Android app made for Nucampsite. Developeed in React-native
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button href="https://github.com/AustinStoneui/Nucampsite-React-Native" size="small" color="primary">
                      Host
                    </Button>
                    <Button href="https://github.com/AustinStoneui/Nucampsite-React-Native" size="small" color="primary">
                      Source
                    </Button>
                   
                  </CardActions>
                </Card>
              </Grid>

              <Grid item key={classes} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pmx070118summercamping-005-1529681336.jpg?resize=480:*"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Nucampsite
                    </Typography>
                    <Typography>
                      Nucampsite in Html,css, and javascript. Mobile friendly with Bootstrap library.
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button href="https://github.com/AustinStoneui/NucampSite" size="small" color="primary">
                      Host
                    </Button>
                    <Button  href="https://github.com/AustinStoneui/NucampSite" size="small" color="primary">
                      Source
                    </Button>
                    
                  </CardActions>
                </Card>
              </Grid>

              

              <Grid item key={classes} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://res.cloudinary.com/soundbetter/image/upload/c_fill,f_auto,g_face:auto,h_533,q_90,w_763/v1541355582/assets/photos/81936/DSC_5318_highcontrast.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Max Studios
                    </Typography>
                    <Typography>
                     Website for a studio .Developed in HTML,Css,javascript and Bootstrap
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button href="https://distracted-rosalind-2da92f.netlify.app/" size="small" color="primary">
                      Host
                    </Button>
                    <Button  href="https://github.com/AustinStoneui/Max-studios" size="small" color="primary">
                      Source
                    </Button>
                    
                  </CardActions>
                </Card>
              </Grid>

              <Grid item key={classes} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://wi-images.condecdn.net/image/doEYpG6Xd87/crop/2040/f/weather.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Weather App
                    </Typography>
                    <Typography>
                      weather app created using open source weatherApi and Html, Css, and javascript
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button href="https://heuristic-franklin-b50c20.netlify.app" size="small" color="primary">
                      Host
                    </Button>
                    <Button  href="https://github.com/AustinStoneui/weather-app-api" size="small" color="primary">
                      Source
                    </Button>
                   
                  </CardActions>
                </Card>
              </Grid>

              <Grid item key={classes} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://ak.picdn.net/shutterstock/videos/1047179302/thumb/1.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Digital clock
                    </Typography>
                    <Typography>
                      digital clock developed with javascript
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button href="https://laughing-mirzakhani-759f5e.netlify.app" size="small" color="primary">
                      Host
                    </Button>
                    <Button  href="https://github.com/AustinStoneui/weather-app-api" size="small" color="primary">
                      Source
                    </Button>
                   
                  </CardActions>
                </Card>
              </Grid>
            
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
         
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}