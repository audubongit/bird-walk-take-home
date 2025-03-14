import { DateTime, Interval } from 'luxon';

interface CenterEvent {
  startTime: string;
  endTime: string;
  length: number;
  centerId: string;
}

export async function getEvents(): Promise<CenterEvent[]> {
  // Start with today
  const now = DateTime.now().setZone('America/Los_Angeles').startOf('day');

  // Get each day for the next 2 months
  const dates = Interval.fromDateTimes(now, now.plus({ months: 2 })).splitBy({
    days: 1,
  });

  // For each day in the next 2 months, return an interval of an available open times (9am to 9pm)
  const eventOpenIntervals = dates.map((interval) => {
    const start = interval.start.set({ hour: 9, minute: 0 }).startOf('minute');
    const end = interval.start.set({ hour: 21, minute: 0 }).startOf('minute');
    return Interval.fromDateTimes(start, end);
  });

  // We'll have 5 Audubon centers (see the /centers endpoint for specific mocked data per Audubon Center)
  const centerIds = [1, 2, 3];

  // For each center, return a single array of available event slots during the open intervals
  const events = centerIds.flatMap((id) => {
    const eventsPerOpenIntervals = eventOpenIntervals.flatMap(
      (openInterval) => {
        const eventTimeSlots = openInterval.splitBy({ minutes: 30 });
        const event = eventTimeSlots.map((slot) => ({
          startTime: slot.start.toISO(),
          endTime: slot.end.toISO(),
          length: slot.length('minutes'),
          centerId: `${id}`,
        }));

        return event;
      }
    );

    return eventsPerOpenIntervals;
  });

  return events;
}
