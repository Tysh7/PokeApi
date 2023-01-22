import { render, screen } from '@testing-library/react';
import App from './App';

// Testing Component renders to match 

test('renders correctly if there are pokemon', () => {
  const output = render(<App />);
  expect(output).toMatchSnapshot();
});
