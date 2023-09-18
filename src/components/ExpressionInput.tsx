import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';

interface ExpressionInputProps {
  onCalculate: (expression: string) => void;
}

function ExpressionInput({ onCalculate }: ExpressionInputProps) {
  const [expression, setExpression] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpression(e.target.value);
  };

  const handleSubmit = () => {
    onCalculate(expression);
    setExpression('');
  };

  return (
    <Card>
      <CardContent>
        <TextField
          fullWidth={true}
          label='Expression'
          variant='outlined'
          value={expression}
          onChange={handleChange}
        />
      </CardContent>
      <CardActions>
        <Button
          color='primary'
          variant='contained'
          disabled={!expression}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </CardActions>
    </Card>
  );
}

export default ExpressionInput;
