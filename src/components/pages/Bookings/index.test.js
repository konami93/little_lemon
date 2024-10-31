import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Bookings from './';

describe('Booking page', () => {
  const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

  test('should have one or more available booking time options', async () => {
    render(
      <MemoryRouter>
        <Bookings />
      </MemoryRouter>
    );

    const timeOptions = await screen.findAllByTestId('booking-time-option');

    expect(timeOptions.length).toBeGreaterThanOrEqual(1);
    timeOptions.forEach(timeOption =>
      expect(timeOption.value).toMatch(timeFormat)
    );
  });

  test('should update available booking time options when changing booking date', async () => {
    render(
      <MemoryRouter>
        <Bookings />
      </MemoryRouter>
    );

    const dateInput = screen.getByLabelText(/Date/);
    const initialTimeOptions = await screen.findAllByTestId('booking-time-option');
    const getTimeOptionValues = (options) => options.map(option => option.value);
    const initialTimeOptionValues = getTimeOptionValues(initialTimeOptions);

    // Cambia la fecha a un día diferente
    fireEvent.change(dateInput, { target: { value: '2023-04-02' } });
    fireEvent.blur(dateInput);

    // Espera a que se actualicen las opciones de tiempo
    await screen.findAllByTestId('booking-time-option');

    const updatedTimeOptions = await screen.findAllByTestId('booking-time-option');
    const updatedTimeOptionValues = getTimeOptionValues(updatedTimeOptions);

    expect(dateInput).toHaveValue('2023-04-02');
    expect(updatedTimeOptions.length).toBeGreaterThan(0);
    expect(JSON.stringify(initialTimeOptionValues)).not.toBe(JSON.stringify(updatedTimeOptionValues));
  });

  //test('', () => {});
});
