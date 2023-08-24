import React, { useEffect, useState } from 'react';
import clock from '../../public/clock.png';
import { format } from 'date-fns';
import classes from '../../styles/topmenu.module.scss';

export const TopMenu: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <span>Today</span>

      <div className={classes.topmenu__time}>
        <span>{format(time, 'dd MMM, yyyy')}</span>
        <img src={clock.src} alt="clock" height="15px" />
        <span>{format(time, 'hh:mm a')}</span>
      </div>
    </div>
  );
};
