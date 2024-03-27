
// import { useState, useEffect } from 'react';

// const DailyMotionBackground = ({ movieId }) => {
//   const [movieData, setMovieData] = useState(null);

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       try {
//         const response = await fetch(`/movies.json`);
//         const data = await response.json();
//         const movie = data.find(movie => movie.id === movieId);
//         setMovieData(movie);
//       } catch (error) {
//         console.error('Error fetching movie data:', error);
//       }
//     };

//     fetchMovieDetails();
//   }, [movieId]);

//   useEffect(() => {
//     if (movieData) {
//       const playerDiv = document.createElement('div');
//       playerDiv.id = 'player';
//       playerDiv.style.position = 'fixed';
//       playerDiv.style.top = '0';
//       playerDiv.style.left = '0';
//       playerDiv.style.width = '100%';
//       playerDiv.style.height = '100%';
//       playerDiv.style.zIndex = '-1';
//       playerDiv.style.opacity = '0.7'; // Adjust the opacity as needed
//       document.body.appendChild(playerDiv);

//       const scriptTag = document.createElement('script');
//       scriptTag.src = 'https://api.dmcdn.net/all.js'; // Dailymo	tion script URL
//       scriptTag.async = true;
//       document.body.appendChild(scriptTag);

//       scriptTag.onload = () => {
//         DM.init();
//         const player = DM.player('player', {
//           video: movieData.video,
//           width: '100%',
//           height: '100%',
//           params: {
//             autoplay: true,
//             mute: true,
//             background: true,
//             Autoquality: '1080p', // Set quality to HD 1080p
//             uiLogo: false,
//             // filter: 'contrast(1.2) saturate(1.5) brightness(1.3) hue-rotate(0deg)',
//             loop: true, // Add loop parameter to loop the video
//             'queue-autoplay-next': false, // Prevent transitioning to other videos after completion
//             'queue-enable': false, // Prevent Recommended videos (playlist) from displaying
//             'endscreen-enable': false, // Remove the playlist segment at the end
//             aspectRatio: '16:9', // Set the aspect ratio to 16:9
//           }
//         });
//         player.addEventListener('playback:finished', () => {
//           player.seek(0); // Restart the video when finished
//           player.play();
//         });
//       };
//     }

//     return () => {
//       const player = document.getElementById('player');
//       if (player) {
//         player.remove();
//       }
//     };
//   }, [movieData]);

//   useEffect(() => {
//     const handleContextMenu = e => {
//       e.preventDefault();
//     };
//     document.addEventListener('contextmenu', handleContextMenu);
//     return () => {
//       document.removeEventListener('contextmenu', handleContextMenu);
//     };
//   }, []);

//   return null;
// };

// export default DailyMotionBackground;




import React, { useState, useEffect } from 'react';
import styles from '../styles/BackgroundVideo.module.css';

const DailyMotionBackground = ({ movieId }) => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`/movies.json`);
        const data = await response.json();
        const movie = data.find(movie => movie.id === movieId);
        setMovieData(movie);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  useEffect(() => {
    const handleContextMenu = e => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <div className={styles.backgroundContainer}>
      {movieData && (
        <iframe
          className={styles.backgroundIframe}
          src={`https://geo.dailymotion.com/player/xjrxe.html?video=${movieData.video}&autoquality=1080p&mute=true`}
          frameBorder="0"
          title="Dailymotion Video Player"
          allow="autoplay; fullscreen"
          mute='true'
          aspectRatio= '16:9' // Set the aspect ratio to 16:9
        ></iframe>
      )}
    </div>
  );
};

export default DailyMotionBackground;


