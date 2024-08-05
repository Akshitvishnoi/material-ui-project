import { Container, createTheme, Grid, ThemeProvider } from '@mui/material';
import './App.css';
import Header from './components/Header';
import Featuredpost from './components/FeaturedPost';
import { featuredPosts, sidebar } from './data/Data';
import PostCard from './components/PostCard';
import Main from './components/Main';
import { makeStyles } from '@mui/styles';
import SideBar from './components/SideBar';
import Footer from './components/Footer';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
  },
}));
function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
        <Featuredpost />
        <br />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </Grid>
        <Grid container spacing={5} className={classes.mainGrid}>
          <Main title="Direct from the Nature" />
          <SideBar title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social} />
        </Grid>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>

  );
}

export default App;
