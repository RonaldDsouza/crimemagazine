import { useState, useEffect, useRef } from 'react';
import styles from '@styles/Coming.module.css'; // Update the import path accordingly

import Script from 'next/script';

const ComingSoon = ({ movie, poster }) => {
  const timingRef = useRef(null);

  
  useEffect(() => {
    const customDate = new Date();
    customDate.setHours(customDate.getHours() + 24);
    const endTime = customDate.getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const x = endTime - now;

      if (x > 0) {
        const hours = Math.floor((x % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((x % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((x % (1000 * 60)) / 1000);
        const time = `${hours}h : ${mins}m : ${secs}s`;
        timingRef.current.innerHTML = time;
      } else {
        timingRef.current.innerHTML = 'Countdown expired';
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <div
      className={styles['content-container']}
      style={{ backgroundImage: `url(${poster})` }}
    >
      <div className={styles.content}>
        <h2>Coming Soon</h2>
        <div className={styles.timing} ref={timingRef}>
          24h : 00m : 00s
        </div>
        <p>
          We Are currently Working on the Movie or Tv Show. Please Check After Some Time  
        </p>
        {/* <a href="/Movies">Learn More</a> */}
      </div>
      {/* <Script src="../../propler/ads.js" defer /> */}
    </div>
    </>
  );
};

export default ComingSoon;