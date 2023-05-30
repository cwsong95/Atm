import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ATMController from './App';

describe('ATMController', () => {
  it('should render the Insert Card button', () => {
    const { getByText } = render(<ATMController />);
    const insertCardButton = getByText('Insert Card');
    expect(insertCardButton).toBeInTheDocument();
  });

  it('should show PIN input after inserting card', () => {
    const { getByText, getByPlaceholderText } = render(<ATMController />);
    const insertCardButton = getByText('Insert Card');
    fireEvent.click(insertCardButton);
    const pinInput = getByPlaceholderText('Enter PIN');
    expect(pinInput).toBeInTheDocument();
  });

});
