import { getCenters } from './centers';

test('it returns the centers', async () => {
  const centers = await getCenters();

  expect(centers).toEqual([
    {
      id: '1',
      name: 'Trinity River Audubon Center',
      address: '6500 Great Trinity Forest Way',
      city: 'Dallas',
      state: 'TX',
      zip: '75217',
      phone: '214-398-8722',
      fax: '214-398-8722',
      openTime: '9:00am',
      closeTime: '4:00pm',
      timeZone: 'America/Chicago',
    },
    {
      id: '2',
      name: 'Constitution Marsh Audubon Center and Sanctuary',
      address: '127 Warren Landing Rd',
      city: 'Garrison',
      state: 'NY',
      zip: '10524',
      phone: '845-265-2601',
      fax: '845-265-2601',
      openTime: '9:00am',
      closeTime: '5:00pm',
      timeZone: 'America/New_York',
    },
    {
      id: '3',
      name: 'Montezuma Audubon Center',
      address: '2295 State Route 89',
      city: 'Savannah',
      state: 'NY',
      zip: '13146',
      phone: '315-365-3588',
      fax: '315-365-3588',
      openTime: '9:00am',
      closeTime: '4:00pm',
      timeZone: 'America/New_York',
    },
  ]);
});
