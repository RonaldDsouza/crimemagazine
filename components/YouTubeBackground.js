import { useState, useEffect } from 'react';

const YouTubeBackground = ({ movieId }) => {
  const [movieData, setMovieData] = useState(null);
  let player;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch('/movies.json');
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
    const onYouTubeIframeAPIReady = () => {
      if (!movieData) return;
      const videoId = movieData.videoId;
      initializePlayer(videoId);
    };

    const initializePlayer = videoId => {
      player = new YT.Player('player', {
        width: '100%',
        height: '300%',
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          loop: 1,
          mute: 1,
          controls: 0,
          modestbranding: 1,
          playsinline: 1,
          disablekb: 1,
          origin: window.location.origin
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange
        }
      });
    };

    const onPlayerReady = event => {
      event.target.setVolume(0); // Mute the video
    };

    const onPlayerStateChange = event => {
      if (event.data === YT.PlayerState.ENDED) {
        player.seekTo(0);
        player.playVideo();
      }
    };

    if (typeof window !== 'undefined' && typeof YT === 'undefined') {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    } else {
      onYouTubeIframeAPIReady();
    }
  }, [movieData]);

  useEffect(() => {
 
    const playerDiv = document.createElement('div');
    playerDiv.id = 'player';
    playerDiv.style.position = 'fixed';
    playerDiv.style.top = '0';
    playerDiv.style.left = '0';
    playerDiv.style.width = '100%';
    playerDiv.style.height = '100%';
    playerDiv.style.zIndex = '-1';
    playerDiv.style.opacity = '0.9'; // Adjust the opacity as needed
    document.body.appendChild(playerDiv);

    const scriptTag = document.createElement('script');
    scriptTag.src = 'https://www.youtube.com/iframe_api';
    scriptTag.async = true;
    document.body.appendChild(scriptTag);

    window.onYouTubeIframeAPIReady = () => {
      new YT.Player('player', {
        width: '100%',
        height: '300%',
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          loop: 1,
          modestbranding: 1,
          mute: 0,
          playsinline: 1
        }
      });
    };

    return () => {
      const player = document.getElementById('player');
      if (player) {
        player.remove();
        delete window.onYouTubeIframeAPIReady;
      }
    };
  }, []);

  useEffect(() => {
    const handleContextMenu = e => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return null;
};

export default YouTubeBackground;
