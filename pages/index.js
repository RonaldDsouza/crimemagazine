import Head from 'next/head'
import ArticleCard from '../components/ArticleCard'
import BreakingNews from '../components/BreakingNews'

export default function Home ({ articles }) {
  return (
    <div
      className='w-full  mx-auto py-8 px-4'
      style={{
        backgroundColor: 'rgb(192, 192, 192)'
      }}
    >
      <Head>
        <title>Crime Magazine | The Darkest Crime And Evil Minds.</title>
        <meta
          name='description'
          content='Crime Magazine | The Darkest Crime And Evil Minds.'
        />
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Crime Magazine | The Darkest Crime And Evil Minds.'
        />
        <meta name='keywords' content={articles && articles.keywords} />

        <meta
          property='og:title'
          content='Crime Magazine | The Darkest Crime And Evil Minds.'
        />
        <meta
          property='og:description'
          content='Crime Magazine | The Darkest Crime And Evil Minds.'
        />
        <meta property='og:site_name' content='Crime Magazine' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://crimemagazine.vercel.app/' />
        <meta property='og:image' content='https://crimemagazine.vercel.app/logo.png' />
        <meta property='og:image:type' content='image/png' />
        <meta name='dailymotion-domain-verification' content='dmqy1s4atw72q97l8' />
        <meta property='fb:page_id' content='101982830708' />
        <meta property='fb:app_id' content='854936678691784' />
        <meta name='twitter:site' content='@mid_day' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='robots' content='index, follow, noodp, noydir' />
        <link rel='canonical' href='https://crimemagazine.vercel.app/' />
        <meta name="google-site-verification" content="49WAkeHVyYLOO41vqw4JPOE4QOR244MUbadgZ4k3WcE" />
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
        <p className="text-lg text-center mb-8"  style={{
              textShadow: '1px 1px 1px #000',
                      
            }}>
    Welcome to Crime Magazine, your premier destination for in-depth coverage of crime-related news in India. Our platform curates the most compelling stories from reliable sources, offering a comprehensive look into the world of crime. Through a blend of audio, video, and images sourced from reputable channels, we strive to present the truth behind each incident.

    From high-profile cases to lesser-known events, we delve deep into the details, providing our readers with a nuanced understanding of the crime landscape in India. Our commitment to accuracy and reliability ensures that every story we deliver is thoroughly researched and fact-checked.

    At Crime Magazine, we aim to shed light on the complexities of crime while offering insights into its impact on society. Join us as we uncover the truth behind the headlines and explore the realities of the crime world in India.
  </p>
        <BreakingNews />
        <ArticleCard />
      </main>
    </div>
  )
}

export async function getServerSideProps () {
  try {
    const res = await fetch('/crime.json')
    const data = await res.json()
    const articles = data.articles

    return {
      props: {
        articles
      }
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    return {
      props: {
        articles: [] // Return an empty array if there's an error
      }
    }
  }
}
