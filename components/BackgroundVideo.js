import React, { useState, useEffect } from 'react';
import styles from '../styles/BackgroundVideo.module.css';
import Link from 'next/link'
import ShareButtons from '@components/ShareButtons';

const BackgroundVideo = ({ src, srcMobile }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking((prevState) => !prevState);
    }, 500);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="background-video">
      <video autoPlay loop muted playsInline className={styles.video}>
        <source src={isMobile ? srcMobile : src} type="video/mp4" />
      </video>
  
      <div className={styles.overlay}>
      
      

        <div className="text-center">
    
     
          <Link href="/Movies">
          <button
      className={`relative inline-flex items-center rounded-3xl  my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br ${
        isBlinking ? "from-red-600 to-blue-500" : "from-blue-500 to-red-600"
      } group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-120 hover:scale-110 cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0`}
    >
      Enter Free
    </button>
 
          </Link>
        </div>
      
      </div>
    
    </div>
      

       
  );
};

export default BackgroundVideo;
