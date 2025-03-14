import { DateTime } from 'luxon';
import { FC, Fragment } from 'react';
import styles from '../../styles/Appointments.module.css';
import { TimeSlot } from '../TimeSlot';

interface BirdWalkEvent {
  startTime: string;
  endTime: string;
  length: number;
  centerId: string;
}

interface Props {
  events: BirdWalkEvent[];
}

export const Appointments: FC<Props> = ({ events }) => {
  return (
    <Fragment>
      <p className={styles.description}>
        We have some Bird Walk slots available for you.
      </p>
      <div className={styles.appointments}>
        {events.map((birdWalkEvent) => {
          const { centerId, startTime, endTime } = birdWalkEvent;
          const condensedTime =
            DateTime.fromISO(startTime).toFormat('LLddHHmm');

          return (
            <TimeSlot
              key={`${centerId}-${condensedTime}`}
              endTime={endTime}
              startTime={startTime}
            />
          );
        })}
      </div>
    </Fragment>
  );
};
