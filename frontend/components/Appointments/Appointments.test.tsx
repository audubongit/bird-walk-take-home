import { render, screen } from '@testing-library/react';
import { Appointments } from '../Appointments';

export const birdWalkEvents = [
  {
    startTime: '2022-02-01T10:00:00.000-08:00',
    endTime: '2022-02-01T10:30:00.000-08:00',
    length: 30,
    centerId: '1',
  },
  {
    startTime: '2022-02-01T10:30:00.000-08:00',
    endTime: '2022-02-01T11:00:00.000-08:00',
    length: 30,
    centerId: '1',
  },
  {
    startTime: '2022-02-01T11:00:00.000-08:00',
    endTime: '2022-02-01T11:30:00.000-08:00',
    length: 30,
    centerId: '1',
  },
];

describe('Appointments', () => {
  it('renders a title', () => {
    render(<Appointments events={birdWalkEvents} />);

    const title = screen.getByText(
      /We have some Bird Walk slots available for you./
    );

    expect(title).toBeInTheDocument();
  });

  it('renders bird walk appointments', () => {
    render(<Appointments events={birdWalkEvents} />);
    const buttons = screen.getAllByRole('button');
    buttons.map((button) => expect(button).toBeInTheDocument());
  });
});
