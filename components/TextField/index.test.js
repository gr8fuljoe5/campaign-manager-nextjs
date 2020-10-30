import { render, screen } from '@testing-library/react';
import NumberFormatCustom from '../CurrencyInput/index';
import TextField from './index';

describe('TextField', () => {
  test('renders a TextField', () => {
    render(<TextField value="ABC 123" />);
    const input = screen.getByDisplayValue('ABC 123');
    expect(input).toBeInTheDocument();
  });

  test('renders a CurrencyInput', () => {
    render(
      <TextField
        defaultValue={1234.22}
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
      />
    );
    const input = screen.getByDisplayValue('$1,234.22');
    expect(input).toBeInTheDocument();
  });
});
