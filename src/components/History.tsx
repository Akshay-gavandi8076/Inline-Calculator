import React from 'react';

interface HistoryProps {
  history: string[];
  onClearHistory: () => void;
}

function History({ history, onClearHistory }: HistoryProps) {
  return (
    <div>
      <h2>History</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={onClearHistory}>Clear History</button>
    </div>
  );
}

export default History;
