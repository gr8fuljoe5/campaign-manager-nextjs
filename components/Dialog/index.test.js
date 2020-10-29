import { render, screen } from '@testing-library/react';
import Dialog from './index';

describe('Dialog', () => {
  test('renders a success Dialog', () => {
    render(<Dialog openDialog={true} response={{ status: 'SUCCESS' }} />);
    const title = screen.getByText(/success!/i);
    const description = screen.getByText(
      /All Selected Creatives have been successfully uploaded/
    );
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  test('renders an error Dialog', () => {
    render(<Dialog openDialog={true} response={{ status: 'ERROR' }} />);
    const title = screen.getByText(/error/i);
    const description = screen.getByText(
      /Please check the console for more information/
    );
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
