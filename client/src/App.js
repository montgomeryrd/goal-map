import './App.css';
import { AppBar, Container, Grid, Grow, Typography } from '@material-ui/core';
import Posts from './components/posts/Posts';
import Form from './components/form/Form';

function App() {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="left">Growth</Typography>
        {/* <img src={logo} alt="growth" height="60" /> */}
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing="3">
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;