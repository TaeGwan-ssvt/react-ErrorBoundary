import './App.css';
import { useState } from 'react';
import ErrorBoundary from './ErrorBoundary';
import Test from './Test';

function App() {
  const [isError, setIsError] = useState(false);

  const handleClick = () => {
    setIsError(!isError);
  };

  return (
    <div className="App">
      <ErrorBoundary>
        <Test isError={isError} />
      </ErrorBoundary>
      <button type="button" onClick={handleClick}>button</button>
    </div>
  );
}

export default App;
