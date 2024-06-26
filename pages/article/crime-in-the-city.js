import React, { useState, useEffect, useRef } from 'react'
import styles from '@styles/video-player.module.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import BreakingNews from '@components/BreakingNews'
import AutoDeleteArticle from '@components/AutoDeleteArticle'
import Head from 'next/head'

const CrimeInTheCityPage = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  const [article, setArticle] = useState(null)

  useEffect(() => {
    fetchArticleData('1')
      .then(data => {
        setArticle(data)
      })
      .catch(error => {
        console.error('Error fetching article data:', error)
      })
  }, [])

  // const videoId = article && article.video

  // useEffect(() => {
  //   // Initialize the YouTube Player API
  //   const tag = document.createElement('script')
  //   tag.src = 'https://www.youtube.com/iframe_api'
  //   const firstScriptTag = document.getElementsByTagName('script')[0]
  //   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

  //   // Create the player when the API is ready
  //   window.onYouTubeIframeAPIReady = () => {
  //     new window.YT.Player('youtube-player', {
  //       height: '360',
  //       width: '640',
  //       videoId: videoId, // Pass the extracted video ID
  //       playerVars: {
  //         autoplay: 1,
  //         mute: 1,
  //        playsinline: 1
  //       }
  //     })
  //   }
  // }, [videoId])

  const videoIds = article && article.video // Assuming article.video is an array of video IDs
  const playerRef = useRef(null) // Reference to the YouTube player instance
  const currentIndexRef = useRef(0) // Reference to keep track of the current video index

  useEffect(() => {
    // Initialize the YouTube Player API
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

    // Create the player when the API is ready
    window.onYouTubeIframeAPIReady = () => {
      // Create a new player instance
      playerRef.current = new window.YT.Player('youtube-player', {
        height: '360',
        width: '640',
        videoId: videoIds[currentIndexRef.current], // Play the first video
        playerVars: {
          autoplay: 1,
          mute: 1,
          playsinline: 1,
          enablejsapi: 1 // Enable JavaScript API for controlling the player
        },
        events: {
          onStateChange: event => {
            if (event.data === window.YT.PlayerState.ENDED) {
              // If video has ended, move to the next video or loop back to the beginning
              currentIndexRef.current =
                (currentIndexRef.current + 1) % videoIds.length
              playerRef.current.loadVideoById({
                videoId: videoIds[currentIndexRef.current],
                startSeconds: 0 // Start from the beginning of the next video
              })
            }
          }
        }
      })
    }
  }, [videoIds])

  if (!article) {
    return (
      <div
        style={{
          marginTop: '200px',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          padding: '30px',
          width: '300px',
          height: '300px',
          margin: 'auto'
        }}
      >
        <script src='https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js'></script>
        <lottie-player
          src='https://lottie.host/e464e1f9-5f31-40e4-aa92-4ac938922fa2/cWvdLv7onO.json'
          background='#fff'
          speed='1'
          style={{ width: '100%', height: '100%' }}
          loop
          autoplay
          direction='1'
          mode='normal'
        ></lottie-player>
      </div>
    )
  }

  const PrevArrow = props => <></>
  const NextArrow = props => <></>

  const articles = [
    { id: 1, title: 'Article 1', delete: 'After 24 Hours' },
    { id: 2, title: 'Article 2', delete: 'After 48 Hours' },
    { id: 3, title: 'Article 3', delete: 'After 96 Hours' }
    // Add more articles as needed
  ]

  const handleDeleteArticle = articleId => {
    // Implement deletion logic here
  }

  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  }

  const rankMathSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@context': 'https://schema.org',
        mainEntityOfPage: `${article.url}`,
        '@type': 'NewsArticle',
        url: `${article.url}`,
        articleBody: `${article.articleBody}`,
        articleSection: `${article.articleSection}`,
        headline: `${article.title}`,
        description: `${article.description}`,
        keywords: [`${article.keywords}`],
        author: {
          '@type': 'Person',
          name: `${article.author}`
        },
        datePublished: `${article.datePublished}`,
        dateModified: `${article.dateModified}`,
        image: {
          '@type': 'ImageObject',
          width: '1280px',
          height: '720px',
          url: `${article.image}`
        },
        publisher: {
          '@type': 'Organization',
          name: 'Crime Magazine',
          logo: {
            '@type': 'ImageObject',
            width: '400px',
            height: '100px',
            url: 'https://crimemagazine.vercel.app/logo.png'
          },
          url: 'https://crimemagazine.vercel.app/'
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: '1',
            item: {
              '@id': 'https://crimemagazine.vercel.app',
              name: 'Home'
            }
          },
          {
            '@type': 'ListItem',
            position: '2',
            item: {
              '@id': 'https://crimemagazine.vercel.app/about',
              name: 'About'
            }
          },
          {
            '@type': 'ListItem',
            position: '3',
            item: {
              '@id': 'https://crimemagazine.vercel.app/contact',
              name: 'Contact'
            }
          }
        ]
      }
    ]
  })

  const blogSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Person', 'Organization'],
        '@id': 'https://gravatar.com/drtrailer2022/#person',
        name: 'Dr Trailer'
      },
      {
        '@type': 'WebSite',
        '@id': 'https://crimemagazine.vercel.app/#website',
        url: 'https://crimemagazine.vercel.app/',
        name: 'Crime Magazine™',
        publisher: {
          '@id': 'https://gravatar.com/drtrailer2022/#person'
        },
        inLanguage: 'en-US'
      },
      {
        '@type': 'WebPage',
        '@id': `${article.url}#webpage`,
        url: `${article.url}`,
        name: `${article.name} | Crime Magazine™`,
        datePublished: `${article.datePublished}`,
        dateModified: `${article.dateModified}`,
        isPartOf: {
          '@id': 'https://crimemagazine.vercel.app/#website'
        },
        inLanguage: 'en-US'
      },
      {
        '@type': 'Person',
        '@id': 'https://crimemagazine.vercel.app/author/crimemagazine/',
        name: 'Dr Trailer',
        url: 'https://crimemagazine.vercel.app/author/crimemagazine/',
        image: {
          '@type': 'ImageObject',
          '@id': 'https://gravatar.com/drtrailer2022',
          url: 'https://gravatar.com/drtrailer2022',
          caption: 'Dr Trailer',
          inLanguage: 'en-US'
        },
        sameAs: ['https://crimemagazine.vercel.app/']
      },
      {
        '@type': 'BlogPosting',
        '@id': `${article.url}#blogPost`,
        headline: `${article.name} | Crime Magazine™`,
        datePublished: `${article.datePublished}`,
        dateModified: `${article.dateModified}`,
        articleSection: `${article.articleSection}`,
        author: {
          '@id': 'https://crimemagazine.vercel.app/author/crimemagazine/'
        },
        publisher: {
          '@id': 'https://gravatar.com/drtrailer2022/#person'
        },
        description:
          'Welcome to Crime Magazine, your premier destination for in-depth coverage of crime-related news in India. Our platform curates the most compelling stories from reliable sources, offering a comprehensive look into the world of crime. Through a blend of audio, video, and images sourced from reputable channels, we strive to present the truth behind each incident. From high-profile cases to lesser-known events, we delve deep into the details, providing our readers with a nuanced understanding of the crime landscape in India. Our commitment to accuracy and reliability ensures that every story we deliver is thoroughly researched and fact-checked. Join us as we uncover the truth behind the headlines and explore the realities of the crime world in India.',
        image: article.image,
        name: `${article.name} | Crime Magazine™`,
        '@id': `${article.url}#richSnippet`,
        isPartOf: {
          '@id': `${article.url}#webpage`
        },
        inLanguage: 'en-US'
      }
    ]
  })

  // const ldJsonData = JSON.stringify(
  //    {
  //     '@context': 'https://schema.org',
  //     '@type': 'BreadcrumbList',
  //     itemListElement: [
  //       {
  //         '@type': 'ListItem',
  //         position: '1',
  //         item: {
  //           '@id': 'https://crimemagazine.vercel.app',
  //           name: 'Home'
  //         }
  //       },
  //       {
  //         '@type': 'ListItem',
  //         position: '2',
  //         item: {
  //           '@id': 'https://crimemagazine.vercel.app/about',
  //           name: 'About'
  //         }
  //       },
  //       {
  //         '@type': 'ListItem',
  //         position: '3',
  //         item: {
  //           '@id': 'https://crimemagazine.vercel.app/contact',
  //           name: 'Contact'
  //         }
  //       }
  //     ]
  //   }
  // )

  return (
    <div
      className='w-full mx-auto py-8 px-4'
      style={{
        backgroundColor: 'rgb(192, 192, 192)'
      }}
    >
      <Head>
        <meta
          name='robots'
          content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        />
        <title> {article && article.name} | Crime Magazine</title>
        <link rel='canonical' href={article && article.url} />
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content='index,follow' />
        <meta name='revisit-after' content='1 days' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content={`${article && article.name} - Crime Magazine`}
        />
        <meta
          property='og:description'
          content={`${
            article && article.name
          } | The Darkest Crime And Evil Minds`}
        />
        <meta
          name='description'
          content='Crime Magazine | The Darkest Crime And Evil Minds.'
        />
        <meta property='og:url' content={`${article && article.url}`} />
        <meta name='keywords' content={`${article && article.keywords}`} />
        <meta property='og:site_name' content='Crime Magazine' />
        <meta property='og:type' content='article' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta property='article:section' content='News' />
        <meta name='author' content='admin' />
        <meta
          property='article:modified_time'
          content='2024-01-01T13:13:13+00:00'
        />
        <meta
          property='og:image'
          content='https://i.postimg.cc/xddjTW65/Animal-2023.jpg'
        />
        <meta property='og:image:width' content='1280' />
        <meta property='og:image:height' content='720' />
        <meta property='og:image:type' content='image/webp' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:label1' content='Est. reading time' />
        <meta name='twitter:data1' content='1 minute' />
        <meta
          name='google-site-verification'
          content='49WAkeHVyYLOO41vqw4JPOE4QOR244MUbadgZ4k3WcE'
        />
        <meta
          name='facebook-domain-verification'
          content='du918bycikmo1jw78wcl9ih6ziphd7'
        />
        <meta
          name='dailymotion-domain-verification'
          content='dmv6sg06w9r5eji88'
        />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: blogSchema }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: rankMathSchema }}
        />
        <script src='https://www.youtube.com/iframe_api'></script>
        {/* Webpushr tracking code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function (w, d, s, id) {
              if (typeof (w.webpushr) !== 'undefined') return;
              w.webpushr = w.webpushr || function () { (w.webpushr.q = w.webpushr.q || []).push(arguments) };
              var js, fjs = d.getElementsByTagName(s)[0];
              js = d.createElement(s); js.id = id; js.async = 1;
              js.src = "https://cdn.webpushr.com/app.min.js";
              fjs.parentNode.appendChild(js);
            }(window, document, 'script', 'webpushr-jssdk'));

            webpushr('setup', { 'key': 'BFiNtErWPSlY1EdDYECv3rzPp2d5bVs46-O6I4iILsKtA2USCyBEakKcLs7yooH4Gj36tIvYtQtpZ0qZVfhHyAU' });
          `
          }}
        />
      </Head>
      <AutoDeleteArticle articles={articles} onDelete={handleDeleteArticle} />
      <BreakingNews />
      <div className='accordion'>
        <div className='accordion-header' onClick={toggleAccordion}>
          <button
            class='accordion-button'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#collapseOne'
            aria-expanded='true'
            aria-controls='collapseOne'
          >
            <h1 className='text-4xl font-bold text-center mb-8'>
              {article.title}
            </h1>
          </button>
          {/* <h3>{title}</h3> */}

          <span
            className='read-more'
            style={{
              marginBottom: '20px'
            }}
          >
            <h3> Click to Read More..</h3>{' '}
          </span>

          <style jsx>{`
            .read-more {
              text-shadow: 1px 1px 1px #000;
              font-weight: bold;
              color: #ff0000;
              font-size: 20px;
            }
          `}</style>
        </div>
        {isOpen && (
          <div className='accordion-content'>
            <div dangerouslySetInnerHTML={{ __html: article.articleBody }} />
          </div>
        )}
      </div>
      <div
        className='max-w-4xl mx-auto'
        style={{
          marginTop: '20px'
        }}
      >
        <Slider
          {...settings}
          nextArrow={<NextArrow />} // Hide the next arrow
          prevArrow={<PrevArrow />} // Hide the previous arrow
        >
          {article.images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Image ${index}`}
                className='w-full object-cover rounded-3xl mb-4'
                style={{
                  filter:
                    'contrast(1.2) saturate(1.5) brightness(1.4) hue-rotate(0deg)'
                }}
              />
            </div>
          ))}
        </Slider>

        <div className='flex justify-between items-center mb-4'></div>
        {/* Additional elements from the provided JSON data */}
        <div className='article-details'>
          <div
            className='detail'
            style={{
              textShadow: '1px 1px 1px #000',
              fontWeight: 'bold',
              fontSize: '16px'
            }}
          >
            <p>
              <strong
                style={{
                  color: '#FF0000'
                }}
              >
                Repoter:
              </strong>{' '}
              {article.author}
            </p>
            <p>
              <strong
                style={{
                  color: '#FF0000'
                }}
              >
                Date:
              </strong>{' '}
              {article.date}
            </p>
            <p>
              <strong
                style={{
                  color: '#FF0000'
                }}
              >
                Location:
              </strong>{' '}
              {article.location}
            </p>
          </div>
          <div
            className='detail'
            style={{
              textShadow: '1px 1px 1px #000',
              fontWeight: 'bold',
              fontSize: '16px'
            }}
          >
            <p>
              <strong
                style={{
                  color: '#FF0000'
                }}
              >
                Category:
              </strong>{' '}
              {article.category}
            </p>
            <p>
              <strong
                style={{
                  color: '#FF0000'
                }}
              >
                Sources:
              </strong>{' '}
              {article.sources}
            </p>
            <p>
              <strong
                style={{
                  color: '#FF0000'
                }}
              >
                {' '}
                Tags:
              </strong>{' '}
              {article.tags.join(', ')}
            </p>
          </div>

          <style jsx>{`
            .article-details {
              display: flex;
              justify-content: space-between;
              margin-bottom: 20px;
            }

            .detail {
              flex: 1;
            }

            .detail p {
              margin-bottom: 10px;
            }
          `}</style>
        </div>
        <div
          className='flex items-center justify-center'
          style={{
            marginBottom: '20px',
            fontFamily: 'Poppins, sans-serif'
          }}
        >
          {/* Audio Player */}
          {article.audio && (
            <audio controls className='mt-4'>
              <source src={article.audio} type='audio/mpeg' />
              Your browser does not support the audio element.
            </audio>
          )}
        </div>

        {/* <div
          style={{
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
            overflow: 'hidden'
          }}
        >
          <div
            id='youtube-player'
            className='  rounded-3xl  mr-8 flex  border-1 border-blue-600 bg-gray-600 p-2 '
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              left: '0px',
              top: '0px',
              overflow: 'hidden',
              filter:
                'contrast(1.2) saturate(1.5) brightness(1.3) hue-rotate(0deg)'
            }}
          ></div>
        
        </div> */}
        <div
          style={{
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
            overflow: 'hidden'
          }}
        >
          <div
            id='youtube-player'
            className='rounded-3xl mr-8 flex border-1 border-blue-600 bg-gray-600 p-2'
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              left: '0px',
              top: '0px',
              overflow: 'hidden',
              filter:
                'contrast(1.2) saturate(1.5) brightness(1.3) hue-rotate(0deg)'
            }}
          ></div>
        </div>

        <div className='max-w-4xl mx-auto mt-5'>
          {/* <Slider {...settings}>
            {article.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Image ${index}`}
                  className='w-full object-cover rounded-3xl mb-4'
                  style={{
                    filter:
                      'contrast(1.2) saturate(1.5) brightness(1.4) hue-rotate(0deg)'
                  }}
                />
              </div>
            ))}
          </Slider> */}
          {/* Rest of your content */}
          <style jsx>{`
            .article-details {
              display: flex;
              justify-content: space-between;
              margin-bottom: 20px;
            }

            .detail {
              flex: 1;
            }

            .detail p {
              margin-bottom: 10px;
            }

            @media screen and (max-width: 768px) {
              .article-details {
                flex-direction: column;
              }

              .detail {
                margin-bottom: 20px;
              }
            }
          `}</style>
        </div>
      </div>
    </div>
  )
}

export default CrimeInTheCityPage

async function fetchArticleData (articleId) {
  try {
    const response = await fetch('/crime.json')
    const data = await response.json()
    const article = data.find(item => item.id === parseInt(articleId))
    if (article) {
      return article
    } else {
      throw new Error(`Article data not found for ID: ${articleId}`)
    }
  } catch (error) {
    console.error('Error fetching article data:', error)
    throw error
  }
}
