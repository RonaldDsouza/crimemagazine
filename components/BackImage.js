// import React, { useState, useEffect, useRef } from 'react'

// const BackImage = ({ movieId }) => {
//   const [movieData, setMovieData] = useState(null)
//   const [showPopup, setShowPopup] = useState(true) // Set initially to true
//   const timingRef = useRef(null)

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       try {
//         const response = await fetch(`/movies.json`)
//         const data = await response.json()
//         const movie = data.find(movie => movie.id === movieId)
//         setMovieData(movie)
//       } catch (error) {
//         console.error('Error fetching movie data:', error)
//       }
//     }
  

//     fetchMovieDetails()
//   }, [movieId])

//   useEffect(() => {
//     if (!movieData) return

//     const customDate = new Date()
//     customDate.setHours(customDate.getHours() + 24)
//     const endTime = customDate.getTime()

//     const timer = setInterval(() => {
//       const now = new Date().getTime()
//       const x = endTime - now

//       if (x > 0) {
//         const hours = Math.floor((x % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//         const mins = Math.floor((x % (1000 * 60 * 60)) / (1000 * 60))
//         const secs = Math.floor((x % (1000 * 60)) / 1000)
//         const time = `${hours}h : ${mins}m : ${secs}s`
//         timingRef.current.innerHTML = time
//       } else {
//         timingRef.current.innerHTML = 'Countdown expired'
//       }
//     }, 1000)

//     return () => clearInterval(timer)
//   }, [movieData])

//   const handleClose = () => {
//     setShowPopup(false)
//   }

//   return (
//     <div>
//       {showPopup && movieData && (
//         <div className='popup-overlay'>
//           <div className='popup'>
//             <div
//               className='content-container'
//               style={{ backgroundImage: `url(${movieData.poster})` }}
//             >
//               <h2
//                 style={{ fontWeight: 'bold', textShadow: '5px 5px 2px #000' }}
//               >
//                 Coming Soon
//               </h2>
//               <div
//                 className='timing'
//                 ref={timingRef}
//                 style={{ fontWeight: 'bold', textShadow: '5px 5px 2px #000' }}
//               >
//                 24h : 00m : 00s
//               </div>
//               <p
//                 style={{
//                   color: '#000',
//                   fontSize: '25px',
//                   fontWeight: 'bold',
//                   textShadow: '5px 5px 2px #fff'
//                 }}
//               >
//                 We Are currently Working on the Movie or Tv Show. Please Check
//                 After Some Time
//               </p>
//               <div className='button-container'>
//                 <a
//                   href='../'
//                   className='close-button'
//                   onClick={handleClose}
//                   style={{
//                     fontWeight: 'bold',
//                     textShadow: '5px 5px 2px #fff'
//                   }}
//                 >
//                   Close
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

import React, { useState, useEffect, useRef } from 'react';

const BackImage = ({ movieId }) => {
  const [movieData, setMovieData] = useState(null);
  const [showPopup, setShowPopup] = useState(true);
  const [endTime, setEndTime] = useState(null);
  const [countdownExpired, setCountdownExpired] = useState(false);
  const timingRef = useRef(null);

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
    if (!movieData) return;

    const storedStartTime = localStorage.getItem('startTime');
    let startTime;
    if (storedStartTime) {
      startTime = parseInt(storedStartTime);
    } else {
      startTime = new Date().getTime();
      localStorage.setItem('startTime', startTime);
    }

    const endTime = startTime + (24 * 60 * 60 * 1000); // 24 hours
    setEndTime(endTime);
  }, [movieData]);

  useEffect(() => {
    if (!endTime) return;

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
        setCountdownExpired(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {showPopup && movieData && !countdownExpired && (
        <div className="popup-overlay">
          <div className="popup">
            <div
              className="content-container"
              style={{ backgroundImage: `url(${movieData.backimage})` }}
            >
              <h2 style={{ fontWeight: 'bold', textShadow: '5px 5px 2px #000' }}>Coming Soon</h2>
              <div className="timing" ref={timingRef} style={{ fontWeight: 'bold', textShadow: '5px 5px 2px #000' }}>
                24h : 00m : 00s
              </div>
              <p style={{ color: '#000', fontSize: '25px', fontWeight: 'bold', textShadow: '5px 5px 2px #fff' }}>
                We Are currently Working on the Movie or Tv Show. Please Check After Some Time
              </p>
              <div className="button-container">
                <a href="../" className="close-button" onClick={handleClose} style={{ fontWeight: 'bold', textShadow: '5px 5px 2px #fff' }}>
                  Close
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999; /* Set a high z-index value */
        }

        .popup {
          width: 800px;
          background-color: gray;
          padding: 10px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          animation: slide-down 0.5s ease;
          position: relative; /* Ensure the z-index works */
          z-index: 10000; /* Set a higher z-index value */
        }

        @keyframes slide-down {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }

        .content-container {
          background-repeat: no-repeat;
          background-size: cover;
          min-height: 100vh;
          padding: 20px;
          text-align: center;
        }

        .timing {
          font-size: 40px;
          font-weight: bold;
          color: white; /* Set text color to white */
        }

        .content-container h2 {
          font-size: 100px;
          font-weight: 900;
          margin: 10px;
          font-family: 'Poppins, sans-serif';
          color: white; /* Set text color to white */
        }

        .content-container p {
          margin: 0 auto;
          width: 35%;
          text-align: center;
          font-size: 18px;
          font-weight: bold;
          line-height: 1.9;
          padding: 15px 0;
          color: white; /* Set text color to white */
        }

        .content-container a {
          text-decoration: none;
          background: #fff;
          color: #111;
          padding: 10px 35px;
          border-radius: 50px;
        }

        .close-button {
          display: inline-block;
          margin-top: 50px;
          margin-bottom: 100px;
          padding: 10px 20px;
          background-color: #eaeaea;
          color: #333;
          text-decoration: none;
          border-radius: 5px;
          transition: background-color 0.3s ease;
          text-decoration: none;
          background: #fff;
          color: #111;
          padding: 10px 35px;
          border-radius: 50px;
        }

        .close-button:hover {
          background-color: #ccc;
        }

        .button-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 10px;
        }

        @media (min-width: 768px) and (max-width: 991px) {
          .content-container p {
            width: 70%;
          }
        }

        @media (max-width: 767px) {
          .content-container h2 {
            font-size: 40px;
          }
          .timing {
            font-size: 25px;
          }
          .content-container p {
            width: 95%;
          }
        }
      `}</style>
    </div>
  )
}
export default BackImage
