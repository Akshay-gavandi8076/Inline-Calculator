import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import HelpIcon from '@material-ui/icons/Help';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { createTheme } from '@material-ui/core/styles/';

interface LayoutProps {
  children?: any;
}

const useStyles = makeStyles(() => ({
  container: {
    marginTop: 25
  },
  logoWrapper: {
    flexGrow: 3,
    alignItems: 'center',
    display: 'flex'
  }
}));

const designTheme = createTheme({
  palette: {
    primary: {
      main: '#a71417'
    }
  }
});

export const Layout = ({ children }: LayoutProps) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={designTheme}>
      <CssBaseline />
      <AppBar position='static' color='transparent'>
        <Toolbar>
          <Grid item xs={12}>
            <Typography variant='h4'>Inline Calculator</Typography>
          </Grid>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://github.com/Akshay-gavandi8076/Inline-Calculator'
          >
            <IconButton>
              <HelpIcon />
            </IconButton>
          </a>
        </Toolbar>
      </AppBar>
      <Container
        data-testid='layout'
        maxWidth='sm'
        className={classes.container}
      >
        <Grid spacing={2} container>
          {children.map((child: any, index: any) => (
            <Grid item xs={12} key={index}>
              {child}
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};
