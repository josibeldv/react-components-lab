import { useState } from 'react';
import { Button } from './components/ui/Button';

export default function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter((previous) => previous + 1);
  };

  const unusedValue = 100;

  var result = 10;

  if (result == 10) {
    console.log('Prueba ESLint');
  }

  return (
    <main>
      <h1>React Components Lab</h1>

      <p>Contador: {counter}</p>

      <Button onClick={incrementCounter}>
        Incrementar
      </Button>
    </main>
  );
}