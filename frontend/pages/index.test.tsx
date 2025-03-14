/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import React from 'react';
import { birdWalkEvents } from '../components/Appointments/Appointments.test';
import Home from './index';

describe('Home', () => {
  it('renders our heading', () => {
    render(<Home events={birdWalkEvents} />);

    const heading = screen.getByRole('heading', {
      name: /When do you want to visit?/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
