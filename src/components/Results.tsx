import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import { Button, CardActions, makeStyles } from '@material-ui/core';

interface ResultsProps {
  history: string[];
  onClearHistory: () => void;
}

const useStyles = makeStyles(() => ({
  container: {
    marginTop: 20
  },
  span1: {
    marginLeft: '1rem'
  },
  span2: {
    marginLeft: '1.4rem'
  },
  textColor: {
    color: '#7c7c7c'
  }
}));

export const Results = ({ history, onClearHistory }: ResultsProps) => {
  const classes = useStyles();

  return (
    <>
      <Card data-testid='results'>
        <CardContent>
          <Typography variant='h5'>Results</Typography>
          <div className={classes.container}>
            {history.map((item, index) => (
              <Typography variant='subtitle1' key={index}>
                {index === 0 ? (
                  <div>
                    <span className={classes.textColor}>
                      <SubdirectoryArrowRightIcon
                        style={{ fontSize: '1.2rem' }}
                      />
                    </span>
                    <span className={classes.span1}>{item}</span>
                  </div>
                ) : (
                  <Typography>
                    <span className={classes.textColor}>{index}</span>
                    <span className={classes.span2}> {item}</span>
                  </Typography>
                )}
              </Typography>
            ))}
          </div>
        </CardContent>
        <CardActions>
          <Button color='primary' variant='outlined' onClick={onClearHistory}>
            ERASE RESULTS
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
