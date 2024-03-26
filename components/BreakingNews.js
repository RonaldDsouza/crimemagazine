import React from 'react'

const BreakingNews = () => {
  return (
    <section
      id='breakingnews'
      className='tranding-nav-section'
      style={{ minHeight: '24px', overflow: 'hidden' }}
    >
      <div className='container'>
        <div className='row px-md-3'>
          <div className='col-12'>
            <a href='https://www.mid-day.com/notifications/'>
              <div
                className='tranding-tab animate-pulse'
                alt='Latest News'
                title='Latest News'
                style={{
                  color: '#FF0000',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '10vh',
                  textShadow: '3px 5px 5px #000',
                  minHeight: '24px',
                  overflow: 'hidden',
                  fontSize: '40px',
                  fontWeight: 'bold'
                }}
              >
                Breaking News
              </div>
            </a>
            <div
              className='breaking-news-marquee'
              style={{
                color: '#000',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '10vh',
                textShadow: '3px 5px 5px #000',
                minHeight: '24px',
                overflow: 'hidden',
                marginBottom: '20px',
                fontSize: '30px'
              }}
            >
              <ul className='breaking-news-list'>
                <li>
                  <a href='https://www.mid-day.com/mumbai/mumbai-news/article/man-held-for-intruding-into-air-force-station-near-mumbai-has-intellectual-disabilities-says-police-23341435?mumbai-mumbai-crime-news-article-breakingnews'>
                    Man held for intruding into Air Force station near Mumbai
                    has intellectual disabilities, says Police
                  </a>
                </li>
                <li>
                  <a href='https://www.mid-day.com/mumbai/mumbai-news/article/thane-injured-deer-rescued-from-top-of-hill-in-yeoor-23341432?mumbai-mumbai-crime-news-article-breakingnews'>
                    Thane: Injured deer rescued from top of hill in Yeoor
                  </a>
                </li>
                <li>
                  <a href='https://www.mid-day.com/mumbai/mumbai-crime-news/article/mumbai-fake-pa-of-devendra-fadnavis-among-two-held-for-duping-man-23341429?mumbai-mumbai-crime-news-article-breakingnews'>
                    Mumbai: Fake 'PA' of Devendra Fadnavis among two held for
                    duping man
                  </a>
                </li>
                <li>
                  <a href='https://www.mid-day.com/mumbai/mumbai-news/article/two-mumbai-men-drown-in-mine-filled-with-water-in-dahisar-23341427?mumbai-mumbai-crime-news-article-breakingnews'>
                    Two Mumbai men drown in mine filled with water in Dahisar
                  </a>
                </li>
                <li>
                  <a href='https://www.mid-day.com/mumbai/mumbai-news/article/mumbai-bmcs-nullah-cleaning-work-on-the-slow-track-23341317?mumbai-mumbai-crime-news-article-breakingnews'>
                    Mumbai: BMC’s nullah cleaning work on the slow track
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .breaking-news-marquee {
          overflow: hidden;
          white-space: nowrap;
        }
        .breaking-news-list {
          display: inline-block;
          animation: marquee 60s linear infinite;
        }
        .breaking-news-list:hover {
          animation-play-state: paused;
        }
        .breaking-news-list li {
          display: inline-block;
          margin-right: 20px;
        }
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  )
}

export default BreakingNews
