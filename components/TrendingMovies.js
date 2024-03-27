// import { useState, useEffect } from 'react';

// const TrendingMovies = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     fetch("/movies.json")
//       .then((response) => response.json())
//       .then((data) => {
//         setMovies(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching movie data:", error);
//       });
//   }, []);

//   return (
//     <div className="container">
//     <style jsx>{`

//       .container {
//         width: 100%;
//         max-width: 1200px; /* Set maximum width */
//         height: 500px; /* Set fixed height */
//         overflow-y: auto; /* Enable vertical scrolling */
//         margin: 0 auto; /* Center the container */
//       }

//       .playlist_scrol {
//         list-style: none;
//         padding: 0;
//         margin: 0;
//         display: flex;
//         flex-wrap: wrap;
//         justify-content: center; /* Center align items */
//       }

//       .palylist-video {
//         margin-right: 10px;
//         margin-bottom: 10px;
//         width: calc(50% - 10px); /* Set width for two images side by side */
//         box-sizing: border-box;
//         position: relative;
//         overflow: hidden;
//       }

//       .palylist-video .w-img {
//         display: block;
//         text-align: center;
//         text-decoration: none;
//         position: relative;
//         transition: transform 0.3s ease; /* Add zoom effect transition */
//       }

//       .palylist-video .w-img:hover {
//         transform: scale(1.03); /* Zoom effect on hover */
//       }

//       .palylist-video img {
//         width: 100%; /* Set image width to fill its container */
//         height: auto; /* Let the height adjust automatically */
//         object-fit: cover; /* Ensure the image covers the entire space */
//         border-radius: 10%;
//         border: 2px solid #40d7bc;
//         filter: contrast(1.2) saturate(1.8) hue-rotate(0deg);

//       }

//       @media (max-width: 768px) {
//         .container {
//           height: auto; /* Adjust height for smaller screens */
//         }
//       }
//     `}</style>
//     <div className="col-xl-3 nopadding">
//       <div className="section title-wrapper text-center mb-15">
//         <h2 className="mb-10 animate-pulse" style={{ color: '#40D7BC', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh', textShadow: '3px 5px 5px #000' }}>
//           &#x1F604;Trending Movies &#128515;
//         </h2>
//       </div>
//       <ul className="playlist_scrol">
//         {movies.map((movie, index) => (
//           <li key={index} className="palylist-video">
//             <a className="w-img" href={`/${movie["movie.watch"]}`}>
//               <img src={`/wp-content/uploads/2023/06/${movie.poster}`} alt={movie.title} />
//             </a>
//           </li>
//         ))}
//         <li className="post-item">
//           <span itemscope itemtype="http://schema.org/Thing">
//             <a className="post-title" href="" itemprop="url" rel="bookmark" title=""><span itemprop="name"></span></a>
//           </span>
//         </li>
//       </ul>
//     </div>
//     </div>
//   );
// };

// export default TrendingMovies;

// import { useState, useEffect } from 'react';

// const TrendingMovies = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     fetch("/movies.json")
//       .then((response) => response.json())
//       .then((data) => {
//         setMovies(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching movie data:", error);
//       });
//   }, []);

//   return (
//     <div className="container">
//       <style jsx>{`
//         .container {
//           width: 100%;
//           max-width: 1200px;
//           height: 500px;
//           overflow-y: auto;
//           margin: 0 auto;
//           border: 5px solid #000; /* Added border to container */

//         }

//         .playlist_scrol {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: center;

//         }

//         .palylist-video {
//           margin-right: 10px;
//           margin-bottom: 10px;
//           width: calc(50% - 10px);
//           box-sizing: border-box;
//           position: relative;
//           overflow: hidden;

//         }

//         .palylist-video .w-img {
//           display: block;
//           text-align: center;
//           text-decoration: none;
//           position: relative;
//           transition: transform 0.3s ease;

//         }

//         .palylist-video .w-img:hover {
//           transform: scale(1.03);
//         }

//         .palylist-video img {
//           width: 100%;
//           height: auto;
//           max-height: 100%;
//           object-fit: contain;
//           border-radius: 10px;

//           border: 2px solid #40d7bc;
//           filter: contrast(1.2) saturate(1.8) hue-rotate(0deg);
//         }

//         @media (max-width: 768px) {
//           .container {
//             height: auto;
//             max-height: 80vh;

//           }
//         }
//       `}</style>
//       <div className="col-xl-3 nopadding">

//         <ul className="playlist_scrol">
//           {movies.map((movie, index) => (
//             <li key={index} className="palylist-video">
//               <a className="w-img" href={`/${movie["movie.watch"]}`}>
//                 <img src={`/wp-content/uploads/2023/06/${movie.poster}`} alt={movie.title} />
//               </a>
//             </li>
//           ))}
//           <li className="post-item">
//             <span itemscope itemtype="http://schema.org/Thing">
//               <a className="post-title" href="" itemprop="url" rel="bookmark" title=""><span itemprop="name"></span></a>
//             </span>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default TrendingMovies;

import { useState, useEffect } from 'react'

const TrendingMovies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('/movies.json')
      .then(response => response.json())
      .then(data => {
        setMovies(data)
      })
      .catch(error => {
        console.error('Error fetching movie data:', error)
      })
  }, [])

  return (
    <div className='container'>
      <style jsx>{`
        .container {
          width: 100%;
          max-width: 1200px;
          height: 500px;
          overflow-y: auto;
          margin: 0 auto;
          border: 5px solid rgba(0, 0, 0, 0); /* Transparent border */
          box-shadow: 0 0 10px rgba(0, 0, 0, 1.5); /* Shadow effect */
        }

        .playlist_scrol {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .palylist-video {
          margin-right: 10px;
          margin-bottom: 10px;
          width: calc(
            33.33% - 20px
          ); /* Adjust width for three images side by side */
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }

        .palylist-video .w-img {
          display: block;
          text-align: center;
          text-decoration: none;
          position: relative;
          transition: transform 0.3s ease;
        }

        .palylist-video .w-img:hover {
          transform: scale(1.03);
        }

        .palylist-video img {
          width: 100%;
          height: auto;
          max-height: 100%;
          object-fit: contain;
          border-radius: 10px;
          border: 2px solid #40d7bc;
          filter: contrast(1.2) saturate(1.5) brightness(1.4) hue-rotate(0deg);
        }

        @media (max-width: 1200px) {
          .palylist-video {
            width: calc(
              50% - 20px
            ); /* Adjust width for two images side by side */
          }
        }

        @media (max-width: 768px) {
          .container {
            height: auto;
            max-height: 80vh;
          }
          .palylist-video {
            width: calc(
              50% - 20px
            ); /* Adjust width for two images side by side */
          }
        }
      `}</style>
      <div className='col-xl-3 nopadding'>
        <ul className='playlist_scrol'>
          {movies.map((movie, index) => (
            <li key={index} className='palylist-video'>
              <a className='w-img' href={`/${movie['movie.watch']}`}>
                <img
                  src={`/wp-content/uploads/2023/06/${movie.poster}`}
                  alt={movie.title}
                  style={{
                    filter:
                      'contrast(1.2) saturate(1.5) brightness(1.4) hue-rotate(0deg)'
                  }}
                />
              </a>
            </li>
          ))}
          <li className='post-item'>
            <span itemscope itemtype='http://schema.org/Thing'>
              <a
                className='post-title'
                href=''
                itemprop='url'
                rel='bookmark'
                title=''
              >
                <span itemprop='name'></span>
              </a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TrendingMovies
