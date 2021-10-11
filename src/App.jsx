import React from 'react'
// eslint-disable-next-line
import {Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@material-ui/core'
import {PhotoCamera} from '@material-ui/icons'
import useStyles from './styles'

const App = () => {
  const classes = useStyles()

  const cards = [1, 2, 3, 4, 5, 6, 7, 8]

    return (
      <>
       <CssBaseline />
       <AppBar position='relative'>
           <Toolbar>
           <PhotoCamera className={classes.icon}/> 
            <Typography variant='h6'>
                Photo Album
            </Typography>
          </Toolbar>
       </AppBar>
       <main>
          <div className={classes.container}>
            <Container maxWidth='sm'> 
              <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                  Photo Album
              </Typography>
              <Typography variant='h5' align='center' color='textSecondary' paragraph>
                  Hello everyone, this is a photo album
              </Typography>
              <div className={classes.buttons}>
                <Grid container spacing={2} justifyContent='center'>
                  <Grid item>
                    <Button variant='contained' color='primary'>
                      See my photos
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant='outlined' color='primary'>
                     Secondary action
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth='md'>
            <Grid container spacing={4}>
              {cards.map((card)=> (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia 
                    className={classes.CardMedia}
                    image='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'
                    title='image title'
                    />
                    <CardContent className={classes.CardContent}>
                      <Typography gutterBottom variant='h5'>
                        Heading
                      </Typography>
                      <Typography>
                        This is a media card. You can use this section to describe the content.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size='small' color='primary'>
                        View
                      </Button>
                      <Button size='small' color='primary'>
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
              
            </Grid>
          </Container>  
        </main>
        <footer className={classes.footer}>
          <Typography variant='h6' align='center' gutterBottom>
            This is a footer
          </Typography>
          <Typography variant='subtitle1' align='center' color='textSecondary'>
              Someting else
          </Typography>
        </footer>
      </>
    )
}

export default App

// inline styling style={{marginTop: '100px'}}

// import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
 /* <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup> */