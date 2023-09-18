import React, { useState } from 'react';
import ExpressionInput from './ExpressionInput';
import { Results } from './Results';
import Calculation from '../logic/Calculation';
import { Layout } from './Layout';

function App() {
  const [history, setHistory] = useState<string[]>([]);

  const handleCalculation = (expression: string) => {
    try {
      const result = Calculation.calculate(expression);
      if (result !== undefined) {
        const historyEntry = `${expression} = ${result}`;
        setHistory([historyEntry, ...history]);
      } else {
        setHistory(['Wrong input!', ...history]);
      }
    } catch (error) {
      console.error('Calculation error:', error);
      setHistory([
        `Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
        ...history
      ]);
    }
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  return (
    <Layout>
      <ExpressionInput onCalculate={handleCalculation} />
      <Results history={history} onClearHistory={handleClearHistory} />
    </Layout>
  );
}

export default App;
