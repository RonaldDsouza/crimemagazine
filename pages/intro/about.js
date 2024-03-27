import React from 'react'
import Head from 'next/head'

const about = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/article-image.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Head>
        <title>Crime Magazine | About Us</title>
        <meta
          name='description'
          content='Crime Magazine | The Darkest Crime And Evil Minds.'
        />
        <meta
          name='robots'
          content='max-snippet:-1, max-image-preview:large, max-video-preview:-1'
        />
        <meta
          name='keywords'
          content='india news, india news headlines, india local news, india daily news, india newspaper, latest news, india headlines, india news today, india news, top news, breaking news, current news, current news updates, news updates, online newspaper, bollywood, sports, life and style, crime, news portal '
        />
        <meta name='revisit-after' content='1 days' />
        <meta property='og:locale' content='en_US' />
        <meta name='robots' content='index, follow' />
        <link rel='icon' type='image/x-icon' href='favicon.ico' />
        <meta
          property='og:site_name'
          content='Crime Magazine | The Darkest Crime And Evil Minds.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:image:height' content='1280' />
        <meta property='og:image:width' content='720' />
        <meta
          property='og:title'
          content='Crime Magazine | The Darkest Crime And Evil Minds.'
        />
        <meta
          property='og:description'
          content='Crime Magazine | The Darkest Crime And Evil Minds.'
        />
        <meta property='og:url' content='https://crimemagazine.vercel.app/' />
        <meta property='og:image:type' content='image/jpeg' />
        <meta
          property='og:image'
          content='https://crimemagazine.vercel.app/og_image.jpg'
        />
        <meta
          property='og:image:secure_url'
          content='https://crimemagazine.vercel.app/og_image.jpg'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Crime Magazine | The Darkest Crime And Evil Minds.'
        />
        <meta
          name='twitter:description'
          content='Crime Magazine | The Darkest Crime And Evil Minds.'
        />
        <meta
          name='twitter:image'
          content='https://crimemagazine.vercel.app/og_image.jpg'
        />
        <meta
          name='google-site-verification'
          content='49WAkeHVyYLOO41vqw4JPOE4QOR244MUbadgZ4k3WcE'
        />
      </Head>

      <main className='container mx-auto py-8 px-4'>
        <h1
          className='text-4xl font-bold text-center mb-8'
          style={{
            color: '#FF0000',
            justifyContent: 'center',
            alignItems: 'center',
            textShadow: '3px 5px 5px #000',
            fontWeight: 'bold'
          }}
        >
          Welcome to Crime Magazine.
        </h1>
        <p
          className='text-lg text-center mb-8'
          style={{ color: '#fff', textShadow: '1px 1px 1px #000' }}
        >
          Welcome to Crime Magazine, your premier destination for in-depth
          coverage of crime-related news in India. Our platform curates the most
          compelling stories from reliable sources, offering a comprehensive
          look into the world of crime. Through a blend of audio, video, and
          images sourced from reputable channels, we strive to present the truth
          behind each incident. From high-profile cases to lesser-known events,
          we delve deep into the details, providing our readers with a nuanced
          understanding of the crime landscape in India. Our commitment to
          accuracy and reliability ensures that every story we deliver is
          thoroughly researched and fact-checked. At Crime Magazine, we aim to
          shed light on the complexities of crime while offering insights into
          its impact on society. Join us as we uncover the truth behind the
          headlines and explore the realities of the crime world in India.
        </p>

        <div className='container my-24 px-6 mx-auto'>
          <p
            className='text-gray-500 mb-6'
            style={{ color: '#fff', textShadow: '1px 1px 1px #000' }}
          >
            Please Contact the Email ID : crimemagazineid@gmail.com
          </p>
          {/* Add your content here */}
        </div>
      </main>
    </div>
  )
}

export default about
