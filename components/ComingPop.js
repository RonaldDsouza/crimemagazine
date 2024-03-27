import { useState, useEffect } from 'react';
import styles from '../styles/Comingpop.module.css';

const ComingPop = ({ poster }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000); // Display the popup after 30 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) {
    return null; // Return null to hide the popup
  }

  return (
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

    <div class="fixed inset-0 bg-black bg-opacity-100 transition-opacity"></div>
    <div className={styles['popup-overlay']}>
      <div className={styles['popup-container']}>
        <div
          className={styles['content-container']}
          style={{ backgroundImage: `url(${poster})` }}
        >
          <h2>Coming Soon</h2>
          <div className={styles.timing}>
            <Timer />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
            cupiditate tempore, sapiente dicta, iusto atque!
          </p>
          <a href="/Movies">Learn More</a>
          
          <div className="items-center justify-center py-5">
          <a href="/Movies" button className={styles['close-button']}  onClick={handleClose}>
            Close
          </a>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

const Timer = () => {
  const [time, setTime] = useState('24h : 00m : 00s');

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
        setTime(time);
      } else {
        setTime('Countdown expired');
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <span>{time}</span>;
};

export default ComingPop;
//<ComingPop poster={movie.poster} />